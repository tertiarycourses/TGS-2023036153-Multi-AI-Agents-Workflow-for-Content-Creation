# The research team — four sub-agents (Lab 1)

| Agent | Job | Reads | Writes |
|---|---|---|---|
| market-researcher | Who in Singapore looks for financial planning, on which channels, why now; demand signals and trends. Web research. | business-brief.md | research/market-research.md |
| business-analyst | The funnel from firm-metrics.csv: visits → enquiries → chats → plans; conversion rates; what 40 chats/month needs; budget per chat. Calculates, does not guess. | firm-metrics.csv, services.csv | research/business-analysis.md |
| competitive-analyst | Six named Singapore competitors across four types (planning firms, robo-advisers, bank advisers, finfluencers): offer, pricing model, channels, content themes, gaps. Web research. | business-brief.md | research/competitive-analysis.md |
| strategy-advisor | Reads the three reports and writes the recommendation. Waits for the other three. | research/*.md | research/recommendation.md |

## Rules for every agent
- Cite every figure with its source and date. If it cannot be sourced,
  write UNKNOWN — never a plausible guess.
- The INTERNAL columns in services.csv are for analysis only. They never
  appear in anything public.
- Write in plain English, under 600 words per report.

## recommendation.md must contain
1. A one-line positioning statement.
2. The 2 personas to target first, and why.
3. The 3 channels to start with, and why.
4. Four content themes.
5. Five things the website must do to convert a visitor.
6. The top 3 risks, including regulatory ones.
