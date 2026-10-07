// Claude Code PreToolUse hook (Lab 8). Reads the tool call as JSON on stdin.
// Exit 2 blocks the call and shows the reason to the agent.
import { liveBlocker } from './lib.mjs';

let raw = '';
for await (const chunk of process.stdin) raw += chunk;
const call = JSON.parse(raw || '{}');
const input = call.tool_input || {};
const block = (why) => { console.error(`BLOCKED by the approval gate: ${why}`); process.exit(2); };

if (call.tool_name === 'Bash') {
  const cmd = String(input.command || '');
  if (/approve\.mjs/.test(cmd)) block('only a person approves content — they run approve.mjs in their own terminal.');
  const m = cmd.match(/publish\.mjs\s+([\w.-]+)/);
  if (m && /--live\b/.test(cmd)) {
    const why = liveBlocker(m[1]);
    if (why) block(why);
  }
}
if (['Edit', 'Write', 'MultiEdit', 'NotebookEdit'].includes(call.tool_name)) {
  const path = String(input.file_path || input.notebook_path || '');
  if (/review[\\/](approvals|publish-log)\.csv$/.test(path)) block('agents may not edit the approval records.');
}
process.exit(0);
