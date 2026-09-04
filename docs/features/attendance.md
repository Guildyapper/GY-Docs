---
description: How GuildYapper records event attendance and gives officers participation history.
---

# Attendance

Attendance tracks how members respond to events and gives officers a way to review participation over time.

<div class="quick-links">
  <a href="https://guildyapper.com/management/signups">Website Signups</a>
  <a href="/features/signups">Signups</a>
  <a href="/bot/members-and-roster">Members and Roster</a>
</div>

## What It Does

- Shows personal attendance.
- Shows member attendance for officers.
- Gives server attendance overviews.
- Exports attendance to CSV.
- Lets officers manually update attendance states on signups.
- Feeds roster summaries and member detail views.

## Who Can Use It

Members can view their own attendance. Officers/admins can view member and server attendance, export CSV files, and update event attendance.

## Required Permissions And Config

- Guild / Alliance server type.
- Member role for member views.
- Officer/admin role for overview, export, and member views.
- Existing signup history.

## Discord Commands

```text
/attendance me
/attendance member member:@Member
/attendance overview
/attendance export
```

| Command | Use |
| --- | --- |
| `/attendance me` | View your own attendance. |
| `/attendance member` | View your members attendance. |
| `/attendance overview` | Get an overview of the servers Attendance. |
| `/attendance export` | Export Attendance to CSV. |

Useful options:

| Option | Used on | Meaning |
| --- | --- | --- |
| `range` | overview, export, me, member | Looks back over the last X days. |
| `guild` | overview, export | Filters to a guild name. |
| `member` | member, export | Shows or exports one member. |
| `private` | overview, export | Keeps the response visible only to you. |

::: tip Keep Exports Private
CSV exports can include member-level attendance data. Use the `private` option unless you intentionally want it visible.
:::

## Website Attendance Views

Attendance is shown inside the signup and roster tools:

- Signup detail view: current attendance states and platoon (in-game party) view.
- Member detail card: attendance breakdown and recent history.
- Roster page: attendance summaries across members.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of a member attendance breakdown.
  Suggested path: `/screenshots/attendance/member-breakdown.webp`
</div>

## Manual Attendance Updates

Officers can move members between states such as Can, Waiting, Can't, Vacation, No Show, and Undecided. Updates can also be logged to the configured log channel.

::: info Attendance And Scores
Attendance history can connect to score snapshots when event scores are uploaded, making member detail views more useful after wars.
:::

## No-Show Penalty

**Premium.** When enabled, GuildYapper applies a no-show penalty automatically the moment a member is marked No Show. It subtracts priority per occurrence, and **stacks**: each additional no-show adds another hit on top of the last. The penalty lasts **1 to 60 days** after the missed war, and can DM the affected member with the penalty's value and duration.

The effect of that penalty depends on waitlist mode:

- **Custom Priority mode**: the penalty is applied as negative priority, lowering the member's effective priority for the duration.
- **Every other mode**: the member is sent to the back of the waitlist instead.

See [Waitlist and Priority](/events/waitlist-and-priority) for how effective priority and waitlist mode work, and [Server Settings](/configuration/server-settings) to configure the penalty amount and duration.

## Attendance Watch Channel

**Premium.** A dedicated channel where GuildYapper posts no-show penalties as they're applied. The same channel also warns about members who have sat at **Can't** or **Undecided** for **7, 14, and 21 days**, so officers can follow up before it becomes a pattern.

Configure the channel in [Server Settings](/configuration/server-settings).

## Availability

Every member has a weekly availability registered on their profile. Without Premium, it is informational only — officers can see it, but nothing acts on it automatically. With Premium active, Node War signups use that availability to automatically mark a member **Can** or **Can't**.

See [Server Settings](/configuration/server-settings) for the auto-signup toggle.

## Common Issues

### Attendance seems empty

Attendance needs signup history. Create and run signups first.

### A member says their attendance is wrong

Open the signup, check their event state, and update it from the management view if needed.

### CSV export does not include the expected period

Check the `range` option. It means "last X days."
