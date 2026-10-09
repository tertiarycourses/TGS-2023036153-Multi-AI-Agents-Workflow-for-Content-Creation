# Publisher kit (Claude edition)

1. Copy scripts/ into horizon-studio/scripts/.
2. Merge settings.json into .claude/settings.json: it turns on agent teams and adds the PreToolUse hook that runs scripts/gate-hook.mjs.
3. Restart Claude Code and run /hooks to check the hook is loaded.
4. Copy env.example to .env (git-ignored) when you connect real accounts.
