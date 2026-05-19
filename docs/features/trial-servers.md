# Trial Servers

Trial Server mode creates a dedicated Discord workflow for applicants. It is separate from a normal Guild / Alliance server.

```text
/setup
/trial signup
/trial configure
/trial end result:passed reason:Good fit trialee:FamilyName
```

## What It Does

- Creates trial roles, categories, text channels, and voice channels.
- Posts a trial signup button.
- Creates private trial channels for applicants.
- Stores trial history.
- Lets staff end trials as passed or failed.
- Archives completed trial channels.

## Who Can Use It

Trial staff use the TrialMaster/officer role. Applicants use the trial signup button and receive access as Trialee.

## Required Permissions And Config

- A Discord server dedicated to trials.
- `/setup` run as Trial Server.
- Bot permissions to create roles, channels, categories, and invites. The default invite is recommended; the minimal-permission invite usually needs manual permission work for Trial Servers.
- TrialMaster/officer role and Trialee role configured.

::: warning Use A Dedicated Server
Trial setup creates several channels, roles, categories, and permissions. Do not run Trial Server setup on your main guild Discord unless you intentionally want that structure there.
:::

## What Setup Creates

| Type | Created item |
| --- | --- |
| Role | `TrialMaster` |
| Role | `Trialee` |
| Category | `Staff` |
| Category | `Trialee` |
| Category | `Trials` |
| Category | `Archive` |
| Text channel | `signup` |
| Text channel | `trial-history` |
| Text channel | `staff` |
| Voice channel | `Staff` |
| Voice channel | `General` |
| Voice channel | `GroupFights-1` |
| Voice channel | `GroupFights-2` |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the generated Trial Server structure.
  Suggested path: `/screenshots/trials/generated-structure.webp`
</div>

## Trial Signup Message

If the signup message is deleted or you want to post it again, use:

```text
/trial signup
```

The message includes a button that applicants click to sign up for a trial.

## Trial Opening Message

Trial servers have an opening message shown in new trial channels. Staff can change it by right-clicking a message and using the app action:

```text
Apps -> Set Trial opening message
```

::: info Default Opening Message
The default message welcomes the trialee and tells them to provide extra information or wait for staff.
:::

## Ending A Trial

Use `/trial end` with a result and reason.

```text
/trial end result:passed reason:Strong performance trialee:FamilyName
/trial end result:failed reason:Did not meet requirements trialee:FamilyName
```

When a trial ends, GuildYapper records the result, posts the outcome, renames the channel with `-passed` or `-failed`, and moves the channel into an Archive category. If needed, it creates another Archive category when the current one is full.

::: warning Failed Trials Can Remove The Member
The trial ending flow can kick a failed trialee from the server. Make sure the selected trialee and result are correct before using it.
:::

## Common Issues

### The signup button is missing

Repost it:

```text
/trial signup
```

### Trial channels are not private

Check TrialMaster and Trialee role permissions, then run:

```text
/trial configure
```

### Trial history is not posting

Check the configured trial-history channel in `/trial configure`.
