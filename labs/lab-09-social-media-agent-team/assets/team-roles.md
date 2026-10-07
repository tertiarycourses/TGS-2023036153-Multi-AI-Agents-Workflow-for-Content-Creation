# Team roles — subagent definitions (Lab 9)

Create one file per role in .claude/agents/<name>.md. The same definitions
work as ordinary subagents AND as agent-team teammates ("spawn a teammate
using the compliance-reviewer agent type").

| name | description (when to use it) | tools | model |
|---|---|---|---|
| researcher | Gathering and checking the facts a Horizon post, email or video needs. Never writes the content. | Read, Grep, Glob, SendMessage | sonnet |
| social-writer | Writing Horizon LinkedIn and Facebook posts from the researcher's fact sheet, in sunny-voice and channel-formats. | Read, Write, Edit, Bash, SendMessage | sonnet |
| compliance-reviewer | Before any Horizon content reaches a person: checks facts and compliance, messages the writer, passes only when no Critical or High issue remains. Never edits. | Read, Grep, Glob, SendMessage | opus |

The compliance-reviewer preloads two skills in its frontmatter:

```
skills:
  - fact-check
  - fin-compliance
```

Body of each file: the role in plain words — what it reads, what it hands
back, and what it must never do (approve, publish --live, invent a number).
Note: a teammate loads skills from the project, not from this list; the
list matters when the role runs as a subagent.
