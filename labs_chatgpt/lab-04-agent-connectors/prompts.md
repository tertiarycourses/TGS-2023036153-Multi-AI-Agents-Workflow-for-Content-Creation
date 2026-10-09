# Prompts — Lab 04: Install the Plugins Each Agent Needs

**Use: ChatGPT, then Codex — start in ChatGPT; the step that moves you to Codex says so.** Paste each prompt as written; change only what the lab tells you to.

**Easiest:** copy each prompt from https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-4 (one Copy button per prompt).

## PROMPT A — Codex: test each agent

```
Use subagents, one per check, each following its
role card:
1. growth-strategist: web search — one 2026 news
   item about financial planning in Singapore, cited.
2. growth-analyst: @Google Drive — read
   firm-metrics.csv from Horizon Studio; report
   average monthly enquiries.
3. content-creator: @Gmail — a DRAFT to me with the
   subject "Connector test". Do not send.
4. creative-designer: $imagegen — a 1080x1080 test
   image in Horizon colours.
5. website-designer: @Computer Use — open Horizon's
   public site at mobile width and report any problem.
Report each result in one line.
```

## PROMPT B — Codex: least privilege

```
Update the "Plugins" section of each role card in
agents/ to match data/connectors-setup.md: what it
may use, and that @Gmail is drafts-only. Remove any
plugin a role does not need.
```
