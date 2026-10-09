# Prompts — Lab 08: Campaign 2: A Social Media Week

Surface: Claude Code (agent team) → LinkedIn, Facebook. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: the social team

```
Create an agent team for Week 1 social from
data/social-brief.md and strategy/calendar.csv.
Spawn two teammates using the agent types
content-creator and creative-designer; you are the
Lead.
- content-creator: 2 LinkedIn + 3 Facebook posts,
  one file each in content/social/week-01/, with the
  frontmatter in data/publishing-spec.md.
- creative-designer: one image per post (Canva or a
  rendered card) with alt text; message the creator
  for each post's hook before designing.
- You: fact-check and fin-compliance on every post;
  message fixes to the teammate who owns it.
When a post passes, run node scripts/submit.mjs on
it. Publish nothing.
```

## PROMPT B — Claude Code: publish

```
For every Week 1 post approved in
review/approvals.csv, run node scripts/publish.mjs
<id> as a dry run and show me each request. Wait for
me to say "go" before any --live run.
```
