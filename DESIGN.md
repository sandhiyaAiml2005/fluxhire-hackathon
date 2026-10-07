---
name: FluxHire
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464554'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#494bd6'
  primary: '#4648d4'
  on-primary: '#ffffff'
  primary-container: '#6063ee'
  on-primary-container: '#fffbff'
  inverse-primary: '#c0c1ff'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system defines an elite, modern creator marketplace bridging world-class generative AI artists with top-tier brands and agencies. The aesthetic balances high-velocity technical capability with refined creative curation—avoiding generic cyberpunk tropes in favor of crisp, gallery-grade minimalism energized by luminescent digital accents.

The emotional tone evokes clarity, precision, and state-of-the-art innovation. The visual identity draws from **Modern SaaS Editorial Minimal** layered with **Subtle Digital Luminescence**: pure white and cool off-white canvases, immaculate micro-typography, surgical 1px borders, and radiant indigo-to-cyan micro-gradients that highlight intelligent machine-matching mechanics without visual noise.

## Colors

The palette operates on a high-luminosity canvas to showcase diverse, colorful creator media without hue competition.

- **Primary Accent (`#6366F1` to `#4F46E5`):** High-octane indigo applied to key conversions, primary interactive states, match percentages, and high-priority filters.
- **Secondary Accent (`#38BDF8`):** Electric sky blue utilized in linear-gradient combinations with primary indigo to evoke algorithmic computation, dynamic processing, and ambient aura effects.
- **Tertiary Accent (`#10B981`):** Emerald green reserved for high-confidence AI match scoring (>90%), verified creator credentials, and active availability pulses.
- **Canvas & Neutral Surfaces:**
  - Base Background: `#FAFAFC` (cool atmospheric white).
  - Elevated Container / Card Fill: `#FFFFFF`.
  - Neutral Body Text: `#0F172A` (deep slate).
  - Secondary Text / Meta: `#64748B` (slate 500).
  - Subtle Dividing Lines & Ghost Borders: `#E2E8F0` / `rgba(15, 23, 42, 0.06)`.

## Typography

The typographic system combines the geometric, friendly precision of **Plus Jakarta Sans** for prominent headings with the clinical, rhythmic legibility of **Inter** for dense interface data, creator metadata, and media tags.

Headlines require tight letter-spacing (`-0.015em` to `-0.03em`) to deliver modern editorial tension. Body text prioritizes tall x-height and generous line-height for effortless scanning of prompt engineering portfolios, client feedback, and AI workflow summaries. Numerical match percentages, platform fees, and token outputs leverage tabular numeric figures (`tnum`).

## Layout & Spacing

Layouts follow a structured **12-column fluid grid** for desktop dashboards, reflowing into **6 columns** on tablet, and **2 columns or a unified stacked 1-column rail** on mobile viewports.

- **Desktop (1280px+):** Outer canvas margins clamp at `2rem` with a maximum content container width of `1400px`. Standard creator discovery grids use a 3-column configuration (4 grid tracks per creator card) separated by `1.5rem` gutters.
- **Tablet (768px - 1023px):** Adapts to 2-column creator cards with `1.25rem` gutters and persistent horizontal tool-filter bars.
- **Mobile (<768px):** Outer canvas scales to `1rem` margin. Media asset viewports prioritize full-bleed presentation or unified card stacks with edge-to-edge preview reels.

## Elevation & Depth

Visual depth is achieved through **ambient diffuse shadowing** paired with **micro-borders** rather than heavy drop shadows.

- **Level 0 (Base Canvas):** Flat `#FAFAFC` base surface.
- **Level 1 (Resting Cards & Surfaces):** `#FFFFFF` fill supported by a 1px solid border in `rgba(15, 23, 42, 0.06)` and a dual-layer diffuse shadow: `0 1px 3px rgba(15, 23, 42, 0.03), 0 8px 24px -4px rgba(99, 102, 241, 0.04)`.
- **Level 2 (Interactive Hover & Overlay Cards):** Border transitions to `rgba(99, 102, 241, 0.25)` accompanied by an elevated glow: `0 12px 32px -6px rgba(99, 102, 241, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals, Popovers & AI Inspectors):** Elevated modal containers feature backdrop blur (`backdrop-filter: blur(12px)`) with `rgba(255, 255, 255, 0.88)` translucency and deep diffuse dispersion: `0 24px 48px -12px rgba(15, 23, 42, 0.14)`.

## Shapes

The interface embraces a tailored **Level 2 (Rounded)** shape vocabulary optimized for creative SaaS:

- **Micro Components (Chips, Tags, Tool Badges, Inputs):** 8px (`0.5rem`) corner radius for snug, crisp density.
- **Interactive Buttons & Segmented Tabs:** 10px to 12px (`0.75rem`), balancing physical tactile comfort with contemporary geometry.
- **Standard Content Cards (rounded-xl):** 16px (`1rem`) border radius, defining the primary structural card boundary.
- **Hero Containers & Portfolio Media Previews (rounded-2xl):** 24px (`1.5rem`) curvature with overflow hidden to safely crop video reels and high-resolution generative images.
- **Match Pills & Verification Rings:** Full circular geometry (`rounded-full`) for unmistakable identification.

## Components

### Buttons
- **Primary:** Solid gradient fill (`linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)`), white label text, subtle top inner-bevel highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.2)`). Height: 44px (desktop), 48px (mobile touch targets).
- **Secondary / Ghost:** `#FFFFFF` background, 1px border `rgba(15, 23, 42, 0.12)`, text `#0F172A`. Hover transitions border to `#6366F1` and background to `rgba(99, 102, 241, 0.04)`.
- **AI Action ("Instant Match"):** Gradient border outline with cyan-to-indigo text and soft ambient glow on interaction.

### AI Model Chips (Runway, Midjourney, Kling, Stable Diffusion, Sora)
- Pill or rounded-lg containers (`rounded-md`, 28px height, 10px horizontal padding).
- Neutral variant: Background `#F1F5F9`, text `#475569`, border `transparent`.
- Active / Filtered variant: Background `rgba(99, 102, 241, 0.08)`, border `rgba(99, 102, 241, 0.25)`, text `#4F46E5`, paired with an optional 6px micro-dot indicator indicating supported model versions (e.g., v6, Gen-3).

### AI Match Badges
- **Match Score Pill:** High-prominence pill badge displaying match telemetry (e.g., "98% Match"). Uses a linear gradient border (`#10B981` to `#6366F1`) on an ultra-subtle tinted surface (`rgba(16, 185, 129, 0.06)`), green-to-indigo gradient typography, and an emerald ping dot.
- **Match Dial Ring:** Radial SVG track indicating prompt compatibility, tool proficiency, and style affinity.

### Creator Cards
- Outer container: `rounded-2xl`, background `#FFFFFF`, 1px border `#F1F5F9`.
- Media Header: Aspect ratio 16:9 or 4:3 featuring recent generated video loops or renders, with subtle gradient overlay (`linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 60%)`).
- Avatar & Credentials: Overlapping circular avatar with a micro-verified SVG checkmark badge in vibrant cyan/indigo.
- Meta Section: Creator name in `headline-sm`, rate-per-project or hourly fee, followed by a flex row of AI Model Chips and dynamic match compatibility score.

### Form Inputs & Search Fields
- 44px container height, background `#FFFFFF`, border 1px solid `#E2E8F0`, corner radius `0.5rem`.
- Focus state activates an electric focus ring: `box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18)` and border `#6366F1`.
- Search bars support leading AI prompt filter shortcuts and natural-language search cues.