---
description: Every server setting, in Discord and on the website, and which tab holds what.
---

# Server Settings

The same server settings exist in two places. In Discord, they live in `/configure server`. On the website, they live on the **Settings** page under *Management*. The bot itself links to the web version with a **Manage on Website** button, so officers can jump between the two without hunting for the URL.

```text
/configure server
/configure scheduler
```

<div class="quick-links">
  <a href="https://guildyapper.com/management/settings">Open Server Settings</a>
</div>

Changes save immediately and are posted to your server's configured **log channel**, whether they were made in Discord or on the website.

## Who Can Use It

Officers/admins with the configured admin role. On the website, the page requires a Discord login and **officer access** on the selected server. Use the server selector in the page header to switch between your servers.

## Discord Tabs Vs Website Tabs

The tabs do not line up one-to-one. The website splits Yap and Schedulers out into their own tabs, so Discord's five tabs become seven on the website.

| Discord tab | Website tab |
| --- | --- |
| General | General, plus Yap as its own tab |
| Guild Tracker | Guild Tracker |
| Guild | Guild |
| Nodewar | Nodewar Signups |
| Waitlist | Waitlist & Automation |
| (inside `/configure scheduler`) | Schedulers |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the website Settings page.
  Suggested path: `/screenshots/configuration/web-settings.webp`
</div>

## General

The General tab covers server identity:

- Server type.
- Region.
- Officer/admin role.
- Member role.
- Log channel.
- Custom bot profile (Premium): a custom avatar, banner, nickname, and bio, configured in Discord.

## Guild

The Guild tab covers:

- Up to **five** guild names for an alliance — the main guild plus four more.
- Vacation channel.
- Profile update channel, which receives gearscore change posts and a monthly summary.
- The member rename pattern:

```text
{GUILD} {FAMILY} {CHARCLASS} {GS} {PARTY}
```

`{PARTY}` is the member's platoon (in-game party).

The **vacation channel** is where every vacation registration and cancellation is announced, whether it came from Discord or the website. Without it vacations still work — they simply are not announced. See [Vacations](/features/signups#vacations).

::: warning Saving A New Pattern Renames Everyone At Once
Setting the pattern to `DISABLED` turns off automatic renaming. Saving any other pattern renames every member immediately, not just new ones. On the website this uses an explicit **Apply** button with a confirmation.
:::

## Nodewar Signups

The Nodewar Signups tab (Discord: Nodewar) covers:

- Node War voice channel, used for missing-in-voice checks.
- Signup sort order.
- Which values show per member. Family name is always visible; if nothing else is selected, every value shows.
- Automatic sync of platoon names and roles.
- Whether priority is displayed on the signup.
- Auto-signup by availability (Premium). Without Premium, member availability is informational only and does not create signups automatically.
- Whether a platoon swap needs officer approval.

## Waitlist & Automation

The Waitlist & Automation tab (Discord: Waitlist) sets waitlist mode, tie-breaker, fair mode, and move notifications. Those mechanics are covered in full on [Waitlist and Priority](/events/waitlist-and-priority) — this section only covers what's specific to this tab.

**No-show penalty** (Premium):

- Applies automatically when a member is marked No Show.
- Subtracts priority per occurrence, and occurrences accumulate.
- Duration is configurable from 1 to 60 days.
- DMs the affected member.

**Attendance watch channel** (Premium): posts applied no-show penalties, and also warns about members who have sat at `Can't` or `Undecided` for 7, 14, and 21 days.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Discord Waitlist tab.
  Suggested path: `/screenshots/configuration/waitlist-tab.webp`
</div>

## Guild Tracker

The Guild Tracker tab covers:

- Update type: all tracked guild updates, PvP only, Node War only, or posting disabled.
- Update channel.
- Custom guild filter (up to 30 guilds), uploaded with `/configure guildfilter`. See [Guild Tracker](/features/guild-tracker) for filter limits.

## Yap

The Yap tab covers:

- Enable or disable Yap.
- Block all mentions in new yaps (stronger than the default role-mention block).
- Custom cooldown. The default is 3 minutes; setting `0` reverts to the default.

## Schedulers

The website's **Schedulers** tab is the equivalent of `/configure scheduler`. The two reminder schedulers are free; automatic signup posting, closing, Nodewar announcements, and inactivity checks are Premium. Existing Premium schedules remain visible after a subscription ends and can still be disabled. See [Schedulers](/bot/schedulers) for what each one does.

## On The Website

### Role And Channel Pickers

Role and channel dropdowns are loaded live from your Discord server through the bot. Roles show their Discord color, channels show their category. If the bot is unreachable, the page shows a notice and the pickers are temporarily disabled — everything else keeps working.

### Settings That Trigger Bot Actions

Some settings do more than store a value:

- **Server type** — switching re-syncs the server's slash commands. Switching to *Guild / Node War* also creates default class configs and platoons.
- **User rename mode** — applying a new pattern renames all registered members.

### Premium Settings

Settings that need GuildYapper Premium are marked with a **🔒 Premium** tag, matching the bot:

- Custom bot profile (configured in Discord via `/configure server`).
- Waitlist move DMs.
- Automatic no-show penalty, including penalty priority, duration, DMs, and the attendance watch channel.
- Nodewar availability auto-signup (can be toggled anywhere, but is only active with Premium).

On free servers these controls are locked. Run `/premium` in Discord for details, or see [Premium](/premium).

## Common Issues

### Commands disappeared

Check server type on the General tab. Discord command sync depends on the current server type.

### The Guild, Nodewar, Waitlist, and Schedulers tabs are disabled

These tabs only apply to **Guild / Node War** servers. Change the server type on the General tab first.

### Role and channel dropdowns show "Bot offline"

The bot could not be reached to list your server's roles and channels. Check that the bot is online in your Discord server and reload the page.

### Guild Tracker is disabled

Check region and the Guild Tracker tab. Guild Tracker is only supported for EU, NA, and SA; the website shows a notice when your configured region is unsupported.

### Yap messages mention everyone

Enable mention blocking on the Yap tab (Discord: General). Role mentions are blocked by default; the stronger option blocks all mentions in newly added yaps.
