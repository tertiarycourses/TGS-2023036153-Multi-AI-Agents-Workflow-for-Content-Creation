# Prompts — Lab 09: The Social Media Agent Team: LinkedIn and Facebook

Surface: Claude Code (subagents + agent teams). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: setup

```
Add "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
under "env" in .claude/settings.json without
changing the hooks. Then create three project
subagents in .claude/agents/ from
data/team-roles.md: researcher, social-writer and
compliance-reviewer — name, description, tools and
model as the file says.
```

## PROMPT B — Claude Code: the team

```
Create an agent team for Week 1 social content
from data/social-brief.md (and strategy/calendar.csv
if it exists). Spawn three teammates using the
agent types researcher, social-writer and
compliance-reviewer.
- researcher sends the writer a fact sheet per post,
  from data/facts-2026.md only.
- social-writer writes 2 LinkedIn and 3 Facebook
  posts, one file each in content/social/week-01/,
  with the frontmatter in data/publishing-spec.md.
- compliance-reviewer checks every post and messages
  the writer about each problem until it passes.
A post is done only when the reviewer passes it;
then run scripts/submit.mjs on it. Publish nothing.
```

## PROMPT C — Claude Code: publish

```
For every Week 1 post that is approved in
review/approvals.csv, run node scripts/publish.mjs
<id> as a dry run and show me each request.
Wait for me to say "go" before running any of them
with --live.
```
