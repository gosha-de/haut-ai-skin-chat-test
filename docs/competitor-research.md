<!--
Desk research: how other skincare products bring people back and show progress.
Method: web search, the products' own pages and public reviews (Trustpilot, Reviews.io, App Store).
We did not test the apps hands-on.
Most sources are vendor marketing, so feature claims are as stated by the vendors.
Retrieved: 2026-11-17
-->

# Competitor research: returning users in skincare

How other skincare tools bring a shopper back after the first consultation, and how they show progress.

## Summary

- Most tools bring people back with a fixed selfie or quiz schedule (weekly, monthly, every 5–7 weeks). It is the same for every shopper, whatever the products or skin concern.
- Refill reminders are the most common pattern in e-commerce. For a 30-day product they go out around day 20–25. Timing per product is the advice, but it's hard to set up.
- Progress is usually shown as a skin diary: a history of scores, sometimes with photos side by side.
- "Nothing changed" and "got worse" are poorly designed everywhere. The usual answer is "don't panic, keep going" or "message your expert".
- Photo comparisons are noisy. Lighting, angle and phone processing can move the score more than the products do.
- To get permission for reminders, a useful thing in return (your results, your routine) right after the value moment works far better than a discount pop-up.
- When the shopper says no, the practice is to accept it, offer less instead of nothing, and put reminders where the shopper looks anyway: the site, the packaging, the order page.
- Reviews back service reminders: shoppers want notice before a refill ships or runs out, and they want check-ins. They leave over noise, surprise charges and scripted or AI replies.
- Memory is welcome when it's useful and explained. Being asked again for what the brand already knows makes people angry.
- Progress photos kept in one place are among the most praised features. AI scores lose trust when they misread skin or jump between scans.

## How they bring people back

| Product | Type | Trigger to return | Cadence |
|---|---|---|---|
| Neutrogena Skin360 | Brand app, selfie scores | Prompt to take a new scan | Every 7 days |
| Barefaced Skin Coach (built by Revieve) | Brand web coach | Prompt to take a new selfie, then new product suggestions | Monthly |
| Proven | Custom skincare subscription | Redo the skin quiz before the next formula | Every 5–7 weeks |
| Curology | Online dermatology | Progress photos sent to the same provider | Photos every 2 weeks (blog advice) |
| Dermatica | Online dermatology | Progress photos, formula adjusted | Every 3 months |
| Skin+Me | Online dermatology | Progress photos, formula adjusted | Monthly |
| Refill emails (Klaviyo and similar) | E-commerce flows | Product about to run out | Day 20–25 for a 30-day product, a follow-up 2–3 days later, stop if already reordered |

Notes:
- A reviewer of Skin360 said a week is too short to see any change, which makes the weekly prompt hard to justify.
- Proven explicitly connects the retake to seasonal change.
- Refill flows check whether the shopper has already reordered before sending, and suppress people who stopped engaging.

### One timeline for all products?

Skin check reminders: yes, one timeline.
- Every product above uses one schedule per shopper (or per subscription).
- None of them changes the timing for the product or the skin concern. A hydrating serum gets the same check-in date as an anti-wrinkle cream, even though one can show results in about 2 weeks and the other needs 12+.

Refill reminders: per product in theory, hard in practice.
- The advice is to time each product by its size and daily use, not one delay for all.
- In Klaviyo this means a separate email flow for each refill cycle, filtered by product.
- Klaviyo's automatic "expected date of next order" ignores which products were bought.
- Klaviyo's community warns that repeat buyers get the same emails before every order, which leads to unsubscribes.

### Add to calendar?

None of the competitors seem to offer it.
- Curology only advises on its blog to "set a reminder in your calendar" for progress photos. There is no button for it.
- Dosefi, a small skincare tracker app, claims calendar sync. That's the only one we found.
- No sign of it at Neutrogena, Proven, Dermatica, Skin+Me or in refill emails.

Outside skincare (booking tools, event invites) it's common:
- An "Add to calendar" button or a calendar file attached to the email is a standard pattern and is said to raise show-up rates.
- A link that opens Google or Outlook often arrives without an alert and can't repeat. A calendar file (.ics) can carry its own alert.
- If the date changes later, the event already in the calendar doesn't update.

### Weather and location?

Weather-based marketing is well established in beauty, but it's the same message for everyone in an area.

| Who | What they do |
|---|---|
| Proven | Asks where you live and uses local humidity and UV in the custom formula. Weather shapes the product, not a reminder. |
| Pour Moi | Enter a zip code to get a "climate-smart" routine. |
| Atmosphera | Calls it "weather typing": products picked by climate rather than skin type. |
| Dermalogica | Weather-personalised emails, and SMS like "It's sunny outside. Don't forget to put on your SPF." |
| Cetaphil | Cold-weather-triggered ads for winter dryness. The ad vendor reports over 3× the usual click rate. |
| Pantene Haircast (hair, 2013–2016) | Local forecast plus hair tips, with The Weather Channel and Walgreens. Award entry claims Walgreens sales up 24%. |
| Klaviyo "Weather for Email" | Add-on that starts an email flow when the weather changes where a customer lives. |

