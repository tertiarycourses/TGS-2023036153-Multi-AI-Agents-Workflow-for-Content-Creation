# Lab 14 — Measure, Govern and Write the Playbook

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 4 · about 40 minutes · slides 130–134**\
**Surface:** Claude Cowork (sub-agents, Live Artefact)\
**Features:** analyst sub-agents · cost per chat · comparing agent patterns · responsible-AI controls · the execution playbook

## The story so far

Eight weeks in. Rachel asks two questions: which channels actually booked chats, and how does the team run this safely after you leave? Answer with numbers, then with a playbook.

## Your goal

Rachel asks two questions: what worked, and how do we run this safely every week? Answer the first with the numbers and the second with a playbook anyone on the team can follow.

## You'll build

A results dashboard (Live Artefact), reports/agent-comparison.md and strategy/content-strategy-playbook.md

## What is in this folder

- `assets/campaign-results.csv`
- `assets/run-log.csv`
- `assets/playbook-outline.md`
- `assets/responsible-ai-checklist.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the data** — Copy the assets into data/.
2. **Analyse in parallel** — Paste Prompt A — two sub-agents.
3. **Read the dashboard** — Which channel books a chat most cheaply? Where should next month's S$4,000 go?
4. **Write the playbook** — Paste Prompt B.
5. **Review it as Rachel** — Ask the compliance reviewer to check it, then add one rule of your own.

## The prompts

### PROMPT A — Cowork: the analysts

> Use two sub-agents in parallel.
> 1. performance-analyst: from
>    data/campaign-results.csv, per channel — clicks,
>    checklist downloads, chats booked and cost per
>    chat. Which channel books chats most cheaply, and
>    how should next month's S$4,000 be split? Build a
>    Live Artefact dashboard.
> 2. agent-analyst: from data/run-log.csv, compare
>    Cowork sub-agents, Codex subagents, Claude Code
>    agent teams and Hermes Kanban on minutes, tokens,
>    defects caught before a person, and human edits.
>    Save reports/agent-comparison.md.

### PROMPT B — Cowork: the playbook

> Write strategy/content-strategy-playbook.md with
> data/playbook-outline.md, using everything in
> research/, strategy/, review/ and reports/.
> Include the agent roster (job, tool, model, what it
> may never do), the approval matrix by risk, the
> rules in data/responsible-ai-checklist.md, and what
> to do when a wrong post goes out. Keep it to what a
> new team member can follow on their first day.

## Check your work

- [ ] The dashboard shows cost per chat for every channel.
- [ ] The budget split follows the numbers, with reasons.
- [ ] agent-comparison.md shows the baseline caught 0 defects before a person.
- [ ] The playbook names every agent and bot, with its limits.
- [ ] The approval matrix says who approves CPF and tax figures.
- [ ] It has an incident procedure, and your own rule is in it.

## If it goes wrong

- **The playbook is generic** — Say: "use our actual agents, files and numbers — no generic advice".

## Stretch

- Turn the playbook into a skill, studio-playbook, so every agent can check its own work against it.

> **Why it matters:** Teams cost more tokens. The run log shows what you get for them: defects caught before a person, and fewer human edits.

## Next

The assessment. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
