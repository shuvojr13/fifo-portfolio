---
name: Indigo Harbor
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#444651'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#5d0005'
  on-tertiary: '#ffffff'
  tertiary-container: '#84080f'
  on-tertiary-container: '#ff8a80'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#8e1214'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.25'
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies a modern, precise, and utilitarian SaaS aesthetic built upon the contemporary Radix and Tailwind visual dialect. The identity balances deep maritime authority with crisp, clinical productivity. 

Key attributes:
- **Tone:** Authoritative, focused, dependable, and highly structured.
- **Visual Stance:** Corporate modern minimalism with subtle tactile nuances. Surfaces favor pure white cards set against whisper-soft gray backdrops, delineated by crisp 1px borders rather than heavy shadows.
- **Audience:** Enterprise software engineers, data analysts, financial platform users, and administrative dashboard operators who require maximum legibility and reduced visual fatigue across information-dense interfaces.

## Colors

The palette establishes high-contrast hierarchy through concentrated, saturated solids paired with neutral structural tones:

- **Primary (`#1e3a8a`):** Deep maritime harbor blue. Used for primary calls-to-action, active component fills, focused switch tracks, filled checkmarks, and primary badges.
- **Secondary (`#0f172a`):** Deep slate-black. Delivers commanding contrast for secondary buttons, dark pill badges, and primary headline text.
- **Destructive (`#991b1b` / `#881337`):** Saturated crimson wine red. Reserved strictly for destructive operations, errors, and danger indicators.
- **Muted & Background (`#f1f5f9` / `#f8fafc`):** Neutral foundation. Subtle cool grays for input fills, inactive slider tracks, hover states, and application canvas backing.
- **Card (`#ffffff`):** Pure elevated white surfaces.
- **Border (`#e2e8f0`):** Hairline separation for container cards, inactive badges, outline buttons, and inputs.
- **Foreground / Text:** `#0f172a` for primary copy and `#64748b` for secondary/subtitle labels.

## Typography

The type scale is driven entirely by **Inter**, leveraging tight tracking on large headings and strict geometric proportion on microcopy:

- **Headings:** Bold weight (`700`) with negative letter-spacing (`-0.02em` to `-0.025em`) ensures an assertive, modern editorial character.
- **Subtitles & Descriptions:** Medium (`500`) and regular (`400`) weights set in cool slate (`#64748b`) to provide clean information hierarchy.
- **Controls & Badges:** Semi-bold/medium (`500`) at `0.75rem` - `0.875rem` for tight UI elements, retaining crisp clarity inside interactive badges and compact button containers.

## Layout & Spacing

A structured 8pt/4pt hybrid spacing scale maintains alignment across controls and structural containers:

- **Grid Architecture:** 12-column layout on desktop (`>1024px`) with `1.5rem` gutters and outer margins; reflowing to a 4-column layout on mobile (`<640px`) with `1rem` gutters and margins.
- **Rhythm:** Form inputs and interactive controls adhere to standardized heights: `2.25rem` (36px) for compact elements, `2.5rem` (40px) for standard buttons and inputs.
- **Card Padding:** Standard card interior padding is `1.5rem`, tightening to `1rem` on compact viewports.

## Elevation & Depth

This system intentionally departs from heavy drop shadows, relying on low-contrast structural outlines and subtle micro-shadows:

- **Surface Boundaries:** Pure white `#ffffff` cards, menus, and popovers utilize a 1px solid border (`#e2e8f0`).
- **Ambient Shadow Tiers:**
  - *Base Containers & Cards:* `box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);`
  - *Dropdowns, Popovers & Dialogs:* `box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05);`
- **Interactive State Depth:** Focused elements feature a crisp 2px offset ring in deep navy (`#1e3a8a`) with a 2px pure white separation buffer.

## Shapes

The geometric signature is anchored at a uniform **0.5rem (8px)** radius:

- **Base Radius (0.5rem / 8px):** Applied uniformly to cards, text inputs, standard buttons, switches, and alert frames.
- **Nested Inner Radius (0.375rem / 6px):** Used for items situated inside 0.5rem containers to maintain parallel corner curvature.
- **Pill Radius (9999px):** Selectively reserved for status badges, avatar chips, toggle handles, and slider thumbs.

## Components

- **Buttons:**
  - *Primary:* Background `#1e3a8a`, text `#ffffff`, radius `0.5rem`, padding `0.5rem 1rem`. Hover: `#1e40af`.
  - *Secondary:* Background `#0f172a`, text `#ffffff`, radius `0.5rem`, padding `0.5rem 1rem`. Hover: `#1e293b`.
  - *Outline:* Background `#ffffff`, border 1px solid `#e2e8f0`, text `#0f172a`. Hover: background `#f1f5f9`.
  - *Ghost:* Background transparent, text `#0f172a`. Hover: background `#f1f5f9`.
  - *Destructive:* Background `#991b1b`, text `#ffffff`. Hover: `#b91c1c`.

- **Badges / Chips:**
  - Compact height (`1.375rem`), radius `9999px` (or `0.375rem` when matched with button geometry), padding `0.125rem 0.625rem`, font size `0.75rem`, font weight `500`. Available in Primary navy, Secondary slate, Outline, and Crimson error variations.

- **Form Inputs:**
  - Background `#f8fafc` or pure `#ffffff` with a subtle `#f1f5f9` fill; 1px solid `#e2e8f0` border; radius `0.5rem`. Placeholder text `#94a3b8`. Focus state introduces a crisp ring using `#1e3a8a`.

- **Selection Controls:**
  - *Checkbox:* Radius `0.25rem`, border `#0f172a`. When checked, background fills with `#1e3a8a` displaying a white checkmark icon.
  - *Switch:* Pill track (`#e2e8f0` default, transitioning to `#1e3a8a` on active), containing a smooth white floating thumb.
  - *Slider:* Slim track (`0.375rem`) filled with `#1e3a8a` progress and `#e2e8f0` remaining length, thumb rendered as a circular ring with deep blue border.

- **Cards:**
  - Pure `#ffffff` surface, 1px solid `#e2e8f0` stroke, radius `0.5rem`, subtle micro-shadow elevation. Header, body, and footer separated by internal spacing of `1.5rem`.