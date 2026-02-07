
# LOVABLE PROMPT — CARLOS Demo Hub (Definitive v3.0)

## What I'm Building

Build a **CARLOS Demo Hub** — a polished, SGS-branded landing page and guided demo launcher that serves as the single entry point for four separate CARLOS prototype applications. This is a **fifth Lovable app** (NOT a merge of the existing four). It opens the right app at the right route for each demo step, adapts to different audience types, and provides downloadable collateral, competitive positioning, and presenter tools. Think of it as a TV remote control for a suite of enterprise prototypes.

The four apps it orchestrates are:

| App ID | App Name | Lovable URL | Key Strength |
|--------|----------|-------------|--------------|
| `portal` | CARLOS Portal | `https://carl-portal-star.lovable.app` | Core compliance lifecycle |
| `ai` | CARLOS AI | `https://sgs-ai-carlos.lovable.app` | AI reasoning transparency, care labelling, analytics |
| `blue` | CARLOS BLUE | `https://sgs-bs-carlos.lovable.app` | Sustainability evidence graph, DPP export, AI1–AI6 pipeline |
| `smart` | SMART Advanced | `https://sgs-carlos.lovable.app` | Risk mapping, component management, operational depth |

**All URLs confirmed and ready to deploy.**

### Platform Scale (from production data analysis — Sainsbury's UKI portfolio)

| Metric | Value | Source |
|--------|-------|--------|
| Total ML Features Mapped | 847 | UKI_USAGE_DATA_v3.xlsx |
| Client Portfolio Tables | 63 | Database schema analysis |
| Active Suppliers Tracked | 14,000+ | Sainsbury's UKI scope |
| Projected Annual ROI | £5.5M | AI efficiency modelling |
| Total Screens | 95 | Across 4 apps |
| Total Components | 515 | Across 4 apps |
| AI Capabilities | 32 | Across 4 apps |

**Logo assets:** Official SGS logos (PNG) will be uploaded — plain version for sidebar, tagline version for landing page hero. Use an orange rectangle placeholder with "SGS" text in white until real assets are provided.

---

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS + shadcn/ui component library
- React Router v6 (file-based routes)
- Framer Motion for page transitions and micro-interactions
- Lucide React icons
- No backend needed — all config is client-side with localStorage persistence
- Responsive but **optimised for 1920×1080 presentation on large screen** (primary use case is projector/screen share)

---

## Color System & Branding

Use these exact colors throughout:

```
SGS_ORANGE:     #F36F21   (SGS primary brand orange — Pantone 158 C)
SGS_DARK:       #1A1A2E   (dark navy for backgrounds, headers)
SGS_CHARCOAL:   #2C3E50   (secondary dark)
ACCENT_ORANGE:  #F36F21   (SGS orange — use for highlights, CTAs, hover states)
SGS_GREY:       #77787B   (SGS secondary grey — Pantone Cool Gray 9 C)
ACCENT_BLUE:    #3498DB   (links, info badges)
ACCENT_GREEN:   #27AE60   (success, sustainability theme)
ACCENT_PURPLE:  #8E44AD   (AI theme)
LIGHT_BG:       #F8F9FA   (page backgrounds)
CARD_BG:        #FFFFFF   (card surfaces)
TEXT_PRIMARY:    #1A1A2E   (body text)
TEXT_SECONDARY:  #6B7280   (muted text)
BORDER:         #E5E7EB   (card borders)
```

Typography: Use `Inter` for body text, `Space Grotesk` or `Poppins` for headings. Import from Google Fonts.

---

## Phase 0: First-Visit Onboarding Wizard

A full-screen onboarding flow shown on first visit (tracked via `localStorage` flag `carlos_onboarding_complete`). Asana-inspired split-screen layout: setup questions on the left half, live preview of the Hub updating in real-time on the right half.

### Step 1: Welcome
- SGS logo centered, heading: `"Welcome to CARLOS Demo Hub"`, subheading: `"Set up your presentation in 30 seconds"`
- Single `"Get Started →"` button (`ACCENT_ORANGE`)
- Right side: blurred/dimmed preview of the landing page
- A small `"Skip Setup"` link visible at bottom — always available on every step

### Step 2: Who's Presenting?
- `Presenter Name` text input (default pre-filled: `"Alvaro de Nicolas"`)
- `Client Name` text input (optional, placeholder: `"e.g. Sainsbury's"`)
- Right side: footer strip preview updating live as the user types — showing "Presenter: [name]" and "[Client]" dynamically
- Progress bar at top: 25%

### Step 3: Who's Your Audience?
- 4 selectable cards (2×2 grid), each with icon, title, duration, and 1-line description:
  - `Crown` — C-Suite / SteerCo — 15 min — "ROI, competitive positioning, scenario simulator"
  - `ShoppingBag` — Client Buyers — 25 min — "Full 4-act demo, testing lifecycle, supplier management"
  - `Code` — Technical / IT — 20 min — "Architecture, API-readiness, documentation, integration"
  - `Leaf` — Sustainability / ESG — 20 min — "Evidence graph, DPP export, scheme-agnostic architecture"
- Single select — selected card gets orange border + checkmark
- Right side: demo timeline preview adapting to selected audience (show act titles + durations vertically)
- Progress bar: 50%

### Step 4: Which Apps to Feature?
- 4 toggle chips (pill buttons, togglable on/off):
  - `Portal` (blue) — "Core compliance lifecycle"
  - `AI` (purple) — "AI reasoning & analytics"
  - `BLUE` (green) — "Sustainability & DPP"
  - `SMART` (orange) — "Risk & operations"
- All ON by default
- Right side: App Explorer cards highlighting/dimming in real-time based on toggle state
- Progress bar: 75%

### Step 5: Ready to Present
- Summary card showing all choices: presenter name, client name, selected audience, enabled apps
- `"Launch Demo Hub →"` primary button (large, `ACCENT_ORANGE`)
- `"← Go Back"` secondary link
- Right side: full unblurred landing page preview with personalized content (name in footer, stats visible)
- Progress bar: 100%

**Implementation notes:**
- All choices saved to `localStorage` keys: `carlos_presenter_name`, `carlos_client_name`, `carlos_audience`, `carlos_enabled_apps`, `carlos_onboarding_complete`
- `"Skip Setup"` link on every step → sets `carlos_onboarding_complete = true` and navigates to `/` with defaults
- Settings page (`/settings`) includes a `"Re-run Setup Wizard"` button that clears the onboarding flag

