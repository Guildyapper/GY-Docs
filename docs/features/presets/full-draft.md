---
description: The Full draft preset fills every spot by priority at the draft time.
---

# Full Draft Preset

**Who it's for:** guilds that want everyone treated the same: all members sign up, and the best priorities get the spots.

## What It Sets

| Setting | Value |
|---|---|
| Fill mode | Draft |
| Draft runs | Automatic, 3 hours before node war |
| Instant confirm | Off |
| Show rank | On |
| Waitlist mode | Custom priority |
| Fair mode | On |

Other settings are not touched. Profiles with their own settings, limits and member priorities stay as they are.

## What Members See

- When they click **Can**, they are **Available** and the bot tells them their place, for example "You're **#31 of 50** (likely in)".
- At the draft time the roster is filled by priority and the bot posts the result in the signup channel.
- Fair mode adds priority for members who were waitlisted on earlier node wars.

## Follow-ups

- Set member priorities if you have not yet.
- Add [class group limits](/events/platoons) if you need a class balance.
- If some members must always get in, use [Core + rotation](/features/presets/core-rotation) instead.

## Set It Up Manually

You can skip the wizard. Open **Management → Server settings → Waitlist**, then **How signups fill (default)**.

1. Set **Fill mode** to **Draft**, **When the draft runs** to **Automatic** and **Draft time** to 3 hours.
2. Leave **Instant confirm** off and turn **Show rank** on.
3. Set **Waitlist mode** to **Custom priority** and turn **Fair mode** on.

To set it for one profile only, open **Management → Signup Profiles**, open the profile's **Fill** line and choose **Own settings for this profile**.

Back to [Signup Presets](/features/presets/).
