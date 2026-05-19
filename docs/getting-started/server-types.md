# Server Types

GuildYapper changes its available commands based on the server type selected during `/setup`. This keeps a guild Discord from being cluttered with community-only tools, and keeps a trial Discord focused on trials.

```text
/setup
/configure server
```

## Guild / Alliance

Use this for a guild or alliance Discord that runs events and manages a member roster.

### What It Unlocks

- Node War, GvG, Guild League, and custom signups.
- Attendance and signup history.
- Roster and member profile management.
- Node War parties, waitlist behavior, and class priority.
- Guild Tracker lookup and updates in supported regions.
- Scores and score uploads.
- Yap.
- Premium automation and customization.

### Who Can Use It

Members with the configured member role can use regular member tools. Officers/admins with the configured officer role can manage signups, server settings, parties, rosters, schedules, and other admin tools.

### Best For

Guilds that need one place for:

1. Planning wars.
2. Handling waitlists.
3. Keeping a roster clean.
4. Reviewing attendance and score history.
5. Giving members profile and score visibility on the website.

## Community

Use this for a public community Discord, regional hub, or BDO PvP community server.

### What It Unlocks

- Guild Tracker lookup.
- Recruiting browser commands.
- Merc signup post commands.
- Verification message posting.
- Tierlist update tools.
- Yap.

### What It Does Not Include

Community servers do not get guild event management commands such as `/signup nodewar` or roster attendance tooling.

::: info Community Servers Are Public-Tool Focused
Community mode is meant for servers that help many guilds or players, not one private guild roster.
:::

## Trial Server

Use this only for a dedicated trial Discord.

### What It Unlocks

- Automatic TrialMaster and Trialee roles.
- Trial signup message.
- Private trial channels for applicants.
- Trial history.
- Trial end flow with passed/failed outcomes.
- Player and guild lookup commands.

### What Setup Creates

Trial Server setup creates:

| Type | Created by setup |
| --- | --- |
| Roles | `TrialMaster`, `Trialee` |
| Categories | `Staff`, `Trialee`, `Trials`, `Archive` |
| Text channels | `signup`, `trial-history`, `staff` |
| Voice channels | `Staff`, `General`, `GroupFights-1`, `GroupFights-2` |
| Message | A Trial Signup message with a button |

::: warning Use A Fresh Trial Discord
Trial Server setup creates roles, channels, categories, permissions, and an invite. Use it on a new dedicated Discord whenever possible.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the generated Trial Server channel layout.
  Suggested path: `/screenshots/trials/trial-server-layout.webp`
</div>

## Changing Server Type Later

Use `/configure server` to view and change the server type. Changing into Guild / Alliance mode creates default class configs and Node War parties if they are missing.

::: warning Be Careful With Server Type Changes
Changing server type affects which commands GuildYapper syncs to Discord. If users say commands disappeared, check the current server type first.
:::
