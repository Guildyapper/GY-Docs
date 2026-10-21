---
description: How to run /setup and configure GuildYapper for your server.
---

# Setup

Use `/setup` once after inviting GuildYapper. Setup chooses the server type, region, roles, and channels GuildYapper uses later.

```text
/setup
```

## Invite GuildYapper

Use the default invite for the smoothest setup:

[Invite GuildYapper](https://discord.com/oauth2/authorize?client_id=1238194592982110248)

GuildYapper uses Administrator by default to avoid setup failures while it creates or updates roles, channels, logs, signup messages, Trial Server structures, and other Discord resources. This is the recommended option for most servers, especially if you want Trial Server automation.

If your server prefers to grant permissions manually, use the minimal invite:

[Invite GuildYapper with minimal permissions](https://discord.com/oauth2/authorize?client_id=1238194592982110248&permissions=277025639488&integration_type=0&scope=bot+applications.commands)

With the minimal invite, some features may show Discord permission errors until you grant the missing permissions to the bot role or channel overrides. Common examples include creating roles, creating or reading channels, creating invites, renaming members, deleting messages, clearing signup channels, and removing failed trial members.

::: warning Admin Required
Only a Discord member with Administrator permission can run `/setup`. After setup, day-to-day GuildYapper admin actions use the configured officer/admin role.
:::

## Permissions And Privacy

GuildYapper does not have broad access to read normal Discord channel message text. Discord treats Message Content as a privileged intent that controls access to message fields such as content, embeds, attachments, and components. GuildYapper does not have that privileged intent approved, so Discord does not send it ordinary channel message text unless you directly interact with the bot in a way that provides data to it.

GuildYapper stores the information users and officers directly provide for the product, such as signups, attendance, roster/member profile details, gear information, configuration choices, and related bot workflow data.

Read Discord's explanation here: [What are Privileged Intents?](https://support-dev.discord.com/hc/en-us/articles/4404772028055-Message-Content-Privileged-Intent-FAQ)

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
| Guild / Alliance | Your Discord runs Node War, GvG, Guild League, or other guild events. | Signups, attendance, roster, platoons (in-game parties), Guild Tracker, Yap, scores. |
| Community | Your Discord is a public or community hub rather than one guild roster. | Guild Tracker, recruiting, merc posts, verification, tierlist updates, Yap. |
| Trial Server | You want a dedicated Discord for trial applicants. | Trial signup, automatic channels, trial history, trial ending flow. |

Read more in [Server Types](/getting-started/server-types).

## Recommended First Setup For A Guild

1. [Invite GuildYapper](https://discord.com/oauth2/authorize?client_id=1238194592982110248).
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

::: tip Default Platoons
Guild / Alliance setup creates starter Node War platoons such as Main, Defense, and Flex. You can adjust these later with `/configure parties`.
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
/configure parties
/configure profiles
/configure class
/member missing
/signup nodewar
/premium
```

| Goal | Where to go next |
| --- | --- |
| Create events | [Signups](/features/signups) |
| Configure platoons and function roles | [Platoons and Function Roles](/events/platoons) |
| Configure waitlist and priority behavior | [Waitlist and Priority](/events/waitlist-and-priority) |
| Change server settings | [Server Settings](/configuration/server-settings) |
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
