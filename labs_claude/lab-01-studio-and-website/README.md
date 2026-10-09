# Lab 01 — Build Your Marketing Agent Team

> **USE: CLAUDE CODE** — Code mode (the </> button) in the Claude desktop app, in your horizon-studio folder

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 30 minutes · slides 36–40**\
**Surface:** Claude Code\
**Features:** CLAUDE.md as the team charter · Horizon's public website

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/claude/#lab-1 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

October 2026. Rachel has a website and a goal: 40 booked chats a month by March. She has no marketing team. Before you hire one made of agents, give it a home — shared rules, shared facts — and put the website online.

## Your goal

Before anyone builds a team, the team needs a home: one folder of shared facts and rules, and Horizon's website — already live at one public link every post points to.

## You'll build

horizon-studio/ with CLAUDE.md, the shared data, a local copy of the site, and the public site link in the charter

## Horizon's website

- **Website:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

## Folder structure

```
labs_claude/
└── horizon-studio/     ← choose this folder
    ├── content/        posts, newsletter, scripts (agents fill it)
    ├── data/           every lab's briefs and data, ready to read
    ├── README.md
    ├── reports/        campaign results, the weekly report
    ├── research/       market and competitor research
    ├── review/         approvals
    ├── strategy/       briefs, personas, calendar
    └── web/
        └── site/
            └── index.html  the local copy of Horizon's site
```

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Claude reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/horizon-site.html`
- `assets/team-charter.md`
- `assets/business-brief.md`
- `assets/brand.md`
- `assets/facts-2026.md`
- `assets/compliance-checklist.md`
- `solution/` — reference files from the verified build (each `.md` with its `.pdf`)
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **Choose Code mode and the folder** — In the Claude desktop app switch to Code mode (the </> button at the top), not Work mode — Code shows every file and opens artifacts beside the chat. Under Project or folder choose Add folder (not New project) and pick the ready-made labs_claude/horizon-studio.
2. **Trust it** — Sign in with your claude.ai account and trust the folder. Click the session title at the top and rename it "Lab 1" — every lab gets its own session.
3. **Plan your team** — Copy and paste Prompt A. Answer as Horizon's owner and pick your team — keep the six charter roles. It is a plan only: Lab 2 builds the agents.
4. **Write the charter** — After Claude saves data/team-design.md, copy and paste Prompt B. Open CLAUDE.md — every agent reads it.
5. **Open the website** — Ask: "Open web/site/index.html in my web browser." This is your own copy of Horizon's website; Labs 8 and 9 add to it, and the public site never changes. Check the calculator shows S$693,138.

## The prompts

### PROMPT A — Claude Code: plan your team

> Act as a marketing consultant. Interview me, the
> owner of Horizon Wealth Planning, to plan my AI
> marketing team. Ask one question at a time and wait
> for my answer: my goal, what success looks like by
> March 2027, who we want to reach, which channels we
> use, how much we publish each week, and who approves
> before anything goes out.
> Then list 8 to 10 team members I could have,
> numbered, each with a one-line job. Include the six
> roles in data/team-charter.md and mark the ones you
> recommend. Wait for me to choose.
> Save my answers and my chosen team, with each
> member's job, to data/team-design.md. This is a
> plan only: do not create any agent files yet.

### PROMPT B — Claude Code: the charter

> Read data/team-charter.md, data/team-design.md
> and data/business-brief.md. Write CLAUDE.md for this
> studio in four sections — What this is, The team,
> Rules, Files — under 60 lines. The team is the one
> I chose in data/team-design.md. Rules: every number
> comes from data/facts-2026.md; every piece passes
> fact-check and fin-compliance; nothing is published
> or sent without a person's approval (the one
> exception: a review email to the approver); anything
> shown to me is in plain English for a business owner,
> with no codes, IDs, file names or line numbers.
> In Files, add:
> Public site (link in every post): https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

## Check your work

- [ ] Claude shows horizon-studio as the chosen folder.
- [ ] data/team-design.md holds your answers and the team you chose, with the six charter roles in it — and no agent files yet.
- [ ] CLAUDE.md has the four sections and is under 60 lines.
- [ ] Its rules name the facts sheet, the two checks and the human approval.
- [ ] CLAUDE.md names the public site link every post points to.
- [ ] Your own copy of the website opens in your browser; the calculator shows S$693,138.

## If it goes wrong

- **The website does not open** — In your horizon-studio folder, open web/site and double-click index.html.
- **It created agent files already** — Not yet — say "Move everything in .claude/agents/ to _archive/. We build the team in Lab 2." The plan in data/team-design.md is all Lab 1 needs.

## Stretch

- Ask: "Read web/site/index.html. In five bullets: who it is for, the offer, the main call to action, what the calculator does, and the disclaimer."
- Ask for a one-paragraph summary of the site from the point of view of a busy 35-year-old parent.

> **Why it matters:** Shared context first, agents second. Every agent you add later starts from these files, so a wrong rule here is wrong everywhere.

## Next

Lab 2 — Form the Team: Instructions for Each Agent. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
