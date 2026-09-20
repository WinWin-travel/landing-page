# WinWin.travel — Design System

A brand & content design system for **WinWin.travel**, an accessible-travel platform — *"winwin.travel · for People of Determination."* This system is scoped for **social-media content**: post templates, story frames, quote cards and the visual foundations behind them.

## Brand in one line
WinWin.travel helps **People of Determination** — travelers with reduced mobility, sensory needs, dietary needs, and their families — find, book and share trips that actually work for them. The tone is warm, empowering and practical; the visual language is friendly, high-contrast and accessibility-first.

## Sources provided
This system was built from five brand reference images the user supplied (no codebase or Figma was attached):
- `assets/ww-mark-variants-reference.png` — the "WW" monogram in 4 background treatments (white square, teal square, white circle, teal circle).
- `assets/logo-lockups-reference.png` — the horizontal `winwin.travel` wordmark + accessibility-person icon + the earlier tagline, at 4 sizes. **Superseded** by `wordmark-pod.png`; kept for provenance only.
- `assets/wordmark-pod.png` — **current primary wordmark** (2026): accessibility person + `winwin.travel` + the tagline *"for People of Determination"*, 3776×721, transparent. Supplied by the user for accessibility/PoD positioning; supersedes the earlier "for special needs" lockup, which has been removed.
- `assets/wordmark-pod-light.png` — the same lockup with the charcoal ink recoloured to white and the orange person preserved, generated from the supplied PNG for use on dark, teal and photographic grounds.
- `assets/glyph-person.png` / `assets/glyph-person-light.png` — the accessibility-person glyph cropped out of the wordmark (383×448, transparent), in charcoal-ground and white-ink versions for use as a standalone icon.
- A color-palette specimen (brand orange, primary teal, greys) — transcribed into `tokens/colors.css`.
- A type specimen — the brand typeface is **Inter**.

> No vector logo was provided. The wordmark assets in `assets/` are cropped from the supplied raster references. If you have SVG/vector logo files, please share them so we can replace the raster crops.

> **Deprecated:** `assets/ww-mark-teal-circle.png` is retained only as the provenance reference the vector mark was measured from. It is a low-resolution crop that breaks up when scaled — **do not place it in designs.** Use the square-mark ring files below instead; everything in this system now points at them.

### Square mark — ring variants (avatars / profile images)
The circular mark with a **white keyline ring**, for use as a profile image or avatar where the mark must read as a distinct disc on any background.

The WW symbol is **true vector**, not a traced bitmap. Because no vector source was supplied, the symbol's construction was measured off `ww-mark-teal-circle.png` and rebuilt as real geometry: each half is a **single constant-width stroke** (width 21, cap butt, join round) running as vertical segments joined by three turns — down, U-turn, up to a peak turn, down, U-turn, up. Stroke centres sit at x = 10.5 / 48.5 / 86.5 / 124.5 (spacing 38, turn radius 19); the turns are very slightly fuller than true semicircles (control factor 0.662, vertical radius 19.44), which the source bitmap confirms. Reconstruction matches the source mask at **96% IoU** with perfectly smooth curves at any zoom. Geometry on the 1024 canvas: ring outer radius 497, ring thickness 56, teal disc radius 441 (`#058691`).

| File | Format | Background |
| --- | --- | --- |
| `assets/ww-square-ring-white.svg` | SVG (true vector, ~1 KB) | White |
| `assets/ww-square-ring-white.png` | PNG 2048² | White |
| `assets/ww-square-ring-white.jpg` | JPG 2048² | White |
| `assets/ww-square-ring-transparent.svg` | SVG (true vector, ~1 KB) | Transparent |
| `assets/ww-square-ring-transparent.png` | PNG 2048² | Transparent |

The PNG/JPG files are rasterised **from the SVG**, so they are crisp rather than upscaled. Prefer the SVG wherever the tool accepts it. JPEG has no alpha channel, so there is no transparent JPG — use the PNG or SVG where transparency is needed.

## Products / surfaces
Only one surface is in scope here: **social-media content** (Instagram-style square posts, vertical stories, carousel slides, quote cards). The UI kit under `ui_kits/social/` recreates these as click-through templates. There is no product app or marketing-site kit in this system.

---

## CONTENT FUNDAMENTALS
How WinWin.travel writes copy.

- **Voice:** warm, encouraging, and matter-of-fact. It speaks *to* the traveler ("you"), and about the brand as "we". Never clinical, never pitying — travelers are capable adventurers, not patients.
- **Person & casing:** second person ("Plan a trip that works for you"), sentence case everywhere — headlines, buttons, labels. Avoid ALL-CAPS except tiny overlines/eyebrows.
- **Tone words:** accessible, easy, welcoming, real, verified, "win-win." Emphasis on *confidence* and *independence*.
- **Tagline:** *"for People of Determination"* — set under or beside the wordmark. It is part of the logo lockup; do not re-typeset it.
- **Terminology:** say **People of Determination**, never "special needs" or "the disabled." The earlier "for special needs" tagline is retired.
- **Numbers & proof:** lead with concrete, verified facts — "1,200+ accessibility-checked stays", "step-free from door to room". Specificity builds trust.
- **Emoji:** used sparingly in social captions (a single ♿ or ✨ as a marker), never inside headlines or UI labels. Prefer the brand's own iconography over emoji in graphics.
- **Examples:**
  - Headline: "Travel that works for you."
  - Sub: "Verified step-free stays, sensory-friendly tours, and staff who know what access really means — all in one place."
  - CTA: "Find accessible stays" / "Start planning"
  - Eyebrow: "ACCESSIBLE TRAVEL"
  - Caption: "New this week: 40 sensory-friendly museums added ✨ Tap to explore."

