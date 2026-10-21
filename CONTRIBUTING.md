# Contributing

Thanks for helping document GuildYapper. This guide covers everything you need to open a useful PR without a back-and-forth review.

## Local Setup

```sh
npm install
npm run docs:dev
```

`docs:dev` serves the site locally with hot reload so you can see your changes as you write.

Before opening a PR, run:

```sh
npm run docs:build
```

**This is your self-check.** The build fails on any dead internal link, so if it succeeds, your links are correct. CI runs this same command on every PR, so catching it locally saves a review round trip.

## Page Structure

Every page follows the same shape. Use `docs/features/signups.md` as the canonical example. It has:

- Frontmatter with a one-line `description`.
- An H1 title.
- A short `## Who Can Use It` near the top — who (members, officers/admins, public) can use the feature. Many pages, including `signups.md`, open with a `## What It Does` summary first; exact ordering of the early sections varies by area (`docs/features/` tends to summarize first, `docs/events/` tends to put `Who Can Use It` first), so match the neighboring pages in whichever folder you're editing rather than a fixed sequence.
- Content sections covering how to use the feature.
- `## Common Issues` at the end, when the page has enough known gotchas to warrant it.

Not every page needs every section (a reference page like the glossary skips `Who Can Use It`), but don't invent a different shape without a reason.

## Vocabulary

- Say **platoon** (in-game party) on the first occurrence in a page.
- Write command names exactly as they appear in the bot, including flags/options (for example `` `/signup nodewar` ``, not "the nodewar signup command").

## Screenshots

- Place images under `docs/public/screenshots/<area>/` (e.g. `signups/`, `parties/`, `scores/`) using existing folders where possible — see `docs/public/screenshots/README.md`.
- Format: `.webp`.
- Use the `ScreenshotFigure` component to display one:

  ```md
  <ScreenshotFigure
    src="/screenshots/signups/signup-management.webp"
    alt="Signup management view"
    caption="Officers can manage participants, caps, charts, and event result from the signup menu."
    width="860px"
  />
  ```

  Props: `src` and `alt` are required; `caption`, `width` (default `100%`), `maxWidth` (default `900px`), and `align` (`left` | `center` | `right`, default `center`) are optional.

- If you're writing text but don't have the screenshot yet, drop a placeholder instead of skipping it:

  ```html
  <div class="screenshot-slot">
    <strong>Screenshot placeholder</strong>
    Add a screenshot of the signup management menu.
    Suggested path: `/screenshots/signups/signup-management.webp`
  </div>
  ```

## Translations

`docs/pt/` exists and most English pages have a Portuguese counterpart there — but some newer ones do not yet. If you change an English page that has a `docs/pt/` counterpart, either update it yourself or note the gap in your PR description so a translator can catch up. If the page has no Portuguese counterpart, a translation is welcome but not required.

## The One Rule That Matters Most

**Never document a command without running it.** Behavior drifts from what you'd expect, options get renamed, and the bot's own `/help` text has been out of date before. If you can't run it yourself, say so in the PR and flag which parts are unverified.
