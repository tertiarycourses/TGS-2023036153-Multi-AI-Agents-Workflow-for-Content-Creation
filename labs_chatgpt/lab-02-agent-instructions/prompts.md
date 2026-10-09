# Prompts — Lab 02: Form the Team: Instructions for Each Agent

**Use: Codex — Codex, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-2 (one Copy button per prompt).

## PROMPT A — Codex: five role cards

```
Read data/role-specs.md. Create five role cards
in agents/ — growth-strategist.md, content-creator.md,
creative-designer.md, website-designer.md and
growth-analyst.md. Each has: the job, what it reads,
what it delivers, the plugins it may use, what it
must never do, and how it reports back.
Then add "## The marketing team" to AGENTS.md: one
line per agent pointing to its card, and the rule
"when I ask for the team, use subagents — one per
role — each following its card".
```

## PROMPT B — Codex: see the team

```
List the role cards in agents/. For each, show
the file name, the role and its one-line job, in a
table. Then confirm there are five, and that
AGENTS.md lists all five under "## The marketing
team". If any other card is there, list it and ask
me before moving it to _archive/.
```

## PROMPT C — Codex: meet the team

```
Use subagents — one per role, each following its
card in agents/. Ask each: "In one line, who are
you, and what is the first thing you would do for
Horizon's goal of 40 booked chats a month?" Show me
the five answers in a table.
```
