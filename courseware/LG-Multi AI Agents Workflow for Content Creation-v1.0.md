# Learner Guide

Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0 · 13 September 2026

## Learning outcomes

LO1: Conceptualize content ideas to meet marketing objectives and map out digital storyboards as part of a content strategy.

LO2: Identify content requirements from customer preferences and determine the frequency of marketing content.

LO3: Determine content types and styles and decide on modes and processes for distributing content.

LO4: Develop guidelines for content strategy execution using appropriate delivery modes and responsible AI practices.

## Topic 1: Multi-AI-Agent Content Ideation and Digital Storyboarding

### Campaign objective contract

Input: approved marketing brief. Control: translate objective into measurable audience action. Output: goal sheet. Accept when choose one primary conversion action. Failure: vague awareness goal. Evidence: goal and event IDs present.

### Audience promise and proof

Input: product facts and objections. Control: pair each promise with verifiable evidence. Output: claim ledger. Accept when reject unsupported benefit claims. Failure: invented product proof. Evidence: supported claim rate.

### Content idea scoring

Input: idea backlog and audience needs. Control: score relevance, evidence, effort and risk. Output: ranked idea board. Accept when advance ideas above agreed rubric threshold. Failure: novelty without audience fit. Evidence: rubric score by idea.

### Agent role decomposition

Input: campaign brief and work units. Control: separate researcher, strategist, writer, designer and reviewer duties. Output: role charter. Accept when one accountable owner for each output. Failure: overlapping agent authority. Evidence: unowned task count.

### Research-to-strategy handoff

Input: source cards with URLs and dates. Control: condense findings into claims and constraints. Output: research packet. Accept when accept only attributable findings. Failure: citation laundering. Evidence: traceable claim count.

### Storyboard beat architecture

Input: approved message and CTA. Control: map hook, tension, proof, resolution and action. Output: five-beat storyboard. Accept when each beat advances the objective. Failure: beautiful scenes without narrative. Evidence: beat-to-objective coverage.

### Scene-level evidence

Input: storyboard panels and product facts. Control: attach visual, voice, claim and source to each scene. Output: scene sheet. Accept when flag scenes with unsupported claims. Failure: fabricated testimonial. Evidence: evidence per claim.

### Channel-aware story variants

Input: master storyboard and channel brief. Control: retain core story while changing length and visual grammar. Output: variant board. Accept when same claim, adapted format. Failure: message drift across channels. Evidence: message consistency score.

### Prompt contract for ideation

Input: brand voice, audience, goal and exclusions. Control: specify role, inputs, output schema and refusal conditions. Output: ideation prompt. Accept when require structured idea records. Failure: generic idea spam. Evidence: schema-valid output rate.

### Parallel ideation and merge

Input: three independent agent proposals. Control: deduplicate then rank without losing source provenance. Output: merged shortlist. Accept when retain evidence and dissent. Failure: majority vote on false claim. Evidence: duplicate and conflict count.

### Human concept checkpoint

Input: shortlist and brand criteria. Control: approve, revise or reject with reasons. Output: decision record. Accept when human owns campaign direction. Failure: automatic campaign launch. Evidence: approval trace completeness.

### Storyboard QA gate

Input: scene sheet and approval record. Control: test claim, continuity, CTA and accessibility. Output: storyboard QA report. Accept when block any critical defect. Failure: unchecked scene transition. Evidence: critical defect count.

### CREATE prompt framework

Input: campaign role, request and examples. Control: specify Character, Request, Examples, Adjustments, Type and Extras. Output: structured content prompt. Accept when output must include a cited storyboard proposal. Failure: ambiguous prompt brief. Evidence: framework field coverage.

### System, user and assistant roles

Input: approved policy and campaign request. Control: separate durable constraints from task input and model output. Output: role-scoped transcript. Accept when system constraints outrank untrusted source text. Failure: prompt-injection through source material. Evidence: role-boundary violations.

# Lab 01: Campaign objective and role charter
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO1: Conceptualize content ideas to meet marketing objectives and map out digital storyboards as part of a content strategy.
Build: goal sheet, role charter and brief.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: goal sheet, role charter and brief.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 02: Research packet and idea ranking
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO1: Conceptualize content ideas to meet marketing objectives and map out digital storyboards as part of a content strategy.
Build: source cards, claim ledger and ranked ideas.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: source cards, claim ledger and ranked ideas.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 03: Five-beat storyboard
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO1: Conceptualize content ideas to meet marketing objectives and map out digital storyboards as part of a content strategy.
Build: scene sheet, variants and QA decision.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: scene sheet, variants and QA decision.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


## Topic 2: Audience Research and Content Requirement Analysis

### Preference evidence hierarchy

