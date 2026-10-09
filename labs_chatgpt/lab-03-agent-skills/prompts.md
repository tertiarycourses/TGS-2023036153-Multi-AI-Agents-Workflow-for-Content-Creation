# Prompts — Lab 03: Give Each Agent Its Skills

**Use: Codex, then ChatGPT — start in Codex; the step that moves you to ChatGPT says so.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-3 (one Copy button per prompt).

## PROMPT A — Codex: twenty skills

```
$skill-creator Read data/skills-spec.md and
create the twenty skills in .agents/skills/<name>/
SKILL.md. Each has a name, a description that starts
"Use when…" and short numbered steps, under 80
lines. Use data/brand.md, data/channel-formats.md,
data/facts-2026.md and data/compliance-checklist.md
as the sources — do not invent rules.
```

## PROMPT B — Codex: wire them up

```
Add a "Skills" line to each role card in agents/
with its skills from data/skills-spec.md. Add to
AGENTS.md that the Lead (this chat) runs fact-check
and fin-compliance on everything before showing it
to me.
```

## PROMPT C — Codex: see the skills

```
List the skills in .agents/skills/. Show each skill,
its owner (a role card, or the Lead) and its
"Use when" line in a table. Confirm there are
twenty, that each specialist has the skills
the spec gives it, and that fact-check and
fin-compliance belong to the Lead (this chat).
```
