# Labs — Multi AI Agents Workflow for Content Creation

TGS-2023036153 · 14 labs · one firm, one content studio of agents.

## The scenario

Rachel Goh founded Horizon Wealth Planning in 2010. Fifteen years and 1,200
clients later, almost every new client still comes through a referral — and
referrals are slowing. Younger Singaporeans look for money help on LinkedIn,
Facebook, YouTube and in their inbox, and Horizon is invisible there.

In October 2026 Rachel sets a goal: 40 booked free chats a month by
March 2027, without hiring a marketing team. She has three planners, a
part-time marketing executive (Jun Wei), S$4,000 a month — and AI agents.
You are her content studio for the next two days:

  Research  — who to reach, the numbers, the competition   (Cowork sub-agents)
  Build     — the website every post points to             (Codex)
  Plan      — ideas, storyboard, personas, cadence, skills (Cowork)
  Create    — social, newsletter and video teams           (Claude agent teams)
  Run       — always-on agent bots, measured and governed  (Hermes, Cowork)

Every lab starts from what the previous lab produced. Financial content is
regulated, so a person approves every piece before it goes out. The data is
fictitious but internally consistent, and every email address resolves to
your own inbox.

## The labs

| # | Lab | Day | Surface | Time |
|---|---|---|---|---|
| 01 | [A Research Team of Sub-agents](lab-01-research-team-of-subagents/README.md) | 1 | Claude Cowork | 45 min |
| 02 | [Plan and Build the Horizon Website with Codex](lab-02-build-the-website-with-codex/README.md) | 1 | Codex | 45 min |
| 03 | [A Compliance Subagent, Then Publish](lab-03-compliance-subagent-and-publish/README.md) | 1 | Codex → GitHub Pages | 35 min |
| 04 | [Ideation Sub-agents and a Digital Storyboard](lab-04-ideation-and-storyboard/README.md) | 1 | Claude Cowork (sub-agents, Live Artefact) | 40 min |
| 05 | [Audience Research and Personas from Evidence](lab-05-audience-research-and-personas/README.md) | 1 | Claude Cowork (sub-agents) | 40 min |
| 06 | [Content Cadence and the Editorial Calendar](lab-06-cadence-and-editorial-calendar/README.md) | 1 | Claude Cowork | 35 min |
| 07 | [Studio Skills: Voice, Facts, Compliance and Formats](lab-07-studio-skills/README.md) | 1 | Claude Cowork (/skill-creator) → every tool | 40 min |
| 08 | [The Human Approval Gate and the Publishers](lab-08-approval-gate-and-publishers/README.md) | 2 | Codex | 35 min |
| 09 | [The Social Media Agent Team: LinkedIn and Facebook](lab-09-social-media-agent-team/README.md) | 2 | Claude Code (subagents + agent teams) | 45 min |
| 10 | [The Newsletter Agent Team: the Sunny Sunday Email](lab-10-newsletter-agent-team/README.md) | 2 | Claude Code (agent team) → Claude Cowork (Gmail) | 40 min |
| 11 | [The Video Agent Team: Script to YouTube](lab-11-video-agent-team-to-youtube/README.md) | 2 | Claude Code (agent team) → Codex (render, upload) | 40 min |
| 12 | [Hermes Agent Bots on a Kanban Board](lab-12-hermes-agent-bots-on-kanban/README.md) | 2 | Hermes Agent (profiles, Kanban) | 45 min |
| 13 | [Always On: a Telegram Bot That Asks Before It Acts](lab-13-always-on-telegram-bot/README.md) | 2 | Hermes Agent (gateway bot, cron) | 30 min |
| 14 | [Measure, Govern and Write the Playbook](lab-14-measure-govern-playbook/README.md) | 2 | Claude Cowork (sub-agents, Live Artefact) | 40 min |

## Before you start

- Claude desktop app on a Pro plan or above (Claude Cowork, Claude Code) and the Claude Code CLI for agent teams (Labs 9-11).
- ChatGPT desktop app on a plan that includes Codex (Labs 2, 3, 8, 11).
- Hermes Agent with a trainer-issued API key (Labs 12-13).
- Node.js 22, Python 3 with Pillow, ffmpeg, Git and a GitHub account.
- A personal Google account for Gmail; optional LinkedIn, Facebook Page, YouTube and Telegram accounts for live publishing.
- One working folder, `horizon-studio`, from Lab 1 to Lab 14. Copy each lab's `assets/` into `horizon-studio/data/`.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
