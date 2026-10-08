# Lab 09 — The Social Media Agent Team: LinkedIn and Facebook

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 3 · about 45 minutes · slides 93–98**\
**Surface:** Claude Code (subagents + agent teams)\
**Features:** subagent definitions in .claude/agents/ · an agent team with a shared task list · teammates message each other · human review → auto-post

## The story so far

Week 1 of the campaign starts Monday: two LinkedIn posts, three Facebook posts. A researcher, a writer and a reviewer must agree on every word — and then a person decides.

## Your goal

Research, writing and review are different jobs. As a team, the researcher, the writer and the reviewer talk to each other directly and fix problems before a person ever sees a post.

## You'll build

content/social/week-01/: 2 LinkedIn and 3 Facebook posts, reviewed, approved by you and posted (or dry-run)

## What is in this folder

- `assets/social-brief.md`
- `assets/team-roles.md`
- `assets/sample-calendar.csv`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Turn on agent teams** — Paste Prompt A in Claude Code (claude in a terminal in horizon-studio), then restart it.
2. **Define the roles** — Claude writes three subagent files in .claude/agents/ from team-roles.md. Read one.
3. **Start the team** — Paste Prompt B. Three teammates appear in the panel under the prompt.
4. **Watch and steer** — Use ↑ ↓ and Enter to open a teammate; Ctrl+T shows the shared task list. Message the writer once.
5. **Review as a person** — Read each post in content/social/week-01/. Approve the good ones in your own terminal with approve.mjs.
6. **Publish** — Paste Prompt C. Dry run first; say "go" for --live only if your accounts are connected.
7. **Shut down** — Ask the lead to shut the teammates down.

## The prompts

### PROMPT A — Claude Code: setup

> Add "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
> under "env" in .claude/settings.json without
> changing the hooks. Then create three project
> subagents in .claude/agents/ from
> data/team-roles.md: researcher, social-writer and
> compliance-reviewer — name, description, tools and
> model as the file says.

### PROMPT B — Claude Code: the team

> Create an agent team for Week 1 social content
> from data/social-brief.md (and strategy/calendar.csv
> if it exists). Spawn three teammates using the
> agent types researcher, social-writer and
> compliance-reviewer.
> - researcher sends the writer a fact sheet per post,
>   from data/facts-2026.md only.
> - social-writer writes 2 LinkedIn and 3 Facebook
>   posts, one file each in content/social/week-01/,
>   with the frontmatter in data/publishing-spec.md.
> - compliance-reviewer checks every post and messages
>   the writer about each problem until it passes.
> A post is done only when the reviewer passes it;
> then run scripts/submit.mjs on it. Publish nothing.

### PROMPT C — Claude Code: publish

> For every Week 1 post that is approved in
> review/approvals.csv, run node scripts/publish.mjs
> <id> as a dry run and show me each request.
> Wait for me to say "go" before running any of them
> with --live.

## Check your work

- [ ] Three subagent files exist, each with tools and a model.
- [ ] Three teammates appeared; the task list showed their tasks.
- [ ] The reviewer messaged the writer at least once, and the fix landed.
- [ ] Five posts with frontmatter and UTM links; all pending in approvals.csv.
- [ ] You approved in your own terminal; an agent attempt was blocked.
- [ ] Dry runs printed every request; live posts appear only if you said go.

## If it goes wrong

- **You got subagents, not a team** — Check the env setting, restart claude, and ask explicitly for "an agent team".
- **Too many permission prompts** — Pre-approve Read, Write and node scripts/submit.mjs in .claude/settings.json.

## Stretch

- Add a fourth teammate, community-manager, that drafts replies to the five most likely comments.

> **Why it matters:** Subagents report to one boss; teammates also talk to each other. Use a team when the work needs a conversation — like a writer and a reviewer going back and forth.

## Next

Lab 10 — The Newsletter Agent Team: the Sunny Sunday Email. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
