export type FeatureValue = boolean | string;

export type CategoryId = "ai" | "sustainability" | "platform";

export interface Feature {
  label: string;
  description?: string;
  category: CategoryId;
  carlos: FeatureValue;
  carlosCaveat?: string;
  inspectorio: FeatureValue;
  inspectorioCaveat?: string;
  tradebeyond: FeatureValue;
  tradebeyondCaveat?: string;
}

export const CATEGORIES = [
  { id: "all", label: "All Features" },
  { id: "ai", label: "AI & ML" },
  { id: "sustainability", label: "Sustainability" },
  { id: "platform", label: "Core Platform" },
] as const;

export const FEATURES: Feature[] = [
  // ── AI & ML ──
  {
    label: "AI Explainability",
    description: "Transparent reasoning for every decision",
    category: "ai",
    carlos: "Full reasoning transparency",
    carlosCaveat: "Every recommendation includes rationale",
    inspectorio: "Black-box AI",
    inspectorioCaveat: "No reasoning provided",
    tradebeyond: "No AI",
  },
  {
    label: "ML Features",
    description: "Number of machine-learning driven data points",
    category: "ai",
    carlos: "847",
    inspectorio: "Unknown",
    inspectorioCaveat: "Not publicly disclosed",
    tradebeyond: "N/A",
  },
  {
    label: "Care Labelling AI",
    description: "AI-powered care label generation",
    category: "ai",
    carlos: true,
    inspectorio: false,
    tradebeyond: false,
  },
  {
    label: "Risk Assessment Map",
    description: "Visual risk mapping across supply chain",
    category: "ai",
    carlos: true,
    inspectorio: false,
    tradebeyond: false,
  },
  {
    label: "Predictive Quality Analytics",
    description: "Forecast defects before they happen",
    category: "ai",
    carlos: true,
    carlosCaveat: "Proactive defect prevention",
    inspectorio: false,
    inspectorioCaveat: "Reactive only",
    tradebeyond: false,
  },

  // ── Sustainability ──
  {
    label: "EU Digital Product Passport",
    description: "Ready for 2027 DPP regulation",
    category: "sustainability",
    carlos: "2027-ready",
    carlosCaveat: "Full regulatory alignment",
    inspectorio: "Limited",
    inspectorioCaveat: "Partial coverage only",
    tradebeyond: "Basic reporting",
    tradebeyondCaveat: "Manual processes required",
  },
  {
    label: "Real Production Data Validation",
    description: "Validate against actual production data",
    category: "sustainability",
    carlos: true,
    inspectorio: false,
    tradebeyond: false,
  },
  {
    label: "Carbon Footprint Tracking",
    description: "Track and report emissions across supply chain",
    category: "sustainability",
    carlos: true,
    carlosCaveat: "Scope 1–3 coverage",
    inspectorio: false,
    tradebeyond: "Partial",
    tradebeyondCaveat: "Scope 1 only",
  },
  {
    label: "Supply Chain Traceability",
    description: "End-to-end material and supplier tracing",
    category: "sustainability",
    carlos: true,
    inspectorio: "Limited",
    inspectorioCaveat: "Tier 1 suppliers only",
    tradebeyond: false,
  },

  // ── Core Platform ──
  {
    label: "Scheme-Agnostic Compliance",
    description: "Works across all compliance schemes",
    category: "platform",
    carlos: true,
    inspectorio: "Single-scheme",
    inspectorioCaveat: "Locked to one framework",
    tradebeyond: "Partial",
  },
  {
    label: "Role-Adaptive Views",
    description: "Interface adapts to user role",
    category: "platform",
    carlos: true,
    inspectorio: false,
    tradebeyond: false,
  },
  {
    label: "Projected ROI",
    description: "Return on investment for enterprise clients",
    category: "platform",
    carlos: "7.7×",
    carlosCaveat: "Based on enterprise benchmarks",
    inspectorio: "Not published",
    tradebeyond: "Not published",
  },
  {
    label: "Multi-language Support",
    description: "Localised interface for global teams",
    category: "platform",
    carlos: true,
    carlosCaveat: "20+ languages",
    inspectorio: "Limited",
    inspectorioCaveat: "English-centric",
    tradebeyond: true,
  },
  {
    label: "Offline Inspection Capability",
    description: "Conduct inspections without connectivity",
    category: "platform",
    carlos: true,
    inspectorio: true,
    tradebeyond: false,
    tradebeyondCaveat: "Requires constant connection",
  },
];
