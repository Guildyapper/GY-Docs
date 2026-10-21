---
description: How signups work for Guild and Alliance servers, from event creation to waitlists and results.
---

# Signups

Signups are the core event flow for Guild / Alliance servers. They let officers create events, members choose attendance, and leadership manage waitlists, platoons (in-game parties), charts, results, and score links.

<div class="quick-links">
  <a href="https://guildyapper.com/management/signups">Website Signups</a>
  <a href="/events/platoons">Platoons and Function Roles</a>
  <a href="/events/waitlist-and-priority">Waitlist and Priority</a>
  <a href="/features/attendance">Attendance</a>
  <a href="/features/scores">Scores</a>
</div>

## What It Does

- Creates Node War, GvG, Guild League, and custom event signups.
- Tracks attendance states such as Can, Waiting, Undecided, Can't, Vacation, and No Show.
- Lets officers update caps, details, participants, results, and charts.
- Supports waitlists and automatic move-ins based on server rules.
- Connects event attendance to website management and score sessions.

## Who Can Use It

Members can usually respond to signups. Officers/admins create and manage signups.

## Required Permissions And Config

- Guild / Alliance server type.
- Member role configured.
- Officer/admin role configured.
- Guild names configured for guild/alliance registration.
- Optional Node War voice channel for missing-in-voice checks.
- Optional platoons configured through `/configure parties`.

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

## Guild League

Guild League has its own command, officer actions, and public match pages. See [Guild League](/events/guild-league).

## Create A Custom Signup

```text
/signup custom type:Practice date:19.05.2026 time:20:00 max-attendance:30
```

Use custom signups for practice, training, meetings, or other events that still need attendance tracking.

::: info Custom Platoon Size
Custom and GvG signups can use a custom platoon size. If no custom size is set, GuildYapper uses normal signup behavior.
:::

Every signup uses a signup profile, which decides the platoons (in-game parties) and function roles it offers. See [Event Types and Signup Profiles](/events/event-types) for the profiles, [Platoons and Function Roles](/events/platoons) for how a platoon is built, [Waitlist and Priority](/events/waitlist-and-priority) for how priority decides who gets a spot, and the [Platoon Builder](/events/platoon-builder) for assembling one event's composition on the website.

## Attendance States

| State | Meaning |
| --- | --- |
| Can / Attending | The member wants to attend and currently has a spot. |
| Waiting | The member wants to attend but is waitlisted. |
| Undecided | The member has not made a clear choice yet. |
| Can't | The member cannot attend. |
| Vacation | The member is away. Set automatically from a registered vacation. |
| No Show | Officer-marked state for missed attendance. |

## Vacations

Members register time off themselves. Signups whose date falls inside a vacation
mark the member **Vacation** instead of counting as a no-show — including
signups that were already open when the vacation was registered.

- **Several at once.** A member can plan more than one vacation ahead of time;
  registering a second one does not replace the first.
- **Cancelling.** Cancel a vacation and the signups still ahead of it go back to
  **Undecided**. Nights already missed stay excused, so coming back early never
  rewrites attendance that already happened.
- **Reason.** Optional. Some guilds ask for one every time, others never do.
- **Dates.** Whole days. The first and last day are both covered in full, and a
  single day is fine — pick the same date twice.

### In Discord

The **Vacation** button on a signup, and **Set Vacation** in
`/member update`, both open the same panel: what is registered, an **Add
vacation** button and a dropdown to cancel one. Officers reach the same panel
for any member through `/configure member`.

Each registration and cancellation is posted to the server's vacation channel
(see [Bot configuration](/bot/configuration)).

### On the website

**Profile → Servers → Availability & vacation** for your own, and the member's
row in the **Roster** for officers. The roster view additionally shows the full
history: past and cancelled vacations, the reason given, and who entered each
one. Vacations imported from before this history existed are labelled
*Imported* and have no reason recorded.

## Managing A Signup

Officers can use the signup's management menu and `/signup list`.

```text
/signup list
```

`/signup list` shows every signup with its channel, name, date, result (**N/A**, **WON**, or **LOST**), attendance count, and a numeric **Id**, each with its own **Manage** button. The footer totals the number of signups shown and the **server's average attendance**.

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

Open [Website Signups](https://guildyapper.com/management/signups) for a bigger event view. Officers can browse signups, open one event, inspect participants, update attendance, move members, and work with platoon assignments.

The event detail view has keyboard shortcuts: `/` focuses search, `a` marks the selected member Can, `w` marks them Waiting, and `Esc` clears the selection. Three switches control the view: announcing the change and DMing participants (Premium) fire on every attendance change, and a **priority badges** toggle shows each member's priority next to them — see [Waitlist and Priority](/events/waitlist-and-priority) for how that priority is calculated.

Every event also has a **VODs** button. See [VOD Reviews](/scores/vod-reviews).

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

Check waitlist mode, class priority, member priority, platoon priority, fair mode, and platoon overflow settings. See [Waitlist and Priority](/events/waitlist-and-priority).

### The signup message was deleted

Use `/signup list`, open Manage, and repost the signup if the original message cannot be found.

### Members are not receiving DMs

Direct-message actions require Premium for some flows, and members must allow DMs.
