# Prompts — Lab 10: Campaign 4: The YouTube Explainer

Surface: Claude Code (agent team, render, upload). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: the video team

```
Create an agent team for YouTube episode 1 from
data/youtube-brief.md. Spawn three teammates:
growth-strategist (the angle and hook),
content-creator (content/video/ep01/scenes.json,
5-7 scenes, and ep01.md with title, tags,
description, chapters and the AI disclosure) and
creative-designer (a storyboard of the scenes and a
thumbnail, using brand-visuals).
You fact-check and fin-compliance the script, then
submit it as yt-ep01-script. Publish nothing.
```

## PROMPTS B and C — Claude Code: render and upload

```
PROMPT B
Use the creative-designer subagent with
video-render on the approved scenes.json →
content/video/ep01/ep01.mp4 (data/video-spec.md).
Check it with ffprobe. Do not change approved words.

PROMPT C
Run node scripts/publish.mjs yt-ep01 as a dry run.
If I say "go", run it with --live: it uploads as
PRIVATE. Give me the YouTube Studio link.
```
