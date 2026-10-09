# Lab 01 — Set Up the Studio and Explore Horizon's Website

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 30 minutes · slides 29–35**\
**Surface:** ChatGPT Project → Codex\
**Features:** a ChatGPT Project with shared files · AGENTS.md · Horizon's public website

## The story so far

October 2026. Rachel has a website and a goal: 40 booked chats a month by March. She has no marketing team. Before you hire one made of agents, give it a home — shared rules, shared facts — and put the website online.

## Your goal

Before anyone builds a team, the team needs a home: one folder of shared facts and rules, and Horizon's website — already live at one public link every post points to.

## You'll build

the Horizon Marketing project, horizon-studio/ with AGENTS.md, and the public site link in the charter

## Horizon's website

- **Website:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

## Folder structure

```
labs_chatgpt/
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

1. **Choose the folder** — In Codex create a local project and choose labs_chatgpt/horizon-studio. It is ready-made — do not create one.
2. **Make the Project** — In ChatGPT create the Project "Horizon Marketing" with the charter, brand, facts and compliance files; Prompt A is its instructions.
3. **Design your team** — Paste Prompt B in Codex and answer as Horizon's owner. Pick your team — keep the six charter roles; the next labs build them.
4. **Write the charter** — Paste Prompt C to write AGENTS.md.
5. **Open the website** — Open the Website link above — Horizon's public site, shared by everyone; you do not build it.
6. **Know the site** — Paste Prompt D. Then open the link on your phone and check the calculator shows S$693,138.

## The prompts

### PROMPT A — ChatGPT Project: instructions

> You support Horizon Wealth Planning's AI marketing
> team. Use the project files: team-charter.md for who
> does what, brand.md for the voice and look,
> facts-2026.md for every number, and
> compliance-checklist.md before anything is shown to
> a person. Never publish or send anything.

### PROMPT B — Codex: design your team

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

### PROMPT C — Codex: the charter

> Read data/team-charter.md, data/team-design.md
> and data/business-brief.md. Write AGENTS.md for this
> studio in four sections — What this is, The team,
> Rules, Files — under 60 lines. The team is the one
> I chose in data/team-design.md. Rules: every number
> comes from data/facts-2026.md; every piece passes
> fact-check and fin-compliance; nothing is published
> or sent without a person's approval.

### PROMPT D — Codex: know the site

> Read web/site/index.html, the local copy of
> Horizon's public website. In five bullets: who it
> is for, the offer, the main call to action, what
> the calculator does, and the disclaimer. Then add
> this line to the Files section of AGENTS.md:
> Public site (link in every post): https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

## Check your work

- [ ] The Horizon Marketing project holds the four files and the instructions.
- [ ] data/team-design.md holds your answers and the team you chose, with the six charter roles in it.
- [ ] AGENTS.md has the four sections and is under 60 lines.
- [ ] Its rules name the facts sheet, the two checks and the human approval.
- [ ] AGENTS.md names the public site link every post points to.
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
