# Lab 09 — Campaign 3: Newsletter and a Landing Page

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 3 · about 45 minutes · slides 95–99**\
**Surface:** Codex (subagents) → @Sites → ChatGPT Work (@Gmail)\
**Features:** creator writes, website designer builds the lead-magnet page, analyst filters by consent, the Lead checks · drafts only

## The story so far

The Sunny Sunday email books chats most cheaply. November's issue promotes a new landing page for the free checklist — and must reach only the 31 people who opted in.

## Your goal

The Sunny Sunday email books chats most cheaply — if it is right and reaches only people who said yes. This issue promotes a new landing page for the Money Check-up Checklist.

## You'll build

content/newsletter/2026-11/ (issue, HTML, text, recipients, excluded), web/checklist/ published, Gmail drafts

## What is in this folder

- `assets/newsletter-brief.md`
- `assets/newsletter-spec.md`
- `assets/landing-page-brief.md`
- `assets/site-brief.md`
- `assets/checklist-items.md`
- `assets/subscribers.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Start the campaign** — Paste Prompt A.
2. **Approve the words** — Read issue.md and the page copy; approve nl-2026-11 in your own terminal.
3. **Publish the page** — The website designer runs page-qa and publishes web/checklist/ as @Sites.
4. **Check the list** — recipients.csv: only consent = yes and unsubscribed = no.
5. **Create the drafts** — Paste Prompt B.
6. **Send one test** — Send only the draft addressed to yourself, and read it on your phone.

## The prompts

### PROMPT A — Codex: the newsletter team

> You are the Lead for the November Sunny Sunday
> email (data/newsletter-brief.md,
> data/newsletter-spec.md) and its landing page
> (data/landing-page-brief.md). Use subagents:
> - content-creator: issue.md (id nl-2026-11) and the
>   landing-page copy.
> - website-designer: web/checklist/index.html with
>   landing-page; page-qa.
> - growth-analyst: recipients.csv and excluded.csv
>   from data/subscribers.csv.
> Check everything, then submit nl-2026-11. After I
> approve, build newsletter.html and .txt, and deploy
> web/checklist with @Sites (Only those invited).

### PROMPT B — ChatGPT Work: Gmail drafts

> Using @Gmail, create a DRAFT of the newsletter in
> content/newsletter/2026-11/newsletter.html (upload
> it) for each address in recipients.csv, plus one
> draft to me only. Send nothing. Report how many
> drafts and how many people were excluded, and why.

## Check your work

- [ ] Three specialists worked on the campaign; the Lead checked all.
- [ ] You approved nl-2026-11 in your own terminal before the build.
- [ ] The landing page passed page-qa and is published.
- [ ] recipients.csv holds 31 people; excluded.csv lists 9 with reasons.
- [ ] The email has unsubscribe, address and disclaimer.
- [ ] Drafts only — nothing was sent to the list.

## If it goes wrong

- **The build started before approval** — Tell the Lead the build waits for review/approvals.csv to say approved.

## Stretch

- Ask for two subject lines to A/B test, with a reason for each.

> **Why it matters:** Consent decides who gets mail — not the agent and not the deadline. Marketing to people who did not opt in breaks the PDPA.

## Next

Lab 10 — Campaign 4: The YouTube Explainer. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
