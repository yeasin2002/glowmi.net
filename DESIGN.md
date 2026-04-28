# GLOWMI

## Mission

Create implementation-ready, token-driven UI guidance for GLOWMI that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand

- Product/brand: GLOWMI
- URL: http://localhost:3000/en
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations

- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Lato`, `font.family.stack=Lato, system-ui, Bangla188, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=16px`, `font.size.md=18px`, `font.size.lg=19.2px`, `font.size.xl=20px`, `font.size.2xl=24px`, `font.size.3xl=28px`, `font.size.4xl=30px`
- Color palette: `color.text.primary=#363739`, `color.text.secondary=#ffffff`, `color.text.tertiary=#755033`, `color.text.inverse=lab(2.75381 0 0)`, `color.surface.base=#000000`, `color.surface.strong=#244731`, `color.border.default=lab(90.952 -0.0000596046 0)`, `color.border.muted=#1a2e1a`, `color.focus.ring=oklab(0.707999 -0.00000712276 0.0000166297 / 0.5)`
- Spacing scale: `space.1=4px`, `space.2=8px`, `space.3=12px`, `space.4=16px`, `space.5=20px`, `space.6=24px`, `space.7=32px`, `space.8=40px`
- Radius/shadow/motion tokens: `radius.xs=6px`, `radius.sm=10px`, `radius.md=14px`, `radius.lg=9999px`, `radius.xl=33554400px` | `shadow.1=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.145 -0.00000143796 0.00000340492 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, `shadow.2=rgba(255, 255, 255, 0.25) 0px 4px 4px 0px inset`, `shadow.3=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, `shadow.4=rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` | `motion.duration.instant=150ms`

## Accessibility

- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone

Concise, confident, implementation-focused.

## Rules: Do

- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't

- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow

1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure

- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations

- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (29), links (29), inputs (16), cards (8), lists (6), navigation (4).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates

- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.

<!-- 2 -->

# Design System Inspired by GLOWMI

> Auto-extracted from `http://localhost:3000/en` on 2026-04-28

## 1. Visual Theme & Atmosphere

Friendly, approachable design with rounded shapes and generous whitespace.

The hero section leads with "The Essence of Timeless Glow".

**Key Characteristics:**

