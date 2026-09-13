# Courseware QA · TGS-2023036153 · v1.0

Checked 13 September 2026. Overall local artifact verdict: **PASS**. External release checks are recorded separately after publication.

| Gate | Result | Evidence |
|---|---|---|
| A · slides | PASS | 243-slide PPTX and 243-page PDF; 12 editable PowerPoint charts; generated cover and divider illustrations; 0 off-slide shapes. Cover, divider, chart, worked artifact and six deck contact sheets reviewed. Divider text overflow found and fixed, then rendered again. Two trainer profiles, LMS download visual, assessment flow, front/end attendance and single cover version present. No certification practice exam applies. |
| B · assessment | PASS | Current on-file WA and PP retrieved from the supplied Drive folder because TMS assessment retrieval returned 401. Mirrored 6 WA questions / 60 minutes and 4 PP tasks / 120 minutes. K1–K6 and A1–A7 all printed on candidate papers and assessor keys. Covers and candidate administration pages rendered; scenario/questions start on page 3. |
| C · Lesson Plan | PASS | DOCX/PDF, 4 pages; two 8-hour training days, exact topic and lab slide ranges, version record and Word TOC/page fields. |
| D · Learner Guide | PASS | DOCX/PDF/Markdown, 19 pages; full topic descriptions, detailed numbered procedures for all 12 labs, version record and Word TOC/page fields. |
| E · labs | PASS | 12 self-contained lab folders with marketing assets, synthetic CSV data, prompt PDF, learner guide PDF and evidence form. 72 learner-facing Markdown files have same-basename PDFs. |
| F · files and privacy | PASS locally | Current v1.0 files only in live output. `.gitignore` excludes assessment, reference, secrets and build data. Only candidate papers are eligible for Drive upload; answer keys remain local. Drive privacy must be checked separately. |

| Code | Candidate item | In-class evidence |
|---|---|---|
| K1–K6 | WA questions 1–6, respectively | Deck topics 1–4, Labs 03–10 |
| A1–A2 | PP task 1 | Labs 01–03 |
| A3–A4 | PP task 2 | Labs 04–06 |
| A5 | PP task 3 | Labs 07–09 |
| A6–A7 | PP task 4 | Labs 10–12 |

The on-file Assessment Plan's older generic specification says 60 minutes for PP, while the on-file PP question paper says 120 minutes. The current question paper and the official page's 2-hour assessment label were used for this revision. The difference should be reconciled with the ATO record.

## Publication readback

- Supplied Drive folder `1NREhsa-j5uJ841tNwKC08bkcL_wlIeuL` matches the LMS Courseware Link for this exact TGS code.
- Current Drive inventory: 9/9 core files match local MD5 hashes; 168/168 lab files match local MD5 hashes. The learner-slide PDF used for LMS is the copy in the Learner Guide folder.
- Two superseded answer keys were moved from the publicly linked Assessment folder to Trainer Resources. Both original key URLs returned `401` to anonymous export; current WA and PP candidate papers have reader access.
- LMS-TMS production update returned `200`; all seven selected URLs resolved on semantic readback. The written and practical nested assessment methods point to the current candidate-paper IDs, and unrelated top-level fields plus learning-unit titles/order were preserved.
- The LMS update API regenerated four learning-unit IDs while retaining their titles and 13 subtopic titles/order. Its existing learning-unit wording still uses the former prompt-engineering course title; the link push did not alter approved curriculum labels. This needs a separate curriculum-record review if the LMS labels are to mirror the current course page.