Notes:
- A practitioner notes that a submitted postal address is more reliable than guessing location from the device.
- Results figures come from vendors and award entries, so they are self-reported.

## How they get permission to send reminders

### 1. A useful thing in exchange

Skin quizzes that send the results or the routine by email do far better than pop-ups.

| Brand | Reported opt-in |
|---|---|
| Kinvara | 43% through the quiz, against 8–10% for a discount pop-up |
| LoveSeen | 47%, 6× its pop-up |
| SKOON | 78% (quiz of up to 6 questions) |
| Doe Lashes | 3× more opt-ins than its pop-ups |

- La Roche-Posay offers email sign-up just before showing the routine.
- Figures come from the quiz vendors' case studies.

### 2. A discount

- Sephora: 10% off for signing up to marketing texts for the first time.
- Sally Beauty: 15% off for completing the profile.
- Some brands skip it on purpose. Too Faced gives no discount for text sign-up, and Attentive (a text-marketing vendor) suggests early access instead.
- Kinvara's numbers suggest a discount alone works poorly.

### 3. Reminders as part of a subscription

- Ulta, Paula's Choice and Clinique offer "replenish and save" subscriptions.
- The shopper agrees at checkout. Reminders come before each delivery: Ulta 3 days, Paula's Choice and Lovelyskin 10 days.
- These reminders feel like a service, not marketing.

### 4. Asking at the right moment, with a reason

- For app notifications, the advice is to explain the benefit on your own screen first, then show the system prompt.
- Ask after a meaningful action (a purchase, seeing results), not on the first screen.
- In one vendor-cited case, 89% agreed when the shopper triggered the ask themselves.
- Some WhatsApp chatbots ask "Want updates?" during the chat and record the answer.
- Fenty Beauty launched a WhatsApp AI advisor in 2026, and L'Oréal is bringing its Beauty Genius assistant to WhatsApp. Their consent flows are not public.

### Rules everyone follows

- No pre-ticked boxes. Under GDPR they are not valid consent.
- Agreeing to marketing is separate from agreeing to service messages.
- WhatsApp needs a clear opt-in before any promotional message.

## When the shopper says no

We found no skincare-specific examples. This is general practice from messaging tools and regulators.

### "Not now" and "No" are different

- A soft "Not now" on the brand's own screen can be asked again later, with different wording, after another meaningful action. One vendor suggests every 2 weeks or so.
- A "No" in the phone's or browser's own permission prompt is treated as final. In the browser the site can't ask again. The only option left is a link to settings.

### Offer less instead of nothing

- Let the shopper choose fewer messages or only some topics ("opt down").
- Offer a pause for 2 weeks to 3 months, then resume with a note that they paused.
- Vendors claim this cuts unsubscribes by 30% or more.

### Service messages continue

- Order and delivery emails don't need marketing consent.
- They can carry at most a small recommendation related to the order. EU-focused advice is stricter and says to keep them clean.

### Don't keep asking

- The UK ICO says consent requests shouldn't be disruptive.
- Draft EU guidance from late 2025 would ban asking again for the same purpose within a year. We couldn't confirm whether it was adopted.
- Regulators have acted against unsubscribe links that didn't actually stop the emails.

### Fallbacks that need no marketing consent

| Fallback | Who does it | Notes |
|---|---|---|
| Welcome back on the site | Common in e-commerce | "Welcome back", recently viewed, reorder prompts. Returning visitors need convenience, not persuasion. |
| QR or NFC on packaging or an insert card | Curology (QR insert in shipments), Vaseline "See My Skin" (QR to tailored advice), Clinique (tap the jar to open a skin check) | Inserts we found are generic or promotional, not tied to the shopper's own consultation. |
| Order confirmation and order page | Standard (Shopify and others) | Service messages, so no marketing consent. Shopify's order page opens without login for 3 weeks. |
| Saved results link | The Inkey List ("We've saved your personalised routine") | About a third of skincare quizzes don't ask for email at all (survey of 280 quizzes). |
| Message waiting inside the app | Airship, Braze and other app inboxes | Doesn't need notification permission. Waits until the user opens the app. |
| Phone wallet pass | Apple Wallet | Can show on the lock screen on a set date, but date reminders aren't supported for store cards or coupons. Weak fit. |
| Add to calendar | See above | The shopper owns the reminder. |

## Our two return ideas: does anyone do it already?

### Reminders on the site (main page and pages of products already bought)

| Who | What they do | What's missing |
|---|---|---|
| Rep AI (AI shopping chat for Shopify) | Greets returning customers about their last order: "How's the Hydrating Face Cream you picked up last month?" | Knows only the most recent order. Not timed to run-out or to when results can show. No progress check. |
| Gorgias (support chat) | Starts a chat based on the current page and on purchase history (paid add-on). | Generic campaign tool, nothing about results. |
| "You bought this on…" banners | Sigma-Aldrich, WooCommerce and Shopify plugins show the last purchase date on the product page, with reorder. | About reordering only. |

What's new in ours: the nudge is timed per product, shows on the page of a product already bought, and opens a progress check, not only a reorder.

### Printed card from the chat in the order

