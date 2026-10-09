# Publisher kit (ChatGPT edition)

1. Copy scripts/ into horizon-studio/scripts/.
2. Ask Codex: "Add a PreToolUse hook in .codex/hooks.json that runs node scripts/gate-hook.mjs before every shell command, and ask me to trust it." Review it, then trust it.
3. Even without the hook, approve.mjs refuses to run without a person at a terminal, and publish.mjs refuses unapproved or changed items.
4. Copy env.example to .env (git-ignored) when you connect real accounts.
