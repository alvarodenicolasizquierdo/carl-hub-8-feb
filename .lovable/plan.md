

# Replace SGS Placeholder Logos with Official Brand Assets

## What's Changing

The current app uses an orange square with "SGS" text as a placeholder in two places. We'll replace those with the real SGS secondary logos you've uploaded.

## Logo Placement

| Location | Current | New Asset | File |
|----------|---------|-----------|------|
| Sidebar (top-left) | Orange square with "SGS" text | Plain cross mark logo (small, ~32px height) | `SGS_logo_digital_80px-2.png` |
| Landing page hero | Same orange square, larger | Cross mark + "When you need to be sure" tagline | `SGS_logo-tagline_digital_80px-2.png` |

## Steps

1. **Copy both PNG logos into `src/assets/`**
   - `src/assets/sgs-logo.png` (plain cross mark)
   - `src/assets/sgs-logo-tagline.png` (cross mark + tagline)

2. **Update the sidebar** (`src/components/layout/AppSidebar.tsx`)
   - Replace the orange `div` placeholder with an `<img>` tag importing the plain logo
   - Size to ~32px height, with proper alt text
   - Works in both expanded and collapsed sidebar states

3. **Update the landing page hero** (`src/pages/Index.tsx`)
   - Replace the 64px orange square placeholder with the tagline version logo
   - Size to ~80-100px height for presentation impact
   - Keep it centered above the "CARLOS" heading

## Technical Notes
- Using `src/assets/` with ES6 imports for proper bundling and cache-busting
- PNG format works well on both dark and light backgrounds since the logos use SGS orange on transparent background
- The EPS files are not usable in a web app but the PNGs are the correct digital format

