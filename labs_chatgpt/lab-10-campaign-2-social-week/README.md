# Lab 10 — Campaign 2: Social Media Posts (Demo)

> **USE: CODEX** — Codex, in your horizon-studio folder

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 3 · about 40 minutes · slides 111–116**\
**Surface:** Codex (subagents) → LinkedIn, Facebook\
**Features:** the publisher kit · creator and designer subagents in parallel · the Lead's review · human approval → post

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-10 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

Week 1 of the campaign starts Monday. As a demo, one LinkedIn post and one Facebook post, each with a visual — and Rachel's one rule: nothing goes out unless a person approved that exact version.

## Your goal

A demo of Week 1: one LinkedIn and one Facebook post, each with a visual. Copy and design must agree, the Lead must check every claim — and only a person can approve.

## You'll build

two posts with images, reviewed, approved by you and posted (or dry-run) — with a Word copy of each

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Claude reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/social-brief.md`
- `assets/publisher-kit/`
- `assets/publishing-spec.md`
- `assets/approvals-format.csv`
- `assets/connect-accounts.md`
- `assets/env.example`
- `assets/sample-calendar.csv`
- `solution/` — reference files from the verified build (each `.md` with its `.pdf`)
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 10". Run all of this lab's prompts in it.
2. **Install the kit** — Copy publisher-kit/scripts into scripts/. Then ask Codex to add a hook that blocks any command running approve.mjs, and trust it.
3. **Test the gate** — Ask Codex to approve anything. approve.mjs refuses without a person at a terminal.
4. **Run the team** — Copy and paste Prompt A. Watch the Subagents panel: Active, then Done.
5. **Read the review** — The Lead's fact-check and fin-compliance table — at least one fix.
6. **Approve as a person** — In your own terminal: node scripts/approve.mjs <id> --by "Your Name".
7. **Publish** — After you have approved the posts, copy and paste Prompt B. Dry run first; --live only if your accounts are connected.

## The prompts

### PROMPT A — Codex: the social team

> You are the Lead. Plan Week 1 social from
> data/social-brief.md and strategy/calendar.csv.
> Use subagents in parallel, each following its card:
> - content-creator: 1 LinkedIn + 1 Facebook post with
>   linkedin-post, facebook-post and copywriting, one
>   file each in content/social/week-01/, with the
>   frontmatter in data/publishing-spec.md.
> - creative-designer: one image per post with
>   $imagegen and alt text, from the brief.
> Then run fact-check and fin-compliance on every post
> and send each fix back to the right subagent. When a
> post passes, run node scripts/submit.mjs on it.
> Publish nothing.
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

### PROMPT B — Codex: publish

> For every Week 1 post approved in
> review/approvals.csv, run node scripts/publish.mjs
> <id> as a dry run and show me each request. Wait for
> me to say "go" before any --live run.

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Which post do you expect to do best, and why?"
- "What did the Lead send back to the writer, and why?"
- "Is anything here not ready to post? Explain in plain English."

## Check your work

- [ ] The hook (or approve.mjs) stopped the agent from approving.
- [ ] Two subagents ran in parallel; both reached Done.
- [ ] The Lead sent at least one fix back to a subagent.
- [ ] Two posts with images, alt text, frontmatter and UTM links.
- [ ] You approved in your own terminal; the rows show your name and a hash.
- [ ] Dry runs printed every request; nothing went live unless you said go.

## If it goes wrong

- **Images contain wrong text** — Ask for text-free artwork and put the words in the post instead.
- **LinkedIn returns 426** — LINKEDIN_VERSION must be a recent YYYYMM.

## Stretch

- Add the growth-analyst to suggest the best posting time per post from channel-benchmarks.csv.
- Link each LinkedIn post to the Lab 8 blog article.

> **Why it matters:** Parallel subagents are fast; the Lead's review is what makes them safe.

## Next

Lab 11 — Campaign 3: Newsletter and a Landing Page. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
