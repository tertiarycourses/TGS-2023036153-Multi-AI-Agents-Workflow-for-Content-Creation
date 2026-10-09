# Prompts — Lab 04: Connect the Tools Each Agent Needs

Surface: claude.ai connectors → Claude Code (/mcp). Paste each prompt as written; change only what the lab tells you to.

## PROMPT A — Claude Code: test each agent

```
Run these five checks, each by its own subagent:
1. growth-strategist: web search — one 2026 news
   item about financial planning in Singapore, cited.
2. growth-analyst: Google Drive — read
   firm-metrics.csv from Horizon Studio; report
   average monthly enquiries.
3. content-creator: Gmail — a DRAFT to me with the
   subject "Connector test". Do not send.
4. creative-designer: Canva — list my designs, or
   create a 1080x1080 test design in Horizon colours.
5. website-designer: Playwright — open Horizon's
   public site at 375px wide and report any problem.
Report each result in one line.
```

## PROMPT B — Claude Code: least privilege

```
Update the "Connectors" section of each
subagent in .claude/agents/ to match
data/connectors-setup.md: what it may use, and that
Gmail is drafts-only. Tighten each tools line so no
agent has a tool its job does not need.
```
