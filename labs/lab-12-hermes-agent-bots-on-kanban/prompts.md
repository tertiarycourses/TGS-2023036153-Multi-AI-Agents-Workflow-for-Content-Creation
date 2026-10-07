# Prompts — Lab 12: Hermes Agent Bots on a Kanban Board

Surface: Hermes Agent (profiles, Kanban). Paste each prompt as written; change only what the lab tells you to.

## PROMPT — Hermes: the planner

```
You are the planner for Horizon Wealth Planning.
Create a Kanban pipeline for Week 2 content, with
dependencies:
1. researcher: facts for a LinkedIn post and a
   newsletter tip on CPF cash top-ups, from
   facts-2026.md only.
2. writer (parent: 1): write both in the
   sunny-voice skill.
3. reviewer (parent: 2): check with fact-check and
   fin-compliance; request changes until it passes,
   then block the task with the reason "Needs
   approval from a person".
Work in ~/horizon-studio/hermes. Show me the task
ids and the board.
```

## COMMANDS — terminal

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
