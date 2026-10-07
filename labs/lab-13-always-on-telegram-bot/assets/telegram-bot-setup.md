# A Telegram bot for Hermes (Lab 13)

1. In Telegram, open @BotFather -> /newbot -> a name and a username ending
   in "bot". Copy the token.
2. Find your Telegram user id (e.g. message @userinfobot).
3. `hermes gateway setup` -> Telegram -> paste the token; allow only your
   user id.
4. `hermes gateway start` (or `hermes gateway install` to run it as a
   service). The gateway also runs scheduled jobs and the Kanban dispatcher.
5. Message your bot "hello" — Hermes answers.
No Telegram? Use delivery "local": results are saved as files.
