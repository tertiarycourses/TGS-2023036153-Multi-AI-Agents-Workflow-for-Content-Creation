# Lab 08 — Campaign 2: A Social Media Week

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 3 · about 50 minutes · slides 88–92**\
**Surface:** Codex (subagents) → LinkedIn, Facebook\
**Features:** the publisher kit · creator and designer subagents in parallel · the Lead's review · human approval → post

## The story so far

Day 2. Week 1 of the campaign starts Monday: two LinkedIn posts and three Facebook posts, each with a visual — and Rachel's one rule: nothing goes out unless a person approved that exact version.

## Your goal

Week 1 of the campaign: two LinkedIn and three Facebook posts, each with a visual. Copy and design must agree, the Lead must check every claim — and only a person can approve.

## You'll build

content/social/week-01/: five posts with images, reviewed, approved by you and posted (or dry-run)

## What is in this folder

- `assets/social-brief.md`
- `assets/publisher-kit/`
- `assets/publishing-spec.md`
- `assets/approvals-format.csv`
- `assets/connect-accounts.md`
- `assets/env.example`
- `assets/sample-calendar.csv`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Install the kit** — Copy publisher-kit/scripts into scripts/. Then ask Codex to add a hook that blocks any command running approve.mjs, and trust it.
2. **Test the gate** — Ask Codex to approve anything. approve.mjs refuses without a person at a terminal.
3. **Run the team** — Paste Prompt A. Watch the Subagents panel: Active, then Done.
4. **Read the review** — The Lead's fact-check and fin-compliance table — at least one fix.
5. **Approve as a person** — In your own terminal: node scripts/approve.mjs <id> --by "Your Name".
6. **Publish** — Paste Prompt B. Dry run first; --live only if your accounts are connected.

## The prompts

### PROMPT A — Codex: the social team

> You are the Lead. Plan Week 1 social from
> data/social-brief.md and strategy/calendar.csv.
> Use subagents in parallel, each following its card:
> - content-creator: 2 LinkedIn + 3 Facebook posts, one
>   file each in content/social/week-01/, with the
>   frontmatter in data/publishing-spec.md.
> - creative-designer: one image per post with
>   $imagegen (or @Canva) and alt text, from the brief.
> Then run fact-check and fin-compliance on every post
> and send each fix back to the right subagent. When a
> post passes, run node scripts/submit.mjs on it.
> Publish nothing.

### PROMPT B — Codex: publish

> For every Week 1 post approved in
> review/approvals.csv, run node scripts/publish.mjs
> <id> as a dry run and show me each request. Wait for
> me to say "go" before any --live run.

## Check your work

- [ ] The hook (or approve.mjs) stopped the agent from approving.
- [ ] Two subagents ran in parallel; both reached Done.
- [ ] The Lead sent at least one fix back to a subagent.
- [ ] Five posts with images, alt text, frontmatter and UTM links.
- [ ] You approved in your own terminal; the rows show your name and a hash.
- [ ] Dry runs printed every request; nothing went live unless you said go.

## If it goes wrong

- **Images contain wrong text** — Ask for text-free artwork and put the words in the post instead.
- **LinkedIn returns 426** — LINKEDIN_VERSION must be a recent YYYYMM.

## Stretch

- Add the growth-analyst to suggest the best posting time per post from channel-benchmarks.csv.

> **Why it matters:** Parallel subagents are fast; the Lead's review is what makes them safe.

## Next

Lab 9 — Campaign 3: Newsletter and a Landing Page. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
