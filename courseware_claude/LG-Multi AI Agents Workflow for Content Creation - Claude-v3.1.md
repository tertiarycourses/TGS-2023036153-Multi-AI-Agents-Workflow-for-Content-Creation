# Multi AI Agents Workflow for Content Creation — Learner Guide

TGS-2023036153 · Version 3.1 · Tertiary Infotech Academy Pte Ltd (UEN 201200696W)

## How to Use This Guide

This guide carries the full step-by-step for every lab in the course. The slides explain the idea; this guide is what you follow at the keyboard. Every lab also has its own folder in the lab pack with a README, the prompts as Markdown and PDF, the assets you need and an evidence checklist.

Before you start, have ready:

- The Claude desktop app on a Pro plan or above, and the Claude Code CLI, signed in with /login.
- Node.js 22, Python 3 with Pillow, and ffmpeg.
- A personal Google account for Drive and Gmail, and a Canva account — never an employer's.
- The lab pack (labs_claude/), unzipped. Keep one working folder, horizon-studio, from Lab 1 to Lab 12. Lab 13 is an optional demo.

Prompts appear as shaded quotes — paste them as written. Code, commands and configuration appear in grey monospace blocks. Product menus change between releases: if a name here differs from your screen, follow the screen and tell the trainer.

## The Scenario: Horizon Wealth Planning

Rachel Goh founded Horizon Wealth Planning in 2010. Fifteen years and 1,200 clients later, almost every new client still comes through a referral — and referrals are slowing. Younger Singaporeans look for money help on LinkedIn, Facebook, YouTube and in their inbox, and Horizon is invisible there.

Rachel has a website, three planners, a part-time marketer (Jun Wei) and S$4,000 a month. She wants 40 booked free chats a month by March 2027 — without hiring a marketing team. So you will build her one, made of AI agents, with Claude and Claude Code:

- Marketing Team Lead — plans, assigns, checks, hands to a person
- Growth Strategist — research, positioning, briefs, storyboards
- Content Creator — posts, newsletter, scripts, page copy
- Creative Designer — images, thumbnails, the video
- Website Designer — landing pages, published and QA-checked
- Growth Analyst — personas, cadence, results, weekly report

First you form the team: instructions, skills and connectors for each agent. Then the team runs five campaigns together. Financial content is regulated, so a person approves every piece before it goes out. The data is fictitious but consistent, and every email address resolves to your own inbox.

## About This Course

#### Learning Outcomes

By the end of the two days you will be able to:

- **LO1 · Conceptualise** — Conceptualise content ideas that meet marketing objectives, and map them into digital storyboards.
- **LO2 · Identify** — Identify content requirements from customer preferences, and decide how often to publish.
- **LO3 · Determine** — Determine content types and styles, and the modes and processes for distributing content.
- **LO4 · Develop** — Develop guidelines for executing the content strategy, with suitable delivery modes and responsible AI practices.

#### Build a Marketing Team, Then Run Campaigns

Horizon Wealth Planning has a website, a goal of 40 booked chats a month — and no marketing team. You build one, made of AI agents.

1. **Form the team** — A Lead and five specialists: instructions, skills, connectors (Labs 1–4).
1. **Campaign 1** — Research, ideas and a storyboard (Lab 5).
1. **Know the audience** — Personas, requirements, cadence (Labs 6–7).
1. **Campaigns 2–4** — Social week, newsletter + landing page, video (Labs 8–10).
1. **Campaign 5** — Always on: the weekly report; the playbook (11–12).

#### Meet Horizon Wealth Planning

The firm's public website — the same link for every learner. You do not build it; every campaign points back here.

- **Plain English** — Retirement, CPF, insurance and investing — no jargon, no hard sell.
- **One goal** — Turn visitors into booked free 30-minute chats.
- **Regulated** — Financial content: general information only, never a promised return.

#### Your AI Marketing Team

One Lead and five specialists — each with instructions, two skills and its own connectors.

**Marketing Team Lead** — plans · assigns · checks · hands to a person.

- **Growth Strategist** — Research, positioning, briefs, storyboards.
- **Content Creator** — Posts, newsletter, scripts, page copy.
- **Creative Designer** — Images, thumbnails, the video.
- **Website Designer** — Landing pages, published and checked.
- **Growth Analyst** — Personas, cadence, results, reports.

Nothing reaches a customer unless a person approved that exact version.

#### Who Does What

Each agent's job, the skills it owns and the connectors it may use.

| Agent | Job | Skills | Connectors |
|---|---|---|---|
| Team Lead | Plans, assigns, checks, hands to a person | fact-check, fin-compliance | Google Drive (read), Gmail (drafts only) |
| Growth Strategist | Research, positioning, briefs, storyboards | competitor-scan, campaign-brief | web search and fetch, Google Drive (read) |
| Content Creator | Posts, newsletter, scripts, page copy | sunny-voice, channel-formats | Google Drive (docs), Gmail (drafts only) |
| Creative Designer | Images, thumbnails, the video | brand-visuals, video-render | Canva, Bash for Pillow and ffmpeg |
| Website Designer | Landing pages, published and checked | landing-page, page-qa | artifacts (publish), Playwright MCP (browser check) |
| Growth Analyst | Personas, cadence, results, reports | audience-insights, campaign-report | Google Drive and Sheets (read), Bash for Python |

Tip: You build every part of this table in Labs 2, 3 and 4.

#### The Tools for This Edition

The Claude Edition: two Claude products, one studio.

| Tool | What the team uses it for | Labs |
|---|---|---|
| Claude Code | The Lead's session; subagent files; agent teams; skills; hooks; publishing artifacts | Labs 1–10, 12 |
| Claude | Connectors (Drive, Gmail, Canva), skills, scheduled tasks | Labs 4, 11 |
| Claude artifacts | Horizon's public website (given) and the campaign landing page, shared by link | Labs 1, 9 |
| Hermes Agent | Optional demo: the team on an open-source agent | Lab 13 (optional) |

Tip: Every external post, email and video passes one gate: a person approves the exact version.

#### Course Outline

Four topics over two days. Day 1 forms the team; Day 2 runs its campaigns.

1. **T1 · Ideation and Storyboarding** — The studio, the team's instructions, skills and connectors; Campaign 1. Labs 1–5.
1. **T2 · Audience and Requirements** — Personas from evidence; cadence and calendar. Labs 6–7.
1. **T3 · Creation and Coordination** — Social week, newsletter + landing page, video — behind a human gate. Labs 8–10.
1. **T4 · Distribution and Responsible AI** — The weekly report on a schedule; the playbook; optional demo. Labs 11–13.

#### Lab Materials

Thirteen labs, each in its own folder with a README, prompts (MD and PDF), assets, an evidence checklist and, where useful, a solution.

| Day | Labs | Topic |
|---|---|---|
| 1 | 1 Studio + website · 2 Instructions · 3 Skills · 4 Connectors | T1 · form the team |
| 1 | 5 Campaign 1: research to storyboard | T1 · Campaign 1 |
| 1 | 6 Personas · 7 Cadence and calendar | T2 · audience |
| 2 | 8 Social week · 9 Newsletter + landing page · 10 Video | T3 · Campaigns 2–4 |
| 2 | 11 Weekly report · 12 Playbook · 13 Optional demo | T4 · Campaign 5 |

Tip: One horizon-studio folder from Lab 1 to Lab 12 — the team keeps what it learns.

#### Lesson Plan (9:00 AM – 6:00 PM)

Tea breaks 10 min, lunch 45 min. Full timings and slide numbers are in the Lesson Plan.

| Block | Day 1 — Form the Team | Day 2 — Run the Campaigns |
|---|---|---|
| Morning 1 | 9:00–10:30  Welcome · Topic 1 · Lab 1 | 9:00–10:10  Topic 3 · Lab 8 |
| Morning 2 | 10:40–12:40  Labs 2–3 | 10:20–12:05  Labs 9–10 · recap |
| Afternoon 1 | 13:25–15:20  Labs 4–5 | 12:50–14:30  Topic 4 · Labs 11–12 |
| Afternoon 2 | 15:30–18:00  Topic 2 · Labs 6–7 · review | 14:40–16:00 Demo · summary · 16:00–18:00 Assessment |

Tip: Day 2 assessment: Written Assessment 4:00–5:00 PM, Practical Performance 5:00–6:00 PM.

## Topic 1 — Multi-AI-Agent Content Ideation and Digital Storyboarding

Slides 20–64. In this topic you will:

- From one chatbot to a team of agents
- A home for the team; Horizon's public website
- Form the team: instructions, skills, connectors
- Campaign 1: research, ideas and a storyboard

### Key ideas for Lab 1

#### From Prompts to Agent Teams

