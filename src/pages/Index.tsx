import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Layers,
  Monitor,
  Brain,
  Blocks,
  Globe,
  TrendingUp,
  ChevronDown,
  Shield,
  Leaf,
  Map,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/use-count-up";
import { APPS, WOW_MOMENTS, getAppUrl, APP_URLS } from "@/config/constants";
import sgsLogoTagline from "@/assets/sgs-logo-tagline.png";

const STAT_ICONS: Record<string, React.ElementType> = { Layers, Monitor, Brain, Blocks, Globe, TrendingUp };
const APP_ICONS: Record<string, React.ElementType> = { Shield, Brain, Leaf, Map };

function StatCard({ label, value, iconName }: { label: string; value: number | string; iconName: string }) {
  const Icon = STAT_ICONS[iconName] || Layers;
  const isNumeric = typeof value === "number";
  const { count, ref } = useCountUp(isNumeric ? value : 0, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col items-center gap-1"
    >
      <Icon className="w-6 h-6 text-primary mb-1" />
      <span className="text-3xl font-display font-bold text-foreground">
        {isNumeric ? count.toLocaleString() : value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
}

function AppCard({ app }: { app: typeof APPS[number] }) {
  const navigate = useNavigate();
  const Icon = APP_ICONS[app.icon] || Shield;

  return (
    <Card
      className={`cursor-pointer hover:scale-[1.02] transition-all duration-200 border ${app.borderClass} hover:shadow-lg`}
      onClick={() => navigate("/apps")}
    >
      <CardContent className="p-6 flex flex-col items-center text-center gap-3">
        <div className={`w-12 h-12 rounded-lg ${app.bgClass} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${app.colorClass}`} />
        </div>
        <h3 className="font-display font-semibold text-foreground">{app.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>
        <p className="text-xs text-muted-foreground">
          {app.stats.screens} screens · {app.stats.components} components · {app.stats.ai} AI
        </p>
      </CardContent>
    </Card>
  );
}

function DataMetric({ value, label, end }: { value: string; label: string; end: number }) {
  const { count, ref } = useCountUp(end, 2000);
  const display = end > 1000 ? count.toLocaleString() : value.includes("£") ? `£${(count / 10).toFixed(1)}M` : count.toLocaleString();

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-display font-bold text-primary">{end > 999 ? count.toLocaleString() : value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export default function Index() {
  const navigate = useNavigate();

  const handleLaunch = (appId: string, route: string) => {
    window.open(getAppUrl(appId) + route, "_blank");
  };

  const appBadge = (appId: string) => {
    const app = APPS.find((a) => a.id === appId);
    if (!app) return null;
    return (
      <span className={`text-xs px-2 py-0.5 rounded-full ${app.bgClass} ${app.colorClass} font-medium`}>
        {app.name}
      </span>
    );
  };

  return (
    <div className="min-h-full">
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-2rem)] flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-sgs-dark via-sgs-charcoal to-sgs-dark overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(243,111,33,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(243,111,33,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-6">
            Prototype — Design Vision
          </p>

          <img src={sgsLogoTagline} alt="SGS — When you need to be sure" className="h-20 w-auto mx-auto mb-6" />

          <h1 className="text-7xl font-display font-bold text-foreground mb-4">CARLOS</h1>
          <p className="text-xl text-foreground/80 mb-2">
            Compliance & Assurance Retail Lifecycle Operating System
          </p>
          <div className="w-28 h-0.5 bg-primary mx-auto my-6" />
          <p className="text-lg text-muted-foreground mb-10">
            AI-First Quality Intelligence for Premium Retail
          </p>

          {/* Stats */}
          <div className="grid grid-cols-6 gap-8 mb-10">
            <StatCard label="Apps" value={4} iconName="Layers" />
            <StatCard label="Screens" value={95} iconName="Monitor" />
            <StatCard label="ML Features" value={847} iconName="Brain" />
            <StatCard label="Components" value={515} iconName="Blocks" />
            <StatCard label="Suppliers" value="14K+" iconName="Globe" />
            <StatCard label="ROI" value="£5.5M" iconName="TrendingUp" />
          </div>

          {/* CTAs */}
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => navigate("/demo")} className="gap-2 text-base px-8">
              Launch Guided Demo →
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/apps")} className="gap-2 text-base px-8 border-primary/40 text-primary hover:bg-primary/10">
              Explore Apps →
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce-down">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Four Apps. One Vision.
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {APPS.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Data Lineage */}
      <section className="py-20 px-8 bg-sgs-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-3">
            Built on Real Production Data
          </h2>
          <p className="text-muted-foreground mb-12">
            Validated against a large, long-standing Tier 1 retail customer — 63 tables, 847 ML features, 14,000+ suppliers
          </p>
          <div className="grid grid-cols-4 gap-8">
            <DataMetric value="847" label="ML Features Mapped" end={847} />
            <DataMetric value="63" label="Portfolio Tables" end={63} />
            <DataMetric value="14,000+" label="Suppliers Tracked" end={14000} />
            <DataMetric value="£5.5M" label="Projected Annual ROI" end={55} />
          </div>
        </div>
      </section>

      {/* Wow Moments */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Demo Cheat Sheet — Top 10 Wow Moments
          </h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            {WOW_MOMENTS.map((item) => (
              <button
                key={item.rank}
                onClick={() => handleLaunch(item.app, item.route)}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent/50 transition-colors text-left group"
              >
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {item.rank}
                </span>
                <span className="flex-1 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </span>
                {appBadge(item.app)}
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="py-20 px-8 bg-sgs-dark">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-12">Why CARLOS?</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              { vs: "vs. Inspectorio", line: "They have AI. We have AI that explains itself." },
              { vs: "vs. TradeBeyond", line: "They digitise workflows. We digitise expertise." },
              { vs: "vs. Status Quo", line: "Spreadsheets don't predict. CARLOS does." },
            ].map((item) => (
              <Card key={item.vs} className="border-border/30 bg-card/50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-display font-semibold text-primary mb-3">{item.vs}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{item.line}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Presenter Framing */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
            Presenter Framing
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <Card className="border-accent-green/30">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-accent-green mb-4 text-lg">✅ SAY</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  {[
                    "AI that explains itself",
                    "Future-proof architecture",
                    "Scheme-agnostic compliance",
                    "Built on real production data",
                    "EU DPP 2027 ready today",
                    "7.7x ROI on AI investment",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-accent-green mt-0.5">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-destructive/30">
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-destructive mb-4 text-lg">❌ AVOID</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  {[
                    ['"Prototype"', 'say "design vision"'],
                    ['"Demo"', 'say "preview" or "walkthrough"'],
                    ['"Not ready"', 'say "roadmap to production"'],
                    ['"Might work"', 'say "validated against real data"'],
                    ['"Just a concept"', 'say "strategic asset"'],
                  ].map(([avoid, instead]) => (
                    <li key={avoid} className="flex items-start gap-2">
                      <span className="text-destructive mt-0.5">•</span>
                      <span>
                        <span className="line-through text-muted-foreground">{avoid}</span>
                        {" → "}
                        <span>{instead}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-6 text-center text-xs text-muted-foreground border-t border-border/20">
        © 2026 SGS SA — Internal Prototype — Not for Distribution
      </div>
    </div>
  );
}
