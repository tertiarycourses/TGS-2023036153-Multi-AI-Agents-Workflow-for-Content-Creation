# Lab 02 — Form the Team: Instructions for Each Agent

> **USE: CODEX** — Codex, in your horizon-studio folder

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 1 · Topic 1 · about 45 minutes · slides 41–46**\
**Surface:** Codex (role cards, subagents)\
**Features:** five role cards in agents/ · the roster in AGENTS.md · subagents by asking

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-2 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

Rachel sketches the team on a whiteboard: a Lead and five specialists. Each needs a clear job, and a clear line it must never cross — this is a regulated firm.

## Your goal

A team is a set of clear jobs. Write each agent's instructions once — its job, what it reads, what it delivers and what it must never do — and every campaign can call on it.

## You'll build

agents/: five role cards, and the roster in AGENTS.md

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Codex reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/role-specs.md`
- `assets/team-org-chart.md`
- `solution/` — reference files from the verified build (each `.md` with its `.pdf`)
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — In Codex start a new thread in horizon-studio and name it "Lab 2". Run all of this lab's prompts in it.
2. **Read the roles** — Open role-specs.md: one Lead and five specialists, each with a job, skills, connectors and limits.
3. **Write the instructions** — Copy and paste Prompt A. It builds the five specialists from the charter; extra ideas stay in team-design.md.
4. **See the team** — After the five files appear in agents/, copy and paste Prompt B. The Lead is not a file — it is you, in this session.
5. **Read one closely** — Open agents/content-creator.md. Is the "Never" section strict enough for a regulated firm?
6. **Meet the team** — After the list shows five agents, copy and paste Prompt C. Each agent introduces itself in one line — in its own context.
7. **Tighten one** — Change one instruction you disagree with and save it. It is your team.

## The prompts

### PROMPT A — Codex: five role cards

> Read data/role-specs.md. Create five role cards
> in agents/ — growth-strategist.md, content-creator.md,
> creative-designer.md, website-designer.md and
> growth-analyst.md. Each has: the job, what it reads,
> what it delivers, the plugins it may use, what it
> must never do, and how it reports back.
> Then add "## The marketing team" to AGENTS.md: one
> line per agent pointing to its card, and the rule
> "when I ask for the team, use subagents — one per
> role — each following its card".

### PROMPT B — Codex: see the team

> List the role cards in agents/. For each, show
> the file name, the role and its one-line job, in a
> table. Then confirm there are five, and that
> AGENTS.md lists all five under "## The marketing
> team". If any other card is there, list it and ask
> me before moving it to _archive/.

### PROMPT C — Codex: meet the team

> Use subagents — one per role, each following its
> card in agents/. Ask each: "In one line, who are
> you, and what is the first thing you would do for
> Horizon's goal of 40 booked chats a month?" Show me
> the five answers in a table.

## Check your work

- [ ] Five files exist in agents/, one per specialist.
- [ ] Each card has job, reads, delivers, plugins, never and report sections.
- [ ] AGENTS.md lists the team and the subagent rule.
- [ ] Five agents answered, each in its own context.
- [ ] Every agent has a "never" rule that blocks publishing.
- [ ] You changed one instruction and can say why.

## If it goes wrong

- **Codex answered alone** — Ask directly: "use subagents — one per role".

## Stretch

- Add a sixth agent, community-manager, that drafts replies to comments — and decide what it must never do.

> **Why it matters:** Clear jobs beat clever prompts. An agent that knows what it must never do is safer than one that is merely told to be careful.

## Next

Lab 3 — Give Each Agent Its Skills. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
