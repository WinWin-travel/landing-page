# Handoff: WinWin.travel Landing Page (responsive)

## Overview
A single-page marketing/investor landing page for **WinWin.travel**, an accessible-travel platform. It carries the narrative from the company's ForsaTEK pitch deck: one traveller's problem (Zaynab), the scope of the market, what WinWin.travel builds, the Dubai proof of concept, and two calls to action (seed investment, go-to-market partnership).

Ten sections, top to bottom: sticky header → hero → the problem → the whole journey → why it matters → what we do → the platform (product) → infrastructure → proof of concept → what's next → footer.

## About the Design Files
The files in `design/` are **design references created in HTML** — a prototype showing intended look and behaviour. They are **not production code to copy directly**.

The task is to **recreate this design in the target codebase's existing environment** (React, Vue, Astro, SwiftUI, native, whatever is in use), following that codebase's established component patterns, styling approach, and libraries. If no environment exists yet, choose the framework most appropriate for a marketing site (a static-site generator or React/Next-style setup is a natural fit for this page) and implement there.

Two things in the prototype are artifacts of the authoring tool and should **not** be reproduced:
1. **`support.js` and the `<x-dc>` wrapper** — a prototyping runtime. Ignore it entirely.
2. **The imperative responsive layer** (see *Responsive behaviour*) — the prototype applies sub-760px layout changes from JavaScript because the authoring environment disallows CSS media queries. **In production, implement these as ordinary CSS media queries or your framework's responsive utilities.** No JavaScript should be involved in layout.

Everything else — the markup structure, the exact values below, the copy — is the spec.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, shadows, copy and responsive behaviour are all final and should be recreated pixel-accurately, using the codebase's existing primitives where they exist (buttons in particular).

The one deliberately unresolved item: **all CTAs currently point at `https://www.linkedin.com/in/vadymklymov/`** as a placeholder. Confirm the real destination (likely a contact form, mailto, or calendar link) before shipping.

---

## Global frame

- **Page background:** `#FFFFFF`. **Body text color:** `--grey-500 #31393C`. **Font:** Inter throughout.
- **Content column:** `max-width: 1180px; margin: 0 auto`.
- **Horizontal page gutter:** `clamp(18px, 5vw, 48px)` — used on every section.
- **Vertical section padding:** `clamp(56px, 9vw, 120px)` top and bottom on every section (footer uses `clamp(48px, 7vw, 88px)`).
- **`overflow-x: hidden`** on the page wrapper.
- **`scroll-behavior: smooth`**, disabled under `prefers-reduced-motion: reduce`.
- **Focus ring (non-negotiable — accessibility brand):** `outline: 3px solid var(--primary-100); outline-offset: 3px` on `:focus-visible`.
- **Link colors:** default `--primary-200`, hover `--brand-300`.

### Section background rhythm
White → white → charcoal → teal-tint → white → deep teal → white → charcoal → white → charcoal. Two dominant colored fields (charcoal `--grey-500`, deep teal `--primary-200`) alternating with white, per the design system's "max 1–2 dominant colors" rule.

---

## Screens / Views

This is a single scrolling page. Each section is a `<section>` carrying a `data-screen-label` attribute (labels below) — those attributes are authoring metadata and can be dropped.

### 1. Header — label `Header`
**Purpose:** persistent brand presence + one always-reachable CTA.

- `position: sticky; top: 0; z-index: 50`
- Background `rgba(255,255,255,.92)` with `backdrop-filter: blur(10px)`; `border-bottom: 1px solid var(--grey-200)`
- Inner: content column, `padding: 14px <gutter>`, `display: flex; align-items: center; justify-content: space-between; gap: 16px`
- **Left:** logo. Two `<img>` elements, one shown at a time:
  - Desktop: `assets/image4.png` (wordmark + "for People of Determination" tagline), `height: 42px`
  - ≤760px: `assets/image1.png` (compact wordmark, no tagline — the tagline lockup smears at small sizes), `height: 24px`
  - In production this is better expressed as a `<picture>` or two elements toggled by media query.
- **Right:** Button — label "Talk to us", design-system `Button` with `variant="primary"`, `size="sm"`, background overridden to `var(--primary-200)`.

### 2. Hero — label `Hero`
**Purpose:** state the mission over a real photograph of the traveller the product serves.

