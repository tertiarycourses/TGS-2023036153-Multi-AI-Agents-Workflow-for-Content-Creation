# The four studio skills (Lab 7)

Each skill is a folder with a SKILL.md: a name, a "Use when..." description,
then the steps. Keep each under 80 lines. Save them in the project's
skills/ folder so every tool can use the same files:

| Tool | Where it looks |
|---|---|
| Claude Cowork | Customize -> Skills (saved by /skill-creator) |
| Claude Code (subagents, agent teams) | .claude/skills/<name>/SKILL.md |
| Codex | .agents/skills/<name>/SKILL.md |
| Hermes Agent | ~/.hermes/profiles/<profile>/skills/<name>/SKILL.md |

1. **sunny-voice** — Use when writing anything Horizon will publish. The
   voice, banned words and sign-off from brand.md. Plain English check: no
   sentence over 25 words; explain every acronym once.
2. **fact-check** — Use when a draft contains a number, age, rate, date or
   rule. List every claim; match each to facts-2026.md; mark it VERIFIED or
   UNVERIFIED; never "fix" a figure from memory.
3. **fin-compliance** — Use before any content goes to a person for review.
   Apply compliance-checklist.md rule by rule; output a table (rule, words,
   severity, fix) and PASS / FAIL; add the right disclaimer.
4. **channel-formats** — Use when writing a LinkedIn post, Facebook post,
   newsletter issue or YouTube script. The shapes in channel-formats.md and
   the content-file frontmatter from publishing-spec.md.
