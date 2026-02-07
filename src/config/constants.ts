export const APP_URLS: Record<string, string> = {
  portal: "https://carl-portal-star.lovable.app",
  ai: "https://sgs-ai-carlos.lovable.app",
  blue: "https://sgs-bs-carlos.lovable.app",
  smart: "https://sgs-carlos.lovable.app",
};

export const APPS = [
  {
    id: "portal",
    name: "CARLOS Portal",
    icon: "Shield" as const,
    colorClass: "text-accent-blue",
    bgClass: "bg-accent-blue/10",
    borderClass: "border-accent-blue/30",
    description: "Core compliance lifecycle management — styles, components, TRFs, suppliers",
    stats: { screens: 19, components: 180, ai: 8 },
    bestFor: "Full lifecycle demos, Client buyers",
    keyRoutes: [
      { label: "Dashboard", route: "/" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" },
      { label: "TRFs", route: "/trfs" },
      { label: "Suppliers", route: "/suppliers" },
      { label: "Analytics", route: "/analytics" },
    ],
  },
  {
    id: "ai",
    name: "CARLOS AI",
    icon: "Brain" as const,
    colorClass: "text-accent-purple",
    bgClass: "bg-accent-purple/10",
    borderClass: "border-accent-purple/30",
    description: "AI reasoning transparency — task prioritisation, care labelling, scenario simulation, approval levels",
    stats: { screens: 25, components: 150, ai: 15 },
    bestFor: "C-Suite demos, AI showcase",
    keyRoutes: [
      { label: "AI Dashboard", route: "/" },
      { label: "Care Labelling", route: "/care-labelling" },
      { label: "TRF Detail", route: "/trfs/trf-001" },
      { label: "Analytics", route: "/analytics" },
      { label: "Approval Levels", route: "/approval-levels" },
    ],
  },
  {
    id: "blue",
    name: "CARLOS BLUE",
    icon: "Leaf" as const,
    colorClass: "text-accent-green",
    bgClass: "bg-accent-green/10",
    borderClass: "border-accent-green/30",
    description: "Sustainability evidence management — AI1–AI6 pipeline, DPP export, scheme-agnostic compliance",
    stats: { screens: 22, components: 120, ai: 6 },
    bestFor: "Sustainability teams, ESG demos, DPP readiness",
    keyRoutes: [
      { label: "Evidence Graph", route: "/sustainability/claims" },
      { label: "DPP Export", route: "/styles/coll-004/dpp" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" },
    ],
  },
  {
    id: "smart",
    name: "SMART Advanced",
    icon: "Map" as const,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    borderClass: "border-primary/30",
    description: "Operational intelligence — risk assessment world map, component management, style stage progression",
    stats: { screens: 29, components: 65, ai: 3 },
    bestFor: "Technical teams, Operations, Risk assessment",
    keyRoutes: [
      { label: "Risk Map", route: "/risk-assessment" },
      { label: "Styles", route: "/styles" },
      { label: "Components", route: "/components" },
    ],
  },
] as const;

export const WOW_MOMENTS = [
  { rank: 1, title: "AI Reasoning Transparency", app: "ai", route: "/" },
  { rank: 2, title: "Role-Adaptive Views", app: "ai", route: "/" },
  { rank: 3, title: "DPP Export", app: "blue", route: "/styles/coll-004/dpp" },
  { rank: 4, title: "Evidence Graph", app: "blue", route: "/sustainability/claims" },
  { rank: 5, title: "Risk Assessment Map", app: "smart", route: "/risk-assessment" },
  { rank: 6, title: "Scenario Simulator", app: "ai", route: "/" },
  { rank: 7, title: "Component N:M Linking", app: "smart", route: "/components" },
  { rank: 8, title: "Self-Documenting Platform", app: "portal", route: "/documentation" },
  { rank: 9, title: "AI Narratives", app: "ai", route: "/analytics" },
  { rank: 10, title: "TRF Lifecycle", app: "smart", route: "/styles" },
];

export const HERO_STATS = [
  { label: "Apps", value: 4, icon: "Layers" as const },
  { label: "Screens", value: 95, icon: "Monitor" as const },
  { label: "ML Features", value: 847, icon: "Brain" as const },
  { label: "Components", value: 515, icon: "Blocks" as const },
  { label: "Suppliers", value: "14K+", icon: "Globe" as const },
  { label: "ROI", value: "£5.5M", icon: "TrendingUp" as const },
];

export const STORAGE_KEYS = {
  onboardingComplete: "carlos_onboarding_complete",
  presenterName: "carlos_presenter_name",
  clientName: "carlos_client_name",
  audience: "carlos_audience",
  enabledApps: "carlos_enabled_apps",
  appUrls: "carlos_app_urls",
  theme: "carlos_theme",
} as const;

const ALLOWED_DOMAINS = [".lovable.app", ".lovable.dev"];

export function getAppUrl(appId: string): string {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.appUrls) || "{}");
    if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
      return APP_URLS[appId] || "";
    }
    const override = raw[appId];
    if (typeof override !== "string") {
      return APP_URLS[appId] || "";
    }
    // Validate URL format and restrict to trusted domains
    const url = new URL(override);
    const isTrusted = ALLOWED_DOMAINS.some((d) => url.hostname.endsWith(d));
    if (!isTrusted || !["https:", "http:"].includes(url.protocol)) {
      return APP_URLS[appId] || "";
    }
    return override;
  } catch {
    return APP_URLS[appId] || "";
  }
}

export function getPresenterName(): string {
  return localStorage.getItem(STORAGE_KEYS.presenterName) || "Alvaro de Nicolas";
}

export function getAppName(appId: string): string {
  return APPS.find((a) => a.id === appId)?.name || appId;
}
