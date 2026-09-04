---
description: Premium and VIP pricing, the full list of what Premium unlocks, and what happens to your config when it lapses.
---

# Premium

Premium unlocks advanced automation and customization for a GuildYapper server while supporting development.

```text
/premium
```

## Plans

| Plan | Price | Includes |
| --- | --- | --- |
| Free | — | Signups, attendance, roster, scores, and every public tracker, plus 5 signup profiles and 5 function roles. |
| Premium | US$7.99/month | Everything listed in [What Premium Unlocks](#what-premium-unlocks) below. |
| VIP | US$19.99/month | Exactly the same feature set as Premium. |

::: info VIP Does Not Unlock More Than Premium
VIP costs more than Premium but unlocks **exactly the same features**. It exists for guilds that want to support GuildYapper's development beyond the base Premium price, not for guilds that want extra functionality.
:::

Prices are set by Discord's store, billed in US dollars as a recurring subscription, and are managed and cancelled from Discord's own user subscription settings.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Premium and VIP plan cards.
  Suggested path: `/screenshots/premium/plans.webp`
</div>

## What Premium Unlocks

- **VOD Reviews** — timestamped notes and Ikusa context on top of any uploaded recording. See [VOD Reviews](/scores/vod-reviews).
- **Scheduler automation** — automatic signup posting and closing, pre-war announcements, and inactive-member checks. See [Schedulers](/bot/schedulers).
- **Attendance safeguards** — no-show penalties and an attendance watch channel for stale responses. See [Server Settings](/configuration/server-settings).
- **Smart signup flow** — auto-signup from weekly availability, and waitlist move DMs. See [Server Settings](/configuration/server-settings) and [Waitlist and Priority](/events/waitlist-and-priority).
- **Custom signup profiles and unlimited function roles** — beyond the free plan's 5 and 5. See [Event Types and Signup Profiles](/events/event-types) and [Platoons and Function Roles](/events/platoons).
- **Member markers, a custom bot profile, and officer DMs** — covered below in [Included Features](#included-features).

## Who Can Use It

Any member in the Discord server can open `/premium`. Activating the free trial requires the officer role. Purchasing is handled through Discord's subscription flow when available.

## Required Permissions And Config

- GuildYapper must be set up on the server.
- Officer role is required to activate the 30-day trial.
- Premium features apply to the server/alliance where the subscription is active.

::: info Payments Are Handled Through Discord
`/premium` shows Discord Premium buttons when they are available. If those buttons do not load, use the `Open Store` button shown in the Premium message.
:::

## Included Features

### Advanced Schedulers

Premium unlocks automation through:

```text
/configure scheduler
```

Premium scheduler features include automatic Node War signup posting, automatic signup closing and cleanup, pre-Node War announcements, inactive-member checks, and additional DM options.

### Signup Customization

Premium enables richer signup personalization through member configuration.

```text
/configure member member:@Member
```

Use this for custom member labels or emojis that should appear in signups, such as special roles or utility notes.

### Custom Bot Profile

Premium lets a server customize the bot profile for that Discord.

```text
/configure server
```

Available custom profile fields include nickname, bio, avatar, and banner where Discord allows the bot to update them.

### Direct Message Utilities

Premium unlocks direct-message helpers for flows such as waitlist move DMs, selected participant DMs, and scheduler-related DMs.

::: warning Members Can Block DMs
Premium enables the bot-side feature, but Discord users can still block DMs or have privacy settings that prevent delivery.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the `/premium` status message.
  Suggested path: `/screenshots/premium/premium-status.webp`
</div>

## 30-Day Trial

Servers can activate a one-time 30-day Premium trial from `/premium`.

Rules:

1. The user activating the trial must have the officer role.
2. The server can only use the trial once.
3. A trial cannot be activated if a paid/manual subscription is already active.
4. A new trial cannot be activated while another trial is active.

```text
/premium
```

::: tip Trial First
Use the trial before redesigning your scheduler setup. It gives officers enough time to test automatic posting, closing, DMs, and inactive-member checks with real events.
:::

## Subscription Ownership

GuildYapper's Premium message states that any member on the Discord server can purchase the subscription for the alliance.

::: warning Purchaser Leaves The Server
Subscriptions are cancelled when the user who purchased the subscription leaves the Discord server.
:::

## What Happens When It Ends

When Premium ends, your configuration is **preserved** — it simply stops applying until Premium is active again.

The one exception is the custom bot profile: it is reverted, since a Premium-only avatar or nickname would otherwise stay visibly active on a server without an active subscription.

## Store And Donations

The Premium message includes:

- Premium subscription button.
- VIP subscription button when available.
- Activate 30-Day Trial.
- Open Store.
- Donate instead through Ko-fi.

## Common Issues

### Premium buttons do not load

Use the `Open Store` button in `/premium` or directly with [this link](https://discord.com/discovery/applications/1238194592982110248/store).

### Trial activation is disabled

The server may already have an active subscription, an active trial, or a previously used trial.

### A Premium feature still looks locked

Run `/premium` to check status, then reopen the feature command after Discord updates the entitlement.