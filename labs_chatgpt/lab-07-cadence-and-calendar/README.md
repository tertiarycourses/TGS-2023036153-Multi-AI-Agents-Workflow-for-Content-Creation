# Lab 07 — Growth Analyst and Strategist: Cadence and Calendar

> **USE: CODEX** — Codex, in your horizon-studio folder

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 2 · about 35 minutes · slides 83–88**\
**Surface:** Codex (subagents)\
**Features:** marginal value vs fatigue · team capacity · review buffers · a four-week calendar

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-7 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

Jun Wei has 12 hours a week and Rachel needs two business days to review anything. How often should each channel run, and what goes out when?

## Your goal

Post too little and nobody remembers you; too much and people unfollow. The analyst finds the point where more stops paying; the strategist turns it into four deliverable weeks.

## You'll build

how often to post on each channel, and a four-week calendar — with a Word copy of each

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Codex reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/channel-benchmarks.csv`
- `assets/team-capacity.md`
- `assets/calendar-format.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 7". Run all of this lab's prompts in it.
2. **Check the data** — The assets are already in data/. Open one and skim it.
3. **Find the sweet spot** — Copy and paste Prompt A.
4. **Question it** — Why is the newsletter not weekly? The answer is in the unsubscribes.
5. **Plan four weeks** — After the analyst recommends a cadence, copy and paste Prompt B.
6. **Check the buffers** — Every review date is two business days ahead; nothing on a holiday.

## The prompts

### PROMPT A — Codex: the analyst

> Use the growth-analyst subagent. From
> data/channel-benchmarks.csv and
> data/team-capacity.md, recommend how often to
> publish on LinkedIn, Facebook, the newsletter and
> YouTube. Compare the extra clicks from one more
> post, the unfollows or unsubscribes it costs, and
> the hours → strategy/cadence.md. Show the numbers.
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

### PROMPT B — Codex: the strategist

> Use the growth-strategist subagent to build a
> four-week calendar from Monday 2 November 2026 in
> strategy/calendar.csv (columns as
> data/calendar-format.csv), from the cadence,
> strategy/storyboard.md and strategy/content-spec.md.
> review_by two business days before each date; no
> public holidays; no week over the team's hours.
> Show a week-by-week summary with hours.
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Why is the newsletter not weekly? Show me the numbers."
- "What happens if we add a third LinkedIn post a week?"
- "Which week is busiest, and does the team have the hours?"

## Check your work

- [ ] The cadence gives a frequency per channel with the evidence.
- [ ] A third LinkedIn post a week costs far more unfollows than it earns.
- [ ] It explains the unsubscribe jump at weekly emails.
- [ ] The calendar covers four weeks in the required columns.
- [ ] Every review_by date is two business days before publishing.
- [ ] No week is over 12 hours.

## If it goes wrong

- **Dates fall on weekends** — Say: "publish Monday to Saturday; the newsletter is Sunday 8am only".

## Stretch

- Have the Lead add the review deadlines to a calendar you create for class.

> **Why it matters:** Frequency is a capacity decision as much as an audience one. A calendar the team cannot deliver is fiction.

## Next

Lab 8 — Content Creator: A Quick Blog Article. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
