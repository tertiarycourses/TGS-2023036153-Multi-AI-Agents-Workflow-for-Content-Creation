# Prompts — Lab 10: Campaign 2: Social Media Posts (Demo)

**Use: Codex — Codex, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-10 (one Copy button per prompt).

## PROMPT A — Codex: the social team

```
You are the Lead. Plan Week 1 social from
data/social-brief.md and strategy/calendar.csv.
Use subagents in parallel, each following its card:
- content-creator: 1 LinkedIn + 1 Facebook post with
  linkedin-post, facebook-post and copywriting, one
  file each in content/social/week-01/, with the
  frontmatter in data/publishing-spec.md.
- creative-designer: one image per post with
  $imagegen and alt text, from the brief.
Then run fact-check and fin-compliance on every post
and send each fix back to the right subagent. When a
post passes, run node scripts/submit.mjs on it.
Publish nothing.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPT B — Codex: publish

```
For every Week 1 post approved in
review/approvals.csv, run node scripts/publish.mjs
<id> as a dry run and show me each request. Wait for
me to say "go" before any --live run.
```

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Which post do you expect to do best, and why?"
- "What did the Lead send back to the writer, and why?"
- "Is anything here not ready to post? Explain in plain English."
