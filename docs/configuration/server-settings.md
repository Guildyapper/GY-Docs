---
description: Every server setting, in Discord and on the website, and which tab holds what.
---

# Server Settings

The same server settings exist in two places. In Discord, they live in `/configure server`. On the website, they live on the **Settings** page. The bot itself links to the web version with a **Manage on Website** button, so officers can jump between the two without hunting for the URL.

```text
/configure server
/configure scheduler
```

## Discord Tabs Vs Website Tabs

The tabs do not line up one-to-one. The website splits Yap and Schedulers out into their own tabs, so Discord's five tabs become seven on the website.

| Discord tab | Website tab |
| --- | --- |
| General | General, plus Yap as its own tab |
| Guild Tracker | Guild Tracker |
| Guild | Guild |
| Nodewar | Nodewar Signups |
| Waitlist | Waitlist and Automation |
| (inside `/configure scheduler`) | Schedulers |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the website Settings page.
  Suggested path: `/screenshots/configuration/web-settings.webp`
</div>

## Who Can Use It

Officers/admins with the configured admin role.

## General

The General tab covers server identity:

- Server type.
- Region.
- Officer/admin role.
- Member role.
- Log channel.
- Custom bot profile (Premium): a custom avatar and banner, uploaded from Discord.

The log channel also receives changes made from the website, not just from Discord.

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

::: warning Saving A New Pattern Renames Everyone At Once
Setting the pattern to `DISABLED` turns off automatic renaming. Saving any other pattern renames every member immediately, not just new ones.
:::

## Nodewar Signups

The Nodewar Signups tab (Discord: Nodewar) covers:

- Signup sort order.
- Which values show per member. Family name is always visible; if nothing else is selected, every value shows.
- Automatic sync of platoon names and roles.
- Whether priority is displayed on the signup.
- Auto-signup by availability (Premium). Without Premium, member availability is informational only and does not create signups automatically.
- Whether a platoon swap needs officer approval.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Discord Waitlist tab.
  Suggested path: `/screenshots/configuration/waitlist-tab.webp`
</div>

## Waitlist And Automation

The Waitlist and Automation tab (Discord: Waitlist) sets waitlist mode, tie-breaker, and fair mode. That mechanic is covered in full on [Waitlist and Priority](/events/waitlist-and-priority) — this section only covers what's specific to this tab.

**No-show penalty** (Premium):

- Applies automatically when a member is marked No Show.
- Subtracts priority per occurrence, and occurrences accumulate.
- Duration is configurable from 1 to 60 days.
- DMs the affected member.

**Attendance watch channel**: posts applied no-show penalties, and also warns about members who have sat at `Can't` or `Undecided` for 7, 14, and 21 days.

## Guild Tracker

The Guild Tracker tab covers:

- Update type: all tracked guild updates, PvP-only updates, or posting disabled.
- Update channel.
- Custom guild filter, uploaded with `/configure guildfilter`. See [Guild Tracker](/features/guild-tracker) for filter limits.

## Yap

The Yap tab covers:

- Enable or disable Yap.
- Block all mentions in new yaps (stronger than the default role-mention block).
- Custom cooldown. The default is 3 minutes; setting `0` reverts to the default.

## Common Issues

### Commands disappeared

Check server type on the General tab. Discord command sync depends on the current server type.

### Guild Tracker is disabled

Check region and the Guild Tracker tab. Guild Tracker is only supported for EU, NA, and SA.

### Yap messages mention everyone

Enable mention blocking on the General or Yap tab. Role mentions are blocked by default; the stronger option blocks all mentions in newly added yaps.
