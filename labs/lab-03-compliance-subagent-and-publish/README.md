# Lab 03 — A Compliance Subagent, Then Publish

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 1 · about 35 minutes · slides 42–46**\
**Surface:** Codex → GitHub Pages\
**Features:** a reviewer subagent that only reports · the compliance checklist · GitHub Pages from /docs

## The story so far

The site looks great. Then Rachel's partner reads the 'How it works' intro she drafted — '8% a year … guaranteed' — and goes pale. Before the site goes live, a reviewer that did not write it must check it.

## Your goal

Financial content is regulated. A second agent that did not write the page — and is not allowed to edit it — checks it before anyone else sees it. Then the site goes live.

## You'll build

review/site-compliance.md (FAIL, then PASS) and the site live on GitHub Pages

## What is in this folder

- `assets/compliance-checklist.md`
- `assets/facts-2026.md`
- `assets/publish-checklist.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the rules** — Copy compliance-checklist.md and facts-2026.md into data/.
2. **Run the reviewer** — Paste Prompt A. Codex starts the reviewer as a subagent — watch it in the Subagents panel.
3. **Read the report** — It must flag Rachel's "8% a year … guaranteed" line as Critical. Note anything else it found.
4. **Fix and re-check** — Paste Prompt B. The main agent fixes; the reviewer checks again until PASS.
5. **Publish** — Create the horizon-studio repo on GitHub, then Settings → Pages → Deploy from a branch → main, /docs.
6. **Test on a phone** — Open the Pages URL on your phone and try the calculator and the contact form.

## The prompts

### PROMPT A — Codex: the reviewer

> Use a subagent as our compliance reviewer.
> Its job: check docs/index.html against
> data/compliance-checklist.md and data/facts-2026.md.
> It reports; it never edits a file.
>
> Output a table — where, the exact words, the rule
> (C1-C12), severity (Critical / High / Low), the fix —
> and end with PASS or FAIL. FAIL if any Critical or
> High issue remains.
> Save the report to review/site-compliance.md.

### PROMPT B — Codex: fix, re-check, ship

> Fix every Critical and High issue in
> review/site-compliance.md, then run the compliance
> reviewer subagent again. Repeat until it says PASS.
>
> Then commit and push to GitHub. Before committing,
> list every file you will add and confirm there is
> no .env, key or token among them. Give me the Pages
> URL: https://<your-user>.github.io/horizon-studio/

## Check your work

- [ ] The reviewer ran as a subagent and edited nothing.
- [ ] The first report flagged the "8% … guaranteed" line as Critical (C2, C5).
- [ ] The final report says PASS.
- [ ] The footer disclaimer and calculator note are word for word.
- [ ] Codex listed the files before committing; no secret among them.
- [ ] The Pages URL works on your phone.

## If it goes wrong

- **Pages shows 404** — Source must be Deploy from a branch, main, /docs — and the first deploy takes a minute or two.
- **The reviewer edited the page** — Say "it reports only — it must not edit any file" and run it again.

## Stretch

- Save the reviewer's brief as a Codex skill with $skill-creator so any project can use it.

> **Why it matters:** The writer should never mark its own homework. A reviewer that cannot edit has no reason to go easy on the draft.

## Next

Lab 4 — Ideation Sub-agents and a Digital Storyboard. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
