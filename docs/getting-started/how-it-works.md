---
description: "How the Discord bot and the website divide the work, and how regions scope what you see."
---

# How GuildYapper Works

## Who Can Use It

This page is for anyone — no login needed to read it. GuildYapper itself is a mix: some Discord commands and website pages are public, and some require Discord login. See [What Needs A Login](#what-needs-a-login) below for the exact split.

## Two Surfaces, One System

GuildYapper is a Discord bot and a website working from the same data, not two separate products.

- **The bot** is best for quick actions: creating a signup, updating your profile, checking `/priority view`, uploading a score screenshot — things you do in the moment, inside Discord.
- **The website** is best when you need tables, filters, charts, bulk roster editing, or a detail page — the things a Discord modal is too small for.

A signup created in Discord appears on the website, and edits made on the website update the same underlying event or member record the bot reads. `/configure server` itself has a **Manage on Website** button that jumps you straight into the matching website page.

## What Needs A Login

| Area | Access |
| --- | --- |
| Tierlists, Guild Wars, Arena of Solare, Class Statistics, Streams, Tools, Guild League browser and standings | Public, no account |
| Guild Tracker dashboard, guilds and players | Discord login required |
| Signups, roster, scores management, settings, profile, VOD upload | Discord login, and membership of a server running GuildYapper |

::: warning Guild Tracker Is Not Public
Guild Tracker's website pages require Discord login. Only the areas in the first row above are open to anyone without an account.
:::

## What Officers Usually Use

1. [Signups](https://guildyapper.com/management/signups) to manage event attendance.
2. [Roster](https://guildyapper.com/management/roster) to review and edit member data.
3. [Scores Management](https://guildyapper.com/management/scores) to upload and correct war score sessions.
4. [Guild Tracker Dashboard](https://guildyapper.com/guild-tracker/dashboard) to watch tracked guild activity.
5. [Class Performance](https://guildyapper.com/class-performance) to compare class results across data sources.

## What Members Usually Use

1. [Profile](https://guildyapper.com/profile) to keep their own info current.
2. [Personal Scores](https://guildyapper.com/scores) to review uploads, bookmarks, and stats.
3. [Signups](https://guildyapper.com/management/signups) when officers want members to inspect event details on the website.

## Regions

GuildYapper uses "region" in three separate places. They are independent of each other — changing one does not change the others.

1. **Bot command default** — the region chosen during [`/setup`](/getting-started/setup) sets the default region for the bot's own commands, such as `/guild list` or `/player history`, in that Discord server.
2. **Website region selector** — the website has its own region selector at the top of the page, separate from any Discord server's setup. It rescopes tierlists, Guild Tracker, streams, and class statistics to the chosen region, and includes a **World** view that combines all regions.
3. **Member profile region** — a member's profile is stored per region. Family name, gear, and class apply to whichever region is currently selected when the profile is viewed or edited.

::: info Don't Conflate These Three
A member registered under the EU region will not show up when the website region selector is set to NA, even in the same Discord server. Before assuming data is missing, check which of the three scopes above you're actually looking at.
:::

## Where To Go Next

| Goal | Where to go next |
| --- | --- |
| Run first-time setup | [Setup](/getting-started/setup) |
| Understand server types before choosing one | [Server Types](/getting-started/server-types) |
| Walk through a full Node War from setup to signup | [First Node War tutorial](/getting-started/first-node-war) |

## Common Issues

### I cannot see my server on the website

Make sure you are logged in with the Discord account that is in the server and has the configured member role.

### I can view a page but cannot edit it

Editing requires officer/admin privileges for that GuildYapper server.

### My member data looks outdated

Update your profile on the website, or with:

```text
/member update
```
