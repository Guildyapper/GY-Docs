---
description: Draft signups let everyone sign up and fill the roster by priority at a set time instead of first come, first served.
---

# Draft Signups

A draft lets everyone sign up and fills the roster **by priority at a set time**, instead of by who clicked first. It replaces lowering the spots of a signup to keep early clickers out and raising them again before node war.

<div class="quick-links">
  <a href="https://guildyapper.com/management/settings?tab=waitlist#signup-fill">Set up a draft</a>
  <a href="/features/presets/">Signup presets</a>
  <a href="/features/signup-profiles">Signup Profiles</a>
  <a href="/events/platoons">Parties and Waitlist</a>
</div>

## How It Works

1. Members click **Can**. They are **Available**: signed up, waiting for the draft.
2. When they click Can, the bot tells them their place, for example "You're **#31 of 50** (likely in)". Guilds can hide this.
3. At the **draft time** (by default 3 hours before node war) the roster is filled in one go. Members are **Confirmed** or on the **waitlist**, and the bot posts the result in the signup channel.
4. After the draft it works like any signup: when someone drops out, the best member on the waitlist moves up.

The draft uses your waitlist order (priority, gear score, signup time or random) and all your [limits](/events/platoons): "at most", "prefer at most", "at least" and platoons with **Fill first**.

## Setting It Up

The quickest way is **Set up signups**: three questions suggest a [signup preset](/features/presets/) that sets all of this for you. Or set it by hand as below.

Set it once as the **server default** and every signup profile follows it. A profile can have **its own settings** instead, so Siege can draft while Node War stays first come, first served. Turning a draft on applies to signups posted from then on; signups that are already open keep filling first come.

- **Server default:** **Management → Server settings**, next to the waitlist settings, **How signups fill (default)**.
- **One profile:** **Management → Signup Profiles**, open the profile's **Fill** line and choose **Own settings for this profile**.

| Setting | What it does |
|---|---|
| Draft time | How long before node war the roster is filled. The page shows the clock time. |
| When the draft runs | **Automatic**: no action needed. **Preview first**: officers get the roster before the draft time and can change it; it still applies automatically. **Manual**: an officer runs it. |
| Instant confirm | Members with at least a set priority get in right away and skip the draft. Choose whether it compares their personal priority, their total priority, or either one. You can stop it once a number of members are confirmed (everyone confirmed counts, also members an officer moved in). |
| Show rank | Tells members their place when they click Can. |

::: tip Either one
With **Either one**, a core member with high personal priority still gets in instantly when a limit penalty lowers their total priority.
:::

## Officers

- **Run draft now**: in the officer menu of the signup, or on the website. Fills the roster right away. A signup with 0 spots does not draft: raise the spots first.
- **Preview** (Premium): the bot posts the projected roster to your log channel before the draft time, with **Apply now** and **Open on website**.
- **Pin in / pin out**: on the website, before the draft. Pinned-in members are confirmed even past a limit; pinned-out members stay on the waitlist.
- Moving members in and out by hand works as always. Nobody is ever removed automatically.
- Officers who lock a first-come signup (8 spots or fewer, or fewer than the shown cap) get a "use a draft instead" tip with a link to switch.

## Free and Premium

| Free | Premium |
|---|---|
| Automatic and manual draft, "Run draft now" at any time, instant confirm, pins, rank before the draft | Preview before the draft, DMs to members with the draft result (turned on with **Waitlist move DMs** in Server settings) |
