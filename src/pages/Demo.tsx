import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Crown,
  ShoppingBag,
  Server,
  Leaf,
  Clock,
  Star,
  ExternalLink,
  ChevronRight,
  Play,
  MessageSquareQuote,
  Shield,
  Brain,
  Map,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { APPS, WOW_MOMENTS, getAppUrl } from "@/config/constants";

/* ─── Audience Definitions ─── */

type AudienceId = "csuite" | "buyer" | "technical" | "sustainability";

interface Act {
  title: string;
  duration: string;
  appId: string;
  route: string;
  wowMoments: string[];
  talkTrack: string;
}

interface Audience {
  id: AudienceId;
  label: string;
  subtitle: string;
  icon: React.ElementType;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  totalDuration: string;
  acts: Act[];
}

const AUDIENCES: Audience[] = [
  {
    id: "csuite",
    label: "C-Suite / SteerCo",
    subtitle: "Strategic value, ROI, and AI differentiation",
    icon: Crown,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    borderClass: "border-primary/30",
    totalDuration: "25 min",
    acts: [
      {
        title: "Act 1 — The Vision",
        duration: "5 min",
        appId: "ai",
        route: "/",
        wowMoments: ["AI Reasoning Transparency", "Role-Adaptive Views"],
        talkTrack:
          "Open on the AI Dashboard. Highlight how every AI decision shows its reasoning chain — this isn't a black box. Switch roles live to show how the same data adapts for a buyer vs. an executive. Say: 'This is AI that explains itself.'",
      },
      {
        title: "Act 2 — The Data Foundation",
        duration: "5 min",
        appId: "portal",
        route: "/analytics",
        wowMoments: ["Self-Documenting Platform"],
        talkTrack:
          "Navigate to Analytics. Emphasise that this is built on real production data — 63 tables, 847 ML features, 14,000+ suppliers. Say: 'This isn't a concept. It's validated against your actual data.'",
      },
      {
        title: "Act 3 — Sustainability Edge",
        duration: "8 min",
        appId: "blue",
        route: "/styles/coll-004/dpp",
        wowMoments: ["DPP Export", "Evidence Graph"],
        talkTrack:
          "Show the Digital Product Passport export. Walk through the evidence graph to demonstrate scheme-agnostic compliance. Say: 'EU DPP 2027 — we're ready today, not tomorrow.'",
      },
      {
        title: "Act 4 — The ROI Close",
        duration: "7 min",
        appId: "ai",
        route: "/analytics",
        wowMoments: ["AI Narratives", "Scenario Simulator"],
        talkTrack:
          "Open AI Narratives to show automated insight generation. Run the scenario simulator to project cost savings. Close with: '7.7x ROI on AI investment — this is the future-proof architecture.'",
      },
    ],
  },
  {
    id: "buyer",
    label: "Client Buyers",
    subtitle: "Day-to-day workflows, compliance lifecycle, speed",
    icon: ShoppingBag,
    colorClass: "text-accent-blue",
    bgClass: "bg-accent-blue/10",
    borderClass: "border-accent-blue/30",
    totalDuration: "30 min",
    acts: [
      {
        title: "Act 1 — Dashboard Overview",
        duration: "5 min",
        appId: "portal",
        route: "/",
        wowMoments: ["Self-Documenting Platform"],
        talkTrack:
          "Start at the Portal Dashboard. Show the at-a-glance compliance status. Say: 'Everything your team needs — one screen, zero spreadsheets.'",
      },
      {
        title: "Act 2 — Style Lifecycle",
        duration: "10 min",
        appId: "portal",
        route: "/styles",
        wowMoments: ["TRF Lifecycle"],
        talkTrack:
          "Walk through a style from creation to approval. Show TRF generation and stage progression. Say: 'From brief to compliant in half the time.'",
      },
      {
        title: "Act 3 — Component Intelligence",
        duration: "8 min",
        appId: "smart",
        route: "/components",
        wowMoments: ["Component N:M Linking"],
        talkTrack:
          "Demonstrate N:M component linking — one component, multiple styles. Show how changes cascade. Say: 'Update once, comply everywhere.'",
      },
      {
        title: "Act 4 — Supplier Risk",
        duration: "7 min",
        appId: "smart",
        route: "/risk-assessment",
        wowMoments: ["Risk Assessment Map"],
        talkTrack:
          "Open the Risk Assessment Map. Filter by region and risk level. Say: 'Real-time risk scoring across your entire supply chain — no surprises.'",
      },
    ],
  },
  {
    id: "technical",
    label: "Technical / IT",
    subtitle: "Architecture, integrations, data model depth",
    icon: Server,
    colorClass: "text-accent-purple",
    bgClass: "bg-accent-purple/10",
    borderClass: "border-accent-purple/30",
    totalDuration: "35 min",
    acts: [
      {
        title: "Act 1 — Architecture Overview",
        duration: "8 min",
        appId: "portal",
        route: "/documentation",
        wowMoments: ["Self-Documenting Platform"],
        talkTrack:
          "Open the Documentation section. Show the self-documenting architecture — every component, every API, every data flow. Say: 'The platform documents itself. Your team never starts from zero.'",
      },
      {
        title: "Act 2 — AI Under the Hood",
        duration: "10 min",
        appId: "ai",
        route: "/",
        wowMoments: ["AI Reasoning Transparency", "Role-Adaptive Views"],
        talkTrack:
          "Dive into the AI reasoning chain. Show confidence scores, feature importance, and decision trees. Say: 'Full transparency. Full auditability. No magic.'",
      },
      {
        title: "Act 3 — Data Model Depth",
        duration: "10 min",
        appId: "smart",
        route: "/styles",
        wowMoments: ["TRF Lifecycle", "Component N:M Linking"],
        talkTrack:
          "Walk through the relational data model — styles, components, TRFs, suppliers. Show N:M linking and stage progression. Say: '63 tables. 847 features. Production-grade from day one.'",
      },
      {
        title: "Act 4 — Sustainability Pipeline",
        duration: "7 min",
        appId: "blue",
        route: "/sustainability/claims",
        wowMoments: ["Evidence Graph", "DPP Export"],
        talkTrack:
          "Show the AI1–AI6 evidence pipeline and DPP export. Emphasise scheme-agnostic design. Say: 'BSCI, Higg, SLCP, or your custom scheme — one pipeline handles all.'",
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability / ESG",
    subtitle: "Evidence management, DPP readiness, scheme compliance",
    icon: Leaf,
    colorClass: "text-accent-green",
    bgClass: "bg-accent-green/10",
    borderClass: "border-accent-green/30",
    totalDuration: "25 min",
    acts: [
      {
        title: "Act 1 — Evidence Pipeline",
        duration: "8 min",
        appId: "blue",
        route: "/sustainability/claims",
        wowMoments: ["Evidence Graph"],
        talkTrack:
          "Open the Evidence Graph. Walk through the AI1–AI6 pipeline stages. Say: 'Every claim traced, every certificate linked, every gap visible.'",
      },
      {
        title: "Act 2 — DPP Export",
        duration: "7 min",
        appId: "blue",
        route: "/styles/coll-004/dpp",
        wowMoments: ["DPP Export"],
        talkTrack:
          "Generate a Digital Product Passport. Show the export format and data completeness. Say: 'EU DPP 2027 compliance — not a roadmap item, a live capability.'",
      },
      {
        title: "Act 3 — Scheme-Agnostic Compliance",
        duration: "5 min",
        appId: "blue",
        route: "/styles",
        wowMoments: [],
        talkTrack:
          "Show how the same style maps to multiple compliance schemes simultaneously. Say: 'One product, many schemes, zero duplication.'",
      },
      {
        title: "Act 4 — Risk & Supply Chain",
        duration: "5 min",
        appId: "smart",
        route: "/risk-assessment",
        wowMoments: ["Risk Assessment Map"],
        talkTrack:
          "Close with the Risk Map. Filter for sustainability-specific risk factors. Say: 'Sustainability isn't separate from operations — it's embedded.'",
      },
    ],
  },
];

/* ─── Helpers ─── */

const APP_ICONS: Record<string, React.ElementType> = { Shield, Brain, Leaf, Map };

function getAppMeta(appId: string) {
  return APPS.find((a) => a.id === appId);
}

/* ─── Sub-components ─── */

function AudienceSelector({
  audiences,
  selected,
  onSelect,
}: {
  audiences: Audience[];
  selected: AudienceId;
  onSelect: (id: AudienceId) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {audiences.map((a) => {
        const active = a.id === selected;
        return (
          <button
            key={a.id}
            onClick={() => onSelect(a.id)}
            className={`group relative flex flex-col items-center gap-2 rounded-xl border p-5 transition-all duration-200 ${
              active
                ? `${a.borderClass} ${a.bgClass} shadow-md`
                : "border-border/40 bg-card/40 hover:border-border hover:bg-card/60"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                active ? a.bgClass : "bg-muted"
              }`}
            >
              <a.icon className={`h-5 w-5 ${active ? a.colorClass : "text-muted-foreground"}`} />
            </div>
            <span className={`text-sm font-display font-semibold ${active ? "text-foreground" : "text-muted-foreground"}`}>
              {a.label}
            </span>
            <span className="text-[11px] text-muted-foreground text-center leading-tight">{a.subtitle}</span>
            <Badge
              variant="secondary"
              className={`text-[10px] ${active ? `${a.bgClass} ${a.colorClass}` : ""}`}
            >
              <Clock className="h-3 w-3 mr-1" />
              {a.totalDuration}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}

function ActCard({ act, index, audience }: { act: Act; index: number; audience: Audience }) {
  const app = getAppMeta(act.appId);
  const Icon = app ? APP_ICONS[app.icon] : Shield;
  const url = getAppUrl(act.appId) + act.route;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className={`border-l-4 ${audience.borderClass} hover:shadow-lg transition-shadow`}>
        <CardContent className="p-6 flex flex-col gap-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-display font-bold ${audience.bgClass} ${audience.colorClass}`}
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-display font-semibold text-foreground">{act.title}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                  {app && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${app.bgClass} ${app.colorClass} font-medium`}>
                      {app.name}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <Badge variant="outline" className="shrink-0 text-xs gap-1">
              <Clock className="h-3 w-3" />
              {act.duration}
            </Badge>
          </div>

          {/* Wow moments */}
          {act.wowMoments.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {act.wowMoments.map((w) => (
                <Badge key={w} variant="secondary" className="text-[11px] gap-1">
                  <Star className="h-3 w-3 text-primary" />
                  {w}
                </Badge>
              ))}
            </div>
          )}

          {/* Talk track */}
          <div className="rounded-lg bg-muted/50 border border-border/30 p-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquareQuote className="h-4 w-4 text-primary shrink-0" />
              <span className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider">
                Talk Track
              </span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed italic">
              "{act.talkTrack}"
            </p>
          </div>

          {/* Launch button */}
          <Button asChild size="sm" variant="outline" className={`w-full gap-2 ${audience.borderClass}`}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Play className="h-3.5 w-3.5" />
              Open in {app?.name || "App"}
              <ExternalLink className="h-3 w-3 ml-auto" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ─── Page ─── */

export default function DemoPage() {
  const [selectedAudience, setSelectedAudience] = useState<AudienceId>("csuite");
  const audience = AUDIENCES.find((a) => a.id === selectedAudience)!;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-sgs-dark py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl"
          >
            Guided Demo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Curated walkthroughs for every audience. Pick a track, follow the acts, and deliver a flawless demo.
          </motion.p>
        </div>
      </section>

      {/* Audience Selector */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="font-display text-xl font-semibold text-center text-foreground mb-6">
          Who's in the room?
        </h2>
        <AudienceSelector
          audiences={AUDIENCES}
          selected={selectedAudience}
          onSelect={setSelectedAudience}
        />
      </section>

      {/* Acts Timeline */}
      <section className="bg-sgs-dark py-16">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAudience}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground flex items-center gap-3">
                    <audience.icon className={`h-6 w-6 ${audience.colorClass}`} />
                    {audience.label}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{audience.subtitle}</p>
                </div>
                <Badge variant="outline" className="text-sm gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {audience.totalDuration} total
                </Badge>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className={`absolute left-[19px] top-8 bottom-8 w-0.5 bg-border/40`} />

                <div className="flex flex-col gap-6">
                  {audience.acts.map((act, i) => (
                    <div key={act.title} className="relative pl-12">
                      {/* Timeline dot */}
                      <div
                        className={`absolute left-2.5 top-7 h-3 w-3 rounded-full border-2 ${audience.borderClass} bg-card`}
                      />
                      <ActCard act={act} index={i} audience={audience} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-center text-foreground mb-8">
          Presenter Quick Tips
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { tip: 'Say "design vision" not "prototype"', icon: "✅" },
            { tip: 'Say "preview" or "walkthrough" not "demo"', icon: "✅" },
            { tip: "Always show AI reasoning before results", icon: "💡" },
            { tip: "Let the audience click — engagement > slides", icon: "💡" },
            { tip: "Close every act with the ROI number", icon: "📊" },
            { tip: "Keep each act under its time badge", icon: "⏱️" },
          ].map((item) => (
            <div
              key={item.tip}
              className="flex items-center gap-3 rounded-lg border border-border/30 bg-card/50 p-4"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm text-foreground">{item.tip}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
