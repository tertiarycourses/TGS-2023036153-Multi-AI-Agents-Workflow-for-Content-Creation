# Prompts — Lab 12: Campaign 4: The YouTube Explainer

**Use: Codex — Codex, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-12 (one Copy button per prompt).

## PROMPT A — Codex: the video team

```
You are the Lead for YouTube episode 1
(data/youtube-brief.md). Use subagents:
growth-strategist (the angle and hook),
content-creator (content/video/ep01/scenes.json,
5-7 scenes, and ep01.md with title, tags,
description, chapters and the AI disclosure) and
creative-designer (a thumbnail with $imagegen, using
brand-visuals).
Fact-check and fin-compliance the script, then
submit it as yt-ep01-script. Publish nothing.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPTS B and C — Codex: render and upload

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

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Walk me through the video scene by scene, in plain English."
- "Which figure on screen should I double-check, and against what?"
- "What does the AI disclosure say, and why do we need it?"
