# Lab 13 — Campaign 5: Always On — the Weekly Growth Report

> **USE: CHATGPT WORK** — ChatGPT Work

**Course:** Multi AI Agents Workflow for Content Creation (ChatGPT Edition) (TGS-2023036153)\
**Day 2 · Topic 4 · about 35 minutes · slides 137–141**\
**Surface:** ChatGPT Work (skill, scheduled task, @Drive, @Gmail)\
**Features:** the Growth Analyst's campaign-report skill · do · verify · schedule · draft-only delivery

> **Copy the prompts:** https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/prompts/chatgpt/#lab-13 — click **Copy** next to each prompt, then paste it into the chat.

## The story so far

The team must keep working after class. Rachel wants the Growth Analyst's report in her inbox every Monday — as a draft she decides on.

## Your goal

The team should keep working when class ends. Every Monday the Growth Analyst's report lands in Rachel's inbox as a draft — the decision stays with a person.

## You'll build

a scheduled task that drafts the weekly growth report every Monday at 8am, and one draft in Gmail

## What is in this folder

> **.md or .pdf?** A `.md` file (Markdown) is plain text that Codex reads. Every `.md` here has a `.pdf` twin with the same name — open the PDF to read it yourself.

- `assets/campaign-results.csv`
- `assets/weekly-report-brief.md`
- `assets/scheduled-task-instructions.md`
- `prompts.md` / `prompts.pdf` — every prompt, ready to paste
- `evidence/checklist.md` / `checklist.pdf` — what to capture as proof

## Step by step

1. **New session** — Start a new ChatGPT Work chat and name it "Lab 13". Run all of this lab's prompts in it.
2. **Put the data on Drive** — Upload campaign-results.csv to the Horizon Studio folder.
3. **Bring the skill** — Use @skill-creator to add campaign-report to ChatGPT.
4. **Do it once** — Copy and paste Prompt A. Refine the report until it is right.
5. **Schedule it** — After the report is right, copy and paste Prompt B. Runs appear in Scheduled.
6. **Run it now** — Run the task once and open the Gmail draft.
7. **Pause it** — After class, pause the scheduled task.

## The prompts

### PROMPTS A and B — ChatGPT Work

> PROMPT A
> Act as Horizon's Growth Analyst. Using @Google Drive,
> read campaign-results.csv in the Horizon Studio
> folder. Use the campaign-report skill and
> weekly-report-brief.md. Leave the report as a
> @Gmail DRAFT to me, subject "Horizon weekly growth
> report" and today's date. Send nothing.
>
> PROMPT B
> Do this every Monday at 8am, as a scheduled task.
> Draft only — never send, publish or approve
> anything.

## Ask about the result

Once a result opens, type any of these in the chat to get its meaning. Ask until it makes sense to you — then decide.

- "What is the one decision this report asks me to make?"
- "Which channel gets us a chat most cheaply, and how sure are you?"
- "What would you change in next month's budget, and why?"

## Check your work

- [ ] The campaign-report skill is available in ChatGPT.
- [ ] The report names the cheapest channel per chat (the newsletter).
- [ ] It recommends a budget split with a reason per channel.
- [ ] A scheduled task runs Mondays at 8am with draft-only instructions.
- [ ] A manual run left a draft — nothing was sent.
- [ ] The task is paused after class.

## If it goes wrong

- **It sent the email** — Write "draft only — never send" in both the skill and the task instructions.

## Stretch

- Add a Friday 5pm task from the Lead: what was published and what is still pending.

> **Why it matters:** Automate the preparation, not the decision. The schedule fills an inbox; a person still decides.

## Next

Lab 14 — Measure, Govern and Write the Team Playbook. Keep what you built — the next lab starts from it.

## Safety

Use only this lab's synthetic data and your own accounts. Never paste a real API key, password, token or client data into a prompt or a file — tokens live only in .env. Every email address in the data must resolve to your own inbox. Nothing is published or sent without a person approving that exact version.