---

## Phase 1: Global Layout & Landing Page

### Global Components

#### Navigation Sidebar

A collapsible sidebar (left, 240px expanded → 64px collapsed) with:

- SGS/CARLOS logo at top (real PNG when available, orange placeholder until then)
- Nav items with Lucide icons:
  - `Home` icon → Home (`/`)
  - `Play` icon → Guided Demo (`/demo`)
  - `LayoutGrid` icon → Apps (`/apps`)
  - `GitCompare` icon → Compare (`/compare`)
  - `Download` icon → Collateral (`/collateral`)
  - `Settings` icon → Settings (`/settings`) — smaller, at bottom
- Active item highlighted with `ACCENT_ORANGE` left border and subtle bg tint
- Collapse toggle button at bottom of sidebar
- On mobile/small screens: Convert to a hamburger menu

#### Persistent Footer Strip

A thin strip at the very bottom of every page (h-8) showing:
- Left: `"PROTOTYPE — DESIGN VISION — NOT PRODUCTION SOFTWARE"`
- Center: Current date (auto-formatted)
- Right: `"Presenter: [Name from localStorage]"`
- Background: `SGS_DARK`, text: `TEXT_SECONDARY` at 12px

This is critical — every screen must remind the audience this is a prototype.

---

### Route 1: `/` — Landing Page (Hero)

A full-screen, presentation-quality landing page with multiple content strips. This is what the audience sees first.

**Layout (top to bottom):**

1. **Top Bar** (fixed, h-16): SGS logo (left), "CARLOS" wordmark (center), "Demo Hub v3.0" badge (right). Background: `SGS_DARK`.

2. **Hero Section** (full viewport height minus top bar):
   - Large animated gradient background (subtle, dark navy → charcoal with floating geometric shapes or subtle grid pattern using CSS)
   - Center-aligned content:
     - Eyebrow text: `"PROTOTYPE — DESIGN VISION"` in small caps, `ACCENT_ORANGE`, letter-spacing wide
     - Main title: `"CARLOS"` in 72px bold `Space Grotesk`, white
     - Subtitle: `"Compliance & Assurance Retail Lifecycle Operating System"` in 24px, white/80% opacity
     - Horizontal divider line (2px, `ACCENT_ORANGE`, 120px wide, centered)
     - Tagline: `"AI-First Quality Intelligence for Premium Retail"` in 18px, `TEXT_SECONDARY`
     - **Six stats** in a horizontal row with animated count-up on mount:
       - `"4 Apps"` with icon `Layers`
       - `"95 Screens"` with icon `Monitor`
       - `"847 ML Features"` with icon `Brain`
       - `"515 Components"` with icon `Blocks`
       - `"14K+ Suppliers"` with icon `Globe`
       - `"£5.5M ROI"` with icon `TrendingUp`
     - Two CTA buttons side by side:
       - Primary: `"Launch Guided Demo →"` → navigates to `/demo`
       - Secondary (outline): `"Explore Apps →"` → navigates to `/apps`
   - Bottom of hero: a subtle animated scroll indicator (chevron down bouncing)

3. **Value Proposition Strip** (below fold, light background):
   - 4 cards in a row, each representing one app:
     - **CARLOS Portal**: Icon `Shield`, color `ACCENT_BLUE`, desc: "Core compliance lifecycle management", stat: "19 screens · 180 components · 8 AI capabilities"
     - **CARLOS AI**: Icon `Brain`, color `ACCENT_PURPLE`, desc: "AI reasoning transparency at every decision", stat: "25 screens · 150 components · 15 AI capabilities"
     - **CARLOS BLUE**: Icon `Leaf`, color `ACCENT_GREEN`, desc: "Sustainability evidence graph & DPP export", stat: "22 screens · 120 components · 6-stage AI pipeline"
     - **SMART Advanced**: Icon `Map`, color `ACCENT_ORANGE`, desc: "Risk mapping & operational intelligence", stat: "29 screens · 65 components · 3 AI capabilities"
   - Each card is clickable → navigates to `/apps` with that app pre-selected

4. **Data Lineage Strip** (subtle dark background):
   - Heading: `"Built on Real Production Data"` centered, white
   - Subheading: `"Validated against Sainsbury's UKI portfolio — 63 tables, 847 ML features, 14,000+ suppliers"` in `TEXT_SECONDARY`
   - 4 animated metric cards in a row (count-up animation triggered on scroll into view):
     - `847` — "ML Features Mapped"
     - `63` — "Portfolio Tables"
     - `14,000+` — "Suppliers Tracked"
     - `£5.5M` — "Projected Annual ROI"

5. **Top 10 Wow Moments Strip** (light background):
   - Heading: `"Demo Cheat Sheet — Top 10 Wow Moments"` centered
   - Display as a numbered list in 2 columns (5 per column), each item showing rank number, title, target app badge (colored pill), and the route path in monospace:
     1. AI Reasoning Transparency — `AI` → `/`
     2. Role-Adaptive Views — `AI` → `/` (role switcher)
     3. DPP Export — `BLUE` → `/styles/coll-004/dpp`
     4. Evidence Graph — `BLUE` → `/sustainability/claims`
     5. Risk Assessment Map — `SMART` → `/risk-assessment`
     6. Scenario Simulator — `AI` → `/` (what-if analysis)
     7. Component N:M Linking — `SMART` → `/components`
     8. Self-Documenting Platform — `Portal` → `/documentation`
     9. AI Narratives — `AI` → `/analytics`
     10. TRF Lifecycle — `SMART` → `/styles`
   - Each item is clickable → `window.open(APP_URLS[app] + route, '_blank')`

6. **Competitive Positioning Strip** (dark background):
   - Heading: `"Why CARLOS?"` centered
   - 3-column layout:
     - Column 1: `"vs. Inspectorio"` — "They have AI. We have AI that explains itself."
     - Column 2: `"vs. TradeBeyond"` — "They digitise workflows. We digitise expertise."
     - Column 3: `"vs. Status Quo"` — "Spreadsheets don't predict. CARLOS does."

