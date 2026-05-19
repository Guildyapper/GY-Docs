# Members And Roster

Member tools keep your GuildYapper roster usable: who is registered, which class/spec they play, their guild, gear, party assignment, attendance history, priority, and score snapshots.

<div class="quick-links">
  <a href="https://guildyapper.com/profile">Profile</a>
  <a href="https://guildyapper.com/management/roster">Roster</a>
</div>

## What It Does

- Lets members update their own profile.
- Lets officers view, sort, and filter the roster.
- Shows member details such as gearscore, class/spec, guild, party, attendance, and scores.
- Helps officers find members who have not registered yet.
- Supports officer configuration for individual member settings such as priority, party, and signup display labels.

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

## Member Profile Updates

Members should keep their profile current through either Discord or the website.

```text
/member update
```

Typical profile data includes:

| Field | Why it matters |
| --- | --- |
| Family name | Used in signups, roster, attendance, scores, and lookup. |
| Class/spec | Used for signup display, class distribution, class priority, and stats. |
| Gearscore | Used for sorting and roster context. |
| Guild | Used in roster filters, signups, and alliance views. |
| Garmoth link | Gives officers and the member a quick route to detailed gear. |

::: tip Website Profile
The [Profile page](https://guildyapper.com/profile) is usually easier for full profile cleanup because it has more room than a Discord modal.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the profile page.
  Suggested path: `/screenshots/members/profile-page.webp`
</div>

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

Officers can review:

- Member details.
- Attendance summaries.
- Party assignment.
- Class/spec.
- Personal priority and priority sources.
- Score snapshots.
- Recent attendance history.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the roster list and member details modal.
  Suggested path: `/screenshots/members/roster-detail.webp`
</div>

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