---

## VISUAL FOUNDATIONS

**Color.** Two brand poles: an energetic **orange** (`--brand-300 #FF3D00`, action/CTA/accents) and a calm **teal** (`--primary-100 #078691` / `--primary-200 #00727F`, trust/backgrounds/large fields). Ink is not pure black but a soft charcoal (`--grey-500 #31393C`, the logo's top-W color). A full neutral grey ramp (100–500) plus white handle surfaces and text. Rule of thumb: **teal for large calm fields, orange for the one thing you want tapped, charcoal for text.** Max 1–2 dominant colors per composition.

**Type.** Inter throughout. Display/headlines are bold–extrabold (700–800) with tight tracking (`-0.02em`) and tight leading (1.1). Body is regular/medium at 1.5 leading. Overlines/eyebrows are 12px, uppercase, letter-spaced (0.08em), usually in orange or teal. The rounded lowercase "winwin" wordmark is a **logo asset**, not a font — never re-typeset it.

**Backgrounds.** Solid color fields dominate (white, teal, charcoal, soft orange/teal tints) — clean and flat, not gradient-heavy. Full-bleed photography is used for hero/story posts with a **charcoal or teal protection scrim** (a bottom-up gradient from `rgba(49,57,60,.75)` to transparent) so white text stays legible. No busy patterns. Imagery is warm, natural, real people traveling — candid, bright, not stocky or desaturated.

**Radii & shape.** Friendly, generously rounded — echoing the round terminals of the logo. Cards 12–20px, buttons pill (`--radius-pill`) or 12px, chips/badges pill. Nothing sharp-cornered.

**Shadows.** Soft and low-contrast (`--shadow-md: 0 6px 20px rgba(49,57,60,.10)`), never harsh. Orange CTAs may carry a colored glow (`--shadow-accent`). Prefer flat + subtle shadow over heavy elevation.

**Borders.** Thin 1px `--grey-200` for subtle separation; charcoal 1–2px only for emphasis/outline buttons. Cards typically rely on shadow, not border.

**Motion.** Gentle and quick. Fades and small rises (8–12px) on entrance; ease-out (`cubic-bezier(.2,.7,.2,1)`) ~180–240ms. No bounces, no parallax. Respect `prefers-reduced-motion`.

**Interaction states.** Hover: darken accent one step (`--brand-300 → --brand-200`) or lift shadow; teal fields lighten slightly. Press: subtle scale-down (0.97) + darker fill. Focus: 2px teal focus ring (`--focus-ring`), always visible — this is an accessibility brand, focus states are non-negotiable and high-contrast.

**Transparency & blur.** Used sparingly — occasionally a frosted charcoal chip over photography (`backdrop-filter: blur(8px)` + `rgba(49,57,60,.5)`). Otherwise solid.

**Layout.** Social canvases are fixed: square post 1080×1080, story 1080×1920, carousel 1080×1080. Generous margins (64–96px on a 1080 canvas), strong left-alignment, the logo lockup consistently in a corner, one clear focal message per frame.

---

## ICONOGRAPHY
- **Brand marks as icons:** one supplied glyph is meaningful — the **accessibility person** (arms out, orange) signals inclusive travel. It is part of the wordmark lockup and is never restyled, recoloured, or used decoratively. Standalone: `assets/glyph-person.png` (orange + charcoal) and `assets/glyph-person-light.png` (orange + white ink, for dark/teal grounds).
- **UI icon set:** no proprietary icon font was provided. For interface/social iconography we standardize on **Lucide** (https://lucide.dev) — a clean, rounded, 2px-stroke open-source set whose weight matches the brand's rounded, friendly forms. Linked from CDN in kits/cards. *(Substitution — flag: swap for the brand's real icon set if one exists.)*
- **Stroke & style:** 2px stroke, round caps/joins, no fills; size 20–24px inline, 32–48px as feature icons. Tint with `--text-ink`, `--color-accent`, or `--color-primary`.
- **Emoji:** allowed only in social captions as light accents (♿ ✨), never in graphics or UI labels — prefer Lucide + the brand glyph.

---

## Index / manifest
- `styles.css` — global entry; `@import`s all token files. **Consumers link this.**
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/` — wordmark lockups (dark + light), the vector square mark (ring, 5 formats), WW monogram variants.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/core/` — reusable primitives: **Button, Badge, Tag, Card, Callout, Logo**.
- `ui_kits/social/` — social-content templates (square post, story, quote card, carousel slide).
- `SKILL.md` — Agent-Skills-compatible entry point.

### Intentional additions
- **Logo** component — a convenience wrapper that renders the supplied lockups/marks at correct proportions (no source component library existed; added so kits don't hand-place raster logos).
