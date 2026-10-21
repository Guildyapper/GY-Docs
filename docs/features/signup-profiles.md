---
description: The signup profiles that decide which platoons and function roles each kind of event offers.
---

# Event Types And Signup Profiles

Signup profiles are reusable signup layouts for different event types: Construction Node War, Occupation Node War, Siege, Blue Battlefield, War of the Roses, or custom events. A profile decides which platoons and function roles are available on a signup, and it can give a member a different assignment than their normal roster default.

```text
/configure parties
/configure profiles
/signup nodewar profile:Siege
```

<div class="quick-links">
  <a href="https://guildyapper.com/management/signup-profiles">Website Signup Profiles</a>
  <a href="/events/platoons">Platoons and Function Roles</a>
  <a href="/events/waitlist-and-priority">Waitlist and Priority</a>
  <a href="/bot/members-and-roster">Members and Roster</a>
</div>

## What It Does

- Stores reusable event layouts called profiles.
- Chooses which platoons are available on a profile.
- Chooses which function roles are available on a profile.
- Lets officers set per-profile member overrides for platoon and function roles.
- Lets officers choose or swap the profile used by a signup.
- Feeds party, role, class, personal, and fair-mode priority into waitlist decisions when custom-priority waitlist mode is enabled.

::: info Compatible By Default
New Node War signups use the server's default profile when no profile is chosen. The default profile starts with all existing platoons enabled, so existing Node War party behavior stays familiar until officers customize it.
:::

## Who Can Use It

Officers/admins configure profiles, platoons, roles, and member assignments. Members only see the resulting signup layout and their assigned labels.

The website Signup Profiles page is officer-only. Non-officers can see the page header but cannot manage the profile content.

## Core Concepts

| Concept | Meaning |
| --- | --- |
| Profile | A named layout for an event type. It controls available platoons and function roles. |
| Platoon | An in-game party such as Main, Defense, Flex, or Cannon. These are configured in `/configure parties`. |
| Main | The default platoon. It is always available and cannot be removed from a profile. |
| Function role | A signup label with an emoji and optional priority, such as Flag Carrier, Shotcaller, Elephant Rider, or BSR Target. It is not a Discord role. |
| Base assignment | The member's normal roster platoon and member settings. |
| Per-profile override | A profile-specific platoon and role assignment that replaces the base assignment only on signups using that profile. |

## Default Profiles

Every server starts with five system profiles:

| Profile | Use it for |
| --- | --- |
| Construction Nodewar | Construction node wars. Default profile out of the box. |
| Occupation Nodewar | Occupation node wars. |
| Siege | Siege wars. |
| Blue Battlefield | Blue Battlefield events. |
| War of the Roses | War of the Roses events. |

System profiles can be renamed, disabled, customized, and set as default, but they cannot be deleted. Custom profiles require GuildYapper Premium.

::: info Activation Does Not Affect Existing Signups
Activating or deactivating a profile only changes what is offered for new signups. It does not affect signups that already exist.
:::

<div class="screenshot-slot">
  <strong>Screenshot placeholder</strong>
  Add a screenshot of the Signup Profiles page, Profiles tab.
  Suggested path: `/screenshots/parties/signup-profiles.webp`
</div>

## Function Roles

Function roles are configured in `/configure parties` or the website Roles tab. They are not Discord roles and do not sync to Discord permissions.

A function role can have:

| Setting | Meaning |
| --- | --- |
| Name | Display name for officers, such as Flag Carrier or Shotcaller. |
| Emoji | Emoji shown next to assigned members on signups. |
| Priority | Extra priority for members with this role in custom-priority waitlist mode. |
| Priority limit rate | The attending-member share where this role's priority starts to reduce. |
| Reduced priority on limit | How much role priority is removed after the limit is reached. |
| Member limit | Hard cap for automatic waitlist promotion. Once enough attending members already hold this role, additional holders are skipped for auto-promotion. Existing attendees are not demoted. |

Up to 5 function roles are free. More than 5 require GuildYapper Premium.

## Configure In Discord

```text
/configure parties
```

Use this to configure the building blocks:

