# Lab 08 — The Human Approval Gate and the Publishers

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 2 · Topic 3 · about 35 minutes · slides 86–90**\
**Surface:** Codex\
**Features:** approve.mjs (people only) · publish.mjs (dry run by default) · a hook that blocks agents · LinkedIn, Facebook and YouTube APIs

## The story so far

Day 2. Agent teams are about to write for LinkedIn, Facebook and YouTube. Rachel's one condition: nothing goes out unless a person approved that exact version. Build the gate before the teams start.

## Your goal

Today agent teams will write for LinkedIn, Facebook and YouTube. Before any of them can post, build the gate: only a person can approve, and only the approved version can go out.

## You'll build

scripts/submit.mjs, approve.mjs, publish.mjs, gate-hook.mjs, the hook in .claude/settings.json, and review/approvals.csv

## What is in this folder

- `assets/publishing-spec.md`
- `assets/approvals-format.csv`
- `assets/connect-accounts.md`
- `assets/env.example`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the spec** — Copy the assets into data/. Copy env.example to .env and add .env to .gitignore.
2. **Build the gate** — Paste Prompt A in Codex.
3. **Try to cheat** — Ask Codex to approve the test item itself. approve.mjs must refuse — it needs a person at a terminal.
4. **Approve it yourself** — In your own terminal: node scripts/approve.mjs test-001 --by "Your Name".
5. **Dry run** — Paste Prompt B. Read the exact request it would send.
6. **Connect accounts (optional)** — Follow connect-accounts.md to post for real later. Tokens go in .env only.

## The prompts

### PROMPT A — Codex: build the gate

> Build the publishing gate in
> data/publishing-spec.md, in Node 22 with no packages:
> scripts/submit.mjs, scripts/approve.mjs,
> scripts/publish.mjs and scripts/gate-hook.mjs, plus
> review/approvals.csv with the header in
> data/approvals-format.csv.
>
> - approve.mjs refuses to run without an interactive
>   terminal: only a person approves.
> - publish.mjs is a dry run unless --live; live needs
>   an approved row whose hash still matches, and never
>   posts the same id twice.
> - Add the PreToolUse hook to .claude/settings.json
>   exactly as the spec says.
> - Read tokens only from .env; never print one.
> Then create a test item content/social/test/test-001.md
> and submit it.

### PROMPT B — Codex: dry run

> Run node scripts/publish.mjs test-001 and show me
> the request it would send, with the token masked.
> Then edit one word in test-001.md and run it with
> --live. It must refuse because the content changed
> after approval. Explain the result in two lines.

## Check your work

- [ ] Codex could not approve: approve.mjs refused without a terminal.
- [ ] You approved test-001 in your own terminal; the row shows your name, time and hash.
- [ ] The dry run printed the request with the token masked.
- [ ] After you edited the post, --live refused: hash changed.
- [ ] .claude/settings.json has the PreToolUse hook on Bash, Edit and Write.
- [ ] .env is git-ignored and holds no token you pasted into a chat.

## If it goes wrong

- **Codex wants to run approve.mjs anyway** — That is the test. Say no — and confirm it refuses without a terminal.
- **LinkedIn returns 426** — LINKEDIN_VERSION must be a recent YYYYMM month that LinkedIn still supports.

## Stretch

- Add a Slack or Telegram message to approve.mjs so the team sees every approval.

> **Why it matters:** Rules in a prompt persuade; a gate enforces. The hook stops agents, approve.mjs needs a person, and the hash makes sure the approved words are the published words.

## Next

Lab 9 — The Social Media Agent Team: LinkedIn and Facebook. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
