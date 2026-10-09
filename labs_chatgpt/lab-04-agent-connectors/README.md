# Lab 04 — Install the Plugins Each Agent Needs

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 52–56**\
**Surface:** ChatGPT plugins → Codex\
**Features:** @Google Drive · @Gmail (drafts) · @Canva · @Computer Use · $imagegen · @Sites · least privilege per agent

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

1. **Install the plugins** — Plugins: Google Drive, Gmail, Canva and Computer Use. Sites and $imagegen are built in.
2. **Use your own account** — Connect your personal Google account — never an employer's.
3. **Put the data on Drive** — Upload data/ to a Drive folder named Horizon Studio.
4. **Test each agent** — Paste Prompt A — one small job per agent, each on its own plugin.
5. **Write the limits** — Paste Prompt B.

## The prompts

### PROMPT A — Codex: test each agent

> Use subagents, one per check, each following its
> role card:
> 1. growth-strategist: web search — one 2026 news
>    item about financial planning in Singapore, cited.
> 2. growth-analyst: @Google Drive — read
>    firm-metrics.csv from Horizon Studio; report
>    average monthly enquiries.
> 3. content-creator: @Gmail — a DRAFT to me with the
>    subject "Connector test". Do not send.
> 4. creative-designer: $imagegen — a 1080x1080 test
>    image in Horizon colours; @Canva — list designs.
> 5. website-designer: @Computer Use — open Horizon's
>    public site at mobile width and report any problem.
> Report each result in one line.

### PROMPT B — Codex: least privilege

> Update the "Plugins" section of each role card in
> agents/ to match data/connectors-setup.md: what it
> may use, and that @Gmail is drafts-only. Remove any
> plugin a role does not need.

## Check your work

- [ ] The four plugins are installed and connected.
- [ ] Five checks ran, each by its own agent.
- [ ] The Gmail test is a draft in your inbox — nothing was sent.
- [ ] The analyst read the CSV from Drive, not from the local folder.
- [ ] Each agent's instructions list only the tools its job needs.

## If it goes wrong

- **Insufficient scope** — Reconnect and grant read access to the Horizon Studio folder.

## Stretch

- Add @Google Calendar to the Lead only, for review deadlines.

> **Why it matters:** Least privilege is a design decision, not a setting. Ask of each connector: does this agent's job need it?

## Next

Lab 5 — Campaign 1: Research to Storyboard, with Subagents. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
