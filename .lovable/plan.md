

# Build the App Explorer Hub -- Glide-Inspired

## Overview

Replace the placeholder Apps page with a rich, scrollable app hub inspired by Glide's product page. This becomes the "app picker" for presenters and clients -- showcasing all 4 CARLOS apps with visual cards, key routes, feature highlights, and direct launch buttons.

## Sections (top to bottom)

### 1. Hero Banner
- Headline: "Explore the CARLOS Suite"
- Subtitle: "Four apps. One platform. Purpose-built for retail quality intelligence."
- Subtle gradient background matching existing sgs-dark theme

### 2. App Cards Grid (2x2)
Large, visually rich cards for each of the 4 apps (Portal, AI, BLUE, SMART Advanced), pulling data from the existing `APPS` constant in `constants.ts`. Each card includes:
- Colored icon in a rounded container (using existing `bgClass`/`colorClass`)
- App name and description
- Stats row: "19 screens / 180 components / 8 AI features"
- "Best for" tag line in muted text
- "Launch App" button that opens the external URL in a new tab
- Key routes as small clickable pills (e.g., "Dashboard", "Styles", "TRFs") that deep-link directly

### 3. Feature Highlights (3-column grid, Glide-style)
Six icon + title + description cards in a 3x2 grid, similar to Glide's "Wait -- there's more" section. CARLOS-specific features:
- Explainable AI -- Every decision shows its reasoning chain
- DPP-Ready -- EU Digital Product Passport export built in
- Scheme-Agnostic -- Works across BSCI, Higg, SLCP, and custom schemes
- Real-Time Risk -- Live risk scoring across 14,000+ suppliers
- Role-Adaptive Views -- UI adapts to buyer, auditor, or executive
- Production-Validated -- Built on 63 tables, 847 ML features from real data

### 4. Quick Launch Bar
A horizontal row of 4 compact buttons (one per app) with colored left borders, for fast access without scrolling back up. Each opens the app URL in a new tab.

## Technical Details

### Files Changed
- `src/pages/Apps.tsx` -- complete rewrite from placeholder to full page

### Data Source
All app data (names, URLs, icons, stats, routes) comes from existing `src/config/constants.ts` -- no data duplication needed. Uses `APPS`, `APP_URLS`, and `getAppUrl()`.

### Components Used
- Existing `Card`, `CardContent` from ui/card
- Existing `Button` from ui/button
- Existing `Badge` from ui/badge
- `motion` from framer-motion for scroll-in animations
- Lucide icons (existing imports pattern from Index.tsx)

### Design Patterns
- Follows the same section structure as `Index.tsx` (alternating bg-background / bg-sgs-dark sections)
- Uses the same `font-display` typography, `text-primary` accent color
- Cards use the per-app color classes already defined in constants (`borderClass`, `bgClass`, `colorClass`)
- External links open in `_blank` tabs using `getAppUrl()`

### No New Dependencies
Everything built with existing packages and components.

