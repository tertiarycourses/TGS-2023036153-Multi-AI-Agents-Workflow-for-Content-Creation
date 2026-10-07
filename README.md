# Multi AI Agents Workflow for Content Creation

Build a content studio of AI agents — sub-agents, agent teams and always-on agent bots — that researches, plans, writes, reviews and publishes for one regulated business, with a person approving every piece.

| Course detail | Information |
|---|---|
| Course code | `TGS-2023036153` |
| Programme | WSQ · Content Strategy `ICT-SNM-4004-1.1` |
| Duration | 2 days · 16 hours including a 2-hour assessment |
| Registration | [View course details and register](https://www.tertiarycourses.com.sg/multi-ai-agents-workflow-for-content-creation.html) |
| Funding | Up to 70% course-fee funding for eligible learners. Eligibility and terms apply; check the registration page. |
| Package version | v2.0 · 8 October 2026 |

## The case: Horizon Wealth Planning

One fictitious business runs through every lab: **Horizon Wealth Planning**, an independent financial-planning firm in Singapore ([reference site](https://alfredang.github.io/financial-planning/v2/)). Its founder wants 40 booked free chats a month without hiring a marketing team. Learners build her content studio:

| Stage | Tool | Labs |
|---|---|---|
| Research — market, numbers, competitors, recommendation | Claude Cowork sub-agents | 1 |
| Build — the website every post points to, checked by a compliance subagent | Codex | 2–3 |
| Plan — ideas, storyboard, personas, cadence, shared skills | Claude Cowork | 4–7 |
| Create — social, newsletter and video agent teams behind a human approval gate | Claude Code subagents + agent teams, Codex | 8–11 |
| Run — agent bots on a Kanban board, a Telegram bot, measurement and governance | Hermes Agent, Claude Cowork | 12–14 |

## Learning outcomes

1. Conceptualize content ideas to meet marketing objectives and map out digital storyboards.
2. Identify content requirements from customer preferences and determine the frequency of marketing content.
3. Determine content types and styles and decide on modes and processes for distributing content.
4. Develop guidelines for content strategy execution using appropriate delivery modes and responsible AI practices.

## Topics

1. Multi-AI-Agent Content Ideation and Digital Storyboarding
2. Audience Research and Content Requirement Analysis
3. Multi-Channel Content Creation and Agent Workflow Coordination
4. Content Distribution, Strategy Guidelines and Responsible AI Practices

## Labs

| # | Lab | Tool |
|---|---|---|
| 01 | [A Research Team of Sub-agents](labs/lab-01-research-team-of-subagents/) | Claude Cowork |
| 02 | [Plan and Build the Horizon Website with Codex](labs/lab-02-build-the-website-with-codex/) | Codex |
| 03 | [A Compliance Subagent, Then Publish](labs/lab-03-compliance-subagent-and-publish/) | Codex → GitHub Pages |
| 04 | [Ideation Sub-agents and a Digital Storyboard](labs/lab-04-ideation-and-storyboard/) | Claude Cowork |
| 05 | [Audience Research and Personas from Evidence](labs/lab-05-audience-research-and-personas/) | Claude Cowork |
| 06 | [Content Cadence and the Editorial Calendar](labs/lab-06-cadence-and-editorial-calendar/) | Claude Cowork |
| 07 | [Studio Skills: Voice, Facts, Compliance and Formats](labs/lab-07-studio-skills/) | Claude Cowork → every tool |
| 08 | [The Human Approval Gate and the Publishers](labs/lab-08-approval-gate-and-publishers/) | Codex |
| 09 | [The Social Media Agent Team: LinkedIn and Facebook](labs/lab-09-social-media-agent-team/) | Claude Code agent team |
| 10 | [The Newsletter Agent Team: the Sunny Sunday Email](labs/lab-10-newsletter-agent-team/) | Claude Code → Cowork (Gmail) |
| 11 | [The Video Agent Team: Script to YouTube](labs/lab-11-video-agent-team-to-youtube/) | Claude Code → Codex |
| 12 | [Hermes Agent Bots on a Kanban Board](labs/lab-12-hermes-agent-bots-on-kanban/) | Hermes Agent |
| 13 | [Always On: a Telegram Bot That Asks Before It Acts](labs/lab-13-always-on-telegram-bot/) | Hermes Agent |
| 14 | [Measure, Govern and Write the Playbook](labs/lab-14-measure-govern-playbook/) | Claude Cowork |

Each lab folder has a README, the prompts (Markdown and PDF), the assets it needs, an evidence checklist and, where useful, reference solutions. Full procedures are in the [Learner Guide](courseware/LG-Multi%20AI%20Agents%20Workflow%20for%20Content%20Creation-v2.0.pdf); the [slide deck](courseware/Multi%20AI%20Agents%20Workflow%20for%20Content%20Creation-v2.0.pdf) and [Lesson Plan](courseware/LP-Multi%20AI%20Agents%20Workflow%20for%20Content%20Creation-v2.0.pdf) are alongside.

## Safety by design

Financial content is regulated, so nothing reaches LinkedIn, Facebook, YouTube or an inbox unless a person approved that exact version: `approve.mjs` only runs in a person's own terminal, approvals store a hash of the content, and a Claude Code hook blocks agents from approving or publishing. Every publishing lab also works in dry-run mode. All data is synthetic, and every learner email address resolves to the learner's own inbox.

## Distribution boundary

This public repository contains learner-safe courseware and fictional data. Assessment papers, model answers, references, credentials and private build files are excluded. Candidate papers are distributed through the course LMS-TMS; answer keys remain assessor-only.

Provided by Tertiary Infotech Academy Pte Ltd · UEN 201200696W.
