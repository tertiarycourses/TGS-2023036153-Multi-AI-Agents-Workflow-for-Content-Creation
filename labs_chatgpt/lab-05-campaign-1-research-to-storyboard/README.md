# Lab 05 — Campaign 1: Research to Storyboard, with Subagents

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 50 minutes · slides 60–64**\
**Surface:** Codex (subagents in parallel)\
**Features:** the Lead delegates · strategist and analyst in parallel · nine scored ideas · a human concept checkpoint · a five-beat storyboard

## The story so far

The team's first campaign: 'Know Your Number', November to January. Rachel wants research, ideas for three audiences, her choice, and a storyboard every channel follows.

## Your goal

The team's first job: find who to reach and what to say for the "Know Your Number" campaign — research in parallel, ideas scored, a person choosing, a storyboard every channel follows.

## You'll build

research/ (competitors, funnel), strategy/ideas.md, strategy/storyboard.md with three channel variants

## What is in this folder

- `assets/campaign-objective.md`
- `assets/idea-rubric.md`
- `assets/storyboard-template.md`
- `assets/firm-metrics.csv`
- `assets/services.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Brief the Lead** — The briefs are already in data/. You are the client; your session is the Marketing Team Lead.
2. **Research in parallel** — Paste Prompt A. Watch the strategist and the analyst run at the same time.
3. **Read the ideas** — Nine ideas, scored with the rubric. The Lead stops for you.
4. **Choose** — Pick one idea and say why — the human concept checkpoint.
5. **Storyboard** — Paste Prompt B with your choice.
6. **Check the claims** — Every beat's claim must have a source in facts-2026.md.

## The prompts

### PROMPT A — Codex: research and ideas

> Act as the Marketing Team Lead for the campaign
> in data/campaign-objective.md.
> Use subagents, in parallel:
> - growth-strategist: competitor-scan → save
>   research/competitive-analysis.md.
> - growth-analyst: the funnel in data/firm-metrics.csv
>   — what 40 chats a month needs → save
>   research/funnel.md.
> When both finish, the growth-strategist proposes
> three ideas each for young professionals, mid-career
> families and pre-retirees, scored with
> data/idea-rubric.md → strategy/ideas.md.
> Show me the top five and stop — I will choose.

### PROMPT B — Codex: the storyboard

> I choose idea <number>, because <one line>.
> Use subagents:
> - growth-strategist: campaign-brief and a five-beat
>   storyboard with data/storyboard-template.md →
>   strategy/storyboard.md.
> - content-creator: three channel variants that keep
>   the same claims — LinkedIn, Facebook, a 60-second
>   video.
> Then run fact-check and fin-compliance yourself and
> show me the issues before anything is final.

## Check your work

- [ ] The strategist and the analyst ran in parallel.
- [ ] research/ has the competitor analysis and the funnel, cited.
- [ ] strategy/ideas.md holds nine scored ideas with their authors.
- [ ] You chose the idea and recorded why.
- [ ] The storyboard has five beats; every claim has a source.
- [ ] The Lead's fact-check and fin-compliance report came back.

## If it goes wrong

- **The Lead did the work itself** — Ask directly for subagents, naming each agent.

## Stretch

- Ask the analyst which persona the funnel says to target first, and compare it with your choice.

> **Why it matters:** Agents diverge; a person decides. The concept checkpoint is where the campaign becomes yours.

## Next

Lab 6 — Growth Analyst: Personas from Evidence. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
