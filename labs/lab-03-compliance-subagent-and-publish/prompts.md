# Prompts — Lab 03: A Compliance Subagent, Then Publish

Surface: Codex → GitHub Pages. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: the reviewer

```
Use a subagent as our compliance reviewer.
Its job: check docs/index.html against
data/compliance-checklist.md and data/facts-2026.md.
It reports; it never edits a file.

Output a table — where, the exact words, the rule
(C1-C12), severity (Critical / High / Low), the fix —
and end with PASS or FAIL. FAIL if any Critical or
High issue remains.
Save the report to review/site-compliance.md.
```

## PROMPT B — Codex: fix, re-check, ship

```
Fix every Critical and High issue in
review/site-compliance.md, then run the compliance
reviewer subagent again. Repeat until it says PASS.

Then commit and push to GitHub. Before committing,
list every file you will add and confirm there is
no .env, key or token among them. Give me the Pages
URL: https://<your-user>.github.io/horizon-studio/
```
