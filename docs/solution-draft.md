# Solution draft

> Working notes. The start page and the prototype are the final version.

A working draft, kept short on purpose. We fill it in as we decide.

## 1. Case

- The shopper did a skin analysis in a brand's chat: a selfie, with scores (brief).
- They got a routine of 3 products and bought 2 of them in the chat (brief).
- Open: did they also take the quiz? On skin.chat, the selfie and the quiz are two separate ways to get a routine (skin.chat reference). We haven't seen whether the selfie path also asks questions.

## 2. Three weeks pass

- Week 3 comes from the brief. Research doesn't prove it's the best moment (see CLAUDE.md).
- Likely by now: the 2 products are in use, but not every day. Little visible change. Doubt about whether to go on (user research).
- Two clocks:
  - The routine counts from delivery, when the shopper can start using it. The purchase alone means nothing for the routine.
  - The skin counts from the last analysis. That's the baseline for any comparison, and skin changes over time whatever they use.
- So in the brief's scenario the skin is 3 weeks past the analysis, and the routine has run 3 weeks minus the delivery time. Open: how long delivery takes.

## 3. They come back

### Why: leading candidate, nothing decided yet

**1. Is it working?** So far it looks like the only reason that answers all four of the brief's questions in one path:
- Why: it's the brief's own first example, "a routine takes weeks to show results".
- What they get: the chat opens with what it knows: the scores, the routine, the 2 bought and the 1 not bought.
- Progress: it leads straight to the progress view, including "nothing changed" and "got worse".
- When: it fits the week-3 scenario. Doubt clusters in weeks 2–4, and good advisors follow up at 3 weeks (user research).

Open thought: we can't promise "it's working". At week 3 it most likely isn't, visibly. Maybe the real question at week 3 is "Should I keep going?" (user research: people decide whether to go on), which we can answer honestly. What coming back could give them:
- What to expect and when: "week 3 of about 8". 88% of young shoppers expect results within 4 weeks (Curology, brand), and 77% would value an AI tool that shows what results to expect (Harris Poll).
- What can show by now: how the skin feels, comfort, hydration. People judge by feel first (user research).
- Using it right: order, morning or night, any stinging, and a fix before it ends the routine (see 4).
- Not wasting the money already spent. "It won't work" is the top worry about a new product, 62% (Drive Research, vendor).
- A date when change can really show, for example week 8.
- Idea: the touchpoint promises "let's check you're on track", never "see your results".

If picked, parts of the same path, not separate reasons:
- 2. Where am I on the way: the "week 3 of 8" timeline inside the progress view.
- 4. How do I use it: the use log feeds the answer, and "adjust how you use it" is a next step.
- 8. Refill: a later next step, since most products run out after week 3.
- 9. Buying or looking at a product: a second way in. The on-site nudge leads to the same check-in.

If picked, the rest go to the rationale's short list.

The catch is in what follows, not in the reason (our reading of the brief). The brief says skin changes slowly, sets the return at 3 weeks and suggests a new selfie. So the comparison will most likely show little or noise, and the value has to hold up when it does.

Assumptions for the rationale:
- That shoppers would ask a brand's chat "is it working?" at all. No data (user research). The cheap test should check it.
- That they started using the products. The brief only says they bought them.
- That buying means they trust the advice enough to act on it (our reading).

### Idea: set expectations from the start (not decided)

When the chat recommends products, it says when to expect results. Then the return checks against what was promised, not against hope.
- Why: 77% would value an AI tool that shows what results to expect (Harris Poll). 88% of young shoppers expect results within 4 weeks, while change takes 6–12 (Curology, brand; user research). 66% of them distrust instant-results claims (Curology, brand). A leaflet on how long results take "may increase" use (UK trial, 2017, funded by Galderma). Nobody sets expectations today (competitor research).
- Per concern, not one number: hydration and comfort 1–2 weeks, texture 6–8, dark spots 10–12, lines 12+ (Perfect Corp, vendor). A flat "12 weeks" can sound like "nothing for 3 months". Better: "You may feel a difference in 2 weeks, and see texture change by week 8."
- The first visit is out of scope, so:
  - assumption for the rationale: the first visit showed a timeline
  - the returning chat quotes it back: "When we started, I said hydration first, texture by week 8"
  - the card in the box or the delivery email repeats it
  - the progress view shows "you are here" on that timeline
