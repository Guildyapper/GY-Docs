# Setup

Use `/setup` once after inviting GuildYapper. Setup chooses the server type, region, roles, and channels GuildYapper uses later.

```text
/setup
```

::: warning Admin Required
Only a Discord member with Administrator permission can run `/setup`. After setup, day-to-day GuildYapper admin actions use the configured officer/admin role.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the first `/setup` screen here.
  Suggested path: `/screenshots/setup/setup-start.webp`
</div>

## What Setup Does

Setup stores the basic server configuration and enables the command set for the selected server type.

1. You select the region.
2. You select the server type.
3. You select the member role and officer/admin role.
4. You select or create a bot log channel.
5. For Guild / Alliance and Community servers, you configure Guild Tracker posting.
6. For Guild / Alliance servers, you configure guild names and event channels.
7. For Trial Servers, GuildYapper creates the trial structure automatically.

::: info Setup Can Be Changed Later
Most setup choices can be changed with `/configure server`. If the bot was set up for the wrong kind of server and you want a full reset, remove the bot and invite it again.
:::

## Regions

Setup supports these regions and time zones:

| Region | Time zone used by GuildYapper |
| --- | --- |
| EU | Europe/Berlin |
| NA | America/New_York |
| SA | America/Sao_Paulo |
| SEA | Asia/Singapore |
| KR | Asia/Seoul |
| JP | Asia/Tokyo |
| RU | Europe/Moscow |
| MENA | Europe/Istanbul |

::: warning Guild Tracker Region Support
Guild Tracker commands are available for EU, NA, and SA. RU, MENA, SEA, KR, and JP can still complete setup, but Guild Tracker commands are skipped or disabled.
:::

## Server Types

| Server type | Choose it when | Main tools |
| --- | --- | --- |
| Guild / Alliance | Your Discord runs Node War, GvG, Guild League, or other guild events. | Signups, attendance, roster, parties, Guild Tracker, Yap, scores. |
| Community | Your Discord is a public or community hub rather than one guild roster. | Guild Tracker, recruiting, merc posts, verification, tierlist updates, Yap. |
| Trial Server | You want a dedicated Discord for trial applicants. | Trial signup, automatic channels, trial history, trial ending flow. |

Read more in [Server Types](/getting-started/server-types).

## Recommended First Setup For A Guild

1. Invite GuildYapper.
2. Run `/setup`.
3. Choose your region.
4. Choose `Guild / Alliance`.
5. Select the member role that regular guild members have.
6. Select the officer/admin role that can manage GuildYapper.
7. Select a log channel for member, attendance, signup, and config changes.
8. Choose a Guild Tracker update type.
9. Select a channel for Guild Tracker updates.
10. Add the guild names that belong to your guild or alliance.
11. Review `/help` and open `/configure server`.

```text
/setup
/help
/configure server
```

::: tip Default Parties
Guild / Alliance setup creates starter Node War parties such as Main, Defense, and Flex. You can adjust these later with `/configure nwparty`.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the completed setup summary or `/configure server` overview.
  Suggested path: `/screenshots/setup/setup-complete.webp`
</div>

## After Setup

The next useful actions are:

```text
/configure server
/configure nwparty
/configure class
/member missing
/signup nodewar
/premium
```

| Goal | Where to go next |
| --- | --- |
| Create events | [Signups](/features/signups) |
| Configure parties and waitlist behavior | [Parties and Waitlist](/features/parties-and-waitlist) |
| Let members update their profile | [Members and Roster](/bot/members-and-roster) |
| Enable reminders and automation | [Schedulers](/bot/schedulers) |
| Check paid and trial status | [Premium](/premium) |

## Common Issues

### "Server is already setup"

The server already has GuildYapper configuration. Use:

```text
/configure server
```

### Guild Tracker is missing

Guild Tracker is only supported for EU, NA, and SA. If your server region is RU, MENA, SEA, KR, or JP, those commands are not available.

### The wrong people can use commands

Check the configured member and officer/admin roles in:

```text
/configure server
```

### A setup session expired

Run `/setup` again. Interactive setup screens can expire if they sit unused for too long.
