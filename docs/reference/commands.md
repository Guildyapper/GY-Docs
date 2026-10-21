# Slash Commands

This page lists the user-facing slash commands found in GuildYapper's Discord bot. Discord may show fewer commands depending on your server type.

::: info Server Type Matters
Guild / Alliance, Community, and Trial Server mode do not share the exact same command set. If a command is missing, check `/configure server`.
:::

## Setup And Help

```text
/setup
/help
/premium
```

| Command | Use |
| --- | --- |
| `/setup` | First-time server setup. Administrator permission required. |
| `/help` | Opens the command help menu. |
| `/premium` | Shows Premium status, trial, store, subscription, and donation buttons. |

## Configuration

```text
/configure server
/configure parties
/configure profiles
/configure class
/configure member member:@Member
/configure scheduler
/configure guildfilter file:guilds.txt
```

| Command | Use |
| --- | --- |
| `/configure server` | Server type, region, roles, channels, Yap, tracker, guild names, and Node War behavior. |
| `/configure parties` | Platoons (in-game parties) and function roles: Discord role, priority, limit, reduction, class exclusion, size, overflow, and target. |
| `/configure profiles` | Signup profiles per event type — which platoons and function roles each event layout offers. |
| `/configure class` | Class/spec priorities and class type priority limits. |
| `/configure member` | Individual member configuration. |
| `/configure scheduler` | Reminder and automation schedules. |
| `/configure guildfilter` | Upload custom Guild Tracker filter file. |

## Signups

```text
/signup nodewar date:19.05.2026 max-attendance:55
/signup gvg date:19.05.2026 time:20:00 max-attendance:40 enemy-guild:EnemyGuild match-type:Ranked
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guild
/signup custom type:Practice date:19.05.2026 time:20:00 max-attendance:30
/signup list
```

| Command | Use |
| --- | --- |
| `/signup nodewar` | Create a Node War signup. |
| `/signup gvg` | Create a ranked or practice GvG signup. |
| `/signup gleague` | Create Guild League signup time slots. |
| `/signup custom` | Create a custom event signup. |
| `/signup list` | List and manage existing signups. |

## Attendance

```text
/attendance me
/attendance member member:@Member
/attendance overview
/attendance export
```

| Command | Use |
| --- | --- |
| `/attendance me` | View your own attendance. |
| `/attendance member` | View one member's attendance. |
| `/attendance overview` | View server attendance overview. |
| `/attendance export` | Export attendance to CSV. |

## Members

```text
/member update
/member view member:@Member
/member list sorting:gearscore
/member missing
```

| Command | Use |
| --- | --- |
| `/member update` | Update your own member details. |
| `/member view` | View one member's gear/profile information. |
| `/member list` | List members sorted by gearscore, class, or guild. |
| `/member missing` | Mention or list members who have not registered yet. |

## Scores

```text
/scores menu
/scores upload file:score.png
```

| Command | Use |
| --- | --- |
| `/scores menu` | Open the Discord score menu. |
| `/scores upload` | Upload BDO war score screenshots. |

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

| Command | Use |
| --- | --- |
| `/addyap` | Add a new yap message. |
| `/yap` | Post a random yap. |

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
