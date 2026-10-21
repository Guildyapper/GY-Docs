# Server Settings (Website)

The **Server** page under *Management* lets officers manage the same configuration as the bot's `/configure server` command — from the browser, with searchable role and channel pickers.

<div class="quick-links">
  <a href="https://guildyapper.com/management/server">Open Server Settings</a>
</div>

::: info Access
The page requires a Discord login and **officer access** on the selected server. Use the server selector in the page header to switch between your servers.
:::

## Setting Groups

The page mirrors the groups of `/configure server`:

| Group | What you configure |
| --- | --- |
| General | Server type, region, admin/member roles, log channel, Yap settings, and the custom bot profile status. |
| Guild Tracker | Update type, update channel, and the custom guild filter (up to 30 guilds). |
| Guild | Guild names (up to 5 for alliances), vacation and profile-update channels, and the user rename mode. |
| Nodewar Signups | Node War voice channel, signup sort mode, displayed values, and signup behaviour toggles. |
| Waitlist & Automation | Waitlist mode and tie-breaker, fair mode, move notifications, and the automatic no-show penalty. |
| Schedulers | Reminder timing, missing-registration pings, automatic signup posting/closing, pre-war announcements, and inactive-member checks. |

Changes save immediately and are posted to your server's configured **log channel**, just like changes made through the bot.

## Scheduler Configuration

The **Schedulers** tab is the website equivalent of `/configure scheduler`. The two reminder schedulers are free; automatic signup posting, closing, Nodewar announcements, and inactivity checks are Premium. Premium locks are enforced by the API as well as the interface. Existing Premium schedules remain visible after a subscription ends and can still be disabled.

Automatic signup posting supports per-day channels and caps, optional visible caps, and both per-day lead time and all-at-once posting modes.
## Role And Channel Pickers

Role and channel dropdowns are loaded live from your Discord server through the bot. Roles show their Discord color, channels show their category. If the bot is unreachable, the page shows a notice and the pickers are temporarily disabled — everything else keeps working.

## Settings That Trigger Bot Actions

Some settings do more than store a value:

- **Server type** — switching re-syncs the server's slash commands. Switching to *Guild / Node War* also creates default class configs and parties.
- **User rename mode** — applying a new pattern renames all registered members, so it uses an explicit *Apply* button with a confirmation.

## Premium Settings

Settings that need GuildYapper Premium are marked with a **🔒 Premium** tag, matching the bot:

- Custom bot profile (avatar, banner, nickname, bio — configured in Discord via `/configure server`)
- Waitlist move DMs
- Automatic no-show penalty (including penalty priority, duration, DMs, and the attendance watch channel)
- Nodewar availability auto-signup (can be toggled anywhere, but is only active with Premium)

On free servers these controls are locked. Run `/premium` in Discord for details.

## Common Issues

### The Guild, Nodewar, and Waitlist tabs are disabled

These groups only apply to **Guild / Node War** servers. Change the server type in the General group first.

### Role and channel dropdowns show "Bot offline"

The bot could not be reached to list your server's roles and channels. Check that the bot is online in your Discord server and reload the page.

### Guild Tracker settings have no effect

The Guild Tracker is not available in every region yet. The page shows a notice when your configured region is unsupported.
