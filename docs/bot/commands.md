# Discord Command Overview

GuildYapper commands are slash commands. Discord only shows commands that fit your server type.

```text
/help
```

::: info Start With Help
`/help` shows a command overview inside Discord and is the quickest way to confirm what is available in your server.
:::

## Everyday Member Commands

These are the commands most members interact with.

```text
/member update
/member view member:@Member
/attendance me
/yap
/addyap content:Your message
/scores menu
/premium
```

| Command | What it does |
| --- | --- |
| `/member update` | Opens the member update flow for your own GuildYapper profile. |
| `/member view` | Shows a member's gear/profile overview. |
| `/attendance me` | Shows your own attendance summary. |
| `/yap` | Posts a random saved yap when Yap is enabled. |
| `/addyap` | Adds a new yap message if it passes mention checks. |
| `/scores menu` | Opens the score menu in Discord. |
| `/premium` | Shows Premium status, trial, store, and subscription options. |

## Officer Commands

Officers/admins use these to configure and operate the server.

```text
/configure server
/configure parties
/configure profiles
/configure class
/configure member member:@Member
/configure scheduler
/signup nodewar
/signup gvg
/signup gleague
/signup custom
/signup list
/attendance overview
/attendance member member:@Member
/attendance export
/member list sorting:gearscore
/member missing
/scores upload file:score.png
```

::: warning Permissions
Officer actions require the configured officer/admin role. If the wrong people can use or cannot use commands, check `/configure server`.
:::

## Tracker Commands

Guild Tracker commands are available in supported regions.

```text
/guild add guildname:Example guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Example region:EU
/guild members guild:Example region:EU
/guild consistency guild:Example region:EU
/player history player:FamilyName region:EU
/player profile player:FamilyName region:EU
```

::: warning Region Limit
Guild Tracker commands are not supported for RU, MENA, SEA, KR, or JP server regions.
:::

## Community Commands

Community servers can use public coordination tools.

```text
/recruiting register guildname:Example dc-server-link:https://discord.gg/example gs-requirement:700
/recruiting update
/recruiting remove
/merc lf-signup
/verify post
/tierlist updates announce:false
```

## Trial Server Commands

Trial Servers get trial-specific commands.

```text
/trial signup
/trial configure
/trial end result:passed reason:Good fit trialee:FamilyName
```

## Full Command Reference

For a complete list grouped by area, see [Slash Commands](/reference/commands).
