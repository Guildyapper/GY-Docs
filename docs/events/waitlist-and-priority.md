---
description: How effective priority is calculated and how waitlisted members move into open spots.
---

# Waitlist And Priority

A **platoon** (in-game party) is one of several sources that add up to a member's effective priority. This page covers how that priority stack is built, how waitlist mode uses it, and how officers check why a specific member did or did not get a spot.

```text
/priority view
/configure class
/configure server
```

## Who Can Use It

Officers/admins configure waitlist behavior and priority. Members are affected by it and can check their own standing.

## The Priority Stack

In Custom Priority waitlist mode, GuildYapper sums four sources for each member:

- Class priority, from `/configure class`.
- Platoon priority, from the member's platoon.
- Function role priority, from the member's function role.
- Personal priority, set per member.

::: info Priority Adds Together
These four sources are added together to produce a member's effective priority. `/priority view` shows exactly that combined number for every registered member.
:::

## Dynamic Class Types

```text
/configure class
```

Class configuration lets officers assign a dynamic type to a class/spec: `DEFAULT`, `PA`, `BSR`, or `SHAI`.

| Parameter | What it does |
| --- | --- |
| `char-class` | The class being configured. |
| `spec` | Succession, Awakening, or Both Specs. |
| `priority` | Priority value for that class/spec. |
| `type` | Dynamic class type: `DEFAULT`, `PA`, `BSR`, or `SHAI`. |

Each type has a share limit of attending members. Once a type reaches its limit, its priority is temporarily reduced for the rest of that signup. A 10% limit lets in roughly 10 out of 100 members, and partial results round up. For a hard cutoff instead of a soft reduction, set the reduction to 99.

Classes with a dynamic type also get a marker on the signup so officers can see them at a glance, and they are distributed across split platoons rather than clustering into a single sub-platoon.

::: tip Class Priority Is A Planning Tool
Use it to express what your comp needs, not as a permanent judgment of members. Keep priorities understandable for officers.
:::

## Waitlist Modes

Waitlist mode is configured in:

```text
/configure server
```

| Mode | Meaning |
| --- | --- |
| Default | Earlier signups move in first. |
| Custom Priority | Higher effective priority moves in first. |
| Gearscore | Higher gearscore moves in first. |
| Random | Move-ins are randomized. |
| Manual | GuildYapper does not automatically move waitlisted members. |

When two members are otherwise tied, the waitlist tie-breaker decides between them: earlier signup time, or random.

## Fair Mode

Fair mode gives members extra priority when they were waitlisted on previous Node Wars. Officers can decide how much priority is added per waitlisted Node War, and there is a switch deciding whether `Can't` also counts as a waitlist appearance.

::: info Fair Mode Goal
Fair mode helps members who repeatedly miss the final roster get a better chance later, while still letting officers keep class and platoon needs in the system.
:::

## Move Notifications

When a member moves from waitlist to attending, GuildYapper can announce it in the signup's channel and DM the member directly (Premium). The notification window sets how many minutes before the event this applies, with `0` meaning notify on every move regardless of timing.

## Checking Priority

```text
/priority view
```

`/priority view` is the tool for answering "why did this member get in and that one didn't." It has three buttons, and its footer prints the breakdown verbatim:

```text
Individual + Party + Class + Function roles = Total Priority
```

| Button | Shows |
| --- | --- |
| Member list | Registered members and their effective priority. |
| Config overview | A compact view of all class priorities. |
| CSV export | The full priority configuration, exported as CSV. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of `/priority view`.
  Suggested path: `/screenshots/parties/priority-view.webp`
</div>

## Backtracking Excess Attendees

When caps or platoon limits change, officers can move excess attendees back to the waitlist. This is useful after lowering a cap or cleaning up a signup that had too many Can responses.

## Common Issues

### A platoon split looks uneven

Check forced platoon indexes, platoon limits, and special role distribution. GuildYapper may keep some assignments stable even if a perfect split would require moving them.

### A member did not move from waitlist

Check waitlist mode, cap, signup status, priority, and whether manual mode is enabled.

### A member keeps returning to the same platoon

They may have a permanent server platoon assignment. Update it in the roster or `/configure member`.
