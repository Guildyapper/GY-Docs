# VOD Reviews

Open **Review VOD** on a submitted recording to watch it and leave timestamped feedback. YouTube videos and Twitch VODs are supported. The recording stays on its original platform; GuildYapper does not upload or host the video.

## Premium and public links

Review tools require Premium on the VOD's linked server. For a personal VOD, the owner must be an active member of a Premium server. A coach's own subscription does not unlock another person's VOD.

Use **Copy link** to share the VOD. As with Ikusa sessions, anyone who knows the public ID can open it; there is no separate sharing setting. Visitors can read shared feedback without signing in. Sign in with Discord to write reviews, with your display name and avatar shown on each entry. Members and outside coaches can both review.

## Finding VODs and seeing what changed

Open **VODs** from your profile menu or from **Management → VODs** to browse the server library. **My VODs** lists your own recordings across servers, **Server VODs** shows what members have shared, and officers get a **Needs review** queue. Filter by event type, member, review state, or alignment state.

Every VOD row or card shows who has reviewed it, how many notes and overall reviews exist, whether Ikusa is aligned, and a **new** marker for feedback you have not opened yet. The profile menu shows a badge with the number of unseen reviews on your own VODs. Opening a VOD's review page marks it as seen.

The owner of a VOD and server officers can change its server visibility from the profile page, the roster, or the library: **Server members**, **Officers only**, or **Personal profile only** (removes it from the server without deleting it).

Choose a layout with the three buttons next to the tabs: **Cards** for posters, **Compact rows** for a smaller thumbnail per line, and **Dense table** to fit as many recordings on screen as possible. GuildYapper remembers your choice.

## Linking a war day afterwards

Uploaded first and picked the war later? The uploader and server officers can open a VOD's actions menu and choose **Link war day**. Pick the war, or **Unlink** to keep it on the server without a war. A linked VOD then appears on that war's score pages and can be lined up with its Ikusa killfeed.

Linking a profile-only VOD to a war day adds it to that server and makes it visible to members. Existing feedback is kept. If the recording was already synced to Ikusa and you move it to a different war, that alignment no longer applies and has to be redone.

## Uploads from outside the guild

Trialees and guest coaches usually have no member profile, so they cannot use the normal upload page. An officer opens **Upload links** on the VOD library and creates a link for them, optionally naming it ("Trialee week 12") and giving it an expiry.

Anyone with the link can sign in with Discord and upload one or more VODs to that server. The link does not show them the guild's other recordings, and it never lets them upload on someone else's behalf: their VOD is owned by their own Discord account and shows their name, so officers can review, hide, or delete it like any other. Guest uploads are marked **Guest** in the library.

Revoke a link as soon as it has served its purpose. Revoking stops any further uploads and keeps the VODs already uploaded through it. Treat a link like a password: anyone it is forwarded to can upload until it is revoked or expires.

Basic video playback remains available without Premium. If Premium expires, editing stops, external review feedback becomes unavailable, and existing internally permitted readers keep read-only access to their allowed feedback.

## Timestamp notes and whole-VOD feedback

Load the embedded player and choose **Add note** beneath the video when you spot a moment worth discussing. This pauses the video and captures its timestamp. Write your feedback, choose its audience, and publish or save a draft. Use **Add a title** if useful. You can change the timestamp manually (for example, `12:34.500`) or capture it again with **Use current time**.

Timeline markers show the reviewer's Discord avatar. Hover or focus one for a quick preview with their avatar, display name, and note. Click it to pin the preview and jump to that moment; click it again to dismiss. A pinned preview closes automatically once playback continues beyond that moment. The compact timestamp cards stay below the timeline while Ikusa remains visible beside the video. Use **Play context · −5s** for the lead-in, or open a note's actions menu to edit or remove feedback when permitted.

Choose **Full screen** in the page header when you want the player, timeline notes, and Ikusa or overall-review panel to fill the display together. On desktop, the player and review context stay side by side; on a narrow screen they stack into one scrollable workspace. Use **Exit full screen** or press `Escape` to return to the page. If the Ikusa map is also full screen, `Escape` closes the map first.

Open **Overall review** and choose **Write a review** for recurring patterns, strengths, and goals for the next war. Each reviewer has one overall review per recording version; **Edit your review** reopens it. Switching panels preserves unfinished text and marks the panel as unsaved. Text is not automatically saved: publish it or save a draft before leaving.

If your session ends while writing, an **Unsaved feedback recovery** notice keeps the text on the current page. Use **Recover unsaved text** and copy it before signing in or reloading. Recovery is bound to the original Discord account; another account cannot inherit it. Unsaved recovery is not a saved draft and does not survive a page reload.

**Save draft** keeps feedback visible only to its author. **Publish** makes it visible to the selected audience:

| Audience | Who can read published feedback |
| --- | --- |
| Officers only | Server officers and the author |
| Uploader + officers | VOD owner, officers, and the author |
| Shared review | Anyone with the VOD link |

Personal VODs offer uploader/author and shared audiences, not officers. Drafts are private even from officers. Authors edit their own feedback; the owner and officers can remove published feedback they are permitted to read.

## Linked Ikusa context

Open **Ikusa** when a session is linked directly or through the same signup. A single linked session loads automatically; choose a session if several are available. GuildYapper retrieves every event page automatically, so there are no show-more controls. All kills and deaths appear by default. The Ikusa POV participant is always on the left, with **Kill** or **Death** shown between the two names. Events involving the VOD uploader receive stronger row highlighting. Hover a class portrait to see its class and specialization, such as **Succ Berserker**. Events without coordinates still appear in the feed.

Anyone who can see the VOD inside its server (the owner, officers, and members) can choose **Align to video** (or **Adjust alignment**). The last saved alignment wins and each save is logged with who made it, so an officer can always see who changed it. Personal VODs can only be aligned by their owner. Select a logged kill or death, pause the video at that exact moment, enter its video timestamp or choose **Use current time**, then **Save alignment**. Selecting an event during alignment does not move the video. Verify the timing with a second event afterward.

Once aligned, selecting an event jumps to five seconds before it. **Add note at…** opens a note at the event's exact timestamp. Events outside the recording stay visible as **Before VOD** or **After VOD**, so an incorrect alignment can still be repaired.

The killfeed follows the VOD automatically and highlights the latest event the playback has reached. Scroll through the feed, use its keyboard controls, or select an event to pause automatic following while you inspect another moment. Choose **Follow video** above the feed to jump back to the current fight and resume following.

**Show map** opens a compact map that follows the video, showing positions from the preceding 60 seconds. Before alignment, it shows a session overview. Use **Fit fight** to recenter or **Full screen** for a closer look. Hide the map to return to a compact killfeed.

The map uses the existing public session view. Private server-wide strategy drawings are not included. Synchronization is manual and assumes continuous footage; cuts or edits require realignment.

## Replacing or unavailable recordings

Replacing a submission with a different video starts a new review version. Existing feedback remains attached to the original recording, available through the version selector. Archived versions are read-only and do not transfer their old timestamps or alignment to the replacement.

Embedding can be disabled by the uploader or blocked by the provider/browser. Use **Open on YouTube/Twitch** in the page header and enter timestamps manually if needed. Twitch requires a wider player: rotate a narrow device or open Twitch directly. Deleted/expired provider videos cannot be restored by GuildYapper.
