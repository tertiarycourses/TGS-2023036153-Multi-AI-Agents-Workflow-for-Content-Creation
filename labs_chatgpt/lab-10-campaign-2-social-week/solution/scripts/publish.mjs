// node scripts/publish.mjs <id> [--live]
// Dry run by default: prints the exact request and sends nothing.
// --live posts ONE approved, unchanged, not-yet-published item.
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { ROOT, readRows, readContent, liveBlocker, logPublish, loadEnv, mask } from './lib.mjs';

const [id, ...flags] = process.argv.slice(2);
const live = flags.includes('--live');
if (!id) { console.error('usage: node scripts/publish.mjs <id> [--live]'); process.exit(1); }

const row = readRows().find((r) => r.id === id);
if (!row) { console.error(`${id} is not in review/approvals.csv — run submit.mjs first.`); process.exit(1); }
if (live) {
  const why = liveBlocker(id);                  // defence in depth: the hook checks too
  if (why) { console.error(`REFUSED: ${why}`); process.exit(3); }
}
const { meta, body } = readContent(row.file);
const env = loadEnv();

// LinkedIn "little text": reserved characters must be escaped or the post is cut short.
// URLs are left as they are, so links keep working.
const littleText = (s) => s.split(/(https?:\/\/\S+)/).map((part, i) =>
  (i % 2 ? part : part.replace(/[\\|{}@[\]()<>#*_~]/g, (c) => `\\${c}`))).join('');

function linkedin() {
  const text = meta.link && !body.includes(meta.link) ? `${body}\n\n${meta.link}` : body;
  return {
    method: 'POST', url: 'https://api.linkedin.com/rest/posts',
    headers: { Authorization: `Bearer ${env.LINKEDIN_ACCESS_TOKEN}`, 'LinkedIn-Version': env.LINKEDIN_VERSION || '202609',
      'X-Restli-Protocol-Version': '2.0.0', 'Content-Type': 'application/json' },
    body: JSON.stringify({ author: env.LINKEDIN_AUTHOR_URN, commentary: littleText(text), visibility: 'PUBLIC',
      distribution: { feedDistribution: 'MAIN_FEED', targetEntities: [], thirdPartyDistributionChannels: [] },
      lifecycleState: 'PUBLISHED', isReshareDisabledByAuthor: false }),
    secret: env.LINKEDIN_ACCESS_TOKEN,
  };
}

function facebook() {
  const form = new URLSearchParams({ message: body, access_token: env.FB_PAGE_TOKEN || '' });
  if (meta.link) form.set('link', meta.link);
  return {
    method: 'POST', url: `https://graph.facebook.com/${env.FB_GRAPH_VERSION || 'v25.0'}/${env.FB_PAGE_ID || '<FB_PAGE_ID>'}/feed`,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: form.toString(), secret: env.FB_PAGE_TOKEN,
  };
}

function youtubeInit(token) {
  const video = join(ROOT, meta.video);
  return {
    method: 'POST',
    url: 'https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json; charset=UTF-8',
      'X-Upload-Content-Type': 'video/mp4', 'X-Upload-Content-Length': String(statSync(video).size) },
    body: JSON.stringify({
      snippet: { title: meta.title, description: body, categoryId: '27',
        tags: (meta.tags || '').split(',').map((t) => t.trim()).filter(Boolean) },
      status: { privacyStatus: 'private', selfDeclaredMadeForKids: false },
    }),
    secret: token,
  };
}

function show(req) {
  const hide = (s) => (req.secret ? String(s).split(req.secret).join(mask(req.secret)) : s);
  const headers = Object.fromEntries(Object.entries(req.headers).map(([k, v]) => [k, hide(v)]));
  console.log(`${req.method} ${hide(req.url)}`);
  console.log(JSON.stringify(headers, null, 2));
  console.log(hide(req.body));
}

async function send(req) {
  const res = await fetch(req.url, { method: req.method, headers: req.headers, body: req.body });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${(await res.text()).slice(0, 400)}`);
  return res;
}

async function main() {
  console.log(`${live ? 'LIVE' : 'DRY RUN'} · ${id} · ${meta.channel} · ${row.file}\n`);
  if (meta.channel === 'newsletter') {
    console.log('Newsletters are not posted by this script — they go out from your email tool as drafts (Lab 11).');
    return;
  }
  if (meta.channel === 'linkedin' || meta.channel === 'facebook') {
    const req = meta.channel === 'linkedin' ? linkedin() : facebook();
    show(req);
    if (!live) return console.log('\nDry run — nothing was sent.');
    if (!req.secret) throw new Error(`no ${meta.channel} token in .env — see data/connect-accounts.md`);
    const res = await send(req);
    const postId = meta.channel === 'linkedin' ? res.headers.get('x-restli-id') : (await res.json()).id;
    const url = meta.channel === 'linkedin' ? `https://www.linkedin.com/feed/update/${postId}/` : `https://www.facebook.com/${postId}`;
    logPublish(id, meta.channel, postId, url);
    return console.log(`\nPosted: ${url}`);
  }
  if (meta.channel === 'youtube') {
    let token = '<access-token-from-refresh-token>';
    if (live) {
      if (!env.YOUTUBE_REFRESH_TOKEN) throw new Error('no YOUTUBE_REFRESH_TOKEN in .env — see data/connect-accounts.md');
      const t = await send({ method: 'POST', url: 'https://oauth2.googleapis.com/token',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ client_id: env.YOUTUBE_CLIENT_ID, client_secret: env.YOUTUBE_CLIENT_SECRET,
          refresh_token: env.YOUTUBE_REFRESH_TOKEN, grant_type: 'refresh_token' }).toString() });
      token = (await t.json()).access_token;
    }
    const init = youtubeInit(token);
    show(init);
    console.log(`\nthen: PUT <upload-url> with ${meta.video} (${statSync(join(ROOT, meta.video)).size} bytes)`);
    if (!live) return console.log('\nDry run — nothing was uploaded.');
    const where = (await send(init)).headers.get('location');
    const up = await send({ method: 'PUT', url: where, headers: { 'Content-Type': 'video/mp4' },
      body: readFileSync(join(ROOT, meta.video)) });
    const videoId = (await up.json()).id;
    logPublish(id, 'youtube', videoId, `https://studio.youtube.com/video/${videoId}/edit`);
    return console.log(`\nUploaded as PRIVATE: https://studio.youtube.com/video/${videoId}/edit`);
  }
  throw new Error(`unknown channel "${meta.channel}"`);
}

main().catch((e) => { console.error(`FAILED: ${e.message}`); process.exit(1); });
