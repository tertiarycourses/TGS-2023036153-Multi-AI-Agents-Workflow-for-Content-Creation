# CLAUDE.md — Multi AI Agents Workflow for Content Creation

## What this is

Courseware for the WSQ course **Multi AI Agents Workflow for Content
Creation** (`TGS-2023036153`, TSC ICT-SNM-4004-1.1 Content Strategy),
Tertiary Infotech Academy Pte Ltd (UEN 201200696W). Two days, 16 hours
including a 2-hour assessment (WA 4–5 PM, PP 5–6 PM, Day 2).

The design system, deck engine and build pipeline are those of **Agentic AI
Applications with Codex** (`TGS-2023041081`, v12.4). One business runs
through all labs: **Horizon Wealth Planning**, a fictitious Singapore
financial-planning firm (site: <https://alfredang.github.io/financial-planning/v2/>,
saved in `build/reference_site/`).

Everything learners receive is **generated**. Never hand-edit `courseware/`
or `labs/` — fix the source and rebuild.

## Two editions, one source (v3.0)

`HZ_VARIANT=claude|chatgpt` picks the edition (build/variant.py). Each build
writes its own folders: `courseware_<v>/` (deck, LP, LG + MD),
`labs_<v>/` (13 lab folders), `assessment_<v>/` (private).

```
build/hz_data.py      the business: firm facts, verified 2026 figures, synthetic data
build/team.py         the six agents: jobs, skills (12), connectors, agent files, SKILL.md
build/v3_labs.py      the 13 labs (pick(claude, chatgpt) where tools differ)
build/v3_content.py   the slide sequence + SCHEDULE
build/v3_assets.py    every lab file, the publisher kit, generated solutions
build/deck_render.py  the charcoal/cream/orange engine (+ org, teams layouts)
```

## Commands

```
cd build
for v in claude chatgpt; do
  export HZ_VARIANT=$v
  python3 build_deck.py
  python3 qa_deck.py "$(ls ../courseware_$v/*.pptx)"   # must be 0 issues
  python3 build_docs.py        # asserts lab slots = lab minutes
  python3 build_labs.py
  python3 build_assessment.py
done
```

Then render every page and look (house rule).

## The course (both editions)

Horizon Wealth Planning (fictitious) has a website and no marketing team.
Labs 1-4 form the team — Marketing Team Lead + Growth Strategist, Content
Creator, Creative Designer, Website Designer, Growth Analyst — with
instructions, two skills each (fact-check and fin-compliance for the Lead)
and least-privilege connectors. Labs 5-11 are campaigns: research to
storyboard, personas, cadence, social week, newsletter + landing page,
YouTube explainer, weekly report on a schedule. Lab 12 the playbook; Lab 13
an optional demo (Claude: Hermes; ChatGPT: Dot + workspace agents).

- Claude Edition: subagent files in .claude/agents/ (also used as agent-team
  teammate types), skills in .claude/skills/, claude.ai connectors (/mcp),
  pages as Claude artifacts, scheduled task in Claude.
- ChatGPT Edition: role cards in agents/ + "use subagents — one per role"
  (Codex), skills in .agents/skills/ and @skill-creator, plugins, @Sites,
  scheduled task in ChatGPT Work. Built for Plus/Pro (owner decision 8 Oct
  2026): workspace agents (Business+) and Dots (Pro, Business Premium) are
  demo only.

## Product facts — verified 8 Oct 2026

- **Dots** (OpenAI DevDay, 29 Sep 2026): persistent agents with a cloud
  computer; first Dot included on Pro and Business Premium; background work
  read-only; Custom Rules (permit / require approval / prohibit); Activity
  View; ChatGPT Space replaces Library for Pro, Business, Enterprise.
- **Workspace agents**: Business, Enterprise, Edu only — Agents in the
  sidebar → describe a workflow → add apps → choose a trigger.
- **ChatGPT Work** launched 9 July 2026; plugins bundle apps + skills + app
  templates; scheduled tasks (Plus 5 active, Pro 15).

Re-verify before changing; do not "correct" from memory.

- **Claude Code subagents**: `.claude/agents/<name>.md`, frontmatter `name`,
  `description` (required), `tools`, `model` (`sonnet`, `opus`, `haiku`,
  `fable`, `inherit`), `skills`, `memory`, `effort`… `/agents` on v2.1.198+
  only prints a reminder — create subagents by asking Claude or by writing
  the file. Invoke by description, `@agent-<name>`, or by asking.
- **Agent teams**: experimental, off by default;
  `"env": {"CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"}`. Lead + teammates +
  shared task list + mailbox. Interactive sessions only (not `-p`). Agent
  panel: ↑/↓ select, Enter open, Esc, `x` stops, Ctrl+T task list. A
  teammate can use a subagent definition as its agent type (tools, model,
  body apply; `skills` does not — teammates load project skills). One team
  per session; no nested teams; hooks `TeammateIdle`, `TaskCreated`,
  `TaskCompleted`. Split panes need tmux or iTerm2.
