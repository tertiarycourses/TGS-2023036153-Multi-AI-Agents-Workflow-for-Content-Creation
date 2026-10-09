# Prompts — Lab 09: Campaign 3: Newsletter and a Landing Page

Surface: Codex (subagents) → @Sites → ChatGPT Work (@Gmail). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: the newsletter team

```
You are the Lead for the November Sunny Sunday
email (data/newsletter-brief.md,
data/newsletter-spec.md) and its landing page
(data/landing-page-brief.md). Use subagents:
- content-creator: issue.md (id nl-2026-11) and the
  landing-page copy.
- website-designer: web/checklist/index.html with
  landing-page; page-qa.
- growth-analyst: recipients.csv and excluded.csv
  from data/subscribers.csv.
Check everything, then submit nl-2026-11. After I
approve, build newsletter.html and .txt, and deploy
web/checklist with @Sites (Only those invited).
```

## PROMPT B — ChatGPT Work: Gmail drafts

```
Using @Gmail, create a DRAFT of the newsletter in
content/newsletter/2026-11/newsletter.html (upload
it) for each address in recipients.csv, plus one
draft to me only. Send nothing. Report how many
drafts and how many people were excluded, and why.
```