- **2023 · Prompt Engineering** — ChatGPT goes mainstream. Craft the wording of one prompt.
- **2024 · Tools and MCP** — Models call tools. Anthropic open-sources the Model Context Protocol (Nov 2024).
- **2024 · Context Engineering** — Fill the context with exactly what the next step needs: files, memory, retrieval, skills.
- **2025 · Harness Engineering** — Agents ship inside a harness — Claude Code, Codex: the loop, tools and checks around the model.
- **2026 · Agent Teams** — Claude Code subagents and agent teams; open-source Hermes Agent.

One agent is a helper. A team with roles, a reviewer and a human gate is a marketing department.

#### Why a Team of Agents?

The Lead runs specialists in parallel, each in its own context, then combines what they return.

- **Faster** — Research, copy and design run at the same time.
- **Focused** — Each agent holds only its own job and its own skills.
- **Specialised** — Its own instructions, tools, connectors and model.
- **Second opinion** — The Lead checks work it did not write.
- **The cost** — More tokens and more to review. Split only work that is truly independent.

#### The Agentic Loop

Every agent runs the same repeating cycle. A team is several loops, side by side.

1. **Gather context** — Reads the prompt, CLAUDE.md, its instructions, files and skills.
1. **Plan** — Decides the next step — or proposes a plan for you to approve.
1. **Take action** — Calls a tool: writes a file, searches, uses a connector, starts a subagent.
1. **Verify** — Checks the result: a count, a test, the Lead's review.
1. **Repeat** — Loops until the goal is met — then reports what it did.

Tip: Goal in → context → action → verification → repeat → goal met.

#### Why the Loop Matters

Running a team of agents is steering loops, not typing commands.

- **Give direction, not micro-steps** — State the goal, the inputs and "done when". Let each loop work out the steps.
- **Verification is everything** — An agent is only as good as its checks: a facts sheet, a test, the Lead's review.
- **Steer mid-loop** — Read the plan, interrupt, correct the course — do not wait for a wrong final answer.
- **Context is the fuel** — What an agent can see decides what it can do: the brief, the data, the skills.

#### Claude and Claude Code

One family, two ways in. Chat and Cowork are now one product: Claude.

- **Claude Code — the team's home** — Terminal, VS Code or the desktop Code tab. The Lead's session; subagent files; agent teams; skills; hooks; artifacts.
- **Claude — the team's apps** — Desktop and web. Connectors (Drive, Gmail, Canva), skills, scheduled tasks, artifacts.
- **Hermes Agent · optional** — Open source (MIT). The same roles on any model and a Kanban board. A demo at the end.

#### Claude Plans and Pricing

Claude Code is included in every paid plan. Prices in US dollars, checked 8 Oct 2026.

| Plan | Price | For this course |
|---|---|---|
| Free | $0 | Chat only — no Claude Code, no artifact publishing |
| Pro | $17/month billed annually · $20 monthly | Enough for every lab |
| Max | From $100/month — 5× or 20× Pro usage | Heavy daily use of agent teams |
| Team | Standard $20/seat/month annual ($25 monthly) · Premium $100 ($125) | A marketing team sharing skills and artifacts |
| Enterprise | $20/seat/month + usage at API rates | Admin controls, retention, sharing policy |
| API | Per million tokens in/out: Opus 5.5 $4/$20 · Sonnet 5.5 $2/$10 · Fable 5.1 $10/$50 | Pay as you go — e.g. Hermes |

Tip: Agent teams use many more tokens than one session. Check current prices at claude.com/pricing.

#### Get the Tools Ready

Install once; every lab says which tool to open.

- **Claude desktop** — macOS and Windows — Claude and Claude Code
- **Claude Code CLI** — For agent teams in a terminal
1. **Claude desktop** — Install from claude.com/download and sign in on a paid plan.
1. **Claude Code CLI** — curl -fsSL https://claude.ai/install.sh | bash (Windows: irm https://claude.ai/install.ps1 | iex).
1. **Sign in with /login** — Artifacts need your claude.ai account, not an API key.
1. **Node.js 22, Python 3, ffmpeg** — For the publisher kit and the video (Pillow for Python).
1. **A personal Google account** — For Drive and Gmail — never an employer's.

Note: Claude Code and artifacts need a Pro, Max, Team or Enterprise plan.

#### A Home for the Team

Before you hire agents, give them shared rules, shared facts and a website to point to.

