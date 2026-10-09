# Lab 07 — Growth Analyst and Strategist: Cadence and Calendar

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 2 · about 35 minutes · slides 74–78**\
**Surface:** Claude Code (subagents)\
**Features:** marginal value vs fatigue · team capacity · review buffers · a four-week calendar

## The story so far

Jun Wei has 12 hours a week and Rachel needs two business days to review anything. How often should each channel run, and what goes out when?

## Your goal

Post too little and nobody remembers you; too much and people unfollow. The analyst finds the point where more stops paying; the strategist turns it into four deliverable weeks.

## You'll build

strategy/cadence.md and strategy/calendar.csv

## What is in this folder

- `assets/channel-benchmarks.csv`
- `assets/team-capacity.md`
- `assets/calendar-format.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Check the data** — The assets are already in data/. Open one and skim it.
2. **Find the sweet spot** — Paste Prompt A.
3. **Question it** — Why is the newsletter not weekly? The answer is in the unsubscribes.
4. **Plan four weeks** — Paste Prompt B.
5. **Check the buffers** — Every review date is two business days ahead; nothing on a holiday.

## The prompts

### PROMPT A — Claude Code: the analyst

> Use the growth-analyst subagent. From
> data/channel-benchmarks.csv and
> data/team-capacity.md, recommend how often to
> publish on LinkedIn, Facebook, the newsletter and
> YouTube. Compare the extra clicks from one more
> post, the unfollows or unsubscribes it costs, and
> the hours. Show the numbers → strategy/cadence.md.

### PROMPT B — Claude Code: the strategist

> Use the growth-strategist subagent to build a
> four-week calendar from Monday 2 November 2026 in
> strategy/calendar.csv (columns as
> data/calendar-format.csv), from the cadence,
> strategy/storyboard.md and strategy/content-spec.md.
> review_by two business days before each date; no
> public holidays; no week over the team's hours.
> Show a week-by-week summary with hours.

## Check your work

- [ ] cadence.md gives a frequency per channel with the evidence.
- [ ] A third LinkedIn post a week costs far more unfollows than it earns.
- [ ] It explains the unsubscribe jump at weekly emails.
- [ ] calendar.csv covers four weeks in the required columns.
- [ ] Every review_by date is two business days before publishing.
- [ ] No week is over 12 hours.

## If it goes wrong

- **Dates fall on weekends** — Say: "publish Monday to Saturday; the newsletter is Sunday 8am only".

## Stretch

- Have the Lead add the review deadlines to a calendar you create for class.

> **Why it matters:** Frequency is a capacity decision as much as an audience one. A calendar the team cannot deliver is fiction.

## Next

Lab 8 — Campaign 2: A Social Media Week. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
