# Lab 10 — Campaign 4: The YouTube Explainer

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 2 · Topic 3 · about 45 minutes · slides 101–105**\
**Surface:** Claude Code (agent team, render, upload)\
**Features:** strategist angle · creator script · designer storyboard, thumbnail and render · approve twice · private upload

## The story so far

Pre-retirees say they would rather watch than read. Rachel wants the first 'Money in Plain English' video, uploaded privately until she has watched it.

## Your goal

Pre-retirees would rather watch than read. The team makes "Your CPF retirement sums in 60 seconds" — and it goes up privately until a person has watched it.

## You'll build

content/video/ep01/: scenes.json, thumbnail, ep01.mp4, ep01.md, and a private YouTube upload (or dry run)

## What is in this folder

- `assets/youtube-brief.md`
- `assets/video-spec.md`
- `assets/sample-explainer.mp4`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Script it as a team** — Paste Prompt A.
2. **Approve the script** — Read scenes.json and ep01.md; approve yt-ep01-script in your own terminal.
3. **Render it** — Paste Prompt B. The designer runs video-render.
4. **Approve the video** — Submit ep01.md, watch ep01.mp4 to the end, then approve yt-ep01.
5. **Upload** — Paste Prompt C. It goes up as private.
6. **Disclose** — In YouTube Studio, answer the altered or synthetic content question before making it public.

## The prompts

### PROMPT A — Claude Code: the video team

> Create an agent team for YouTube episode 1 from
> data/youtube-brief.md. Spawn three teammates:
> growth-strategist (the angle and hook),
> content-creator (content/video/ep01/scenes.json,
> 5-7 scenes, and ep01.md with title, tags,
> description, chapters and the AI disclosure) and
> creative-designer (a storyboard of the scenes and a
> thumbnail, using brand-visuals).
> You fact-check and fin-compliance the script, then
> submit it as yt-ep01-script. Publish nothing.

### PROMPTS B and C — Claude Code: render and upload

> PROMPT B
> Use the creative-designer subagent with
> video-render on the approved scenes.json →
> content/video/ep01/ep01.mp4 (data/video-spec.md).
> Check it with ffprobe. Do not change approved words.
>
> PROMPT C
> Run node scripts/publish.mjs yt-ep01 as a dry run.
> If I say "go", run it with --live: it uploads as
> PRIVATE. Give me the YouTube Studio link.

## Check your work

- [ ] The strategist, creator and designer each delivered their part.
- [ ] You approved the script, then the finished video.
- [ ] ep01.mp4 is 1920x1080, under 90 seconds, every scene present.
- [ ] Every figure on screen matches facts-2026.md.
- [ ] The description has chapters, link, disclaimer and AI disclosure.
- [ ] The upload is private (or the dry run printed the request).

## If it goes wrong

- **ffmpeg not found** — Install it, or use sample-explainer.mp4 to test the upload.

## Stretch

- Ask the designer for a 30-second vertical Short from the same scenes.

> **Why it matters:** Approve twice: once for the words, once for the finished video. Rendering can break what the script got right.

## Next

Lab 11 — Campaign 5: Always On — the Weekly Growth Report. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
