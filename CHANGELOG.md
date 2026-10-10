# Changelog

## v3.5 · 10 October 2026
- Labs made for learners who are not IT people. Claude Edition: every lab runs in Claude Code's Code mode, in its own session named after the lab ("Lab 5"); the Work-mode, Customize → Skills and Canva steps are gone.
- From Lab 5 every result opens as a plain-English artifact (Claude) with a Word copy, and each lab lists follow-up questions to ask about the result. New Lab Prompts page (docs/prompts/, GitHub Pages) with a Copy button per prompt; lab READMEs and the Learner Guide link to it.
- Horizon's website gains a blog (latest three on the home page, View all articles, four sample posts) and loses its checklist. Each learner works on their own local copy of the site. Lab 8 is one quick-blog prompt that posts to it; Lab 9 adds the checklist (Prompt D) and creates the welcome emails as Gmail drafts. The public link is GitHub Pages; the Claude artifact copy is private.
- Lab 5 gains Prompt C (decide on the issues as Rachel). Lab 10 is a two-post demo (1 LinkedIn + 1 Facebook), 40 min; Lab 9 is 40 min. Labs 10-11: review in the artifact (Approve / Request changes) or by one review email, then approve in the chat.
- Lab 10 (Claude Edition): Prompt A — the team writes both posts, the designer makes both images (LinkedIn 1200 x 627, Facebook 1080 x 1080), the Lead checks, you approve; Prompt B — a "ready to post" artifact, and the learner posts the text and image by hand. Posting through the API is an optional last step. Lab steps over eight split across two slides.
- Images in the publisher kit (both editions): publish.mjs uploads each post's image (LinkedIn Images API, then the post with content.media and alt text; Facebook Page /photos with caption and alt_text_custom), and the approval hash now covers the image, so a picture changed after approval needs a new approval. Facebook Graph default v26.0. Skills channel-formats, linkedin-post, facebook-post and brand-visuals cover the image: and alt: lines, sizes, image briefs and how a post goes out.
- Canva removed from both editions. ChatGPT Edition: same plain-English results, Word copies, follow-up questions and Prompts page; Lab 9 makes the checklist as a PDF.
- v3.4 outputs moved to archive/courseware-v3.4; older assessment papers to archive/assessment-pre-v3.5.

## v3.4 · 10 October 2026
- Claude Edition, Day 2: the optional demo (previously Hermes Agent, then "the Lead on autopilot") is replaced by **Lab 15 — Agent Teams: A Strategy Debate and a QA Loop**, a 30-minute hands-on lab in Claude Code. Part 1: an advocate (growth-strategist) and a critic (growth-analyst) argue the pros and cons of a "Turning 55: what happens to your CPF" campaign, messaging each other directly while the Lead judges and a person makes the call. Part 2: a writer, a QA Auditor and a designer; a failed audit goes straight back to the writer for a rewrite (three rounds at most), and a pass goes to the designer and then to a person for approval.
- New slides: "Subagents vs Agent Teams" (a native diagram: main agent → subagents → results reported back, beside a Team Lead → shared task list ⇅ teammates who message each other), "A Team That Argues" and "The QA Loop".
- New lab files: turning-55-brief.md and turning-55-draft.md (a first draft with planted errors, so round 1 of the audit fails). Both are in horizon-studio/data/. The theme deliberately differs from the PP's year-end tax campaign, so the lab does not rehearse the assessment.
- Hermes Agent removed from the Claude Edition (history timeline, harness list, lab assets). Day 2: Lab 15 runs 15:15-15:45 and the summary 15:45-16:00; the assessment times are unchanged. The ChatGPT Edition is unchanged apart from the version number.
- v3.3 outputs moved to archive/courseware-v3.3 and the old Lab 15 folder to archive/labs-v3.3.

## v3.3 · 10 October 2026
- No-code Claude Edition. Every lab says which app to use — Claude (Work mode) or Claude Code (Code mode) — on its brief slide (a USE badge), steps slide, README and Learner Guide page; a new "Claude or Claude Code?" slide. Labs 6–9 and 13–15 run in Claude; Labs 3, 4 and 11 use both.
- Two new content labs: Lab 8 — a blog article from the storyboard (Day 1, 17:15–17:55; Marketing plugin, Firecrawl, fact-check, fin-compliance) and Lab 9 — the lead magnet: a Canva checklist and three welcome emails (Day 2, 09:05–09:35). Former Labs 8–13 renumbered 10–15; Day 1 review, Day 2 summary and the demo shortened to make room.
- Lab 4 connects everything from Customize: Google Drive, Gmail, Google Calendar, Canva and Firecrawl (Connectors) and Anthropic's Marketing plugin (Plugins). Each agent's tools line now names its connectors (they were blocked before); Gmail sending is blocked for the Content Creator. Playwright removed — the browser is built in.
- Skills: twenty, adding content-marketing, copywriting, linkedin-post, facebook-post, blog-post, newsletter, web-design and lead-magnet.
- Approvals without a terminal: a person types "approved <id> by <name>" (or "changes <id>: why"); a UserPromptSubmit hook records it from the person's own message. The approval gate and agent teams come pre-installed in horizon-studio/.
- The optional Hermes demo is replaced by a code-free "Lead on autopilot" scheduled brief in Claude. Setup slides and prerequisites no longer show install commands.
- PP Task 3 cites Lab 10 and approves in the chat; Task 4 cites Labs 10, 13 and 14. v3.2 outputs moved to archive/courseware-v3.2; old-numbered lab folders to archive/labs-v3.3-old-numbering.