| Who | What they do |
|---|---|
| Stitch Fix (clothing) | A personal note signed by the stylist in every box, explaining the picks and suggesting outfits. Reviewers say not every box has one. |
| DEWY MD (beauty box) | A booklet in each box with product details and a personal morning and evening routine. |
| Shopify apps (Releasit, Order Printer Pro, QR Codes for Products & Orders, QR Codes Unlimited) | A unique QR code per order on the packing slip. Some can change the link after printing. One opens checkout with the last order. |

What's new in ours: the card is built from the shopper's own consultation, and the QR code opens the chat already knowing them, for a progress check. We found no one doing this.

Overall: the technology for both exists, so both are realistic. Nobody ties them to results over time.

## How they show progress

| Product | What the shopper sees |
|---|---|
| YouCam (Perfect Corp) | "Skin Diary": score history over time, with light correction |
| Perfect Corp Skincare Pro (clinics) | Report history and before/after comparison |
| La Roche-Posay Effaclar Spotscan | Skin diary over a year, plus a simulated "after" image |
| Revieve Skin Tracker | Skin metrics over time with visual comparisons |
| TroveSkin | Daily selfie journal, side-by-side photos, a 0–100 score (reported by a competitor) |
| Curology | Private progress photo gallery, seen only by the shopper and the provider |
| Skin.Chat (Haut.AI) | Claims memory of past chats, personal greetings, past analyses and progress tracking |

Notes:
- La Roche-Posay says the diary exists because looking at your skin every day hides progress and leads to discouragement.
- Which? found that light coming from a different side noticeably changed AI skin analysis results.
- Perfect Corp's own blog admits light correction helps but does not remove the problem. Its advice: same light, same time of day, bare skin, filters off, same phone.

## "Nothing changed" and "got worse"

What we found:
- **Renude:** "don't panic", keep going, "the results will be worth the wait", pause and talk to an expert if irritation appears. Tracking is left to the shopper (a self-kept skin diary).
- **Curology:** if unsure about progress, message your provider.
- **Perfect Corp:** if nothing changes, check that you used the products consistently, don't change several products at once, and check the photo conditions before switching products.

Useful timelines (Perfect Corp, a vendor source):
- Hydration and comfort: 1–2 weeks
- Texture and breakouts: 6–8 weeks
- Dark spots: 10–12 weeks
- Fine lines and firmness: 12+ weeks

Retinol "purging" (a real "got worse" case):
- Usually starts in the first couple of weeks and peaks around weeks 2–4.
- Should ease within 4–6 weeks.
- Spreading redness, stinging that gets worse, or breakouts still growing after week 8 mean the product, strength or frequency needs to change. That is irritation, not purging.

## Chat assistants that remember the shopper

- **Sephora, Ulta:** AI assistants tied to loyalty accounts, so memory likely depends on login.
- **Alhena (vendor):** remembers patterns and can send gentle "routine refresh" suggestions.
- **Benefit:** assistant tuned with brand-approved scripts and tone guidelines.
- **Skin.Chat:** long-term memory for both logged-in and anonymous users. Brands set tone of voice, do's and don'ts, restricted topics and claim guardrails.

So memory itself is not the gap. The gap is the reason to come back and what the shopper sees when they do.

## What shoppers say in reviews

### Web reviews of the main competitors

Trustpilot and Reviews.io reviews of Curology, Skin+Me, Dermatica and Proven, plus press tests of AI skin apps. Ratings when read: Curology 3.8 on Trustpilot (1,330 reviews), Skin+Me about 4.6 (14k+), Dermatica about 4.0 (1,620), Proven 4.5 (4,477).

- **Service reminders are wanted.** Shoppers complain when nothing warns them before an order ships or before they run out.
  - Curology: "I'd like to get reminders a new bottle is shipping BEFORE it ships". Another: "They do not send a reminder when it's time for an order to ship".
  - Dermatica, 1★: "They fill and ship orders without sending en email reminder a few days before". Dermatica, 5★: "I was sent email early enough to get the pictures sent and I received my order before I ran out".
- **More check-ins, not fewer.**
  - Skin+Me: "would appreciate more proactive checkins".
  - Curology: "there are no random check ins or requests for updated photos".
  - Dermatica: "I like that there is a check-in with the dermatologist".
- **Scripted replies hurt trust.** Curology: "It felt like a lot of the responses were copy/pasted from some kind of script". Another shopper got a copy-paste "new prescription" script while dealing with burning, flaking skin.
- **Results timing is unclear.** Reviews range from "the results were dramatic within the first two months" to "I used curology for over a year and walked away with no changes". Dermatica: "You need to be consistent to see the actual results".
- **Scores can feel wrong or upsetting.**
  - Which? found about 63% of testers got scores that matched what they saw in the mirror. Lighting and skin tone affected the results. Repeat scans were mostly stable: 4 of 30 moved 5+ points.
  - A Yahoo writer said Neutrogena Skin360 "freaked me out".
