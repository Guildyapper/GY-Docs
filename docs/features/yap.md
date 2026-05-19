# Yap

Yap is GuildYapper's lightweight community message feature. Members can save short messages, and the bot can later post a random saved yap.

```text
/addyap content:Remember to repair before war
/yap
```

## What It Does

- Stores server-specific yap messages.
- Posts a random yap with `/yap`.
- Lets admins enable or disable Yap.
- Blocks role mentions by default.
- Can block all mentions if enabled in server config.
- Uses a cooldown to reduce spam.

## Who Can Use It

Guild / Alliance and Community servers can use Yap when it is enabled. Members can add and post yaps unless your server rules restrict it.

## Required Permissions And Config

- Yap enabled in `/configure server`.
- Member role configured.
- Optional custom cooldown configured in `/configure server`.
- Optional "block all mentions" setting enabled for stricter safety.

## How To Use It

1. Add a message.

```text
/addyap content:Hydrate before nodewar
```

2. Post a random yap.

```text
/yap
```

3. Remove a bad yap through the message context menu if available.

::: info Cooldown
The default yap cooldown is 3 minutes. Officers can set a custom cooldown in `/configure server`.
:::

::: warning Mentions
Role mentions are blocked by default. If your community keeps trying to add noisy yaps, enable the setting that blocks all mentions.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of a yap message in Discord.
  Suggested path: `/screenshots/yap/yap-message.webp`
</div>

## Common Issues

### `/yap` does nothing useful

Add some yaps first:

```text
/addyap content:Your message
```

### A yap with mentions is rejected

That is expected. Mentions are restricted to prevent abuse.

### Users are spamming yaps

Increase the custom cooldown or disable Yap in:

```text
/configure server
```
