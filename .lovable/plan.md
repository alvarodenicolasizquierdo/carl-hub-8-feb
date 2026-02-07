

# Add Smallest (40px) Primary SGS Logo

## What's Changing

Add the 40px primary SGS logo (full logo with "SGS" text and cross mark) to the project assets. This gives you three logo variants to use across the app:

| Asset | Size | Content | Current Use |
|-------|------|---------|-------------|
| `sgs-logo.png` (80px secondary) | 80px | Cross mark only | Sidebar |
| `sgs-logo-tagline.png` (80px secondary) | 80px | Cross mark + tagline | Landing hero |
| `sgs-logo-primary.png` (40px primary) | 40px | Full logo with "SGS" text | **New — not yet used** |
| `sgs-logo-tagline-sm.png` (40px primary) | 40px | Full logo + tagline | **New — not yet used** |

## Steps

1. Copy the two 40px PNG logos into `src/assets/`:
   - `SGS_logo-digital_40px.png` -> `src/assets/sgs-logo-primary.png`
   - `SGS_logo-tagline_digital_40px.png` -> `src/assets/sgs-logo-tagline-sm.png`

2. **Optionally swap the sidebar logo** to use the 40px primary (which includes "SGS" text), so the sidebar shows the full brand mark even when collapsed — removing the need for the separate "CARLOS" text label. This would make the collapsed sidebar cleaner since the logo itself contains "SGS".

## Technical Notes
- PNG format, transparent background, works on dark and light
- The 40px versions are optimized for small display sizes and will render crisply in the sidebar

