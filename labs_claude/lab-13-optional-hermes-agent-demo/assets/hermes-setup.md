# Hermes Agent setup (Lab 14, optional demo)

Hermes Agent is Nous Research's open-source (MIT) agent. It runs on your
machine, works with many model providers, keeps memory and skills, runs a
Kanban board for teams of agents, and talks to you through bots on Telegram,
Discord, Slack, WhatsApp, Signal or email.

1. Install (macOS, Linux, WSL2):
   curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
   (Windows: use the PowerShell one-liner on the Hermes site.)
2. `hermes setup` — choose a provider and model. A Claude **subscription**
   does not cover Hermes: use the Anthropic API key or OpenRouter key your
   trainer issues (spend-limited, revoked after class).
3. `hermes` — say hello to check it works. `/exit` to leave.
4. Profiles are separate agents — each has its own config, model, memory,
   skills and bot: ~/.hermes/profiles/<name>/
5. Copy the studio skills into each profile:
   cp -R skills/* ~/.hermes/profiles/<name>/skills/
