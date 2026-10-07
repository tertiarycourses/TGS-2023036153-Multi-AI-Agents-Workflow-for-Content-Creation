# Lab 02 — Plan and Build the Horizon Website with Codex

**Course:** Multi AI Agents Workflow for Content Creation (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 35–38**\
**Surface:** Codex\
**Features:** Add a folder · /plan · AGENTS.md (/init) · build from data, not memory

## The story so far

The research is back: mid-career families and pre-retirees, on LinkedIn, Facebook and email. Every post will point to the website — and the current one is out of date. Rachel wants a new site this week, built from the brief so nothing is invented.

## Your goal

Every post, email and video will point somewhere. Build the website first — planned before a single file changes, and driven by the brief, so nothing is invented.

## You'll build

docs/index.html: hero, services, retirement calculator, checklist, reviews, FAQ, contact form with PDPA consent

## What is in this folder

- `assets/site-brief.md`
- `assets/brand.md`
- `assets/faq.md`
- `assets/testimonials.csv`
- `assets/checklist-items.md`
- `assets/recommendation-sample.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Add the brief** — Copy the assets into horizon-studio/data/. No Lab 1 recommendation? Copy recommendation-sample.md to research/recommendation.md.
2. **Open it in Codex** — In the ChatGPT desktop app open Codex, create a local project and add the horizon-studio folder. Run git init if it is not a repo yet.
3. **Plan first** — Type /plan, then paste the prompt. Read every question Codex asks.
4. **Answer and narrow** — Answer the questions. Cut one step you did not ask for, then approve.
5. **Serve it** — Run python3 -m http.server 8080 --directory docs and open http://localhost:8080.
6. **Test it** — Calculator: 30, 62, S$20,000, S$800, 4% must show S$693,138. Try it at 375px wide.
7. **Write the rules** — Run /init. Trim AGENTS.md to What this is, Commands, Conventions, Boundaries — under 60 lines.

## The prompts

### PROMPT — Codex, after /plan

> Build the Horizon Wealth Planning website in
> docs/index.html (GitHub Pages will serve docs/).
> Read data/site-brief.md, data/brand.md,
> data/services.csv, data/faq.md,
> data/testimonials.csv, data/checklist-items.md and
> research/recommendation.md first.
>
> MUST HAVE
> - Every section in site-brief.md, in that order.
> - Six service cards — never the INTERNAL columns.
> - A retirement calculator with monthly compounding
>   and the illustration note word for word.
> - The checklist unlocked by email; contact form
>   with a REQUIRED PDPA consent box; no backend.
> - The footer disclaimer word for word.
>
> CONSTRAINTS
> - One HTML file, inline CSS and JS, no framework.
> - Accessible: labels, alt text, focus, contrast.
>
> DONE WHEN
> - The calculator test gives S$693,138.
> - No horizontal scroll at 375px.

## Check your work

- [ ] Plan mode showed steps AND questions before any edit.
- [ ] You answered its questions instead of letting it guess.
- [ ] The calculator test shows S$693,138 with its illustration note.
- [ ] Six service cards; no INTERNAL fee or hours anywhere.
- [ ] The contact form will not submit without consent.
- [ ] No horizontal scroll at 375px; AGENTS.md is under 60 lines.

## If it goes wrong

- **The calculator is off** — Ask Codex to use monthly compounding: r = rate/12, n = years x 12.
- **The page is blank** — Serve it over http:// — opening the file directly can block scripts.

## Stretch

- Add Open Graph tags so a shared link shows a card with the tagline and Sunny.

> **Why it matters:** Build from the brief, not from memory. The model knows what a financial website looks like; only the brief knows what Horizon is allowed to say.

## Next

Lab 3 — A Compliance Subagent, Then Publish. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