- Section: `position: relative; background: var(--grey-500); color: #FFFFFF; overflow: hidden; min-height: min(78vh, 720px); display: flex; align-items: center`
- **Background image:** `assets/image8.jpg` — absolutely positioned, `inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 72% center`.
  Alt text: *"Zaynab, a powered wheelchair user, outdoors in a London park"*.
- **Protection scrim:** absolute `inset: 0`, `linear-gradient(100deg, rgba(49,57,60,.96) 0%, rgba(49,57,60,.92) 34%, rgba(49,57,60,.55) 56%, rgba(49,57,60,.08) 78%)` — left-to-right, keeps the left-aligned text at full contrast while the subject stays visible on the right.
- **Content:** content column, `padding: clamp(40px,9vw,120px) <gutter>`; inner stack `max-width: 680px; display: flex; flex-direction: column; gap: clamp(18px,2.4vw,28px); align-items: flex-start`.
  - **Eyebrow:** "Accessible travel · Dubai" — 12px / 700 / `letter-spacing: .08em` / uppercase / `--brand-100`
  - **H1:** "Helping Dubai become the **#1 destination** for People of Determination" — `font-size: clamp(34px, 5.2vw, 60px)`, `line-height: 1.06`, `letter-spacing: -0.02em`, weight 800, `text-wrap: balance`. The phrase "#1 destination" is wrapped in a span colored `--brand-200`.
  - **Body:** "WinWin.travel is an AI-native company. We know how to build AI agents and get the most out of AI in travel." — `clamp(16px,1.7vw,21px)` / 1.5 / `rgba(255,255,255,.92)` / `max-width: 560px`
  - **Button:** "Talk to us" — `variant="primary"`, `size="lg"`, background `var(--primary-200)`, `margin-top: 4px`

### 3. The problem — label `Problem`
**Purpose:** make the abstract problem concrete through one named person.

- Two-column grid: `repeat(auto-fit, minmax(300px, 1fr))`, `gap: clamp(24px,5vw,72px)`, `align-items: start`
- **Left column** (`flex column, gap: 22px`):
  - Eyebrow "The problem" — 12px / 700 / .08em / uppercase / `--primary-100`
  - H2 "Zaynab. London. Powered wheelchair." — `clamp(30px,4vw,46px)` / 1.08 / `-0.02em` / 800 / balance
  - Lede "She's never been to Dubai. She's tried to plan it three times." — `clamp(18px,2vw,22px)` / 1.4 / 700 / `--brand-300`
  - Two paragraphs — 16px / 1.6 / `--grey-400` / `max-width: 52ch`:
    1. "She travels around Europe a few times a year with her sister. She has never been to Dubai, but she would love to go. Travelling so far away is frightening, because the information she needs simply is not there."
    2. "She started planning a trip a few times, but never finished."
- **Right column** — five question chips, `flex column, gap: 10px`, and **`padding-top: 38px`** so the first chip's cap-height aligns with the top of the H2. (This offset is removed below 760px where the column sits under the copy.)
  - Each chip: `display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: var(--grey-100); border-radius: 15px; font-size: clamp(16px,1.6vw,18px); font-weight: 600; line-height: 1.35`, prefixed by a "?" glyph in `--brand-300` at 21px / 800.
  - Copy: "Is the flight accessible?" · "What kind of ramp does the hotel have?" · "Does the room have a roll-in shower?" · "Is the neighbourhood accessible?" · "How to get across the city?"

### 4. The whole journey — label `Journey`
**Purpose:** show that accessibility data quality collapses across the trip.