- For many brands: the timeline comes from each product's data in the brand's catalog, so no custom design (our reading).
- Watch out: each timeline has to match the brand's own evidence for its products (Claude's assumption, not checked).

### Week 3: what value we offer (decided)

Not results, but an answer to the doubt. Week 3 is the first checkpoint on the timeline set at the start.
1. A first honest check. Hydration and comfort can show by now (Perfect Corp, vendor). "I said hydration first. Let's check it." A few taps about how the skin feels, a photo optional.
2. Relief from doubt. "You're on track. Texture usually shows around week 8." Week 3 is when people wonder whether to go on (user research). "This makes me very doubtful… even though I know it will work" (acne.org log, week 3).
3. A fix before quitting. Stinging, dryness or breakouts: use it less often, pause it, swap it, or see a dermatologist (user research).
4. Using it right. Order, morning or night, how much. 6 in 10 women don't know which ingredients go morning or night, and 29% got irritation from a product they didn't fully understand (Skin Rocks, brand).
5. A clear next step. Keep going as is, adjust, or look again at week 8. The 3rd product only if the skin is calm, and refill only when it's due.

- In one line (decided, it goes in the email above the buttons): "See if you're on track, and fix what isn't."
- What it isn't: visible results, or a sale.
- Open risk: we don't know if this is enough to bring people back. "I don't know if I'll bother" (Mumsnet) says the ask has to be tiny, with no selfie required. The cheap test should check it.

### Week 3: best practices from our research

For job 3: at home, in front of the mirror, no visible change, wondering whether to go on.

How to reach them
- Ask about their skin, don't remind them to use the products. Plain reminders didn't help in small trials; a weekly survey about their own skin did (user research).
- Week 3 is when good advisors check in: 3 days, 3 weeks, 3 months (Cos Bar, vendor case study).
- To their phone, by email or WhatsApp, only if they agreed. A specific promise wins the opt-in: quizzes that send the results get 43–78% sign-ups, against 8–10% for a discount pop-up (vendor case studies; competitor research). The ask happens in the first visit, so it's an assumption for the rationale.
- Set the date in advance: the card in the box and an "add to calendar" file. Then the reminder is theirs. Nobody in skincare offers this (competitor research).

What the message says
- A check, not results. 88% of young shoppers expect results within 4 weeks (Curology, brand), while change takes 6–12. 77% would value an AI tool that shows what results to expect (Harris Poll).
- A tiny ask, no selfie. "I don't know if I'll bother" (Mumsnet). Only 32% are comfortable sharing a selfie with an AI tool (Harris Poll).
- No sale. 43% fear paid placement in AI advice (Harris Poll). Suggestions that feel like ads come up in 7 App Store reviews (competitor research).

What they get when they tap
- It opens with what the chat knows. Being asked again makes people angry (4 App Store reviews).
- Feel first. Hydration and comfort can show by week 3 (Perfect Corp, vendor). People judge by feel, and the mirror hides slow change (user research).
- "No change" means on track, with the date when change can show, around week 8. A flat dark-spot score isn't "no change": scanners often miss dark spots (Which?).
- "Worse": check the photo, then stinging, then the season. Then a tip, not sympathy: one shopper got tips and "pushed through", another got "sorry to hear that" and left (App Store reviews). If it burns: see a dermatologist (user research).
- Missed days: reassure. Missing a day doesn't break a habit (Lally, user research).
- Personal, not a survey. A Musely check-in felt like "basically just a quick satisfaction survey": "I have no one to tell that this product is doing absolutely nothing" (App Store review).

When to stop
- Only when they ignore both an email and its follow-up, or unsubscribe. A check-in leads to the next check, not a stop (ideas.md).
- Offer a pause, not only "unsubscribe". 58% would welcome a pause (Optimove, vendor).
- Don't repeat the same push. 54% unsubscribe when a brand keeps pushing the same offer (Optimove, vendor).

Still unproven: whether a 3-week follow-up feels good, and whether people come back to a brand's chat at all (user research). The cheap test should check both.

### Why: all candidate reasons we considered

"Brief" marks the brief's own examples. Details and sources are in ideas.md and user-research.md.

