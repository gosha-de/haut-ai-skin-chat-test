# The week-3 return: build plan

The technical plan for the prototype. `user-flow-plan.md` says what the shopper sees and reads. This file says how we build it, in what order, and how we run it.

How to read it:
- The flow plan wins. If the two files disagree, the flow plan is right and this file gets fixed.
- Copy isn't repeated here. It's taken from the flow plan.
- "Step" and "section" numbers point to the flow plan. "Part" numbers point to this file.
- **(tech call)**: a choice from general technical knowledge, not from our research or the brief.
- The look was simplified on 19 Nov. Parts 3 to 7 describe the simpler build.

## 1. What we're building

- A small scripted prototype, built in Claude Code. It's a test task, not a product: we build what the flow needs and nothing for production.
- It goes to a public link before we send it.
- Nothing real stands behind it (brief: the answers and the scores can be scripted):
  - No email is written or sent. The email is a screen in the prototype.
  - No brand website exists. The brand page is one plain screen behind the chat.
  - No backend, no real AI, no accounts, no tracking.
- It plays the flow plan's main path in skin.chat's own look, plus one start screen of our own: a draft of our reasoning and one button to the prototype (part 4).
- It's simpler than the flow plan's "Built" list (section 9).
- Made for modern iPhones and Android phones (part 7).
- Assumed: Claude Code, not Claude Design. The brief allows both.

## 2. Stack (tech call)

| What | Choice | Why |
|---|---|---|
| Build tool | Vite | One command runs it on localhost. Node and npm are already on this machine |
| UI | React with TypeScript | The flow has 9 parts used in more than one place (section 4). Components keep them the same everywhere |
| Styling | Plain CSS with CSS variables | The brand settings are variables. No styling library. Our own library holds skin.chat's tokens and components, copied exactly: `tokens.css` and `library.css` |
| Links | A few hash links, no router library | Works the same on localhost and, later, on any host |
| State | One reducer, in memory | The chat is one scripted sequence. A reload restarts it, which is handy when presenting |
| Other libraries | None | Less to break, faster on a phone |

- Not used: Tailwind, a component kit, an animation library, a chat library.
- skin.chat's own code and CSS are compiled and can't be edited (skin.chat reference). We copy its tokens and components from its saved stylesheet and screens, with the same values, and reskin them only through the tokens: the brand colour, the font and the soft gradients.

Commands:

```
npm install
npm run dev              # on the laptop
npm run dev -- --host    # also on a phone in the same Wi-Fi
npm run build            # static files in dist/, for going live later
```

## 3. Files

The app sits at the root of the repo. `docs/` and `reference/` stay as they are.

```
index.html
src/
  main.tsx               start-up
  App.tsx                the links and the phone-sized frame
  data/
    shopper.ts           Maya, the days, the scores, the three photo results
    catalog.ts           the products and when to use them
    copy.ts              every text, by key
    script.ts            the chat's sequence for each answer
    brands.ts            brand settings: Clearwell and the second brand
    start.ts             the start screen: the draft reasoning and the button
  state/
    flow.ts              where we are and what was answered
    store.tsx            the brand, the texts, one play of the chat
    text.ts              fills a text with the shopper's own data
    dates.ts             dates counted from today
    scores.ts            the 5-point rule and the score lines
  screens/
    Start.tsx  Email.tsx  BrandPage.tsx  Chat.tsx  Portrait.tsx
  parts/
    Bubble.tsx    Options.tsx     Routine.tsx  Progress.tsx
    NextStep.tsx  ChatButton.tsx  Sheet.tsx    Icon.tsx  Logo.tsx
  styles/
    tokens.css  base.css  shell.css  start.css  email.css  site.css  chat.css
public/
  fonts/  faces/
```

Rules for the code:
- Every text lives in `copy.ts`, every number in `shopper.ts` and `catalog.ts`. No text or score is typed inside a component.
- Components never name a brand or a product. This is what makes "many brands, no custom work" true in the code too (brief).
- The start screen's text lives in `start.ts`. It's ours, not the brand's, so a brand switch doesn't touch it.

## 4. The prototype shell

How a reviewer moves around the prototype. Most of this is our call.

### The start screen

The first thing anyone sees when they open the prototype. It's ours, not the brand's: a page in skin.chat's own look (its soft page background, Inter, its dark text colour, a black round button), outside the phone flow. No grey text.

It holds two things:

