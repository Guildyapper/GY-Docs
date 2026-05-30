# Parties And Waitlist

Parties and waitlists decide how a full signup becomes an actual plan. GuildYapper can keep people in configured groups, split large parties, respect priorities, and move waitlisted members into open spots.

```text
/configure nwparty
/configure class
/configure member member:@Member
/configure server
```

## What It Does

- Creates and configures Node War parties such as Main, Defense, Flex, or custom groups.
- Assigns members to configured parties globally or per signup profile.
- Adds function roles such as Elephant rider, Shotcaller, or BSR Target to signup displays and priority logic.
- Splits oversized parties into sub-parties.
- Uses class, party, function-role, individual, and waitlist-streak priority when configured.
- Lets officers temporarily move members for one event or permanently change roster party assignment.
- Supports waitlist behavior such as default order, custom priority, gearscore, random, or manual.

## Who Can Use It

Officers/admins configure parties and waitlist behavior. Members see the resulting signup and party assignments.

## Required Permissions And Config

- Guild / Alliance server type.
- Officer/admin role.
- Node War parties configured through `/configure nwparty` or Website Signup Profiles.
- Optional class priorities through `/configure class`.
- Optional member overrides through `/configure member`.

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of `/configure nwparty`.
  Suggested path: `/screenshots/parties/nwparty-config.webp`
</div>

## Party Basics

Every signup has a Main/default party. Guild / Alliance setup also creates starter parties. Officers can add more parties and configure:

| Setting | Meaning |
| --- | --- |
| Party name | Display name on signup and party views. |
| Party role | Discord role used to assign or identify members for that party. |
| Sort key | Higher values make the party appear earlier in signup views. |
| Party priority | Adds priority to members in that party. |
| Party limit | Maximum size before overflow behavior starts. |
| Target participants | Lets the party request volunteers if it is below target. |
| Overflow type | Controls what happens when the party exceeds its limit. |
| Priority limit rate | Stops or reduces priority once enough of the party is already represented. |

::: info Priority Adds Together
A member's effective priority can include personal priority, class priority, party priority, and waitlist-streak priority.
:::

## Signup Profiles

Signup profiles are templates for which parties and function roles are active on a signup. New servers receive default profiles for Construction Nodewar, Occupation Nodewar, Siege, Blue Battlefield, and War of the Roses. Existing parties are enabled on every default profile during migration, so older signup behavior continues until officers customize profiles.

Profiles can be selected when creating Node War signups and automatic scheduled Node War signups. Custom signups can also use profiles when parties are enabled for that custom event. GvG and Guild League signups do not use signup profiles.

Use [Website Signup Profiles](https://guildyapper.com/management/signup-profiles) to:

- Enable or disable profiles.
- Choose which parties/platoons are active per profile.
- Choose which function roles are active per profile.
- Assign a member to different parties per profile, such as Flex for Construction and Main for Occupation.
- Assign profile-specific function roles to members.

## Function Roles

Function roles are signup planning labels, not Discord roles. They can show an emoji beside a member in signup views and can add priority in custom-priority waitlist mode.

Default function roles are:

| Role | Default emoji |
| --- | --- |
| Elephant rider | Elephant |
| Shotcaller | Announcement |
| BSR Target | Red circle |

Each function role can have priority, priority limit rate, and reduced priority on limit. Use these the same way you use party priority limits when too many members with the same role are already attending.

## Overflow Types

| Overflow type | Behavior |
| --- | --- |
| `SPLIT` | Splits a large party into equal sub-parties such as Main 1 and Main 2. |
| `OVERFLOW` | Keeps the party capped and moves extra members to the default/Main party. |
| `LIMIT` | Keeps the party capped and leaves excess members on the waitlist. |

::: tip SPLIT Is Best For Large Flexible Groups
Use `SPLIT` when a party can become multiple balanced groups. Use `LIMIT` when a group is truly capped.
:::

## How Split Parties Work

When a party uses `SPLIT`, GuildYapper tries to make clean sub-parties:

1. Members forced into a specific party index stay there when possible.
2. Sub-parties are kept as equal in size as possible.
3. Special roles such as BSR, PA, and Shai are spread across sub-parties where possible.
4. Gearscore balance is used as a secondary improvement.
5. When a signup is frozen or already has assignments, GuildYapper keeps existing assignments stable where it can.

Example: if Main has a limit of 20 and 44 attending members, it can become Main 1, Main 2, and Main 3.

::: warning Forced Party Index
If an officer forces a member into Main 2 for one event, GuildYapper treats that as intentional and avoids moving them away just to make the math prettier.
:::

## Temporary vs Permanent Party Moves

The website party builder and Discord management actions can handle two kinds of moves:

| Move type | Use it when |
| --- | --- |
| Temporary event move | You only want this member moved for the current signup. |
| Server roster move | You want this member's default party assignment changed for future signups. |
| Profile assignment | You want this member's default party changed only for one signup profile. |

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the website party builder with pool and party board.
  Suggested path: `/screenshots/parties/party-builder.webp`
</div>

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

## Waitlist Fair Mode

Fair mode gives members extra priority when they were waitlisted on previous Node Wars. Officers can decide how much priority is added per waitlisted Node War and whether `Can't` should count.

::: info Fair Mode Goal
Fair mode helps members who repeatedly miss the final roster get a better chance later, while still letting officers keep class and party needs in the system.
:::

## Backtracking Excess Attendees

When caps or party limits change, officers can move excess attendees back to the waitlist. This is useful after lowering a cap or cleaning up a signup that had too many Can responses.

## Common Issues

### A party split looks uneven

Check forced party indexes, party limits, and special role distribution. GuildYapper may keep some assignments stable even if a perfect split would require moving them.

### A member did not move from waitlist

Check waitlist mode, cap, signup status, priority, and whether manual mode is enabled.

### A member keeps returning to the same party

They may have a permanent server party assignment. Update it in the roster or `/configure member`.
