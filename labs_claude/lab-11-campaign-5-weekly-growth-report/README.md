# Lab 11 — Campaign 5: Always On — the Weekly Growth Report

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 2 · Topic 4 · about 35 minutes · slides 110–113**\
**Surface:** Claude (skill, scheduled task, Drive, Gmail)\
**Features:** the Growth Analyst's campaign-report skill · do · verify · schedule · draft-only delivery

## The story so far

The team must keep working after class. Rachel wants the Growth Analyst's report in her inbox every Monday — as a draft she decides on.

## Your goal

The team should keep working when class ends. Every Monday the Growth Analyst's report lands in Rachel's inbox as a draft — the decision stays with a person.

## You'll build

a scheduled task that drafts the weekly growth report every Monday at 8am, and one draft in Gmail

## What is in this folder

- `assets/campaign-results.csv`
- `assets/weekly-report-brief.md`
- `assets/scheduled-task-instructions.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Put the data on Drive** — Upload campaign-results.csv to the Horizon Studio folder.
2. **Bring the skill** — Upload the campaign-report skill folder under Customize → Skills in Claude.
3. **Do it once** — Paste Prompt A. Refine the report until it is right.
4. **Schedule it** — Create a scheduled task for Mondays at 8am and paste scheduled-task-instructions.md into its Instructions.
5. **Run it now** — Run the task once and open the Gmail draft.
6. **Pause it** — After class, pause the scheduled task.

## The prompts

### PROMPT A — Claude: do it once

> Act as Horizon's Growth Analyst. Using Google
> Drive, read campaign-results.csv in the Horizon
> Studio folder. Use the campaign-report skill and
> data/weekly-report-brief.md. Leave the report as a
> Gmail DRAFT to me, subject "Horizon weekly growth
> report" and today's date. Send nothing.

## Check your work

- [ ] The campaign-report skill is available in Claude.
- [ ] The report names the cheapest channel per chat (the newsletter).
- [ ] It recommends a budget split with a reason per channel.
- [ ] A scheduled task runs Mondays at 8am with draft-only instructions.
- [ ] A manual run left a draft — nothing was sent.
- [ ] The task is paused after class.

## If it goes wrong

- **It sent the email** — Write "draft only — never send" in both the skill and the task instructions.

## Stretch

- Add a Friday 5pm task from the Lead: what was published and what is still pending.

> **Why it matters:** Automate the preparation, not the decision. The schedule fills an inbox; a person still decides.

## Next

Lab 12 — Measure, Govern and Write the Team Playbook. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
