

# Enhance Comparison Table -- Inspired by Reference Screenshots

## What Changes

Upgrade the existing Compare page with design patterns from Slite, Deel, Height, Ghost, Klaviyo, and others to make it more visually compelling and informative.

### 1. Category Section Headers Within the Table (from Height, Deel)

Instead of only using tabs to filter categories, show **all features at once** by default with bold category divider rows inline in the table (e.g., a full-width row reading "AI and ML" in bold before those features). The tabs still work as filters, but "All Features" shows grouped sections.

### 2. Richer Text Values with Inline Icons (from Ghost, Buy Me a Coffee)

For text-based values, prepend a small check or X icon next to the text (like Ghost does with emoji). This makes it instantly scannable -- green check + "2027-ready" vs red X + "Basic reporting". Currently text values have no icon.

### 3. Competitor Caveat Text in Muted Italic (from Klaviyo)

Where competitors have a negative note, show a short italic caveat line below the value in `text-destructive` (e.g., under Inspectorio's "Black-box AI" add *"No reasoning provided"*). This adds persuasive detail without cluttering.

### 4. Column Highlight with Rounded Border (from Wave, Quicken)

Instead of just `bg-primary/5`, add a subtle `ring-1 ring-primary/20 rounded-lg` visual treatment to the entire CARLOS column area, making it pop more like the Wave and Quicken examples.

### 5. More Feature Rows

Expand from 9 to ~14 features to make the table feel more comprehensive and authoritative. Add features like:
- Predictive Quality Analytics (AI)
- Multi-language Support (Platform)
- Offline Inspection Capability (Platform)
- Carbon Footprint Tracking (Sustainability)
- Supply Chain Traceability (Sustainability)

### 6. Summary Row at Bottom (from Amplitude mirror pattern)

Add a footer/summary row showing a simple win count: "CARLOS leads in X of Y features" with a subtle background.

## Technical Details

### File changed
- `src/pages/Compare.tsx` -- enhanced with all the above

### Data structure update
```
interface Feature {
  label: string;
  description?: string;
  category: "ai" | "sustainability" | "platform";
  carlos: FeatureValue;
  carlosCaveat?: string;       // optional positive note
  inspectorio: FeatureValue;
  inspectorioCaveat?: string;  // optional negative caveat
  tradebeyond: FeatureValue;
  tradebeyondCaveat?: string;  // optional negative caveat
}
```

### ValueCell update
- Boolean `true` renders: green Check icon
- Boolean `false` renders: red X icon
- String values: prepend a small green Check (for CARLOS) or contextual icon, then the text
- If a caveat string exists, render it below in `text-xs italic text-destructive` (for competitors) or `text-xs italic text-primary` (for CARLOS)

### Category section headers
When `category === "all"`, insert a full-colspan `TableRow` before each category group with the category name styled as a bold section header (like Height's "Personal views" / "Integrations" dividers).

### Summary footer
A `TableFooter` row spanning all columns showing "CARLOS leads in X of Y categories" with a subtle `bg-primary/5` background.

### No new dependencies
Uses existing Table, Tabs, Card, Badge components and lucide-react icons.
