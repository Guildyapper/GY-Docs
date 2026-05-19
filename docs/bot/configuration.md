# Configuration

Most server settings live under `/configure`. Use it after `/setup` to fine-tune GuildYapper for your guild.

```text
/configure server
/configure nwparty
/configure class
/configure member member:@Member
/configure scheduler
/configure guildfilter file:guilds.txt
```

## What It Does

Configuration controls server identity, permissions, Guild Tracker behavior, Yap settings, guild names, event channels, waitlist behavior, party logic, class priority, member overrides, and schedulers.

## Who Can Use It

Configuration is for officers/admins with the configured officer/admin role.

::: warning Changes Affect Live Workflows
Changing roles, channels, waitlist mode, guild names, or party settings can affect future signups and roster views. Make small changes and check the next signup before changing more.
:::

## Server Configuration

```text
/configure server
```

The server configuration screen has several tabs.

| Tab | What it controls |
| --- | --- |
| General | Server type, region, member role, officer/admin role, log channel, Yap, Yap cooldown, custom bot profile. |
| Guild Tracker | Tracker update type, update channel, custom guild filter. |
| Guild | Guild names, vacation channel, profile update channel, rename mode. |
| Nodewar | Node War voice channel, signup sort mode, waitlist mode, visible signup values, waitlist fair mode, move notifications, party swapping. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of `/configure server`.
  Suggested path: `/screenshots/configuration/server-config.webp`
</div>

## Yap Settings

Server config can enable or disable Yap, block all mentions in new yaps, and set a custom cooldown. The default cooldown is 3 minutes unless changed.

## Guild Tracker Settings

The tracker tab lets you decide what GuildYapper posts:

- All tracked guild updates.
- PvP-focused updates.
- Disabled tracker posting.

You can also use a custom guild filter so only selected tracked guilds are posted.

::: info Custom Guild Filter
`/configure guildfilter` uploads a text file. Keep it to up to 30 guild names and make sure the guilds already exist in the tracker list.
:::

## Guild Names

Guild names are used when members register and when GuildYapper groups member data for signups and roster views. A guild or alliance can add multiple guild names.

## Node War Modes

Node War settings include:

| Setting | Meaning |
| --- | --- |
| Signup sort mode | How members are ordered in signup lists. |
| Waitlist mode | How waitlisted members move into open spots. |
| Waitlist tie-breaker | What decides between members with equal priority. |
| Displayed values | Which member values appear on signups; family name always stays visible. |
| Waitlist fair mode | Adds priority for members who were waitlisted on previous Node Wars. |
| Waitlist move notifications | Can announce or DM members when they are moved from waitlist to attending. |
| Party swap | Lets members swap parties when enabled. |

## Class Priority

```text
/configure class
```

Class configuration lets officers define class/spec priorities and class type limits. These priorities can affect signup ordering, waitlist decisions, and party composition.

::: tip Class Priority Is A Planning Tool
Use it to express what your comp needs, not as a permanent judgment of members. Keep priorities understandable for officers.
:::

## Member Overrides

```text
/configure member member:@Member
```

Member configuration is for individual overrides, such as custom priority, party assignment, or display details used in signups.

## Common Issues

### Commands disappeared

Check server type in `/configure server`. Discord command sync depends on the current server type.

### Guild Tracker is disabled

Check your region and tracker tab. Guild Tracker is only supported for EU, NA, and SA.

### Yap messages mention everyone

Enable mention blocking in `/configure server`. Role mentions are blocked by default, and the stronger option blocks all mentions in newly added yaps.
