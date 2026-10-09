# Plugins for each agent (ChatGPT edition)

Install once from the Plugins tab (desktop app or web), sign in with your
PERSONAL Google account, then call them with @. Sites and $imagegen are
built in.

| Agent | May use | Limit |
|---|---|---|
| Marketing Team Lead | @Google Drive (read), @Gmail | @Gmail: drafts only |
| Growth Strategist | web search, @Google Drive (read) | cite every source |
| Content Creator | @Google Drive (docs), @Gmail | @Gmail: drafts only |
| Creative Designer | $imagegen; ffmpeg in Codex | no real or synthetic "clients" |
| Website Designer | @Sites, @Computer Use | publish only after approval |
| Growth Analyst | @Google Drive and Sheets (read); Python in Codex | no personal data in reports |

Least privilege: write each role's plugins and limits into its card in
agents/. Subagents inherit your sandbox and permissions, so keep Codex at
workspace-write. The approval gate (Lab 10) stops agents approving or
publishing.