7. **Presenter Framing Strip** (light background, subtle border-top):
   - Two-column layout:
     - Left column: Green header `"✅ SAY"`, list items:
       - "AI that explains itself"
       - "Future-proof architecture"
       - "Scheme-agnostic compliance"
       - "Built on real production data"
       - "EU DPP 2027 ready today"
       - "7.7x ROI on AI investment"
     - Right column: Red header `"❌ AVOID"`, list items with corrections:
       - "Prototype" → say "design vision"
       - "Demo" → say "preview" or "walkthrough"
       - "Not ready" → say "roadmap to production"
       - "Might work" → say "validated against real data"
       - "Just a concept" → say "strategic asset"

8. **Footer**: `"© 2026 SGS SA — Internal Prototype — Not for Distribution"` centered, small, muted.

---

## Phase 2: Guided Demo Launcher (`/demo`)

This is the core of the Hub. It lets the presenter select an audience, then walks through the demo acts with buttons that open the correct app at the correct route.

### Step 1: Audience Selector

Show 4 large cards (2×2 grid) for audience selection. Each card has an icon, title, subtitle, estimated time, and a "Select" button:

| Audience | Icon | Time | Description |
|----------|------|------|-------------|
| C-Suite / SteerCo | `Crown` | 15 min | ROI, competitive positioning, scenario simulator |
| Client Buyers | `ShoppingBag` | 25 min | Full 4-act demo, testing lifecycle, supplier management |
| Technical / IT | `Code` | 20 min | Architecture, API-readiness, documentation, integration |
| Sustainability / ESG | `Leaf` | 20 min | Evidence graph, DPP export, scheme-agnostic architecture |

If an audience was pre-selected during onboarding (stored in `localStorage` key `carlos_audience`), auto-highlight that card but still allow the presenter to change selection.

When the user selects an audience, transition (Framer Motion slide) to Step 2.

### Step 2: Demo Flow (4–5 Acts)

Display as a **vertical timeline** on the left (stepper/progress bar) with the active act's content on the right. Each act is a card containing:

- Act number and title (large, colored)
- Duration badge (pill, `ACCENT_ORANGE` bg)
- Source app badge (small pill: "AI CARLOS", "BLUE", "SMART Adv", "Portal" with matching color)
- Description paragraph (2-3 sentences)
- **"Wow Moments"** listed as small badges/chips (outlined, rounded pills)
- A prominent **"LAUNCH →"** button that opens the target app URL + route in a **new browser tab** using `window.open(url, '_blank')`
- **Secondary launch buttons** (if present): Smaller outlined buttons below primary, for acts that visit multiple apps
- A **"Talk Track"** expandable accordion with `ChevronDown` icon, containing the verbatim presenter script in a slightly muted box

**Navigation:**
- "← Back to Audience Select" link at top
- "Previous Act" / "Next Act" buttons at bottom of each card
- Clicking a step in the timeline jumps to that act

Here is the complete act configuration with all talk tracks:

