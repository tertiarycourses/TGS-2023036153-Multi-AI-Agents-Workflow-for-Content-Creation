# Multi AI Agents Workflow for Content Creation — Learner Guide

TGS-2023036153 · Version 3.5 · Tertiary Infotech Academy Pte Ltd (UEN 201200696W)

## How to Use This Guide

This guide carries the full step-by-step for every lab in the course. The slides explain the idea; this guide is what you follow at the keyboard. Every lab also has its own folder in the lab pack with a README, the prompts as Markdown and PDF, the assets you need and an evidence checklist.

Before you start, have ready:

- The ChatGPT desktop app on Plus or Pro (Work, Codex, plugins, Sites).
- Node.js 22, Python 3 with Pillow, and ffmpeg.
- A personal Google account for Drive, Gmail and Calendar — never an employer's.
- The lab pack (labs_chatgpt/), unzipped. Keep one working folder, horizon-studio, from Lab 1 to Lab 14. Lab 15 is an optional demo.

Prompts appear as shaded quotes — paste them as written. Code, commands and configuration appear in grey monospace blocks. Product menus change between releases: if a name here differs from your screen, follow the screen and tell the trainer.

## The Scenario: Horizon Wealth Planning

Rachel Goh founded Horizon Wealth Planning in 2010. Fifteen years and 1,200 clients later, almost every new client still comes through a referral — and referrals are slowing. Younger Singaporeans look for money help on LinkedIn, Facebook, YouTube and in their inbox, and Horizon is invisible there.

Rachel has a website, three planners, a part-time marketer (Jun Wei) and S$4,000 a month. She wants 40 booked free chats a month by March 2027 — without hiring a marketing team. So you will build her one, made of AI agents, with ChatGPT and Codex:

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

#### Course Outline

Four topics over two days. Day 1 forms the team; Day 2 runs its campaigns.

1. **T1 · Ideation and Storyboarding** — The studio, the team's instructions, skills and connectors; Campaign 1. Labs 1–5.
1. **T2 · Audience and Requirements** — Personas from evidence; cadence and calendar; the first blog article. Labs 6–8.
1. **T3 · Creation and Coordination** — Lead magnet, social week, newsletter + landing page, video — behind a human gate. Labs 9–12.
1. **T4 · Distribution and Responsible AI** — The weekly report on a schedule; the playbook; optional demo. Labs 13–15.

#### Lab Materials

Fifteen labs, each in its own folder with a README, prompts (MD and PDF), assets, an evidence checklist and, where useful, a solution.

| Day | Labs | Topic |
|---|---|---|
| 1 | 1 Agent team · 2 Instructions · 3 Skills · 4 Connectors | T1 · form the team |
| 1 | 5 Campaign 1: research to storyboard | T1 · Campaign 1 |
| 1 | 6 Personas · 7 Cadence and calendar · 8 Blog article | T2 · audience, content |
| 2 | 9 Lead magnet · 10 Social week · 11 Newsletter + landing page · 12 Video | T3 · Campaigns 2–4 |
| 2 | 13 Weekly report · 14 Playbook · 15 Optional demo | T4 · Campaign 5 |

Tip: One horizon-studio folder from Lab 1 to Lab 14 — the team keeps what it learns.

#### ChatGPT or Codex?

Every lab says which to use. The rule: ChatGPT to create and schedule; Codex when the agents work on files.

| Use | Labs | What it is for |
|---|---|---|
| ChatGPT | 8, 9, 15 | One person creating or designing. |
| Codex | 1, 2, 5, 6, 7, 10, 12, 14 | The team's files: role cards, skills, subagents, scripts, the video. |
| Codex, then ChatGPT | 3 | Build in Codex, then share in ChatGPT. |
| ChatGPT, then Codex | 4 | Install plugins, then test the agents. |
| Codex, then ChatGPT Work | 11 | Build in Codex; Gmail drafts in ChatGPT Work. |
| ChatGPT Work | 13 | Scheduled tasks and plugins. |

Tip: Both work on the same horizon-studio folder, so whatever one makes, the other can open.

#### Lesson Plan (9:00 AM – 6:00 PM)

Tea breaks 10 min, lunch 45 min. Full timings and slide numbers are in the Lesson Plan.

| Block | Day 1 — Form the Team | Day 2 — Run the Campaigns |
|---|---|---|
| Morning 1 | 9:00–10:30  Welcome · Topic 1 · Lab 1 | 9:00–10:40  Topic 3 · Labs 9–10 |
| Morning 2 | 10:40–12:40  Labs 2–3 | 10:50–12:35  Labs 11–12 · recap |
| Afternoon 1 | 13:25–15:20  Labs 4–5 | 13:20–15:00  Topic 4 · Labs 13–14 |
| Afternoon 2 | 15:30–18:00  Topic 2 · Labs 6–8 · review | 15:10–16:00 Demo · summary · 16:00–18:00 Assessment |

Tip: Day 2 assessment: Written Assessment 4:00–5:00 PM, Practical Performance 5:00–6:00 PM.

#### ChatGPT, ChatGPT Work and Codex

One desktop app. The toggle above the composer picks Chat or Work; the sidebar holds Codex.

- **Codex — the team's home** — The Lead's chat; role cards; skills in .agents/skills/; subagents by asking; scripts and the video.
- **ChatGPT and Work — the team's apps** — A Project for shared files; plugins (Drive, Gmail); skills; scheduled tasks; @Sites.
- **Dots and workspace agents · optional** — An always-on Lead (Pro, Business Premium) and shared agents (Business). A demo at the end.

#### Which Plan Has What

Features by ChatGPT plan, checked 8 Oct 2026. Prices change — check chatgpt.com/pricing.

| Feature | Plans | In this course |
|---|---|---|
| ChatGPT Work, Codex | Plus, Pro, Business, Enterprise | Every lab |
| Sites | Plus, Pro and workspaces (beta) | Lab 11 |
| Plugins and skills | Paid plans | Labs 3, 4, 13 |
| Scheduled tasks | Paid plans — 5 active on Plus, 15 on Pro | Lab 13 |
| Dots (first one included) | Pro, Business Premium | Lab 15 demo |
| Workspace agents | Business, Enterprise, Edu | Lab 15 demo |

Tip: This edition builds the team with skills and Codex subagents, so it works on Plus and Pro.

#### A Brief History of AI, 2023–2026

- **2023 · Chatbots** — ChatGPT goes mainstream; Anthropic launches Claude (March). The skill: prompt engineering.
- **2024 · Tools and MCP** — Models call tools. Anthropic open-sources the Model Context Protocol (Nov). The skill: context engineering.
- **2025 · Agentic AI** — Claude Code and Codex: agents plan, act and check their own work. The skill: harness engineering.
- **2026 · Agent Teams** — ChatGPT Work and Codex subagents; workspace agents and always-on Dots.

From wording one prompt, to curating context, to engineering the whole system around the model — and now, teams of agents.

#### What Is a Harness?

The model is the brain. The harness is everything built around it that turns a model into an agent able to finish long tasks.

- **The agentic loop** — Plans, acts, checks the result and repeats until the goal is met.
- **Tools and context** — Files, commands, search and connectors (MCP); instructions, memory and skills loaded at the right moment.
- **Guardrails and checks** — Permission modes, approvals, hooks and tests — what it must ask before it acts.
- **Harnesses you will meet** — Codex and ChatGPT Work in class; also Claude Code, Gemini CLI, Hermes Agent and OpenClaw.

#### The Agentic Loop

Every agent runs the same repeating cycle. A team is several loops, side by side.

1. **Gather context** — Reads the prompt, AGENTS.md, its instructions, files and skills.
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

#### Agentic AI vs AI Agents

Both use tools, skills and memory. The difference is how long they live and what starts them.

| Feature | Agentic AI — task-oriented | AI agents — always on, 24/7 |
|---|---|---|
| Tool calling | Yes — files, search, connectors, subagents. | Yes — plus chat apps, the browser and other agents. |
| Skills | Yes — loads SKILL.md procedures when the task matches. | Yes — and can write and improve its own skills. |
| Memory | Within the task, plus project memory across sessions. | Long-term memory about you and your work. |
| Availability | Starts when you give it a task; stops when done. | Runs 24/7 on a computer or server. |
| Started by | You, with a task. | You, a schedule, a message or another agent. |
| In this course | Codex running a campaign (Labs 1–12). | The scheduled weekly report (Lab 13); Dots (Lab 15). |

Tip: Rule of thumb: a job with an end → agentic AI; a job that recurs → an always-on agent.

#### What Is an Agent Made Of?

A model on its own can only answer. Wrap it with these parts and it can act — and check what it did.

**The Brain — GPT** (the model): Reads the goal, plans the next step and picks the part to use.

**The agent:**

