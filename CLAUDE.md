# Haut.AI test assignment: Senior Product Designer

Source brief: Haut.AI's assignment page, copied in full in `docs/assignment.md`. Everything needed from it is below.

## Hard rules

1. Never write to memory without my explicit request.
2. Never add AI credentials to commits: no `Co-Authored-By` lines, no "Generated with" notes, no mention of Claude or any AI as author.
3. Always commit and push directly to `main`. No feature branches, no pull requests.
4. Reply in a very simple and short manner, from the UX perspective, not the technical one. Use paragraphs and lists if needed.
5. This repo will be shared with the hiring team. Never add credentials, personal data or anything else that could be sensitive to me: no keys or tokens, no emails, phone numbers or addresses, no local file paths, no private notes. If unsure, ask before committing.
6. Do not commit or push without my explicit request. When I do ask, rule 3 applies: straight to `main`.
7. Base answers only on our research (`docs/`) and the brief, not on guesses or prior knowledge. When that's impossible, add a clear note saying where the claim comes from.
8. In the prototype, use only our own library, which is based on skin.chat and customisable per brand: the tokens in `src/styles/tokens.css` and the components in `src/styles/library.css` (both exact copies of skin.chat's), the parts in `src/parts` and the brand settings in `src/data/brands.ts`. Reuse what's there. Never invent new styles or tokens (colours, type sizes, weights, spacing, corners, title or button styles). If nothing fits, show me the closest part of the library and ask before adding anything. When something new is agreed, add it to the library so every brand gets it, not as a one-off.

Items marked *(derived)* are our reading of the brief, not its wording.

## Assignment in short

**Skin.Chat returning user.** Skin.Chat is Haut.AI's AI skincare assistant. Beauty brands embed it on their e-commerce site as a chat widget that opens from a button on any page (like Intercom, Ada, Zendesk). It can also live in WhatsApp and Instagram, but brand websites are the focus. It answers skincare questions, analyses skin from a selfie (scores for wrinkles, redness, pores, etc.) and recommends a routine from the brand's own catalog, with add to cart in the chat.

**Problem.** Many shoppers do one consultation and never come back. Real reasons to return exist: a routine takes weeks to show results, products run out, skin changes with the season. A "We miss you!" reminder is not a reason.

**Scenario.** The shopper did a skin analysis on a brand's website 3 weeks ago, got a routine of 3 products and bought 2 of them in the chat.

**Reference.** https://skin.chat is the public, non-brand version of the same assistant. No login needed.

## 1. DoD

Done means all three deliverables exist and are sent.

**A. Clickable prototype**
- [ ] Covers the main return path end to end: touchpoint → return to chat → progress view → next step
- [ ] Opens and works on a phone
- [ ] Shared as a Claude Design link, or as a hosted link plus the repo if built in Claude Code
- [ ] Shown in one brand style
- [ ] Says what a brand could change and what stays fixed
- [ ] Progress view plays "nothing changed" in full; "scores got worse" is described in the rationale (decided: the brief asks to "think about" it, not to build it)

**B. Rationale, one page**
- [ ] The reasons to come back we considered, and why we picked ours
- [ ] Touchpoints: which ones, when, and when to stop sending
- [ ] Short list of the return paths we did not design
- [ ] What we looked at in other products (if anything)
- [ ] How we would know it works: one metric and one cheap test with real people
- [ ] Our own added assumptions, listed

**C. How we worked with Claude, half a page**
- [ ] What we asked Claude to do
- [ ] What was changed by hand
- [ ] Where Claude didn't help
- [ ] Main prompts or a session export attached

**Overall**
- [ ] The design answers all four questions in section 3
- [ ] Sent within the deadline
- [ ] If time ran out: a note on where we stopped and what we would do next

## 2. Tech requirements

- Built in Claude Design, Claude Code, or both. No Figma at any stage.
- If built in Claude Code: it must be hosted at a public link and the repo is part of the submission.
- Mobile first. It must open on a phone by link.
- Chat answers and skin scores are scripted. No real AI, no backend needed.
- The chat is a widget on a brand's e-commerce site, opened from a button on a page. Messengers are secondary.
- One design must work for many brands without custom design work per brand. *(derived)* Keep everything brand-specific in a small set of theme tokens (colors, type, logo, tone, catalog), and keep layout and flow fixed.
- *(derived)* skin.chat is the foundation, not something to redesign. Its interface stays, and the brand is a skin on top (the theme tokens above). What we design new is the return flow, built from skin.chat's existing parts. The brief doesn't say this, so it's listed as our assumption in the rationale.
- Out of scope: the first visit, the selfie capture flow itself, the brand's admin.

## 3. UX requirements

The design must answer four questions:

1. **How do they come back?** Which touchpoints, in which channel, and when. One path designed end to end; a short list is enough for the others.
2. **Why do they come back?** The reason is value for the shopper, not a reminder.
3. **What do they get when they come back?** What the chat says first, what it already knows, and what the useful next step is.
4. **How do they see progress since the last visit?** For example, a new selfie compared to the last one. Cover the cases where nothing changed or the scores got worse.

Given assumptions:

- The chat remembers the last conversation, the last skin results and scores, the recommended routine and what was bought in the chat.
- The brand can reach the shopper only in channels the shopper agreed to (email, WhatsApp, etc.).
- Skin changes slowly.
- Skincare only.
- Mobile first, and it works for many brands without custom design.

What follows from them *(derived)*:

- The returning chat should not ask for anything it already knows. It opens with the shopper's own context: last scores, the routine, the 2 products bought, the 1 not bought.
- Three weeks is early for visible change, so the progress view has to be honest about small or no movement and still give a useful next step.
- Week 3 is the brief's scenario, not a moment our research proves best. Research says doubt and quitting cluster in weeks 2–4, from brand or unverified surveys. Some people quit within 2 weeks. One retailer's advisors follow up at 3 days, 3 weeks and 3 months (Cos Bar, vendor case study). So we design for week 3 as given, don't claim it's the best moment, and keep the early check-in a few days after delivery in view. Source: `docs/user-research.md`.
- Every touchpoint needs a consent basis and a rule for when sending stops.
- Depth on the main moments matters more than the number of screens.

## 4. Process requirements

- **Time:** track time spent.
- **Deadline:** within 7 calendar days of receiving the assignment.
- **Before designing:** open skin.chat on a phone, take the skin analysis, get a routine and look at what the chat remembers.
- **Tools:** Claude Design or Claude Code only, including for first sketches.
- **Keep a record as we go:** the main prompts, what was changed by hand and where Claude didn't help. Deliverable C depends on it, and it cannot be reconstructed well at the end.
- **Assumptions:** we may add our own, and each one goes into the rationale.
- **Next step after sending:** a 45-minute call, 20 minutes to present and then questions. *(derived)* The work should be presentable in 20 minutes.
- **Questions about the brief:** reply to the assignment email.

## 5. Do and Don'ts

**Do**
- Pick one return path and design it end to end.
- Give the shopper a real reason to return: results over time, products running out, seasonal change.
- Start the returning conversation from what the chat already knows.
- Design the "no change" and "got worse" progress states with the same care as the improvement state.
- Show one brand style and state what a brand can change and what stays fixed.
- Script the chat answers and the scores.
- Say when the touchpoints stop.
- Give one metric and one cheap test with real people.
- List every assumption we add.
- If time runs out, report where we stopped and what we would do next.

**Don't**
- Don't use Figma, not even for sketches.
- Don't use "We miss you!" style reminders as the reason to return.
- Don't design the first visit, the selfie capture flow or the brand admin.
- Don't build real AI or a backend.
- Don't chase every edge case or pad the screen count.
- Don't design anything that needs custom work per brand.
- Don't contact the shopper in a channel they did not agree to.
- Don't go beyond skincare.
- Don't promise visible skin change after 3 weeks. *(derived from "skin changes slowly")*
