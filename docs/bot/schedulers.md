---
description: How to automate recurring events and reminders with GuildYapper's schedulers.
---

# Schedulers

Schedulers automate repeated event and reminder work. Configure them from Discord with:

```text
/configure scheduler
```

## What It Does

Schedulers can ping undecided members, remind missing registrations, post Node War signups, close signups, send pre-war announcements, and check inactive members.

## Who Can Use It

Only officers/admins can configure schedulers.

## Required Permissions And Config

- Guild / Alliance server type.
- Officer/admin role.
- Relevant signup channels.
- A log channel for some notifications.
- Premium for advanced schedulers marked as Premium.

::: info Free And Premium Schedulers
Ping undecided members and ping missing registrations are available without Premium. Automatic signup posting, closing, Node War announcements, and inactive-member checks are Premium tools.
:::

## Available Schedulers

| Scheduler | Free/Premium | What it does |
| --- | --- | --- |
| Ping undecided members | Free | Pings members still marked undecided on a signup at up to three reminder times. Premium allows eight and can also DM members who stay undecided. See [Undecided Reminders](#undecided-reminders). |
| Ping missing Bot registrations | Free | Runs `/member missing` in a selected channel on Sundays before Node War time. |
| Automatically post Node War signups | Premium | Posts signups on selected days and channels with default caps and lead time. |
| Close Node War signups | Premium | Closes signups a set time after Node War time (for example 2h or 45m), with options for channel cleanup and default result. |
| Nodewar announcement | Premium | Sends a pre-war reminder in signup channels, can mention members marked as Can, and can include attendance/class context. |
| Check up on inactive members | Premium | Checks members who have not attended for a configured number of days, can DM members, and can ping officers in the log channel. |

<ScreenshotFigure
  src="/screenshots/premium/scheduler-config.webp"
  alt="Schedulers tab with reminder times for undecided members"
  caption="The Schedulers tab on the website is the same as /configure scheduler."
  maxWidth="900px"
/>

## Undecided Reminders

Each reminder has one of three types, and you can mix them:

| Type | On Discord | Example use |
| --- | --- | --- |
| Before Node War | `3h` or `2h30m` | A last call on the day. |
| After the signup is posted | `posted 24h` (at least 1h) | Give everyone a day to answer, however early the signup went up. |
| On a weekday | `wed 18:00` (server region time) | Guilds that post the whole week at once. It repeats every week while the signup is open, up to four weeks before the start. |

The Discord form has three reminder fields. With Premium you can set up to eight on the website; saving on Discord keeps reminders four and up. If Premium ends, only the first three saved reminders run.

Rules that apply to every signup:

- A reminder is skipped if it falls after the start, or within one hour of the signup being posted.
- If two reminders fall within 30 minutes of each other, only the first is sent.
- A new ping replaces the previous ping of the same signup. Pings of other signups in the channel stay.

**Delayed DM (Premium):** 30 minutes after a signup's last reminder, the bot DMs the members who are still undecided at that moment. Nobody is messaged if the signup has closed or started by then, and members who blocked bot DMs are skipped.

## Automatic Signup Posting

The automatic signup scheduler lets you pick:

1. Channels where signups should be posted.
2. Node War days.
3. Default attendance caps.
4. Optional visible caps.
5. When to post: a time before Node War (for example 21h50m), or on the website the clock time it lands on (22:10 the evening before). Both describe the same setting.
6. A signup profile per day, or Auto (Siege on Saturdays, otherwise your default profile). The bot sets one profile for every day; per-day profiles are set on the website.
7. Posting mode: per day or all at once.

::: tip Visible Caps
Visible caps let the signup show a different public cap than the internal max attendance. Use this when officers want a cleaner number shown to members while still allowing controlled overflow.
:::

## Closing Signups

The close scheduler can:

- Close the signup a configured time after Node War, in hours and minutes.
- Clear the channel.
- Delete the signup message.
- Set a default result such as Won, Lost, Draw, or Undefined.

::: warning Undefined Reopens The Signup State
Use `Undefined` when you do not want the event treated as a final win/loss/draw result yet.
:::

## Inactive Member Checks

Inactive checks can DM members or notify officers if someone has not been attending Node Wars for a configured number of days. Officer pings use the log channel.

## Common Issues

### A scheduler button is locked

That scheduler requires Premium. Check:

```text
/premium
```

### A scheduler did not post

Check the selected channels, selected days, server region/time zone, and whether the signup channel still exists.

### Members did not get DMs

DM utilities require Premium and members must allow DMs from the server/bot.
