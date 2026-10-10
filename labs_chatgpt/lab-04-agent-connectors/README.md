# Lab 04 — Install the Plugins Each Agent Needs

> **USE: CHATGPT, THEN CODEX** — start in ChatGPT; the step that moves you to Codex says so

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 57–61**\
**Surface:** ChatGPT plugins → Codex\
**Features:** @Google Drive · @Gmail (drafts) · @Computer Use · $imagegen · @Sites · least privilege per agent

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-4 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

The analyst cannot read the data, the designer has no design tool and the creator cannot draft an email. Connect each agent to what its job needs — and nothing more.

## Your goal

An agent can only do the job if it can reach the tools — and a regulated firm only lets each agent reach the tools its job needs. Connect them, then test each one.

## You'll build

every specialist tested on its own connector, with its limits written into its instructions

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Codex reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/connectors-setup.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — Start a new chat in the Horizon Marketing project and name it "Lab 4". Run all of this lab's prompts in it.
2. **Install the plugins** — Plugins: Google Drive, Gmail and Computer Use. Sites and $imagegen are built in.
3. **Use your own account** — Connect your personal Google account — never an employer's.
4. **Put the data on Drive** — Upload data/ to a Drive folder named Horizon Studio.
5. **Open Codex** — In Codex, start a new thread in horizon-studio named "Lab 4" for the next two prompts.
6. **Test each agent** — Copy and paste Prompt A — one small job per agent, each on its own plugin.
7. **Write the limits** — After the five results are reported, copy and paste Prompt B.

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
>    image in Horizon colours.
> 5. website-designer: @Computer Use — open our own
>    copy of the site (web/site/index.html) at mobile
>    width and report any problem.
> Report each result in one line.

### PROMPT B — Codex: least privilege

> Update the "Plugins" section of each role card in
> agents/ to match data/connectors-setup.md: what it
> may use, and that @Gmail is drafts-only. Remove any
> plugin a role does not need.

## Check your work

- [ ] The three plugins are installed and connected.
- [ ] Five checks ran, each by its own agent.
- [ ] The Gmail test is a draft in your inbox — nothing was sent.
- [ ] The analyst read the CSV from Drive, not from the local folder.
- [ ] Each agent's tools line names only the connectors its job needs.

## If it goes wrong

- **Insufficient scope** — Reconnect and grant read access to the Horizon Studio folder.

## Stretch

- Add @Google Calendar to the Lead only, for review deadlines.

> **Why it matters:** Least privilege is a design decision, not a setting. Ask of each connector: does this agent's job need it?

## Next

Lab 5 — Campaign 1: Research to Storyboard, with Subagents. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
