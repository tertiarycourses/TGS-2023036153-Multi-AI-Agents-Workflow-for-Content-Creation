# Prompts — Lab 05: Campaign 1: Research to Storyboard, with Subagents

Surface: Codex (subagents in parallel). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: research and ideas

```
Act as the Marketing Team Lead for the campaign
in data/campaign-objective.md.
Use subagents, in parallel:
- growth-strategist: competitor-scan → save
  research/competitive-analysis.md.
- growth-analyst: the funnel in data/firm-metrics.csv
  — what 40 chats a month needs → save
  research/funnel.md.
When both finish, the growth-strategist proposes
three ideas each for young professionals, mid-career
families and pre-retirees, scored with
data/idea-rubric.md → strategy/ideas.md.
Show me the top five and stop — I will choose.
```

## PROMPT B — Codex: the storyboard

```
I choose idea <number>, because <one line>.
Use subagents:
- growth-strategist: campaign-brief and a five-beat
  storyboard with data/storyboard-template.md →
  strategy/storyboard.md.
- content-creator: three channel variants that keep
  the same claims — LinkedIn, Facebook, a 60-second
  video.
Then run fact-check and fin-compliance yourself and
show me the issues before anything is final.
```
