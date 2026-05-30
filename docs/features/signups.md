# Signups

Signups are the core event flow for Guild / Alliance servers. They let officers create events, members choose attendance, and leadership manage waitlists, parties, charts, results, and score links.

<div class="quick-links">
  <a href="https://guildyapper.com/management/signups">Website Signups</a>
  <a href="/features/parties-and-waitlist">Parties and Waitlist</a>
  <a href="/features/attendance">Attendance</a>
  <a href="/features/scores">Scores</a>
</div>

## What It Does

- Creates Node War, GvG, Guild League, and custom event signups.
- Tracks attendance states such as Can, Waiting, Undecided, Can't, Vacation, and No Show.
- Lets officers update caps, details, participants, results, and charts.
- Supports waitlists and automatic move-ins based on server rules.
- Supports signup profiles for Node War and custom events with parties enabled.
- Connects event attendance to website management and score sessions.

## Who Can Use It

Members can usually respond to signups. Officers/admins create and manage signups.

## Required Permissions And Config

- Guild / Alliance server type.
- Member role configured.
- Officer/admin role configured.
- Guild names configured for guild/alliance registration.
- Optional Node War voice channel for missing-in-voice checks.
- Optional parties configured through `/configure nwparty`.

## Create A Node War Signup

```text
/signup nodewar date:19.05.2026 max-attendance:55 server:Mediah 1
```

Node War signup options include:

| Option | Required | Meaning |
| --- | --- | --- |
| `date` | Yes | Event date. |
| `max-attendance` | Yes | Internal maximum number of attending members. |
| `visible-attendance` | No | Publicly shown cap when you want it to differ from the internal max. |
| `server` | No | In-game server or location. |
| `info` | No | Extra details shown on the signup. |
| `skip-streak` | No | Excludes this signup from waitlist-streak/fair-mode logic. |
| `role` | No | Role to mention when posting. |
| `profile` | No | Signup profile used for party and function-role templates. |

::: tip Visible Attendance
Use visible attendance when your internal cap and public-facing target are different. For example, you may internally allow overflow while showing a cleaner target to members.
:::

## Create A GvG Signup

```text
/signup gvg date:19.05.2026 time:20:00 max-attendance:40 enemy-guild:EnemyGuild match-type:Ranked
```

GvG signups include an enemy guild and a match type.

| Match type | Meaning |
| --- | --- |
| Ranked | Counts as a ranked GvG for GuildYapper's Guild Wars views. |
| Practice | Useful for scrims or practice fights. |

::: warning Ranked GvG Needs Your Guild Configured
For ranked GvG signups, make sure your own guild names are configured in `/configure server`.
:::

## Create A Guild League Signup

```text
/signup gleague date:19.05.2026 start-time:20:00 end-time:22:00 role:@Guild
```

Guild League signups create time slots for valid matches in the configured time range.

## Create A Custom Signup

```text
/signup custom type:Practice date:19.05.2026 time:20:00 max-attendance:30
```

Use custom signups for practice, training, meetings, or other events that still need attendance tracking.

::: info Custom Party Size
Custom and GvG signups can use a custom party size. If no custom size is set, GuildYapper uses normal signup behavior.
:::

Custom signups can use a signup profile when parties are enabled for that custom event. GvG and Guild League signups ignore signup profiles.

## Signup Profiles

Signup profiles decide which parties/platoons and function roles apply to a signup. They also let officers give members different default assignments per event type.

Default profiles are created automatically:

- Construction Nodewar
- Occupation Nodewar
- Siege
- Blue Battlefield
- War of the Roses

Profiles are optional. Existing Node War signups keep working with the default profile, and existing parties are enabled on all default profiles after migration.

Officers can manage profiles on [Website Signup Profiles](https://guildyapper.com/management/signup-profiles). The page controls active parties, function roles, profile-specific member party assignments, and profile-specific member function roles.

## Attendance States

| State | Meaning |
| --- | --- |
| Can / Attending | The member wants to attend and currently has a spot. |
| Waiting | The member wants to attend but is waitlisted. |
| Undecided | The member has not made a clear choice yet. |
| Can't | The member cannot attend. |
| Vacation | The member is away. |
| No Show | Officer-marked state for missed attendance. |

## Managing A Signup

Officers can use the signup's management menu and `/signup list`.

```text
/signup list
```

Common management actions include:

- Refresh message.
- Ping participants.
- Update attendance limits.
- Update signup details.
- Move participants between attendance states.
- Ping members not in voice.
- DM selected members.
- Manage volunteers.
- Backtrack excess attendees to waitlist.
- Set result and close.
- Open or close the signup.
- Clear the channel.
- Cancel event.
- Export attendance.
- View class, gearscore, or guild distribution charts.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of a live signup with management options.
  Suggested path: `/screenshots/signups/signup-management.webp`
</div>

## Website Signup Management

Open [Website Signups](https://guildyapper.com/management/signups) for a bigger event view. Officers can browse signups, open one event, inspect participants, update attendance, move members, and work with party assignments.

Use [Website Signup Profiles](https://guildyapper.com/management/signup-profiles) when you want to change the templates that future signups use.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the website signup detail view.
  Suggested path: `/screenshots/signups/website-signup-detail.webp`
</div>

## Common Issues

### A member is not listed correctly

Ask the member to update their profile:

```text
/member update
```

### Waitlist order looks unexpected

Check waitlist mode, class priority, member priority, party priority, fair mode, and party overflow settings. See [Parties and Waitlist](/features/parties-and-waitlist).

### The signup message was deleted

Use `/signup list`, open Manage, and repost the signup if the original message cannot be found.

### Members are not receiving DMs

Direct-message actions require Premium for some flows, and members must allow DMs.