1. **The title, a short intro and one button, "See the prototype".** It opens Maya's story, where the prototype starts.
2. **Our reasoning, as a draft.** Eight short parts: the brief's four questions, what a brand can change and what stays fixed, how we'd know it works, what's not designed, our assumptions. It's drawn from the solution draft and the brief.

How it behaves:

- No list of links. The ending is reached from the email's "About the same", as a shopper would reach it.
- The texts are data in `start.ts`.
- It's laid out as skin.chat lays out its page: on a phone one column, 16px from the edges; on a laptop the same column, at most 672px wide and centred, with the soft background filling the screen.
- It never shows inside the phone frame.

### Maya's story

A page in the same style as the start screen, between it and the email: a few polaroids, three short lines on why she has doubts at week 3, and one button, "Open email".

- The polaroids: her main photo (the same face as her selfie in the chat) on top in the centre, her face up close, and the two products she bought, from the brand's catalog, so they change with the brand. Each is a different size, and they lie unevenly. On a laptop they spread as wide as the text column and up to half of it again.
- There is only one photo of her, so the close-up is a crop of it.
- Unlike the start screen, everything on it is centred: her main photo, the title, the story and the button.

- "Open email": she takes her phone. It slides up over her page with the email open, and her page blurs behind it.
- "Inbox" on the email, or the phone's back button: she puts the phone down. It slides away and her page comes back from the blur.
- Her page stays behind the phone for the whole flow, the chat too. On a phone the phone layer fills the screen, so it shows only while the phone moves. On a laptop the phone-sized frame sits over her blurred page.

### The links

| Link | Opens | Flow plan |
|---|---|---|
| `#/` | The start screen | Ours, not in the flow plan |
| `#/story` | Maya's story: her portrait, why she has doubts at week 3, and "Open email". A page like the start screen | Ours, not in the flow plan |
| `#/email` | Her phone comes up over her page, with the week-3 email open | Step 1, main way in |
| `#/chat?answer=same` | The brand page with the chat open and "About the same" already in it. A link with another answer opens the same | Step 2 |
| `#/site` | The brand page with the note on the chat button | Step 1, second way in |

- The email's "About the same" is a link to the third row. The prototype works the way a real email would: the link carries the answer.
- "Feeling good" and "Not quite right" look the same, but a tap gives the note "Not in this demo. Try “About the same”." The same happens in the chat when it's opened from the site. Their scripts are kept in `script.ts`, switched off by one setting (`PLAYED`).
- The second way in has no button on the start screen. It opens by its link.
- The other brands are switched by the circles in the top-right corner of Maya's page. Adding `brand=<id>` to any link shows the same design as that brand, for example `#/email?brand=clearwell`. It stays until the page is reloaded.
- The phone's back button goes one step back: from the chat to the email, from the email to Maya's story, from the story to the start screen.

### The email

- It's shown as an open message in Mail on an iPhone: "Inbox" and the two arrows at the top, the sender with a round initial, "To: Maya", the time, the subject in bold, and Mail's four buttons at the bottom.
- Inside it is the brand's email: the logo, the text, the question with three answers, the sign-off, "Pause" and "Unsubscribe".
- The Mail look is drawn from Claude's memory of the app, not from a screenshot. To check against a real iPhone.
- Mail's own buttons are shown, not played.
- The brand page is a plain screen with a logo and the chat button. Neither is the real thing (part 1).

### The second way in

The flow plan left this to the build plan.

- `#/site` shows the brand page with the note on the chat button.
- A tap on the note or the button opens the chat: the opening, then the question with the three answers (step 1).
- An answer then plays the same ending as from the email. It's the same script with a different first step, so it costs almost nothing.
- The note can be closed. It doesn't come back in the same visit (step 1).

### Nothing but the flow

- On a phone only the flow shows. There is no prototype strip and no "About" sheet, so it looks like the real thing.
- The phone's back button is the way to the start screen, and so to another ending.
- On a laptop the flow shows in a phone-sized frame in the centre, over Maya's blurred page.
- What a brand changes and what's fixed is said in the reasoning on the start screen, not inside the flow.

### Shown, not played

The flow plan shows some things without playing them: the other answers, "Not now", "Pause" and "Unsubscribe".

- They look like the real thing.
- A tap shows one small neutral note above the "Ask anything" field: "Not in this demo." After a tap on an answer it also names the scripted one: "Try "Less tight"."
- So there are no dead taps and no made-up answers.
- The "Ask anything" field is drawn, not a real text field. The phone keyboard never opens and nothing jumps. A tap shows the same note.

