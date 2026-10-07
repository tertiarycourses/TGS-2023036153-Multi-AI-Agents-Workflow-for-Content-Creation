#!/usr/bin/env bash
# Lab 12 — a researcher -> writer -> reviewer pipeline on the Hermes board.
# Run from your horizon-studio folder, with `hermes gateway start` running
# in another terminal (the gateway runs the dispatcher).
set -euo pipefail
WD="$PWD/hermes"
mkdir -p "$WD"
id() { python3 -c 'import json,sys; print(json.load(sys.stdin)["task_id"])'; }

R=$(hermes kanban create "Week 2: facts for a LinkedIn post and a newsletter tip on CPF cash top-ups (facts-2026.md only)" \
      --assignee researcher --json | id)
W=$(hermes kanban create "Week 2: write the LinkedIn post and the newsletter tip in sunny-voice" \
      --assignee writer --parent "$R" --json | id)
V=$(hermes kanban create "Week 2: review with fact-check and fin-compliance; request changes until PASS, then block for human approval" \
      --assignee reviewer --parent "$W" --json | id)
echo "research=$R  write=$W  review=$V"
echo "Watch:   hermes kanban watch     (or: hermes dashboard)"
