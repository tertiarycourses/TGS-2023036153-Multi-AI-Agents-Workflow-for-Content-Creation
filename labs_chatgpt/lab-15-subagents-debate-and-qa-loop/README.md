# Lab 15 — Subagents at Work: A Strategy Debate and a QA Loop

> **USE: CODEX** — Codex, in your horizon-studio folder

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 4 · about 30 minutes · slides 156–162**\
**Surface:** Codex (subagents: an advocate, a critic, a writer, a QA Auditor and a designer; the Lead relays)\
**Features:** an advocate and a critic argue the pros and cons · the Lead judges · a writer and a QA Auditor loop until PASS · the Lead passes each FAIL back to the writer · human approval

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-15 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

January is for people turning 55. Before Horizon spends on a CPF explainer for them, Rachel wants it argued both ways — and the intern's draft checked until it passes.

## Your goal

Subagents only report back to the Lead, so the Lead carries every rebuttal and every fix. Run a strategy debate and a QA loop that way, and see what a team that can talk would save.

## You'll build

the decision (pros, cons, verdict), then an email, a video script and a thumbnail that passed QA, submitted for your approval — with a Word copy of each

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Codex reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/turning-55-brief.md`
- `assets/turning-55-draft.md`
- `assets/dot-and-workspace-agents.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 15". Run all of this lab's prompts in it.
2. **Part 1: the debate** — Copy and paste Prompt A. The advocate and the critic each make their case; the Lead passes each case to the other for a rebuttal.
3. **Decide** — Read the decision. Reply "go", "go with conditions" or "no-go" — the call is yours.
4. **Part 2: the QA loop** — After you have made the call, copy and paste Prompt B. The audit fails on round 1; watch the Lead pass the fixes back to the writer.
5. **Approve as a person** — Read the pieces and the QA report, then in your own terminal: node scripts/approve.mjs <id> --by "Your Name".
6. **Compare** — After you have approved the pieces, copy and paste Prompt C. How many fixes did the Lead have to relay?

## The prompts

### PROMPT A — Codex: the strategy debate

> Test the strategy in data/turning-55-brief.md
> before we spend on it. You are the Lead and the
> judge: do not argue. Use two subagents in parallel:
> - advocate, following agents/growth-strategist.md:
>   argue FOR the strategy.
> - critic, following agents/growth-analyst.md: argue
>   AGAINST it.
> - Both: cite data/campaign-results.csv,
>   strategy/personas.md, data/facts-2026.md or
>   data/compliance-checklist.md for every point.
> Then give each one the other's case and ask for a
> rebuttal — two rounds at most.
> Write strategy/turning-55-decision.md with the pros,
> the cons, your verdict (go / go with conditions /
> no-go) and the conditions. Show me the verdict
> first, the pros and cons side by side, the debate
> round by round, and what I do next. Then wait for
> my decision.
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

### PROMPT B — Codex: the QA loop

> Run Part 2 of data/turning-55-brief.md, using my
> decision. Use subagents, each following its card:
> - writer (content-creator): rewrite
>   data/turning-55-draft.md into
>   content/turning-55/email.md and
>   content/turning-55/video-script.md.
> - qa-auditor: audit each piece with fact-check and
>   fin-compliance; write review/turning-55-qa.md, one
>   section per round, PASS or FAIL per check, with
>   the lines to fix.
> - On FAIL, give the auditor's lines to the writer
>   unchanged and audit again. Three rounds at most,
>   then ask me.
> - designer (creative-designer): once a piece passes,
>   make one thumbnail with $imagegen and alt text,
>   from its headline.
> - You, the Lead: never write or fix content. When
>   everything passes, run node scripts/submit.mjs on
>   each piece. Publish nothing.
> Show me the QA report: one row per round, PASS or
> FAIL per check.
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

### PROMPT C — Codex: compare

> Count how many fixes you relayed from the
> qa-auditor to the writer, and how many rounds each
> piece needed. In three lines: what would change if
> the writer and the auditor could message each
> other directly?

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Summarise the debate: the best point for, the best point against, and your verdict."
- "What failed in the first QA round, in plain English?"
- "How many rounds did each piece need, and why?"

## Check your work

- [ ] The advocate and the critic each answered the other's case; every point cites a file.
- [ ] The decision has pros, cons, a verdict — and you made the call.
- [ ] Round 1 of the QA report FAILED: the FRS figure, CPF LIFE "from 55", the promised payout, the advice and the missing disclaimer.
- [ ] The Lead passed the fixes to the writer; a later round PASSED.
- [ ] You approved in your own terminal; the rows show your name and a hash.
- [ ] You know how many fixes the Lead relayed.

## If it goes wrong

- **The Lead fixed the draft itself** — Remind it: "You never write or fix content — pass the lines to the writer."
- **The loop never ends** — Remind the Lead: three rounds at most, then escalate to me.
- **Only one subagent ran** — Ask for "subagents, one per role" and name each one.

## Stretch

- Add a third debater, a pre-retiree persona, who argues from the customer's side.
- Optional, on Pro or Business Premium: ask the trainer to show a Dot as an always-on Team Lead with Custom Rules that block sending (data/dot-and-workspace-agents.md).

> **Why it matters:** Use subagents when only the result matters. When the agents must talk — to argue, or to send work back — the Lead becomes the messenger, and every message costs a turn.

## Next

The course summary, then the assessment.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
