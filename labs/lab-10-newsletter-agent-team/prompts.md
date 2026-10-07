# Prompts — Lab 10: The Newsletter Agent Team: the Sunny Sunday Email

Surface: Claude Code (agent team) → Claude Cowork (Gmail). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: the team

```
Create an agent team for the November Sunny Sunday
email from data/newsletter-brief.md and
data/newsletter-spec.md. Spawn four teammates:
- researcher (agent type researcher): the facts.
- newsletter-writer: writes issue.md (id
  nl-2026-11) in our skills, then submit.mjs.
- compliance-reviewer (agent type
  compliance-reviewer): reviews until it passes.
- newsletter-builder: builds newsletter.html,
  newsletter.txt, recipients.csv and excluded.csv
  from data/subscribers.csv.
The builder's task depends on a person approving
nl-2026-11 in review/approvals.csv. It waits until
I tell you it is approved and the hash matches.
```

## PROMPT B — Cowork: Gmail drafts

```
Using the Gmail connector, create a DRAFT of the
newsletter in content/newsletter/2026-11/
newsletter.html for each address in recipients.csv,
subject and preview from issue.md. Then one more
draft addressed to me only. Do not send anything.
Tell me how many drafts you made and how many
people were excluded, and why.
```
