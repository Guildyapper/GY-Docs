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

- Signup detail view: current attendance states and party view.
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

## Common Issues

### Attendance seems empty

Attendance needs signup history. Create and run signups first.

### A member says their attendance is wrong

Open the signup, check their event state, and update it from the management view if needed.

### CSV export does not include the expected period

Check the `range` option. It means "last X days."