- **Control matters.** Pause, delay and frequency changes are praised (Dermatica, Curology, Skin+Me). The angriest reviews are about surprise subscriptions and charges.
- **Memory is welcome when it's useful and explained.**
  - A tester liked that L'Oréal Beauty Genius remembered a redness concern from weeks earlier and asked how the routine was going. This is a weak source.
  - Older surveys: a chatbot that knows purchase history feels "creepy" to 56%, but recommendations based on past purchases feel "cool" to 73% (Cheetah Digital and Econsultancy). 58% have found a retailer's personalised recommendations creepy, and full transparency on data use would make 54% more willing to share (Algolia).
  - An academic study found a chatbot that recalled past conversations was rated less creepy than the control.
- **Photo history matters.** A TroveSkin user was angry that old progress photos went behind a paywall.

### App Store reviews of the nearest apps

None of the main competitors has an App Store app. Curology, Skin+Me, Dermatica, Proven and Beauty Genius are not listed, and TroveSkin no longer appears in the US or UK store. So we read the nearest apps instead.

What we read: every written review that Apple's public reviews feed serves for 13 apps in the US, UK, Canada and Australia, 1,338 reviews in total. Each review was read and tagged by theme, and every review behind a number below was read again. The counts are small, so read them as signals, not rates.

| App | Type | Reviews read | App Store rating (all ratings, US) |
|---|---|---|---|
| Musely | Online dermatology: custom prescriptions, refills, nurse check-ins | 500 | 4.7 (25,496) |
| Nolla Derm | Online dermatology with face scans | 79 | 4.9 (13,817) |
| Miiskin | Online dermatology, mole photo tracking | 81 | 4.5 (1,794) |
| Mary Kay Skin Analyzer | Brand skin analyser, used with beauty consultants | 108 | 4.8 (6,559) |
| Nu Skin Vera | Brand app: skin scan, recommendations, selfie timeline | 41 | 4.1 (78) |
| Typology | Brand app: skin diagnostic, routine, shop | 45 | 4.9 (3,278) |
| Skan | AI skin scanner, product matches | 130 | 4.8 (9,833) |
| Glow | AI skin scanner, care plan | 80 | 4.8 (2,222) |
| SkinIQ | AI skin scanner | 12 | 4.8 (761) |
| Skin Bliss | Skin quiz, scan, ingredient checker | 95 | 4.7 (923) |
| Charm | Routine tracker with reminders | 83 | 4.5 (1,520) |
| FeelinMySkin | Routine tracker | 33 | 4.6 (289) |
| BasicBeauty | Routine tracker with reminders | 51 | 4.7 (610) |

#### How they come back

- **Reminders to check in or take a progress photo are praised (5 reviews).** One reviewer missed a check-in because no notification came, and the window closed.
- **Control over refills is loved.** 10 Musely reviews praise postponing, changing dates or adjusting orders: "I always know when my next shipment is coming, can easily make adjustments". One complained that the delivery frequency is fixed: "Should have options to ship 90 or even 120 days".
- **Noise backfires.**
  - Too many notifications, texts or emails (5).
  - Pop-ups selling an upgrade and nagging for reviews (8).
  - Renewals with no warning (2).
  - A brand app signed a shopper up for a paid membership with their first purchase, without asking.
- **Calendar.** One Musely user was annoyed that a check-in reminder needed calendar access. Two Miiskin reviewers said a reminder in their own calendar is all they need: "Folders on my phone and a reminder on my calendar will be just fine."

#### What they get when they come back

- **Being asked again makes people angry (4):** "if you can’t remember the three times I’ve input my information or any of my purchases from the last two years besides the very last one what is the point?"
- **Recommendations that ignore what they already own (5).**
  - One app's AI coach "does not have access to the rest of the app (like what products your currently have, etc)".
  - Another app tried to sell a shopper "the exact same products I listed on my intake as already using".
- **Automated check-ins fail (5, all Musely).**
  - "Everything is AI. No real people to answer questions and help. I get generic answers for specific questions."
  - Another said the check-in is "basically just a quick satisfaction survey" and added: "I have no one to tell that this product is doing absolutely nothing."
- **A personal check-in wins:** "The doctor even checked in to make sure I wasn’t having bad side effects. It feels way more personal than I expected."
- **A fee or a time limit on follow-up questions (5).**
- **Sharing the full analysis.** Mary Kay users ask to send their consultant the whole skin analysis, not only the product list (5).
- **Suggestions that feel like ads (7):** "Its suggestions often feel like paid actors."

#### How they see progress

- **Photos in one place are among the most frequent Musely praise (10):** "Keeps me accountable to staying consistent with my prescription spot cream." Nu Skin's "selfie timeline" is praised too (3).
- **Requests:**
  - photos side by side, or a chart across dates (3)
  - a link between what they used and how their skin looked (2)
- **Changing the routine must keep the history:** "Customers want to be able to change up their routines and keep their previous process."
- **Consistent photos are hard to take.** Lighting, angle and distance cause problems (5, mostly Miiskin). Two Miiskin users found their old photos locked behind a subscription.
- **Timing is mixed.** These are self-reported, all from Musely.
  - About 10 reviewers report some change within the first month.
  - 3 report nothing yet after 1–2 months: "So far no noticeable change but I’m going to continue. Only a month in."
  - Patient reviewers name the wait themselves: "I’m waiting on that 2 month result", "some products take longer to work than others".
  - One sees results from one product but not yet from another.
