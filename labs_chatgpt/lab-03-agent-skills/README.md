# Lab 03 — Give Each Agent Its Skills

> **USE: CODEX, THEN CHATGPT** — start in Codex; the step that moves you to ChatGPT says so

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 50 minutes · slides 49–54**\
**Surface:** Codex ($skill-creator) → ChatGPT (@skill-creator)\
**Features:** twenty skills owned by role — research, writing, LinkedIn, Facebook, blog, newsletter, web design, lead magnet, video, analysis and compliance · SKILL.md · the "Use when" trigger · test without naming

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-3 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

The team exists, but every agent writes in its own way. Rachel wants Horizon's voice, facts and compliance rules applied the same way by every agent, every time.

## Your goal

Instructions say who an agent is; skills say how it does the job. Write each procedure once and every agent applies it the same way, every time.

## You'll build

twenty skills in .agents/skills/, wired to the agents that own them

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Claude reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/skills-spec.md`
- `assets/channel-formats.md`
- `assets/brand.md`
- `assets/facts-2026.md`
- `assets/compliance-checklist.md`
- `solution/` — reference files from the verified build (each `.md` with its `.pdf`)
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 3". Run all of this lab's prompts in it.
2. **Read the spec** — skills-spec.md lists the twenty skills and who owns each.
3. **Create the skills** — Copy and paste Prompt A.
4. **Wire them up** — After the twenty skills appear in .agents/skills/, copy and paste Prompt B, then C to list every skill. The Lead's two go in AGENTS.md, not a file.
5. **Test without naming** — In a new session ask: "Write a Facebook post about the free Money Check-up Checklist." Ask which skills were used.
6. **Break it on purpose** — Ask for a post that says "guaranteed 8% a year". fin-compliance must flag it as Critical.
7. **Share with ChatGPT** — Use @skill-creator in ChatGPT to add sunny-voice, channel-formats and fin-compliance there too.

## The prompts

### PROMPT A — Codex: twenty skills

> $skill-creator Read data/skills-spec.md and
> create the twenty skills in .agents/skills/<name>/
> SKILL.md. Each has a name, a description that starts
> "Use when…" and short numbered steps, under 80
> lines. Use data/brand.md, data/channel-formats.md,
> data/facts-2026.md and data/compliance-checklist.md
> as the sources — do not invent rules.

### PROMPT B — Codex: wire them up

> Add a "Skills" line to each role card in agents/
> with its skills from data/skills-spec.md. Add to
> AGENTS.md that the Lead (this chat) runs fact-check
> and fin-compliance on everything before showing it
> to me.

### PROMPT C — Codex: see the skills

> List the skills in .agents/skills/. Show each skill,
> its owner (a role card, or the Lead) and its
> "Use when" line in a table. Confirm there are
> twenty, that each specialist has the skills
> the spec gives it, and that fact-check and
> fin-compliance belong to the Lead (this chat).

## Check your work

- [ ] Twenty folders in .agents/skills/, each with a SKILL.md.
- [ ] Every description starts "Use when…".
- [ ] Each specialist lists its own skills from the spec.
- [ ] The untold test picked sunny-voice and facebook-post.
- [ ] fin-compliance flagged "guaranteed 8%" as Critical.
- [ ] Three skills also appear in ChatGPT Skills.

## If it goes wrong

- **A skill never triggers** — Rewrite its description with the words a person would actually type.
- **I cannot see the skills** — Paste Prompt C, or .agents/ is a hidden folder — in Finder press Cmd+Shift+. (Windows: View → Hidden items).

## Stretch

- Add one more skill, utm-links, owned by the Content Creator.

> **Why it matters:** A skill costs almost nothing until it is needed. Keep the rules file (AGENTS.md) short and put procedures in skills.

## Next

Lab 4 — Install the Plugins Each Agent Needs. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
