# Lab 13 — Optional Demo: the Team on Hermes Agent

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 2 · Topic 4 · about 25 minutes · slides 123–126**\
**Surface:** Hermes Agent (profiles, Kanban) — trainer demo\
**Features:** open-source Hermes Agent · one profile per role · a Kanban pipeline · a task blocked for a person · the same skills

## The story so far

Optional. Rachel's IT adviser asks what happens if the AI provider changes its prices. The trainer runs the same pipeline on open-source Hermes Agent.

## Your goal

Optional: see the same strategist → creator → Lead pipeline on an open-source agent with any model, on a durable Kanban board.

## You'll build

three Hermes profiles and a pipeline on the board, with the review task blocked for a person (demo)

## What is in this folder

- `assets/hermes-setup.md`
- `assets/hermes-roles.md`
- `assets/kanban-pipeline.sh`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Install Hermes** — Follow hermes-setup.md with an API key (a Claude subscription does not cover Hermes).
2. **Create the bots** — Create the profiles in hermes-roles.md and copy skills/ into each.
3. **Start the board** — hermes kanban init, then hermes gateway start in a second terminal.
4. **Build the pipeline** — Paste the prompt into hermes, or run kanban-pipeline.sh.
5. **Be the gate** — The Lead blocks for a person: unblock it with hermes kanban unblock <id>.

## The prompts

### PROMPT — Hermes: the planner

> You are Horizon's Marketing Team Lead. Create a
> Kanban pipeline with dependencies:
> 1. strategist: the angle and facts for a LinkedIn
>    post on CPF cash top-ups, from facts-2026.md.
> 2. creator (parent 1): write it with sunny-voice.
> 3. lead (parent 2): fact-check and fin-compliance;
>    then block the task with the reason "Needs
>    approval from a person".
> Show me the task ids and the board.

## Check your work

- [ ] hermes profile list shows the three profiles.
- [ ] The board shows three tasks linked by parents.
- [ ] The review task is blocked for a person.
- [ ] Unblocking finished the pipeline.

## If it goes wrong

- **Tasks stay in ready** — Start the dispatcher: hermes gateway start.

## Stretch

- Connect a Telegram bot and schedule the weekly report with hermes cron.

> **Why it matters:** Optional, not assessed. The pattern carries over: roles, skills and a human gate work on an open-source agent too.

## Next

The assessment. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
