---
description: Guild League signups with automatic time slots, officer actions, and the public match browser and standings.
---

# Guild League

Guild League runs on its own signup command, generating time slots for the matches the game will actually run, instead of one fixed slot for the whole window.

<div class="quick-links">
  <a href="https://guildyapper.com/wars/guild-league">Match Browser</a>
  <a href="https://guildyapper.com/wars/guild-league/rankings">Standings</a>
</div>

## Who Can Use It

Officers create the signup. Any member with the required role takes a timeslot. The public match browser and standings need no account.

## Create A Signup

```text
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guild
```

| Option | Required | Meaning |
| --- | --- | --- |
| `date` | Yes | Format `dd.MM.yyyy`. |
| `start-time` | Yes | When the queue starts. EU uses Europe/Berlin, NA uses America/New_York. |
| `end-time` | Yes | When the queue ends. Each end time tells you how many slots it buys. |
| `role` | No | Role to ping, and to restrict the signup to when that toggle is on. |
| `vc` | No | Voice channel checked by the "missing in voice" action. Leave it out to count any voice channel on the server. |
| `interval` | No | Minutes between time slots. Defaults to 20, the game's match cycle. |
| `nodewar-slots` | No | Set `True` to keep slots inside the node war window, which the game normally blocks. |

::: info How Slot Timing Works
Guild League matches run every 20 minutes and cannot start during node war. The `start-time`/`end-time` autocomplete only offers times the game will actually match. Because the time fields accept any typed value, `interval` and `nodewar-slots` together let you build a signup that runs off the game's default cycle.
:::

## Officer Actions

Guild League signups add officer actions on top of the usual signup management menu:

- Refresh message, useful when menus get stuck.
- Ping members missing from voice for the next match.
- Ping all participants of the next match.
- Ping members who have not responded yet.

::: warning Restrict Signups To Mentioned Role Is Server-Wide
The **Restrict signups to mentioned role** toggle applies to every signup on the server, not just the Guild League signup you're creating or managing.
:::

## Signing Up

On the website, a member takes a timeslot by picking a role: **Tank**, **DPS**, or **Shai**. Each entry shows the member's gearscore. Upcoming, Past, and All tabs let members browse timeslots by status.

## Match Browser

The Match Browser is public and lists matches submitted through Ikusa. It includes match tabs, class statistics, and guild/player statistics, with filters for season, guild, and visibility. Each match has a per-player scoreboard covering kills, deaths, damage dealt, damage taken, healing, and CC. Every match accepts a VOD.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Guild League match browser.
  Suggested path: `/screenshots/signups/guild-league-browser.webp`
</div>

## Standings

Standings show the in-game top 100, captured by players through Ikusa and kept as dated history. Each capture can be compared against the previous one, with highlights for the biggest climb, the biggest drop, and the most points gained. The table itself covers rank, movement, guild, guild master, W/L, win rate, and score change.

::: warning Not An Official Feed
Standings depend on players submitting Ikusa captures. This is not an official feed from the game, just a history built from what players have uploaded.
:::

See [Scores](/features/scores) for war score sessions, and [VOD Reviews](/scores/vod-reviews) for reviewing submitted match VODs.