- Platoons, size limits, overflow behavior, target count, sort order, and party priority.
- Function roles, emojis, role priority, role priority limits, and role member limits.

```text
/configure profiles
```

Use this to configure profiles:

- Set the default profile for new Node War signups.
- Enable or disable profiles.
- Choose which platoons are available on each profile.
- Choose which function roles are available on each profile.
- Open the website Signup Profiles page for detailed member assignments.

::: tip Main-Only Profiles
There is no separate "disable platoons" mode. If a profile should behave like Main-only, leave Main selected and deselect every other platoon.
:::

## Configure On The Website

Open [Website Signup Profiles](https://guildyapper.com/management/signup-profiles).

The page has five management areas:

| Area | Use |
| --- | --- |
| Profiles | Rename profiles, change descriptions, set the default profile, enable/disable profiles, and choose available platoons/roles. |
| Assign members | Drag members into profile-specific platoons and attach function roles for the selected profile. |
| Platoons | Add, edit, reorder, and remove platoons. Main cannot be removed. |
| Roles | Add, edit, and remove function roles. The free tier allows 5 roles. |
| Classes | Configure class/spec priority and the dynamic priority limits for DEFAULT, BSR, PA, and SHAI class types. |

You can also set per-profile assignments from the roster member modal. Leaving the platoon on `Base` means the member keeps their normal roster assignment for that profile.

## Class Priority On The Website

The **Classes** tab mirrors `/configure class`. Officers can add, update, and delete class/spec priority rows, assign DEFAULT/BSR/PA/SHAI types, and configure each type's percentage limit and priority reduction. **Reset all** removes custom class rows and restores the four default types.
## Using A Profile On A Signup

When creating a signup, the `profile` option chooses the signup layout:

```text
/signup nodewar date:25.06.2026 max-attendance:55 profile:Siege
/signup custom type:Practice date:25.06.2026 time:20:00 max-attendance:30 profile:Blue Battlefield
```

| Situation | Profile used |
| --- | --- |
| `profile` option set | The selected enabled profile. |
| `profile` set to `none` / No profile | Base behavior with no function-role layout. |
| Node War with no `profile` | The server's default profile. |
| Custom signup with no `profile` | Base custom behavior, normally a single Main party unless a profile is chosen. |
| GvG | Profiles are ignored. |

Officers can also swap or clear the signup profile later from the signup's Edit Details action in Discord or from the website signup edit dialog.

::: warning Clearing A Profile
Clearing a profile on an existing signup does not re-apply the Node War default profile. It switches that signup to base behavior until a profile is selected again.
:::

## How Assignments Resolve

For a signup using a profile, GuildYapper resolves each member like this:

1. Use the member's per-profile override for that profile, if one exists.
2. Otherwise use the member's base roster assignment.
3. If the resolved platoon is not available on the selected profile, place the member in Main.

Function roles work the same way: only roles available on the selected profile can be assigned for that profile, and their emojis/priority only appear on signups using that profile.

## Priority Behavior

Priority affects automatic waitlist promotion when the server waitlist mode is `customPriority`.

Effective priority can include:

- Personal member priority.
- Party priority.
- Class/spec priority.
- Function-role priority.
- Fair-mode waitlist streak priority.

Party and role priority can be reduced dynamically after their configured `%` limit is reached. Party `LIMIT` overflow and function-role member limits can block automatic promotion, but they do not demote members who are already attending.

## Premium Gates

| Feature | Free | Premium |
| --- | --- | --- |
| System profiles | Included | Included |
| Custom profiles | Not available | Available |
| Function roles | Up to 5 | More than 5 |

## Common Issues

### A role does not show on a signup

Check that the signup has a profile, the role is available on that profile, and the member is assigned to that role for that profile.

### A member is in Main instead of their expected platoon

The member may have no per-profile override, or their assigned platoon may not be available on the signup's selected profile. Enable the platoon on the profile or update the member's override.

### A signup looks like the old layout

It may have no profile selected. Edit the signup details and choose a profile, or set the intended profile as the default for future Node War signups.

### A waitlisted role holder did not auto-promote

Check the signup cap, waitlist mode, role member limit, party `LIMIT` overflow, and custom-priority settings.
