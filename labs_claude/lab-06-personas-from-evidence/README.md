# Lab 06 — Growth Analyst: Personas from Evidence

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 2 · about 40 minutes · slides 68–72**\
**Surface:** Claude Code (analyst subagents)\
**Features:** three analyst subagents, one per data file · counts, not impressions · confidence labels · content requirements

## The story so far

Jun Wei drafted personas from instinct: 'busy young parents who love TikTok'. Rachel is not convinced. There are 150 survey answers, 60 enquiries and 200 checklists.

## Your goal

Personas made up in a meeting steer content wrong. The Growth Analyst builds them from 150 survey answers, 60 enquiries and 200 checklists — and labels what is guesswork.

## You'll build

strategy/personas.md and strategy/content-spec.md

## What is in this folder

- `assets/survey-responses.csv`
- `assets/enquiries.csv`
- `assets/checklist-results.csv`
- `assets/persona-template.md`
- `assets/content-spec-template.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Check the data** — The CSVs and templates are already in data/. Open one and skim it.
2. **Analyse in parallel** — Paste Prompt A — three analyst subagents, one per file.
3. **Challenge a claim** — Pick one persona statement and ask: "which rows show that?"
4. **Write the requirements** — Paste Prompt B.
5. **Check the gaps** — The 60+ group must be LOW CONFIDENCE.

## The prompts

### PROMPT A — Claude Code: three analysts

> Use three growth-analyst subagents in parallel, one
> per file: data/survey-responses.csv,
> data/enquiries.csv, data/checklist-results.csv.
> Each uses audience-insights: counts with code, n
> and the file on every claim, INFERENCE and LOW
> CONFIDENCE labels, enquiry quotes verbatim with ids.
> Combine the results into three personas with
> data/persona-template.md → strategy/personas.md.

### PROMPT B — Claude Code: requirements

> Use the growth-strategist and the content-creator
> subagents to write strategy/content-spec.md with
> data/content-spec-template.md: for each persona the
> top 3 questions, channels, formats, length, tone,
> proof, call to action and never-say — each with the
> evidence (file and count) behind it.

## Check your work

- [ ] Three analyst subagents ran, one per file.
- [ ] Every persona statement carries a count and a file.
- [ ] The 60+ group is LOW CONFIDENCE (n = 12).
- [ ] The most-unticked checklist item is the retirement number.
- [ ] Enquiry quotes are verbatim, with ids.
- [ ] content-spec.md has every field for every persona.

## If it goes wrong

- **Numbers change between runs** — Insist on counting with code and showing the printed output.

## Stretch

- Ask the analyst for a filterable dashboard of the survey as an artifact.

> **Why it matters:** Ask "which rows show that?" of anything that sounds insightful. If the agent cannot point to rows, it is an inference.

## Next

Lab 7 — Growth Analyst and Strategist: Cadence and Calendar. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
