# Raw ideas

A working list, not decisions. Ideas get added, merged or crossed out as we go.

## Framing: week 3 decides whether the routine survives

- Week 3 is a "life or death" moment: the shopper decides whether they're happy with the routine. If they decide "it's not working", the brand loses the routine, the refill and probably the customer. This is where the chat backs the brand up.
- why: doubt and quitting cluster in weeks 2–4 (user research, from brand or unverified surveys). Loyalty follows results: nearly half would switch brands over performance (Provoke Insights, vendor), and 31% switched skincare brand in the past year (aytm, vendor)
- watch out: it's a window, not a day. Some decide earlier: half of young retinoid users stopped within 2 weeks (Yang, 2026). For them week 3 is the last chance, which makes the early check-in a few days after delivery matter
- watch out: there's rarely visible proof by week 3. Only feel, comfort and tolerance can realistically show (user research). What keeps people going:
  - being asked about their own skin; plain reminders didn't help in trials (user research)
  - an honest timeline: 77% would value an AI tool that shows what results to expect (Harris Poll), and 66% of young shoppers distrust instant-results claims (Curology, brand)
  - fixing irritation before it ends the routine
- watch out: backing the brand works only through the shopper. People assume a brand's tool is a sales tool, and 43% fear paid placement in AI advice (Harris Poll). Week 3 must feel like help, not like defending the product
- watch out: week 3 comes from the brief's scenario. The research doesn't prove it's the best moment (see CLAUDE.md)

## Across everything: maximum personalization

- Every message is built from the shopper's own data: their concern, their products by name, their scores, days since they started. No generic scripts (shoppers spot those and lose trust).
- Timing is personal: refill from each product's size and use, check-in from their concern.
- Content adapts to what they told us: sensitive skin gets gentler wording, an active like retinol gets a purging check.
- Progress is compared to their own last visit, not to an average.
- "Got worse" gets a reply about their routine, not a general one.
- Channel and how often: only what they chose.
- Watch out: say why the chat knows something ("3 weeks ago you told me…"). Memory without a reason feels creepy.
- Watch out: let them see and reset what is remembered.
- Watch out: personalization comes from data, not design, so it still works for every brand.

## Across everything: people are fragile, be gentle

- Why: skin is tied to self-esteem. Reviewers say a scan "made me more insecure" and "made me feel sad"; a writer said Skin360 "freaked me out". Some users are teenagers.
- Start with what improved or held steady, then what got worse.
- Describe, don't judge: "a bit more redness on the cheeks", not "problem areas" or "damage".
- No red heatmaps over the whole face. Details on request.
- Small score moves are shown as normal variation, not as a loss.
- Never blame: ask how the routine went instead of "you didn't use it".
- Let them correct the analysis ("that's a freckle, not a spot").
- Let them skip the photo or the scores and still get help.
- Reminders without guilt: no "you missed", no "we miss you".
- No anti-ageing push to the young.
- Fixed for every brand: brands change the tone of voice, not the kindness.

## Across everything: ease the bad outcomes