- Section background `--grey-500`, text white. Note `padding: clamp(56px,9vw,120px) 0` — **no horizontal padding on the section**; the gutter is applied to the inner blocks instead, so the mobile carousel can bleed to the screen edge.
- **Header block** (`max-width: 760px`, gutter padding, `gap: 16px`): eyebrow "The whole journey" (`--brand-100`); H2 "Is the whole journey accessible?" (`clamp(28px,3.8vw,44px)`); paragraph "It is a full-time job for Zaynab to research all Dubai communities and call hundreds of hotels to find accommodation that fits her needs." (16px / 1.6 / `rgba(255,255,255,.82)` / `max-width: 62ch`).
- **Four cards:** grid `repeat(auto-fit, minmax(230px, 1fr))`, `gap: 16px`, gutter padding.
  Each card: `padding: 24px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); border-radius: 18px; display: flex; flex-direction: column; gap: 12px`, containing:
  1. Title — 20px / 700 / `-0.01em`
  2. Progress bar — track `height: 8px; border-radius: 999px; background: rgba(255,255,255,.14); overflow: hidden`, fill `height: 100%` at the width/color below
  3. Status label — 12px / 700 / `.05em` / uppercase
  4. Body — 15px / 1.6 / `rgba(255,255,255,.8)`

  | Card | Fill | Fill color | Status label | Label color |
  |---|---|---|---|---|
  | Flights | 80% | `--primary-100` | Mostly findable | `--primary-50` |
  | Hotels | 12% | `--brand-300` | Almost invisible | `--brand-100` |
  | City & neighbourhood | 38% | `--brand-100` | Fragmented | `--brand-50` |
  | Attractions & experiences | 12% | `--brand-300` | Almost invisible | `--brand-100` |

  Body copy, in order: "Emirates does this really well — accessibility information for flights is easy to find. Most other airlines do not." / "Ramp slopes, door widths, roll-in showers, turning space — rarely published, rarely verified." / "Information about Dubai itself is scattered, so pulling it together takes real effort." / "What she can actually do once she is there is the hardest thing of all to find out."
- **Swipe hint:** "Swipe to see all four →" — 13px / `rgba(255,255,255,.66)`, gutter padding. `display: none` on desktop; shown only in the mobile carousel state.

### 5. Why it matters — label `Why it matters`
**Purpose:** scale the single story to a market.

- Background `--primary-50`. Grid `repeat(auto-fit, minmax(290px, 1fr))`, `gap: clamp(24px,5vw,64px)`, `align-items: center`.
- **Left:** eyebrow "Why it matters" (`--primary-200`); H2 "Zaynab is not alone." (`clamp(30px,3.8vw,44px)`); paragraph "According to the World Health Organization there are 1.3 billion People of Determination worldwide. Senior travellers have similar challenges." (16px / 1.6 / `--grey-400` / `max-width: 50ch`).
- **Right:** two stat cards, grid `repeat(auto-fit, minmax(190px, 1fr))`, `gap: 14px`.
  Card: `background: #FFFFFF; border-radius: 20px; padding: clamp(22px,3vw,30px) clamp(24px,3vw,26px); box-shadow: 0 6px 20px rgba(49,57,60,.10); display: flex; flex-direction: column; gap: 8px`.
  - Figure — `clamp(44px,5.5vw,60px)` / 800 / `-0.03em` / `line-height: 1`
  - Nested stack (`flex column, gap: 2px`): label 16px / 700 / 1.35, sublabel 14px / `--grey-400`

  | Figure | Color | Label | Sublabel |
  |---|---|---|---|
  | 1.3B | `--primary-200` | People of Determination | 16% of world population |
  | 2.2B | `--brand-300` | With senior travellers | 25% of world population |

  ⚠️ **Open item:** the 1.3B figure is attributed to the WHO in the body copy. The 2.2B figure is **unsourced** — get a citation before this goes public.

### 6. What we do — label `What we do`
**Purpose:** explain the two data pillars, with photographic proof.

- Header block (`max-width: 700px`, `gap: 18px`): eyebrow "What we do" (`--primary-100`); H2 "Every step of her journey, verified." (`clamp(30px,3.8vw,44px)`); paragraph "To help Zaynab plan her trip we have to be sure every step is accessible. That is why we focus on two pillars." (16px / 1.6 / `--grey-400` / `max-width: 58ch`).
- **Two cards:** grid `repeat(auto-fit, minmax(300px, 1fr))`, `gap: clamp(14px,2vw,24px)`.
  Card: `border-radius: 20px; overflow: hidden; background: var(--grey-100); display: flex; flex-direction: column`.
  - Image: `width: 100%; height: clamp(190px,26vw,240px); object-fit: cover`
  - Text block: `padding: clamp(24px,3vw,30px)`, `flex column, gap: 10px` — eyebrow 12px / 700 / `.06em` / uppercase; H3 `clamp(21px,2.4vw,24px)` / 700 / `-0.01em` / 1.22; body 15px / 1.6 / `--grey-400`

  | Card | Image | Eyebrow (color) | H3 | Body |
  |---|---|---|---|---|
  | 1 | `assets/image12.jpg` — alt "Step-free ramp at a Dubai hotel entrance" | First pillar (`--brand-300`) | We ask every hotel more than 120 questions | We contact hotels directly to get in-depth, measured data on their accessibility — not marketing claims. |
  | 2 | `assets/image7.png` — alt "Accessible bathroom with roll-in shower, grab rails and a fold-down seat" | Second pillar (`--primary-100`) | We collect the city, not just the hotel | From public sources, from Dubai, from partner travel companies, and from local communities. |
