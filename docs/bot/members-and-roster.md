---
description: How GuildYapper tracks member profiles, gear, class/spec, and roster data across Discord and the website.
---

# Members And Roster

Member tools keep your GuildYapper roster usable: who is registered, which class/spec they play, their guild, gear, platoon (in-game party) assignment, attendance history, priority, and score snapshots.

<div class="quick-links">
  <a href="https://guildyapper.com/profile">Profile</a>
  <a href="https://guildyapper.com/management/roster">Roster</a>
</div>

## What It Does

- Lets members update their own profile.
- Lets officers view, sort, and filter the roster.
- Shows member details such as GS, AP, AAP, and DP, class/spec, guild, platoon, attendance, and scores.
- Helps officers find members who have not registered yet.
- Supports officer configuration for individual member settings such as priority, platoon, and signup display labels.

## Who Can Use It

Members can update and view their own information. Officers can manage member data and review server-wide roster views.

## Required Permissions And Config

- Member role configured in `/configure server`.
- Officer/admin role configured in `/configure server`.
- Guild names configured if your members should pick from known guilds.
- Optional profile update channel for gear updates and monthly gear change roundups.

```text
/configure server
/configure member member:@Member
```

`/configure member` also sets a member's platoon (in-game party) with `party`, forces a specific slot with `partyindex`, marks them a platoon lead with `leader`, and sets individual priority with `priority`. See [Assigning Members](/events/platoons#assigning-members) for the full parameter table.

## Member Profile Updates

A profile starts with `/member update` in Discord — the website doesn't create one from scratch, only edits an existing one. Members should keep it current through either Discord or the website afterwards.

```text
/member update
```

Typical profile data includes:

| Field | Why it matters |
| --- | --- |
| Family name | Used in signups, roster, attendance, scores, and lookup. |
| Class/spec | Used for signup display, class distribution, class priority, and stats. |
| Gear (GS, AP, AAP, DP) | Shown on the roster as four separate values, used for sorting and roster context. |
| Guild | Used in roster filters, signups, and alliance views. |
| Garmoth link | Gives officers and the member a quick route to detailed gear. |
| Weekly availability | Registered per member; see [Availability](/features/attendance#availability) for how it's used. |

A profile is stored per region: family name, gear, and class apply to whichever region is currently selected. See [Regions](/getting-started/how-it-works#regions) for how the bot, website, and profile region scopes interact.

::: tip Website Profile
The [Profile page](https://guildyapper.com/profile) is usually easier for full profile cleanup because it has more room than a Discord modal.
:::

<ScreenshotFigure
  src="/screenshots/members/profile-page.webp"
  alt="Website profile page with family name, gear and class"
  caption="Members keep family name, guild, class and gear current on their profile."
  maxWidth="900px"
/>

## Listing Members

Use `/member list` for a Discord roster summary.

```text
/member list sorting:gearscore
/member list sorting:class
/member list sorting:guild
```

You can filter by guild if your server has multiple guild names configured.

```text
/member list sorting:gearscore guild-filter:ExampleGuild
```

Use `/member view member:@Member` ("View user's gear") to look up one member's gear and profile info directly.

## Class Distribution

```text
/stats classes
```

`/stats classes` shows your own server's class distribution — how your registered members break down by class. This is separate from the public, site-wide [Class Statistics](/public-data/class-statistics), which aggregates popularity and performance across GuildYapper rather than one server's roster.

Useful for officers checking comp gaps or class stacking before adjusting class priority in `/configure class`.

## Finding Missing Registrations

Use `/member missing` when you want to see who has the Discord role but has not registered with GuildYapper yet.

```text
/member missing
/member missing role:@Member
```

::: info Private Responses
Many list and overview commands include a `private` option. Use it when the output is only useful for you or the officer team.
:::

## Officer Roster Management

The [Roster page](https://guildyapper.com/management/roster) is the main place for officer roster work.

Officers can review, per member:

- **GS, AP, AAP, and DP** as four separate gear values, not one gearscore number.
- A shortcut to the member's Garmoth link.
- Platoon assignment and class/spec.
- Personal priority and priority sources.
- Attendance percentage and recent attendance history.
- Attendance bars by state.
- A score snapshot that identifies its source (Ikusa or BDO OCR).
- Recent signups.

This is the same member details panel used by the [Platoon Builder](/events/platoon-builder#member-details).

<ScreenshotFigure
  src="/screenshots/members/roster-detail.webp"
  alt="Website roster with member stats and filters"
  caption="The roster shows the whole server at a glance: gear, combat performance, attendance and platoon."
  maxWidth="900px"
/>

## Common Issues

### A member is missing from signups

Check that they have the configured member role and have completed `/member update` or their website profile.

### A member appears under the wrong guild

Ask them to update their profile or have an officer edit the member in the roster.

### Officers cannot edit roster data

Check the officer/admin role in:

```text
/configure server
```
