# Prompts — Lab 03: Give Each Agent Its Skills

Surface: Claude Code (.claude/skills/) → Claude. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: twelve skills

```
Read data/skills-spec.md. Create the twelve
skills in .claude/skills/<name>/SKILL.md. Each has
frontmatter (name, and a description that starts
"Use when…") and short numbered steps, under 80
lines. Use data/brand.md, data/channel-formats.md,
data/facts-2026.md and data/compliance-checklist.md
as the sources — do not invent rules.
```

## PROMPT B — Claude Code: wire them up

```
Add a skills: list to each subagent in
.claude/agents/ with its two skills from
data/skills-spec.md. Add to CLAUDE.md that the Lead
(this session) runs fact-check and fin-compliance on
everything before showing it to me.
```
