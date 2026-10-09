# Lab 11 — Campaign 3: Newsletter and a Landing Page

> **USE: CODEX, THEN CHATGPT WORK** — start in Codex; the step that moves you to ChatGPT Work says so

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 3 · about 45 minutes · slides 119–124**\
**Surface:** Codex (subagents) → @Sites → ChatGPT Work (@Gmail)\
**Features:** creator writes, website designer builds the lead-magnet page, analyst filters by consent, the Lead checks · drafts only

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-11 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

The Sunny Sunday email books chats most cheaply. November's issue promotes a new landing page for the free checklist — and must reach only the 31 people who opted in.

## Your goal

The Sunny Sunday email books chats most cheaply — if it is right and reaches only people who said yes. This issue promotes a new landing page for the Money Check-up Checklist.

## You'll build

the November newsletter, its recipient list, the landing page published, and Gmail drafts — with a Word copy of each

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Claude reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/newsletter-brief.md`
- `assets/newsletter-spec.md`
- `assets/landing-page-brief.md`
- `assets/site-brief.md`
- `assets/checklist-items.md`
- `assets/subscribers.csv`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 11". Run all of this lab's prompts in it.
2. **Start the campaign** — Copy and paste Prompt A.
3. **Approve the words** — Read the email and the page copy; approve nl-2026-11 in your own terminal.
4. **Publish the page** — The website designer runs page-qa and publishes web/checklist/ as @Sites.
5. **Check the list** — Only people with consent = yes and unsubscribed = no are on the recipient list.
6. **Create the drafts** — After the page is published and the list checked, copy and paste Prompt B.
7. **Send one test** — Send only the draft addressed to yourself, and read it on your phone.

## The prompts

### PROMPT A — Codex: the newsletter team

> You are the Lead for the November Sunny Sunday
> email (data/newsletter-brief.md,
> data/newsletter-spec.md) and its landing page
> (data/landing-page-brief.md). Use subagents:
> - content-creator: issue.md (id nl-2026-11) with
>   newsletter, and the landing-page copy.
> - website-designer: web/checklist/index.html with
>   lead-magnet, web-design and landing-page; page-qa.
> - growth-analyst: recipients.csv and excluded.csv
>   from data/subscribers.csv.
> Check everything, then submit nl-2026-11. After I
> approve, build newsletter.html and .txt, and deploy
> web/checklist with @Sites (Only those invited).
> Write for a business owner, in plain English: no
> codes, IDs, file names or line numbers; start with
> what it means and what I do next. Save a Word copy
> (.docx) of each result.

### PROMPT B — ChatGPT Work: Gmail drafts

> Using @Gmail, create a DRAFT of the newsletter in
> content/newsletter/2026-11/newsletter.html (upload
> it) for each address in recipients.csv, plus one
> draft to me only. Send nothing. Report how many
> drafts and how many people were excluded, and why.

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Explain the email in three sentences. What do we want readers to do?"
- "Who was left off the mailing list, and why?"
- "What did the landing-page check look at, and did it pass?"

## Check your work

- [ ] Three specialists worked on the campaign; the Lead checked all.
- [ ] You approved nl-2026-11 in your own terminal before the build.
- [ ] The landing page passed page-qa and is published.
- [ ] The recipient list holds 31 people; 9 are excluded, with reasons.
- [ ] The email has unsubscribe, address and disclaimer.
- [ ] Drafts only — nothing was sent to the list.

## If it goes wrong

- **The build started before approval** — Tell the Lead the build waits for review/approvals.csv to say approved.

## Stretch

- Ask for two subject lines to A/B test, with a reason for each.

> **Why it matters:** Consent decides who gets mail — not the agent and not the deadline. Marketing to people who did not opt in breaks the PDPA.

## Next

Lab 12 — Campaign 4: The YouTube Explainer. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
