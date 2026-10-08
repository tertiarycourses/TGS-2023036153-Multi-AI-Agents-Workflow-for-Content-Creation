# Lab 07 — Studio Skills: Voice, Facts, Compliance and Formats

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 2 · about 40 minutes · slides 73–77**\
**Surface:** Claude Cowork (/skill-creator) → every tool\
**Features:** /skill-creator · SKILL.md · one skill set shared by Cowork, Claude Code, Codex and Hermes

## The story so far

Tomorrow a dozen agents will write for Horizon. Each one needs the same voice, the same facts and the same compliance rules — written once, used everywhere, and never pasted into a prompt again.

## Your goal

Tomorrow a dozen agents will write for Horizon. Write the voice, the facts, the compliance rules and the channel formats down once — as skills every agent loads when it needs them.

## You'll build

Four skills — sunny-voice, fact-check, fin-compliance, channel-formats — in skills/, .claude/skills/ and .agents/skills/

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

1. **Do it once** — Paste Prompt A: Cowork writes one LinkedIn post by hand with you. Refine it until it is right.
2. **Save the skills** — Type /skill-creator and paste Prompt B.
3. **Write them to the project** — Cowork saves each skill folder in horizon-studio/skills/ as well.
4. **Share them** — Copy skills/* into .claude/skills/ (Claude Code) and .agents/skills/ (Codex).
5. **Test without naming them** — In a new Cowork task: "Write a Facebook post on SRS for young families." Ask which skills it used.

## The prompts

### PROMPT A — Cowork: do it once

> Write one LinkedIn post for Horizon on "Know your
> retirement number in 30 minutes", using
> data/brand.md, data/channel-formats.md and only
> facts in data/facts-2026.md. Then check it against
> data/compliance-checklist.md and show me a table of
> the checks. I will tell you what to change.

### PROMPT B — /skill-creator: save it

> /skill-creator Turn what we just did into four
> skills, as data/skills-spec.md describes:
> sunny-voice, fact-check, fin-compliance and
> channel-formats. Each has a "Use when..." description
> and stays under 80 lines. Also write each skill
> folder into horizon-studio/skills/<name>/SKILL.md
> so other tools can use the same files.

## Check your work

- [ ] Four skills appear under Customize → Skills in Cowork.
- [ ] skills/ holds four folders, each with a SKILL.md.
- [ ] The same folders are in .claude/skills/ and .agents/skills/.
- [ ] Each description starts "Use when…".
- [ ] The new task picked the skills without being told to.
- [ ] fact-check marked a figure not on the facts sheet UNVERIFIED.

## If it goes wrong

- **The skill never triggers** — Rewrite its description: say when to use it, with the words a person would type.

## Stretch

- Add a fifth skill, utm-links, that tags every link with the right source, medium and campaign.

> **Why it matters:** A skill costs almost nothing until it is needed. CLAUDE.md and AGENTS.md are read every time — keep them short; put procedures in skills.

## Next

Lab 8 — The Human Approval Gate and the Publishers. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
