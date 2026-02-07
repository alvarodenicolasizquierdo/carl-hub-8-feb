

# Build Competitive Comparison Table Page

## Overview

Replace the placeholder Compare page with a full-featured comparison table, inspired by the Dub, Monday.com, Loom, and Better Stack patterns from the reference screenshots. The page will compare CARLOS against its two main competitors (Inspectorio and TradeBeyond) already referenced on the Index page.

## Layout

- Hero section with headline: "How CARLOS measures up" and a subtitle
- A clean comparison table with three columns: Feature | CARLOS | Inspectorio | TradeBeyond (or allow toggling between competitors like Monday.com does)
- CARLOS column highlighted with a branded border/background (like Dub and Loom highlight themselves)
- Feature rows using check/cross icons for boolean features and text values for descriptive ones
- Alternating row backgrounds for readability (like Whereby)
- Optional: a side panel with 2-3 key differentiator callout cards (like Customer.io's "Get started for free / Built to scale" cards)

## Comparison Categories and Features

Based on the existing competitive positioning on Index.tsx (the "Why CARLOS?" section), the table would cover areas like:

| Feature | CARLOS | Inspectorio | TradeBeyond |
|---------|--------|-------------|-------------|
| AI Explainability | Full reasoning transparency | Black-box AI | No AI |
| Sustainability / DPP | EU DPP 2027 ready | Limited | Basic reporting |
| Scheme-Agnostic Compliance | Yes | Single-scheme | Partial |
| ML Features | 847 | Unknown | N/A |
| Real Production Data Validation | Yes | No | No |
| Care Labelling AI | Yes | No | No |
| Risk Assessment Map | Yes | No | No |
| Role-Adaptive Views | Yes | No | No |
| Projected ROI | 7.7x | Not published | Not published |

(The actual data can be refined -- this is a starting structure.)

## Technical Approach

1. Create a new `src/pages/Compare.tsx` with:
   - A `competitors` data array (name, features map)
   - A `features` data array (label, description, category)
   - Reuse the existing `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell` components from `src/components/ui/table.tsx`
   - Use `lucide-react` `Check` and `X` icons styled green/red for boolean comparisons
   - Highlight the CARLOS column with a subtle `border-primary` or `bg-primary/5`

2. Optional tab bar at the top to filter by category (e.g., "AI", "Sustainability", "Core Platform") using the existing `Tabs` component

3. Responsive -- stacks on mobile with CARLOS column always visible

## Design Details

- Font: `font-display` (Space Grotesk) for headings, `font-sans` (Inter) for body
- CARLOS column header uses the SGS orange brand colour with a subtle highlight
- Competitor columns use neutral/muted styling
- Check icons: `text-accent-green`, X icons: `text-destructive/60`
- Alternating row backgrounds using `bg-muted/30`
- Sticky header row for scrollability

## Files Changed

- `src/pages/Compare.tsx` -- full rewrite from placeholder to comparison table page

No new dependencies required. Uses existing UI components (Table, Tabs, Card) and lucide-react icons.