### Close and reopen

- Closing the chat leaves the button on the page. Opening it again shows the chat where it was left (step 2).
- A reload plays the same link again from its beginning.

## 5. Brand settings

Everything a brand can change sits in one object in `brands.ts`.

| Setting | Clearwell | What it drives |
|---|---|---|
| Name and logo | "Clearwell", a text logo | The brand page, the email |
| Brand colour | Soft green | Main buttons, the chat button, the avatar. This is skin.chat's one brand slot (skin.chat reference) |
| Type | Inter | All text. It's skin.chat's font, and the file is already in `reference/` |
| Tone | Quiet expert | The texts in `copy.ts` |
| Catalog | 3 products: name and when to use | The routine rows, the corrections |

- How it works: the active brand's settings become CSS variables on the page. A brand switch swaps the variables and the texts. Nothing else changes.
- One colour is enough. The soft tint for the answers and the Skin Portrait chip is mixed from the brand colour. The text on a button is white or dark, whichever reads better. Neither is a setting (our call). skin.chat uses a fixed pale blue-to-lilac here.
- The page stays white for every brand, as in skin.chat.
- The flow plan also lists refill timing (section 8). It isn't in the data: the refill line isn't built.
- Tone: `copy.ts` holds one base text per key. The second brand rewrites only the keys where tone shows: greetings, replies, the email's opening. The rest falls back to the base.
- Each brand's colours are checked by eye for readable text. No formal audit (part 7).

**Fixed in the code, not in `brands.ts`**, so a brand can't change it by accident:

- Layout and spacing, in skin.chat's own sizes: 14px text, 20px corners on the shopper's messages, 16px on rows and photos, fully round buttons.
- The shopper's dark message bubbles and the round avatar (skin.chat reference).
- Text colours: `rgb(27 31 38)`, secondary at 70%, tertiary at 40% (skin.chat reference).
- The flow, the script's order, the score rules, the stop rules.

## 6. Data and logic

### Scripted data

`shopper.ts` and `catalog.ts` hold exactly the flow plan's tables: the shopper, the catalog, the days (section 2), the photo results and the prototype's path (section 3).

### Dates

Dates count from the day the prototype is opened, so it's always day 21.

| Date | Counted as |
|---|---|
| The analysis | Today − 24 days |
| Delivery, the routine's start | Today − 21 |
| The check after a fix | Today + 14 |
| The week-8 check | Today + 35 |

- "Their own dates" are then always real, upcoming dates.
- The week labels ("week 3 of about 8") are fixed text.

### The script

One sequence in `script.ts`, shared by the three answers. It branches only where the flow plan's "What differs by answer" table does.

| # | What plays | Flow plan | Differs by answer |
|---|---|---|---|
| 0 | Already in the thread: a few messages of the first visit, folded under a small "Previous chat" button, then today's date | Step 2 | No |
| 1 | Their answer from the email, as their own message | Step 2 | The answer |
| 2 | Greeting, the routine rows, reply to their answer | Step 3 | The reply |
| 3 | Three questions, each with the chat's short reply. Tightness isn't asked again: the opening question quotes it | Step 4 | "Not quite right" has its own three |
| 4 | One line: "By how your skin feels, you're on track." | Step 4 | Not in "Not quite right" |
| 5 | The photo ask, with its reason. The light tip is left for the corrections | Step 5 | The reason |
| 6 | "Analysing…", then one sentence, the two photos side by side and the scores | Step 6 | State B, C or D |
| 7 | What the chat says about the result | Step 6 | Yes. D asks the photo check, and "yes" is played |
| 8 | The next step | Step 7 | Corrections and the week-8 check, or one fix and the 2-week check |
| 9 | The check-in is finished | Step 7 | Skin Portrait shows the next check |

- From the site, row 1 moves: after the routine rows the chat asks the question with three answers, then replies.
- Each question marks one answer as played (section 3, "The prototype's path"). The rest are shown, not played (part 4).

### State

Kept in memory, in `flow.ts`: the start (email or site), the answer, the place in the script, photo taken or not, reminder added or skipped, chat open or closed, Skin Portrait open or closed. The brand is kept in `store.tsx`.

### Score lines

Calculated in `scores.ts`, not typed.