- **"Got worse":** advice keeps people going: "It stung at first ngl, but the app gave me tips (like moisturize more) and I pushed through." Another shopper got only "sorry to hear that" and was sent elsewhere, and left.

#### Skin scores

- **Misreads (6):** freckles read as acne, dark skin as redness, dimples and permanent make-up as acne, wrinkles that aren't there. Two found no way to correct it: "there is no mechanism to allow you to tag the freckles instead of acne".
- **Scores jump between scans (3):** "Keeps switching between the score being 69 and 79".
- **Photos fail in poor light or bad alignment (10, mostly Mary Kay).**
- **Hurt feelings (2):** "Made me more insecure", "made me feel sad".

#### Reasons to come back seen in reviews

- A new scan showed improvement, so the shopper moved to a lighter Mary Kay product line: "Looks like I can go back to a Timewise set rather than Timewise Repair."
- Dark spots get worse in summer, so a Musely user paused treatment until it was cooler.
- A skin problem came back with hormones, so a past Musely customer returned.
- Rewards: Musely removed its avatar and rewards games in late October 2026, and 15 reviews complained within two weeks.

#### Paywalls

The most common complaint about the AI scanner apps (Skan, Glow) is a paywall right after the scan: "At lease show me that something worth value before I pay." This is less relevant to a free brand chat, but it shows that value has to come before the ask.

## Gaps we can use

1. **Week 3 is refill time.** The 2 bought products run low around day 20–25, the same moment the shopper asks "is it working?". One message can carry both.
2. **Nobody sets expectations.** A progress view that says what can change by week 3 and what can't turns "no change" into "on track".
3. **"Worse" needs a next step,** not only comfort: check photo conditions, recognise purging, or adjust the routine.
4. **Fixed weekly prompts feel like nagging.** Timing based on how long products last is easier to defend and gives a natural point to stop.
5. **Nobody times reminders per product and per concern.** Skin.Chat already knows the routine, so it could work out when each product runs out and when change can realistically show, with no extra setup by the brand.
6. **Nobody lets the shopper put the next check-in in their own calendar.** A reminder the shopper adds themselves doesn't depend on marketing consent and has a natural end.
7. **Weather messages are generic.** They say "it's cold, buy moisturiser" to everyone. Skin.Chat could tie the weather change to the shopper's own scores and routine, and the first step doesn't have to be a purchase.
8. **Permission asks are vague.** "Sign up for updates" or "10% off" says nothing about what the shopper will get. A specific promise at the end of the consultation could work better: "I'll check in on 8 Dec, when your serum runs low and it's time to see what changed." Calendar, email or WhatsApp can be one choice. Note: this ask happens in the first visit, which is out of scope, so it goes in as an assumption.
9. **Fallbacks are generic.** Packaging inserts and "welcome back" banners say the same thing to everyone. A card or an on-site nudge built from the shopper's own consultation, with a personal link back into the chat, would be new.
10. **Declining is all or nothing.** Skin.Chat could offer a choice by type (refill, progress, season) and still work fully when the shopper returns on their own.

## Limits of this research

- Desk research only. We did not install or test the apps.
- Most sources are vendor pages or vendor blogs. Numbers and features are as claimed.
- We found no public details on how these tools design the returning conversation itself (the first message, what is shown first).
- Reviews are self-selected. Web reviews are mostly about subscription services, no Reddit threads came back, and some points rest on a single review.
- None of the App Store apps is a chat widget on a brand site. They are the nearest analogues.
- Apple's feed serves only recent written reviews, up to 500 per country. For Nolla that is 79 written reviews out of 13,817 ratings.
- Musely makes up 500 of the 1,338 App Store reviews, and 83% of them are 5★, mostly short praise.
- Results timing in reviews is self-reported. Some reviewers say they are 11–13 years old.
- 1,000 older UK and Canada Musely reviews were left out. They were about an earlier app with the same name.

## Sources