```typescript
const APP_URLS = {
  portal: "https://carl-portal-star.lovable.app",
  ai: "https://sgs-ai-carlos.lovable.app",
  blue: "https://sgs-bs-carlos.lovable.app",
  smart: "https://sgs-carlos.lovable.app"
};

const DEMO_ACTS = {
  "c-suite": [
    {
      act: 1,
      title: "AI Command Centre",
      duration: "4 min",
      app: "ai",
      route: "/",
      description: "Open with the CARLOS AI dashboard. Show AI task prioritisation with full reasoning transparency. Switch roles live to show the dashboard adapting instantly.",
      wowMoments: ["AI Reasoning Transparency", "Role-Adaptive Views"],
      talkTrack: "This is what separates CARLOS from everything else in the market. The system doesn't just tell you WHAT to do — it tells you WHY. Every AI recommendation comes with a full reasoning chain. No black boxes. Switch to buyer view... now lab tech... now sustainability manager. Same platform, completely different priorities surfaced. Inspectorio can't do this."
    },
    {
      act: 2,
      title: "Scenario Simulator",
      duration: "4 min",
      app: "ai",
      route: "/",
      description: "Show the what-if scenario simulator. 'What if EU DPP enforces tomorrow?' Live portfolio impact analysis.",
      wowMoments: ["What-If Analysis", "Portfolio Impact"],
      talkTrack: "Let me show you something no one else can do. What if the EU Digital Product Passport regulation enforces tomorrow? Watch CARLOS simulate the impact across your entire portfolio in real-time. This isn't a report someone generates — it's live scenario modelling."
    },
    {
      act: 3,
      title: "DPP Readiness",
      duration: "4 min",
      app: "blue",
      route: "/styles/coll-004/dpp",
      description: "Show DPP export from CARLOS BLUE. The future-proof moment.",
      wowMoments: ["DPP Export", "EU 2027 Ready"],
      talkTrack: "And here is where that scenario becomes actionable. This is a live Digital Product Passport export. Every sustainability claim traced to its evidence. Every certification verified. Every material composition documented. Your competitors will be scrambling to do this in 2027. You'll already have it."
    },
    {
      act: 4,
      title: "Intelligence & Analytics",
      duration: "3 min",
      app: "ai",
      route: "/analytics",
      description: "Analytics with AI narratives. Numbers that explain themselves.",
      wowMoments: ["AI Narratives", "Self-Explaining Data"],
      talkTrack: "Finally, look at analytics. These aren't just charts — every metric has an AI narrative explaining what it means, why it changed, and what you should do about it. Your board pack writes itself."
    }
  ],
  "client": [
    {
      act: 1,
      title: "AI Command Centre",
      duration: "5 min",
      app: "ai",
      route: "/",
      description: "AI task prioritisation with reasoning transparency. Role switching: buyer → lab tech → sustainability manager.",
      wowMoments: ["AI Reasoning", "Role-Adaptive", "Priority Engine"],
      talkTrack: "CARLOS is designed around one principle: the system tells you what needs attention, not the other way around. This dashboard is AI-prioritised — it adapts to your role and surfaces the highest-impact actions first. Watch what happens when I switch from buyer to lab tech... completely different view, same platform."
    },
    {
      act: 2,
      title: "Testing Lifecycle",
      duration: "8 min",
      app: "smart",
      route: "/styles",
      secondaryLaunches: [
        { label: "Component Linking", app: "smart", route: "/components" },
        { label: "TRF Lifecycle", app: "ai", route: "/trfs/trf-001" }
      ],
      description: "Style stage progression, component N:M linking, TRF lifecycle with AI-recommended approval.",
      wowMoments: ["Stage Gates", "N:M Components", "AI Approval", "Confidence Scores"],
      talkTrack: "Now let me show you the testing lifecycle end-to-end. A Style in CARLOS connects to components, test requests, care labelling, supplier documents, and sustainability claims. Everything links. Watch the stage progression — each gate has clear criteria. Now look at components — one component can belong to multiple styles, and CARLOS tracks that automatically. And here's the TRF — see the AI confidence score? CARLOS recommends approval at 94% confidence and shows you exactly why."
    },
    {
      act: 3,
      title: "Sustainability & DPP",
      duration: "8 min",
      app: "blue",
      route: "/sustainability/claims",
      secondaryLaunches: [
        { label: "DPP Export", app: "blue", route: "/styles/coll-004/dpp" }
      ],
      description: "Sustainability evidence graph showing AI1–AI6 pipeline. Certificate extraction, auto-linking, verification, assertion generation, radar narration. DPP export.",
      wowMoments: ["Evidence Graph", "AI1-AI6 Pipeline", "DPP Export", "Scheme-Agnostic"],
      talkTrack: "This is where CARLOS changes the game. You're looking at a 6-stage AI pipeline for sustainability evidence. AI1 extracts data from certificates. AI2 auto-links to the right components. AI3 orchestrates verification. AI4 generates assertions. AI5 builds the compliance radar. AI6 narrates it all. No one else in the market has this. And it's scheme-agnostic — bluesign, GOTS, OEKO-TEX, FSC, EU Ecolabel — one system handles them all."
    },
    {
      act: 4,
      title: "Intelligence & Control",
      duration: "5 min",
      app: "ai",
      route: "/analytics",
      secondaryLaunches: [
        { label: "Ask Carlos", app: "ai", route: "/" }
      ],
      description: "Analytics with AI narratives, world-map inspection view. Close with Ask Carlos answering a live question.",
      wowMoments: ["AI Narratives", "World Map", "Ask Carlos"],
      talkTrack: "Let's close with the intelligence layer. Every chart has an AI narrative — it doesn't just show you the number, it explains what changed and why. Look at the world map — every inspection, every risk, visualised globally. And finally — Ask Carlos. Ask it anything about your compliance status. 'Which suppliers have expiring certifications this quarter?' Watch it answer in real-time."
    },
    {
      act: 5,
      title: "Encore — The Wow Closer",
      duration: "4 min",
      app: "ai",
      route: "/approval-levels",
      secondaryLaunches: [
        { label: "Competitive Matrix", app: "smart", route: "/risk-assessment" }
      ],
      description: "Self-approval levels (graduated autonomy), competitive feature matrix, self-documenting platform.",
      wowMoments: ["Graduated Autonomy", "Self-Documenting"],
      talkTrack: "One more thing. Self-approval levels — you decide how much autonomy CARLOS has. Start conservative, graduate to more automation as trust builds. And the platform documents itself — every feature, every workflow, auto-generated documentation. This platform is not just a tool, it's a strategic asset."
    }
  ],
  "technical": [
    {
      act: 1,
      title: "Architecture Overview",
      duration: "5 min",
      app: "portal",
      route: "/",
      description: "Dashboard as entry point. Show component architecture, routing structure, role-based access patterns.",
      wowMoments: ["Component Architecture", "Role-Based Access"],
      talkTrack: "Let me walk you through the architecture. CARLOS is built on a modern React stack with TypeScript, Tailwind, and shadcn/ui. Role-based access is embedded at the component level — not bolted on. Every screen adapts based on the logged-in persona."
    },
    {
      act: 2,
      title: "Data Model & Integration",
      duration: "5 min",
      app: "smart",
      route: "/components",
      secondaryLaunches: [
        { label: "Style Lifecycle", app: "smart", route: "/styles" }
      ],
      description: "Component management with N:M relationships. Style lifecycle with stage gates. Data model depth.",
      wowMoments: ["N:M Relationships", "Stage Gates", "Data Integrity"],
      talkTrack: "The data model supports N:M relationships between components and styles — critical for real-world product management. Each style has stage-gated progression with configurable criteria. The architecture is designed for API-first integration with your existing systems."
    },
    {
      act: 3,
      title: "AI Capabilities & Documentation",
      duration: "5 min",
      app: "ai",
      route: "/care-labelling",
      secondaryLaunches: [
        { label: "AI Analytics", app: "ai", route: "/analytics" }
      ],
      description: "AI reasoning visible per symbol in care labelling. Analytics with AI narratives. Self-documenting platform.",
      wowMoments: ["AI Reasoning Chains", "Self-Documenting", "API-Ready"],
      talkTrack: "Look at the AI implementation. Every recommendation shows its reasoning chain. Care labelling — the AI suggests symbols and explains why based on material composition and test results. The platform self-documents. This is production architecture in prototype form."
    },
    {
      act: 4,
      title: "Sustainability Stack",
      duration: "5 min",
      app: "blue",
      route: "/sustainability/claims",
      description: "AI1–AI6 pipeline architecture. Scheme-agnostic design patterns. DPP data model.",
      wowMoments: ["6-Stage Pipeline", "Scheme-Agnostic", "DPP Schema"],
      talkTrack: "The sustainability module runs a 6-stage AI pipeline — extraction, linking, verification, assertion, radar, narration. The architecture is scheme-agnostic by design — new certification schemes plug in without code changes. The DPP export follows the EU Digital Product Passport schema."
    }
  ],
  "sustainability": [
    {
      act: 1,
      title: "Evidence Graph",
      duration: "8 min",
      app: "blue",
      route: "/sustainability/claims",
      description: "The star of the show. AI1–AI6 pipeline: certificate extraction, auto-linking, verification orchestration, assertion generation, radar narration.",
      wowMoments: ["AI1-AI6 Pipeline", "Evidence Graph", "Certificate AI"],
      talkTrack: "Let me show you something that doesn't exist anywhere else in the market. This is a sustainability evidence graph powered by a 6-stage AI pipeline. AI1 extracts claims from uploaded certificates. AI2 links them to the correct components automatically. AI3 orchestrates third-party verification. AI4 generates compliance assertions. AI5 builds a visual compliance radar. AI6 narrates everything for your reports. This is end-to-end sustainability evidence management."
    },
    {
      act: 2,
      title: "DPP Export",
      duration: "5 min",
      app: "blue",
      route: "/styles/coll-004/dpp",
      description: "Digital Product Passport export. EU 2027 readiness proof. Full material traceability.",
      wowMoments: ["DPP Export", "Material Traceability", "EU 2027 Ready"],
      talkTrack: "And here's where it all comes together. A Digital Product Passport ready for EU 2027. Every sustainability claim traced to evidence. Every material composition documented. Every certification verified. Export it, share it, audit it. Your competitors will be building this in 2027. You'll already have it deployed."
    },
    {
      act: 3,
      title: "Scheme-Agnostic Architecture",
      duration: "4 min",
      app: "blue",
      route: "/sustainability/claims",
      description: "Show how the same system handles bluesign, GOTS, OEKO-TEX, FSC, EU Ecolabel without code changes.",
      wowMoments: ["Multi-Scheme", "Plug-In Architecture", "Future-Proof"],
      talkTrack: "Notice something critical — CARLOS doesn't hardcode sustainability schemes. bluesign, GOTS, OEKO-TEX, FSC, EU Ecolabel — they all plug in through the same evidence framework. When a new scheme emerges, you add it to the configuration, not the code. That's future-proofing."
    },
    {
      act: 4,
      title: "AI-Powered Compliance Radar",
      duration: "3 min",
      app: "ai",
      route: "/analytics",
      description: "Sustainability analytics with AI narratives. Portfolio-level compliance view.",
      wowMoments: ["Compliance Radar", "AI Narratives", "Portfolio View"],
      talkTrack: "At the portfolio level, CARLOS gives you a compliance radar with AI narratives. Which suppliers are at risk? Which certifications expire soon? What's your DPP readiness percentage? And the AI explains every metric — not just what the number is, but what it means for your sustainability strategy."
    }
  ]
};
```