- **Closing line:** "As a result, we have everything Zaynab was missing to go to Dubai." — `clamp(20px,2.2vw,26px)` / 700 / 1.35 / `-0.01em` / `max-width: 34ch`

### 7. The platform — label `Product`
**Purpose:** show the product as a conversation, not a screenshot tour.

- Background `--primary-200`, text white. Outer stack `gap: clamp(44px,6vw,80px)`. Two sub-blocks, each a grid `repeat(auto-fit, minmax(300px, 1fr))`, `gap: clamp(24px,4vw,56px)`, `align-items: center`.

**Block A — "Ask for the room you need."**
- Left: eyebrow "The platform" (`--brand-100`); H2 `clamp(30px,3.8vw,44px)`; paragraph "We believe an AI agent is the best way to access the information we have collected. Our platform shows her hotel rooms that are a 100% match for her request." (16px / 1.6 / `rgba(255,255,255,.88)` / `max-width: 52ch`)
- Right — a chat card: `background: #FFFFFF; border-radius: 22px; padding: clamp(18px,3vw,28px); color: var(--grey-500); box-shadow: 0 20px 50px rgba(0,0,0,.18); display: flex; flex-direction: column; gap: 14px`
  - **User bubble** (`align-self: flex-end; max-width: 94%`): `background: var(--grey-500); color: #FFFFFF; padding: 15px 18px; border-radius: 18px 18px 5px 18px; font-size: clamp(15px,1.6vw,16px); line-height: 1.5`. Copy: "I'm going to Dubai in mid-November. I am a powered wheelchair user, I need turning space in the room, I need a roll-in shower."
  - **Result row** (`flex; gap: 13px; align-items: flex-start`):
    - Thumbnail `assets/image10.png` — `clamp(74px,9vw,96px)` square, `object-fit: cover; border-radius: 13px; flex: none`. Alt "Accessible hotel room in Dubai with a view of the skyline".
    - Stack: title "100% match · Accessible King Room" (`clamp(15px,1.6vw,16px)` / 700 / 1.3); then three pills, `flex-wrap; gap: 6px`, each `font-size: 12px; font-weight: 600; padding: 5px 11px; border-radius: 999px; background: var(--primary-50); color: var(--primary-200)` — "Ramp slope 7%", "Roll-in shower", "Turning space 150 cm"

**Block B — "Ask anything about the city."**
- Heading side uses `order: 1`, the bubble list `order: 2`, so on a single column the H2 comes first while on desktop the bubbles sit on the left.
- H2 `clamp(30px,3.8vw,44px)`; paragraph "All of this happens in one place — no need to open other websites. AI answers are 100% based on facts we collected."
- Three outgoing bubbles (`flex column, gap: 10px`), each `background: rgba(255,255,255,.13); border: 1px solid rgba(255,255,255,.24); padding: 15px 18px; border-radius: 18px 18px 18px 5px; font-size: clamp(15px,1.6vw,16px); line-height: 1.5`: "Tell me about the neighbourhood accessibility" · "How to get to Burj Khalifa, is it accessible?" · "Tell me about camel races"

### 8. Infrastructure — label `Infrastructure`
**Purpose:** position the company as a data/API layer, not only a consumer site.

- Grid `repeat(auto-fit, minmax(300px, 1fr))`, `gap: clamp(20px,4vw,56px)`, **`align-items: center`** (the right paragraph is centred against the headline, deliberately — not top-aligned).
- Left: eyebrow "Infrastructure" (`--primary-100`); H2 "Web platform for travellers. AI-native infrastructure for travel agencies." (`clamp(28px,3.8vw,44px)` / 1.12)
- Right: paragraph "We are not only a web platform for travellers — we are also an AI-native infrastructure layer for travel agencies. Our infrastructure lets you build AI agents that can navigate the data and book hotels. Building such agents takes minutes." (16px / 1.6 / `--grey-400` / `max-width: 56ch`)
- Below both: `assets/image13.png`, full width, `height: auto; border-radius: 16px`. Alt "Diagram: one data layer branching into many agent paths".
  **Note:** this is a raster diagram lifted from the deck. Consider rebuilding it as SVG or a styled DOM diagram for crispness and dark-mode/localization flexibility.