Input: interviews, analytics and CRM extracts. Control: rank direct behaviour above unsupported persona assumptions. Output: evidence register. Accept when label evidence age and sample size. Failure: treating guesses as facts. Evidence: source confidence.

### Segment definition

Input: consented customer attributes. Control: cluster by need, intent and context. Output: segment cards. Accept when avoid sensitive proxy targeting. Failure: demographic stereotyping. Evidence: segment evidence coverage.

### Persona jobs and objections

Input: segment cards and transcripts. Control: extract jobs-to-be-done, barriers and triggers. Output: persona matrix. Accept when keep verbatim evidence separate from inference. Failure: invented quotes. Evidence: quote traceability.

### Journey stage mapping

Input: search queries and purchase path. Control: map problem, consideration, decision and retention needs. Output: journey grid. Accept when select one job per content asset. Failure: same message at every stage. Evidence: journey fit score.

### Competitor content gap

Input: approved competitor URLs. Control: compare questions answered, proof and format. Output: gap table. Accept when seek unmet audience question. Failure: copying competitor wording. Evidence: originality and gap count.

### Search intent classification

Input: keyword list with page evidence. Control: label informational, comparison and transactional intent. Output: intent map. Accept when match CTA to intent stage. Failure: sales CTA on learning query. Evidence: intent-CTA fit.

### Content requirements schema

Input: persona, objective and channel constraints. Control: record length, voice, proof, format, CTA and exclusions. Output: content specification. Accept when reject missing mandatory fields. Failure: brief lost in handoff. Evidence: spec completeness.

### Frequency from response data

Input: engagement, unsubscribe and capacity data. Control: compare marginal value with fatigue and production cost. Output: cadence proposal. Accept when reduce frequency when fatigue rises. Failure: over-posting. Evidence: engagement per send.

### Editorial calendar capacity

Input: asset dependencies and staff capacity. Control: allocate publish slots and review buffers. Output: four-week calendar. Accept when never schedule before QA sign-off. Failure: unreviewed slot. Evidence: on-time approved rate.

### Feedback loop design

Input: campaign performance and qualitative comments. Control: record hypotheses, tests and observed results. Output: learning log. Accept when change one variable per test. Failure: post-hoc storytelling. Evidence: test interpretability.

### Research agent boundaries

Input: approved sources and data policy. Control: limit tools, time window and claims. Output: researcher charter. Accept when escalate inaccessible or conflicting evidence. Failure: web summary without source. Evidence: source coverage.

### Audience analyst handoff

Input: research packet and segment matrix. Control: produce segment needs, confidence and exclusions. Output: audience brief. Accept when flag low-confidence segments. Failure: false precision. Evidence: confidence annotation rate.

### RICCE audience brief

Input: role, intent, context, constraints and examples. Control: bind persona work to evidence rather than invented demographics. Output: RICCE brief. Accept when reject ungrounded preference claims. Failure: persona hallucination. Evidence: brief field completeness.

### Few-shot preference extraction

Input: labelled customer comments and extraction schema. Control: show two positive and one ambiguous example. Output: structured preference records. Accept when retain ambiguous cases for human review. Failure: overfitting to examples. Evidence: label agreement.

# Lab 04: Audience evidence and personas
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO2: Identify content requirements from customer preferences and determine the frequency of marketing content.
Build: evidence register, segments and persona matrix.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: evidence register, segments and persona matrix.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 05: Requirements and cadence
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO2: Identify content requirements from customer preferences and determine the frequency of marketing content.
Build: content specification and four-week calendar.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: content specification and four-week calendar.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 06: Research-agent handoff
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO2: Identify content requirements from customer preferences and determine the frequency of marketing content.
Build: validated audience brief with uncertainty labels.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: validated audience brief with uncertainty labels.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


## Topic 3: Multi-Channel Content Creation and Agent Workflow Coordination

### Orchestration state machine

Input: approved brief and task queue. Control: move tasks through planned, drafting, review, approved and blocked. Output: task ledger. Accept when publish only from approved state. Failure: lost handoff. Evidence: state transition validity.

### Handoff JSON contract

Input: agent output and schema version. Control: validate fields, sources, confidence and owner. Output: typed handoff packet. Accept when reject malformed payload. Failure: free-text ambiguity. Evidence: schema pass rate.

### Researcher-writer boundary

Input: verified claim ledger. Control: pass evidence IDs and prohibited claims to writer. Output: drafting packet. Accept when writer may not invent citations. Failure: citation fabrication. Evidence: claim-to-source match.

### Writer-editor loop

Input: draft and brand rubric. Control: revise only failed criteria with change log. Output: edited draft. Accept when cap iterations and escalate. Failure: infinite rewrite loop. Evidence: revision gain per cycle.

