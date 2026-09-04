---
description: The website tool for building one event's composition, with staged changes and Discord hand-off.
---

# Platoon Builder

The Platoon Builder is a website tool for assembling the platoon (in-game party) composition of one specific event. Open it from the Signups page: a **Platoon Builder** button appears on the event card, in the signup list row, and inside the event's detail view.

This page covers the builder itself. For how platoons are configured and how members get their default assignment, see [Platoons and Function Roles](/events/platoons). For how priority decides who gets a spot, see [Waitlist and Priority](/events/waitlist-and-priority).

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Platoon Builder.
  Suggested path: `/screenshots/parties/platoon-builder.webp`
</div>

## Who Can Use It

The Platoon Builder is for officers/admins only. It is a management tool.

## Applies To

Every move in the builder is made with an **Applies To** choice:

| Option | Effect |
| --- | --- |
| This signup | Changes the member's platoon for this event only. |
| Default party | Changes the member's standing platoon assignment, used for future events too. |

This is the temporary-versus-permanent distinction from [Platoons and Function Roles](/events/platoons), turned into a switch you set before making a move.

## Instant And Planner

**Changes** mode controls when a move actually takes effect:

| Mode | Behavior |
| --- | --- |
| Instant | Each change writes immediately. |
| Planner | Changes accumulate as a pending count and only apply when you select **Save**. **Discard all** abandons them. |

::: tip Use Planner For Big Remakes
Switch to Planner before reworking a large composition. It lets you try several moves, see the pending count grow, and back out cleanly with Discard all if the result isn't right — instead of every drag committing on the spot.
:::

## The Participant Pool

The pool lists everyone in the signup, with search and filters by class, platoon, status, and guild.

**Promote top by priority** promotes members from the waitlist in bulk, taking the top of the list by effective priority. See [Waitlist and Priority](/events/waitlist-and-priority) for how that priority is calculated.

## Reading The Composition

The builder summarizes the current composition:

- Count by class.
- Count by function role.
- Count of specialists: BSR, PA, and Shai.
- Attendance.
- Per platoon: how full it is and its average gearscore.

## Member Details

Selecting a member opens a side panel with:

- **GS**, **AP**, **AAP**, and **DP** as four separate values.
- A shortcut to the member's Garmoth link.
- Platoon and priority.
- Attendance percentage.
- A score snapshot with its source identified.
- Attendance bars by state.
- Recent signups.
- Buttons to move the member to each platoon.

## Sharing The Result

| Action | Result |
| --- | --- |
| Preview screenshot | Generates an image of the composition. |
| Send to Discord | Posts that image to the server. |

## Notifications

Two switches control what happens when the composition changes:

- Announce the change.
- DM participants (Premium).
