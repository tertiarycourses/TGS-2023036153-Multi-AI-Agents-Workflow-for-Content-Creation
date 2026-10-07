# Lab 12 — Hermes Agent Bots on a Kanban Board

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 4 · about 45 minutes · slides 117–121**\
**Surface:** Hermes Agent (profiles, Kanban)\
**Features:** open-source Hermes Agent · one profile per role · a Kanban role pipeline · review and human unblock · the same skills

## The story so far

Rachel's IT adviser asks what happens if the studio's AI provider changes its prices or its rules. Try the same team on Hermes — open source, any model — with every hand-off on a Kanban board.

## Your goal

The studio should not depend on one vendor. Hermes runs a team of named agent bots on any model, coordinated on a durable Kanban board you can watch, block and unblock.

## You'll build

Three Hermes profiles, a researcher → writer → reviewer pipeline on the board, and Week 2 content approved by you

## What is in this folder

- `assets/hermes-setup.md`
- `assets/hermes-roles.md`
- `assets/kanban-pipeline.sh`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Install Hermes** — Follow hermes-setup.md; hermes setup with the API key your trainer gives you.
2. **Create the bots** — Run the three hermes profile create commands in hermes-roles.md, then copy skills/ into each profile.
3. **Start the board** — hermes kanban init, then hermes gateway start in a second terminal — it runs the dispatcher.
4. **Build the pipeline** — Paste the prompt into hermes (or run kanban-pipeline.sh).
5. **Watch it** — hermes kanban watch, or hermes dashboard for the board in your browser.
6. **Be the gate** — The reviewer blocks for you. Read the output, then hermes kanban unblock <id> — or request changes.
7. **Hand it to the gate** — Save the approved post as content/social/week-02/li-w02-01.md and submit it.

## The prompts

### PROMPT — Hermes: the planner

> You are the planner for Horizon Wealth Planning.
> Create a Kanban pipeline for Week 2 content, with
> dependencies:
> 1. researcher: facts for a LinkedIn post and a
>    newsletter tip on CPF cash top-ups, from
>    facts-2026.md only.
> 2. writer (parent: 1): write both in the
>    sunny-voice skill.
> 3. reviewer (parent: 2): check with fact-check and
>    fin-compliance; request changes until it passes,
>    then block the task with the reason "Needs
>    approval from a person".
> Work in ~/horizon-studio/hermes. Show me the task
> ids and the board.

### COMMANDS — terminal

```
hermes profile create researcher --description "Gathers and checks facts for Horizon content."
hermes profile create writer --description "Writes Horizon posts in the sunny-voice skill."
hermes profile create reviewer --description "Checks Horizon content; blocks for human approval."
for p in researcher writer reviewer; do cp -R skills/* ~/.hermes/profiles/$p/skills/; done
hermes kanban init
hermes gateway start          # in a second terminal
hermes kanban watch           # or: hermes dashboard
hermes kanban unblock <task-id>
```

## Check your work

- [ ] hermes profile list shows researcher, writer and reviewer.
- [ ] Each profile has the four studio skills.
- [ ] The board shows three tasks linked by parents.
- [ ] The writer started only after the researcher finished.
- [ ] The reviewer requested changes at least once, then blocked for you.
- [ ] You unblocked it; the post is submitted to approvals.csv.

## If it goes wrong

- **Tasks stay in ready** — The gateway runs the dispatcher — start it with hermes gateway start.
- **Model errors** — A Claude subscription does not cover Hermes. Use the API key from your trainer.

## Stretch

- Set a cheaper model for the researcher profile and a stronger one for the reviewer; compare the cost.

> **Why it matters:** A Kanban board makes agent work visible and durable: every hand-off is a row anyone can read, and a blocked card is a person's turn.

## Next

Lab 13 — Always On: a Telegram Bot That Asks Before It Acts. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