## v3.2 · 9 October 2026
- New overview block before the scenario (slides 8-18, Claude Edition): the Claude suite of products; what Claude is (Chat + Cowork merged); what Claude Code is; Claude for Microsoft, Chrome and Science; Claude plans and pricing (API row now lists Haiku 5.5); a brief history of AI 2023-2026; what a harness is; the agentic loop and why it matters; agentic AI vs AI agents (24/7, after Agentic AI for Video Creation); what an agent is made of (instructions, tools, skills, memory, knowledge base, guardrails). The ChatGPT Edition gets the same generic slides plus its existing tools and plans slides.
- The Topic 1 timeline, agentic-loop, tools and pricing slides moved into the overview rather than being repeated. Lesson Plan: welcome + overview + scenario 9:00-9:45; Topic 1 9:45-10:00.
- 142-slide Claude deck, 138-slide ChatGPT deck. v3.1 outputs moved to archive/courseware-v3.1, build sources to archive/build-v3.1.

## v3.1 · 9 October 2026
- Horizon's website is given, not built. It is published once, publicly: a shared Claude artifact (https://claude.ai/artifact/J82VCbzFoqYps2vep8UYhL) plus a GitHub Pages backup (https://tertiarycourses.github.io/TGS-2023036153-Multi-AI-Agents-Workflow-for-Content-Creation/) for learners who cannot open artifacts or Sites. The ChatGPT Edition shows the GitHub Pages link until a public Sites link is added in build/hz_data.py (SITE_SITES).
- Lab 1 is now "Set Up the Studio and Explore Horizon's Website": open the public link, read the local copy, and record the link in the team charter. Lab 4's mobile check opens the public site.
- The scenario slide prints both links (clickable; the screenshot links to the site). Lab 1's brief slide, its Learner Guide section and its README now show the same links in a "Horizon's website" block. The Practice Exam slide links to the exam.
- Fixed the broken alfredang.github.io/finacial2 URLs in the site's canonical and social-preview tags.

## v3.0 · 8 October 2026
- Two editions from one source: **Claude Edition** and **ChatGPT Edition**, each with its own deck, Lesson Plan, Learner Guide (+ Markdown), lab pack and assessment (courseware_*/, labs_*/, assessment_*/).
- Rebuilt around an AI marketing team (after Grace Leung's "ChatGPT Work + Dot: Build your AI Marketing Team"): a Marketing Team Lead and five specialists — Growth Strategist, Content Creator, Creative Designer, Website Designer, Growth Analyst — each with instructions, two skills and its own connectors or plugins.
- The website is given and published in Lab 1 (Claude artifact / Sites). Labs 2-4 form the team; Labs 5-11 are five campaigns the team runs together; Lab 12 the playbook; Lab 13 an optional demo (Hermes Agent / Dots and workspace agents).
- Claude Edition: Claude Code subagents and agent teams. ChatGPT Edition: role skills, plugins and Codex subagents with the Lead's review (Plus and Pro).
- New org-chart slide; WA (6 SAQ, K1-K6) and PP (4 tasks, A1-A7) rewritten per edition.

## v2.1 · 8 October 2026
- Two Claude tools only: Claude (Chat and Cowork are one product) and Claude Code, which replaces Codex for the website, compliance subagent, approval gate and video.
- The website is published and shared as a Claude artifact instead of GitHub Pages.
- New slides: Claude plans and pricing; the agentic loop, why it matters and the loop in action; permission modes; publishing a Claude artifact and its limits.
- Topic 4: a scheduled weekly brief in Claude (Lab 12) and the playbook (Lab 13). Hermes Agent becomes an optional demo at the end (Lab 14).
- PP Task 4 updated to the Topic 4 labs; 148-slide deck.

## v2.0 · 8 October 2026
- Revamped in the house design of *Agentic AI Applications with Codex* (TGS-2023041081): charcoal / cream / orange deck, HANDS-ON brief → STEPS → PROMPT → VERIFY for every lab, v17 admin slides, single-source build.
- One central case across all labs: Horizon Wealth Planning, a Singapore financial-planning firm.
- 14 labs, each in its own folder: Claude Cowork sub-agents (research, ideation, personas, cadence, skills, measurement); Codex (website, compliance subagent, approval gate, video); Claude Code subagents and agent teams (social, newsletter and video teams publishing to LinkedIn, Facebook and YouTube behind a human approval gate); Hermes Agent bots on a Kanban board with a Telegram bot and scheduled jobs.
- 141-slide deck, 11-page Lesson Plan, 40-page Learner Guide (+ Markdown mirror). Day 2 assessment 4:00–6:00 PM.

## v1.0 · 13 September 2026
- New 2-day multi-agent content strategy package: visual slides, Learner Guide, Lesson Plan and 12 self-contained labs.
- Aligned to current course title, four outcomes and TSC; legacy prompt engineering deck retained as content reference.
