# Prompts — Lab 10: Campaign 2: Social Media Posts (Demo)

**Use: Claude Code — Code mode (the </> button) in the Claude desktop app, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/claude/#lab-10 (one Copy button per prompt).

## PROMPT A — Claude Code: the social team

```
Create an agent team for Week 1 social from
data/social-brief.md and strategy/calendar.csv.
Spawn two teammates using the agent types
content-creator and creative-designer; you are the
Lead.
- content-creator: 1 LinkedIn + 1 Facebook post
  with linkedin-post, facebook-post and copywriting,
  one file each in content/social/week-01/, with the
  frontmatter in data/publishing-spec.md.
- creative-designer: one image per post (a rendered
  card in Horizon colours) with alt text; message the creator
  for each post's hook before designing.
- You: fact-check and fin-compliance on every post;
  message fixes to the teammate who owns it.
Before you start, ask me how I will review: in the
artifact, or by email (then ask for the approver's
address). When a post passes, submit it for review
with scripts/submit.mjs. Publish the two posts as
an artifact, each as it will look in the feed, with
its image and alt text; under each post put an
Approve button and a Request changes box that copy
the exact line for me to paste in the chat. If I
chose email, send ONE review email to the approver
with Gmail: the artifact link and what passed the
checks. Send nothing else; publish nothing.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPT B — Claude Code: publish

```
For every Week 1 post approved in
review/approvals.csv, do a dry run of publishing it
(scripts/publish.mjs) and publish each request as an
artifact: one card per post with channel, time and
link. Wait for me to say "go" before anything goes
live.
```

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Which post do you expect to do best, and why?"
- "What did the Lead send back to the writer, and why?"
- "Is anything here not ready to post? Explain in plain English."
