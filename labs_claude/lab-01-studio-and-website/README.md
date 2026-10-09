# Lab 01 — Set Up the Studio and Explore Horizon's Website

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 30 minutes · slides 29–34**\
**Surface:** Claude Code\
**Features:** CLAUDE.md as the team charter · Horizon's public website

## The story so far

October 2026. Rachel has a website and a goal: 40 booked chats a month by March. She has no marketing team. Before you hire one made of agents, give it a home — shared rules, shared facts — and put the website online.

## Your goal

Before anyone builds a team, the team needs a home: one folder of shared facts and rules, and Horizon's website — already live at one public link every post points to.

## You'll build

horizon-studio/ with CLAUDE.md, the shared data, a local copy of the site, and the public site link in the charter

## Horizon's website

- **Website:** https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL
- **Backup (GitHub Pages):** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

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

- `assets/horizon-site.html`
- `assets/team-charter.md`
- `assets/business-brief.md`
- `assets/brand.md`
- `assets/facts-2026.md`
- `assets/compliance-checklist.md`
- `solution/` — reference files from the verified build
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Choose the folder** — In Claude, click Project or folder → Add folder and choose labs_claude/horizon-studio. It is ready-made — do not create one.
2. **Trust it** — Sign in with your claude.ai account and trust the folder. (Terminal: run claude in horizon-studio, then /login.)
3. **Design your team** — Paste Prompt A and answer as Horizon's owner. Pick your team — keep the six charter roles; the next labs build them.
4. **Write the charter** — Paste Prompt B. Read CLAUDE.md — every agent will read it at the start of every session.
5. **Open the website** — Open https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL — Horizon's public site, shared by everyone; you do not build it.
6. **Know the site** — Paste Prompt C. Then open the link on your phone and check the calculator shows S$693,138.

## The prompts

### PROMPT A — Claude Code: design your team

> Act as a marketing consultant. Interview me, the
> owner of Horizon Wealth Planning, to design my AI
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
> member's job, to data/team-design.md.

### PROMPT B — Claude Code: the charter

> Read data/team-charter.md, data/team-design.md
> and data/business-brief.md. Write CLAUDE.md for this
> studio in four sections — What this is, The team,
> Rules, Files — under 60 lines. The team is the one
> I chose in data/team-design.md. Rules must include:
> every number comes from data/facts-2026.md; every
> piece passes fact-check and fin-compliance; nothing
> is published or sent without a person's approval.

### PROMPT C — Claude Code: know the site

> Read web/site/index.html, the local copy of
> Horizon's public website. In five bullets: who it
> is for, the offer, the main call to action, what
> the calculator does, and the disclaimer. Then add
> this line to the Files section of CLAUDE.md:
> Public site (link in every post): https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL

## Check your work

- [ ] Claude shows horizon-studio as the chosen folder.
- [ ] data/team-design.md holds your answers and the team you chose, with the six charter roles in it.
- [ ] CLAUDE.md has the four sections and is under 60 lines.
- [ ] Its rules name the facts sheet, the two checks and the human approval.
- [ ] CLAUDE.md names the public site link every post points to.
- [ ] The public site opens on a phone; the calculator shows S$693,138.

## If it goes wrong

- **The website link will not open** — Use the GitHub Pages backup: https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/ — or open web/site/index.html in any browser.

## Stretch

- Ask for a one-paragraph summary of the site from the point of view of a busy 35-year-old parent.

> **Why it matters:** Shared context first, agents second. Every agent you add later starts from these files, so a wrong rule here is wrong everywhere.

## Next

Lab 2 — Form the Team: Instructions for Each Agent. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