- One of the outcomes we design for. When something goes wrong (irritation, no change, worse scores, the wrong product), the shopper gets help in the chat, and the brand hears about it first.
- Feedback routing: catch a bad experience before it turns into a bad review somewhere else (Amazon, a friend, social media), and work with it:
  - the check-in asks how it went, and a bad answer gets a real next step: use it less often, pause it, swap it, or see a dermatologist
  - the brand learns why, tied to the skin profile (see "What the brand gets")
  - why: today a failed product disappears quietly. It's given away and the brand never learns why (informal talks). Much of the restock happens on Amazon (user research). A shopper who got only "sorry to hear that" left; one who got tips "pushed through" (App Store reviews)
  - watch out: the aim is to fix the problem, not to stop the review. The shopper can still leave any review anywhere
  - watch out: asking only happy shoppers for public reviews may break platform and consumer rules (Claude's assumption, not checked)
- Fewer returns:
  - catch irritation in the first days, a product in the cart that doesn't suit them, or a clash with what they already use, before it becomes a return
  - watch out: our research has no data on skincare returns, how many or why. Assumption.
- Fixed for every brand, like the kindness rules above.

## Cases

The brief asks for one path end to end and a short list for the rest. One flow, different starting points: the chat opens from what it knows.

| Case | What the chat knows | Reason to come back | In our work |
|---|---|---|---|
| A. Did a skin check, bought in the chat | Scores, routine, what was bought, delivery date | "Is it working?" check-in, then refill | Designed end to end (2 of 3 bought) |
| B. Did a skin check, didn't buy | Scores, the suggested routine | Their saved results, a question, season change | Short list, maybe one opening screen |
| C. No skin check yet | Maybe a past chat, maybe nothing | Not a return to a consultation, it's a first one | Out of scope (first visit), one line in the rationale |

- Case B may have bought after all: brand sites are mostly for research, and the buying often happens on Amazon or at a retailer. The first question is "Did you end up getting anything?" If yes, it becomes case A with outside products (see "products from other shops").
- Case B may have no consent and no shipping address, so the only touchpoints may be the site itself (same browser) and anything they opted into.
- Case B is not a lost sale to chase: price and doubt are the top reasons not to buy. No discount push, no "your cart is waiting".
- Variants inside case A, not designed: bought all 3, bought only 1, irritated in the first days (see the early check-in).

## Why they come back

- Refill moment: the 2 bought products run low around day 20–25, which matches the 3-week scenario.
- "Is it working?" check-in: a quick, honest look at what can and can't change by week 3.
- The 3rd product, the one not bought: a reason to complete the routine, if progress suggests it helps.
- Seasonal reminders based on the shopper's local weather:
  - we know the shipping address from the 2 products bought in the chat
  - track the local weather and react to real changes: first cold snap, dry heating season, rising UV, humid summer
  - suggest a small routine change and products for it (e.g. a richer moisturiser for winter, SPF for spring)
  - watch out: the address was given for delivery, so using it for weather needs consent or at least a clear notice
  - watch out: city-level weather is enough, no need for the exact address
- Ask before you buy: check a product's ingredients and origin before buying, other brands included. One person in the informal talks uses ChatGPT for exactly this. Short list, not the designed path.
- A stand-in for a dermatologist: AI skin analysis is cheaper and faster. Young shoppers often can't pay for a dermatologist, and anyone with a new worry gets a quick check without waiting for an appointment. Once they've found a brand's chat that does this, they may come back to it.
  - why: 43% of 13–29s trust dermatologists most, but half have never seen one, and cost is the top barrier at 45%. 53% of 13–29s are confused about which products are right for them (Curology, brand). 32% of US women already use AI for skincare advice (Haut.AI survey, vendor)
  - fits the "young explorer" segment: quick wins, low cost (user research)
  - how shoppers see a brand's chat is a range: a sales rep ("They're all trying to sell you something", Mumsnet), a shop advisor ("I basically want to be fussed over for a minute, and then inevitably sold to", Mumsnet), or a stand-in for a dermatologist. No source measures who sits where. Could be a question in the cheap test
  - watch out: waiting for an appointment is our idea, not in our research
  - watch out: too much trust. An AI scanner suggested retinol and salicylic acid to a tester with rosacea, who said "This tool is not for people with skin conditions" (Which?). Trust in AI advice is lowest for acne and sensitive skin (Harris Poll). The chat gives a quick check, not a diagnosis, and says when to see a real dermatologist: burning, spreading redness, rosacea (user research)
  - watch out: when the shopper has a dermatologist, the chat defers, not competes (informal talks)
  - watch out: a chat seen as a sales tool won't be trusted as a neutral check. 43% fear paid placement in AI advice (Harris Poll). Honest advice, even against a sale, earns this role (see "honest advice in the cart")
  - watch out: for a free quick check they could use ChatGPT or the public skin.chat instead. Only the brand's chat has their history (our reading)
  - watch out: no data that shoppers come back to a brand's site for this. Assumption.
- Memory itself: the brand's site becomes a skin app that knows them.
  - Today a brand's site is a static shop: everyone sees the same pages. Skin.Chat adds what a good counter in a physical shop has: an advisor who remembers your skin, your routine and what you bought.
  - For a shopper loyal to the brand, its site can work as their skincare app: scores, photos, routine and the next check-in in one place, with nothing to install.
  - why: the brand site's edge over Amazon is the shopper's own history (user research). Being remembered builds trust: "the sunscreen I actually use" (Which?). 91% are more likely to shop with brands that remember them (Accenture, 2018, older). Being asked again for known info makes people angry (4 App Store reviews). Photos kept in one place are among the most praised features (10 Musely reviews)
  - fits the "loyal ritualist" segment best: settled routine, wants comfort and easy restock (user research)
  - watch out: only 38% are comfortable sharing past purchases with an AI beauty tool (Harris Poll), so memory says where it comes from and is easy to reset
  - watch out: without login it works only on the same browser
  - watch out: the brand's chat sees only part of the routine, since people mix products from many sources (informal talks). See "products from other shops"
  - watch out: no data that shoppers want to use a brand's site this way. Brand sites are mostly used for research; 37% buy there (user research). Assumption.
- Scores as a small pleasure: some people may check their skin the way they check likes on a post. Watching a number go up feels good.
  - why: when Musely removed its avatar and rewards games in late October 2026, 15 reviews complained within two weeks. Photos kept in one place "keep me accountable" (Musely reviews). Neutrogena Skin360 prompts a new scan every 7 days; TroveSkin keeps a daily selfie journal with a 0–100 score (competitor research)
  - watch out: skin changes slowly, so frequent checks mostly show noise. A Skin360 reviewer said a week is too short to see any change (competitor research)
  - watch out: the scores themselves are noisy. Changing the light moved scores by +39 to −25 points (Which?), and they jump between scans: "69 and 79" (App Store review). People may end up chasing the light, not their skin, and a drop caused by noise hurts
  - watch out: the same loop works in reverse. Scores have made people feel "more insecure" and "sad" (App Store reviews), and 85% want AI to help them feel confident, not judged (Harris Poll). Some users are teenagers (see "people are fragile")
  - watch out: interest fades. In clinics, photo uploads fell from 162 of 206 patients at 1 month to 45 at 6 months, and no trial shows that photo tracking alone keeps people on a routine (user research)
  - watch out: no data on how many shoppers would want this. Assumption.
- Progress as a public diary: some people make their routine a public blog. For bloggers, sharing changes and reviewing products is part of their work.
  - why: public routine diaries already exist: a weekly treatment log with photos (acne.org), an "empties" newsletter rating each finished product (Tender Forms), posts about progress photos (Hotline Skin) (user research). 62% of 13–29s use social media for skincare advice (Curology, brand). One person in the informal talks picks products from bloggers and trusts a dermatologist-blogger
  - why: sharing the analysis with a person is already wanted. Mary Kay users ask to send their consultant the whole skin analysis (5 App Store reviews), and one person in the informal talks sent skin photos to a dermatologist-blogger
  - lighter version (Claude's suggestion): share with one person, a friend or a dermatologist, not the public
  - watch out: a face in public is a big step. Only 32% are comfortable sharing a selfie even with an AI tool (Harris Poll). Sharing is opt-in per post, and the shopper picks what goes out: scores, photos, or no face
  - watch out: a public score looks like a fact, but scores can be wrong, especially on darker skin, and swing with the light (Which?)
  - watch out: 45% want sponsored recommendations disclosed (Harris Poll). If the brand pays a blogger, the post has to say so. Ad disclosure rules may require it too (Claude's assumption, not checked)
  - watch out: public "no change" and "got worse" posts will happen. The brand can't hide them, in line with handling bad answers honestly
  - watch out: the brief's scenario is a regular shopper on a brand site, and bloggers are a different user. Short list, not the designed path (our reading of the brief)
  - watch out: no data on how many shoppers would share progress publicly. Assumption.
- Purging check: if the routine has an active like retinol, expect possible breakouts in weeks 2–4 and check in then.

## How they come back (touchpoints)

- One message that combines the refill and the progress check, sent around day 21.
- Channel: whatever the shopper agreed to (email first, WhatsApp if opted in).
- Deep link opens the widget on the brand site with the conversation already loaded.
- Reminders on the site, not only in the chat. No consent needed, the shopper came on their own:
  - main page: a light reminder ("Your 3-week check-in is ready")
  - product pages of products already bought: a contextual one ("3 weeks in. Want to see how your skin is doing?")
  - product page of the product not bought: "This completes your routine"
  - keep it inside the widget (the chat button opens a small message bubble), not as banners in the brand's layout, so no custom work per brand
  - show once; if closed, hide until the next moment worth mentioning
  - watch out: without login it only works on the same browser
- Honest advice in the cart: the chat speaks up when a product in the cart doesn't suit what it knows, and suggests removing or swapping it:
  - why: the top worry about AI beauty advice is being sold to (43%), and people assume a brand's tool is a sales tool. Advice against a sale is the clearest proof it isn't. Also, 29% of women had irritation from a product they didn't fully understand, and a third have mixed actives without knowing if they go together
  - what it can catch: an ingredient that stung them before (from the early check-in), two products doing the same job (two retinoids, or one they already own from another shop), a strong active while their skin is irritated
  - sometimes "remove, no swap" is the honest answer; a swap every time looks like upselling again
  - say why: "You said last week the toner stung". One tap to keep it. Never remove anything by itself
  - only when the chat really knows, from what the shopper said or a clear clash, not from a score alone (scores misread)
  - plain words, not medical: "may sting for you", not "unsafe"
  - a small bubble from the chat button, inside the widget, so no custom work per brand. Once per product
  - feeds "what the brand gets": the brand learns which products clash with which skin
  - assumption: the chat can read the cart and recognise the shopper (same browser or logged in)
  - watch out: a brand may not like a chat that talks people out of a sale. The case for it: trust, fewer returns, fewer bad reviews. Warnings about irritation and clashes stay fixed for every brand
- Printed card from the chat inside the order, not shop marketing:
  - personal: the shopper's routine, morning and evening order, the check-in date
  - personal QR code that opens the chat already knowing them, even on another phone
  - could go on the packing slip, which is already printed per order: no extra print run or paper
  - signed as "your skin advisor" in the brand's style, since shoppers know the assistant as the brand's, not as Skin.Chat
  - assumption: the brand's warehouse can print a personal QR per order
- Stop rules: each email gets one follow-up 5 days later, only if they ignore it. If they ignore the follow-up too, stop until they come back on their own. If they check in, the next check comes (week 8), with the same rule. Otherwise emails stop only when they unsubscribe.
- Different reminders for different cases and products, not one fixed schedule:
  - refill: timed per product, from its size and daily use
  - refill matters most in the first cycle of a new product; once a routine is settled, people see the bottle running low themselves (informal talks)
  - progress check: timed per skin concern (e.g. hydration around week 2, texture around weeks 6–8, lines 12+)
  - open question: one combined message or a separate one per product
- Early "how does your skin feel?" check, a few days after delivery:
  - why: reactions usually show in days 1–4 ("my skin never tells me it hates things until day 3 or 4"), and good beauty advisors already call after 3 days (Cos Bar: 3 days, 3 weeks, 3 months)
  - if irritated: adjust now (use less often, pause one product, see a dermatologist if it burns), don't wait for week 3
  - count days from delivery, not from purchase
  - watch out: irritation from actives like retinol can build over weeks 2–4, so a good day 3 doesn't replace week 3
  - watch out: the brief's scenario is week 3, so this is the step before it (day 3 → week 3 → week 8), not the designed path
- "Add to calendar" for the next check-in or refill date, offered at the end of a chat:
  - the shopper owns the reminder, so it doesn't depend on marketing consent
  - it ends on its own, with nothing to unsubscribe from
  - a calendar file with its own alert, plus a link back that opens the chat with context loaded
  - watch out: if a date changes, the event in the calendar stays where it was

## What they get when they come back

- The chat opens with their own context: last scores, the routine, what they bought, what they didn't.
- First message is about them, not a sale: "It's been 3 weeks with your routine. Want to see how your skin is doing?"
- A few short questions instead of a form: how often they used each product, any irritation.
- Reorder in one tap, with the same products already in the cart.
- Option to skip the selfie and just reorder or ask a question.
- Products from other shops:
  - the shopper can add products they use but didn't buy here (another brand's cleanser, a prescription cream)
  - the chat takes them into account: no doubled actives (two retinoids), no suggesting what they already have
  - when one of those runs out, suggest the brand's own alternative that does the same job
  - why: 5 App Store reviews complain that recommendations ignore what they already own
  - watch out: needs a product database beyond the brand's catalog (assumption)
  - watch out: we only know when an outside product runs out if the shopper tells us when they opened it
  - watch out: the swap suggestion must not feel like an ad (7 reviews say suggestions feel like ads), so only at run-out and with a reason

## How they see progress

- Week 3 asks how the skin feels, not for a new photo:
  - why: visible change takes 6–12 weeks, people judge by feel first, few are comfortable sharing a face photo, and light can move a score more than 3 weeks of skincare
  - 2–3 taps: tight or comfortable, breakouts, stinging or redness
  - the answers are progress too: "felt tight → feels comfortable" sits next to the scores
  - photo is optional at week 3 ("hydration can already show"), suggested at week 8
  - watch out: the brief still asks for a progress view with "no change" and "worse" scores, so the photo comparison stays in the prototype, as the optional path at week 3 or as the week-8 moment
- New selfie next to the last one, same angle guide, filters off.
- The wow moment: a new photo next to the old one can show a change the shopper doesn't see in the mirror.
  - People see their face every day, so slow change is invisible to them. A skin coach's client felt "more or less the same", then said "OMG" at her side-by-side photos (user research). La Roche-Posay says looking at your skin every day hides progress and leads to discouragement (competitor research)
  - a pleasant surprise can motivate them to keep going, and make the next photo something they want to take
  - seeing your own face can change what people do: in a trial, a face-ageing selfie app raised daily sunscreen use from 15% to 23% (Brinker, 2020). That was a simulated face, not a real before and after
  - shoppers ask for photos side by side (3 App Store reviews), and photos kept in one place are among the most praised features (10 Musely reviews)
  - watch out: a visible change is unlikely at week 3. Hydration and comfort can move by now; breakouts and texture take 6–8 weeks (competitor research). The wow is more likely at week 8
  - watch out: light, angle and phone processing can change a photo and its score more than the products do (competitor research). A fair comparison needs the same conditions (see the overlay idea below)
  - watch out: the surprise can be unpleasant too. "No change" and "got worse" get the same care
  - watch out: no trial shows that photo tracking alone keeps people on a routine (Cao review, 2026). The wow is a moment, not a habit
  - watch out: no filters or retouching. Seeing a beautified version of your own face hurts body image (user research)
- Show the last photo while taking the new one (a see-through overlay), so the shopper can match light, angle and distance:
  - why: consistent photos are hard (5 App Store reviews), and scores jump between scans (3)
  - watch out: the selfie capture flow is out of scope, so this can only be shown as a note or one frame
- Ask for context before judging the new photo: sleep, stress, exercise, how they felt, new medication or hormones, travel or a weather change:
  - skin is not only about products, so a change can have another cause
  - lets the chat say "this may be the stress, not the routine" instead of blaming the products or the shopper
  - why: one App Store reviewer valued logging "daily contributing factors"; others name summer and hormones as causes
  - keep it to 2–3 optional taps, not a form
  - watch out: sleep, mood and medication can count as health data, so ask lightly, explain why, and make it skippable
- A score change shown with a "normal variation" band, so small moves don't look like big wins or losses.
- An expectation timeline per concern: hydration 1–2 weeks, texture 6–8, dark spots 10–12, lines 12+.
- "Nothing changed": framed as on track for week 3, with the date when change can realistically show.
- "Got worse": first check the photo conditions, then ask about routine use, then recognise purging or irritation, then adjust the routine.
- What the shopper felt counts as well as the score (e.g. "skin feels less tight").
- Book the next check-in for a date when change can show (e.g. week 8).
- Expected result as a reason to take the next selfie (a simulated "after" image of the shopper's own face):
  - the picture makes the shopper curious, so taking a new photo feels worth it: "It's been 3 weeks. Want to see where you are on the way to week 8?"
  - the new photo is compared with the last real one; the expected result sits at the end of a timeline ("week 3 of 8") as a goal with a date, not as a target to match
  - name what can change by now: "Hydration usually shifts first. Let's check it."
  - why: Haut.AI already builds this (SkinGPT, Olay Skin Advisor), and Olay, RéVive and La Roche-Posay show one. All of them use it at the first visit to sell the routine; nobody uses it on the return visit
  - watch out: at week 3 the real photo will almost always look worse than the expected one; a direct comparison turns the check-in into a test the shopper fails and makes "nothing changed" and "got worse" feel bigger
  - watch out: a real face next to a perfected one can hurt self-esteem
  - watch out: avoid "Does your face look different?"; most will say "not really" and lose the reason to take the photo
  - watch out: needs the brand's clinical trial data, so not every brand has it; the flow must work without the picture (timeline and last-photo comparison only)
  - assumption: the first visit showed an expected result (the scenario doesn't say so)

## What the brand gets, besides sales

- Every check-in tells the brand something, even when the answer is bad: irritated, wrong smell or feel, no change yet, too expensive, already had something similar.
- Today a failed product disappears quietly: it's given away or never bought again, and the brand never learns why (informal talks).
- Tied to the skin profile, it's worth more than a 2-star review: "stings for sensitive skin with high redness".
- Uses: better advice for the next shoppers ("people with skin like yours often find this too strong"), input for new products, fewer returns.
- The metric doesn't have to be reorders. For example: share of shoppers who finish the week-3 check-in, whatever the answer. A reorder-only metric pushes the design to sell, and shoppers already suspect a brand's tool is a sales tool.
- Watch out: the reason to come back is still value for the shopper (an adjusted routine, a swap, advice). Feedback is a by-product, never the ask. No "rate your product" surveys.
- Watch out: tell the shopper their answers help the brand improve, anonymised, and ask before turning them into a public review.
- Watch out: a brand may want to hide bad answers. The chat still handles them honestly, and this is fixed for every brand.
- Watch out: the brand admin is out of scope, so this goes in the rationale, not the prototype.

## Brand-specific vs fixed

- Brand changes: colours, type, logo, tone of voice, catalog, refill timing per product.
- Fixed: the flow, the layout, the progress view logic, the stop rules.

## Parked

- Messenger-first version (WhatsApp, Instagram).
- The shopper's own Skin.Chat (browser extension or app) that advises in any shop, Amazon included:
  - why: the restock often goes to a marketplace; one person in the informal talks already uses ChatGPT to check products before buying; the honest cart advice would work everywhere
  - closest existing thing: skin.chat, the public non-brand version
  - why parked: Skin.Chat is sold to brands and recommends from the brand's catalog. An assistant that follows the shopper to other shops serves the shopper, not the brand paying for it. Shoppers know the assistant as the brand's
  - watch out: taking what one brand's chat learned to other shops needs its own consent
  - inside the brief, the same need is covered in a lighter way: add products from other shops to the routine, and "ask before you buy" about any product, inside the brand's chat
- Wild idea: Skin.Chat inside ChatGPT. It feels like ChatGPT with skin analysis and a link to your favourite brand. The rival becomes a channel.
  - why: people already trust ChatGPT and use it for skincare. 49% get beauty recommendations from generative AI (NielsenIQ and CEW). One person in the informal talks trusts ChatGPT and checks products in it before buying
  - why: a brand's own chat is suspected of selling (43% fear paid placement, Harris Poll). Inside ChatGPT it may borrow ChatGPT's neutral feel (our reading, not checked)
  - watch out: ChatGPT "plugins" were replaced by GPTs and later by apps inside ChatGPT. What such an app can do today (photos, memory, checkout, brand style) is not checked (Claude's assumption, not checked)
  - watch out: the brief puts the brand's website first and messengers second. This is a return path we don't design
  - watch out: one brand or many? One brand's catalog inside a neutral tool brings the sales suspicion back. Many brands turns it into "the shopper's own Skin.Chat" above, which the paying brand won't want
  - watch out: the selfie and scores would pass through another company. Only 32% are comfortable sharing a selfie with an AI beauty tool (Harris Poll)
- Loyalty points for checking in.
