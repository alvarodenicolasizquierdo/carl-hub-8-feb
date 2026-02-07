import { useState } from "react";
import { Check, X, Minus, Crown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ---------- data ----------

type FeatureValue = boolean | string;

interface Feature {
  label: string;
  description?: string;
  category: "ai" | "sustainability" | "platform";
  carlos: FeatureValue;
  inspectorio: FeatureValue;
  tradebeyond: FeatureValue;
}

const CATEGORIES = [
  { id: "all", label: "All Features" },
  { id: "ai", label: "AI & ML" },
  { id: "sustainability", label: "Sustainability" },
  { id: "platform", label: "Core Platform" },
] as const;

const FEATURES: Feature[] = [
  {
    label: "AI Explainability",
    description: "Transparent reasoning for every decision",
    category: "ai",
    carlos: "Full reasoning transparency",
    inspectorio: "Black-box AI",
    tradebeyond: "No AI",
  },
  {
    label: "ML Features",
    description: "Number of machine-learning driven data points",
    category: "ai",
    carlos: "847",
    inspectorio: "Unknown",
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
    label: "EU Digital Product Passport",
    description: "Ready for 2027 DPP regulation",
    category: "sustainability",
    carlos: "2027-ready",
    inspectorio: "Limited",
    tradebeyond: "Basic reporting",
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
    label: "Scheme-Agnostic Compliance",
    description: "Works across all compliance schemes",
    category: "platform",
    carlos: true,
    inspectorio: "Single-scheme",
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
    inspectorio: "Not published",
    tradebeyond: "Not published",
  },
];

// ---------- helpers ----------

function ValueCell({ value, isCarlos }: { value: FeatureValue; isCarlos?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-accent-green mx-auto" />
    ) : (
      <X className="h-5 w-5 text-destructive/60 mx-auto" />
    );
  }

  // text values
  const isNegative = ["No AI", "N/A", "Unknown", "Not published", "Black-box AI"].includes(value);
  return (
    <span
      className={
        isCarlos
          ? "font-semibold text-foreground"
          : isNegative
            ? "text-muted-foreground"
            : "text-foreground"
      }
    >
      {value}
    </span>
  );
}

// ---------- component ----------

const ComparePage = () => {
  const [category, setCategory] = useState<string>("all");

  const filtered =
    category === "all"
      ? FEATURES
      : FEATURES.filter((f) => f.category === category);

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-10 max-w-6xl mx-auto space-y-10">
      {/* Hero */}
      <header className="text-center space-y-3">
        <Badge variant="secondary" className="text-xs tracking-wide uppercase">
          Competitive Analysis
        </Badge>
        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight">
          How <span className="text-primary">CARLOS</span> measures up
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          See exactly where CARLOS leads against the two most-compared alternatives in quality &amp; compliance software.
        </p>
      </header>

      {/* Category tabs */}
      <div className="flex justify-center">
        <Tabs value={category} onValueChange={setCategory}>
          <TabsList>
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c.id} value={c.id}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Table */}
      <Card className="overflow-hidden border-border/60">
        <CardContent className="p-0">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-card">
              <TableRow className="border-b-2">
                <TableHead className="w-[260px] text-foreground font-display text-sm">
                  Feature
                </TableHead>
                <TableHead className="text-center bg-primary/5 border-x border-primary/10">
                  <div className="flex items-center justify-center gap-1.5 font-display text-primary font-bold">
                    <Crown className="h-4 w-4" />
                    CARLOS
                  </div>
                </TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">
                  Inspectorio
                </TableHead>
                <TableHead className="text-center text-muted-foreground font-medium">
                  TradeBeyond
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((feature, i) => (
                <TableRow
                  key={feature.label}
                  className={i % 2 === 1 ? "bg-muted/30" : ""}
                >
                  <TableCell>
                    <div>
                      <span className="font-medium text-foreground">
                        {feature.label}
                      </span>
                      {feature.description && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-primary/5 border-x border-primary/10">
                    <ValueCell value={feature.carlos} isCarlos />
                  </TableCell>
                  <TableCell className="text-center">
                    <ValueCell value={feature.inspectorio} />
                  </TableCell>
                  <TableCell className="text-center">
                    <ValueCell value={feature.tradebeyond} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Differentiator callouts */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { stat: "847", label: "ML features powering every decision" },
          { stat: "7.7×", label: "Projected ROI for enterprise clients" },
          { stat: "2027", label: "EU Digital Product Passport ready" },
        ].map((item) => (
          <Card key={item.stat} className="text-center py-6">
            <CardContent className="p-0 space-y-1">
              <span className="text-3xl font-display font-bold text-primary">
                {item.stat}
              </span>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;
