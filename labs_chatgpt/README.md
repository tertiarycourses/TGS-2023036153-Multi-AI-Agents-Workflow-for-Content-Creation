# Labs — Multi AI Agents Workflow for Content Creation (ChatGPT Edition)

TGS-2023036153 · 13 labs · build an AI marketing team, then run five campaigns with it.

## The scenario

Rachel Goh founded Horizon Wealth Planning in 2010. Fifteen years and 1,200
clients later, almost every new client still comes through a referral — and
referrals are slowing. Younger Singaporeans look for money help on LinkedIn,
Facebook, YouTube and in their inbox, and Horizon is invisible there.

Rachel has a website, three planners, a part-time marketer (Jun Wei) and
S$4,000 a month. She wants 40 booked free chats a month by March 2027
— without hiring a marketing team. So you will build her one, made of AI
agents, with ChatGPT and Codex:

  Marketing Team Lead  — plans, assigns, checks, hands to a person
  Growth Strategist    — research, positioning, briefs, storyboards
  Content Creator      — posts, newsletter, scripts, page copy
  Creative Designer    — images, thumbnails, the video
  Website Designer     — landing pages, published and QA-checked
  Growth Analyst       — personas, cadence, results, weekly report

First you form the team: instructions, skills and connectors for each agent.
Then the team runs five campaigns together. Financial content is regulated,
so a person approves every piece before it goes out. The data is fictitious
but consistent, and every email address resolves to your own inbox.

## The labs

| # | Lab | Day | Surface | Time |
|---|---|---|---|---|
| 01 | [Set Up the Studio and Explore Horizon's Website](lab-01-studio-and-website/README.md) | 1 | ChatGPT Project → Codex | 30 min |
| 02 | [Form the Team: Instructions for Each Agent](lab-02-agent-instructions/README.md) | 1 | Codex (role cards, subagents) | 45 min |
| 03 | [Give Each Agent Its Skills](lab-03-agent-skills/README.md) | 1 | Codex ($skill-creator) → ChatGPT (@skill-creator) | 50 min |
| 04 | [Install the Plugins Each Agent Needs](lab-04-agent-connectors/README.md) | 1 | ChatGPT plugins → Codex | 45 min |
| 05 | [Campaign 1: Research to Storyboard, with Subagents](lab-05-campaign-1-research-to-storyboard/README.md) | 1 | Codex (subagents in parallel) | 50 min |
| 06 | [Growth Analyst: Personas from Evidence](lab-06-personas-from-evidence/README.md) | 1 | Codex (analyst subagents) | 40 min |
| 07 | [Growth Analyst and Strategist: Cadence and Calendar](lab-07-cadence-and-calendar/README.md) | 1 | Codex (subagents) | 35 min |
| 08 | [Campaign 2: A Social Media Week](lab-08-campaign-2-social-week/README.md) | 2 | Codex (subagents) → LinkedIn, Facebook | 50 min |
| 09 | [Campaign 3: Newsletter and a Landing Page](lab-09-campaign-3-newsletter-and-landing-page/README.md) | 2 | Codex (subagents) → @Sites → ChatGPT Work (@Gmail) | 45 min |
| 10 | [Campaign 4: The YouTube Explainer](lab-10-campaign-4-youtube-explainer/README.md) | 2 | Codex (subagents, $imagegen, render, upload) | 45 min |
| 11 | [Campaign 5: Always On — the Weekly Growth Report](lab-11-campaign-5-weekly-growth-report/README.md) | 2 | ChatGPT Work (skill, scheduled task, @Drive, @Gmail) | 35 min |
| 12 | [Measure, Govern and Write the Team Playbook](lab-12-team-playbook/README.md) | 2 | Codex (subagents) | 40 min |
| 13 | [Optional Demo: a Dot Team Lead and Workspace Agents](lab-13-optional-dot-and-workspace-agents/README.md) | 2 | ChatGPT Dots and workspace agents — trainer demo | 25 min |

## Before you start

- The ChatGPT desktop app on Plus or Pro (ChatGPT Work, Codex, plugins, Sites).
- Node.js 22, Python 3 with Pillow, and ffmpeg.
- A personal Google account for Drive and Gmail, and a Canva account; optional LinkedIn, Facebook Page and YouTube accounts for live publishing.
- One working folder, `horizon-studio/`, from Lab 1 to Lab 12 — ready-made in this pack with every lab's data in `data/`. Choose it in Codex (a local project); do not create one.
- Lab 13 is an optional trainer demo.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