### 9. Proof of concept — label `Proof of concept`
**Purpose:** the credibility section — real results from the Dubai pilot.

- Background `--grey-500`, text white. Stack `gap: clamp(24px,5vw,56px)`.
- Header (`max-width: 760px`): eyebrow "Proof of concept in Dubai" (`--brand-100`); H2 "Two weeks. Twelve people. Every goal beaten." (`clamp(30px,3.8vw,44px)`); paragraph "We were invited by Dubai Economy and Tourism to prove that WinWin.travel can effectively collect data from hotels, from the city and from public sources — and prove the value of that information with travellers." (`max-width: 62ch`)
- **Three result cards:** grid `repeat(auto-fit, minmax(210px, 1fr))`, `gap: 14px`. Card: `padding: clamp(18px,3vw,28px) clamp(20px,3vw,28px); border-radius: 18px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.14); display: flex; flex-direction: column; gap: 10px`.
  - Label — 14px / 700 / `.05em` / uppercase / `rgba(255,255,255,.7)`
  - Value row (`flex; align-items: baseline; gap: 12px`): achieved figure `clamp(34px,4.5vw,52px)` / 800 / `-0.03em` / `--brand-200`, then goal 15px / `rgba(255,255,255,.62)`

  | Label | Achieved | Goal |
  |---|---|---|
  | Hotels | 51 | goal 48 |
  | Articles | 2,512 | goal 100 |
  | Travellers | 113 | goal 12 |
- **87% panel:** grid `repeat(auto-fit, minmax(280px, 1fr))`, `gap: clamp(14px,4vw,48px)`, `align-items: center`, `padding: clamp(28px,4vw,48px) clamp(24px,4vw,48px)`, `border-radius: 22px`, `background: var(--primary-200)`.
  - Left: "87%" — `clamp(76px,10vw,116px)` / 800 / `-0.04em` / `line-height: .9`; under it "99 out of 113 said yes." — 16px / 600 / 1.4
  - Right (`flex column, gap: 16px`): quote “Would you use WinWin.travel to plan a trip to Dubai?” — `clamp(20px,2.2vw,26px)` / 700 / 1.3; footnote "113 travellers surveyed · DET Proof of Concept · September 2026" — 13px / 1.5 / `rgba(255,255,255,.85)`; then two buttons (`flex-wrap; gap: 10px`), both design-system `Button variant="outline" size="md"` overridden to `background: #FFFFFF; color: var(--primary-200); border-color: #FFFFFF` — "Our seed round is open — let's talk" and "Become a G2M partner".

### 10. What's next — label `What's next`
**Purpose:** the ask.

- Header (`max-width: 700px`): eyebrow "What's next" (`--primary-100`); H2 "We are ready for Phase 2. For that we need your help." (`clamp(30px,3.8vw,44px)`); paragraph "Scale data collection, and bring People of Determination to Dubai." (`max-width: 56ch`)
- **Three cards:** grid `repeat(auto-fit, minmax(260px, 1fr))`, `gap: clamp(12px,2vw,20px)`. Card: `padding: clamp(24px,3vw,32px); border-radius: 18px; border: 1px solid var(--grey-200); flex column, gap: 10px`, led by a `38px × 4px` pill rule, then H3 `clamp(20px,2.2vw,22px)` / 700, then body 15px / 1.6 / `--grey-400`.

  | Rule color | H3 | Body |
  |---|---|---|
  | `--brand-300` | Funding partners | Our seed round is open. |
  | `--primary-100` | G2M partners | We believe the Emirates Group is the best partner we could have. We are looking forward to working with you. |
  | `--grey-300` | Other cities | Abu Dhabi is next, and the rest of the GCC follows. |
- **CTA panel:** grid `repeat(auto-fit, minmax(280px, 1fr))`, `gap: 16px`, `padding: clamp(24px,4vw,44px)`, `border-radius: 22px`, `background: var(--grey-100)`. Two `size="lg"` buttons:
  - "Our seed round is open — let's talk" — background `var(--brand-300)` (the single orange CTA on the page)
  - "Become a G2M partner" — background `var(--primary-200)`

