# Lab 01 — A Research Team of Sub-agents

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 27–31**\
**Surface:** Claude Cowork\
**Features:** sub-agents in parallel · market research · business analysis · competitive analysis · a recommendation

## The story so far

October 2026. Rachel wants 40 booked chats a month by March. Before she spends a dollar, her partners want three answers: who to reach, what the funnel needs, and what competitors already publish.

## Your goal

Before Horizon spends a dollar on content, find out who to reach, what the numbers need and what competitors do — with four specialist agents instead of one overloaded chat.

## You'll build

research/: market research, business analysis, competitive analysis and a recommendation, every figure cited

## What is in this folder

- `assets/business-brief.md`
- `assets/firm-metrics.csv`
- `assets/services.csv`
- `assets/research-agents-spec.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Make the studio folder** — Create horizon-studio with a data/ folder. Copy this lab's assets into data/.
2. **Open Cowork** — In the Claude desktop app choose Cowork, then point it at the horizon-studio folder.
3. **Brief the team** — Paste Prompt A. Cowork confirms the four roles and the plan — correct anything before it starts.
4. **Run them in parallel** — Paste Prompt B. Watch three sub-agents work at once in the progress panel.
5. **Audit the sources** — Open competitive-analysis.md. Every figure needs a source and a date; gaps say UNKNOWN.
6. **Decide** — Read recommendation.md. Change one thing you disagree with — it is your recommendation now.

## The prompts

### PROMPT A — Cowork: brief the team

> I'm the marketing lead at Horizon Wealth Planning,
> an independent financial-planning firm in Singapore.
> Read data/business-brief.md and
> data/research-agents-spec.md.
>
> We will run a research team of four sub-agents:
> 1. market-researcher — Singapore demand for
>    financial planning: who, which channels, why now.
> 2. business-analyst — our funnel from
>    data/firm-metrics.csv: what 40 chats a month needs.
> 3. competitive-analyst — six named competitors:
>    offer, pricing model, channels, content themes.
> 4. strategy-advisor — reads the other three and
>    writes the recommendation.
>
> Rules for all: cite every figure with source and
> date, or write UNKNOWN. Never publish the INTERNAL
> columns. Confirm each role in one line and show me
> your plan. Do not start yet.

### PROMPT B — Cowork: run the team

> Run the research team now, using sub-agents.
> - Start market-researcher, business-analyst and
>   competitive-analyst in parallel, each as its own
>   sub-agent, each saving its report to research/.
> - When all three are done, the strategy-advisor
>   writes research/recommendation.md exactly as
>   research-agents-spec.md describes.
> Then give me a five-line summary and a list of
> everything marked UNKNOWN.

## Check your work

- [ ] Cowork confirmed all four roles before starting.
- [ ] Three research sub-agents ran at the same time.
- [ ] research/ holds market-research, business-analysis, competitive-analysis and recommendation.
- [ ] The competitive analysis names six real competitors, each with a source and a date.
- [ ] The business analysis shows conversion rates and the visits needed for 40 chats a month.
- [ ] No uncited figure; no INTERNAL fee anywhere in the reports.

## If it goes wrong

- **Cowork did it all itself** — Say it directly: "use sub-agents — one per role, in parallel".
- **No time for research** — Use recommendation-sample.md from Lab 2's assets and carry on.

## Stretch

- Add a fifth sub-agent, regulatory-scout, that lists the MAS and PDPA rules a financial firm's marketing must follow — with sources.

> **Why it matters:** A sub-agent does its research in its own context and hands back only the result. Your main conversation stays clear for the decision.

## Next

Lab 2 — Plan and Build the Horizon Website with Codex. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
