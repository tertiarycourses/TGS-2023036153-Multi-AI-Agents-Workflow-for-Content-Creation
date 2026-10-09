# Lab 03 — Give Each Agent Its Skills

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 50 minutes · slides 45–49**\
**Surface:** Codex ($skill-creator) → ChatGPT (@skill-creator)\
**Features:** twelve skills: two per specialist, two for the Lead · SKILL.md · the "Use when" trigger · test without naming

## The story so far

The team exists, but every agent writes in its own way. Rachel wants Horizon's voice, facts and compliance rules applied the same way by every agent, every time.

## Your goal

Instructions say who an agent is; skills say how it does the job. Write each procedure once and every agent applies it the same way, every time.

## You'll build

twelve skills in .agents/skills/, wired to the agents that own them

## What is in this folder

- `assets/skills-spec.md`
- `assets/channel-formats.md`
- `assets/brand.md`
- `assets/facts-2026.md`
- `assets/compliance-checklist.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Read the spec** — skills-spec.md lists the twelve skills and who owns each.
2. **Create the skills** — Paste Prompt A.
3. **Wire them up** — Paste Prompt B — each agent now knows its two skills; the Lead knows fact-check and fin-compliance.
4. **Test without naming** — In a new session ask: "Write a Facebook post about the free Money Check-up Checklist." Ask which skills were used.
5. **Break it on purpose** — Ask for a post that says "guaranteed 8% a year". fin-compliance must flag it as Critical.
6. **Share with ChatGPT** — Use @skill-creator in ChatGPT to add sunny-voice, channel-formats and fin-compliance there too.

## The prompts

### PROMPT A — Codex: twelve skills

> $skill-creator Read data/skills-spec.md and
> create the twelve skills in .agents/skills/<name>/
> SKILL.md. Each has a name, a description that starts
> "Use when…" and short numbered steps, under 80
> lines. Use data/brand.md, data/channel-formats.md,
> data/facts-2026.md and data/compliance-checklist.md
> as the sources — do not invent rules.

### PROMPT B — Codex: wire them up

> Add a "Skills" line to each role card in agents/
> with its two skills from data/skills-spec.md. Add to
> AGENTS.md that the Lead (this chat) runs fact-check
> and fin-compliance on everything before showing it
> to me.

## Check your work

- [ ] Twelve folders in .agents/skills/, each with a SKILL.md.
- [ ] Every description starts "Use when…".
- [ ] Each specialist lists its own two skills.
- [ ] The untold test picked sunny-voice and channel-formats.
- [ ] fin-compliance flagged "guaranteed 8%" as Critical.
- [ ] Three skills also appear in ChatGPT Skills.

## If it goes wrong

- **A skill never triggers** — Rewrite its description with the words a person would actually type.

## Stretch

- Add a thirteenth skill, utm-links, owned by the Content Creator.

> **Why it matters:** A skill costs almost nothing until it is needed. Keep the rules file (AGENTS.md) short and put procedures in skills.

## Next

Lab 4 — Install the Plugins Each Agent Needs. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
