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
