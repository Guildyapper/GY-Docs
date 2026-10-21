---
description: How guild and player detection works, PvP/PvX tracking, and the website Guild Tracker dashboard.
---

# Guild Tracker

Guild Tracker helps communities follow guild membership, guild history, player history, and consistency across supported regions.

<div class="quick-links">
  <a href="https://guildyapper.com/guild-tracker/dashboard">Dashboard</a>
  <a href="https://guildyapper.com/guild-tracker/guilds">Guilds</a>
  <a href="https://guildyapper.com/guild-tracker/players">Players</a>
</div>

## What It Does

- Adds guilds to the tracked guild list.
- Shows tracked guild lists by region and type.
- Shows guild history.
- Shows current members of a guild.
- Shows guild consistency information.
- Shows player history and player profiles.
- Can post tracker updates to a configured Discord channel.
- Powers the website's Guild Tracker pages, which require Discord login.

## What Gets Detected

Guild Tracker publishes to the configured channel every day at **13:00 server time**. Each run can detect:

- Guild entries and exits.
- Guild renames and player renames.
- Guild dissolutions.
- Deleted accounts.

## Who Can Use It

Guild / Alliance and Community servers can use Guild Tracker commands in supported regions. Some add/configuration actions are officer/admin oriented.

## Required Permissions And Config

- Server region must be EU, NA, or SA.
- Guild Tracker update type and channel configured in `/setup` or `/configure server`.
- Tracked guild must exist in the tracker list before it can be included in a custom filter.

::: warning Unsupported Regions
Guild Tracker commands are not supported for RU, MENA, SEA, KR, or JP server regions.
:::

## Discord Commands

```text
/guild add guildname:Example guildtype:PVP region:EU
/guild list region:EU type:PVP
/guild history guild:Example region:EU
/guild members guild:Example region:EU
/guild consistency guild:Example region:EU
/player history player:FamilyName region:EU
/player profile player:FamilyName region:EU
```

`guildtype` classifies a tracked guild as **PVP** or **PVX**; `/guild list` filters on that same classification and splits its response into active guilds and dissolved guilds.

::: info Most Tracker Commands Are Private By Default
Almost every Guild Tracker command accepts a `private` parameter, and it is on by default.
:::

## Tracker Update Types

Tracker posting is configured in `/configure server`.

| Setting | Meaning |
| --- | --- |
| All | Posts broader tracker updates. |
| PvP only | Limits tracker posting to PvP-focused tracking. |
| Disabled | Keeps tracker commands available but stops update posting. |

## Custom Guild Filter

Use a custom filter when your server only cares about a specific list of guilds.

```text
/configure guildfilter file:guilds.txt
```

The uploaded file should contain guild names, one per line.

::: info Filter Limits
Keep custom tracker filters to up to 30 guild names. Guilds not already in the tracker list should be added first with `/guild add`.
:::

## On The Website

The Guild Tracker dashboard requires logging in with Discord.

It filters by **All guilds**, **PvP**, **PvX**, and **NW alliances**, and its top-level indicators cover tracked guilds, players, entries, exits, and renames, each with its 24-hour change.

A **movement feed** covers the last three days across three tabs: entries and exits, renames, and alerts. Each row shows how long the person had been in the guild before the move, and auto-tags flag patterns like **guild hopper** and **likely temporary**.

A gains-and-losses panel highlights the biggest risers and fallers over two weeks, and shows which guild each mover came from or went to.

Guild and player detail pages give the full history behind any name in the feed.

The website provides larger views for tracker data:

- [Dashboard](https://guildyapper.com/guild-tracker/dashboard): broad overview.
- [Guilds](https://guildyapper.com/guild-tracker/guilds): searchable guild list and details.
- [Players](https://guildyapper.com/guild-tracker/players): searchable player list and details.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the movement feed.
  Suggested path: `/screenshots/guild-tracker/movement-feed.webp`
</div>

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Guild Tracker dashboard.
  Suggested path: `/screenshots/guild-tracker/dashboard.webp`
</div>

## Common Issues

### Guild Tracker commands say the region is unsupported

Your server region is not EU, NA, or SA. Change region only if the server was configured incorrectly.

### A guild is not in the filter

Make sure the guild is tracked first, then upload the custom filter again.

### Website data and Discord command results differ

Check that you are using the same region and the same guild name spelling.
