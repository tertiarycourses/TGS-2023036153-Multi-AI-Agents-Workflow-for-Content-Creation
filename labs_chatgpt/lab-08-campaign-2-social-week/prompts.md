# Prompts — Lab 08: Campaign 2: A Social Media Week

Surface: Codex (subagents) → LinkedIn, Facebook. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: the social team

```
You are the Lead. Plan Week 1 social from
data/social-brief.md and strategy/calendar.csv.
Use subagents in parallel, each following its card:
- content-creator: 2 LinkedIn + 3 Facebook posts, one
  file each in content/social/week-01/, with the
  frontmatter in data/publishing-spec.md.
- creative-designer: one image per post with
  $imagegen (or @Canva) and alt text, from the brief.
Then run fact-check and fin-compliance on every post
and send each fix back to the right subagent. When a
post passes, run node scripts/submit.mjs on it.
Publish nothing.
```

## PROMPT B — Codex: publish

```
For every Week 1 post approved in
review/approvals.csv, run node scripts/publish.mjs
<id> as a dry run and show me each request. Wait for
me to say "go" before any --live run.
```
