# Skin.Chat reference

Offline copies of the public [skin.chat](https://skin.chat) (app version 0.7.28), captured on a phone-sized screen. We use them as the visual base for the returning-user prototype, so it looks and feels like the real product.

Open `index.html` to browse. Each screen is the real page HTML and CSS with the app logic removed, so it looks right but nothing is clickable.

## What's inside

| Screen | What it shows |
|---|---|
| 01-home | Empty chat: Skin Portrait chip, entry cards, suggested questions, input |
| 02-question | A typed question, the answer and a product carousel |
| 03-routine | Routine request: choose selfie analysis or quiz |
| 04-bestsellers | Product list cards with price |
| 05-analyze | Photo capture options (dark screen) |
| 06-portrait | Skin Portrait before any analysis |
| 07-quiz-01, 07-quiz-04-picked | Quiz steps: single and multi choice, Skip and Send |
| 08-routine-result | Quiz summary and a step-by-step routine |
| 10-analysis-preview | Photo check ("Well done") with Retake and Send. Screenshot only |
| 12-results-chat | Analysis result in chat. Screenshots `-02` to `-06` show the rest of the scroll |
| 13-metric-detail | One score full screen with face mask and zoom. The face viewer only survives in the screenshot |
| 16-return-portrait | Skin Portrait after an analysis: photo, "2 minutes ago", focus areas |
| 18-second-results | Second analysis, added to the bottom of the same chat |
| 19-portrait-two | Skin Portrait with two analyses side by side |
| 20-portrait-card-open | One past analysis opened from Skin Portrait. Screenshot only |

## Skin analysis run

Done with an AI-generated face (thispersondoesnotexist.com), so no real person's photo went to Haut.AI. The scores are real skin.chat output.

What the analysis gives:
- Skin type, perceived age, eye age, skin tone
- 16 scores out of 100, higher is better, each labelled Bad / Average / Good / Great
- Split into "looking great" and "needs extra care", with a face mask per concern
- A text summary that names the main focus areas and offers a routine or products next

## What happens when you come back

We closed the browser and reopened skin.chat in the same profile:
- The chat reopens exactly where it was left: same messages, same scores. No greeting, no reference to the time passed, no new next step.
- Skin Portrait shows the last photo with "x minutes ago" and the focus areas, plus a "+" for a new analysis.
- After an analysis, the Skin Portrait button in the header shows the shopper's face instead of "+".

So it remembers the shopper's data but doesn't treat them as someone coming back.

Not checked yet:
- **Coming back days later.** We reopened it after minutes, not days. Haut.AI says Skin.Chat has long-term memory for logged-in and anonymous users ([product page](https://haut.ai/product/skinchat), vendor claim, see `docs/competitor-research.md`). To check: reopen skin.chat on the same phone a few days after the first visit.
- **Another browser or device.** Without login we assume it knows the shopper only on the same browser (our assumption, `docs/ideas.md`). On a brand's site, a logged-in shopper is recognised on any device when the brand passes its customer ID (Haut.AI's integration docs, see `reference/brands/README.md`).

## Second analysis: what "nothing changed" looks like today

We ran a second analysis with the same face in the same browser, about 10 minutes later (started from "+" in Skin Portrait):
- It was added to the bottom of the same chat. Scores came out identical: 16 of 16 the same.
- The chat never mentions the first analysis. No "same as last time", no comparison, no change in advice. It repeats the same summary and the same three follow-up questions, reworded.
- Skin Portrait now shows two photo cards side by side ("a minute ago", "11 minutes ago"). Tapping one opens only that analysis. There's no compare or trend view.

This is the gap our design fills: the data for a progress view is already stored, but the shopper never sees it.

## Not captured

- **App logic.** The real app is compiled and talks to Haut.AI servers, so there is nothing useful to edit. Our prototype rebuilds the screens with scripted data instead.
- Login, cookie banner, analytics and session data were removed on purpose.

## Style tokens worth reusing

The full set of skin.chat's tokens is copied, with the same names and values, into `src/styles/tokens.css`. The table below is the short version.

| Token | Value |
|---|---|
| Font | Inter 400 / 500, system fallback |
| Text | `rgb(27 31 38)`, secondary 70%, tertiary 40% |
| Light accent | `rgb(236 242 254)` |
| Brand color | `--color-brand`, black by default: this is the slot a brand would change |
| Success / danger / warning | `rgb(62 205 111)` / `rgb(243 86 96)` / `rgb(243 105 12)` |
| Corner radius | 20px base, pills fully round |
| Patterns | Dark user bubbles, pastel blue-to-lilac gradient for chips and options, round avatar, thumbs up/down under answers |

Product photos and names come from skin.chat's demo catalog (Amazon listings), not from a real brand.
