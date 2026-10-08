# Lab 11 — The Video Agent Team: Script to YouTube

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 3 · about 40 minutes · slides 106–111**\
**Surface:** Claude Code (agent team) → Codex (render, upload)\
**Features:** agent team for the script · approval of script and video · ffmpeg render · private YouTube upload

## The story so far

Pre-retirees say they would rather watch than read. Rachel wants the first 'Money in Plain English' video: 60 seconds on the CPF retirement sums, uploaded privately until she has seen it.

## Your goal

Video reaches the people who never read posts. A team writes and checks the script; you approve it; Codex makes the video and uploads it — privately, until you decide to make it public.

## You'll build

content/video/ep01/: scenes.json, ep01.mp4, ep01.md, and a private YouTube upload (or dry run)

## What is in this folder

- `assets/youtube-brief.md`
- `assets/video-spec.md`
- `assets/sample-explainer.mp4`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Script it as a team** — Paste Prompt A in Claude Code.
2. **Approve the script** — Read scenes.json and ep01.md, then approve yt-ep01-script in your own terminal.
3. **Render it** — In Codex, paste Prompt B. Watch the result.
4. **Approve the video** — Run submit.mjs on ep01.md, watch ep01.mp4 to the end, then approve yt-ep01.
5. **Upload** — Paste Prompt C. It goes up as private.
6. **Disclose** — In YouTube Studio, set the altered or synthetic content answer correctly before you make it public.

## The prompts

### PROMPT A — Claude Code: the script team

> Create an agent team for YouTube episode 1 from
> data/youtube-brief.md. Spawn three teammates:
> researcher (agent type researcher), a
> video-scriptwriter and compliance-reviewer (agent
> type compliance-reviewer).
> The scriptwriter writes content/video/ep01/
> scenes.json (5-7 scenes: seconds, title, text) and
> ep01.md (id yt-ep01, channel youtube, title, tags,
> video content/video/ep01/ep01.mp4; the body is the
> description with chapters and the disclosure).
> Submit the script as yt-ep01-script once the
> reviewer passes it. Publish nothing.

### PROMPT B — Codex: render

> Following data/video-spec.md, write
> scripts/render-video.py and run it on the approved
> content/video/ep01/scenes.json to make
> content/video/ep01/ep01.mp4. Use ffmpeg and Pillow.
> Check the result with ffprobe: 1920x1080, under 90
> seconds, every scene present. Do not change the
> approved words.

### PROMPT C — Codex: upload

> Run node scripts/publish.mjs yt-ep01 as a dry run
> and show me the request. If I say "go", run it with
> --live: it uploads the video as PRIVATE. Give me the
> video id and the YouTube Studio link.

## Check your work

- [ ] The reviewer passed the script; you approved yt-ep01-script.
- [ ] ep01.mp4 is 1920x1080, under 90 seconds, every scene present.
- [ ] Every figure on screen matches facts-2026.md.
- [ ] The description has chapters, UTM link, disclaimer and AI disclosure.
- [ ] You approved yt-ep01 after watching it to the end.
- [ ] The upload is private (or a dry run printed the request).

## If it goes wrong

- **ffmpeg not found** — Install it (brew install ffmpeg / winget install ffmpeg) or use sample-explainer.mp4 to test the upload.
- **Upload forbidden** — Add yourself as a test user on the OAuth consent screen, then refresh the token.

## Stretch

- Add a 30-second vertical Short from the same scenes.

> **Why it matters:** Approve twice: once for the words, once for the finished video. Rendering can break what the script got right.

## Next

Lab 12 — Hermes Agent Bots on a Kanban Board. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