- **Instructions** — Its job and rules — AGENTS.md and a role card.
- **Tools** — Actions: read and write files, search, run code, use a connector.
- **Skills** — Saved procedures it loads when the task matches — SKILL.md.
- **Memory** — What it keeps between sessions: preferences, past fixes.
- **Knowledge base** — Trusted sources only: Horizon's facts sheet, brand and compliance rules.
- **Guardrails** — Permissions, approvals and hooks — what it must ask first.

You build every one of these for Horizon's six agents in Labs 2–4.

#### Build a Marketing Team, Then Run Campaigns

Horizon Wealth Planning has a website, a goal of 40 booked chats a month — and no marketing team. You build one, made of AI agents.

1. **Form the team** — A Lead and five specialists: instructions, skills, connectors (Labs 1–4).
1. **Campaign 1** — Research, ideas and a storyboard (Lab 5).
1. **Know the audience** — Personas, requirements, cadence (Labs 6–7).
1. **First content** — A blog article and the lead magnet (Labs 8–9).
1. **Campaigns 2–4** — Social week, newsletter + landing page, video (Labs 10–12).
1. **Campaign 5** — Always on: the weekly report; the playbook (13–14).

#### Meet Horizon Wealth Planning

The firm's public website — the same link for every learner. You do not build it; every campaign points back here.

- **Plain English** — Retirement, CPF, insurance and investing — no jargon, no hard sell.
- **One goal** — Turn visitors into booked free 30-minute chats.
- **Regulated** — Financial content: general information only, never a promised return.

#### Your AI Marketing Team

One Lead and five specialists — each with instructions, its own skills and connectors.

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
| Team Lead | Plans, assigns, checks, hands to a person | fact-check, fin-compliance | @Google Drive (read), @Gmail (drafts only) |
| Growth Strategist | Research, positioning, briefs, storyboards | competitor-scan, campaign-brief, content-marketing | web search, @Google Drive (read) |
| Content Creator | Posts, newsletter, scripts, page copy | sunny-voice, copywriting, channel-formats, linkedin-post, facebook-post, blog-post, newsletter | @Google Drive (docs), @Gmail (drafts only) |
| Creative Designer | Images, thumbnails, the video | brand-visuals, video-render | $imagegen, ffmpeg in Codex |
| Website Designer | Landing pages, published and checked | web-design, landing-page, lead-magnet, page-qa | @Sites (publish), @Computer Use (browser check) |
| Growth Analyst | Personas, cadence, results, reports | audience-insights, campaign-report | @Google Drive and Sheets (read), Python in Codex |

Tip: You build every part of this table in Labs 2, 3 and 4.

#### The Tools for This Edition

The ChatGPT Edition: ChatGPT, ChatGPT Work and Codex in one app.

| Tool | What the team uses it for | Labs |
|---|---|---|
| ChatGPT Project | The team's shared files and instructions | Lab 1 |
| Codex | The Lead's chat; role cards; skills; subagents; scripts; the video | Labs 1–12, 14 |
| ChatGPT Work | Plugins (Drive, Gmail), skills, scheduled tasks | Labs 4, 11, 13 |
| @Sites | The campaign landing page; Horizon's website is given as a public link | Lab 11 |
| Dots · workspace agents | Optional demo: an always-on Lead and shared agents | Lab 15 (optional) |

Tip: Every external post, email and video passes one gate: a person approves the exact version.

## Topic 1 — Multi-AI-Agent Content Ideation and Digital Storyboarding

Slides 29–72. In this topic you will:

- Why a team of agents
- A home for the team; Horizon's public website
- Form the team: instructions, skills, connectors
- Campaign 1: research, ideas and a storyboard

### Key ideas for Lab 1

#### Why a Team of Agents?

The Lead runs specialists in parallel, each in its own context, then combines what they return.

- **Faster** — Research, copy and design run at the same time.
- **Focused** — Each agent holds only its own job and its own skills.
- **Specialised** — Its own instructions, tools, connectors and model.
- **Second opinion** — The Lead checks work it did not write.
- **The cost** — More tokens and more to review. Split only work that is truly independent.

#### Get the Tools Ready

Install once; every lab says which tool to open.

- **macOS** — Download for macOS from the page
- **Windows** — Opens the Microsoft Store listing
1. **Download and install** — The new desktop app from chatgpt.com/download, not "ChatGPT Classic".
1. **Sign in** — On the plan you will use in class — limits follow the account.
1. **Find Chat, Work and Codex** — The toggle above the composer; Codex in the sidebar.
1. **Node.js 22, Python 3, ffmpeg** — For the publisher kit and the video (Pillow for Python).
1. **A personal Google account** — For Drive and Gmail — never an employer's.

Note: Work, Codex and Sites need a paid plan.

#### A Home for the Team

Before you hire agents, give them shared rules, shared facts and a website to point to.

