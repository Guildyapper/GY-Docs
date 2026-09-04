---
description: Contributor notes on where to place documentation screenshots and how to reference them.
---

# Screenshot Assets

Place documentation screenshots in this folder. Anything here is served from `/screenshots/...` in VitePress.

Recommended folders:

```text
screenshots/
  attendance/
  community/
  configuration/
  guild-tracker/
  members/
  parties/
  premium/
  scores/
  setup/
  signups/
  stats/
  trials/
  website/
  yap/
```

Example usage:

```md
<ScreenshotFigure
  src="/screenshots/signups/signup-management.webp"
  alt="Signup management view"
  caption="Officers can manage participants, caps, charts, and event result from the signup menu."
  width="860px"
/>
```

For simple placeholders while drafting docs, use:

```html
<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Suggested path: `/screenshots/signups/signup-management.webp`
</div>
```

## Sizing

Use the `width` prop on `ScreenshotFigure` when you want to control the displayed size:

```md
<ScreenshotFigure
  src="/screenshots/website/navigation.webp"
  alt="Website navigation"
  width="720px"
/>
```

The image remains clickable and opens the original file in a new tab, so you can display a smaller version without losing the full-size screenshot.