Two groups, by why they are here:
- **A. They come to the chat on purpose.** On their own, or from a touchpoint like an email.
- **B. They're on the site for their own business:** buying, browsing, checking an order, returning, reviewing. Our guess: most cases, around 80%. No data on this split.
- Nudge points in B aim to move the shopper into A: the chat meets them where they are and offers something worth their time. Each nudge visit that turns into a chat makes Skin.Chat more valuable to the brand (our reading).
- Watch out: the nudge has to offer value tied to what they're doing right now, not "chat with us". Shown once; if closed, hidden until the next moment worth mentioning (ideas.md).

**Group A: they come to the chat on purpose**
1. Is it working? (brief: results over time) An honest look at what can and can't change by week 3. Doubt clusters in weeks 2–4 (user research). Open: no proof that people turn to a brand's chat for this.
2. Where am I on the way: the expected result as a goal at the end of a timeline ("week 3 of 8"). Needs the brand's trial data. Open: may be part of the progress view, like the wow moment.
3. Just for fun: they enjoyed the face analysis and want to check again, and watching the numbers go up feels good. Our shopper is likely open to AI (user research). When Musely removed its avatar and rewards games, 15 reviews complained within two weeks (competitor research).
   - Our note: frequent checks may need another kind of game, not built on skin scores.
   - Our idea: points for regular checks, so people keep coming back. This brings back "loyalty points", which were parked in ideas.md.
   - For it: the weekly online survey that helped teens stick with acne treatment also gave small gift cards (Yentzer, user research).
   - Watch out: only 7% call loyalty programmes their most important reason to buy (AlixPartners).
   - Watch out: the brief wants value for the shopper, not a reminder. Points need to buy something real, or the game itself has to be fun.
   - Watch out: points for scans push more face photos. Only 32% are comfortable sharing a selfie with an AI tool (Harris Poll), and frequent scans mostly show noise. Reward the check-in (feel, use, optional photo), not the scan (our suggestion).
   - Watch out: frequent checks mostly show noise. Light alone moved scores by +39 to −25 points (Which?), and skin changes slowly (brief).
   - Watch out: fun can turn. Scores made people feel "more insecure" and "sad" (App Store reviews).
   - Watch out: interest fades. Home photo uploads fell from 162 of 206 patients at 1 month to 45 at 6 months (user research).
   - Open: may be part of the progress view too.
4. (new) How do I use it? Order, morning or night, how much. 6 in 10 women don't know which ingredients go morning or night, and only 19% know the right order. 29% got irritation from a product they didn't fully understand (Skin Rocks, brand). Most useful right after delivery, less at week 3.
   - Our note: a strong one. People ask the chat instead of reading the instructions, and keep track of their use in the chat, not of their results (yet).
   - Includes doing less or spending less, when the skin is better or money is tight. A Mary Kay user moved to a lighter line after a new scan showed improvement (App Store review). Cost is the top UK barrier, 30% (Kenvue, brand), and 24% traded down last year (McKinsey). Restraint beats the sales suspicion (user research).
5. (new) Can I add this? A product seen on social media, a gift, a trend: does it fit my routine? Routines are mixed from gifts, bloggers' picks and other brands (informal talks). 62% of 13–29s use social media for skincare advice (Curology, brand). "Found something newer" is a top reason to drop a product, 26% (The Body Shop, brand). Watch out: other brands' products need data beyond the brand's catalog (ideas.md).
   - Our note: a good one.
6. (new) The chat as their own independent dermatologist: a flare, hormones, a new concern, any skin question. A past Musely customer came back when a problem returned with hormones (App Store review, one review, a prescription service). 43% of 13–29s trust dermatologists most, but half have never seen one, and cost is the top barrier (Curology, brand). "The chat sits in this gap" (user research).
   - Watch out: when the shopper has a dermatologist, the chat defers, not competes (user research).
   - Watch out: trust in AI advice is lowest for acne and sensitive skin (Harris Poll).
   - Watch out: "independent" pulls against a brand's chat that recommends its own catalog. See "whose assistant is it" (parked, ideas.md).