- [Gizmodo: Neutrogena Skin360 review](https://gizmodo.com/neutrogenas-free-skincare-app-actually-works-mostly-1841026360)
- [Fortune: face-scanning AI apps in cosmetics](https://fortune.com/2024/02/29/face-scanning-ai-apps-are-giving-cosmetics-companies-deeper-connections-and-selling-points-with-customers/)
- [Revieve: Skin Coach launch](https://www.revieve.com/insider/news/skin-coach-launch)
- [Revieve: Barefaced Skin Coach](https://www.revieve.com/insider/news/expert-care-digital-precision-barefaced-introduces-the-future-of-skincare-with-the-skin-coach)
- [Revieve: AI Skin Advisor Pro](https://www.revieve.com/platform/skincare/ai-skin-advisor-pro)
- [Revieve: AI loyalty engines in beauty](https://revieve.com/insider/articles/ai-loyalty-engines-beauty-retention)
- [Proven: how to update the skin quiz](https://support.provenskincare.com/en-US/how-do-i-update-my-skin-genome-quiz-339525)
- [Proven: quiz before every shipment](https://support.provenskincare.com/en-US/do-i-have-to-take-the-skin-genome-quiz-before-every-shipment-339598)
- [Curology: uploading photos](https://support.curology.com/en_us/uploading-photos-B1pwm2d2d)
- [Curology: before and after](https://curology.com/blog/before-and-after)
- [TreatCompare: Dermatica vs Skin+Me](https://www.treatcompare.com/articles/dermatica-vs-skin-me)
- [Klaviyo: replenishment emails](https://www.klaviyo.com/blog/the-email-automation-all-consumable-goods-brands-need-that-many-dont-yet-use)
- [Klaviyo: understanding predictive analytics](https://help.klaviyo.com/hc/en-us/articles/360020919731-Understanding-Klaviyo-s-predictive-analytics)
- [Klaviyo community: replenishment flow from predictive data](https://community.klaviyo.com/marketing-30/how-do-i-make-a-replenishment-flow-based-on-klaviyo-predictive-data-7027)
- [Klaviyo community: next order date as a flow trigger](https://community.klaviyo.com/marketing-30/predicted-next-purchase-date-as-a-flow-trigger-11163)
- [Hello Retail: replenishment reminders guide](https://helloretail.com/en/blog/2026-02-21-replenishment-reminders-complete-guide/)
- [Perfect Corp: why skincare progress photos lie](https://www.perfectcorp.com/business/blog/ai-skincare/why-skincare-progress-photos-lie)
- [Perfect Corp: Skincare Pro CRM upgrade](https://www.businesswire.com/news/home/20240312144423/en/Perfect-Corp.-Launches-Highly-Sought-After-CRM-Upgrade-to-Skincare-Pro-the-Holistic-AI-Skin-Scanner-Solution)
- [Business Wire: YouCam skin diagnostic (2017)](https://www.businesswire.com/news/home/20170809005373/en/YouCam-Makeup-Launches-New-AR-Skin-Diagnostic)
- [La Roche-Posay: how Spotscan works](https://www.laroche-posay.co.uk/en_GB/how-does-effaclar-spot-scan-work.html)
- [Which?: can you trust AI skin analysers](https://www.which.co.uk/news/article/can-you-trust-ai-skin-analysers-a7Uhd1Q5mhUa)
- [TroveSkin on the App Store](https://apps.apple.com/us/app/troveskin/id1435184918?l=es)
- [Renude: purging and changing](https://app.renude.co/blog/skin/purging-and-changing-a-road-to-success-77)
- [The Inkey List: retinol purge](https://www.theinkeylist.com/blogs/news/retinol-purge)
- [Dosefi skincare routine log](https://mwm.ai/apps/dosefi-skincare-routine-log/6760504673)
- [Add to Calendar Pro: event reminder email](https://add-to-calendar-pro.com/articles/event-reminder-email)
- [Litmus: add-to-calendar links in emails](https://www.litmus.com/blog/how-to-create-an-add-to-calendar-link-for-your-emails)
- [Calendly community: reminders in .ics files](https://community.calendly.com/how-do-i-40/feature-request-reminders-into-ics-1263)
- [gReminders: add-to-calendar links](https://www.greminders.com/articles/add-to-calendar-links-ics/)
- [Trend Hunter: weather typing (Atmosphera)](https://www.trendhunter.com/trends/weather-typing)
- [Cosmetics Design: brands adding geolocation and climate data](https://cosmeticsdesign-europe.com/Article/2018/10/15/Skin-care-brands-around-the-world-are-adding-geolocation-and-climate-data-to-the-mix)
- [The Zoe Report: climate skin care](https://www.thezoereport.com/beauty/climate-skin-care)
- [Pour Moi: Climate-Smart skincare](https://pourmoiskincare.com/blogs/beautyforecast/is-your-skincare-really-working-for-you-here-s-why-climate-smart-skincare-might-be-the-game-changer-you-need)
- [Klaviyo: Dermalogica case study](https://klaviyo.com/au/customers/case-studies/dermalogica-email-sms)
- [Movable Ink: Dermalogica weather personalisation](https://www.casestudies.com/company/movable-ink/case-study/dermalogica-customer-case-study)
- [Verve Group: Cetaphil weather-triggered ad](https://www.casestudies.com/company/verve-group/case-study/cetaphil-customer-case-study)
- [Chief Marketer: Pantene Haircast](https://chiefmarketer.com/pro-awards-winners/gold-best-use-shopper-marketing)
- [Effie: Pantene Haircast 2016](https://effie.org/case_studies/case/NA_2016_438522)
- [Klaviyo: Weather for Email integration](https://integrations.klaviyo.com/weather-for-email)
- [Klaviyo community: seasonal products](https://community.klaviyo.com/marketing-30/email-market-for-out-of-season-seasonal-products-11452?postid=45489)
- [Octane AI: Kinvara case study](https://octaneai.com/customers/kinvara)
- [Octane AI: Doe Lashes case study](https://octaneai.com/customers/doe-lashes)
- [BlueConic: LoveSeen case study](https://www.casestudies.com/company/blueconic/case-study/loveseen-drives-a-6x-lift-in-opt-in-rates-with-their-find-my-lash-product-recommendation-quiz)
- [Visual Quiz Builder: SKOON](https://www.visualquizbuilder.com/post/how-skoon-personalized-skincare-for-customers-and-notched-3-5x-conversion)
- [Prehook: skincare quiz examples](https://prehook.com/skincare-ecommerce-quiz/)
- [Sephora: SMS opt-in FAQ](https://www.sephora.com/beauty/sms-opt-in-faq)
- [Sally Beauty: texting](https://www.sallybeauty.com/texting)
- [Attentive: growing an SMS list](https://www.attentive.com/holiday)
- [Ulta: Replenish & Save terms](https://www.ulta.com/guestservices/ways-to-shop/replenish-and-save/terms-and-conditions)
- [Paula's Choice: auto replenishment](https://www.paulaschoice.com.au/auto-replenishment)
- [Lovelyskin: auto replenish](https://www.lovelyskin.com/customer-service/auto-replenish)
- [Clinique: subscription](https://www.clinique.ca/subscription)
- [Hurree: iOS permission best practices](https://blog.hurree.co/ios-push-notification-permissions-best-practises)
- [Batch: improving push opt-in](https://doc.batch.com/guides-and-best-practices/orchestration/how-to-improve-the-push-opt-in-rate)
- [Zithara: WhatsApp opt-ins for retail](https://zithara.ai/blogs/whatsapp-business-opt-ins-guide-for-retail-in-2025)
- [Aerochat: GDPR checklist for chatbots](https://aerochat.ai/blog/gdpr-compliance-checklist-shopify-chatbots)
- [Infobip: WhatsApp opt-in policy](https://www.infobip.com/en/blog/how-to-collect-whatsapp-business-opt-ins)
- [Glossy: Fenty Beauty WhatsApp advisor](https://www.glossy.co/beauty/exclusive-fenty-beauty-launches-whatsapp-ai-advisor-as-messaging-becomes-beautys-next-commerce-channel/)
- [DEV: when to ask for push permission](https://dev.to/pykero/when-to-ask-for-push-notification-permission-and-when-not-to-42a3)
- [OneSignal: prompting for push permissions](https://documentation.onesignal.com/docs/prompt-for-push-permissions)
- [Airship: earning push opt-ins](https://www.airship.com/blog/how-to-earn-mobile-push-notification-opt-ins)
- [CleverTap: iOS push permissions](https://clevertap.com/blog/asking-for-ios-push-notification-permissions/)
- [Transcend: opt down](https://transcend.io/blog/opt-down-reduce-email-unsubscribes)
- [Oracle: snooze in email marketing](https://blogs.oracle.com/marketingcloud/the-evolving-use-of-snooze-in-email-marketing)
- [Salesfire: email snoozing](https://help.salesfire.co.uk/emails/privacy/email-snoozing)
- [Litmus: preference center best practices](https://www.litmus.com/blog/email-preferences-center-best-practices)
- [Digioh: email preference center](https://www.digioh.com/blog/email-preference-center)
- [ICO: managing consent in practice](https://cy.ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/how-do-we-manage-consent-in-practice/)
- [Dig.watch: EU on DMA and GDPR](https://dig.watch/?p=231661)
- [EDPB: decision on unsubscribe links](https://www.edpb.europa.eu/system/files/2026-06/decision-no-3773.pdf)
- [Suped: promotional content in transactional emails](https://www.suped.com/email-deliverability/answers/what-are-the-legal-and-deliverability-implications-of-including-promotional-content-in-transacti)
- [WP Mail SMTP: GDPR and transactional emails](https://wpmailsmtp.com/gdpr-best-practices-transactional-emails/)
- [Bitly: how Curology uses QR codes](https://bitly.com/blog/how-curology-uses-qr-codes/)
- [LBB: connected packaging in beauty](https://lbbonline.com/news/connected-packaging-in-the-beauty-industry-personalisation-at-scale)
- [The Industry: Clinique NFC packaging](https://www.theindustry.fashion/clinique-launches-first-nfc-enabled-packaging-for-skincare/)
- [QRStuff: QR codes in cosmetics](https://www.qrstuff.com/feeds/blog/qr-code-customer-engagement-cosmetics-brands)
- [OptiMonk: personal welcome back](https://www.optimonk.com/use-cases/personal-welcome-back-64e768672625c20023ce8c9b)
- [trbo: entry banners](https://www.trbo.com/blog/the-three-best-entry-banners-to-start-with-onsite-personalization/)
- [GrowthSuite: new vs returning visitors](https://www.growthsuite.net/questions/how-do-i-personalize-for-first-time-vs-returning-visitors)
- [Shopify: order status page](https://help.shopify.com/manual/orders/status-tracking/first-time-accessed)
- [Shopify dev: Thank you and Order status pages](https://shopify.dev/docs/apps/build/checkout/thank-you-order-status)
- [Shopify community: marketing vs order emails](https://community.shopify.com/t/customers-who-ordered-and-email-marketing/238586)
- [The Inkey List: quiz](https://theinkeylist.com/pages/recipe)
- [Airship: Message Center](https://www.airship.com/docs/guides/features/messaging/message-center/)
- [Braze: push alternatives](https://www.braze.com/blog/push-notification-alternative)
- [Courier: push fallbacks](https://www.courier.com/blog/push-notification-fallbacks-ensuring-message-delivery-with-email-slack-sms)
- [Pushwoosh: Wallet pass lock screen](https://www.pushwoosh.com/blog/wallet-pass-lock-screen-locations/)
- [Airship: Wallet pass triggers](https://www.airship.com/docs/guides/wallet/user-guide/notifications/triggers/)
- [Rep AI: personalising with the returning customer's last order](https://help.hellorep.ai/hc/en-us/articles/35521072055442-How-Rep-AI-Personalizes-Conversations-Using-Your-Returning-Customer-s-Last-Order)
- [eesel: Gorgias chat campaigns](https://www.eesel.ai/blog/gorgias-chat-campaigns)
- [Sigma-Aldrich: previous purchase banners](https://sigmaaldrich.com/BR/en/life-science/ecommerce/website-update-info/previous-purchase-banners)
- [WooCommerce: Repeat Order and Buy Again](https://woocommerce.com/nl/products/repeat-order-and-buy-again/)
- [Shopify: Buy It Again app](https://apps.shopify.com/bia-production)
- [Stitch Fix: our stylists](https://support.stitchfix.com/support/solutions/articles/153000173919-our-stylists)
- [My Subscription Addiction: Stitch Fix review](https://mysubscriptionaddiction.com/shopping-just-got-very-personal-why-stitchfix-is-now-my-go-to-stylist)
- [Cratejoy: DEWY MD beauty box](https://www.cratejoy.com/products/luxe-md-edition-dewymdbeautybox)
- [Shopify: Releasit QR codes](https://apps.shopify.com/releasit-qr-codes-generator?locale=fi)
- [Shopify: QR Codes for Products & Orders](https://apps.shopify.com/reorder-qr-codes)
- [Shop Circle: QR codes on Shopify invoices](https://shopcircle.co/blogs/news/how-to-add-qr-codes-to-branded-invoices-on-shopify)
- [QR Codes Unlimited: unique QR per order](https://qrcodesunlimited.com/academy/shopify-tutorial/how-can-i-create-unique-qr-codes-for-each-order-what-shopify-merchants-should-know)
- [Reviews.io: Curology reviews](https://www.reviews.io/company-reviews/store/curology/9Bw)
- [Reviews.co.uk: Curology reviews](https://www.reviews.co.uk/company-review/store/curology/14036597)
- [Trustpilot: Curology](https://uk.trustpilot.com/review/curology.com)
- [Trustpilot: Skin+Me](https://uk.trustpilot.com/review/skinandme.com?page=2)
- [Trustpilot: Dermatica](https://uk.trustpilot.com/review/dermatica.com?page=3)
- [Trustpilot: Proven](https://nz.trustpilot.com/review/provenskincare.com)
- [Yahoo: logging a routine in Neutrogena Skin360](https://www.yahoo.com/lifestyle/logged-skin-care-routine-neutrogena-150838464.html)
- [Gizmodo Australia: Neutrogena Skin360](https://gizmodo.com.au/?p=1200003)
- [The Right Hairstyles: AI beauty apps tested](https://therighthairstyles.com/ai-beauty-apps-tested-reviewed)
- [RetailWire: are consumers less creeped out by tracking](https://retailwire.com/discussion/are-consumers-getting-less-creeped-out-about-being-tracked-online/)
- [Algolia: personalisation survey](https://www.algolia.com/blog/algolia/personalization-survey)
- [arXiv: longitudinal effects of personalising language models](https://arxiv.org/pdf/2609.20077)
- [Apple customer reviews feed (example: Musely, US)](https://itunes.apple.com/us/rss/customerreviews/page=1/id=578505616/sortby=mostrecent/json)
- [App Store: Musely](https://apps.apple.com/us/app/id578505616)
- [App Store: Nolla Derm](https://apps.apple.com/us/app/id6741805934)
- [App Store: Miiskin](https://apps.apple.com/us/app/id1214795331)
- [App Store: Mary Kay Skin Analyzer](https://apps.apple.com/us/app/id1417941279)
- [App Store: Nu Skin Vera](https://apps.apple.com/us/app/id1569408041)
- [App Store: Typology](https://apps.apple.com/us/app/id1611151299)
- [App Store: Skan](https://apps.apple.com/us/app/id6449196562)
- [App Store: Glow](https://apps.apple.com/us/app/id6529520298)
- [App Store: SkinIQ](https://apps.apple.com/us/app/id6737985943)
- [App Store: Skin Bliss](https://apps.apple.com/us/app/id1385561364)
- [App Store: Charm](https://apps.apple.com/us/app/id1480983279)
- [App Store: FeelinMySkin](https://apps.apple.com/us/app/id1526044677)
- [App Store: BasicBeauty](https://apps.apple.com/us/app/id1571959428)
- [Glossy: Alhena client advisor](https://www.glossy.co/sponsored/how-alhena-is-using-ai-to-create-a-premium-client-advisor-for-the-luxury-market/)
- [Glossy: Benefit and AI](https://www.glossy.co/beauty/how-benefit-is-reimagining-the-customer-journey-with-ai/)
- [PYMNTS: beauty giants and AI shopping](https://www.pymnts.com/artificial-intelligence-2/2026/beauty-giants-race-to-own-the-ai-shopping-moment/)
- [Haut.AI: Skin.Chat product page](https://haut.ai/product/skinchat)
