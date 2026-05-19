# Scores

Scores let your guild collect war results from screenshot uploads or Ikusa logs, then review sessions on Discord and the website.

<div class="quick-links">
  <a href="https://guildyapper.com/management/scores">Scores Management</a>
  <a href="https://guildyapper.com/scores">Personal Scores</a>
  <a href="https://guildyapper.com/class-performance">Class Performance</a>
</div>

## What It Does

- Uploads BDO war score screenshots through Discord or the website.
- Supports multiple screenshot attachments in one Discord upload.
- Supports Ikusa logger uploads on the website.
- Links score sessions to signups where possible.
- Shows alliance, guild, player, class, and session-level breakdowns.
- Gives members personal score history and analytics.

## Who Can Use It

Members can upload and view personal scores where allowed. Officers manage server score sessions.

## Required Permissions And Config

- Guild / Alliance server type.
- Member role for normal access.
- Officer/admin role for management pages and corrections.
- A signup is useful when you want scores tied to an event.

## Discord Commands

```text
/scores menu
/scores upload file:score.png
```

You can upload one required screenshot plus additional optional screenshots.

::: tip Use Clear Screenshots
BDO OCR depends on image quality. Use clean, readable scoreboard screenshots and avoid heavy compression.
:::

## BDO OCR Scores

BDO OCR uses in-game scoreboard screenshots. It is fast and easy because any member can upload screenshots, but OCR may need review when the image is low quality.

Common BDO score fields include kills, deaths, damage, damage taken, CCs, fort damage, cannon stats, traps, healing, and alive/death time where available.

## Ikusa Scores

Ikusa uploads use log data from the Ikusa logger. They can provide alliance-wide combat detail, enemy alliance/guild breakdowns, killfeed context, killstreaks, and class/player relationships.

::: info Two Score Sources
GuildYapper keeps BDO OCR and Ikusa as separate score sources. The website lets you switch between them where both are available.
:::

## Website Score Pages

| Page | Link | Use it for |
| --- | --- | --- |
| Scores Management | [Open](https://guildyapper.com/management/scores) | Officer upload, review, and session management. |
| Personal Scores | [Open](https://guildyapper.com/scores) | Member personal uploads, bookmarks, and stats. |
| Class Performance | [Open](https://guildyapper.com/class-performance) | Comparing class-level performance from score data. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of a score session detail page.
  Suggested path: `/screenshots/scores/session-detail.webp`
</div>

## Common Issues

### OCR got a value wrong

Use the website management page to review and correct the session if you have officer access.

### The score is not linked to a signup

Choose the related signup during upload or manage the session afterwards if the page offers the association.

### A member cannot see personal stats

Make sure their GuildYapper profile/family name matches the uploaded score data closely enough to resolve them.
