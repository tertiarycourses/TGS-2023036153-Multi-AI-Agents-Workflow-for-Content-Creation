# Connectors for each agent (Claude edition)

Connect once in claude.ai → Settings → Connectors, with your PERSONAL Google
account. Claude Code picks up the claude.ai connectors — check with /mcp.

| Agent | May use | Limit |
|---|---|---|
| Marketing Team Lead | Google Drive (read), Gmail | Gmail: drafts only |
| Growth Strategist | WebSearch, WebFetch, Google Drive (read) | cite every source |
| Content Creator | Google Drive (docs), Gmail | Gmail: drafts only |
| Creative Designer | Canva; Bash for Pillow and ffmpeg | no real or synthetic "clients" |
| Website Designer | Artifacts; Playwright MCP | publish only after approval |
| Growth Analyst | Google Drive and Sheets (read); Bash for Python | no personal data in reports |

Browser for the Website Designer (project scope):

    claude mcp add playwright -s project -- npx -y @playwright/mcp@latest

Least privilege: list in each agent's `tools:` only the built-in tools its
job needs, and write the connector limits into its instructions. The
approval hook (Lab 8) blocks every agent from approving or publishing.