### 11. Footer — label (none)
- Background `--grey-500`, text white, `padding: clamp(48px,7vw,88px) <gutter>`, inner stack `gap: clamp(30px,4vw,44px)`.
- **Top row:** grid `repeat(auto-fit, minmax(280px, 1fr))`, `gap: clamp(24px,4vw,32px)`, `align-items: start`
  - Left: light wordmark `assets/wordmark-pod-light.png` — `width: clamp(200px,28vw,241px); aspect-ratio: 3776 / 721; height: auto; object-fit: contain` (the intrinsic ratio must be preserved — an earlier version stretched it). Then "Helping Dubai become the #1 destination for People of Determination" — `clamp(20px,2vw,22px)` / 700 / 1.35 / `-0.01em` / `max-width: 26ch`.
  - Right: **`padding-top: 36px`** so the link baseline aligns with the tagline paragraph (removed below 760px). Eyebrow "Get in touch" 12px / 700 / `.08em` / uppercase / `rgba(255,255,255,.55)`; then a link — `display: inline-flex; align-items: center; gap: 13px; min-height: 44px; font-size: clamp(18px,2vw,22px); font-weight: 700; color: #FFFFFF`, hover `--brand-200` — containing the LinkedIn badge (`assets/linkedin-badge.png`, `clamp(30px,3.4vw,34px)` square, `border-radius: 6px`) and the text "Vadym Klymov on LinkedIn".
- **Partner logo row:** `flex-wrap; align-items: center; gap: clamp(10px,1.6vw,16px)`, `padding-top: clamp(26px,3vw,32px)`, `border-top: 1px solid rgba(255,255,255,.16)`.
  Each logo sits in a **white chip** — `display: inline-flex; align-items: center; height: clamp(62px,8vw,92px); padding: 0 clamp(18px,3vw,30px); background: #FFFFFF; border-radius: 15px` — because these are multi-color marks that must not be inverted or recolored.

  | Logo file | Alt | Image height |
  |---|---|---|
  | `assets/image14.png` | Dubai — Department of Economy and Tourism | `clamp(30px,4.4vw,46px)` |
  | `assets/image2.png` | Dubai Economic Agenda D33 | `clamp(28px,4.2vw,44px)` |
  | `assets/image11.png` | The Emirates Group | `clamp(42px,6vw,64px)` |
  | `assets/image3.png` | Experience Abu Dhabi | `clamp(26px,3.6vw,38px)` |

  **Note:** the source deck's copy also listed UN SDG and Intelak marks; those image assets were not present in the deck file and are therefore missing here. Add them to this row when supplied.
- **Legal line:** "© 2026 WinWin.travel · for People of Determination" — 13px / `rgba(255,255,255,.66)`

---

## Interactions & Behavior

The page is **static and non-interactive by design** — no client-side state, no data fetching, no forms. Behaviour is limited to:

1. **Sticky header** — pins to the top on scroll with a translucent blurred background.
2. **Smooth scroll** — `scroll-behavior: smooth` on `html`, disabled under `prefers-reduced-motion: reduce`.
3. **Link/button hover** — per the design system: darken the accent one step (`--brand-300 → --brand-200`) or lift the shadow; links go `--primary-200 → --brand-300`. Footer LinkedIn link goes white → `--brand-200`.
4. **Focus-visible** — 3px `--primary-100` ring, 3px offset, on every interactive element. This is an accessibility brand; do not suppress or restyle this away.
5. **Mobile journey carousel** — horizontal scroll with `scroll-snap-type: x mandatory` and `scroll-snap-align: start` on each card. No JS; native scrolling only.
6. **All CTAs** — external links (`target="_blank" rel="noopener"`) to the placeholder LinkedIn URL. Replace with the real destination.

No entrance animations are specified. If you add them, follow the design system: fades and 8–12px rises, ~180–240ms, `cubic-bezier(.2,.7,.2,1)`, no bounces, no parallax, and honour `prefers-reduced-motion`.

## State Management
**None required.** The only stateful thing in the prototype is a viewport-width boolean used to emulate a media query — replace it with CSS and that state disappears. Build this as static markup.

## Responsive behaviour

The page is fluid by default: `clamp()` on every type size and spacing value, and `repeat(auto-fit, minmax(…, 1fr))` grids that collapse on their own. **Single breakpoint at `max-width: 760px`**, where these deltas apply:

