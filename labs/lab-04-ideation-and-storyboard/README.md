# Lab 04 — Ideation Sub-agents and a Digital Storyboard

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 1 · about 40 minutes · slides 49–53**\
**Surface:** Claude Cowork (sub-agents, Live Artefact)\
**Features:** three ideators in parallel · rubric scoring · a human concept checkpoint · a five-beat storyboard

## The story so far

The site is live. Now the campaign: 'Know Your Number', November to January. Rachel wants ideas for three very different audiences — and a storyboard so LinkedIn, Facebook and YouTube tell the same story.

## Your goal

Three agents, each thinking as a different audience, give more varied ideas than one. You choose the idea; agents turn it into a storyboard every channel can follow.

## You'll build

strategy/ideas.md (15 scored ideas), strategy/storyboard.md and an interactive storyboard Live Artefact

## What is in this folder

- `assets/campaign-objective.md`
- `assets/idea-rubric.md`
- `assets/storyboard-template.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the brief** — Copy the assets into data/ and open Cowork on horizon-studio.
2. **Diverge** — Paste Prompt A — three ideator sub-agents in parallel, five ideas each.
3. **Score** — Cowork merges and scores the 15 ideas with the rubric and stops at the top five.
4. **Choose** — You pick the campaign idea — the human concept checkpoint. Say why in one line.
5. **Storyboard it** — Paste Prompt B with your choice.
6. **Check the claims** — Every beat's claim must have a source in facts-2026.md.

## The prompts

### PROMPT A — Cowork: three ideators

> Read data/campaign-objective.md,
> data/idea-rubric.md and research/recommendation.md.
>
> Use three ideator sub-agents in parallel, one per
> audience: young professionals (25-34), mid-career
> families (35-49), pre-retirees (50-62). Each
> proposes 5 content ideas as records: title, hook,
> format, channel, the proof it needs, call to action.
>
> Then merge the 15: remove duplicates, keep who
> proposed each, score them with the rubric and save
> strategy/ideas.md. Show me the top five as a table
> and stop — I will choose.

### PROMPT B — Cowork: the storyboard

> I choose idea <number>, because <one line>.
>
> Storyboard it with data/storyboard-template.md:
> five beats — hook, tension, proof, resolution,
> action. For each: visual, words on screen,
> voice-over, the claim and its source in
> data/facts-2026.md.
>
> Add three channel variants that keep the same
> claims: LinkedIn post, Facebook post, 60-second
> YouTube video. Save strategy/storyboard.md and
> build it as a Live Artefact I can click through.

## Check your work

- [ ] Three ideator sub-agents ran in parallel.
- [ ] strategy/ideas.md holds 15 ideas, each with its author and score.
- [ ] You chose the idea and recorded why.
- [ ] The storyboard has five beats; every claim has a source.
- [ ] The three variants keep the same claims.
- [ ] The storyboard Live Artefact is saved in your sidebar.

## If it goes wrong

- **The ideas all sound alike** — Give each ideator a persona and a different format to favour.

## Stretch

- Ask a fourth sub-agent to argue against the chosen idea, then decide whether to keep it.

> **Why it matters:** Agents diverge; people decide. The concept checkpoint is where the campaign becomes yours.

## Next

Lab 5 — Audience Research and Personas from Evidence. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
