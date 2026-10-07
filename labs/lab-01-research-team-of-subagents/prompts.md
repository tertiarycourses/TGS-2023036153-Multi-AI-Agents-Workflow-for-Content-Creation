# Prompts — Lab 01: A Research Team of Sub-agents

Surface: Claude Cowork. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Cowork: brief the team

```
I'm the marketing lead at Horizon Wealth Planning,
an independent financial-planning firm in Singapore.
Read data/business-brief.md and
data/research-agents-spec.md.

We will run a research team of four sub-agents:
1. market-researcher — Singapore demand for
   financial planning: who, which channels, why now.
2. business-analyst — our funnel from
   data/firm-metrics.csv: what 40 chats a month needs.
3. competitive-analyst — six named competitors:
   offer, pricing model, channels, content themes.
4. strategy-advisor — reads the other three and
   writes the recommendation.

Rules for all: cite every figure with source and
date, or write UNKNOWN. Never publish the INTERNAL
columns. Confirm each role in one line and show me
your plan. Do not start yet.
```

## PROMPT B — Cowork: run the team

```
Run the research team now, using sub-agents.
- Start market-researcher, business-analyst and
  competitive-analyst in parallel, each as its own
  sub-agent, each saving its report to research/.
- When all three are done, the strategy-advisor
  writes research/recommendation.md exactly as
  research-agents-spec.md describes.
Then give me a five-line summary and a list of
everything marked UNKNOWN.
```