- Lato as the heading font (custom web font loaded via @font-face)
- Lato as the body font for all running text
- Heading weight 400
- Light/white background (#ffffff) as the primary canvas
- Primary accent `#bd9b5b` used for CTAs and brand highlights
- 7 shadow level(s) detected — tinted shadows
- Rounded corners (50px+) creating a friendly, approachable feel
- Tags: light, rounded, monochrome, serif

## 2. Color Palette & Roles

### Primary

- **Primary Accent** (`#bd9b5b`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Secondary Accent** (`#1f4573`) · `--color-secondary`: Secondary brand, hover states, complementary highlights.
- **Background** (`#ffffff`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#244731`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text

- **Text Primary** (`#363739`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces

- **Border** (`#fbfaf6`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| #   | Hex       | CSS Variable  | Role        | Area   | Contrast   |
| --- | --------- | ------------- | ----------- | ------ | ---------- |
| 1   | `#ffffff` | `--palette-1` | section     | large  | text-dark  |
| 2   | `#244731` | `--palette-2` | badge       | medium | text-light |
| 3   | `#363739` | `--palette-3` | button      | medium | text-light |
| 4   | `#755033` | `--palette-4` | text-accent | small  | text-light |
| 5   | `#bd9b5b` | `--palette-5` | text-accent | small  | text-dark  |
| 6   | `#1f4573` | `--palette-6` | text-accent | small  | text-light |

## 3. Typography Rules

- **Heading Font:** `Lato` (web font)
- **Body Font:** `Lato` (web font)

### Type Hierarchy

| Role  | Font | Size | Weight | Line Height | Letter Spacing |
| ----- | ---- | ---- | ------ | ----------- | -------------- |
| H1    | Lato | 36px | 400    | 40px        | normal         |
| H2    | Lato | 48px | 400    | 48px        | normal         |
| H3    | Lato | 16px | 400    | 24px        | normal         |
| H4    | Lato | 14px | 500    | 20px        | normal         |
| Body  | Lato | 14px | 400    | 22.75px     | normal         |
| Small | Lato | 14px | 500    | 20px        | normal         |

### Type Scale

| Token   | Size     | Suggested Usage        |
| ------- | -------- | ---------------------- |
| Display | `48px`   | headings               |
| H1      | `36px`   | headings               |
| H2      | `30px`   | headings               |
| H3      | `28px`   | headings               |
| H4      | `24px`   | headings               |
| Body L  | `20px`   | body / supporting text |
| Body    | `19.2px` | body / supporting text |
| Small   | `18px`   | body / supporting text |
| XS      | `16px`   | body / supporting text |
| Caption | `15px`   | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: #363739;
  color:;
  border-radius: 6px;
  padding: 0px 12px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(0, 0, 0, 0);
  cursor: pointer;
}
```

### Ghost Button

```css
.btn-ghost {
  background: transparent;
  color: #363739;
  border-radius: 0px;
  padding: 0px 0px;
  font-size: 19.2px;
  font-weight: 300;
  border: none;
  cursor: pointer;
}
```

### Pill Button

```css
.btn-pill {
  background: #244731;
  color: #363739;
  border-radius: 33554400px;
  padding: 0px 0px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Pill Button 2

```css
.btn-pill-2 {
  background: transparent;
  color: #363739;
  border-radius: 33554400px;
  padding: 8px 8px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Filled Button

```css
.btn-filled {
  background: #363739;
  color: #ffffff;
  border-radius: 10px;
  padding: 12px 48px;
  font-size: 18px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Pill Button 3

```css
.btn-pill-3 {
  background: #ffffff;
  color: #363739;
  border-radius: 33554400px;
  padding: 12px 12px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  cursor: pointer;
}
```

### Card

```css
.card {
  background: #ffffff;
  border-radius: 14px;
  padding: 24px;
  box-shadow:
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    oklab(0.145 -0.00000143796 0.00000340492 / 0.1) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
}
```

## 5. Layout Principles

- **Base spacing unit:** `8px` — use multiples (16px, 24px, 32px, etc.)

### Spacing Scale (extracted from real elements)

| Token     | Value  | Role    |
| --------- | ------ | ------- |
| spacing-1 | `8px`  | element |
| spacing-2 | `12px` | element |
| spacing-3 | `40px` | card    |
| spacing-4 | `20px` | element |
| spacing-5 | `24px` | card    |
| spacing-6 | `64px` | section |
| spacing-7 | `16px` | element |
| spacing-8 | `4px`  | element |

### Border Radius Scale

| Token         | Value  | Element |
| ------------- | ------ | ------- |
| radius-card   | `50px` | card    |
| radius-button | `10px` | button  |
| radius-button | `14px` | button  |
| radius-card   | `18px` | card    |
| radius-subtle | `4px`  | subtle  |
| radius-button | `6px`  | button  |

## 6. Depth & Elevation

| Level | Shadow                                                                                | Usage                      |
| ----- | ------------------------------------------------------------------------------------- | -------------------------- |
| Low   | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation    |
| Deep  | `rgba(88, 114, 154, 0.3) 0px 10px 40px 0px`                                           | Hero sections, deep layers |
| Low   | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation    |
| Low   | `rgba(255, 255, 255, 0.25) 0px 4px 4px 0px inset`                                     | Cards, subtle elevation    |
| Low   | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0...` | Cards, subtle elevation    |

> **Note:** This site uses chromatic (color-tinted) shadows rather than pure black — this is a deliberate brand choice that adds warmth to elevation.

## 7. Do's and Don'ts

### Do

- Use `#ffffff` as the primary background color
- Use `Lato` for all headings and `Lato` for body text
- Use `#bd9b5b` as the single dominant accent/CTA color
- Maintain `8px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`50px`+) consistently for all interactive elements
- Use serif fonts for headlines to maintain editorial authority
- Stick to grayscale + `#bd9b5b` accent — avoid color overload
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 400 for headings to match the brand's typographic voice

### Don't

- Don't use colors outside the extracted palette without justification
- Don't substitute Lato/Lato with generic alternatives
- Don't use irregular spacing — stick to 8px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't add additional saturated colors beyond the primary accent
- Don't mix in geometric sans-serif headlines — it breaks the editorial tone
- Don't use pure black (#000000) for text — use `#363739` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width       | Notes                                                 |
| ---------- | ----------- | ----------------------------------------------------- |
| Mobile     | < 640px     | Single column, stack sections, reduce font sizes ~80% |
| Tablet     | 640–1024px  | 2-column where appropriate, maintain spacing ratios   |
| Desktop    | 1024–1440px | Full layout as designed                               |
| Wide       | > 1440px    | Max-width container, center content                   |

- Touch targets: minimum 44×44px on mobile
- Maintain 8px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #363739
Accent:      #bd9b5b
Secondary:   #1f4573
Border:      #fbfaf6
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Lato` heading in `#363739`, and a `#bd9b5b` CTA button with 6px radius."
2. "Create a pricing card using background `#244731`, border `#fbfaf6`, `Lato` for text, and 24px padding."
3. "Design a navigation bar — `#ffffff` background, `#363739` links, `#bd9b5b` for active state."
4. "Build a feature grid with 3 columns, 24px gap, each card using the card component style."
5. "Create a footer with `#363739` background, `#ffffff` text, and 16px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 32 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable                       | Value      |
| ------------------------------ | ---------- |
| `--background`                 | `#fff`     |
| `--foreground`                 | `#0a0a0a`  |
| `--card`                       | `#fff`     |
| `--card-foreground`            | `#0a0a0a`  |
| `--popover`                    | `#fff`     |
| `--popover-foreground`         | `#0a0a0a`  |
| `--primary`                    | `#363739`  |
| `--primary-foreground`         | `#fafafa`  |
| `--secondary`                  | `#f5f5f5`  |
| `--secondary-foreground`       | `#171717`  |
| `--muted`                      | `#f5f5f5`  |
| `--muted-foreground`           | `#737373`  |
| `--accent`                     | `#f5f5f5`  |
| `--accent-foreground`          | `#171717`  |
| `--destructive`                | `#e40014`  |
| `--border`                     | `#e5e5e5`  |
| `--input`                      | `#e5e5e5`  |
| `--ring`                       | `#a1a1a1`  |
| `--chart-1`                    | `#f05100`  |
| `--chart-2`                    | `#009588`  |
| `--chart-3`                    | `#104e64`  |
| `--chart-4`                    | `#fcbb00`  |
| `--chart-5`                    | `#f99c00`  |
| `--sidebar`                    | `#fafafa`  |
| `--sidebar-foreground`         | `#0a0a0a`  |
| `--sidebar-primary`            | `#171717`  |
| `--sidebar-primary-foreground` | `#fafafa`  |
| `--sidebar-accent`             | `#f5f5f5`  |
| `--sidebar-accent-foreground`  | `#171717`  |
| `--sidebar-border`             | `#e5e5e5`  |
| ...                            | _(1 more)_ |

### Spacing Variables

| Variable   | Value     |
| ---------- | --------- |
| `--radius` | `.625rem` |
