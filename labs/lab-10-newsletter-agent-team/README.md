# Lab 10 — The Newsletter Agent Team: the Sunny Sunday Email

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 3 · about 40 minutes · slides 100–104**\
**Surface:** Claude Code (agent team) → Claude Cowork (Gmail)\
**Features:** an agent team with a task that waits for a person · consent filtering · HTML and text email · Gmail drafts

## The story so far

The Sunny Sunday email is the one channel that books chats reliably. November's issue needs the 2026 CPF figures exactly right — and must reach only the 31 people who opted in.

## Your goal

The newsletter turns checklist downloads into booked chats — but only if it is right, and only to people who said yes.

## You'll build

content/newsletter/2026-11/: issue.md, newsletter.html, newsletter.txt, recipients.csv, excluded.csv, and Gmail drafts

## What is in this folder

- `assets/newsletter-brief.md`
- `assets/newsletter-spec.md`
- `assets/subscribers.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Start the team** — Paste Prompt A in Claude Code. Four teammates; the builder's task waits for your approval.
2. **Review the issue** — Read content/newsletter/2026-11/issue.md. Approve it in your own terminal: approve.mjs nl-2026-11.
3. **Release the builder** — Tell the lead it is approved. The builder makes the HTML, text and lists.
4. **Check the list** — recipients.csv must hold only consent = yes and unsubscribed = no.
5. **Create the drafts** — In Cowork with the Gmail connector, paste Prompt B.
6. **Send one test** — Send the draft addressed to yourself only, and read it on your phone.

## The prompts

### PROMPT A — Claude Code: the team

> Create an agent team for the November Sunny Sunday
> email from data/newsletter-brief.md and
> data/newsletter-spec.md. Spawn four teammates:
> - researcher (agent type researcher): the facts.
> - newsletter-writer: writes issue.md (id
>   nl-2026-11) in our skills, then submit.mjs.
> - compliance-reviewer (agent type
>   compliance-reviewer): reviews until it passes.
> - newsletter-builder: builds newsletter.html,
>   newsletter.txt, recipients.csv and excluded.csv
>   from data/subscribers.csv.
> The builder's task depends on a person approving
> nl-2026-11 in review/approvals.csv. It waits until
> I tell you it is approved and the hash matches.

### PROMPT B — Cowork: Gmail drafts

> Using the Gmail connector, create a DRAFT of the
> newsletter in content/newsletter/2026-11/
> newsletter.html for each address in recipients.csv,
> subject and preview from issue.md. Then one more
> draft addressed to me only. Do not send anything.
> Tell me how many drafts you made and how many
> people were excluded, and why.

## Check your work

- [ ] Four teammates; the builder waited for your approval.
- [ ] The reviewer passed issue.md; you approved it in your terminal.
- [ ] newsletter.html has unsubscribe, address and disclaimer; newsletter.txt matches.
- [ ] recipients.csv holds 31 people; excluded.csv lists 9 with reasons.
- [ ] Cowork made drafts only; nothing was sent to the list.
- [ ] Your test email reads well on a phone.

## If it goes wrong

- **The builder started early** — Say: "the build task is blocked until I approve — wait". Add a TaskCreated or TaskCompleted hook to enforce it.

## Stretch

- Ask the builder for a second subject line to A/B test, with a reason for each.

> **Why it matters:** Consent decides who gets mail — not the agent and not the deadline. Marketing to people who did not opt in breaks the PDPA.

## Next

Lab 11 — The Video Agent Team: Script to YouTube. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
