# Tierlists And Stats

GuildYapper has public website pages for guild tierlists, class tierlists, guild wars, Arena of Solare scores, streams, class popularity, and class performance.

<div class="quick-links">
  <a href="https://guildyapper.com/tierlist">NW Tierlist</a>
  <a href="https://guildyapper.com/class-tierlist">Class Tierlist</a>
  <a href="https://guildyapper.com/guildwars">Guild Wars</a>
  <a href="https://guildyapper.com/wars/solare">AOS Browser</a>
  <a href="https://guildyapper.com/wars/streams">Streams</a>
  <a href="https://guildyapper.com/class-statistics">Class Popularity</a>
  <a href="https://guildyapper.com/class-performance">Class Performance</a>
</div>

## What It Does

- Shows guild/alliance tierlists by region and tierlist context.
- Shows class/spec tierlist entries.
- Shows tierlist update history and methodology where available.
- Shows upcoming and past ranked GvG/Guild Wars pages.
- Shows Arena of Solare match scores and class/player stats.
- Shows streams with PvP-relevant keywords.
- Shows class popularity and class performance views.

## Who Can Use It

Most of these pages are public. Admin editing tools are only available to users with the relevant admin permissions.

## Required Permissions And Config

- Public browsing does not require a Guild / Alliance server.
- Tierlist editing requires tierlist admin permissions.
- Class tierlist editing requires class-tierlist admin permissions.
- Guild Wars data depends on ranked GvG signups and results.
- Class performance depends on available score/combat data.

## Guild Tierlists

Use [NW Tierlist](https://guildyapper.com/tierlist) to browse active alliances, tiers, update history, and methodology where present.

Community servers can also use:

```text
/tierlist updates announce:false days:7
/tierlist retire-guild guildname:Example region:EU
```

::: info Tierlist Contexts
Tierlists can be scoped by contexts such as siege or cap tiers. Use the website filters to make sure you are viewing the intended ladder.
:::

## Class Popularity And Performance

| Page | Use it for |
| --- | --- |
| [Class Popularity](https://guildyapper.com/class-statistics) | Class population, spec split, and trend views. |
| [Class Performance](https://guildyapper.com/class-performance) | Comparing classes by score-derived and combat-derived performance metrics. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the class performance overview.
  Suggested path: `/screenshots/stats/class-performance.webp`
</div>

## Guild Wars And AOS

- [Guild Wars](https://guildyapper.com/guildwars) shows ranked GvG information.
- [AOS Browser](https://guildyapper.com/wars/solare) shows Arena of Solare score and class/player views.
- [Streams](https://guildyapper.com/wars/streams) surfaces streams with PvP-relevant titles such as Nodewar, NW, AOS, or RBF.

## Common Issues

### A ranked GvG is missing

Make sure the GvG signup was created as ranked and closed with a result.

### A stream does not appear

The stream title needs a PvP-relevant keyword.

### Class stats look incomplete

Stats depend on the available score and combat data for the selected filters.
