# Lab 12 — Measure, Govern and Write the Team Playbook

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 4 · about 40 minutes · slides 116–120**\
**Surface:** Codex (subagents)\
**Features:** compare agent patterns · the roster: instructions, skills, connectors · approval matrix · responsible-AI controls

## The story so far

Eight weeks in. Rachel asks which ways of running agents earned their tokens, and how the team runs safely after you leave.

## Your goal

Rachel asks: which patterns earned their tokens, and how does the team run safely after you leave? Answer with numbers, then with a playbook a new hire can follow.

## You'll build

reports/agent-comparison.md and strategy/team-playbook.md

## What is in this folder

- `assets/run-log.csv`
- `assets/playbook-outline.md`
- `assets/responsible-ai-checklist.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Check the data** — The assets are already in data/. Open one and skim it.
2. **Compare the patterns** — Paste Prompt A.
3. **Write the playbook** — Paste Prompt B.
4. **Review it as Rachel** — Add one rule of your own and say why.

## The prompts

### PROMPT A — Codex: compare

> Use the growth-analyst subagent. From
> data/run-log.csv compare the patterns we used —
> one agent, subagents, parallel subagents with a Lead review and the scheduled task
> — on minutes, tokens, defects caught before a person
> and human edits. Which pattern pays off for which
> job? Save reports/agent-comparison.md.

### PROMPT B — Codex: the playbook

> Write strategy/team-playbook.md with
> data/playbook-outline.md. Include the roster: for
> each agent its instructions file in agents/, its
> skills, connectors, model and what it may never do;
> the approval matrix by risk; the rules in
> data/responsible-ai-checklist.md; and what to do when
> a wrong post goes out. Then run fin-compliance on
> it.

## Check your work

- [ ] agent-comparison.md shows the one-agent baseline caught 0 defects.
- [ ] It says which pattern suits which job, with numbers.
- [ ] The roster lists all six agents with skills and connectors.
- [ ] The approval matrix says who approves CPF and tax figures.
- [ ] It has an incident procedure, and your own rule.

## If it goes wrong

- **The playbook is generic** — Say: "use our actual agents, files and numbers".

## Stretch

- Turn the playbook into a skill, team-playbook, for the Lead.

> **Why it matters:** Teams cost more tokens. The run log shows what you buy with them: defects caught before a person, and fewer edits.

## Next

Lab 13 — Optional Demo: a Dot Team Lead and Workspace Agents. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