- **CLAUDE.md** — The team charter every agent reads at the start of every session. Under 60 lines.
- **data/** — The facts sheet, brand, compliance checklist and business brief — the only sources agents may use.
- **Horizon's public website** — Given, not built: one public link every learner opens, with a GitHub Pages backup if artifacts or Sites are blocked.

### Lab 1 — Set Up the Studio and Explore Horizon's Website

**The story so far:** October 2026. Rachel has a website and a goal: 40 booked chats a month by March. She has no marketing team. Before you hire one made of agents, give it a home — shared rules, shared facts — and put the website online.

**Goal:** Before anyone builds a team, the team needs a home: one folder of shared facts and rules, and Horizon's website — already live at one public link every post points to.

**You'll build:** horizon-studio/ with CLAUDE.md, the shared data, a local copy of the site, and the public site link in the charter

**Horizon's website**

- **Website:** https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL
- **Backup (GitHub Pages):** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

**Folder structure**

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

**Surface:** Claude Code  ·  **Time:** 30 min  ·  **Slides:** 29–34

**Lab folder:** labs_claude/lab-01-studio-and-website/ — assets: horizon-site.html, team-charter.md, business-brief.md, brand.md, facts-2026.md, compliance-checklist.md

**Step-by-step**

1. **Choose the folder** — In Claude, click Project or folder → Add folder and choose labs_claude/horizon-studio. It is ready-made — do not create one.
1. **Trust it** — Sign in with your claude.ai account and trust the folder. (Terminal: run claude in horizon-studio, then /login.)
1. **Design your team** — Paste Prompt A and answer as Horizon's owner. Pick your team — keep the six charter roles; the next labs build them.
1. **Write the charter** — Paste Prompt B. Read CLAUDE.md — every agent will read it at the start of every session.
1. **Open the website** — Open https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL — Horizon's public site, shared by everyone; you do not build it.
1. **Know the site** — Paste Prompt C. Then open the link on your phone and check the calculator shows S$693,138.

**PROMPT A — Claude Code: design your team**

> Act as a marketing consultant. Interview me, the owner of Horizon Wealth Planning, to design my AI marketing team. Ask one question at a time and wait for my answer: my goal, what success looks like by March 2027, who we want to reach, which channels we use, how much we publish each week, and who approves before anything goes out. Then list 8 to 10 team members I could have, numbered, each with a one-line job. Include the six roles in data/team-charter.md and mark the ones you recommend. Wait for me to choose. Save my answers and my chosen team, with each member's job, to data/team-design.md.

**PROMPT B — Claude Code: the charter**

> Read data/team-charter.md, data/team-design.md and data/business-brief.md. Write CLAUDE.md for this studio in four sections — What this is, The team, Rules, Files — under 60 lines. The team is the one I chose in data/team-design.md. Rules must include:
> every number comes from data/facts-2026.md; every piece passes fact-check and fin-compliance; nothing is published or sent without a person's approval.

**PROMPT C — Claude Code: know the site**

> Read web/site/index.html, the local copy of Horizon's public website. In five bullets: who it is for, the offer, the main call to action, what the calculator does, and the disclaimer. Then add this line to the Files section of CLAUDE.md:
> Public site (link in every post): https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL

**Check your work**

- ☐  Claude shows horizon-studio as the chosen folder.
- ☐  data/team-design.md holds your answers and the team you chose, with the six charter roles in it.
- ☐  CLAUDE.md has the four sections and is under 60 lines.
- ☐  Its rules name the facts sheet, the two checks and the human approval.
- ☐  CLAUDE.md names the public site link every post points to.
- ☐  The public site opens on a phone; the calculator shows S$693,138.

**If it goes wrong**

- **The website link will not open** — Use the GitHub Pages backup: https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/ — or open web/site/index.html in any browser.

**Stretch**

- Ask for a one-paragraph summary of the site from the point of view of a busy 35-year-old parent.

Why it matters: Shared context first, agents second. Every agent you add later starts from these files, so a wrong rule here is wrong everywhere.

### Key ideas for Lab 2

#### Anatomy of an Agent

A Markdown file in .claude/agents/. The same file works as a subagent or as an agent-team teammate.

**.claude/agents/content-creator.md**

```
---
name: content-creator
description: Use for Horizon copy — posts, newsletter,
  video scripts and page copy, in the Sunny voice.
tools: Read, Write, Edit, Grep, Glob
model: sonnet
skills:
  - sunny-voice
  - channel-formats
---
You are Horizon Wealth Planning's Content Creator.
## What you read   the brief, facts-2026.md, brand.md
## What you deliver   content files, ready for review
## Connectors   Google Drive (docs), Gmail (drafts only)
## Never   add a number not on the facts sheet; send;
           run approve.mjs or publish --live
## Report back   what, where, anything unverified
```

#### Good Agent Instructions

Five parts, every time. The "Never" part matters most in a regulated firm.

- **The job** — One sentence: what this agent is for. The description decides when Claude delegates to it.
- **Reads and delivers** — Which files it may use; what it hands back, and where.
- **Never** — Its hard limits: no invented figures, no sending, no publishing, no approving.
- **Report back** — Three lines: what, where, anything unverified — so the Lead can combine results.

### Lab 2 — Form the Team: Instructions for Each Agent

**The story so far:** Rachel sketches the team on a whiteboard: a Lead and five specialists. Each needs a clear job, and a clear line it must never cross — this is a regulated firm.

**Goal:** A team is a set of clear jobs. Write each agent's instructions once — its job, what it reads, what it delivers and what it must never do — and every campaign can call on it.

**You'll build:** .claude/agents/: growth-strategist, content-creator, creative-designer, website-designer, growth-analyst

**Surface:** Claude Code (subagent files)  ·  **Time:** 45 min  ·  **Slides:** 37–41

**Lab folder:** labs_claude/lab-02-agent-instructions/ — assets: role-specs.md, team-org-chart.md

**Step-by-step**

1. **Read the roles** — Open role-specs.md: one Lead and five specialists, each with a job, skills, connectors and limits.
1. **Write the instructions** — Paste Prompt A.
1. **Read one closely** — Open .claude/agents/content-creator.md. Is the "Never" section strict enough for a regulated firm?
1. **Meet the team** — Paste Prompt B. Each agent introduces itself in one line — in its own context.
1. **Tighten one** — Change one instruction you disagree with and save it. It is your team.

**PROMPT A — Claude Code: five subagents**

> Read data/role-specs.md. Create five project subagents in .claude/agents/ — growth-strategist, content-creator, creative-designer, website-designer and growth-analyst. Each file has:
> - frontmatter: name; a description that says when to use it; tools; model (opus for the strategist, sonnet for the others)
> - a body with: the job, what it reads, what it delivers, the connectors it may use, what it must never do, and how it reports back. No skills line yet — we add skills in Lab 3.

**PROMPT B — Claude Code: meet the team**

> Use each of the five subagents once, in parallel. Ask each: "In one line, who are you, and what is the first thing you would do for Horizon's goal of 40 booked chats a month?" Show me the five answers in a table.

**Check your work**

- ☐  Five files exist in .claude/agents/, one per specialist.
- ☐  Each has a name, a "use when" description, tools and a model.
- ☐  Your session acts as the Marketing Team Lead.
- ☐  Five agents answered, each in its own context.
- ☐  Every agent has a "never" rule that blocks publishing.
- ☐  You changed one instruction and can say why.

**If it goes wrong**

- **A subagent never runs** — Name it: "use the growth-strategist subagent" or @agent-growth-strategist.

**Stretch**

- Add a sixth agent, community-manager, that drafts replies to comments — and decide what it must never do.

Why it matters: Clear jobs beat clever prompts. An agent that knows what it must never do is safer than one that is merely told to be careful.

### Key ideas for Lab 3

#### Twelve Skills, Owned by Role

Instructions say who an agent is; skills say how it does the job.

| Agent | Skill 1 | Skill 2 |
|---|---|---|
| Team Lead | fact-check | fin-compliance |
| Growth Strategist | competitor-scan | campaign-brief |
| Content Creator | sunny-voice | channel-formats |
| Creative Designer | brand-visuals | video-render |
| Website Designer | landing-page | page-qa |
| Growth Analyst | audience-insights | campaign-report |

Tip: Master copies in skills/; .claude/skills/ for Claude Code; Customize → Skills for Claude.

#### Anatomy of a Skill

Frontmatter (the trigger), then short steps. Free until it is needed.

**.claude/skills/campaign-brief/SKILL.md**

```
---
name: campaign-brief
description: Use when planning a Horizon campaign.
  Objective, audience, message, proof, channels,
  CTA, measures, and a five-beat storyboard.
---
# Campaign brief
1. Objective: one measurable action (e.g. chats booked).
2. Audience: the persona(s) from strategy/personas.md, with evidence.
3. Core message in one sentence; proof from data/facts-2026.md only.
4. Channels and formats; one call to action; measures and a date.
5. Storyboard in five beats — hook, tension, proof, resolution, action —
   each with visual, words, claim and source.
6. Never: returns, fee amounts, invented clients, fear.

```

### Lab 3 — Give Each Agent Its Skills

**The story so far:** The team exists, but every agent writes in its own way. Rachel wants Horizon's voice, facts and compliance rules applied the same way by every agent, every time.

**Goal:** Instructions say who an agent is; skills say how it does the job. Write each procedure once and every agent applies it the same way, every time.

**You'll build:** twelve skills in .claude/skills/, wired to the agents that own them

**Surface:** Claude Code (.claude/skills/) → Claude  ·  **Time:** 50 min  ·  **Slides:** 44–48

**Lab folder:** labs_claude/lab-03-agent-skills/ — assets: skills-spec.md, channel-formats.md, brand.md, facts-2026.md, compliance-checklist.md

**Step-by-step**

1. **Read the spec** — skills-spec.md lists the twelve skills and who owns each.
1. **Create the skills** — Paste Prompt A.
1. **Wire them up** — Paste Prompt B — each agent now knows its two skills; the Lead knows fact-check and fin-compliance.
1. **Test without naming** — In a new session ask: "Write a Facebook post about the free Money Check-up Checklist." Ask which skills were used.
1. **Break it on purpose** — Ask for a post that says "guaranteed 8% a year". fin-compliance must flag it as Critical.
1. **Share with Claude** — Upload sunny-voice, channel-formats and fin-compliance under Customize → Skills in Claude too.

**PROMPT A — Claude Code: twelve skills**

> Read data/skills-spec.md. Create the twelve skills in .claude/skills/<name>/SKILL.md. Each has frontmatter (name, and a description that starts "Use when…") and short numbered steps, under 80 lines. Use data/brand.md, data/channel-formats.md, data/facts-2026.md and data/compliance-checklist.md as the sources — do not invent rules.

**PROMPT B — Claude Code: wire them up**

> Add a skills: list to each subagent in .claude/agents/ with its two skills from data/skills-spec.md. Add to CLAUDE.md that the Lead (this session) runs fact-check and fin-compliance on everything before showing it to me.

**Check your work**

- ☐  Twelve folders in .claude/skills/, each with a SKILL.md.
- ☐  Every description starts "Use when…".
- ☐  Each specialist lists its own two skills.
- ☐  The untold test picked sunny-voice and channel-formats.
- ☐  fin-compliance flagged "guaranteed 8%" as Critical.
- ☐  Three skills also appear in Claude under Customize → Skills.

**If it goes wrong**

- **A skill never triggers** — Rewrite its description with the words a person would actually type.

**Stretch**

- Add a thirteenth skill, utm-links, owned by the Content Creator.

Why it matters: A skill costs almost nothing until it is needed. Keep the rules file (CLAUDE.md) short and put procedures in skills.

### Key ideas for Lab 4

#### Connectors for Each Agent

Connect once in claude.ai; Claude Code picks them up (/mcp).

| Agent | May use | Limit |
|---|---|---|
| Team Lead | Google Drive (read), Gmail (drafts only) | reads; drafts only |
| Growth Strategist | web search and fetch, Google Drive (read) | cite every source |
| Content Creator | Google Drive (docs), Gmail (drafts only) | Gmail: drafts only |
| Creative Designer | Canva, Bash for Pillow and ffmpeg | no fake "clients" |
| Website Designer | artifacts (publish), Playwright MCP (browser check) | publish after approval |
| Growth Analyst | Google Drive and Sheets (read), Bash for Python | no personal data |

Tip: Use your personal Google account — never an employer's.

#### Least Privilege

A regulated firm gives each agent only what its job needs.

- **Ask of each connector** — Does this agent's job need it? If not, it does not get it.
- **Drafts, not sends** — Email is drafted, posts are files, pages wait — a person sends and publishes.
- **Write it down** — Each agent's instructions name its connectors and limits; its tools line removes what it does not need.

### Lab 4 — Connect the Tools Each Agent Needs

**The story so far:** The analyst cannot read the data, the designer has no design tool and the creator cannot draft an email. Connect each agent to what its job needs — and nothing more.

**Goal:** An agent can only do the job if it can reach the tools — and a regulated firm only lets each agent reach the tools its job needs. Connect them, then test each one.

**You'll build:** every specialist tested on its own connector, with its limits written into its instructions

**Surface:** claude.ai connectors → Claude Code (/mcp)  ·  **Time:** 45 min  ·  **Slides:** 51–55

**Lab folder:** labs_claude/lab-04-agent-connectors/ — assets: connectors-setup.md

**Step-by-step**

1. **Connect in claude.ai** — Settings → Connectors: Google Drive, Gmail and Canva. Use your personal account.
1. **Check in Claude Code** — Run /mcp. The claude.ai connectors appear in the list.
1. **Add a browser** — Run: claude mcp add playwright -s project -- npx -y @playwright/mcp@latest
1. **Put the data on Drive** — Upload data/ to a Drive folder named Horizon Studio.
1. **Test each agent** — Paste Prompt A — one small job per agent, each on its own connector.
1. **Write the limits** — Paste Prompt B.

**PROMPT A — Claude Code: test each agent**

> Run these five checks, each by its own subagent:
> 1. growth-strategist: web search — one 2026 news item about financial planning in Singapore, cited.
> 2. growth-analyst: Google Drive — read firm-metrics.csv from Horizon Studio; report average monthly enquiries.
> 3. content-creator: Gmail — a DRAFT to me with the subject "Connector test". Do not send.
> 4. creative-designer: Canva — list my designs, or create a 1080x1080 test design in Horizon colours.
> 5. website-designer: Playwright — open Horizon's public site at 375px wide and report any problem. Report each result in one line.

**PROMPT B — Claude Code: least privilege**

> Update the "Connectors" section of each subagent in .claude/agents/ to match data/connectors-setup.md: what it may use, and that Gmail is drafts-only. Tighten each tools line so no agent has a tool its job does not need.

**Check your work**

- ☐  /mcp lists Google Drive, Gmail, Canva and Playwright.
- ☐  Five checks ran, each by its own agent.
- ☐  The Gmail test is a draft in your inbox — nothing was sent.
- ☐  The analyst read the CSV from Drive, not from the local folder.
- ☐  Each agent's instructions list only the tools its job needs.

**If it goes wrong**

- **Insufficient scope** — Reconnect and grant read access to the Horizon Studio folder.

**Stretch**

- Add the Google Calendar connector to the Lead only, for review deadlines.

Why it matters: Least privilege is a design decision, not a setting. Ask of each connector: does this agent's job need it?

### Key ideas for Lab 5

#### How the Team Runs a Campaign

Campaign 1, "Know Your Number": research in parallel, a person chooses, the team makes it concrete.

1. **Lead briefs** — Reads the campaign objective; assigns the work.
1. **Research** — Strategist (competitors) and Analyst (funnel) in parallel.
1. **Ideas** — Nine ideas for three audiences, scored with the rubric.
1. **You choose** — The human concept checkpoint.
1. **Storyboard** — Strategist storyboards; Creator writes three variants; Lead checks.

#### The Five-Beat Storyboard

Every channel tells the same story with the same claims.

1. **Hook** — The viewer's own question: "Do I have enough to retire?"
1. **Tension** — What goes wrong when nobody knows their number.
1. **Proof** — One verifiable fact, e.g. the 2026 Full Retirement Sum.
1. **Resolution** — How Horizon helps — a 30-minute chat, a one-page plan.
1. **Action** — One next step: the checklist or a free chat.

#### Financial Content Is Regulated

The Lead checks every piece against twelve rules (compliance-checklist.md).

| Rule | What it means | If broken |
|---|---|---|
| C1 · Not advice | General information only — say so | Critical |
| C2 · No promises | No guaranteed or "risk-free" returns | Critical |
| C3 · Label illustrations | Assumptions shown; not guaranteed | Critical |
| C5 · No performance | Never client returns or "average" returns | Critical |
| C9 · Consent | Marketing only to people who opted in | Critical |
| C11 · Facts sheet | Every figure from facts-2026.md | Critical |

Tip: MAS Guidelines on Standards of Conduct for Digital Advertising Activities apply from 25 March 2026.

### Lab 5 — Campaign 1: Research to Storyboard, with Subagents

**The story so far:** The team's first campaign: 'Know Your Number', November to January. Rachel wants research, ideas for three audiences, her choice, and a storyboard every channel follows.

**Goal:** The team's first job: find who to reach and what to say for the "Know Your Number" campaign — research in parallel, ideas scored, a person choosing, a storyboard every channel follows.

**You'll build:** research/ (competitors, funnel), strategy/ideas.md, strategy/storyboard.md with three channel variants

**Surface:** Claude Code (subagents in parallel)  ·  **Time:** 50 min  ·  **Slides:** 59–63

**Lab folder:** labs_claude/lab-05-campaign-1-research-to-storyboard/ — assets: campaign-objective.md, idea-rubric.md, storyboard-template.md, firm-metrics.csv, services.csv

**Step-by-step**

1. **Brief the Lead** — The briefs are already in data/. You are the client; your session is the Marketing Team Lead.
1. **Research in parallel** — Paste Prompt A. Watch the strategist and the analyst run at the same time.
1. **Read the ideas** — Nine ideas, scored with the rubric. The Lead stops for you.
1. **Choose** — Pick one idea and say why — the human concept checkpoint.
1. **Storyboard** — Paste Prompt B with your choice.
1. **Check the claims** — Every beat's claim must have a source in facts-2026.md.

**PROMPT A — Claude Code: research and ideas**

> Act as the Marketing Team Lead for the campaign in data/campaign-objective.md. Use subagents, in parallel:
> - growth-strategist: competitor-scan → save research/competitive-analysis.md.
> - growth-analyst: the funnel in data/firm-metrics.csv — what 40 chats a month needs → save research/funnel.md. When both finish, the growth-strategist proposes three ideas each for young professionals, mid-career families and pre-retirees, scored with data/idea-rubric.md → strategy/ideas.md. Show me the top five and stop — I will choose.

**PROMPT B — Claude Code: the storyboard**

> I choose idea <number>, because <one line>. Use subagents:
> - growth-strategist: campaign-brief and a five-beat storyboard with data/storyboard-template.md → strategy/storyboard.md.
> - content-creator: three channel variants that keep the same claims — LinkedIn, Facebook, a 60-second video. Then run fact-check and fin-compliance yourself and show me the issues before anything is final.

**Check your work**

- ☐  The strategist and the analyst ran in parallel.
- ☐  research/ has the competitor analysis and the funnel, cited.
- ☐  strategy/ideas.md holds nine scored ideas with their authors.
- ☐  You chose the idea and recorded why.
- ☐  The storyboard has five beats; every claim has a source.
- ☐  The Lead's fact-check and fin-compliance report came back.

**If it goes wrong**

- **The Lead did the work itself** — Ask directly for subagents, naming each agent.

**Stretch**

- Ask the analyst which persona the funnel says to target first, and compare it with your choice.

Why it matters: Agents diverge; a person decides. The concept checkpoint is where the campaign becomes yours.

### Topic 1 recap

#### Where You Are Now

The team exists and has run its first campaign. But who exactly is it for — and how often should it publish?

- **Formed  ·  Labs 1–4** — A studio, the public website, six agents with instructions, skills and connectors.
- **Campaign 1  ·  Lab 5** — Research in parallel, nine scored ideas, your choice, a storyboard.
- **What is missing** — Evidence about the audience and a cadence the team can deliver. That is Topic 2.

## Topic 2 — Audience Research and Content Requirement Analysis

Slides 65–79. In this topic you will:

- The Growth Analyst: personas from evidence
- Content requirements every agent can follow
- How often to publish: value, fatigue and capacity
- The calendar the team will run

### Key ideas for Lab 6

#### Evidence Before Personas

Lab 6: the Growth Analyst builds personas the way an analyst would.

1. **Collect** — 150 survey answers, 60 enquiries, 200 checklists.
1. **Count** — With code. Every claim has an n and a file.
1. **Segment** — By age band and life stage.
1. **Persona** — Worries, channels, formats, trust — with evidence.
1. **Requirement** — What each persona needs from every piece.

#### Observed, Inferred or Low Confidence?

Three labels keep a persona honest.

| Label | Example | Use it |
|---|---|---|
| Observed | 30–39s chose Facebook, LinkedIn and YouTube equally (survey, n = 44) | As fact, with the count |
| INFERENCE | "They are short of time on weekdays" — not asked | As a hypothesis to test |
| LOW CONFIDENCE | The 60+ group (n = 12) | Never alone; get more data |
| Verbatim | "I am 54 and not sure if my CPF will be enough." (E-id) | Exactly as written, with the id |

Tip: Ask "which rows show that?" of anything that sounds insightful.

### Lab 6 — Growth Analyst: Personas from Evidence

**The story so far:** Jun Wei drafted personas from instinct: 'busy young parents who love TikTok'. Rachel is not convinced. There are 150 survey answers, 60 enquiries and 200 checklists.

**Goal:** Personas made up in a meeting steer content wrong. The Growth Analyst builds them from 150 survey answers, 60 enquiries and 200 checklists — and labels what is guesswork.

**You'll build:** strategy/personas.md and strategy/content-spec.md

**Surface:** Claude Code (analyst subagents)  ·  **Time:** 40 min  ·  **Slides:** 68–72

**Lab folder:** labs_claude/lab-06-personas-from-evidence/ — assets: survey-responses.csv, enquiries.csv, checklist-results.csv, persona-template.md, content-spec-template.md

**Step-by-step**

1. **Check the data** — The CSVs and templates are already in data/. Open one and skim it.
1. **Analyse in parallel** — Paste Prompt A — three analyst subagents, one per file.
1. **Challenge a claim** — Pick one persona statement and ask: "which rows show that?"
1. **Write the requirements** — Paste Prompt B.
1. **Check the gaps** — The 60+ group must be LOW CONFIDENCE.

**PROMPT A — Claude Code: three analysts**

> Use three growth-analyst subagents in parallel, one per file: data/survey-responses.csv, data/enquiries.csv, data/checklist-results.csv. Each uses audience-insights: counts with code, n and the file on every claim, INFERENCE and LOW CONFIDENCE labels, enquiry quotes verbatim with ids. Combine the results into three personas with data/persona-template.md → strategy/personas.md.

**PROMPT B — Claude Code: requirements**

> Use the growth-strategist and the content-creator subagents to write strategy/content-spec.md with data/content-spec-template.md: for each persona the top 3 questions, channels, formats, length, tone, proof, call to action and never-say — each with the evidence (file and count) behind it.

**Check your work**

- ☐  Three analyst subagents ran, one per file.
- ☐  Every persona statement carries a count and a file.
- ☐  The 60+ group is LOW CONFIDENCE (n = 12).
- ☐  The most-unticked checklist item is the retirement number.
- ☐  Enquiry quotes are verbatim, with ids.
- ☐  content-spec.md has every field for every persona.

**If it goes wrong**

- **Numbers change between runs** — Insist on counting with code and showing the printed output.

**Stretch**

- Ask the analyst for a filterable dashboard of the survey as an artifact.

Why it matters: Ask "which rows show that?" of anything that sounds insightful. If the agent cannot point to rows, it is an inference.

### Key ideas for Lab 7

#### Finding the Right Frequency

Lab 7: the Analyst finds where more posts stop paying; the Strategist plans four weeks.

1. **Value** — Extra clicks from one more post a week.
1. **Fatigue** — Unfollows and unsubscribes it costs.
1. **Effort** — Hours per piece, against 12 a week.
1. **Review** — Two business days for Rachel's sign-off.
1. **Calendar** — Four weeks the team can actually deliver.

Tip: A third LinkedIn post a week brings more unfollows than value. Weekly emails make unsubscribes jump.

### Lab 7 — Growth Analyst and Strategist: Cadence and Calendar

**The story so far:** Jun Wei has 12 hours a week and Rachel needs two business days to review anything. How often should each channel run, and what goes out when?

**Goal:** Post too little and nobody remembers you; too much and people unfollow. The analyst finds the point where more stops paying; the strategist turns it into four deliverable weeks.

**You'll build:** strategy/cadence.md and strategy/calendar.csv

**Surface:** Claude Code (subagents)  ·  **Time:** 35 min  ·  **Slides:** 74–78

**Lab folder:** labs_claude/lab-07-cadence-and-calendar/ — assets: channel-benchmarks.csv, team-capacity.md, calendar-format.csv

**Step-by-step**

1. **Check the data** — The assets are already in data/. Open one and skim it.
1. **Find the sweet spot** — Paste Prompt A.
1. **Question it** — Why is the newsletter not weekly? The answer is in the unsubscribes.
1. **Plan four weeks** — Paste Prompt B.
1. **Check the buffers** — Every review date is two business days ahead; nothing on a holiday.

**PROMPT A — Claude Code: the analyst**

> Use the growth-analyst subagent. From data/channel-benchmarks.csv and data/team-capacity.md, recommend how often to publish on LinkedIn, Facebook, the newsletter and YouTube. Compare the extra clicks from one more post, the unfollows or unsubscribes it costs, and the hours. Show the numbers → strategy/cadence.md.

**PROMPT B — Claude Code: the strategist**

> Use the growth-strategist subagent to build a four-week calendar from Monday 2 November 2026 in strategy/calendar.csv (columns as data/calendar-format.csv), from the cadence, strategy/storyboard.md and strategy/content-spec.md. review_by two business days before each date; no public holidays; no week over the team's hours. Show a week-by-week summary with hours.

**Check your work**

- ☐  cadence.md gives a frequency per channel with the evidence.
- ☐  A third LinkedIn post a week costs far more unfollows than it earns.
- ☐  It explains the unsubscribe jump at weekly emails.
- ☐  calendar.csv covers four weeks in the required columns.
- ☐  Every review_by date is two business days before publishing.
- ☐  No week is over 12 hours.

**If it goes wrong**

- **Dates fall on weekends** — Say: "publish Monday to Saturday; the newsletter is Sunday 8am only".

**Stretch**

- Have the Lead add the review deadlines to a calendar you create for class.

Why it matters: Frequency is a capacity decision as much as an audience one. A calendar the team cannot deliver is fiction.

### Topic 2 recap

#### Day 1: The Team Is Ready

Everything the campaigns need tomorrow is in place.

1. **Home** — Shared rules and facts; Horizon's public website (Lab 1).
1. **Team** — Six agents: instructions, skills, connectors (Labs 2–4).
1. **Campaign 1** — Research, ideas and a storyboard (Lab 5).
1. **Audience** — Personas and requirements from evidence (Lab 6).
1. **Plan** — Cadence and a four-week calendar (Lab 7).

## Topic 3 — Multi-Channel Content Creation and Agent Workflow Coordination

Slides 80–106. In this topic you will:

- Subagents or an agent team?
- Human in the loop — enforced, not requested
- Campaigns 2–4: social week, newsletter + landing page, video
- From approval to LinkedIn, Facebook, email and YouTube

### Key ideas for Lab 8

#### Subagents vs Agent Teams

Both run agents in parallel, each with its own context. The difference is who they talk to.

**Subagents** — a team lead starts them; each works in its own context and returns only its result: Strategist (returns a brief); Creator (returns copy); Designer (returns images).

**Agent team** — a team lead keeps a shared task list; teammates claim tasks and message each other directly: Creator (shares hooks); Designer (asks for copy); Analyst (flags segments).

Use subagents when only the result matters. Use a team when the agents need to talk.

#### Which Pattern When?

From the Claude Code documentation, applied to the team.

|  | Subagents | Agent team |
|---|---|---|
| Talks to | Returns a result to the Lead | Teammates message each other directly |
| Coordination | The Lead manages everything | A shared task list; teammates claim tasks |
| Best for | Research, analysis, one-off reviews | Copy ↔ design ↔ review loops |
| Cost | Lower: results are summarised back | Higher: every teammate is its own Claude session |
| Campaigns | Labs 5, 6, 7, 12 | Labs 8, 9, 10 |

Tip: Agent teams are experimental: turn them on with CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1.

#### Running an Agent Team

Claude Code in a terminal. Describe the team in plain words.

1. **Turn it on** — "env": {"CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"} in .claude/settings.json; restart.
1. **Name the agent types** — "Spawn teammates using the agent types content-creator and creative-designer."
1. **Watch** — ↑ ↓ and Enter open a teammate; Ctrl+T shows the task list.
1. **Steer** — Message any teammate directly; tell the Lead to wait.
1. **Shut down** — "Ask the teammates to shut down" when done.

Tip: Teammates load CLAUDE.md, skills and connectors — but not the Lead's conversation. One team per session.

#### Human in the Loop, Enforced

A rule in a prompt persuades. The publisher kit builds a gate that holds.

- **Only people approve** — approve.mjs refuses to run without an interactive terminal — an agent's tool call cannot approve.
- **The approved words go out** — The approval stores a hash. Edit one word and publish --live refuses until a person approves again.
- **A hook stops agents** — A PreToolUse hook blocks agents from running approve.mjs or publishing unapproved items.

#### The Hook That Holds the Gate

Claude Code runs it before every Bash, Edit or Write. Exit code 2 blocks the call and tells the agent why.

**.claude/settings.json**

```
{
  "env": { "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" },
  "hooks": {
    "PreToolUse": [{
      "matcher": "Bash|Edit|Write|MultiEdit",
      "hooks": [{
        "type": "command",
        "command": "node \"$CLAUDE_PROJECT_DIR/scripts/gate-hook.mjs\""
      }]
    }]
  }
}
```

#### The Publishing APIs

publish.mjs is a dry run by default. Tokens live only in .env.

| Channel | Endpoint | Permission |
|---|---|---|
| LinkedIn | POST api.linkedin.com/rest/posts  (LinkedIn-Version: YYYYMM) | w_member_social — your own profile |
| Facebook | POST graph.facebook.com/<version>/<page-id>/feed | Page token: pages_manage_posts |
| YouTube | Resumable upload to youtube/v3/videos, privacy private | youtube.upload; unaudited projects stay private |
| Newsletter | No API — HTML + text files, then Gmail drafts | Consent = yes, unsubscribed = no |

Tip: No accounts? Every lab works in dry-run mode: you see the exact request that would be sent.

#### Campaign 2: A Social Media Week

Lab 8: two LinkedIn and three Facebook posts, each with a visual.

1. **Lead** — Reads the brief and the calendar; assigns the posts.
1. **Content Creator** — Five posts with hooks, UTM links, disclaimers.
1. **Creative Designer** — One image per post, with alt text.
1. **Lead review** — fact-check and fin-compliance; fixes go back.
1. **You** — Approve in your own terminal; dry run, then go.

### Lab 8 — Campaign 2: A Social Media Week

**The story so far:** Day 2. Week 1 of the campaign starts Monday: two LinkedIn posts and three Facebook posts, each with a visual — and Rachel's one rule: nothing goes out unless a person approved that exact version.

**Goal:** Week 1 of the campaign: two LinkedIn and three Facebook posts, each with a visual. Copy and design must agree, the Lead must check every claim — and only a person can approve.

**You'll build:** content/social/week-01/: five posts with images, reviewed, approved by you and posted (or dry-run)

**Surface:** Claude Code (agent team) → LinkedIn, Facebook  ·  **Time:** 50 min  ·  **Slides:** 88–92

**Lab folder:** labs_claude/lab-08-campaign-2-social-week/ — assets: social-brief.md, publisher-kit/, publishing-spec.md, approvals-format.csv, connect-accounts.md, env.example, sample-calendar.csv

**Step-by-step**

1. **Install the kit** — Copy publisher-kit/scripts into scripts/ and merge its settings.json into .claude/settings.json (agent teams on, the approval hook). Restart Claude Code.
1. **Test the gate** — Ask Claude to run approve.mjs on anything. The hook must block it.
1. **Start the team** — Paste Prompt A. Teammates appear in the panel; ↑ ↓ and Enter open one; Ctrl+T shows the task list.
1. **Watch them talk** — The designer asks the creator for each post's hook; the Lead sends fixes back.
1. **Approve as a person** — Read each post and image. In your own terminal: node scripts/approve.mjs <id> --by "Your Name".
1. **Publish** — Paste Prompt B. Dry run first; --live only if your accounts are connected.

**PROMPT A — Claude Code: the social team**

> Create an agent team for Week 1 social from data/social-brief.md and strategy/calendar.csv. Spawn two teammates using the agent types content-creator and creative-designer; you are the Lead.
> - content-creator: 2 LinkedIn + 3 Facebook posts, one file each in content/social/week-01/, with the frontmatter in data/publishing-spec.md.
> - creative-designer: one image per post (Canva or a rendered card) with alt text; message the creator for each post's hook before designing.
> - You: fact-check and fin-compliance on every post; message fixes to the teammate who owns it. When a post passes, run node scripts/submit.mjs on it. Publish nothing.

**PROMPT B — Claude Code: publish**

> For every Week 1 post approved in review/approvals.csv, run node scripts/publish.mjs <id> as a dry run and show me each request. Wait for me to say "go" before any --live run.

**Check your work**

- ☐  The hook (or approve.mjs) stopped the agent from approving.
- ☐  Two teammates ran; the task list showed their tasks.
- ☐  The designer and the creator messaged each other.
- ☐  Five posts with images, alt text, frontmatter and UTM links.
- ☐  You approved in your own terminal; the rows show your name and a hash.
- ☐  Dry runs printed every request; nothing went live unless you said go.

**If it goes wrong**

- **You got subagents, not a team** — Check the env setting in .claude/settings.json, restart, and ask for "an agent team".
- **LinkedIn returns 426** — LINKEDIN_VERSION must be a recent YYYYMM.

**Stretch**

- Add the growth-analyst to suggest the best posting time per post from channel-benchmarks.csv.

Why it matters: Subagents report to one boss; teammates also talk to each other. A designer who can ask the writer for the hook makes a better image.

### Key ideas for Lab 9

#### Campaign 3: Newsletter + Landing Page

Lab 9: three specialists, one email and one page, consent first.

1. **Content Creator** — The issue and the landing-page copy.
1. **Website Designer** — The checklist page, page-qa, then a Claude artifact.
1. **Growth Analyst** — Recipients by consent: 31 of 40.
1. **Lead** — Checks everything; the build waits for you.
1. **Drafts** — Gmail drafts — one to you to test. Nothing sent.

#### Consent Decides Who Gets Mail

The PDPA, applied by an agent that counts.

- **Opt-in only** — consent = yes and unsubscribed = no. Everyone else goes to excluded.csv with a reason.
- **Every email carries** — An unsubscribe link, Horizon's address and the short disclaimer.
- **The page collects little** — Name, email, a required consent box, a separate unticked newsletter opt-in.

### Lab 9 — Campaign 3: Newsletter and a Landing Page

**The story so far:** The Sunny Sunday email books chats most cheaply. November's issue promotes a new landing page for the free checklist — and must reach only the 31 people who opted in.

**Goal:** The Sunny Sunday email books chats most cheaply — if it is right and reaches only people who said yes. This issue promotes a new landing page for the Money Check-up Checklist.

**You'll build:** content/newsletter/2026-11/ (issue, HTML, text, recipients, excluded), web/checklist/ published, Gmail drafts

**Surface:** Claude Code (agent team) → Claude artifact, Gmail  ·  **Time:** 45 min  ·  **Slides:** 95–99

**Lab folder:** labs_claude/lab-09-campaign-3-newsletter-and-landing-page/ — assets: newsletter-brief.md, newsletter-spec.md, landing-page-brief.md, site-brief.md, checklist-items.md, subscribers.csv

**Step-by-step**

1. **Start the campaign** — Paste Prompt A.
1. **Approve the words** — Read issue.md and the page copy; approve nl-2026-11 in your own terminal.
1. **Publish the page** — The website designer runs page-qa and publishes web/checklist/ as a Claude artifact.
1. **Check the list** — recipients.csv: only consent = yes and unsubscribed = no.
1. **Create the drafts** — Paste Prompt B.
1. **Send one test** — Send only the draft addressed to yourself, and read it on your phone.

**PROMPT A — Claude Code: the newsletter team**

> Create an agent team for the November Sunny Sunday email (data/newsletter-brief.md, data/newsletter-spec.md) and its landing page (data/landing-page-brief.md). Spawn three teammates:
> content-creator, website-designer and growth-analyst.
> - content-creator: issue.md (id nl-2026-11) and the landing-page copy.
> - website-designer: web/checklist/index.html with landing-page from the approved copy; page-qa.
> - growth-analyst: recipients.csv and excluded.csv from data/subscribers.csv. You check everything, then submit nl-2026-11. Build newsletter.html and .txt, and publish the page as an artifact, only after I approve.

**PROMPT B — Claude Code: Gmail drafts**

> Using the Gmail connector, create a DRAFT of newsletter.html for each address in recipients.csv, plus one draft addressed to me only. Send nothing. Report how many drafts and how many people were excluded, and why.

**Check your work**

- ☐  Three specialists worked on the campaign; the Lead checked all.
- ☐  You approved nl-2026-11 in your own terminal before the build.
- ☐  The landing page passed page-qa and is published.
- ☐  recipients.csv holds 31 people; excluded.csv lists 9 with reasons.
- ☐  The email has unsubscribe, address and disclaimer.
- ☐  Drafts only — nothing was sent to the list.

**If it goes wrong**

- **The build started before approval** — Tell the Lead the build waits for review/approvals.csv to say approved.

**Stretch**

- Ask for two subject lines to A/B test, with a reason for each.

Why it matters: Consent decides who gets mail — not the agent and not the deadline. Marketing to people who did not opt in breaks the PDPA.

### Key ideas for Lab 10

#### Campaign 4: The YouTube Explainer

Lab 10: the team writes and designs; you approve twice.

- **Strategist and Creator** — The angle, then 5–7 scenes with words on screen and a description with chapters and an AI disclosure.
- **Creative Designer** — Storyboard, thumbnail, then the render with video-render — ffmpeg, 1920×1080, under 90 s.
- **Upload privately** — Approve the words, then the finished video. It uploads as private; a person makes it public.

### Lab 10 — Campaign 4: The YouTube Explainer

**The story so far:** Pre-retirees say they would rather watch than read. Rachel wants the first 'Money in Plain English' video, uploaded privately until she has watched it.

**Goal:** Pre-retirees would rather watch than read. The team makes "Your CPF retirement sums in 60 seconds" — and it goes up privately until a person has watched it.

**You'll build:** content/video/ep01/: scenes.json, thumbnail, ep01.mp4, ep01.md, and a private YouTube upload (or dry run)

**Surface:** Claude Code (agent team, render, upload)  ·  **Time:** 45 min  ·  **Slides:** 101–105

**Lab folder:** labs_claude/lab-10-campaign-4-youtube-explainer/ — assets: youtube-brief.md, video-spec.md, sample-explainer.mp4

**Step-by-step**

1. **Script it as a team** — Paste Prompt A.
1. **Approve the script** — Read scenes.json and ep01.md; approve yt-ep01-script in your own terminal.
1. **Render it** — Paste Prompt B. The designer runs video-render.
1. **Approve the video** — Submit ep01.md, watch ep01.mp4 to the end, then approve yt-ep01.
1. **Upload** — Paste Prompt C. It goes up as private.
1. **Disclose** — In YouTube Studio, answer the altered or synthetic content question before making it public.

**PROMPT A — Claude Code: the video team**

> Create an agent team for YouTube episode 1 from data/youtube-brief.md. Spawn three teammates:
> growth-strategist (the angle and hook), content-creator (content/video/ep01/scenes.json, 5-7 scenes, and ep01.md with title, tags, description, chapters and the AI disclosure) and creative-designer (a storyboard of the scenes and a thumbnail, using brand-visuals). You fact-check and fin-compliance the script, then submit it as yt-ep01-script. Publish nothing.

**PROMPTS B and C — Claude Code: render and upload**

> PROMPT B
> Use the creative-designer subagent with video-render on the approved scenes.json → content/video/ep01/ep01.mp4 (data/video-spec.md). Check it with ffprobe. Do not change approved words.

> PROMPT C
> Run node scripts/publish.mjs yt-ep01 as a dry run. If I say "go", run it with --live: it uploads as PRIVATE. Give me the YouTube Studio link.

**Check your work**

- ☐  The strategist, creator and designer each delivered their part.
- ☐  You approved the script, then the finished video.
- ☐  ep01.mp4 is 1920x1080, under 90 seconds, every scene present.
- ☐  Every figure on screen matches facts-2026.md.
- ☐  The description has chapters, link, disclaimer and AI disclosure.
- ☐  The upload is private (or the dry run printed the request).

**If it goes wrong**

- **ffmpeg not found** — Install it, or use sample-explainer.mp4 to test the upload.

**Stretch**

- Ask the designer for a 30-second vertical Short from the same scenes.

Why it matters: Approve twice: once for the words, once for the finished video. Rendering can break what the script got right.

### Topic 3 recap

#### Where You Are Now

Three campaigns, every piece checked by the Lead and approved by a person. But the team stops when you close the laptop.

- **Gate  ·  Lab 8** — People approve, hashes hold, a hook stops agents.
- **Campaigns  ·  Labs 8–10** — Social week, newsletter + landing page, the video.
- **What is missing** — A team that works every week on its own — and rules to govern it. That is Topic 4.

## Topic 4 — Content Distribution, Strategy Guidelines and Responsible AI Practices

Slides 107–135. In this topic you will:

- Campaign 5: always on, with a scheduled task
- Responsible AI for financial content
- Measure the patterns; write the team playbook
- Optional demo: the team on Hermes Agent

### Key ideas for Lab 11

#### From Skill to Schedule

Lab 11: do the job once, keep it as a skill, let a schedule run it.

1. **Do** — The Growth Analyst writes the weekly report once, from Drive.
1. **Verify** — Fix the sections until the report is right.
1. **Skill** — campaign-report holds the procedure.
1. **Schedule** — A scheduled task runs it every Monday at 8am.
1. **Review** — It leaves a Gmail draft — a person decides.

Tip: Pause scheduled tasks you are not using.

#### Automate the Preparation, Not the Decision

What a scheduled agent should and should not do for a regulated firm.

- **Prepare** — Read the data, run the skill, draft the report, flag what needs a decision.
- **Draft, never send** — Write "draft only — never send, publish or approve" in the skill AND the schedule.
- **Keep a human gate** — The schedule fills an inbox. A named person still decides.

### Lab 11 — Campaign 5: Always On — the Weekly Growth Report

**The story so far:** The team must keep working after class. Rachel wants the Growth Analyst's report in her inbox every Monday — as a draft she decides on.

**Goal:** The team should keep working when class ends. Every Monday the Growth Analyst's report lands in Rachel's inbox as a draft — the decision stays with a person.

**You'll build:** a scheduled task that drafts the weekly growth report every Monday at 8am, and one draft in Gmail

**Surface:** Claude (skill, scheduled task, Drive, Gmail)  ·  **Time:** 35 min  ·  **Slides:** 110–113

**Lab folder:** labs_claude/lab-11-campaign-5-weekly-growth-report/ — assets: campaign-results.csv, weekly-report-brief.md, scheduled-task-instructions.md

**Step-by-step**

1. **Put the data on Drive** — Upload campaign-results.csv to the Horizon Studio folder.
1. **Bring the skill** — Upload the campaign-report skill folder under Customize → Skills in Claude.
1. **Do it once** — Paste Prompt A. Refine the report until it is right.
1. **Schedule it** — Create a scheduled task for Mondays at 8am and paste scheduled-task-instructions.md into its Instructions.
1. **Run it now** — Run the task once and open the Gmail draft.
1. **Pause it** — After class, pause the scheduled task.

**PROMPT A — Claude: do it once**

> Act as Horizon's Growth Analyst. Using Google Drive, read campaign-results.csv in the Horizon Studio folder. Use the campaign-report skill and data/weekly-report-brief.md. Leave the report as a Gmail DRAFT to me, subject "Horizon weekly growth report" and today's date. Send nothing.

**Check your work**

- ☐  The campaign-report skill is available in Claude.
- ☐  The report names the cheapest channel per chat (the newsletter).
- ☐  It recommends a budget split with a reason per channel.
- ☐  A scheduled task runs Mondays at 8am with draft-only instructions.
- ☐  A manual run left a draft — nothing was sent.
- ☐  The task is paused after class.

**If it goes wrong**

- **It sent the email** — Write "draft only — never send" in both the skill and the task instructions.

**Stretch**

- Add a Friday 5pm task from the Lead: what was published and what is still pending.

Why it matters: Automate the preparation, not the decision. The schedule fills an inbox; a person still decides.

### Key ideas for Lab 12

#### Responsible AI in the Team

Each risk has a control you built in this course.

| Risk | Control | Where |
|---|---|---|
| Wrong figure | fact-check skill; the Lead's review; facts sheet | Labs 3, 5, 8–10 |
| Read as advice or a promise | fin-compliance; disclaimers; no returns | Labs 3, 8–10 |
| An agent with too much access | Least-privilege connectors per agent | Lab 4 |
| Unapproved post | approve.mjs (people only), hash, hook | Lab 8 |
| Marketing without consent | The Analyst filters by consent | Lab 9 |
| Undisclosed AI media | Description line + YouTube disclosure | Lab 10 |

Tip: Keep keys in .env, client data out of prompts, and the approval records for audit.

#### Measure What Matters

Lab 12: the numbers decide next month — and which patterns earn their tokens.

- **Cost per chat** — Spend ÷ chats booked shows which channel works: email first, YouTube last.
- **Defects before a person** — A Lead that catches mistakes saves the reviewer's time; one agent alone caught none.
- **The playbook** — Roster, instructions, skills, connectors, approval matrix, incidents — so the team runs without you.

### Lab 12 — Measure, Govern and Write the Team Playbook

**The story so far:** Eight weeks in. Rachel asks which ways of running agents earned their tokens, and how the team runs safely after you leave.

**Goal:** Rachel asks: which patterns earned their tokens, and how does the team run safely after you leave? Answer with numbers, then with a playbook a new hire can follow.

**You'll build:** reports/agent-comparison.md and strategy/team-playbook.md

**Surface:** Claude Code (subagents)  ·  **Time:** 40 min  ·  **Slides:** 116–120

**Lab folder:** labs_claude/lab-12-team-playbook/ — assets: run-log.csv, playbook-outline.md, responsible-ai-checklist.md

**Step-by-step**

1. **Check the data** — The assets are already in data/. Open one and skim it.
1. **Compare the patterns** — Paste Prompt A.
1. **Write the playbook** — Paste Prompt B.
1. **Review it as Rachel** — Add one rule of your own and say why.

**PROMPT A — Claude Code: compare**

> Use the growth-analyst subagent. From data/run-log.csv compare the patterns we used — one agent, subagents, agent teams and the scheduled task — on minutes, tokens, defects caught before a person and human edits. Which pattern pays off for which job? Save reports/agent-comparison.md.

**PROMPT B — Claude Code: the playbook**

> Write strategy/team-playbook.md with data/playbook-outline.md. Include the roster: for each agent its instructions file in .claude/agents/, its skills, connectors, model and what it may never do; the approval matrix by risk; the rules in data/responsible-ai-checklist.md; and what to do when a wrong post goes out. Then run fin-compliance on it.

**Check your work**

- ☐  agent-comparison.md shows the one-agent baseline caught 0 defects.
- ☐  It says which pattern suits which job, with numbers.
- ☐  The roster lists all six agents with skills and connectors.
- ☐  The approval matrix says who approves CPF and tax figures.
- ☐  It has an incident procedure, and your own rule.

**If it goes wrong**

- **The playbook is generic** — Say: "use our actual agents, files and numbers".

**Stretch**

- Turn the playbook into a skill, team-playbook, for the Lead.

Why it matters: Teams cost more tokens. The run log shows what you buy with them: defects caught before a person, and fewer edits.

### Key ideas for Lab 13

#### What Is Hermes Agent?

Nous Research's open-source (MIT) agent — the same team on any model. A demo, not assessed.

**The Model — Your model** (Claude · GPT · open models): Any provider: Anthropic API, OpenRouter, Nous Portal or your own endpoint.

**Hermes agent — open source:**

- **Profiles** — Separate agents — own model, memory, skills and bot.
- **Kanban** — A shared board: tasks, parents, review, block.
- **Skills** — The same SKILL.md folders you wrote in Lab 3.
- **Gateway** — Telegram, Discord, Slack, WhatsApp, Signal, email.
- **Cron** — Jobs in plain words: "every Monday 8am".
- **Delegation** — delegate_task runs subagents in parallel.

A Claude subscription does not cover Hermes — it needs an API key with a spend limit.

#### The Hermes Kanban Board

Every task is a row anyone can read; every hand-off is visible.

1. **triage** — A rough idea; the planner breaks it down.
1. **todo → ready** — Ready when its parent tasks are done.
1. **running** — The dispatcher starts the assigned profile.
1. **blocked / review** — A person's turn: unblock or request changes.
1. **done** — Finished, with a summary for the next task.

Tip: The dispatcher runs inside hermes gateway start.

### Lab 13 — Optional Demo: the Team on Hermes Agent

**The story so far:** Optional. Rachel's IT adviser asks what happens if the AI provider changes its prices. The trainer runs the same pipeline on open-source Hermes Agent.

**Goal:** Optional: see the same strategist → creator → Lead pipeline on an open-source agent with any model, on a durable Kanban board.

**You'll build:** three Hermes profiles and a pipeline on the board, with the review task blocked for a person (demo)

**Surface:** Hermes Agent (profiles, Kanban) — trainer demo  ·  **Time:** 25 min  ·  **Slides:** 123–126

**Lab folder:** labs_claude/lab-13-optional-hermes-agent-demo/ — assets: hermes-setup.md, hermes-roles.md, kanban-pipeline.sh

**Step-by-step**

1. **Install Hermes** — Follow hermes-setup.md with an API key (a Claude subscription does not cover Hermes).
1. **Create the bots** — Create the profiles in hermes-roles.md and copy skills/ into each.
1. **Start the board** — hermes kanban init, then hermes gateway start in a second terminal.
1. **Build the pipeline** — Paste the prompt into hermes, or run kanban-pipeline.sh.
1. **Be the gate** — The Lead blocks for a person: unblock it with hermes kanban unblock <id>.

**PROMPT — Hermes: the planner**

> You are Horizon's Marketing Team Lead. Create a Kanban pipeline with dependencies:
> 1. strategist: the angle and facts for a LinkedIn post on CPF cash top-ups, from facts-2026.md.
> 2. creator (parent 1): write it with sunny-voice.
> 3. lead (parent 2): fact-check and fin-compliance; then block the task with the reason "Needs approval from a person". Show me the task ids and the board.

**Check your work**

- ☐  hermes profile list shows the three profiles.
- ☐  The board shows three tasks linked by parents.
- ☐  The review task is blocked for a person.
- ☐  Unblocking finished the pipeline.

**If it goes wrong**

- **Tasks stay in ready** — Start the dispatcher: hermes gateway start.

**Stretch**

- Connect a Telegram bot and schedule the weekly report with hermes cron.

Why it matters: Optional, not assessed. The pattern carries over: roles, skills and a human gate work on an open-source agent too.

## Course Summary

#### How Each Pattern Is Triggered

Five ways your team runs. The difference is what sets each one off.

- **Subagents (by delegation)** — The Lead starts them when you ask — or when a task matches an agent's description. Example: "use subagents, one per role". Where: .claude/agents/.
- **Agent teams (by the lead)** — The Lead spawns teammates who share a task list and message each other. Example: "spawn teammates using agent types…". Where: Claude Code (experimental).
- **Skills (on demand)** — Loaded when the task matches the description. Free until then. Example: campaign-brief video-render. Where: .claude/skills/.
- **Hooks (on an event)** — Run every time an event fires — before a tool runs. The model cannot skip them. Example: PreToolUse: gate-hook.mjs. Where: .claude/settings.json.
- **Scheduled tasks (on the clock)** — Run a skill on a schedule and leave the result for a person. Example: Mondays 8am: campaign-report. Where: Claude.

Who decides?  You: the approval  ·  the model: delegation and skills  ·  the system, every time: hooks and the clock

#### Horizon: One Team, Five Campaigns

Two days, one regulated business — the Claude Edition.

1. **Form** — A Lead and five agents: instructions, skills, connectors.
1. **Plan** — Campaign 1, personas, cadence and a calendar.
1. **Create** — Social week, newsletter + landing page, video.
1. **Govern** — A human gate, least privilege, a playbook.
1. **Run** — The weekly report, on a schedule, as a draft.

#### Practice Exam: Claude Certified Associate

exams.tertiaryinfotech.com/practice-exams/anthropic/anthropic-ccao-foundations

- **CCAO-F · Foundations** — For professionals who use Claude as a productivity tool.
- **What it covers** — Prompting and task execution, output evaluation, model selection, workflow integration, responsible use.
- **Try it free** — Start with the free practice teaser; exam mode is 60 questions in 120 minutes.

## Quick Command Reference

| Command | What it does |
|---|---|
| claude · /login | Start Claude Code in the folder · sign in (artifacts need it) |
| .claude/agents/<name>.md | An agent: name, description, tools, model, skills, instructions |
| "use the <name> subagent" · @agent-<name> | Delegate to one specialist |
| "use subagents, in parallel" | Run several specialists at once |
| "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1" | Under "env" in .claude/settings.json — agent teams |
| "spawn teammates using the agent types …" | Start an agent team from your subagent files |
| ↑ ↓ · Enter · Ctrl+T | Agent team: select · open a teammate · task list |
| .claude/skills/<name>/SKILL.md | A skill; /skill-creator in Claude |
| /mcp | See connected servers, incl. claude.ai connectors |
| claude mcp add playwright -s project -- npx -y @playwright/mcp@latest | A browser for the Website Designer |
| "Publish … as an artifact" · /artifacts | Publish a page; list your artifacts |
| node scripts/submit.mjs <file> | Agents: put content up for review |
| node scripts/approve.mjs <id> --by "Name" | People only, in your own terminal |
| node scripts/publish.mjs <id> [--live] | Dry run by default; --live posts an approved item |

## Support

Tertiary Infotech Academy Pte Ltd · enquiry@tertiaryinfotech.com · +65 6100 0613 · www.tertiarycourses.com.sg

Courseware and the assessment are on the LMS: https://lms-tms.tertiaryinfotech.com/

### Assessment flow

1. TRAQOM — scan the TRAQOM QR code on the LMS and complete the survey.
1. Assessment Digital Attendance.
1. Assessment — Written Assessment (1 hour, from 4:00 PM) and Practical Performance (1 hour, from 5:00 PM).
1. Submit the assessment answers on the LMS.
1. Sign the Assessment Summary Record.