**Group B: they're on the site for their own business (nudge points)**
7. (new) Checking an order or delivery. The order page is a service page, so no marketing consent is needed, and Shopify's opens without login for 3 weeks (competitor research). A natural moment for "how to start", see 4.
8. Refill (brief: products run out). They come to buy again. Later than week 3 for most products: a 50 ml cream lasts about a month even at heavy use. What helps is the choice "same again, or adjust?", not the alert (user research).
9. Buying or looking at a product. They ask the chat about it, it answers, then uses the moment to check in. The brand's products only; other shops stay parked (ideas.md). One person in our informal talks asks ChatGPT about products before buying.
10. Return (ours). The chat on the returns page asks what went wrong and offers a fix: use it less often, pause it, swap it. The return stays one tap away. We never block or delay it (our rule).
11. Bad review (ours). The chat on the product page offers help first, and they can still post any review anywhere (ideas.md). A shopper who got only "sorry to hear that" left; one who got tips "pushed through" (App Store reviews).
- Group B is started by the shopper, so no marketing consent is needed (our reading).
- Watch out: without login, the chat knows them only on the same browser (ideas.md).
- Watch out: a product that fails is usually given away quietly, not returned or reviewed (informal talks). So 10 and 11 catch only the few who act.
- Watch out: we have no data on skincare returns, how many or why (assumption).
- Watch out: it only works on the brand's site. Reviews on Amazon or social media are out of reach.
- Watch out: asking only happy shoppers for public reviews may break platform and consumer rules (Claude's assumption, not checked).
- Assumption: the chat can tell when the shopper is on the returns page or the review form.

**Not reasons on their own**
- The wow moment (a new photo next to the old one): part of how they see progress, not a reason to come.
- Irritation or purging: people don't come back for it. A product that doesn't suit is judged in days and dropped quietly (informal talks). So the chat has to ask first, a few days after delivery, and the check-in handles it. "Purging" is contested, so we don't call it that (user research).
- The 3rd product: nothing tells them they need it. 1–3 products is a normal routine, and many already own something similar (user research). It can be a next step inside the check-in, only if the skin is calm.
- Season (brief): no proof people would turn to the chat for it. It's a real reason only every 3–6 months. At week 3 it explains a dip ("redness is up, but it's January") (user research).
- (new) An invitation to scan again: "Apparently you're meant to go back in a few weeks to see if the stuff is working but I don't know if I'll bother" (Mumsnet). A weekly scan prompt felt too soon to a Skin360 reviewer (competitor research).
- (new) A plain reminder to use the products: didn't help in small trials. Being asked about their own skin did (user research).
- (new) Correcting a wrong score: wanted (6 App Store reviews of misreads), but nothing shows people come back for it. It belongs inside the visit (ideas.md: "let them correct the analysis").

**Not for the assignment**
- Memory: the brand's site as their skin app.
- Sharing progress with a friend, a dermatologist or the public.

### Jobs to be done (not decided)

Job stories: "When [situation], I want to [motivation], so I can [outcome]." No product in them. Format from general knowledge (Intercom, Klement), not our research.

1. Delivery. When my new products arrive and I'm not sure what goes when, I want to know how to use them, so I don't waste them or irritate my skin. (6 in 10 women don't know which ingredients go morning or night; Skin Rocks, brand)
2. Days 1–4. When my skin feels odd a few days after starting something new, I want to know if that's normal, so I don't harm my skin or give up on something good. ("My skin never tells me it hates things until day 3 or 4", Mumsnet)
3. **Week 3, the main one.** When I've used my new products for a few weeks and the mirror shows no change, I want to know if it's worth going on, so I don't waste money and time on something that doesn't work. (Doubt clusters in weeks 2–4; user research)
4. Missed days. When I've skipped my evening routine a few times, I want to know if it still counts, so I don't give up on the whole thing. (The evening step slips first, and missed days don't break a habit; user research)
5. Running low. When a product is about to run out, I want to decide whether to buy it again, so I only pay for what works for me. (Informal talks; "would I repurchase?", Tender Forms)
6. Saw something new. When I see a product on social media or get one as a gift, I want to know if it fits what I already use, so I don't mix things that clash or buy what I already have. (Routines are mixed from many sources; informal talks)
7. Skin changes. When the weather turns or my skin acts up for no clear reason, I want to know what to change, so my skin stays comfortable. (46% of UK adults change part of their routine in winter; The Body Shop, brand)

**Where they are at that moment** (our reading of the job stories, not research)

Almost never on the brand's site. At home with the products, or on the phone somewhere else.
1. Delivery: at home, opening the box. What reaches them: the printed card in the box with a QR code, the delivery email (ideas.md).
2. Days 1–4: at home, in front of the mirror. What reaches them: the early "how does your skin feel?" check, in a channel they agreed to (ideas.md).
3. Week 3: at home, in front of the mirror, doubting. What reaches them: the day-21 message by email or WhatsApp, and the check-in date already on the card (ideas.md).
4. Missed days: at home in the evening. Nothing on its own: a plain reminder to use the products didn't help in small trials, being asked about their own skin did (user research). The check-in covers it.
5. Running low: in the bathroom, then buying wherever they shop, often a marketplace (ideas.md). What reaches them: a refill message timed per product; "same again, or adjust?" if they come to the brand's site.
6. Saw something new: on social media, or holding a gift. Mostly out of reach. Instagram is secondary in the brief.
7. Skin changes: outside, as the weather turns. A seasonal message every 3–6 months, outside week 3.

What follows (our reading):
- For the main job (week 3), the nudge has to come to their phone in a channel they agreed to. Waiting for a site visit won't work.
- The card in the box is the only nudge that's there when they use the products, and it sets the week-3 date in advance.
- Nudges on the site (group B) are a second way in. They catch only the few who visit: to buy again, return a product or write a review.

### Today

- skin.chat reopens exactly where it was left: same messages, same scores, no greeting, no mention of the time passed, no next step (skin.chat reference).

## 4. What we want from the return

- The brief asks for a return, value for the shopper and a useful next step. It never says "buy more". Its example metric is the share of shoppers who come back within 30 days.
- For the shopper: an honest answer and a next step. Keep going, adjust use, pause, see a dermatologist, add the 3rd product, or book the next check. Buying is one option, not the goal.
- For the brand: the routine survives week 3. Sales follow later: the refill (around week 4–5 at the earliest, for fast-used products) and the 3rd product if the skin is calm. Bad experiences reach the brand first, not a review somewhere else.
- For Haut.AI: not in the brief, and not researched yet.
- Why not "buy more" at week 3: people assume a brand's tool is a sales tool, and 43% fear paid placement in AI advice (Harris Poll). Loyalty follows results (user research).

## 5. The week-3 path (decided)

### Starting point
- At week 3, no big visible change is normal. The whole path is built on that.
- What the shopper may want: to know that it's going as planned.
- Our goal: show we care and handle their doubt. Not to sell more.

### How they come back
- They check progress in the mirror, not with the AI, and won't open the chat on their own. So a message goes to a channel they agreed to.
- Channel: email, in the prototype. WhatsApp only if they opted in, and it goes on the short list (ideas.md: "email first, WhatsApp if opted in"; the brief makes messengers secondary).
- Tapping an answer in the email opens the brand's site with the chat open and the answer already in it.
- When: 3 weeks after delivery, so it's week 3 of actual use. Doubt and irritation peak in weeks 2–4 of use (user research), and ideas.md already says to count from delivery, not purchase. Counted from the analysis, a week of delivery would make it week 2 of use: too early.
- Scores still compare with the analysis. The chat says "week 3 of your routine", not "3 weeks since your analysis".
- A single email with tips could work too, but we think it's weaker and it doesn't bring them back to the chat (our call).
- The message asks about their skin, not about using the products. Plain reminders didn't help in small trials; asking about their own skin did (user research).
- Subject line: "Week 3: how's your skin?"
- The message: "How is your skin feeling after 3 weeks?" with three buttons right in it, one per branch: "Feeling good", "About the same", "Not quite right".
- One line above the buttons says what they get: "See if you're on track, and fix what isn't." Without it the email reads like a survey (Musely review, App Store).
- Soft wording, so we don't name problems before they do. No research on buttons vs. a slider; our call.

### When to stop
- The week-3 email, then one follow-up 5 days later, only if they ignore it. 5 days keeps it inside the weeks 2–4 doubt window (user research); the exact number is our call.
- The follow-up doesn't mention that they didn't reply. It says plainly that this is the last message and we won't write again until they ask, so they don't have to unsubscribe. It leaves a couple of useful tips and says the chat is there any time.
- If they ignore the follow-up too, nothing more, not even the week-8 check, until they come back on their own.
- If they check in, we ask again at week 8, with the same rule. Any later email works the same way.
- Apart from that, sending stops only when they unsubscribe.
- Every message offers "pause" next to "unsubscribe". 58% would welcome a pause (Optimove, vendor).

### When they come back
- First message, in this order:
  1. A greeting.
  2. A short recap as a small card: "week 3 of about 8", the 2 products bought, the 1 not bought, the starting scores. So they see we remember them and know their context.
  3. A reply to the answer they tapped in the email, then on to the point.
- The card has an "Update my routine" button. The chat doesn't ask what they use in a separate message. It shows what it knows, and they can correct it: stopped one, haven't started, added something from another brand. Routines are mixed from many sources (informal talks). It's to understand their case, not to sell.
- The same card comes back in the progress view.
- The product they didn't buy shows on the card as "Cleanser: using your own?", so they can tell us. No pitch at week 3. It comes up only if they ask, or at week 8 if the skin is calm. 1–3 products is a normal routine, and many already own something similar (user research).
- It quotes back what it said at the first visit: "When we started, I said hydration first, texture around week 8. Let's check hydration." 77% would value an AI tool that shows what results to expect (Harris Poll).
- It also uses what they said last time, for example "you mentioned your skin feels tight by evening". The brief says the chat remembers the last conversation.
- It doesn't ask for anything it already knows. Being asked again makes people angry (4 App Store reviews).
- Only a couple of simple questions. Personal, not a survey (Musely review, App Store).

### Progress for every branch
- The progress view is a diary of their journey, with all of it together:
  - the timeline, "week 3 of about 8", with "you are here"
  - what they told us about their skin, for example "a bit less dry"
  - photos side by side, then and now, if they took a new one
  - the scores, with context
- No game, streak or points. The timeline is enough.
- Everyone sees the timeline and what they told us about their skin.
- If things are already getting better, we call that progress.
- If nothing much has changed, it means everything is going as planned, and that's good.
- What can show by now: questions about feel, tied to their concern (tightness after washing, comfort, hydration). These can change in 1–2 weeks, texture in 6–8 (Perfect Corp, vendor).
- What's next: the next milestone, for example "texture usually shows around week 8". A date to look forward to, not just "wait".
- Where you started: their scores from 3 weeks ago as the starting point.
- A new photo: optional at week 3 in every branch, after the questions about feel. Each branch gives its own reason for it (see "Three branches"). Week 8 stays the main comparison. The flow works without a new picture (ideas.md).

### Three branches

**1. Better**
- Why a photo: for the side-by-side and to track progress. Optional.
- Risk: the scan can look worse than they feel. This is the brief's "scores got worse" state, so we design it (see "When scores got worse" below).
- In the prototype, the photo shows hydration up and one score slightly down.

**2. No change: the main path**
- Our guess: about 80% of answers at week 3. No data.
- The only honest thing to say: everything is going as planned, and that's good. Most products need longer than 3 weeks. Give a date when change can show, around week 8 (user research).
- No reaction is a good sign too: the skin takes the routine well (our reading).
- What they get that they didn't know:
  - What's normal now: the "week 3 of about 8" timeline.
  - A small win they missed: a couple of questions about feel, tied to their concern, like tightness after washing. These can change by week 3 (Perfect Corp, vendor).
  - One thing to fix: a quick check of how they use the products. Order, morning or night, how much.
  - A week-3 photo mark: week 8 gets a closer point to compare with.
- Why a photo: "just to check if you need small corrections". Optional.
- The flow: "Everything's going as planned, and that's good" → "Let's take a photo, just to check if you need small corrections" → "All good. Here are a few small corrections."
- Where the corrections come from: mostly their answers about feel and use. From the scores only when a change is bigger than the normal variation between scans (see "When scores got worse").
- In the prototype, the photo shows flat scores. This is the brief's "nothing changed" state.

**3. Something's off**
- Be careful. Find the reason before advising, and rule out obvious mistakes in their own self-check and in our analysis.
- Order: photo conditions → stinging or dryness → season or stress → how they use it (user research).
- Ask about other products. Something new in the mix can be the cause. Dermatologists advise no more than one new product every 2 weeks (NewBeauty).
- Fixes: use it less often, use less of it, pause one product to see if it's the cause, swap it. Mild early irritation is normal, and using it less often helps (Iberian dermatology consensus).
- A dermatologist only for burning, spreading redness or rosacea, not right away (user research).
- Questions first, then a new analysis offered as an option, never required: "Want to compare a photo with 3 weeks ago? It can show if redness went up."
- In the prototype, the photo shows redness clearly up. The chat works with it: questions, then a fix.
- After a fix, the chat checks back in about 2 weeks to see if it helped. The week-8 check moves on from there. Retinoid adjustment takes 2–4 weeks (systematic review, 2025), and dermatologists advise one new product every 2 weeks at most (NewBeauty).

### When scores got worse
- Never hide results. It's a matter of trust.
- Scores vary between scans, and at week 3 it's too early to judge by numbers. Feel matters more now, so the chat asks about feel first, then offers the photo.
- Act like a dermatologist would:
  - point out what got better, even if it's small
  - stay calm about a small dip, and explain it
  - if something is worse than a slight change, work with it: go to the "something's off" questions and fixes, don't brush it off
- 85% want AI to help them feel confident, not judged (Harris Poll).
- The reply depends on where the shopper is in the journey: the week, what they said about feel, what they use. The same scores at week 3 and week 8 get different replies. Not one fixed reply per scan. Scripted replies hurt trust (Curology reviews, App Store).
- Where "slight" ends: Which? found repeat scans mostly stable, with 4 of 30 moving 5 or more points. Changing the light moved scores by +39 to −25 (Which?, a test of AI skin analysers). So a dip of a few points is likely noise. The real line needs Haut.AI's own data (assumption).
- Tips for a fair photo still help: same light, no make-up.

### Next steps (better and no change)
- Book the next check around week 8, with "add to calendar". The chat ends with something like "See you around week 8, when change usually starts to show", and a button to skip that reminder. Don't promise visible results (brief: skin changes slowly).
- Refill: a heads-up when it's due, in a couple of weeks. A 50 ml cream lasts about a month (user research).
- Using it right: order, morning or night, how much. 6 in 10 women don't know which ingredients go morning or night (Skin Rocks, brand).
- The 3rd product: not pitched at week 3. Only if they ask, or at week 8 if the skin is calm.
- Doing less if the skin is better. One Mary Kay user moved to a lighter line (App Store review).
- "Can I add this?": check that a new product fits.
- Season: only if the weather is turning. Otherwise it comes up every 3–6 months (user research).
- Small corrections: mostly from their answers about feel and use. From the scan only when a change is bigger than the normal variation between scans, because at week 3 the scores are mostly noise (Which?; brief).

### Timeline we design around (user research)
- Days 1–4: a reaction to a new product starts to show.
- Weeks 2–4: irritation from actives and doubt peak. Most people decide whether to go on.
- **Week 3 of use, counted from delivery: the email.**
- Weeks 4–5: a heavy user runs out of a 50 ml cream.
- Weeks 6–8: first real change for breakouts and texture. 20–30% better at week 6 counts as a good response.
- **Week 8: the next check.**
- Weeks 9–10: the routine becomes a habit (median 66 days).
- Months 2–3.5: the typical gap between orders. So for most, the week-8 check comes just before a refill.
- Months 3–6: dark spots and retinoids reach full effect. The season changes.

### Brand
- The base is skin.chat, not a redesign (decided, our reading of the brief). The brief calls skin.chat "the same assistant" that brands add to their sites, so its interface stays: layout, text colours, corners, the shopper's dark bubbles, the round avatar (skin.chat reference). A brand puts its skin on top. What we design new is the return: the email, the returning chat, the check-in and the progress view. We build them from skin.chat's existing parts.
- One invented brand, Clearwell: calm and clinical, white and soft green, clean sans-serif type, a quiet expert tone. Not a copy of a real brand. To do: a quick search that the name isn't taken by a skincare brand.
- The prototype has a small switch to a second invented brand. Colours, type, logo and tone change; the flow stays the same. It shows one design working for many brands. The second brand is warm and friendly (see Prototype).
- The second brand is built last. The design uses brand settings from the start, and the second brand is added only if time is left. The brief asks for one brand style.
- A brand can change: colours, type, logo, tone of voice, catalog, refill timing per product (ideas.md).
- Fixed for every brand: the flow, the layout, the progress view logic, the stop rules, the honest handling of bad answers, and the warnings about irritation and clashes (ideas.md).

### How we'd know it works
- Goal: a long-term relationship. Week 3 is there so they come back happy at week 8 and later, and then refill or buy more.
- We want to know sooner than week 8 whether week 3 worked.
- Metric: the share of shoppers who got the week-3 email, finish the check-in and don't skip the week-8 check. In real life we'd track more. It can be measured once the chat part exists (step 3 below).
- Note: the brief's example is "back within 30 days". Ours can be read sooner. The return at week 8 is the later proof.
- Cheap test: talk to a small group of real shoppers who bought a routine 3 weeks ago. About the routine, how they feel, and how they deal with hesitation. Nothing is built.
- Then we build in steps, each only if the one before confirms our assumptions:
  1. Talk. The cheap test above.
  2. Email. The week-3 email to a broader audience, enough for the numbers to mean something, without the chat part. Watch how many tap an answer. The tap is never a dead end: the chat shows one static, honest reply per answer, with no conversation behind it.
     - Feeling good: congratulations, and a reminder to keep on track.
     - About the same: that's normal, with the date when change can show, around week 8, and a reminder to keep on track.
     - Not quite right: we show we care, give one practical tip, for example using it less often (Iberian dermatology consensus), and give options, like the brand's support or a dermatologist. The tip matters: "sorry to hear that" alone made one shopper leave, while tips made another "push through" (App Store reviews).
  3. Chat. The chat part. Watch how many finish the check-in, how many skip the week-8 reminder and, later, how many come back at week 8.
- First read at step 3: once the follow-up has gone out, 5 days after the email. The week-8 return confirms it about 5 weeks later.

### Other return paths (short list, not designed)
These are possible paths, not all live at once.
- Delivery and days 1–4: a card in the box with a QR code and the week-3 date, then a "how does your skin feel?" message a few days in.
- Refill: "same again, or adjust?", timed per product.
- On-site nudges: on the order page, a product page or the returns page, the chat offers help tied to what they're doing.
- Season change, every 3–6 months.
- WhatsApp, for shoppers who opted in.

### Prototype
- Scenario: dryness and texture.
  - Bought: a hydrating serum and a gentle retinol night cream.
  - Not bought: a cleanser.
  - Why: hydration can change in 1–2 weeks, so there's an honest early win at week 3. Texture takes 6–8 weeks, so it's the week-8 goal. Retinol often irritates in weeks 2–4, so "Not quite right" is believable (user research; Perfect Corp, vendor).
- Only "About the same", the "nothing changed" case, is played in full, to its next step (decided). "Feeling good" and "Not quite right" show in the email and the chat, but a tap says "Not in this demo." The brief asks us to "think about" "nothing changed" and "scores got worse", and says depth matters more than the number of screens.
- One photo result per branch, so "nothing changed" and "scores got worse" are both covered. Only the first is played; the other two are described in the rationale:
  - About the same: scores flat.
  - Feeling good: hydration up, one score slightly down.
  - Not quite right: redness clearly up.
- Mobile only. The email opens a plain Clearwell page with the chat already open as a sheet over it. No shop is designed; the brief only says the chat is a widget on the brand's site.
- New photo: one tap on "Take a photo", a short "analysing…" state, then the result with a sample face. The capture flow is out of scope.
- No extra screens. Main path only: email → chat → progress → next step. "Add to calendar" is a button at the end of the chat. The follow-up email, the check after a fix and "pause" are described in the rationale.
- Brand switch, built last and only if time is left: Clearwell (calm, clinical) and a second invented brand that's warm and friendly: cream and terracotta, rounded type, a chatty and caring tone.

### Our assumptions (for the rationale)
- They agreed to emails during the first visit.
- They started using the products. The brief only says they bought them.
- "About the same" is the most common answer at week 3, about 80%. Our guess, no data.
- The first visit showed when to expect results, per concern.
- The link in the email opens the chat with its memory, even in another browser.
- The chat knows the delivery date, so it can count the weeks of the routine.
- Delivery takes a few days, so the analysis was a bit more than 3 weeks ago. A small stretch of the brief's scenario.
- People will come back to a brand's chat for a check-in. Unproven; the test checks it.
- The timeline for each product comes from the brand's catalog data.
- Haut.AI knows how much its scores vary between scans, so the chat can tell a slight dip from a real one.
- skin.chat's interface is the base every brand shares, and a brand only skins it. The brief doesn't say this. It's our reading of "the same assistant", "one brand style" and "what a brand could change and what stays fixed".
