---
description: The full list of GuildYapper's user-facing slash commands, grouped by area.
---

# Slash Commands

This page lists the user-facing slash commands found in GuildYapper's Discord bot, with a **Who** column showing who typically reaches for each one.

::: info Server Type Matters
Guild / Alliance, Community, and Trial Server are different Discord server types, chosen in `/setup`. Discord only shows the commands your server type unlocks — Community and Trial commands never appear on a Guild / Alliance server, and vice versa. The bot's own built-in `/help` menu can lag behind; this page follows what Discord actually registers.
:::

::: tip Member Vs Officer
**Member** commands are available to anyone with the configured member role. **Officer** commands require the configured officer/admin role. If the wrong people can or cannot use a command, check `/configure server`.
:::

## Setup And Help

```text
/setup
/help
/premium
```

| Command | Who | Use |
| --- | --- | --- |
| `/setup` | Officer | First-time server setup. Administrator permission required. |
| `/help` | Member | Opens the command help menu. |
| `/premium` | Member | Shows Premium status, trial, store, subscription, and donation buttons. |

## Configuration

```text
/configure server
/configure parties
/configure profiles
/configure class
/configure member member:@Member
/configure scheduler
/configure guildfilter file:guilds.txt
/priority view
```

| Command | Who | Use |
| --- | --- | --- |
| `/configure server` | Officer | Server type, region, roles, channels, Yap, tracker, guild names, and Node War behavior. |
| `/configure parties` | Officer | Platoons (in-game parties) and function roles: Discord role, priority, limit, reduction, class exclusion, size, overflow, and target. |
| `/configure profiles` | Officer | Signup profiles per event type — which platoons and function roles each event layout offers. |
| `/configure class` | Officer | Class/spec priorities and class type priority limits. |
| `/configure member` | Officer | Individual member configuration. |
| `/configure scheduler` | Officer | Reminder and automation schedules. |
| `/configure guildfilter` | Officer | Upload custom Guild Tracker filter file. |
| `/priority view` | Officer | Paginated priority overview by Family, Priority, and Class, with Member list, Config overview, and Get CSV buttons. See [Waitlist and Priority](/events/waitlist-and-priority). |

## Signups

```text
/signup nodewar date:19.05.2026 max-attendance:55
/signup gvg date:19.05.2026 time:20:00 max-attendance:40 enemy-guild:EnemyGuild match-type:Ranked
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guild
/signup custom type:Practice date:19.05.2026 time:20:00 max-attendance:30
/signup list
```

| Command | Who | Use |
| --- | --- | --- |
| `/signup nodewar` | Officer | Create a Node War signup. |
| `/signup gvg` | Officer | Create a ranked or practice GvG signup. |
| `/signup gleague` | Officer | Create Guild League signup time slots. |
| `/signup custom` | Officer | Create a custom event signup. |
| `/signup list` | Officer | List and manage existing signups. |

## Attendance

```text
/attendance me
/attendance member member:@Member
/attendance overview
/attendance export
```

| Command | Who | Use |
| --- | --- | --- |
| `/attendance me` | Member | View your own attendance. |
| `/attendance member` | Officer | View one member's attendance. |
| `/attendance overview` | Officer | View server attendance overview. |
| `/attendance export` | Officer | Export attendance to CSV. |

## Members

```text
/member update
/member view member:@Member
/member list sorting:gearscore
/member missing
/stats classes
```

| Command | Who | Use |
| --- | --- | --- |
| `/member update` | Member | Update your own member details. |
| `/member view` | Member | View one member's gear/profile information. |
| `/member list` | Officer | List members sorted by gearscore, class, or guild. |
| `/member missing` | Officer | Mention or list members who have not registered yet. |
| `/stats classes` | Member | View your server's class distribution among registered members. |

## Scores

```text
/scores menu
/scores upload file:score.png
```

| Command | Who | Use |
| --- | --- | --- |
| `/scores menu` | Member | Open the Discord score menu. |
| `/scores upload` | Officer | Upload BDO war scores — screenshots or a `.csv` export. |

## Guild Tracker

```text
/guild add guildname:Example guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Example region:EU
/guild members guild:Example region:EU
/guild consistency guild:Example region:EU
/player history player:FamilyName region:EU
/player profile player:FamilyName region:EU
```

| Command | Use |
| --- | --- |
| `/guild add` | Add a guild to track. |
| `/guild list` | List tracked guilds. |
| `/guild history` | View guild history. |
| `/guild members` | View current member list of a guild. |
| `/guild consistency` | View guild consistency info. |
| `/player history` | View player guild history. |
| `/player profile` | View a player profile. |

::: warning Tracker Region Limit
Guild Tracker commands are available for EU, NA, and SA.
:::

## Yap

```text
/addyap content:Your yap message
/yap
```

| Command | Who | Use |
| --- | --- | --- |
| `/addyap` | Member | Add a new yap message. |
| `/yap` | Member | Post a random yap. |

## Community Commands

```text
/recruiting register guildname:Example dc-server-link:https://discord.gg/example gs-requirement:700
/recruiting update
/recruiting remove
/merc lf-signup
/verify post
/tierlist updates announce:false
/tierlist retire-guild guildname:Example region:EU
```

| Command | Use |
| --- | --- |
| `/recruiting register` | Register a guild in the recruitment browser. |
| `/recruiting update` | Update your guild recruitment entry. |
| `/recruiting remove` | Remove your guild recruitment entry. |
| `/merc lf-signup` | Post a looking-for-merc signup. |
| `/verify post` | Post a verification message. |
| `/tierlist updates` | View or announce tierlist updates. |
| `/tierlist retire-guild` | Retire a guild from tierlist Discord updates. |

## Trial Commands

```text
/trial signup
/trial configure
/trial end result:passed reason:Good fit trialee:FamilyName
```

| Command | Use |
| --- | --- |
| `/trial signup` | Re-send the trial signup message. |
| `/trial configure` | Re-configure Trial Server settings. |
| `/trial end` | End a trial as passed or failed with a reason. |

## Website Quick Links

<div class="quick-links">
  <a href="https://guildyapper.com/profile">Profile</a>
  <a href="https://guildyapper.com/management/signups">Signups</a>
  <a href="https://guildyapper.com/management/roster">Roster</a>
  <a href="https://guildyapper.com/management/scores">Scores Management</a>
  <a href="https://guildyapper.com/scores">Personal Scores</a>
  <a href="https://guildyapper.com/guild-tracker/dashboard">Guild Tracker</a>
</div>
