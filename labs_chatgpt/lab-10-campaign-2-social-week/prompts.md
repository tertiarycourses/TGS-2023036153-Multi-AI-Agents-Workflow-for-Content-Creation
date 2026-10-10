# Prompts — Lab 10: Campaign 2: Social Media Posts (Demo)

**Use: Codex — Codex, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-10 (one Copy button per prompt).

## PROMPT A — Codex: get the latest kit

```
Bring this studio up to date with the course kit.
From https://raw.githubusercontent.com/tertiarycourses/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/main/labs_chatgpt/horizon-studio/
download scripts/serve-site.mjs and
data/publishing-spec.md, channel-formats.md,
connect-accounts.md and env.example into the same
places here. From
https://raw.githubusercontent.com/tertiarycourses/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/main/labs_chatgpt/lab-10-campaign-2-social-week/assets/publisher-kit/scripts/
download approve.mjs, gate-hook.mjs, lib.mjs,
publish.mjs and submit.mjs into scripts/. Replace
old copies; touch nothing else.
Then add this rule to AGENTS.md if it is missing:
every post links to http://localhost:8080/ with UTM tags.
Then start my website and tell me in one line that
the kit is up to date.
```

## PROMPT B — Codex: the social team

```
You are the Lead. Plan Week 1 social from
data/social-brief.md and strategy/calendar.csv.
Use subagents in parallel, each following its card:
- content-creator: 1 LinkedIn + 1 Facebook post with
  linkedin-post, facebook-post and copywriting, one
  file each in content/social/week-01/, with the
  frontmatter in data/publishing-spec.md. Each post
  links to my website, http://localhost:8080/, with UTM tags.
- creative-designer: one image per post with
  $imagegen and alt text, from the brief. Save each
  as a PNG beside its post and fill in the post's
  image and alt lines, so the image is posted with it.
Then run fact-check and fin-compliance on every post
and send each fix back to the right subagent. When a
post passes, run node scripts/submit.mjs on it.
Publish nothing.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPT C — Codex: publish

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
