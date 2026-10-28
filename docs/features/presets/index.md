---
description: A signup preset is a ready-made set of fill and waitlist settings you can apply in a few clicks.
---

# Signup Presets

A preset is a ready-made set of server defaults for how signups fill. Instead of changing several settings by hand, you answer three questions and GuildYapper suggests a preset. You see what changes before anything is saved.

<div class="quick-links">
  <a href="https://guildyapper.com/management/settings?tab=waitlist#signup-fill">Set up signups</a>
  <a href="/features/draft">Draft Signups</a>
  <a href="/features/signup-profiles">Signup Profiles</a>
</div>

## Where to Find It

Click **Set up signups** in one of two places:

- **Management → Server settings → Waitlist**, in the header of **How signups fill (default)**.
- **Management → Signup Profiles**, in the page header.

Both open the same dialog. You need to be an officer.

## The Three Questions

1. **How should spots fill?** Whoever clicks first, by priority at a set time, or officers decide.
2. **Do you have core members who should always get in?** If yes, you enter the priority a member needs to count as core (suggested: 5).
3. **How competitive is your guild?** Casual, balanced or tryhard.

| Your answers | Preset |
|---|---|
| Whoever clicks first | [Casual](/features/presets/casual) |
| Officers decide | [Officers pick](/features/presets/officer-picks) |
| By priority, core members, tryhard | [Reserved spots](/features/presets/reserved-spots) (also asks how many spots to reserve) |
| By priority, core members, casual or balanced | [Core + rotation](/features/presets/core-rotation) |
| By priority, no core members, tryhard | [Small tryhard](/features/presets/small-tryhard) |
| By priority, no core members, casual or balanced | [Full draft](/features/presets/full-draft) |

You can ignore the suggestion and pick any of the six yourself.

## What a Preset Changes

A preset only changes the **server default** for how signups fill, and the waitlist settings next to it:

- fill mode (first come or draft), when the draft runs, draft time
- instant confirm (priority, which priority is compared, when it stops)
- show rank
- waitlist mode and fair mode

A preset **never** changes:

- the own settings of a signup profile (a profile with its own fill settings keeps them)
- limits, platoons and function roles
- member priorities

Signups that are already open keep filling the way they started. New signups use the new settings.

## After You Apply

The dialog lists what changed. If something could not be applied exactly, it says so. For example, **Preview first** needs Premium and falls back to **Automatic** without it. The dialog also shows follow-up tips for the preset, such as setting member priorities. Tips are only suggestions, nothing is created for you.

The change is written to your bot log channel as "Signup preset applied".

## The Six Presets

| Preset | Fill | Good for |
|---|---|---|
| [Casual](/features/presets/casual) | First come | Relaxed guilds that rarely have more Can than spots |
| [Core + rotation](/features/presets/core-rotation) | Draft | A stable core plus members who rotate in |
| [Small tryhard](/features/presets/small-tryhard) | Draft, preview | Small, competitive rosters |
| [Full draft](/features/presets/full-draft) | Draft | Everyone treated by priority |
| [Officers pick](/features/presets/officer-picks) | Draft, manual | Officers build the roster |
| [Reserved spots](/features/presets/reserved-spots) | Draft | A fixed number of spots for core members |

::: tip Not sure?
If officers lock spots by hand to keep early clickers out, start with [Full draft](/features/presets/full-draft) or [Core + rotation](/features/presets/core-rotation). See [Draft Signups](/features/draft) for how a draft works.
:::