### Fact-check agent

Input: draft claims and source snapshots. Control: classify supported, disputed or unverified. Output: fact-check matrix. Accept when block disputed high-impact claims. Failure: plausible falsehood. Evidence: verified claim share.

### Brand voice gate

Input: approved voice examples and exclusions. Control: score tone, terminology and promise consistency. Output: brand review. Accept when human resolves borderline calls. Failure: robotic generic voice. Evidence: rubric agreement.

### SEO brief to article

Input: search intent, keyword cluster and source pack. Control: structure answer, headings and internal link opportunities. Output: SEO draft. Accept when prioritize reader task over keyword repetition. Failure: keyword stuffing. Evidence: intent coverage.

### Email adaptation

Input: master narrative and consented segment. Control: shorten to subject, preheader, body and single CTA. Output: email variant. Accept when check preference and unsubscribe handling. Failure: non-consented send. Evidence: CTA clarity.

### Social adaptation

Input: master claim and platform constraints. Control: choose hook, visual, caption and link treatment. Output: social post pack. Accept when validate current platform limits before publishing. Failure: truncated post. Evidence: format validity.

### Visual asset brief

Input: storyboard, brand kit and rights register. Control: specify subject, crop, alt text and licensing. Output: designer brief. Accept when reject imagery implying false evidence. Failure: misleading generated photo. Evidence: rights record coverage.

### Multimodal consistency

Input: copy, image and video script. Control: cross-check claim, depiction and accessibility. Output: multimodal QA sheet. Accept when same offer and disclaimer across formats. Failure: visual-text contradiction. Evidence: cross-format consistency.

### Error and retry policy

Input: agent failure log and task state. Control: retry transient faults; block validation/auth failures. Output: recovery record. Accept when bounded retries with human escalation. Failure: silent partial publish. Evidence: recoverable task rate.

### Tool routing by role

Input: approved tool inventory and data class. Control: route research, drafting, image and review tasks to bounded tools. Output: tool assignment matrix. Accept when no private data sent to a public tool. Failure: tool sprawl and data leak. Evidence: routing compliance.

### Self-critique editor loop

Input: draft, rubric and source ledger. Control: identify a specific defect then revise against evidence. Output: revision diff. Accept when stop after two loops and escalate. Failure: endless cosmetic rewrites. Evidence: defect closure rate.

# Lab 07: Agent workflow state machine
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO3: Determine content types and styles and decide on modes and processes for distributing content.
Build: task ledger and typed handoff.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: task ledger and typed handoff.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 08: Draft, edit and fact-check
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO3: Determine content types and styles and decide on modes and processes for distributing content.
Build: source-linked article and review log.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: source-linked article and review log.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 09: Multi-channel asset pack
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO3: Determine content types and styles and decide on modes and processes for distributing content.
Build: email, social, visual brief and multimodal QA.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: email, social, visual brief and multimodal QA.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


## Topic 4: Content Distribution, Strategy Guidelines and Responsible AI Practices

### Channel decision matrix

Input: segment preference and content specs. Control: score reach, fit, effort, privacy and measurability. Output: channel plan. Accept when pick channels with observable objective. Failure: channel sprawl. Evidence: weighted fit score.

### Distribution dependency graph

Input: approved assets and calendar. Control: link review, legal, creative and publishing prerequisites. Output: release graph. Accept when no node runs before dependencies pass. Failure: premature release. Evidence: blocked dependency count.

### Publish approval gate

Input: QA packet and named approver. Control: record decision, version, time and exceptions. Output: release authorization. Accept when human approval required for external publish. Failure: agent self-approval. Evidence: approval audit completeness.

### Scheduling and idempotency

Input: approved post IDs and channel slots. Control: use unique campaign key and retry-safe publish action. Output: schedule ledger. Accept when duplicate key prevents duplicate post. Failure: double publication. Evidence: duplicate rate.

### Localization and accessibility

Input: approved master and audience locale. Control: check language, captions, alt text and contrast. Output: accessible variant. Accept when retain claim and CTA meaning. Failure: untranslated disclaimer. Evidence: accessibility pass rate.

### Copyright and asset provenance

Input: source files and license notes. Control: record creator, permission, allowed use and attribution. Output: rights ledger. Accept when hold asset with unknown rights. Failure: unlicensed image. Evidence: rights coverage.

### Privacy-safe customer data

Input: CRM extract and consent register. Control: minimize, pseudonymize and restrict agent context. Output: safe audience dataset. Accept when exclude identifiers not needed for task. Failure: PII in prompt. Evidence: PII leakage count.

### Synthetic content disclosure

Input: generated image and campaign context. Control: decide disclosure and avoid deceptive realism. Output: disclosure record. Accept when escalate misleading depictions. Failure: fake testimonial. Evidence: disclosure decision trace.

