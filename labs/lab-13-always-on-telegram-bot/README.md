# Lab 13 — Always On: a Telegram Bot That Asks Before It Acts

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 4 · about 30 minutes · slides 123–126**\
**Surface:** Hermes Agent (gateway bot, cron)\
**Features:** a Telegram bot · scheduled jobs in plain words · delivery targets · approve from your phone · pause

## The story so far

The studio must run every week, not just in class. Rachel lives on her phone. Have Hermes prepare the Monday brief on a schedule and send it to her — and wait for her answer.

## Your goal

A content studio runs every week, not just in class. Hermes prepares the Monday brief on a schedule and sends it to your phone — and waits for your answer.

## You'll build

A Telegram bot, a Monday 8am content-brief job, and one approved brief from your phone

## What is in this folder

- `assets/telegram-bot-setup.md`
- `assets/cron-brief.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Make the bot** — Follow telegram-bot-setup.md with @BotFather.
2. **Connect it** — hermes gateway setup → Telegram; allow only your own user id. Restart the gateway.
3. **Say hello** — Message the bot. Hermes answers.
4. **Schedule the brief** — Paste the prompt into Hermes.
5. **Run it now** — hermes cron list, then hermes cron run <id>.
6. **Approve from your phone** — Reply APPROVE, or ask for a change.
7. **Pause it** — After class: hermes cron pause <id>.

## The prompts

### PROMPT — Hermes

> Every Monday at 8am, prepare Horizon's weekly
> content brief as data/cron-brief.md describes, from
> ~/horizon-studio/strategy/calendar.csv,
> ~/horizon-studio/data/facts-2026.md and
> ~/horizon-studio/review/approvals.csv.
> Send it to me on Telegram and wait for my reply.
> Never publish, approve or send anything to anyone
> else.

## Check your work

- [ ] The bot answers only you.
- [ ] hermes cron list shows the Monday 8am job.
- [ ] A manual run delivered the brief to Telegram.
- [ ] The brief lists the week's items, facts and pending approvals.
- [ ] Your reply was understood, and nothing was published.
- [ ] The job is paused after class.

## If it goes wrong

- **No Telegram** — Use delivery "local" — the brief is saved as a file instead.
- **The job never runs** — Scheduled jobs run inside the gateway — keep hermes gateway running.

## Stretch

- Add a Friday 5pm job that summarises what was published and what is still pending.

> **Why it matters:** Automate the preparation, not the decision. The schedule fills your inbox; you still press the button.

## Next

Lab 14 — Measure, Govern and Write the Playbook. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