| Element | Desktop | ≤760px |
|---|---|---|
| Header logo | tagline lockup, 42px tall | compact wordmark, 24px tall |
| Hero section | `min-height: min(78vh,720px)`, `align-items: center` | `min-height: 520px`, `align-items: flex-end` |
| Hero image | `object-position: 72% center` | `object-position: 66% 20%` |
| Hero scrim | 100deg left-to-right gradient | `linear-gradient(180deg, rgba(49,57,60,.35) 0%, rgba(49,57,60,.55) 38%, rgba(49,57,60,.95) 78%, rgba(49,57,60,.99) 100%)` (bottom-up) |
| Hero content padding | `clamp(40px,9vw,120px) <gutter>` | `0 18px 36px` |
| Problem question stack | `padding-top: 38px` | `padding-top: 0` |
| Journey cards | grid, `auto-fit minmax(230px,1fr)` | `display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding: 4px 18px 8px`; cards `flex: none; width: 250px; scroll-snap-align: start` |
| Swipe hint | `display: none` | `display: block` |
| Stat cards (Why it matters) | 2-up grid, vertical cards | `grid-template-columns: 1fr`; card becomes `flex-direction: row; align-items: center; gap: 18px` (figure beside the labels) |
| PoC result cards | 3-up grid, vertical | `grid-template-columns: 1fr`; card becomes `flex-direction: row; align-items: baseline; justify-content: space-between` (label left, figure right) |
| Footer "Get in touch" | `padding-top: 36px` | `padding-top: 0` |
| "What's next" CTA buttons | intrinsic width | `width: 100%` |

**Implement all of the above as CSS media queries.** The prototype's `data-m` attributes and the `applyOverrides()` / `overrides()` methods in its logic class exist only to work around the authoring environment's no-media-query constraint — they are not a pattern to carry forward.

**Touch targets:** every interactive element is ≥44px in its smallest dimension. Keep this.

---

## Design Tokens

From the bound **WinWin.travel Design System** (`design/_ds/…/tokens/`). Use the codebase's existing token layer if one exists; otherwise port these.

### Colors
```
/* Brand orange — energetic, action */
--brand-300  #FF3D00   primary orange, logo bottom-W, CTAs
--brand-200  #FF5F00   bright orange
--brand-100  #FF9E59   soft orange
--brand-50   #FFCBA8   orange tint / backgrounds

/* Primary teal — calm, trust, accessibility */
--primary-200 #00727F   deep teal
--primary-100 #078691   teal
--primary-50  #D6EBED   teal tint / backgrounds

/* Neutrals */
--white    #FFFFFF
--grey-100 #F4F4F4
--grey-200 #B4B4B4
--grey-300 #7E7E7E
--grey-400 #474747
--grey-500 #31393C   logo top-W / ink
--black    #000000
```
Semantic aliases also exist (`--color-accent`, `--text-ink`, `--surface-*`, `--border-subtle`, `--focus-ring` → `--primary-100`); see `design/_ds/…/tokens/colors.css`.

**Usage rule:** teal for large calm fields, orange for the one thing you want tapped, charcoal for text. Max 1–2 dominant colors per composition. On this page orange is reserved for: the "#1 destination" highlight, the "?" glyphs, status accents, the funding-partner rule, and the single seed-round CTA.

### Typography
Inter throughout (`--font-sans`, with `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif` fallbacks).

Weights: 400 regular · 500 medium · 600 semibold · 700 bold · 800 extrabold.
Scale: display 56 · h1 40 · h2 32 · h3 24 · title 20 · body 16 · small 14 · caption/overline 12.
Line-heights: tight 1.1 · snug 1.25 · normal 1.5. Letter-spacing: tight `-0.02em` · overline `0.08em`.

This page uses fluid `clamp()` sizes rather than the fixed scale — the values per element are in the section specs above. Headline pattern: 800 weight, `-0.02em`, `line-height ≈ 1.1`. Body: 400 at 1.6. Eyebrow: 12px, 700, uppercase, `.08em`.

**The `winwin` wordmark is a logo asset, never re-typeset in a font.**

### Spacing
Gutter `clamp(18px,5vw,48px)` · section rhythm `clamp(56px,9vw,120px)` · card padding 24–32px · intra-stack gaps 10 / 12 / 14 / 16 / 18 / 22px.

### Radii
Cards 18–22px · image cards 20px · chips/questions 15px · pills & buttons `999px` · thumbnails 12–13px · logo chips 15px · badges 6px. Nothing sharp-cornered — this echoes the logo's round terminals.

### Shadows
```
--shadow-md      0 6px 20px rgba(49,57,60,.10)   /* stat cards */
chat card        0 20px 50px rgba(0,0,0,.18)
hero/product     (none — flat color fields)
```