- **A Project + AGENTS.md** — Project files and instructions in ChatGPT; the charter in AGENTS.md for Codex.
- **data/** — The facts sheet, brand, compliance checklist and business brief — the only sources agents may use.
- **Horizon's public website** — Given, not built: each learner opens their own local copy; the public copy is on GitHub Pages.

### Lab 1 — Build Your Marketing Agent Team

**The story so far:** October 2026. Rachel has a website and a goal: 40 booked chats a month by March. She has no marketing team. Before you hire one made of agents, give it a home — shared rules, shared facts — and open your own copy of Horizon's website.

**Goal:** Before anyone builds a team, the team needs a home: one folder of shared facts and rules, your own copy of Horizon's website to work on, and the one public link every post points to.

**You'll build:** the Horizon Marketing project, horizon-studio/ with AGENTS.md, and the public site link in the charter

**Horizon's website**

- **Public site (the link in every post):** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

**Folder structure**

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

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** ChatGPT Project → Codex  ·  **Time:** 30 min  ·  **Slides:** 33–38

**Lab folder:** labs_chatgpt/lab-01-studio-and-website/ — assets: horizon-site.html, team-charter.md, business-brief.md, brand.md, facts-2026.md, compliance-checklist.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-1

**Step-by-step**

1. **Choose the folder** — In Codex create a local project and choose labs_chatgpt/horizon-studio. It is ready-made — do not create one.
1. **Make the Project** — In ChatGPT create the Project "Horizon Marketing" with the charter, brand, facts and compliance files. Copy and paste Prompt A as its instructions.
1. **Plan your team** — In Codex, copy and paste Prompt B. Answer as Horizon's owner and pick your team — keep the six charter roles. It is a plan only: Lab 2 builds the agents.
1. **Write the charter** — After Codex saves data/team-design.md, copy and paste Prompt C. Open AGENTS.md — every agent reads it.
1. **Open the website** — Ask: "Open web/site/index.html in my web browser." This is your own copy of Horizon's website; the public site never changes. Check the calculator shows S$693,138.

**PROMPT A — ChatGPT Project: instructions**

> You support Horizon Wealth Planning's AI marketing team. Use the project files: team-charter.md for who does what, brand.md for the voice and look, facts-2026.md for every number, and compliance-checklist.md before anything is shown to a person. Never publish or send anything.

**PROMPT B — Codex: plan your team**

> Act as a marketing consultant. Interview me, the owner of Horizon Wealth Planning, to plan my AI marketing team. Ask one question at a time and wait for my answer: my goal, what success looks like by March 2027, who we want to reach, which channels we use, how much we publish each week, and who approves before anything goes out. Then list 8 to 10 team members I could have, numbered, each with a one-line job. Include the six roles in data/team-charter.md and mark the ones you recommend. Wait for me to choose. Save my answers and my chosen team, with each member's job, to data/team-design.md. This is a plan only: do not create any agent files yet.

**PROMPT C — Codex: the charter**

> Read data/team-charter.md, data/team-design.md and data/business-brief.md. Write AGENTS.md for this studio in four sections — What this is, The team, Rules, Files — under 60 lines. The team is the one I chose in data/team-design.md. Rules: every number comes from data/facts-2026.md; every piece passes fact-check and fin-compliance; nothing is published or sent without a person's approval (the one exception: a review email to the approver); anything shown to me is in plain English for a business owner, with no codes, IDs, file names or line numbers. In Files, add two lines:
> - Our copy of the site, which we edit and preview:
>   web/site/index.html
> - Public site, the link every post points to (it never changes): https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/

**Check your work**

- ☐  The Horizon Marketing project holds the four files and the instructions.
- ☐  data/team-design.md holds your answers and the team you chose, with the six charter roles in it — and no agent files yet.
- ☐  AGENTS.md has the four sections and is under 60 lines.
- ☐  Its rules name the facts sheet, the two checks and the human approval.
- ☐  AGENTS.md names your copy of the site and the public link every post points to.
- ☐  Your own copy of the website opens in your browser; the calculator shows S$693,138.

**If it goes wrong**

- **The website does not open** — In your horizon-studio folder, open web/site and double-click index.html.
- **It created agent files already** — Not yet — say "Move everything in agents/ to _archive/. We build the team in Lab 2." The plan in data/team-design.md is all Lab 1 needs.

**Stretch**

- Ask: "Read web/site/index.html. In five bullets: who it is for, the offer, the main call to action, what the calculator does, and the disclaimer."
- Ask for a one-paragraph summary of the site from the point of view of a busy 35-year-old parent.

Why it matters: Shared context first, agents second. Every agent you add later starts from these files, so a wrong rule here is wrong everywhere.

### Key ideas for Lab 2

#### Anatomy of an Agent

A role card in agents/. AGENTS.md tells Codex to use one subagent per role, each following its card.

**agents/content-creator.md**

```
# Content Creator — role card
You are Horizon Wealth Planning's Content Creator.
## What you read   the brief, facts-2026.md, brand.md
## What you deliver   content files, ready for review
## Skills   sunny-voice, copywriting, channel-formats,
           linkedin-post, facebook-post, blog-post, newsletter
## Plugins   @Google Drive (docs), @Gmail (drafts only)
## Never   add a number not on the facts sheet; send;
           approve or publish for real
## Report back   what, where, anything unverified

# AGENTS.md — The marketing team
When I ask for the team, use subagents — one per
role — each following its card in agents/.
```

#### Good Agent Instructions

Five parts, every time. The "Never" part matters most in a regulated firm.

- **The job** — One sentence: what this agent is for. The card name is how you ask for it.
- **Reads and delivers** — Which files it may use; what it hands back, and where.
- **Never** — Its hard limits: no invented figures, no sending, no publishing, no approving.
- **Report back** — Three lines: what, where, anything unverified — so the Lead can combine results.

### Lab 2 — Form the Team: Instructions for Each Agent

**The story so far:** Rachel sketches the team on a whiteboard: a Lead and five specialists. Each needs a clear job, and a clear line it must never cross — this is a regulated firm.

**Goal:** A team is a set of clear jobs. Write each agent's instructions once — its job, what it reads, what it delivers and what it must never do — and every campaign can call on it.

**You'll build:** agents/: five role cards, and the roster in AGENTS.md

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (role cards, subagents)  ·  **Time:** 45 min  ·  **Slides:** 41–46

**Lab folder:** labs_chatgpt/lab-02-agent-instructions/ — assets: role-specs.md, team-org-chart.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-2

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 2". Run all of this lab's prompts in it.
1. **Read the roles** — Open role-specs.md: one Lead and five specialists, each with a job, skills, connectors and limits.
1. **Write the instructions** — Copy and paste Prompt A. It builds the five specialists from the charter; extra ideas stay in team-design.md.
1. **See the team** — After the five files appear in agents/, copy and paste Prompt B. The Lead is not a file — it is you, in this session.
1. **Read one closely** — Open agents/content-creator.md. Is the "Never" section strict enough for a regulated firm?
1. **Meet the team** — After the list shows five agents, copy and paste Prompt C. Each agent introduces itself in one line — in its own context.
1. **Tighten one** — Change one instruction you disagree with and save it. It is your team.

**PROMPT A — Codex: five role cards**

> Read data/role-specs.md. Create five role cards in agents/ — growth-strategist.md, content-creator.md, creative-designer.md, website-designer.md and growth-analyst.md. Each has: the job, what it reads, what it delivers, the plugins it may use, what it must never do, and how it reports back. Then add "## The marketing team" to AGENTS.md: one line per agent pointing to its card, and the rule "when I ask for the team, use subagents — one per role — each following its card".

**PROMPT B — Codex: see the team**

> List the role cards in agents/. For each, show the file name, the role and its one-line job, in a table. Then confirm there are five, and that AGENTS.md lists all five under "## The marketing team". If any other card is there, list it and ask me before moving it to _archive/.

**PROMPT C — Codex: meet the team**

> Use subagents — one per role, each following its card in agents/. Ask each: "In one line, who are you, and what is the first thing you would do for Horizon's goal of 40 booked chats a month?" Show me the five answers in a table.

**Check your work**

- ☐  Five files exist in agents/, one per specialist.
- ☐  Each card has job, reads, delivers, plugins, never and report sections.
- ☐  AGENTS.md lists the team and the subagent rule.
- ☐  Five agents answered, each in its own context.
- ☐  Every agent has a "never" rule that blocks publishing.
- ☐  You changed one instruction and can say why.

**If it goes wrong**

- **Codex answered alone** — Ask directly: "use subagents — one per role".

**Stretch**

- Add a sixth agent, community-manager, that drafts replies to comments — and decide what it must never do.

Why it matters: Clear jobs beat clever prompts. An agent that knows what it must never do is safer than one that is merely told to be careful.

### Key ideas for Lab 3

#### Twenty Skills, Owned by Role

Instructions say who an agent is; skills say how it does the job.

| Agent | Skills |
|---|---|
| Team Lead | fact-check, fin-compliance |
| Growth Strategist | competitor-scan, campaign-brief, content-marketing |
| Content Creator | sunny-voice, copywriting, channel-formats, linkedin-post, facebook-post, blog-post, newsletter |
| Creative Designer | brand-visuals, video-render |
| Website Designer | web-design, landing-page, lead-magnet, page-qa |
| Growth Analyst | audience-insights, campaign-report |

Tip: Master copies in skills/; .agents/skills/ for Codex; @skill-creator for ChatGPT.

#### Anatomy of a Skill

Frontmatter (the trigger), then short steps. Free until it is needed.

**.agents/skills/campaign-brief/SKILL.md**

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

**You'll build:** twenty skills in .agents/skills/, wired to the agents that own them

**USE: CODEX, THEN CHATGPT** — start in Codex; the step that moves you to ChatGPT says so

**Surface:** Codex ($skill-creator) → ChatGPT (@skill-creator)  ·  **Time:** 50 min  ·  **Slides:** 49–54

**Lab folder:** labs_chatgpt/lab-03-agent-skills/ — assets: skills-spec.md, channel-formats.md, brand.md, facts-2026.md, compliance-checklist.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-3

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 3". Run all of this lab's prompts in it.
1. **Read the spec** — skills-spec.md lists the twenty skills and who owns each.
1. **Create the skills** — Copy and paste Prompt A.
1. **Wire them up** — After the twenty skills appear in .agents/skills/, copy and paste Prompt B, then C to list every skill. The Lead's two go in AGENTS.md, not a file.
1. **Test without naming** — In a new session ask: "Write a Facebook post about the free Money Check-up Checklist." Ask which skills were used.
1. **Break it on purpose** — Ask for a post that says "guaranteed 8% a year". fin-compliance must flag it as Critical.
1. **Share with ChatGPT** — Use @skill-creator in ChatGPT to add sunny-voice, channel-formats and fin-compliance there too.

**PROMPT A — Codex: twenty skills**

> $skill-creator Read data/skills-spec.md and create the twenty skills in .agents/skills/<name>/ SKILL.md. Each has a name, a description that starts "Use when…" and short numbered steps, under 80 lines. Use data/brand.md, data/channel-formats.md, data/facts-2026.md and data/compliance-checklist.md as the sources — do not invent rules.

**PROMPT B — Codex: wire them up**

> Add a "Skills" line to each role card in agents/ with its skills from data/skills-spec.md. Add to AGENTS.md that the Lead (this chat) runs fact-check and fin-compliance on everything before showing it to me.

**PROMPT C — Codex: see the skills**

> List the skills in .agents/skills/. Show each skill, its owner (a role card, or the Lead) and its "Use when" line in a table. Confirm there are twenty, that each specialist has the skills the spec gives it, and that fact-check and fin-compliance belong to the Lead (this chat).

**Check your work**

- ☐  Twenty folders in .agents/skills/, each with a SKILL.md.
- ☐  Every description starts "Use when…".
- ☐  Each specialist lists its own skills from the spec.
- ☐  The untold test picked sunny-voice and facebook-post.
- ☐  fin-compliance flagged "guaranteed 8%" as Critical.
- ☐  Three skills also appear in ChatGPT Skills.

**If it goes wrong**

- **A skill never triggers** — Rewrite its description with the words a person would actually type.
- **I cannot see the skills** — Paste Prompt C, or .agents/ is a hidden folder — in Finder press Cmd+Shift+. (Windows: View → Hidden items).

**Stretch**

- Add one more skill, utm-links, owned by the Content Creator.

Why it matters: A skill costs almost nothing until it is needed. Keep the rules file (AGENTS.md) short and put procedures in skills.

### Key ideas for Lab 4

#### Plugins for Each Agent

Install once in Plugins; call them with @. Sites and $imagegen are built in.

| Agent | May use | Limit |
|---|---|---|
| Team Lead | @Google Drive (read), @Gmail (drafts only) | reads; drafts only |
| Growth Strategist | web search, @Google Drive (read) | cite every source |
| Content Creator | @Google Drive (docs), @Gmail (drafts only) | Gmail: drafts only |
| Creative Designer | $imagegen, ffmpeg in Codex | no fake "clients" |
| Website Designer | @Sites (publish), @Computer Use (browser check) | publish after approval |
| Growth Analyst | @Google Drive and Sheets (read), Python in Codex | no personal data |

Tip: Use your personal Google account — never an employer's.

#### Least Privilege

A regulated firm gives each agent only what its job needs.

- **Ask of each connector** — Does this agent's job need it? If not, it does not get it.
- **Drafts, not sends** — Email is drafted, posts are files, pages wait — a person sends and publishes.
- **Write it down** — Each agent's instructions name its connectors and limits; its card lists only the plugins it may call.

### Lab 4 — Install the Plugins Each Agent Needs

**The story so far:** The analyst cannot read the data, the designer has no design tool and the creator cannot draft an email. Connect each agent to what its job needs — and nothing more.

**Goal:** An agent can only do the job if it can reach the tools — and a regulated firm only lets each agent reach the tools its job needs. Connect them, then test each one.

**You'll build:** every specialist tested on its own connector, with its limits written into its instructions

**USE: CHATGPT, THEN CODEX** — start in ChatGPT; the step that moves you to Codex says so

**Surface:** ChatGPT plugins → Codex  ·  **Time:** 45 min  ·  **Slides:** 57–61

**Lab folder:** labs_chatgpt/lab-04-agent-connectors/ — assets: connectors-setup.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-4

**Step-by-step**

1. **New session** — Start a new chat in the Horizon Marketing project and name it "Lab 4". Run all of this lab's prompts in it.
1. **Install the plugins** — Plugins: Google Drive, Gmail and Computer Use. Sites and $imagegen are built in.
1. **Use your own account** — Connect your personal Google account — never an employer's.
1. **Put the data on Drive** — Upload data/ to a Drive folder named Horizon Studio.
1. **Test each agent** — Copy and paste Prompt A — one small job per agent, each on its own plugin.
1. **Write the limits** — After the new session opens, copy and paste Prompt B.

**PROMPT A — Codex: test each agent**

> Use subagents, one per check, each following its role card:
> 1. growth-strategist: web search — one 2026 news item about financial planning in Singapore, cited.
> 2. growth-analyst: @Google Drive — read firm-metrics.csv from Horizon Studio; report average monthly enquiries.
> 3. content-creator: @Gmail — a DRAFT to me with the subject "Connector test". Do not send.
> 4. creative-designer: $imagegen — a 1080x1080 test image in Horizon colours.
> 5. website-designer: @Computer Use — open our own copy of the site (web/site/index.html) at mobile width and report any problem. Report each result in one line.

**PROMPT B — Codex: least privilege**

> Update the "Plugins" section of each role card in agents/ to match data/connectors-setup.md: what it may use, and that @Gmail is drafts-only. Remove any plugin a role does not need.

**Check your work**

- ☐  The three plugins are installed and connected.
- ☐  Five checks ran, each by its own agent.
- ☐  The Gmail test is a draft in your inbox — nothing was sent.
- ☐  The analyst read the CSV from Drive, not from the local folder.
- ☐  Each agent's tools line names only the connectors its job needs.

**If it goes wrong**

- **Insufficient scope** — Reconnect and grant read access to the Horizon Studio folder.

**Stretch**

- Add @Google Calendar to the Lead only, for review deadlines.

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

**You'll build:** competitor research, the funnel, nine scored ideas, the campaign brief and a five-beat storyboard with three channel variants — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (subagents in parallel)  ·  **Time:** 50 min  ·  **Slides:** 65–71

**Lab folder:** labs_chatgpt/lab-05-campaign-1-research-to-storyboard/ — assets: campaign-objective.md, idea-rubric.md, storyboard-template.md, firm-metrics.csv, services.csv

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-5

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 5". Run all of this lab's prompts in it.
1. **Brief the Lead** — The briefs are already in data/. You are the client; your session is the Marketing Team Lead.
1. **Research in parallel** — Copy and paste Prompt A. Watch the strategist and the analyst run at the same time.
1. **Read the ideas** — Nine ideas, scored with the rubric. The Lead stops for you.
1. **Choose** — Pick one idea and note its number and why — the human concept checkpoint.
1. **Storyboard** — After you have chosen, copy and paste Prompt B in the chat, replacing <number> and <one line> with your choice.
1. **Decide as Rachel** — After you have read the issues, copy and paste Prompt C. You confirm what is true about Horizon; the team removes or fixes the rest.

**PROMPT A — Codex: research and ideas**

> Act as the Marketing Team Lead for the campaign in data/campaign-objective.md. Use subagents, in parallel:
> - growth-strategist: competitor-scan → save research/competitive-analysis.md.
> - growth-analyst: the funnel in data/firm-metrics.csv — what 40 chats a month needs → save research/funnel.md. When both finish, the growth-strategist proposes three ideas each for young professionals, mid-career families and pre-retirees, scored with data/idea-rubric.md and tagged with a funnel stage (content-marketing) → strategy/ideas.md. Show me the top five and stop — I will choose. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — Codex: the storyboard**

> I choose idea <number>, because <one line>. Use subagents:
> - growth-strategist: campaign-brief → strategy/campaign-brief.md, then a five-beat storyboard with data/storyboard-template.md → strategy/storyboard.md.
> - content-creator: three channel variants that keep the same claims — LinkedIn, Facebook, a 60-second video. Then run fact-check and fin-compliance yourself and show me the issues before anything is final. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT C — Codex: decide on the issues**

> I confirm "no obligation" and the free checklist — add them to the facts sheet (data/facts-2026.md). Delete any other claim that is not on the facts sheet. Fix all the Medium and Low issues, then show me the updated storyboard. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- **After Prompt A:** "Explain this result in three sentences. Which idea would you pick, and why?"
- "Why does idea <number> score higher than idea <number>?"
- "What does the funnel say is our biggest problem?"
- **After Prompt B:** "Explain the issues in plain English. What do I need to decide?"
- **After Prompt C:** "What changed since the last version? Is anything still not ready for Rachel?"

**Check your work**

- ☐  The strategist and the analyst ran in parallel.
- ☐  The competitor analysis and the funnel are done, with sources.
- ☐  Nine scored ideas, each with its author.
- ☐  You chose the idea and recorded why.
- ☐  The storyboard has five beats; every claim has a source.
- ☐  You confirmed two claims; after Prompt C no High issue is left.

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

Slides 73–95. In this topic you will:

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

**You'll build:** three evidence-based personas and the content spec — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (analyst subagents)  ·  **Time:** 40 min  ·  **Slides:** 76–81

**Lab folder:** labs_chatgpt/lab-06-personas-from-evidence/ — assets: survey-responses.csv, enquiries.csv, checklist-results.csv, persona-template.md, content-spec-template.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-6

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 6". Run all of this lab's prompts in it.
1. **Check the data** — The CSVs and templates are already in data/. Open one and skim it.
1. **Analyse in parallel** — Copy and paste Prompt A — three analyst sub-agents, one per file.
1. **Challenge a claim** — Pick one persona statement and ask: "which rows show that?"
1. **Write the guides** — After the personas are written, copy and paste Prompt B: a writing guide for each persona — how to talk to them.
1. **Check the gaps** — The 60+ group must be LOW CONFIDENCE.

**PROMPT A — Codex: three analysts**

> Use three growth-analyst subagents in parallel, one per file: data/survey-responses.csv, data/enquiries.csv, data/checklist-results.csv. Each uses audience-insights: counts with code, n and the file on every claim, INFERENCE and LOW CONFIDENCE labels, enquiry quotes verbatim with ids. Combine the results into three personas with data/persona-template.md → strategy/personas.md. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — Codex: requirements**

> Use the growth-strategist and the content-creator subagents to write a writing guide for each persona (data/content-spec-template.md → strategy/content-spec.md): what they most want to know, where to reach them, what to make and how long, the tone, the proof that convinces them, what we ask them to do next, and what we never say. Back each answer with the data: which file, and how many people. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Explain these personas in three sentences. Which one should we target first, and why?"
- "Which survey answers show that <a sentence from a persona>?"
- "Why is the 60+ group marked low confidence?"

**Check your work**

- ☐  Three analyst sub-agents ran, one per file.
- ☐  Every persona statement carries a count and a file.
- ☐  The 60+ group is LOW CONFIDENCE (n = 12).
- ☐  The most-unticked checklist item is the retirement number.
- ☐  Enquiry quotes are verbatim, with ids.
- ☐  The writing guide answers every question for every persona.

**If it goes wrong**

- **Numbers change between runs** — Insist on counting with code and showing the printed output.

**Stretch**

- Ask the analyst for a filterable dashboard of the survey as a Site.

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

**You'll build:** how often to post on each channel, and a four-week calendar — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (subagents)  ·  **Time:** 35 min  ·  **Slides:** 83–88

**Lab folder:** labs_chatgpt/lab-07-cadence-and-calendar/ — assets: channel-benchmarks.csv, team-capacity.md, calendar-format.csv

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-7

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 7". Run all of this lab's prompts in it.
1. **Check the data** — The assets are already in data/. Open one and skim it.
1. **Find the sweet spot** — Copy and paste Prompt A.
1. **Question it** — Why is the newsletter not weekly? The answer is in the unsubscribes.
1. **Plan four weeks** — After the analyst recommends a cadence, copy and paste Prompt B.
1. **Check the buffers** — Every review date is two business days ahead; nothing on a holiday.

**PROMPT A — Codex: the analyst**

> Use the growth-analyst subagent. From data/channel-benchmarks.csv and data/team-capacity.md, recommend how often to publish on LinkedIn, Facebook, the newsletter and YouTube. Compare the extra clicks from one more post, the unfollows or unsubscribes it costs, and the hours → strategy/cadence.md. Show the numbers. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — Codex: the strategist**

> Use the growth-strategist subagent to build a four-week calendar from Monday 2 November 2026 in strategy/calendar.csv (columns as data/calendar-format.csv), from the cadence, strategy/storyboard.md and strategy/content-spec.md. review_by two business days before each date; no public holidays; no week over the team's hours. Show a week-by-week summary with hours. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Why is the newsletter not weekly? Show me the numbers."
- "What happens if we add a third LinkedIn post a week?"
- "Which week is busiest, and does the team have the hours?"

**Check your work**

- ☐  The cadence gives a frequency per channel with the evidence.
- ☐  A third LinkedIn post a week costs far more unfollows than it earns.
- ☐  It explains the unsubscribe jump at weekly emails.
- ☐  The calendar covers four weeks in the required columns.
- ☐  Every review_by date is two business days before publishing.
- ☐  No week is over 12 hours.

**If it goes wrong**

- **Dates fall on weekends** — Say: "publish Monday to Saturday; the newsletter is Sunday 8am only".

**Stretch**

- Have the Lead add the review deadlines to a calendar you create for class.

Why it matters: Frequency is a capacity decision as much as an audience one. A calendar the team cannot deliver is fiction.

### Key ideas for Lab 8

#### From Storyboard to Content

Lab 8: the first real piece — a blog article every post can link to.

- **ChatGPT, not Codex** — One person making one piece: ChatGPT is enough.
- **General help, your rules** — Web search and drafting, steered by your skills.
- **Your skills know Horizon** — blog-post, sunny-voice, fact-check and fin-compliance.

### Lab 8 — Content Creator: A Quick Blog Article

**The story so far:** Jun Wei has the storyboard and the personas. Rachel wants the first real piece today: a blog article that people searching for CPF top-ups will find — and that every post can link to.

**Goal:** The storyboard is the plan; now make the first piece, fast. A blog article is the hub every post, email and video links to — and one prompt can take it from research to a checked post.

**You'll build:** a 500-700-word blog article with dated sources, checked and fixed, with a Word copy

**USE: CHATGPT** — the ChatGPT desktop app

**Surface:** ChatGPT (web search, your Horizon skills)  ·  **Time:** 40 min  ·  **Slides:** 90–94

**Lab folder:** labs_chatgpt/lab-08-blog-article/ — assets: facts-2026.md, brand.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-8

**Step-by-step**

1. **New session** — Start a new chat in the Horizon Marketing project and name it "Lab 8". Run all of this lab's prompts in it.
1. **Bring the skills** — Use @skill-creator to add blog-post and fact-check to ChatGPT (sunny-voice and fin-compliance came in Lab 3).
1. **Write it** — Copy and paste the prompt. ChatGPT researches, writes, checks and fixes the article.
1. **Read it** — Read the article and the list of fixes. Say what to change, if anything.

**PROMPT — ChatGPT: a quick blog**

> Write a quick blog article for Horizon with the blog-post, sunny-voice, fact-check and fin-compliance skills.
> 1. Pick one topic from strategy/storyboard.md (upload it) that a Singaporean would search for. Search the web for two current sources (CPF Board, MAS or MoneySense), each with its date.
> 2. Write 500-700 words: a title under 60 characters, every figure from facts-2026.md, one call to action (book a free 30-minute chat) and the full disclaimer.
> 3. Run fact-check and fin-compliance; fix every issue and list each fix in one line. Write for a business owner, in plain English. Save a Word copy (.docx) of the article.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Summarise the article in three sentences. Who is it for?"
- "Why did you pick this topic, and who will search for it?"
- "What did the checks find, and how did you fix it?"

**Check your work**

- ☐  Two sources, each with a date and a link.
- ☐  The title is under 60 characters.
- ☐  Every figure is from Horizon's 2026 facts.
- ☐  The fixes are listed; no Critical or High issue is left.
- ☐  One call to action and the full disclaimer at the end.

**If it goes wrong**

- **No sources with dates** — Say: "only sources that show a date; otherwise say UNKNOWN".

**Stretch**

- Ask for two LinkedIn posts and one Facebook post that link to the article, with linkedin-post and facebook-post.

Why it matters: One prompt can run the whole job — research, writing and checks. A person still reads the result before it goes anywhere.

### Topic 2 recap

#### Day 1: The Team Is Ready

Everything the campaigns need tomorrow is in place.

1. **Home** — Shared rules and facts; Horizon's public website (Lab 1).
1. **Team** — Six agents: instructions, skills, connectors (Labs 2–4).
1. **Campaign 1** — Research, ideas and a storyboard (Lab 5).
1. **Audience** — Personas and requirements from evidence (Lab 6).
1. **Plan** — Cadence and a four-week calendar (Lab 7).
1. **Content** — The first blog article, checked (Lab 8).

## Topic 3 — Multi-Channel Content Creation and Agent Workflow Coordination

Slides 96–132. In this topic you will:

- Subagents and the Lead's review
- The lead magnet: a checklist people want, and its emails
- Human in the loop — enforced, not requested
- Campaigns 2–4: social week, newsletter + landing page, video
- From approval to LinkedIn, Facebook, email and YouTube

### Key ideas for Lab 9

#### Content That Earns a Sign-up

Lab 9: the Money Check-up Checklist and the emails that follow it.

1. **Promise** — One problem, one promise: know where you stand in 10 minutes.
1. **Design** — ChatGPT: a printable page and a PDF.
1. **Opt-in** — A required PDPA consent box; the newsletter opt-in separate.
1. **Welcome emails** — Day 0, day 3, day 7 — value first, then a free chat.
1. **Measure** — Downloads, then chats booked.

Tip: Lab 11 builds the landing page that offers it.

### Lab 9 — The Lead Magnet: a Checklist and Its Welcome Emails

**The story so far:** Day 2. Before the campaign weeks start, Rachel wants the thing that turns readers into leads: the Money Check-up Checklist, designed to be downloaded, and the emails that follow it.

**Goal:** The Money Check-up Checklist is what turns a reader into a lead. Make it worth downloading — a branded checklist — and write the welcome emails that follow the download.

**You'll build:** the Money Check-up Checklist as a printable A4 PDF and three welcome emails — with a Word copy of each

**USE: CHATGPT** — the ChatGPT desktop app

**Surface:** ChatGPT (@Gmail drafts, your Horizon skills)  ·  **Time:** 40 min  ·  **Slides:** 98–104

**Lab folder:** labs_chatgpt/lab-09-lead-magnet/ — assets: checklist-items.md, brand.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-9

**Step-by-step**

1. **New session** — Start a new chat in the Horizon Marketing project and name it "Lab 9". Run all of this lab's prompts in it.
1. **Bring the skills** — Use @skill-creator to add lead-magnet and newsletter to ChatGPT.
1. **Design it** — Copy and paste Prompt A. ChatGPT lays out the checklist and gives you a PDF; ask in the chat for any change.
1. **Write the welcome emails** — After the checklist looks right, copy and paste Prompt B. The three emails also appear as drafts in your Gmail.
1. **Check it** — After the three emails are saved, copy and paste Prompt C.

**PROMPT A — ChatGPT: the checklist**

> Use the lead-magnet skill. Turn data/checklist-items.md into the "Money Check-up Checklist": a title with one promise, the ten items as tick boxes, one figure from data/facts-2026.md, the next step (book a free chat) and the full disclaimer. Lay it out as a printable A4 page in the colours and fonts in data/brand.md and give me a PDF to download. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — ChatGPT: the welcome emails**

> Write three welcome emails for people who download the checklist: day 0 (here it is), day 3 (the item most people miss — the retirement number), day 7 (book a free chat). Follow the newsletter and sunny-voice skills → content/email/welcome-sequence.md. Then, using @Gmail, create the three emails as DRAFTS in my Gmail, addressed to me. Send nothing. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT C — ChatGPT: check it**

> Run fact-check and fin-compliance on the checklist text and the three emails. Show the issues in one table, with a fix for each. Once I agree, make the fixes in the files and in the Gmail drafts. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Which checklist item do people most often miss, and why does it matter?"
- "Read the day 3 email as a 55-year-old. Is anything unclear?"
- "Explain each issue in one line: what is wrong, and the fix."

**Check your work**

- ☐  The checklist uses Horizon's colours and all ten items.
- ☐  It makes one promise and ends with the full disclaimer.
- ☐  Three emails, each with a subject under 50 characters, are drafts in your Gmail — nothing was sent.
- ☐  Each email has one call to action, unsubscribe and the disclaimer.
- ☐  fin-compliance shows no Critical or High issue.

**If it goes wrong**

- **No drafts in Gmail** — Check @Gmail is connected (Lab 4), then say "create the Gmail drafts again".
- **No PDF to download** — Say: "give me the checklist as a PDF file to download".

**Stretch**

- Ask for a 1080x1350 social card that promotes the checklist, made with image generation.

Why it matters: A lead magnet earns an email address. Give real value first; the call to action comes last.

### Key ideas for Lab 10

#### Subagents in Codex

No files to wire: ask directly, and Codex runs one subagent per role.

- **Ask directly** — "Use subagents — one per role, each following its card in agents/." Codex delegates when you ask.
- **Watch the panel** — The Subagents panel shows Active and Done. Click one to see its work and summary.
- **They inherit your limits** — Subagents run with your sandbox and permissions — keep workspace-write.

#### Parallel, Then Review

Subagents report back to the Lead; the Lead sends fixes back.

1. **Plan** — The Lead reads the brief and splits the work.
1. **Parallel** — Creator and Designer work at the same time.
1. **Combine** — The Lead pairs each post with its image.
1. **Review** — fact-check and fin-compliance; fixes go back to the right subagent.
1. **Submit** — Passed pieces wait in approvals.csv for a person.

Tip: Subagents talk to the Lead, not to each other. The Lead's review is what makes parallel work safe.

#### Human in the Loop, Enforced

A rule in a prompt persuades. The publisher kit builds a gate that holds.

- **Only people approve** — approve.mjs refuses to run without an interactive terminal — an agent's tool call cannot approve.
- **The approved words go out** — The approval stores a hash. Edit one word and publish --live refuses until a person approves again.
- **A hook stops agents** — A PreToolUse hook blocks agents from running approve.mjs or publishing unapproved items — in Codex, you trust it first.

#### The Hook That Holds the Gate

Ask Codex to add it to .codex/hooks.json, then trust it. Exit code 2 blocks the call.

**Ask Codex**

```
Add a PreToolUse hook in .codex/hooks.json that runs
  node scripts/gate-hook.mjs
before every shell command. It must block any
command that runs approve.mjs, and any
publish.mjs --live whose item is not approved and
unchanged. Show me the hook, then ask me to trust it.
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

Lab 10, a demo: one LinkedIn and one Facebook post, each with a visual.

1. **Lead** — Reads the brief and the calendar; assigns the posts.
1. **Content Creator** — Two posts with hooks, UTM links, disclaimers.
1. **Creative Designer** — One image per post, with alt text.
1. **Lead review** — fact-check and fin-compliance; fixes go back.
1. **You** — Approve in your own terminal; dry run, then go.

### Lab 10 — Campaign 2: Social Media Posts (Demo)

**The story so far:** Week 1 of the campaign starts Monday. As a demo, one LinkedIn post and one Facebook post, each with a visual — and Rachel's one rule: nothing goes out unless a person approved that exact version.

**Goal:** A demo of Week 1: one LinkedIn and one Facebook post, each with a visual. Copy and design must agree, the Lead must check every claim — and only a person can approve.

**You'll build:** two posts with images, reviewed, approved by you and posted (or dry-run) — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (subagents) → LinkedIn, Facebook  ·  **Time:** 40 min  ·  **Slides:** 111–116

**Lab folder:** labs_chatgpt/lab-10-campaign-2-social-week/ — assets: social-brief.md, publisher-kit/, publishing-spec.md, approvals-format.csv, connect-accounts.md, env.example, sample-calendar.csv

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-10

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 10". Run all of this lab's prompts in it.
1. **Install the kit** — Copy publisher-kit/scripts into scripts/. Then ask Codex to add a hook that blocks any command running approve.mjs, and trust it.
1. **Test the gate** — Ask Codex to approve anything. approve.mjs refuses without a person at a terminal.
1. **Run the team** — Copy and paste Prompt A. Watch the Subagents panel: Active, then Done.
1. **Read the review** — The Lead's fact-check and fin-compliance table — at least one fix.
1. **Approve as a person** — In your own terminal: node scripts/approve.mjs <id> --by "Your Name".
1. **Publish** — After you have approved the posts, copy and paste Prompt B. Dry run first; --live only if your accounts are connected.

**PROMPT A — Codex: the social team**

> You are the Lead. Plan Week 1 social from data/social-brief.md and strategy/calendar.csv. Use subagents in parallel, each following its card:
> - content-creator: 1 LinkedIn + 1 Facebook post with linkedin-post, facebook-post and copywriting, one file each in content/social/week-01/, with the frontmatter in data/publishing-spec.md.
> - creative-designer: one image per post with $imagegen and alt text, from the brief. Then run fact-check and fin-compliance on every post and send each fix back to the right subagent. When a post passes, run node scripts/submit.mjs on it. Publish nothing. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — Codex: publish**

> For every Week 1 post approved in review/approvals.csv, run node scripts/publish.mjs <id> as a dry run and show me each request. Wait for me to say "go" before any --live run.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Which post do you expect to do best, and why?"
- "What did the Lead send back to the writer, and why?"
- "Is anything here not ready to post? Explain in plain English."

**Check your work**

- ☐  The hook (or approve.mjs) stopped the agent from approving.
- ☐  Two subagents ran in parallel; both reached Done.
- ☐  The Lead sent at least one fix back to a subagent.
- ☐  Two posts with images, alt text, frontmatter and UTM links.
- ☐  You approved in your own terminal; the rows show your name and a hash.
- ☐  Dry runs printed every request; nothing went live unless you said go.

**If it goes wrong**

- **Images contain wrong text** — Ask for text-free artwork and put the words in the post instead.
- **LinkedIn returns 426** — LINKEDIN_VERSION must be a recent YYYYMM.

**Stretch**

- Add the growth-analyst to suggest the best posting time per post from channel-benchmarks.csv.
- Link each LinkedIn post to the Lab 8 blog article.

Why it matters: Parallel subagents are fast; the Lead's review is what makes them safe.

### Key ideas for Lab 11

#### Campaign 3: Newsletter + Landing Page

Lab 11: three specialists, one email and one page, consent first.

1. **Content Creator** — The issue and the landing-page copy.
1. **Website Designer** — The checklist page, page-qa, then Sites.
1. **Growth Analyst** — Recipients by consent: 31 of 40.
1. **Lead** — Checks everything; the build waits for you.
1. **Drafts** — Gmail drafts — one to you to test. Nothing sent.

#### Consent Decides Who Gets Mail

The PDPA, applied by an agent that counts.

- **Opt-in only** — consent = yes and unsubscribed = no. Everyone else goes to excluded.csv with a reason.
- **Every email carries** — An unsubscribe link, Horizon's address and the short disclaimer.
- **The page collects little** — Name, email, a required consent box, a separate unticked newsletter opt-in.

### Lab 11 — Campaign 3: Newsletter and a Landing Page

**The story so far:** The Sunny Sunday email books chats most cheaply. November's issue promotes a new landing page for the free checklist — and must reach only the 31 people who opted in.

**Goal:** The Sunny Sunday email books chats most cheaply — if it is right and reaches only people who said yes. This issue promotes a new landing page for the Money Check-up Checklist.

**You'll build:** the November newsletter, its recipient list, the landing page published, and Gmail drafts — with a Word copy of each

**USE: CODEX, THEN CHATGPT WORK** — start in Codex; the step that moves you to ChatGPT Work says so

**Surface:** Codex (subagents) → @Sites → ChatGPT Work (@Gmail)  ·  **Time:** 45 min  ·  **Slides:** 119–124

**Lab folder:** labs_chatgpt/lab-11-campaign-3-newsletter-and-landing-page/ — assets: newsletter-brief.md, newsletter-spec.md, landing-page-brief.md, site-brief.md, checklist-items.md, subscribers.csv

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-11

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 11". Run all of this lab's prompts in it.
1. **Start the campaign** — Copy and paste Prompt A.
1. **Approve the words** — Read the email and the page copy; approve nl-2026-11 in your own terminal.
1. **Publish the page** — The website designer runs page-qa and publishes web/checklist/ as @Sites.
1. **Check the list** — Only people with consent = yes and unsubscribed = no are on the recipient list.
1. **Create the drafts** — After the page is published and the list checked, copy and paste Prompt B.
1. **Send one test** — Send only the draft addressed to yourself, and read it on your phone.

**PROMPT A — Codex: the newsletter team**

> You are the Lead for the November Sunny Sunday email (data/newsletter-brief.md, data/newsletter-spec.md) and its landing page (data/landing-page-brief.md). Use subagents:
> - content-creator: issue.md (id nl-2026-11) with newsletter, and the landing-page copy.
> - website-designer: web/checklist/index.html with lead-magnet, web-design and landing-page; page-qa.
> - growth-analyst: recipients.csv and excluded.csv from data/subscribers.csv. Check everything, then submit nl-2026-11. After I approve, build newsletter.html and .txt, and deploy web/checklist with @Sites (Only those invited). Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — ChatGPT Work: Gmail drafts**

> Using @Gmail, create a DRAFT of the newsletter in content/newsletter/2026-11/newsletter.html (upload it) for each address in recipients.csv, plus one draft to me only. Send nothing. Report how many drafts and how many people were excluded, and why.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Explain the email in three sentences. What do we want readers to do?"
- "Who was left off the mailing list, and why?"
- "What did the landing-page check look at, and did it pass?"

**Check your work**

- ☐  Three specialists worked on the campaign; the Lead checked all.
- ☐  You approved nl-2026-11 in your own terminal before the build.
- ☐  The landing page passed page-qa and is published.
- ☐  The recipient list holds 31 people; 9 are excluded, with reasons.
- ☐  The email has unsubscribe, address and disclaimer.
- ☐  Drafts only — nothing was sent to the list.

**If it goes wrong**

- **The build started before approval** — Tell the Lead the build waits for review/approvals.csv to say approved.

**Stretch**

- Ask for two subject lines to A/B test, with a reason for each.

Why it matters: Consent decides who gets mail — not the agent and not the deadline. Marketing to people who did not opt in breaks the PDPA.

### Key ideas for Lab 12

#### Campaign 4: The YouTube Explainer

Lab 12: the team writes and designs; you approve twice.

- **Strategist and Creator** — The angle, then 5–7 scenes with words on screen and a description with chapters and an AI disclosure.
- **Creative Designer** — Storyboard, thumbnail, then the render with video-render — ffmpeg, 1920×1080, under 90 s.
- **Upload privately** — Approve the words, then the finished video. It uploads as private; a person makes it public.

### Lab 12 — Campaign 4: The YouTube Explainer

**The story so far:** Pre-retirees say they would rather watch than read. Rachel wants the first 'Money in Plain English' video, uploaded privately until she has watched it.

**Goal:** Pre-retirees would rather watch than read. The team makes "Your CPF retirement sums in 60 seconds" — and it goes up privately until a person has watched it.

**You'll build:** the script, storyboard and thumbnail, the video, and a private YouTube upload (or dry run) — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (subagents, $imagegen, render, upload)  ·  **Time:** 45 min  ·  **Slides:** 126–131

**Lab folder:** labs_chatgpt/lab-12-campaign-4-youtube-explainer/ — assets: youtube-brief.md, video-spec.md, sample-explainer.mp4

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-12

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 12". Run all of this lab's prompts in it.
1. **Script it as a team** — Copy and paste Prompt A.
1. **Approve the script** — Read the scenes, title and description; approve yt-ep01-script in your own terminal.
1. **Render it** — After you approve the script, copy and paste Prompt B. The designer runs video-render.
1. **Approve the video** — Ask the Lead to submit the video, watch ep01.mp4 to the end, then approve yt-ep01.
1. **Upload** — After you approve the video, copy and paste Prompt C. It goes up as private.
1. **Disclose** — In YouTube Studio, answer the altered or synthetic content question before making it public.

**PROMPT A — Codex: the video team**

> You are the Lead for YouTube episode 1 (data/youtube-brief.md). Use subagents:
> growth-strategist (the angle and hook), content-creator (content/video/ep01/scenes.json, 5-7 scenes, and ep01.md with title, tags, description, chapters and the AI disclosure) and creative-designer (a thumbnail with $imagegen, using brand-visuals). Fact-check and fin-compliance the script, then submit it as yt-ep01-script. Publish nothing. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPTS B and C — Codex: render and upload**

> PROMPT B
> Use the creative-designer subagent with video-render on the approved scenes.json → content/video/ep01/ep01.mp4 (data/video-spec.md). Check it with ffprobe. Do not change approved words.

> PROMPT C
> Run node scripts/publish.mjs yt-ep01 as a dry run. If I say "go", run it with --live: it uploads as PRIVATE. Give me the YouTube Studio link.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "Walk me through the video scene by scene, in plain English."
- "Which figure on screen should I double-check, and against what?"
- "What does the AI disclosure say, and why do we need it?"

**Check your work**

- ☐  The strategist, creator and designer each delivered their part.
- ☐  You approved the script, then the finished video.
- ☐  ep01.mp4 is 1920x1080, under 90 seconds, every scene present.
- ☐  Every figure on screen matches Horizon's 2026 facts.
- ☐  The description has chapters, link, disclaimer and AI disclosure.
- ☐  The upload is private (or the dry run printed the request).

**If it goes wrong**

- **The video will not render** — Ask the trainer, or use sample-explainer.mp4 to test the upload.

**Stretch**

- Ask the designer for a 30-second vertical Short from the same scenes.

Why it matters: Approve twice: once for the words, once for the finished video. Rendering can break what the script got right.

### Topic 3 recap

#### Where You Are Now

Three campaigns, every piece checked by the Lead and approved by a person. But the team stops when you close the laptop.

- **Gate  ·  Lab 10** — People approve, hashes hold, a hook stops agents.
- **Campaigns  ·  Labs 10–12** — Social week, newsletter + landing page, the video.
- **What is missing** — A team that works every week on its own — and rules to govern it. That is Topic 4.

## Topic 4 — Content Distribution, Strategy Guidelines and Responsible AI Practices

Slides 133–162. In this topic you will:

- Campaign 5: always on, with a scheduled task
- Responsible AI for financial content
- Measure the patterns; write the team playbook
- Optional demo: a Dot Team Lead and workspace agents

### Key ideas for Lab 13

#### From Skill to Schedule

Lab 13: do the job once, keep it as a skill, let a schedule run it.

1. **Do** — The Growth Analyst writes the weekly report once, from Drive.
1. **Verify** — Fix the sections until the report is right.
1. **Skill** — campaign-report holds the procedure.
1. **Schedule** — A scheduled task runs it every Monday at 8am.
1. **Review** — It leaves a Gmail draft — a person decides.

Tip: Scheduled runs appear in Scheduled; Plus allows 5 active tasks.

#### Automate the Preparation, Not the Decision

What a scheduled agent should and should not do for a regulated firm.

- **Prepare** — Read the data, run the skill, draft the report, flag what needs a decision.
- **Draft, never send** — Write "draft only — never send, publish or approve" in the skill AND the schedule.
- **Keep a human gate** — The schedule fills an inbox. A named person still decides.

### Lab 13 — Campaign 5: Always On — the Weekly Growth Report

**The story so far:** The team must keep working after class. Rachel wants the Growth Analyst's report in her inbox every Monday — as a draft she decides on.

**Goal:** The team should keep working when class ends. Every Monday the Growth Analyst's report lands in Rachel's inbox as a draft — the decision stays with a person.

**You'll build:** a scheduled task that drafts the weekly growth report every Monday at 8am, and one draft in Gmail

**USE: CHATGPT WORK** — ChatGPT Work

**Surface:** ChatGPT Work (skill, scheduled task, @Drive, @Gmail)  ·  **Time:** 35 min  ·  **Slides:** 136–140

**Lab folder:** labs_chatgpt/lab-13-campaign-5-weekly-growth-report/ — assets: campaign-results.csv, weekly-report-brief.md, scheduled-task-instructions.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-13

**Step-by-step**

1. **New session** — Start a new ChatGPT Work chat and name it "Lab 13". Run all of this lab's prompts in it.
1. **Put the data on Drive** — Upload campaign-results.csv to the Horizon Studio folder.
1. **Bring the skill** — Use @skill-creator to add campaign-report to ChatGPT.
1. **Do it once** — Copy and paste Prompt A. Refine the report until it is right.
1. **Schedule it** — After the report is right, copy and paste Prompt B. Runs appear in Scheduled.
1. **Run it now** — Run the task once and open the Gmail draft.
1. **Pause it** — After class, pause the scheduled task.

**PROMPTS A and B — ChatGPT Work**

> PROMPT A
> Act as Horizon's Growth Analyst. Using @Google Drive, read campaign-results.csv in the Horizon Studio folder. Use the campaign-report skill and weekly-report-brief.md. Leave the report as a @Gmail DRAFT to me, subject "Horizon weekly growth report" and today's date. Send nothing.

> PROMPT B
> Do this every Monday at 8am, as a scheduled task. Draft only — never send, publish or approve anything.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "What is the one decision this report asks me to make?"
- "Which channel gets us a chat most cheaply, and how sure are you?"
- "What would you change in next month's budget, and why?"

**Check your work**

- ☐  The campaign-report skill is available in ChatGPT.
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

### Key ideas for Lab 14

#### Responsible AI in the Team

Each risk has a control you built in this course.

| Risk | Control | Where |
|---|---|---|
| Wrong figure | fact-check skill; the Lead's review; facts sheet | Labs 3, 5, 10–12 |
| Read as advice or a promise | fin-compliance; disclaimers; no returns | Labs 3, 10–12 |
| An agent with too much access | Least-privilege connectors per agent | Lab 4 |
| Unapproved post | approve.mjs (people only), hash, hook | Lab 10 |
| Marketing without consent | The Analyst filters by consent | Lab 11 |
| Undisclosed AI media | Description line + YouTube disclosure | Lab 12 |

Tip: Keep keys in .env, client data out of prompts, and the approval records for audit.

#### Measure What Matters

Lab 14: the numbers decide next month — and which patterns earn their tokens.

- **Cost per chat** — Spend ÷ chats booked shows which channel works: email first, YouTube last.
- **Defects before a person** — A Lead that catches mistakes saves the reviewer's time; one agent alone caught none.
- **The playbook** — Roster, instructions, skills, connectors, approval matrix, incidents — so the team runs without you.

### Lab 14 — Measure, Govern and Write the Team Playbook

**The story so far:** Eight weeks in. Rachel asks which ways of running agents earned their tokens, and how the team runs safely after you leave.

**Goal:** Rachel asks: which patterns earned their tokens, and how does the team run safely after you leave? Answer with numbers, then with a playbook a new hire can follow.

**You'll build:** the agent-pattern comparison and the team playbook — with a Word copy of each

**USE: CODEX** — Codex, in your horizon-studio folder

**Surface:** Codex (subagents)  ·  **Time:** 40 min  ·  **Slides:** 143–148

**Lab folder:** labs_chatgpt/lab-14-team-playbook/ — assets: run-log.csv, playbook-outline.md, responsible-ai-checklist.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-14

**Step-by-step**

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 14". Run all of this lab's prompts in it.
1. **Check the data** — The assets are already in data/. Open one and skim it.
1. **Compare the patterns** — Copy and paste Prompt A.
1. **Write the playbook** — After the Lead shows the comparison, copy and paste Prompt B.
1. **Review it as Rachel** — Add one rule of your own and say why.

**PROMPT A — Codex: compare**

> Use the growth-analyst subagent. From data/run-log.csv compare the patterns we used — one agent, subagents, parallel subagents with a Lead review and the scheduled task — on minutes, tokens, defects caught before a person and human edits. Which pattern pays off for which job? Save reports/agent-comparison.md. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**PROMPT B — Codex: the playbook**

> Write strategy/team-playbook.md with data/playbook-outline.md. Include the roster: for each agent its instructions file in agents/, its skills, connectors, model and what it may never do; the approval matrix by risk; the rules in data/responsible-ai-checklist.md; and what to do when a wrong post goes out. Then run fin-compliance on it. Write for a business owner, in plain English: no codes, IDs, file names or line numbers; start with what it means and what I do next. Save a Word copy (.docx) of each result.

**Ask about the result**

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "In one line each: when should we use one agent, subagents and a Lead review?"
- "Who must approve a post that has a CPF figure in it?"
- "A wrong post went out. What are the first three things we do?"

**Check your work**

- ☐  The comparison shows the one-agent baseline caught 0 defects.
- ☐  It says which pattern suits which job, with numbers.
- ☐  The roster lists all six agents with skills and connectors.
- ☐  The approval matrix says who approves CPF and tax figures.
- ☐  It has an incident procedure, and your own rule.

**If it goes wrong**

- **The playbook is generic** — Say: "use our actual agents, files and numbers".

**Stretch**

- Turn the playbook into a skill, team-playbook, for the Lead.

Why it matters: Teams cost more tokens. The run log shows what you buy with them: defects caught before a person, and fewer edits.

### Key ideas for Lab 15

#### Dots: Always-On Agent Coworkers

Announced at OpenAI DevDay, 29 September 2026. A demo, not assessed.

- **What a Dot is** — A persistent agent with its own cloud computer and browser that keeps working after you close the chat.
- **Kept in check** — Background research is read-only. Custom Rules permit, require approval for, or prohibit actions. Activity View shows its work.
- **Who has it** — The first Dot is included on Pro and Business Premium; Enterprise and Edu can try the beta.

#### Workspace Agents

Shared agents for Business, Enterprise and Edu workspaces.

1. **Agents** — Click Agents in the sidebar.
1. **Describe** — Describe the workflow — e.g. the weekly growth report.
1. **Apps** — Add the approved apps it may use.
1. **Trigger** — Choose when it runs — e.g. weekly.
1. **Share** — The whole team uses the same agent.

Tip: Same rule: draft, a person approves, then publish.

### Lab 15 — Optional Demo: a Dot Team Lead and Workspace Agents

**The story so far:** Optional. Rachel asks whether the Lead could work around the clock. The trainer shows a Dot as an always-on Team Lead and a workspace agent on a weekly trigger.

**Goal:** Optional: on the right plans, the Lead can be an always-on Dot and each specialist a shared workspace agent — the same roles, skills and rules, running without you.

**You'll build:** a demo Dot with Custom Rules that block sending, and one workspace agent (Growth Analyst) on a weekly trigger

**USE: CHATGPT** — the ChatGPT desktop app

**Surface:** ChatGPT Dots and workspace agents — trainer demo  ·  **Time:** 20 min  ·  **Slides:** 151–154

**Lab folder:** labs_chatgpt/lab-15-optional-dot-and-workspace-agents/ — assets: dot-and-workspace-agents.md

**Copy the prompts: **https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-15

**Step-by-step**

1. **Check the plan** — Dots: the first one is included on Pro and Business Premium. Workspace agents: Business, Enterprise, Edu.
1. **Make the Dot** — Give it the Team Lead's instructions and only the apps it needs.
1. **Set Custom Rules** — Block sending, deleting and posting; require approval for anything account-affecting.
1. **Give it one job** — Copy and paste the prompt. Watch the work in Activity View.
1. **Build a workspace agent** — Agents in the sidebar → describe the Growth Analyst's weekly report → add apps → choose a trigger.

**PROMPT — the Dot**

> You are Horizon Wealth Planning's Marketing Team Lead. Every Monday, summarise the week's calendar from the Horizon Studio Drive folder, list anything due for review, and draft — never send — a short brief to me. Ask before any action outside reading and drafting.

**Check your work**

- ☐  The Dot has the Lead's instructions and only the apps it needs.
- ☐  Custom Rules block sending and posting.
- ☐  Activity View shows what it did.
- ☐  The workspace agent has apps and a weekly trigger.

**If it goes wrong**

- **No Dot option** — Dots need Pro or Business Premium; watch the trainer demo.

**Stretch**

- @mention the Dot in a ChatGPT Space page about the campaign.

Why it matters: Optional, not assessed. Always-on agents make the human gate more important, not less.

## Course Summary

#### How Each Pattern Is Triggered

Five ways your team runs. The difference is what sets each one off.

- **Subagents (by delegation)** — The Lead starts them when you ask — or when a task matches an agent's description. Example: "use subagents, one per role". Where: agents/ role cards.
- **Lead review (after the work)** — The Lead combines subagent results and sends fixes back before a person sees anything. Example: fact-check fin-compliance. Where: AGENTS.md rule.
- **Skills (on demand)** — Loaded when the task matches the description. Free until then. Example: campaign-brief video-render. Where: .agents/skills/.
- **Hooks (on an event)** — Run every time an event fires — before a tool runs. The model cannot skip them. Example: PreToolUse: gate-hook.mjs. Where: .codex/hooks.json (trusted).
- **Scheduled tasks (on the clock)** — Run a skill on a schedule and leave the result for a person. Example: Mondays 8am: campaign-report. Where: ChatGPT Work.

Who decides?  You: the approval  ·  the model: delegation and skills  ·  the system, every time: hooks and the clock

#### Horizon: One Team, Five Campaigns

Two days, one regulated business — the ChatGPT Edition.

1. **Form** — A Lead and five agents: instructions, skills, connectors.
1. **Plan** — Campaign 1, personas, cadence and a calendar.
1. **Create** — Social week, newsletter + landing page, video.
1. **Govern** — A human gate, least privilege, a playbook.
1. **Run** — The weekly report, on a schedule, as a draft.

## Quick Command Reference

| Command | What it does |
|---|---|
| ChatGPT Project | Shared files and instructions for the team |
| agents/<name>.md | A role card: job, reads, delivers, skills, plugins, never |
| "use subagents — one per role" | Codex runs one subagent per card (Subagents panel) |
| $skill-creator · .agents/skills/ | Create a Codex skill |
| @skill-creator | Create a skill in ChatGPT |
| @Google Drive · @Gmail · @Computer Use | Plugins the agents may call |
| $imagegen | Built-in image generation in Codex |
| @Sites | Publish a page; access Only those invited |
| "every Monday at 8am …" | A scheduled task (runs appear in Scheduled) |
| .codex/hooks.json | Hooks — trust them before they run |
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
