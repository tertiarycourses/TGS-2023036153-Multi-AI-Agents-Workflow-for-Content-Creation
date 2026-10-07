# Prompts — Lab 11: The Video Agent Team: Script to YouTube

Surface: Claude Code (agent team) → Codex (render, upload). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: the script team

```
Create an agent team for YouTube episode 1 from
data/youtube-brief.md. Spawn three teammates:
researcher (agent type researcher), a
video-scriptwriter and compliance-reviewer (agent
type compliance-reviewer).
The scriptwriter writes content/video/ep01/
scenes.json (5-7 scenes: seconds, title, text) and
ep01.md (id yt-ep01, channel youtube, title, tags,
video content/video/ep01/ep01.mp4; the body is the
description with chapters and the disclosure).
Submit the script as yt-ep01-script once the
reviewer passes it. Publish nothing.
```

## PROMPT B — Codex: render

```
Following data/video-spec.md, write
scripts/render-video.py and run it on the approved
content/video/ep01/scenes.json to make
content/video/ep01/ep01.mp4. Use ffmpeg and Pillow.
Check the result with ffprobe: 1920x1080, under 90
seconds, every scene present. Do not change the
approved words.
```

## PROMPT C — Codex: upload

```
Run node scripts/publish.mjs yt-ep01 as a dry run
and show me the request. If I say "go", run it with
--live: it uploads the video as PRIVATE. Give me the
video id and the YouTube Studio link.
```