- One number, 5 points, the flow plan's placeholder (step 6).
- Now minus start: +5 or more is better, −5 or less is worse, anything between is about the same.
- Order: better, about the same, worse (step 6).
- Redness shows only when it really moved (step 6).

What the rule gives for the three results:

| Result | Lines |
|---|---|
| About the same, state B | Hydration: about the same (62 → 64) · Texture: about the same (64 → 63) |
| Feeling good, state C | Hydration: better than before (62 → 71) · Texture: about the same (64 → 62) |
| Not quite right, state D | Hydration: better than before (62 → 68) · Texture: about the same (64 → 63) · Redness: more than before (87 → 72) |

### Progress

Shown in two places with the same parts (`Progress.tsx`):

- **In the chat**, right after the new photo: one sentence, the two photos side by side, the scores.
- **On the Skin Portrait page**: the same, then the week of the routine and, once the check-in is finished, the next check.

- skin.chat already keeps the photos side by side in Skin Portrait, with no comparison (skin.chat reference). We keep its page and add the comparison.
- The page opens from the Skin Portrait chip in the chat's header, as in skin.chat.
- Two states can be reached: before the photo and B. States C and D are described, not played. State A is described, not built.
- Before the photo the page shows the first photo and where the scores started.
- A score row reads words first, numbers second: "About the same", then "62 → 64" (step 6).

### The week of the routine

No pinned bar. The week shows in three small places, and the timeline in one:

- In the Skin Portrait chip, always on show in the chat's header: "Skin Portrait · Week 3 of 8".
- On the Skin Portrait page: one plain bar from the start to week 8, with their own dates. No text under it.
- In the email: one quiet line, "Week 3 of about 8".
- At the end of the previous chat: the timeline. A title, "Routine in weeks", then one row of numbered circles on a line: 0 — 3 — 8, after Contentful's progress stepper. The last circle is the week the routine runs to: about week 8, from her concerns (texture). One colour only, the brand's, as on the main buttons and picked answers: a done week shows a check on the brand colour, with the line up to it in the brand colour, and the current one has a brand outline and a brand number. Numbers and the check are semibold in every state. The weeks ahead use one grey for their lines, outlines and numbers. Lines and outlines are 2px. Here week 0 is done, with a check, and the line to week 3 stays grey: week 3 isn't reached yet. The numbers have one weight in every state. The weeks are data (`shopper.ts`).
- In today's opening, after the routine: the same timeline at week 3, with week 0 done and a line in the brand colour up to week 3, which has the brand outline (✓ — 3 — 8). The previous chat keeps its state from the first visit, as it was sent. No dates: they appear once the order arrives (section 5). It's a part of our library (`Timeline.tsx`, styles at the end of `library.css`), so the email and Skin Portrait can use it too.

### What the chat knows

- After the greeting the chat shows three plain rows: the two products they bought with when to use them, and the one they didn't buy, greyed, "Not in your order". No pitch.
- There is no "Update my routine" in the prototype. In the product they'd correct it by typing in "Ask anything".

### Pictures

- **Photos.** One sample face for "then" and "now": an AI-generated woman's face, to match the name Maya. Not a real person. It comes from the same source as the face in our skin.chat run (skin.chat reference), but it isn't that photo. A small copy, with the file's hidden data removed.
- We don't retouch the photo to fake a change. The words and the scores carry the difference.
- **Products.** No pictures. The routine is plain rows. The reference product photos are real brands' listings, so they stay out (section 8).
- **Icons.** skin.chat's own interface icons from `reference/`: camera, chevron, close, arrow.

### The two buttons

- "Add to calendar" and "Skip this reminder" each turn into a done state and leave one short confirming line (section 12).
- No real calendar file is made. It would need the public link to point back to the chat (step 7), so it can only come after going live, and only if time is left.

## 7. On a phone (tech call)

**What we target**

- Modern iPhones in Safari and modern Android phones in Chrome: the current version and the one before.
- Phone screens from 360 to 440px wide, held upright.
- Today's CSS is fine. No workarounds for old browsers, and nothing experimental.

**What we make sure of**

- Sized to the phone's real visible height, so the browser's bars don't cut the chat. Notch and home bar are respected.
- No sideways scroll.
- The chat is a sheet over the brand page. The page behind doesn't scroll while a sheet is open.
- The Skin Portrait chip sits outside the scrolling thread, so the week can't scroll away (section 5).
- New messages scroll into view.
- Pauses are short: about half a second of "typing", about 2 seconds of "analysing…".
- Tap targets are at least 44px high, also where a button looks smaller, as in skin.chat.
- Fonts and pictures come from the prototype itself. No requests to other services.