---

## Assets

All in `design/assets/`. Everything except the wordmarks and the cropped badge was **extracted from the source PowerPoint deck** (`uploads/ForsaTEK (2).pptx`) — they are the client's own deck visuals, not stock.

| File | What it is | Notes |
|---|---|---|
| `image8.jpg` | Hero photo — Zaynab in a London park | Re-encoded from a 1920×1080 PNG to JPEG q85 for weight |
| `image12.jpg` | Step-free ramp at a hotel entrance | Re-encoded from 640×800 PNG |
| `image7.png` | Accessible bathroom, roll-in shower | |
| `image10.png` | Accessible hotel room, Dubai skyline | |
| `image13.png` | Infrastructure diagram | Raster; consider rebuilding as SVG |
| `image4.png` | Wordmark + "for People of Determination" tagline | Header, desktop |
| `image1.png` | Compact `winwin.travel` wordmark | Header, mobile |
| `image14.png` | Dubai Department of Economy and Tourism | Partner logo |
| `image2.png` | Dubai Economic Agenda D33 | Partner logo |
| `image11.png` | The Emirates Group | Partner logo |
| `image3.png` | Experience Abu Dhabi | Partner logo |
| `linkedin-badge.png` | LinkedIn "in" badge, 377×381 | Cropped from the deck's full LinkedIn lockup |
| `wordmark-pod-light.png` | Light wordmark + tagline, 3776×721 | From the design system; footer |
| `image5.png`, `image6.png`, `image9.png` | Unused deck media | Kept for reference |

**Asset guidance:**
- Optimize before shipping (WebP/AVIF with fallbacks, responsive `srcset` for the hero, `loading="lazy"` below the fold, explicit `width`/`height` to prevent CLS).
- **Never recolor, invert or restyle the partner logos or the accessibility-person glyph.** That is why the footer logos sit on white chips.
- The design system notes no vector logo was ever supplied — the wordmarks are raster crops. **Request SVG logo files** and swap them in.
- Every image in the design carries descriptive alt text (listed per section above). Preserve it — this is an accessibility product and the alt text is part of the design.

---

## Files

In `design/`:
- **`WinWin Landing Page - Responsive.dc.html`** — the design reference. The markup between `<x-dc>` and `</x-dc>` is the page; the `<script data-dc-script>` block at the bottom holds the responsive-override logic described above. Open it directly in a browser to view the design.
- `support.js` — prototyping runtime. **Ignore.**
- `assets/` — all images.
- `_ds/winwin-travel-design-system-…/` — the design system: `tokens/*.css` (colors, typography, spacing, fonts), `styles.css` (entry that imports the tokens), `_ds_bundle.js` (Button, Badge, Tag, Card, Callout, Logo components), `readme.md` (full brand guide — voice, tone, terminology, visual foundations).

**Read `_ds/…/readme.md` before writing copy.** Key rules: say **People of Determination**, never "special needs" or "the disabled"; sentence case everywhere; second person to the traveller, "we" for the brand; warm and practical, never pitying.

## Accessibility requirements
Non-negotiable for this product — it is the entire value proposition:
- Visible, high-contrast focus states on every interactive element (3px `--primary-100`, 3px offset).
- Body text ≥4.5:1 contrast; headline-scale type ≥3:1. Full-opacity white ink on the colored fields — no alpha-muted body text on teal, charcoal, or photography.
- Touch targets ≥44px.
- Descriptive alt text on every meaningful image; `alt=""` on the decorative LinkedIn badge (it sits next to its own label).
- Semantic landmarks: `<header>`, `<section>`, `<footer>`, one `<h1>`, ordered heading levels.
- Honour `prefers-reduced-motion`.
- Test with a screen reader and keyboard-only navigation before shipping.

## Open items for the developer / client
1. **Real CTA destinations** — all four CTAs are placeholder LinkedIn links. An email or calendar link alongside would reduce mobile drop-off.
2. **Citation for the 2.2B figure** (senior travellers). The 1.3B WHO figure is attributed.
3. **UN SDG + Intelak logos** — referenced in the deck copy, assets not supplied.
4. **Vector logo files** — currently raster crops.
5. **Infrastructure diagram** — raster from the deck; SVG would be better.
6. **Meta/OG tags, favicon, analytics** — not in scope for the design, needed for launch.
