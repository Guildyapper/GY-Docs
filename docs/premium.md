# Premium

Premium unlocks advanced automation and customization for a GuildYapper server while supporting development.

```text
/premium
```

## What It Does

Premium unlocks:

- Advanced scheduler automation.
- Signup customization through member configuration.
- Custom bot profile options.
- Direct-message utilities.
- Premium-only scheduler actions such as automatic signup posting, closing, pre-war announcements, and inactive-member checks.

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