**UI for each act card:**
- Left side: Circular step indicator (numbered 1–5) connected by a vertical line, active step filled with `ACCENT_ORANGE`, inactive steps outlined
- Right side: Card with:
  - Header bar: Act number + title (bold, 20px) + duration badge (pill, `ACCENT_ORANGE` bg)
  - Source app badge (small pill: "AI CARLOS", "BLUE", "SMART Adv", "Portal" with matching color)
  - Description text
  - Wow moment chips (small, outlined, rounded pills)
  - **Primary launch button**: Large, `ACCENT_ORANGE` bg, white text, `"Open in [App Name] →"`. On click: `window.open(APP_URLS[act.app] + act.route, '_blank')`
  - **Secondary launches** (if present): Smaller outlined buttons below primary
  - **Expandable talk track**: Accordion with `ChevronDown` icon, contains the talk track text in a slightly muted box

---

## Phase 3: App Explorer (`/apps`)

A dashboard showing all 4 apps as large, interactive cards. Each card contains:

- App icon (large, centered, in the app's theme color)
- App name (bold, 24px)
- One-line description
- Stats row: `"X screens · Y components · Z AI capabilities"`
- Key routes listed as clickable chips that open in new tabs
- A large `"Open App →"` button
- A `"Best For"` badge (e.g., "Best for: Client demos, Testing lifecycle")

**App card data:**

```typescript
const APPS = [
  {
    id: "portal",
    name: "CARLOS Portal",
    icon: "Shield",
    color: "#3498DB",
    description: "Core compliance lifecycle management — styles, components, TRFs, suppliers",
    stats: { screens: 19, components: 180, ai: 8 },
    bestFor: "Full lifecycle demos, Client buyers",
    keyRoutes: [
      { label: "Dashboard", route: "/" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" },
      { label: "TRFs", route: "/trfs" },
      { label: "Suppliers", route: "/suppliers" },
      { label: "Analytics", route: "/analytics" }
    ]
  },
  {
    id: "ai",
    name: "CARLOS AI",
    icon: "Brain",
    color: "#8E44AD",
    description: "AI reasoning transparency — task prioritisation, care labelling, scenario simulation, approval levels",
    stats: { screens: 25, components: 150, ai: 15 },
    bestFor: "C-Suite demos, AI showcase",
    keyRoutes: [
      { label: "AI Dashboard", route: "/" },
      { label: "Care Labelling", route: "/care-labelling" },
      { label: "TRF Detail", route: "/trfs/trf-001" },
      { label: "Analytics", route: "/analytics" },
      { label: "Approval Levels", route: "/approval-levels" }
    ]
  },
  {
    id: "blue",
    name: "CARLOS BLUE",
    icon: "Leaf",
    color: "#27AE60",
    description: "Sustainability evidence management — AI1–AI6 pipeline, DPP export, scheme-agnostic compliance",
    stats: { screens: 22, components: 120, ai: 6 },
    bestFor: "Sustainability teams, ESG demos, DPP readiness",
    keyRoutes: [
      { label: "Evidence Graph", route: "/sustainability/claims" },
      { label: "DPP Export", route: "/styles/coll-004/dpp" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" }
    ]
  },
  {
    id: "smart",
    name: "SMART Advanced",
    icon: "Map",
    color: "#E67E22",
    description: "Operational intelligence — risk assessment world map, component management, style stage progression",
    stats: { screens: 29, components: 65, ai: 3 },
    bestFor: "Technical teams, Operations, Risk assessment",
    keyRoutes: [
      { label: "Risk Map", route: "/risk-assessment" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" }
    ]
  }
];
```

At the top of the page, include a search/filter bar that filters the key routes across all apps. Only show apps that are enabled in `localStorage` key `carlos_enabled_apps` (default: all enabled).

---

## Phase 4: Competitive Comparison (`/compare`)

Three distinct visual sections inspired by Basecamp, Copilot, Remote, beehiiv, Grammarly, and NordVPN comparison page patterns. This is a sales weapon — the design must make the CARLOS advantage undeniable at a glance.

### Section 1: "One Platform vs. Many" (Basecamp-style)

A split visual comparing unified vs fragmented approaches:

- **Left side**: Single elevated card with SGS orange border/glow representing CARLOS:
  - CARLOS logo/wordmark at top
  - Checklist of capabilities: "AI Reasoning ✓", "Sustainability Evidence ✓", "DPP Export ✓", "Risk Mapping ✓", "Self-Documenting ✓", "Scenario Simulator ✓"
  - Footer: `"One platform. One data model. One team to train."`
- **Right side**: 4 stacked cards connected with `"+"` signs, each slightly faded/greyed:
  - "Inspectorio" — "Basic AI, no reasoning"
  - "TradeBeyond" — "Workflow only, no intelligence"
  - "Spreadsheets" — "Manual, no automation"
  - "Custom Dev" — "18 months, £2M+"
  - Footer below the stack: `"4 tools, fragmented data, 3× the cost"`
- Centered summary below both: `"Replace the patchwork. Deploy CARLOS."`

### Section 2: Feature Matrix (Remote/beehiiv-style)

A clean, professional feature comparison table:

- **Columns**: CARLOS (highlighted with `ACCENT_ORANGE` background/header) | Inspectorio | TradeBeyond | Manual/Legacy
- **Rows grouped by category** with bold category headers:

  **AI Capabilities:**
  1. AI Task Prioritisation — ✅ Full | ⚠️ Basic ML | ❌ None | ❌ None
  2. AI Reasoning Transparency — ✅ Full chain | ❌ Black box | ❌ None | ❌ None
  3. Scenario Simulator — ✅ What-if | ❌ None | ❌ None | ❌ None
  4. Graduated AI Autonomy — ✅ Configurable | ❌ Fixed | ❌ None | ❌ None
  5. AI Narratives (Self-Explaining Data) — ✅ Auto-gen | ❌ None | ❌ None | ❌ None

  **Compliance & Testing:**
  6. Role-Adaptive Dashboard — ✅ 5 roles | ⚠️ 2 roles | ❌ Fixed | ❌ N/A
  7. Component N:M Linking — ✅ Full | ⚠️ Basic | ⚠️ Basic | ❌ Manual
  8. Stage-Gated Lifecycle — ✅ Configurable | ⚠️ Fixed | ❌ None | ❌ Manual
  9. TRF AI Approval — ✅ Confidence scores | ❌ None | ❌ None | ❌ None

  **Sustainability:**
  10. Sustainability Evidence Graph — ✅ 6-stage AI | ⚠️ Basic tracking | ❌ None | ❌ None
  11. Digital Product Passport — ✅ Export-ready | ⚠️ Roadmap | ❌ None | ❌ None
  12. Scheme-Agnostic Compliance — ✅ Plug-in | ❌ Hardcoded | ❌ None | ❌ N/A
  13. Certificate AI Extraction — ✅ Auto | ❌ None | ❌ None | ❌ Manual
  14. EU DPP 2027 Readiness — ✅ Today | ❌ Planned | ❌ None | ❌ None

  **Platform:**
  15. Self-Documenting Platform — ✅ Auto-gen | ❌ None | ❌ None | ❌ None
  16. Ask Carlos (Natural Language) — ✅ Live | ❌ None | ❌ None | ❌ None
  17. World Map Risk View — ✅ Interactive | ⚠️ Static | ❌ None | ❌ None
  18. API-First Architecture — ✅ Ready | ✅ Yes | ⚠️ Partial | ❌ None

- Use icons: ✅ = green check circle, ⚠️ = amber warning triangle, ❌ = red X circle
- ⚠️ cells should have a tooltip on hover explaining the limitation
- Rows are expandable (click to show a 1-line explanation of each feature)
- CARLOS column has a subtle orange highlight/glow to stand out
- **Score summary row** at the bottom: `"CARLOS: 18/18 | Inspectorio: 5/18 | TradeBeyond: 2/18 | Legacy: 0/18"`

### Section 3: Financial Impact (Grammarly-style cards)

Three side-by-side comparison cards:

- **Card 1 — "With CARLOS"** (elevated, larger, `ACCENT_ORANGE` border glow):
  - `"£5.5M"` — "Projected Annual ROI"
  - `"7.7×"` — "Return on AI Investment"
  - `"60%"` — "Reduction in Manual Review"
  - `"95%"` — "DPP Readiness Score"
  - Footer: `"One platform, deployed in months"`

- **Card 2 — "With Competitors"** (standard, greyed):
  - `"£1.2M"` — "Partial Efficiency Gains"
  - `"2.1×"` — "Return (Fragmented Tools)"
  - `"25%"` — "Manual Reduction (Gaps Remain)"
  - `"30%"` — "DPP Readiness (Partial Coverage)"
  - Footer: `"Multiple vendors, integration overhead"`

- **Card 3 — "Without Any"** (faded, smallest):
  - `"£0"` — "No Efficiency Gain"
  - `"0×"` — "No Return"
  - `"0%"` — "No Automation"
  - `"0%"` — "Not Ready for 2027"
  - Footer: `"Rising compliance costs, falling behind"`

---

## Phase 5: Collateral & Downloads (`/collateral`)

A clean grid of downloadable resources. Since most don't exist yet, show them as cards with a `"Coming Soon"` badge or a `"Download"` button (that shows a toast saying "This will be available after branding approval").

| # | Resource | Format | Audience | Status |
|---|----------|--------|----------|--------|
| 1 | Demo Script (30 min) | PDF | Presenter | Available |
| 2 | Presenter Cheat Sheet | PDF | Presenter | Coming Soon |
| 3 | Leave-Behind Brochure | PDF | Client | Coming Soon |
| 4 | Competitive Deck | PPTX | Sales | Coming Soon |
| 5 | ROI Calculator | Interactive | C-Suite | Coming Soon |
| 6 | Technical Brief | PDF | Client IT | Coming Soon |
| 7 | FAQ & Objection Handler | PDF | Presenter | Coming Soon |
| 8 | Video Walkthrough | MP4 | Async | Coming Soon |

Cards should have: icon for format (`FileText`, `FileSpreadsheet`, `Video`, etc.), title, audience badge, and status badge (green for Available, amber for Coming Soon).

**Below the grid**, include the Presenter Framing reference:
- Two-column callout box:
  - Left: `"✅ SAY"` — "AI that explains itself", "Future-proof", "Scheme-agnostic", "Built on real production data", "EU DPP 2027 ready today", "7.7x ROI"
  - Right: `"❌ AVOID"` — "Prototype" → say "design vision", "Demo" → say "preview", "Not ready" → say "roadmap to production", "Might work" → say "validated against real data"

---

## Phase 6: Settings & Polish (`/settings`)

### Settings Page

A simple settings page accessible via the gear icon in the sidebar. Contains:

1. **App URL Configuration**: 4 text inputs to set/override the base URLs for each app. Persist to `localStorage`. Pre-populated with the defaults from the `APP_URLS` constant.

2. **Presenter Name**: Text input, shown in the footer during demos. Default: "Alvaro de Nicolas"

3. **Client Name**: Text input. When set, replaces "[Company]" placeholders in talk tracks. Default: empty.

4. **Theme Toggle**: Light/Dark mode switch. Default: Dark (for presentations).

5. **Reset All**: Button to clear all localStorage and reset to defaults.

6. **Re-run Setup Wizard**: Button that clears the `carlos_onboarding_complete` flag and navigates to the onboarding wizard.

### Animations & Polish

- Page transitions: Framer Motion `AnimatePresence` with subtle fade + slide
- Cards: Hover scale(1.02) with shadow elevation transition
- Stats counter: Animated count-up from 0 on first viewport entry (use intersection observer)
- Act stepper: Active step pulse animation
- Launch buttons: Subtle glow effect on hover
- Dark mode support: All colors should have dark variants
- Data Lineage metrics: Count-up animation triggered on scroll

### Keyboard Shortcuts (nice to have)
- `1-5`: Jump to act 1-5 in guided demo
- `Escape`: Back to audience select
- `F`: Toggle fullscreen (request browser fullscreen API)

---

## Important Implementation Notes

1. **All external links open in NEW TABS** via `window.open(url, '_blank')`. The Demo Hub never navigates away from itself.

2. **URL construction**: `APP_URLS[appId] + route`. Example: `APP_URLS.ai + "/analytics"` → `"https://sgs-ai-carlos.lovable.app/analytics"`. Store base URLs in a config constant AND localStorage (settings page overrides).

3. **No backend. No auth. No API calls.** Everything is hardcoded React data. This is a launcher, not a platform.

4. **Performance**: This is a presentation tool. It must load in under 2 seconds. No heavy dependencies.

5. **The "PROTOTYPE" disclaimer must appear on EVERY page.** In the footer strip and optionally as a watermark on the landing page.

6. **localStorage keys used**:
   - `carlos_onboarding_complete` — boolean, tracks whether wizard was completed
   - `carlos_presenter_name` — string, presenter name
   - `carlos_client_name` — string, client name (optional)
   - `carlos_audience` — string, pre-selected audience type
   - `carlos_enabled_apps` — JSON array of enabled app IDs
   - `carlos_app_urls` — JSON object of URL overrides
   - `carlos_theme` — string, "dark" or "light"

---

## Build Priority

Build in this order:
1. **Phase 1** — Global layout (sidebar, footer, colors, typography) + full landing page with all strips
2. **Phase 0** — First-visit onboarding wizard with localStorage persistence
3. **Phase 2** — Guided demo launcher with all 4 audience talk tracks and secondary launches
4. **Phase 3** — App Explorer dashboard with search/filter
5. **Phase 4** — Enhanced competitive comparison (3 sections: One vs Many, Feature Matrix, Financial Impact)
6. **Phase 5** — Collateral grid with presenter framing
7. **Phase 6** — Settings page + animation polish + keyboard shortcuts

---

## Summary

This is a **sales weapon disguised as a landing page**. It must look like a million-dollar product while being a lightweight launcher. The audience should feel like they're seeing a unified, polished enterprise platform — not four separate prototypes stitched together. Every pixel should say "SGS takes digital innovation seriously."

**What makes v3.0 definitive:**
- Phase 0 onboarding wizard (Asana-inspired, 30-second setup, live preview)
- Multi-route React Router architecture (6 dedicated routes, collapsible sidebar, Framer Motion transitions)
- Real Sainsbury's production data embedded throughout (847 ML features, 63 tables, 14K+ suppliers, £5.5M ROI)
- Complete verbatim talk tracks for all 4 audience types (17 acts total)
- Top 10 Wow Moments cheat sheet with direct-launch links
- Presenter Framing (SAY vs AVOID) on landing page and collateral
- 3-section competitive comparison (Basecamp + Remote + Grammarly patterns, 18-feature matrix)
- Financial impact cards with competitor benchmarking
- Settings persistence with full localStorage architecture
- Keyboard shortcuts for professional delivery
# CARLOS Demo Hub — Final Implementation Plan

## Overview
A polished, SGS-branded landing page and guided demo launcher — the single entry point for four separate CARLOS prototype applications (Portal, AI, BLUE, SMART Advanced). A lightweight presentation tool with no backend — all config is client-side with localStorage persistence. Optimized for 1920×1080 projector/screen share presentations.

**Logo assets:** Official SGS logos (PNG) — plain version for sidebar, tagline version for landing page hero.

---

## Phase 0: First-Visit Onboarding Wizard

A full-screen onboarding flow shown on first visit (tracked via localStorage). Asana-inspired split-screen layout: setup questions on the left, live preview of the Hub updating in real-time on the right.

### Step 1: Welcome
- SGS logo, "Welcome to CARLOS Demo Hub", "Set up your presentation in 30 seconds"
- Single "Get Started" button, blurred Hub preview on right

### Step 2: Who's Presenting?
- Presenter name input (default: "Alvaro de Nicolas"), optional client name
- Right side: footer strip preview updating live as they type
- Progress bar: 25%

### Step 3: Who's Your Audience?
- 4 selectable cards: C-Suite (15 min), Client Buyers (25 min), Technical/IT (20 min), Sustainability/ESG (20 min)
- Right side: demo timeline preview adapting to selected audience
- Progress bar: 50%

### Step 4: Which Apps to Feature?
- 4 toggle chips (Portal, AI, BLUE, SMART) — all on by default, with brief descriptions
- Right side: App Explorer cards highlighting/dimming based on selection
- Progress bar: 75%

### Step 5: Ready to Present
- Summary of all choices, "Launch Demo Hub" primary button
- Right side: full unblurred landing page with personalized content
- Progress bar: 100%

"Skip Setup" link always visible. All choices saved to localStorage.

---

## Phase 1: Foundation & Landing Page

### Global Layout
- **Collapsible sidebar** (240px expanded → 64px collapsed) with real SGS logo and CARLOS wordmark
- Navigation items: Home, Guided Demo, Apps, Compare, Collateral, Settings
- Active item highlighted with SGS orange left border
- **Persistent footer strip** on every page: "PROTOTYPE — DESIGN VISION — NOT PRODUCTION SOFTWARE" (left), current date (center), presenter name from settings (right)
- SGS color system: orange #F36F21, dark navy #1A1A2E, charcoal #2C3E50, grey #77787B
- Typography: Inter for body, Space Grotesk for headings (Google Fonts)
- Dark mode default with light mode toggle

### Landing Page (`/`)
Full-screen presentation-quality page with multiple content strips:

- **Hero section**: Animated dark gradient background, SGS logo with tagline, "CARLOS" in 72px, subtitle, tagline, orange divider line
- **Six animated count-up stats**: 4 Apps, 95 Screens, 847 ML Features, 515 Components, 14K+ Suppliers, £5.5M ROI
- **Two CTA buttons**: "Launch Guided Demo →" and "Explore Apps →"
- **Value Proposition strip**: 4 clickable app cards (Portal/blue, AI/purple, BLUE/green, SMART/orange) with descriptions and stats
- **Data Lineage strip**: "Built on Real Production Data" — 4 metric cards with scroll-triggered count-up (847 ML Features, 63 Tables, 14K+ Suppliers, £5.5M ROI)
- **Top 10 Wow Moments strip**: Numbered 2-column list — each item shows rank, title, target app badge, and is clickable to open the app at the correct route in a new tab
- **Competitive Positioning strip**: 3-column "Why CARLOS?" — vs Inspectorio, vs TradeBeyond, vs Status Quo
- **Presenter Framing strip**: Two-column SAY ✅ vs AVOID ❌ reference for the presenter
- **Footer**: © 2026 SGS SA — Internal Prototype — Not for Distribution

---

## Phase 2: Guided Demo Launcher (`/demo`)

### Step 1: Audience Selector
- 4 large cards (2×2 grid) with icon, title, estimated time, description, and "Select" button
- Pre-selects audience chosen during onboarding if available
- Animated transition to Step 2

### Step 2: Demo Flow (4–5 Acts per audience)
- **Vertical timeline stepper** on the left with numbered circular steps connected by a line, active step pulsing in SGS orange
- **Act cards** on the right, each containing:
  - Act number, title (bold), duration badge (orange pill), source app badge
  - Description paragraph (2–3 sentences)
  - Wow moment chips (outlined rounded pills)
  - **Primary launch button**: "Open in [App Name] →" — opens correct app + route in a new tab
  - **Secondary launch buttons** (where applicable): smaller outlined buttons for multi-app acts
  - **Expandable talk track accordion**: verbatim presenter script in a muted box
- Previous/Next act navigation, timeline click-to-jump
- Complete talk tracks for all 4 audiences:
  - C-Suite: 4 acts (AI Command Centre → Scenario Simulator → DPP Readiness → Intelligence)
  - Client Buyers: 5 acts (AI Command Centre → Testing Lifecycle → Sustainability & DPP → Intelligence → Encore)
  - Technical/IT: 4 acts (Architecture → Data Model → AI Capabilities → Sustainability Stack)
  - Sustainability/ESG: 4 acts (Evidence Graph → DPP Export → Scheme-Agnostic → Compliance Radar)

---

## Phase 3: App Explorer (`/apps`)

- Dashboard of 4 large interactive app cards, each with:
  - Large themed icon, app name, one-line description
  - Stats row (screens, components, AI capabilities)
  - "Best For" badge
  - Key routes as clickable chips that open in new tabs
  - Prominent "Open App →" button
- Search/filter bar at top to find routes across all apps

---

## Phase 4: Competitive Comparison (`/compare`)

Three distinct visual sections inspired by Basecamp, Copilot, Remote, beehiiv, Grammarly, and NordVPN comparison patterns:

### Section 1: "One Platform vs. Many" (Basecamp-style)
- Split visual: CARLOS as one unified card (left, SGS orange) vs stacked competitor list connected with "+" signs (right)
- CARLOS: single platform with full feature checklist
- Competitors: "Inspectorio + TradeBeyond + Spreadsheets + Custom Dev = 4 tools, fragmented data, 3x cost"

### Section 2: Feature Matrix (Remote/beehiiv-style)
- Clean table with CARLOS column highlighted in SGS orange background
- Features grouped by category headers:
  - AI Capabilities (5 features)
  - Compliance & Testing (4 features)
  - Sustainability (5 features)
  - Platform (4 features)
- Columns: CARLOS | Inspectorio | TradeBeyond | Manual/Legacy
- Cells: ✅ Full, ⚠️ Basic (with tooltip), ❌ None
- Expandable rows for detailed explanations
- Score summary: CARLOS 18/18 vs competitors

### Section 3: Financial Impact (Grammarly-style cards)
- Three side-by-side cards comparing "With CARLOS" (elevated, orange glow) vs "With Competitors" vs "Without Any"
- Key metrics: £5.5M ROI, 7.7x return, 60% manual review reduction

---

## Phase 5: Collateral & Downloads (`/collateral`)

- Grid of 8 resource cards: Demo Script, Cheat Sheet, Brochure, Competitive Deck, ROI Calculator, Technical Brief, FAQ, Video Walkthrough
- Each card: format icon, title, audience badge, status badge (Available green / Coming Soon amber)
- Download buttons show toast for coming-soon items
- Presenter Framing reference (SAY vs AVOID) repeated below the grid

---

## Phase 6: Settings & Polish (`/settings`)

### Settings Page
- 4 text inputs to override base URLs for each app (persisted to localStorage, pre-populated with defaults)
- Presenter name and client name inputs
- Dark/Light theme toggle
- Reset to defaults button
- "Re-run Setup Wizard" button (clears onboarding localStorage flag)

### Polish & Animations
- Page transitions with fade + slide animations
- Card hover effects (scale 1.02 + shadow elevation)
- Scroll-triggered count-up animations for all stats
- Active step pulse animation in demo stepper
- Launch button glow effect on hover
- Keyboard shortcuts: 1–5 for act jump, Escape for back, F for fullscreen

---

## Build Priority
1. Phase 1 — Global layout (sidebar, footer, colors) + full landing page with all strips
2. Phase 0 — First-visit onboarding wizard
3. Phase 2 — Guided demo launcher with all 4 audience talk tracks
4. Phase 3 — App Explorer dashboard
5. Phase 4 — Enhanced competitive comparison (3 sections)
6. Phase 5 — Collateral grid
7. Phase 6 — Settings page + animation polish + keyboard shortcuts

