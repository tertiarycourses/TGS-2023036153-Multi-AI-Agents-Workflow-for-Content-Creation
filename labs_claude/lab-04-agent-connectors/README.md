# Lab 04 — Connect the Tools Each Agent Needs

**Course:** Multi AI Agents Workflow for Content Creation (Claude Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 51–55**\
**Surface:** claude.ai connectors → Claude Code (/mcp)\
**Features:** Google Drive · Gmail (drafts) · Canva · Playwright MCP · least privilege per agent

## The story so far

The analyst cannot read the data, the designer has no design tool and the creator cannot draft an email. Connect each agent to what its job needs — and nothing more.

## Your goal

An agent can only do the job if it can reach the tools — and a regulated firm only lets each agent reach the tools its job needs. Connect them, then test each one.

## You'll build

every specialist tested on its own connector, with its limits written into its instructions

## What is in this folder

- `assets/connectors-setup.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` — what to capture as proof

## Step by step

1. **Connect in claude.ai** — Settings → Connectors: Google Drive, Gmail and Canva. Use your personal account.
2. **Check in Claude Code** — Run /mcp. The claude.ai connectors appear in the list.
3. **Add a browser** — Run: claude mcp add playwright -s project -- npx -y @playwright/mcp@latest
4. **Put the data on Drive** — Upload data/ to a Drive folder named Horizon Studio.
5. **Test each agent** — Paste Prompt A — one small job per agent, each on its own connector.
6. **Write the limits** — Paste Prompt B.

## The prompts

### PROMPT A — Claude Code: test each agent

> Run these five checks, each by its own subagent:
> 1. growth-strategist: web search — one 2026 news
>    item about financial planning in Singapore, cited.
> 2. growth-analyst: Google Drive — read
>    firm-metrics.csv from Horizon Studio; report
>    average monthly enquiries.
> 3. content-creator: Gmail — a DRAFT to me with the
>    subject "Connector test". Do not send.
> 4. creative-designer: Canva — list my designs, or
>    create a 1080x1080 test design in Horizon colours.
> 5. website-designer: Playwright — open Horizon's
>    public site at 375px wide and report any problem.
> Report each result in one line.

### PROMPT B — Claude Code: least privilege

> Update the "Connectors" section of each
> subagent in .claude/agents/ to match
> data/connectors-setup.md: what it may use, and that
> Gmail is drafts-only. Tighten each tools line so no
> agent has a tool its job does not need.

## Check your work

- [ ] /mcp lists Google Drive, Gmail, Canva and Playwright.
- [ ] Five checks ran, each by its own agent.
- [ ] The Gmail test is a draft in your inbox — nothing was sent.
- [ ] The analyst read the CSV from Drive, not from the local folder.
- [ ] Each agent's instructions list only the tools its job needs.

## If it goes wrong

- **Insufficient scope** — Reconnect and grant read access to the Horizon Studio folder.

## Stretch

- Add the Google Calendar connector to the Lead only, for review deadlines.

> **Why it matters:** Least privilege is a design decision, not a setting. Ask of each connector: does this agent's job need it?

## Next

Lab 5 — Campaign 1: Research to Storyboard, with Subagents. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