**What we skip, because it's a test task**

- Old phones and old browsers, tablets, landscape.
- A desktop layout. On a laptop the flow just sits in a phone-sized frame.
- Dark mode, offline use, speed tuning.
- A screen-reader pass and a formal accessibility audit.
- Automated tests. We check by hand (part 9).

## 8. Build order

Each step ends with something that works on a phone. The main path comes first. If time runs out, what's missing is at the edges.

| # | Step | Done when | Time |
|---|---|---|---|
| 1 | Set up | A Clearwell page runs on localhost and opens on a phone over Wi-Fi | 15 min |
| 2 | Shell, start screen, brand settings, data | The start screen lists all the links, and each one opens. Its reasoning shows "to be written" lines. The phone frame and the strip work. The data files hold the flow plan's tables | 25 min |
| 3 | The chat, "About the same" | The sheet, the bubbles, the chips and the script play from the answer to the week-8 check, with plain cards | 45 min |
| 4 | The email and the brand page | The email's buttons open the chat with the answer in it. The chat closes and reopens | 25 min |
| 5 | The journey | The timeline, the bar, the "journey started" card, the divider, the routine card with "Update my routine" | 25 min |
| 6 | Progress | The short cards, the full view, the score lines, the photo step. State B and the view before the photo | 45 min |
| 7 | The other two endings | "Feeling good" with state C. "Not quite right" with state D, the fix and the 2-week check | 25 min |
| 8 | The second way in and the last parts | `#/site` with the note, the About sheet, the two buttons with their lines | 25 min |
| 9 | Check on phones | Part 9 passes on a modern iPhone and a modern Android phone, over Wi-Fi | 25 min |
| 10 | The reasoning | The start screen's texts are written. No "to be written" line is left | — |
| 11 | Go live | The public link opens on both phones. The repo is shared | 15 min |
| 12 | Only if time is left | The second brand | — |
| 13 | Simplify the look | Every screen follows skin.chat's own interface, with far fewer parts | — |
| 14 | Simplify the start | The start screen is the draft reasoning and one button. The email looks like an open message in Mail on an iPhone | — |

Steps 2–8 are written as first built. Step 13 then took parts out: the strip, the timeline, the bar, the "journey started" card, "Update my routine", the short cards, the full view and the About sheet.

A bit over 4 hours for steps 1–9. Our estimate, not measured.

**If time runs short, cut in this order:**

1. The second brand. It's optional in the flow plan.
2. Motion: the typing pauses and the sheets' slide.

Anything cut from the flow plan's "Built" list goes into the note on where we stopped (brief).

**While building**

- Texts are copied from the flow plan, not rewritten. A missing text, like the short confirming lines (section 12), is written with its screen.
- Time is tracked per step.
- Commits go straight to `main` (project rules).
- Before each commit, the sensitive-data check (project rule 5): no local paths, local addresses, names, emails or keys in the code or the config. `package.json` gets no author.

## 9. Done check for the prototype

This maps to deliverable A in the project's DoD.

| DoD item | How we check |
|---|---|
| The main return path, end to end | From the start screen to the email, and from "About the same" to the next-check message, with no dead end. The other two buttons give the note |
| Opens and works on a phone | For now over Wi-Fi from localhost, on a modern iPhone in Safari and a modern Android phone in Chrome: no sideways scroll, nothing cut off, the chat and the Skin Portrait page open and close |
| A hosted link plus the repo | Open until step 10. The localhost version doesn't cover it |
| One brand style | It opens in Sunfold. The other two are on the switch. No real brand anywhere |
| What a brand changes, what's fixed | The start screen says it, and `brands.ts` holds exactly that list |
| "Nothing changed" and "scores got worse" | State B shows, in the chat and on the Skin Portrait page, with the score lines from part 6. "Got worse" (states C and D) is described in the rationale |

And also:

- Every text matches the flow plan, or is marked `NEW` in `copy.ts`.
- Every tap does something: it plays, or it says it isn't played.
- The button on the start screen opens the email, and its "About the same" opens the chat.
- No requests to other services. No personal data in the repo.
- It fits the 20-minute presentation: the ending is two taps from the start screen, through the email.
