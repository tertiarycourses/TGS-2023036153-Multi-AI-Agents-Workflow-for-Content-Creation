# Prompts — Lab 09: Campaign 3: Newsletter and a Landing Page

Surface: Claude Code (agent team) → Claude artifact, Gmail. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: the newsletter team

```
Create an agent team for the November Sunny
Sunday email (data/newsletter-brief.md,
data/newsletter-spec.md) and its landing page
(data/landing-page-brief.md). Spawn three teammates:
content-creator, website-designer and growth-analyst.
- content-creator: issue.md (id nl-2026-11) and the
  landing-page copy.
- website-designer: web/checklist/index.html with
  landing-page from the approved copy; page-qa.
- growth-analyst: recipients.csv and excluded.csv
  from data/subscribers.csv.
You check everything, then submit nl-2026-11. Build
newsletter.html and .txt, and publish the page as an
artifact, only after I approve.
```

## PROMPT B — Claude Code: Gmail drafts

```
Using the Gmail connector, create a DRAFT of
newsletter.html for each address in recipients.csv,
plus one draft addressed to me only. Send nothing.
Report how many drafts and how many people were
excluded, and why.
```