### Claim and hallucination control

Input: draft and source ledger. Control: require source-backed factual claims and abstention. Output: claim QA report. Accept when no publication with unverified claim. Failure: confident fabricated statistic. Evidence: unsupported claim count.

### Operational observability

Input: task ledger, token costs and errors. Control: measure latency, cost, retries and QA outcome. Output: run dashboard. Accept when pause deteriorating workflow. Failure: hidden failure. Evidence: cost per approved asset.

### Experiment and learning plan

Input: baseline campaign and hypothesis. Control: define variant, metric, guardrail and review date. Output: test plan. Accept when stop test on safety breach. Failure: optimizing vanity metric. Evidence: valid experiment share.

### Strategy governance playbook

Input: all approved contracts and logs. Control: set roles, cadence, escalation and revision control. Output: execution guideline. Accept when quarterly human review. Failure: orphaned workflow. Evidence: policy review completion.

### Provider data controls

Input: approved data classification and current tool settings. Control: choose retention and training controls before upload. Output: data-control record. Accept when block confidential inputs on unapproved accounts. Failure: private data in chat history. Evidence: control attestation.

### Synthetic-media authenticity

Input: generated photo or voice and usage context. Control: check consent, provenance, disclosure and deceptive impression. Output: media authenticity record. Accept when hold impersonation or false documentary depiction. Failure: deepfake-style deception. Evidence: authenticity pass rate.

# Lab 10: Distribution release gate
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO4: Develop guidelines for content strategy execution using appropriate delivery modes and responsible AI practices.
Build: channel matrix, dependencies and approval record.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: channel matrix, dependencies and approval record.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 11: Rights, privacy and disclosure
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO4: Develop guidelines for content strategy execution using appropriate delivery modes and responsible AI practices.
Build: rights ledger, safe data and disclosure decision.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: rights ledger, safe data and disclosure decision.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


# Lab 12: Run evaluation and governance
Course: Multi AI Agents Workflow for Content Creation · TGS-2023036153 · v1.0
Outcome: LO4: Develop guidelines for content strategy execution using appropriate delivery modes and responsible AI practices.
Build: dashboard, experiment plan and execution playbook.
## Preparation
1. Open marketing-assets/brand-brief.md and record the campaign goal, approved claims and exclusions.
2. Open mock-data/audience-signals.csv. Confirm every row is synthetic and do not substitute personal customer data.
3. Open mock-data/claim-ledger.csv. Mark GL-04 as blocked because evidence is absent.
## Agent workflow
4. Start a new workspace or chat in a tool available to you. Create four specialist roles using prompts.pdf: researcher, strategist, creator and reviewer. If the tool lacks true subagents, run the roles in separate chats and carry the structured handoff manually.
5. Give the researcher only the local files needed. Save a source-linked research packet; include sample sizes and uncertainty.
6. Pass the packet, campaign goal and brand constraints to the strategist. Ask for a decision record tied to the relevant learning outcome.
7. Pass the approved brief and claim IDs to the creator. Generate the required artifact, then label it DRAFT with a version number.
8. Give the draft and evidence packet to the reviewer. Record factual, brand, rights, privacy and accessibility findings. Revise only failed criteria, then repeat the review once.
9. Ask a human acting as Marketing Manager to approve, revise or reject the final artifact. Record the decision, reason and time. Do not publish to a real channel during class.
## Acceptance checks
- Deliverable exists: dashboard, experiment plan and execution playbook.
- Every factual claim has a GL ID and no blocked claim appears in approved copy.
- Agent handoffs name input, output, owner, status and source IDs.
- At least one decision cites audience evidence rather than an invented preference.
- Reviewer records PASS, REVISE or BLOCK and human approval is distinct.
## Evidence to submit
Save the brief, task ledger, prompt/output transcript, artifact, review result and human decision in an evidence/ folder named for this lab. Include one screenshot of the final approved state.


## Sources

https://www.tertiarycourses.com.sg/multi-ai-agents-workflow-for-content-creation.html

https://techcommunity.microsoft.com/blog/educatordeveloperblog/creating-a-fun-multi-agent-content-strategy-system-with-microsoft-agent-framewor/4495105

https://www.mindstudio.ai/blog/ai-content-creation-sub-agents-research-to-post

https://n8n.io/workflows/10293-multi-agent-ai-content-creator-for-seo-blogs-and-newsletters-with-openrouter-dall-e-gemini/

https://dev.to/pavel_polivka/building-a-multi-agent-content-management-system-with-ai-29i7

Multi-Agent Development with Claude Code: Subagents, Team Orchestration, and Long-Running Systems for Autonomous AI Development (reference ebook)