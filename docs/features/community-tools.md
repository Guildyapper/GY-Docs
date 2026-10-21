---
description: "Recruiting posts, looking-for-merc posts, and verification tools for community servers."
---

# Recruiting, Mercs, And Verify

Community servers get tools for public coordination: recruiting posts, looking-for-merc posts, and verification messages.

```text
/recruiting register
/merc lf-signup
/verify post
```

## What It Does

- Registers guilds in the recruitment browser.
- Updates or removes recruiting entries.
- Posts looking-for-merc signup messages.
- Posts verification messages.

## Who Can Use It

These commands are intended for Community servers. Recruiting updates are tied to the user/server responsible for the guild entry. Verification and merc post permissions depend on your configured roles.

## Required Permissions And Config

- Community server type.
- Officer/admin role for controlled posting actions.
- Region selected during setup.

## Recruiting Browser

Register a guild:

```text
/recruiting register guildname:Example dc-server-link:https://discord.gg/example gs-requirement:700 region:EU
```

Optional fields include a second contact and region.

The command asks for a recruiting description in a Discord modal. Discord markdown is supported.

::: warning Discord Invite Links
The invite is only shown as a Discord invite when it starts with `https://discord.gg/`. Other links are hidden.
:::

Update a guild:

```text
/recruiting update gs-requirement:720
```

Remove a guild:

```text
/recruiting remove region:EU
```

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of a recruiting browser post.
  Suggested path: `/screenshots/community/recruiting-post.webp`
</div>

## Merc Posts

Use merc posts when a community wants to collect players looking for merc spots.

```text
/merc lf-signup
```

## Verification Message

Post the verification message with:

```text
/verify post
```

## Tierlist Updates From Discord

Community servers can announce or view recent tierlist updates.

```text
/tierlist updates announce:false days:7
```

Officers can announce updates to a channel and optionally mention a role.

## Common Issues

### Recruiting description is rejected

Rewrite the description without inappropriate content and submit again.

### The guild already exists

Use `/recruiting update` instead of registering a duplicate.

### The invite is not visible

Use a permanent `https://discord.gg/...` invite link.
