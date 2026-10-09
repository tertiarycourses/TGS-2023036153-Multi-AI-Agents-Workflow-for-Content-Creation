# Lab 02 — Form the Team: Instructions for Each Agent

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 37–41**\
**Surface:** Claude Code (subagent files)\
**Features:** five subagent files in .claude/agents/ · name, description, tools, model · the Lead is your session

## The story so far

Rachel sketches the team on a whiteboard: a Lead and five specialists. Each needs a clear job, and a clear line it must never cross — this is a regulated firm.

## Your goal

A team is a set of clear jobs. Write each agent's instructions once — its job, what it reads, what it delivers and what it must never do — and every campaign can call on it.

## You'll build

.claude/agents/: growth-strategist, content-creator, creative-designer, website-designer, growth-analyst

## What is in this folder

- `assets/role-specs.md`
- `assets/team-org-chart.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Read the roles** — Open role-specs.md: one Lead and five specialists, each with a job, skills, connectors and limits.
2. **Write the instructions** — Paste Prompt A.
3. **Read one closely** — Open .claude/agents/content-creator.md. Is the "Never" section strict enough for a regulated firm?
4. **Meet the team** — Paste Prompt B. Each agent introduces itself in one line — in its own context.
5. **Tighten one** — Change one instruction you disagree with and save it. It is your team.

## The prompts

### PROMPT A — Claude Code: five subagents

> Read data/role-specs.md. Create five project
> subagents in .claude/agents/ — growth-strategist,
> content-creator, creative-designer, website-designer
> and growth-analyst. Each file has:
> - frontmatter: name; a description that says when to
>   use it; tools; model (opus for the strategist,
>   sonnet for the others)
> - a body with: the job, what it reads, what it
>   delivers, the connectors it may use, what it must
>   never do, and how it reports back.
> No skills line yet — we add skills in Lab 3.

### PROMPT B — Claude Code: meet the team

> Use each of the five subagents once, in parallel.
> Ask each: "In one line, who are you, and what is
> the first thing you would do for Horizon's goal of
> 40 booked chats a month?" Show me the five answers
> in a table.

## Check your work

- [ ] Five files exist in .claude/agents/, one per specialist.
- [ ] Each has a name, a "use when" description, tools and a model.
- [ ] Your session acts as the Marketing Team Lead.
- [ ] Five agents answered, each in its own context.
- [ ] Every agent has a "never" rule that blocks publishing.
- [ ] You changed one instruction and can say why.

## If it goes wrong

- **A subagent never runs** — Name it: "use the growth-strategist subagent" or @agent-growth-strategist.

## Stretch

- Add a sixth agent, community-manager, that drafts replies to comments — and decide what it must never do.

> **Why it matters:** Clear jobs beat clever prompts. An agent that knows what it must never do is safer than one that is merely told to be careful.

## Next

Lab 3 — Give Each Agent Its Skills. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
