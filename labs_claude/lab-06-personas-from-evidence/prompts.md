# Prompts — Lab 06: Growth Analyst: Personas from Evidence

Surface: Claude Code (analyst subagents). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: three analysts

```
Use three growth-analyst subagents in parallel, one
per file: data/survey-responses.csv,
data/enquiries.csv, data/checklist-results.csv.
Each uses audience-insights: counts with code, n
and the file on every claim, INFERENCE and LOW
CONFIDENCE labels, enquiry quotes verbatim with ids.
Combine the results into three personas with
data/persona-template.md → strategy/personas.md.
```

## PROMPT B — Claude Code: requirements

```
Use the growth-strategist and the content-creator
subagents to write strategy/content-spec.md with
data/content-spec-template.md: for each persona the
top 3 questions, channels, formats, length, tone,
proof, call to action and never-say — each with the
evidence (file and count) behind it.
```
