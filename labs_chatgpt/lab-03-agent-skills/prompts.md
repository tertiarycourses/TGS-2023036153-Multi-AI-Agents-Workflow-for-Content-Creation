# Prompts — Lab 03: Give Each Agent Its Skills

Surface: Codex ($skill-creator) → ChatGPT (@skill-creator). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: twelve skills

```
$skill-creator Read data/skills-spec.md and
create the twelve skills in .agents/skills/<name>/
SKILL.md. Each has a name, a description that starts
"Use when…" and short numbered steps, under 80
lines. Use data/brand.md, data/channel-formats.md,
data/facts-2026.md and data/compliance-checklist.md
as the sources — do not invent rules.
```

## PROMPT B — Codex: wire them up

```
Add a "Skills" line to each role card in agents/
with its two skills from data/skills-spec.md. Add to
AGENTS.md that the Lead (this chat) runs fact-check
and fin-compliance on everything before showing it
to me.
```
