---
description: "Platoons and function roles: how a server defines its in-game parties and the signup labels that go on members."
---

# Platoons And Function Roles

A **platoon** is an in-game party. The default platoon is always available and cannot be removed. The order of platoons in the list is the order they display on a signup.

```text
/configure parties
```

## Who Can Use It

Officers/admins configure platoons and function roles. Members see their assignment reflected on signups.

## Platoon Settings

| Setting | What it does |
| --- | --- |
| Name | Display name on signups and party views. |
| Discord role | Role used to identify or assign members of that platoon. |
| Priority | Adds priority to members in that platoon. |
| Limit % | Share of attending members past which the platoon's priority is reduced. |
| Reduce | How much priority is subtracted once the limit is reached. |
| Exclude class | Keeps a class out of the platoon. |
| Size | Maximum members before overflow behavior starts. |
| Overflow | `SPLIT`, `OVERFLOW` or `LIMIT`. |
| Target | Lets the platoon ask for volunteers when it is below target. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of `/configure parties`.
  Suggested path: `/screenshots/parties/platoon-config.webp`
</div>

## Overflow Behavior

| Overflow | Behavior |
| --- | --- |
| `SPLIT` | Splits a large platoon into equal sub-platoons such as Main 1 and Main 2. |
| `OVERFLOW` | Keeps the platoon capped and moves extra members to the default platoon. |
| `LIMIT` | Keeps the platoon capped and leaves excess members on the waitlist. |

::: tip SPLIT Is Best For Large Flexible Groups
Use `SPLIT` when a platoon can become multiple balanced groups. Use `LIMIT` when a group is truly capped.
:::

## How Split Platoons Work

When a platoon uses `SPLIT`, GuildYapper tries to make clean sub-platoons:

1. Members forced into a specific party index stay there when possible.
2. Sub-platoons are kept as equal in size as possible.
3. Special roles such as BSR, PA, and Shai are spread across sub-platoons where possible.
4. Gearscore balance is used as a secondary improvement.
5. When a signup is frozen or already has assignments, GuildYapper keeps existing assignments stable where it can.

Example: if Main has a limit of 20 and 44 attending members, it can become Main 1, Main 2, and Main 3.

::: warning Forced Party Index
If an officer forces a member into Main 2 for one event, GuildYapper treats that as intentional and avoids moving them away just to make the math prettier.
:::

## Function Roles

Function roles are **signup labels, not Discord roles**. Each one has an emoji, an optional priority, a limit, and class exclusion. Out of the box, GuildYapper ships Elephant Rider, Shotcaller, and BSR Target. Function roles are assigned globally as a member's default and can be overridden per profile.

Function roles are also created and edited through `/configure parties`, on the Roles tab on the website.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Roles tab.
  Suggested path: `/screenshots/parties/function-roles.webp`
</div>

## Assigning Members

A member's platoon and function role assignment can be global or overridden per profile. On the website, dragging a member into a platoon changes their global assignment. Cards marked with a dot indicate a profile override of the roster default.

Configure member-level assignment in Discord:

```text
/configure member member:@Member
```

| Parameter | What it does |
| --- | --- |
| `party` | Sets the member's platoon. |
| `partyindex` | Forces the member into a specific party slot. |
| `leader` | Marks the member as a platoon lead. |
| `priority` | Sets the member's individual priority. |

To build the composition of one specific event instead of the server default, use the [Platoon Builder](/events/platoon-builder).

## Temporary Vs Permanent Platoon Moves

The website platoon builder and Discord management actions can handle two kinds of moves:

| Move type | Use it when |
| --- | --- |
| Temporary event move | You only want this member moved for the current signup. |
| Server roster move | You want this member's default platoon assignment changed for future signups. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the website platoon builder with pool and platoon board.
  Suggested path: `/screenshots/parties/party-builder.webp`
</div>

## Where To Go Next

See [Waitlist and Priority](/events/waitlist-and-priority) for how platoon priority combines with class, individual, and waitlist-streak priority. See the [Glossary](/reference/glossary) for other GuildYapper and Black Desert terms used across these docs.
