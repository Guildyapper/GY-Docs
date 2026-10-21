---
description: "An end-to-end walkthrough: from inviting the bot to uploading the war scores."
---

# Running Your First Node War

## Who Can Use It

This tutorial is aimed at the officer/admin setting up GuildYapper for a Guild / Alliance server. Steps that members handle themselves are called out below.

This is a map of the full flow, in order. Each step links to the page that covers it in depth — go there for options, edge cases, and screenshots.

1. Invite the bot and run `/setup`, choosing your server type and region. See [Setup](/getting-started/setup).
2. Set the member and officer roles and the log channel, in `/configure server` or the website's Settings page. See [Server Settings](/configuration/server-settings).
3. Register members: they run `/member update`; `/member missing` shows who hasn't yet. See [Members and Roster](/bot/members-and-roster).
4. Set up platoons (in-game parties) with `/configure parties`, and optionally event profiles with `/configure profiles`. See [Platoons and Function Roles](/events/platoons).
5. Adjust priority and waitlist behavior, and check it with `/priority view`. See [Waitlist and Priority](/events/waitlist-and-priority#checking-priority).
6. Create the signup with `/signup nodewar`. See [Signups](/features/signups#create-a-node-war-signup).
7. Track responses and the waitlist; `/signup list` opens management. See [Signups](/features/signups#managing-a-signup).
8. Build the composition in the Platoon Builder and send it to Discord. See [Platoon Builder](/events/platoon-builder).
9. After the war, upload scores with `/scores upload` or through Ikusa. See [Scores](/features/scores).
10. Close the event with a result and check attendance with `/attendance overview`. See [Attendance](/features/attendance).

::: tip Automate The Repeat Work
Once this flow feels familiar, look at [Schedulers](/bot/schedulers) to automate signup posting and closing instead of running each step by hand every Node War.
:::
