# Prompts — Lab 08: The Human Approval Gate and the Publishers

Surface: Codex. Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Codex: build the gate

```
Build the publishing gate in
data/publishing-spec.md, in Node 22 with no packages:
scripts/submit.mjs, scripts/approve.mjs,
scripts/publish.mjs and scripts/gate-hook.mjs, plus
review/approvals.csv with the header in
data/approvals-format.csv.

- approve.mjs refuses to run without an interactive
  terminal: only a person approves.
- publish.mjs is a dry run unless --live; live needs
  an approved row whose hash still matches, and never
  posts the same id twice.
- Add the PreToolUse hook to .claude/settings.json
  exactly as the spec says.
- Read tokens only from .env; never print one.
Then create a test item content/social/test/test-001.md
and submit it.
```

## PROMPT B — Codex: dry run

```
Run node scripts/publish.mjs test-001 and show me
the request it would send, with the token masked.
Then edit one word in test-001.md and run it with
--live. It must refuse because the content changed
after approval. Explain the result in two lines.
```
