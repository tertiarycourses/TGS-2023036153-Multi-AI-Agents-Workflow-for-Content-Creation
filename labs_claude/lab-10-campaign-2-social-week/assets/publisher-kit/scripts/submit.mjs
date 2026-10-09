// node scripts/submit.mjs <content-file> [--by "agent name"]
// Adds (or refreshes) a PENDING row for the file's current version.
// Agents may run this: submitting is asking, not approving.
import { readRows, writeRows, readContent, hashOf } from './lib.mjs';

const [file, ...rest] = process.argv.slice(2);
if (!file) { console.error('usage: node scripts/submit.mjs <content-file> [--by "name"]'); process.exit(1); }
const by = rest.includes('--by') ? rest[rest.indexOf('--by') + 1] : 'agent';

const { meta } = readContent(file);
if (!meta.id || !meta.channel) { console.error(`${file}: frontmatter needs id and channel`); process.exit(1); }

const rows = readRows();
const sha256 = hashOf(file);
const row = rows.find((r) => r.id === meta.id);
const fresh = { id: meta.id, channel: meta.channel, file, sha256, status: 'pending',
  submitted_by: by, approver: '', approved_at: '', notes: '' };
if (row) Object.assign(row, fresh); else rows.push(fresh);
writeRows(rows);
console.log(`${meta.id} submitted for review (pending). A person approves it with:\n  node scripts/approve.mjs ${meta.id} --by "Your Name"`);
