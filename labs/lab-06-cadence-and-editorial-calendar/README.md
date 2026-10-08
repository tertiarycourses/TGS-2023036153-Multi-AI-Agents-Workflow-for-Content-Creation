# Lab 06 — Content Cadence and the Editorial Calendar

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 2 · about 35 minutes · slides 65–69**\
**Surface:** Claude Cowork\
**Features:** marginal value vs fatigue · team capacity · review buffers · a four-week calendar

## The story so far

Jun Wei has 12 hours a week and Rachel needs two business days to review anything. Last quarter they posted when they had time. How often should each channel run — and what goes out when?

## Your goal

Post too little and nobody remembers you; too much and people unfollow — and the team burns out. Let the data set the frequency, then plan four weeks the team can actually deliver.

## You'll build

strategy/cadence.md and strategy/calendar.csv (four weeks from 2 November 2026)

## What is in this folder

- `assets/channel-benchmarks.csv`
- `assets/team-capacity.md`
- `assets/calendar-format.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the data** — Copy the assets into data/.
2. **Find the sweet spot** — Paste Prompt A. Read where an extra post stops paying off on each channel.
3. **Question it** — Ask why the newsletter is not weekly — the answer is in the unsubscribes.
4. **Plan four weeks** — Paste Prompt B.
5. **Check the buffers** — Every item's review date must be two business days before it goes out, and no holiday posts.

## The prompts

### PROMPT A — Cowork: cadence

> Using data/channel-benchmarks.csv and
> data/team-capacity.md, recommend how often to publish
> on LinkedIn, Facebook, the newsletter and YouTube.
> For each channel compare: the extra clicks from one
> more post, the unfollows or unsubscribes it costs,
> and the hours it takes. Show the numbers and the
> point where more posts stop paying off.
> Save strategy/cadence.md.

### PROMPT B — Cowork: the calendar

> Build a four-week editorial calendar from Monday
> 2 November 2026 in strategy/calendar.csv, in the
> columns of data/calendar-format.csv. Use the
> cadence, strategy/storyboard.md and
> strategy/content-spec.md.
> - Every item has review_by two business days
>   before its date; nothing on a public holiday.
> - No week exceeds the team's hours.
> Then show me a week-by-week summary with hours.

## Check your work

- [ ] cadence.md gives a frequency per channel with the evidence.
- [ ] It shows a third LinkedIn post a week costs far more unfollows than it earns.
- [ ] It explains the newsletter unsubscribe jump at weekly sends.
- [ ] calendar.csv covers four weeks in the required columns.
- [ ] Every review_by date is two business days before publishing.
- [ ] No week is over the team's 12 hours.

## If it goes wrong

- **Dates fall on weekends** — Say: "publish Monday to Saturday; the newsletter is Sunday 8am only".

## Stretch

- Connect Google Calendar in Cowork and add the review deadlines as events on a calendar you create for class.

> **Why it matters:** Frequency is a capacity decision as much as an audience one. A calendar the team cannot deliver is fiction.

## Next

Lab 7 — Studio Skills: Voice, Facts, Compliance and Formats. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
