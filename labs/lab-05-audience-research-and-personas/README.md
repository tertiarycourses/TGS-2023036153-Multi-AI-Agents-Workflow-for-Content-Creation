# Lab 05 — Audience Research and Personas from Evidence

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 2 · about 40 minutes · slides 59–63**\
**Surface:** Claude Cowork (sub-agents)\
**Features:** one analyst sub-agent per data source · counts, not impressions · confidence labels · content requirements

## The story so far

Jun Wei has drafted personas from instinct: 'busy young parents who love TikTok'. Rachel is not convinced. There are 150 survey answers, 60 enquiries and 200 checklists — what do they really say?

## Your goal

Personas made up in a meeting sound right and steer content wrong. Build them from what 150 people said, 60 enquiries and 200 checklists — with the evidence attached.

## You'll build

strategy/personas.md (three personas with evidence) and strategy/content-spec.md

## What is in this folder

- `assets/survey-responses.csv`
- `assets/enquiries.csv`
- `assets/checklist-results.csv`
- `assets/persona-template.md`
- `assets/content-spec-template.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the data** — Copy the three CSVs and two templates into data/.
2. **Analyse in parallel** — Paste Prompt A — one analyst sub-agent per data file.
3. **Build personas** — Cowork combines the findings into three personas with counts and confidence.
4. **Challenge one claim** — Pick one persona statement and ask: "which rows show that?"
5. **Write requirements** — Paste Prompt B for the content spec.

## The prompts

### PROMPT A — Cowork: the analysts

> Use three analyst sub-agents in parallel, one per
> file: data/survey-responses.csv,
> data/enquiries.csv, data/checklist-results.csv.
> Each one COUNTS with code — no estimating — and
> reports: top worries, channels, formats, trust
> drivers or checklist gaps, by age band, with n.
>
> Then build three personas with
> data/persona-template.md. Label anything the data
> does not show directly as INFERENCE, and any group
> under 20 people as LOW CONFIDENCE. Quote enquiries
> verbatim with their ids. Save strategy/personas.md.

### PROMPT B — Cowork: requirements

> From strategy/personas.md, write
> strategy/content-spec.md with
> data/content-spec-template.md: for each persona the
> top 3 questions to answer, channels in order,
> formats, length, tone, proof required, call to
> action and what never to say — each with the
> evidence (file and count) behind it.

## Check your work

- [ ] Three analyst sub-agents ran, one per file.
- [ ] Every persona statement carries a count and a file.
- [ ] The 60+ group is marked LOW CONFIDENCE (n = 12).
- [ ] The most-unticked checklist item is named (retirement number).
- [ ] Enquiry quotes are verbatim, with ids.
- [ ] content-spec.md has every field for every persona.

## If it goes wrong

- **The numbers change each run** — Insist the sub-agents count with code and show the code's output.

## Stretch

- Ask for a Live Artefact dashboard of the survey, filterable by age band.

> **Why it matters:** Ask "which rows show that?" of anything that sounds insightful. If the agent cannot point to rows, it is an inference — label it.

## Next

Lab 6 — Content Cadence and the Editorial Calendar. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