- **Model aliases** (Anthropic API): opus = Opus 5.5, sonnet = Sonnet 5.5,
  haiku = Haiku 5.5, fable = Fable 5.1.
- **Install**: `curl -fsSL https://claude.ai/install.sh | bash`; Windows
  `irm https://claude.ai/install.ps1 | iex`. Needs Pro, Max, Team,
  Enterprise or Console.
- **Claude** (Chat + Cowork merged, per the course owner 8 Oct 2026):
  desktop app, paid plans; works on a folder; connectors (Drive, Gmail,
  Calendar, M365); artifacts; `/skill-creator`; scheduled tasks (an
  Instructions field); runs sub-agents in parallel when asked.
- **Claude Code artifacts** (code.claude.com/docs/en/artifacts): ask
  "publish … as an artifact"; private URL on claude.ai/code/artifact/…;
  share from the page header (people, org, or a public link — on Team and
  Enterprise an Owner must enable external sharing); republish updates the
  same URL as a new version; `/artifacts` lists them, Ctrl+] reopens the
  latest. One self-contained page under a strict CSP: Google Fonts, five
  CDNs (cdnjs, unpkg, Tailwind, jQuery, jsDelivr /npm/), images inline, no
  backend, ≤16 MiB. Needs Pro/Max/Team/Enterprise, a `/login` session
  (not an API key), Anthropic API provider. The viewer is a sandboxed
  frame — the reference site therefore has no frame-buster and no CSP meta
  (build/solutions/docs/index.html; tested in a sandboxed iframe).
- **Pricing** (claude.com/pricing, 8 Oct 2026): Free $0; Pro $17/mo annual,
  $20 monthly; Max from $100/mo (5× or 20×); Team standard $20/$25, premium
  $100/$125; Enterprise $20/seat + API usage; Claude Code in all paid plans.
  API per MTok in/out: Fable 5.1 $10/$50, Opus 5.5 $4/$20, Sonnet 5.5
  $2/$10, Haiku 5.5 from $0.10/$0.50.
- **Permission modes**: default, acceptEdits, plan, auto, bypassPermissions;
  Shift+Tab cycles them.
- **Hermes Agent** (Nous Research, MIT): install
  `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`;
  `hermes setup`, `hermes model`; profiles `hermes profile create <name>
  --description "…"` (alias command per profile; `~/.hermes/profiles/<name>/`);
  Kanban `hermes kanban init | create --assignee --parent --json | watch |
  block | unblock | request-review | request-changes`, `hermes dashboard`;
  states triage → todo → ready → running → blocked/review → done; the
  dispatcher runs inside `hermes gateway start`; cron `hermes cron create |
  list | run | pause | remove`, delivery `telegram`, `local`, …;
  `delegate_task` subagents (default 10 concurrent, depth 1). A Claude
  subscription does not cover Hermes — use an API key.
- **Publishing APIs**: LinkedIn `POST /rest/posts` with `LinkedIn-Version:
  YYYYMM`, `X-Restli-Protocol-Version: 2.0.0`, `w_member_social`; commentary
  uses "little text" (escape reserved characters, not URLs). Facebook Graph
  `POST /<version>/<page-id>/feed` with a Page token (`pages_manage_posts`);
  check the version in Meta's changelog. YouTube resumable upload; unaudited
  API projects' uploads stay private.
- **Singapore figures** (facts sheet, `hz_data.FACTS`): BRS S$110,200, FRS
  S$220,400 (turning 55 in 2026), ERS S$440,800; CPF LIFE from 65; SRS cap
  S$15,300 (citizens/PRs); CPF cash top-up relief S$8,000 + S$8,000;
  relief cap S$80,000. MAS Guidelines on Standards of Conduct for Digital
  Advertising Activities: issued 25 Sep 2025, effective 25 Mar 2026.

## Boundaries

- **Never delete files without asking** (workspace AGENTS.md). Superseded
  versions are *moved* to `courseware/archive/` and `archive/` — both
  git-ignored.
- `assessment/`, `reference/`, `build/` and `.env` are private (git-ignored).
- Anything that writes to the outside world is taught as draft → human
  approval → publish, with a dry run first.
- `assessment/` holds the v2.1 WA (6 SAQ, K1-K6) and PP (4 tasks, A1-A7),
  1 hour each (owner decision, 8 Oct 2026), built by build/build_assessment.py.
  Hermes (Lab 14) is optional and must never be assessed.
- The Drive push script in .claude/skills/gdrive-push uploads question
  papers only; answer keys never leave the repo.
