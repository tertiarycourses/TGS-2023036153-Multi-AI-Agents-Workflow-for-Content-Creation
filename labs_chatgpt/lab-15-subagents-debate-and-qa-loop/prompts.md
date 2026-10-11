# Prompts — Lab 15: Subagents at Work: A Strategy Debate and a QA Loop

**Use: Codex — Codex, in your horizon-studio folder.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-15 (one Copy button per prompt).

## PROMPT A — Codex: the strategy debate

```
Test the strategy in data/turning-55-brief.md
before we spend on it. You are the Lead and the
judge: do not argue. Use two subagents in parallel:
- advocate, following agents/growth-strategist.md:
  argue FOR the strategy.
- critic, following agents/growth-analyst.md: argue
  AGAINST it.
- Both: cite data/campaign-results.csv,
  strategy/personas.md, data/facts-2026.md or
  data/compliance-checklist.md for every point.
Then give each one the other's case and ask for a
rebuttal — two rounds at most.
Write strategy/turning-55-decision.md with the pros,
the cons, your verdict (go / go with conditions /
no-go) and the conditions. Show me the verdict
first, the pros and cons side by side, the debate
round by round, and what I do next. Then wait for
my decision.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPT B — Codex: the QA loop

```
Run Part 2 of data/turning-55-brief.md, using my
decision. Use subagents, each following its card:
- writer (content-creator): rewrite
  data/turning-55-draft.md into
  content/turning-55/email.md and
  content/turning-55/video-script.md.
- qa-auditor: audit each piece with fact-check and
  fin-compliance; write review/turning-55-qa.md, one
  section per round, PASS or FAIL per check, with
  the lines to fix.
- On FAIL, give the auditor's lines to the writer
  unchanged and audit again. Three rounds at most,
  then ask me.
- designer (creative-designer): once a piece passes,
  make one thumbnail with $imagegen and alt text,
  from its headline.
- You, the Lead: never write or fix content. When
  everything passes, run node scripts/submit.mjs on
  each piece. Publish nothing.
Show me the QA report: one row per round, PASS or
FAIL per check.
Write for a business owner, in plain English: no
codes, IDs, file names or line numbers; start with
what it means and what I do next. Save a Word copy
(.docx) of each result.
```

## PROMPT C — Codex: compare

```
Count how many fixes you relayed from the
qa-auditor to the writer, and how many rounds each
piece needed. In three lines: what would change if
the writer and the auditor could message each
other directly?
```

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Summarise the debate: the best point for, the best point against, and your verdict."
- "What failed in the first QA round, in plain English?"
- "How many rounds did each piece need, and why?"
