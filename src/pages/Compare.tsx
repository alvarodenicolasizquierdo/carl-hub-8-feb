import { useState, useMemo } from "react";
import { Check, X, Crown, Trophy } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CompareValueCell from "@/components/compare/CompareValueCell";
import { FEATURES, CATEGORIES, type CategoryId } from "@/components/compare/compareData";

const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI & Machine Learning",
  sustainability: "Sustainability & Compliance",
  platform: "Core Platform",
};

const ComparePage = () => {
  const [category, setCategory] = useState<string>("all");

  const grouped = useMemo(() => {
    if (category !== "all") {
      return [{ category: category as CategoryId, features: FEATURES.filter((f) => f.category === category) }];
    }
    const order: CategoryId[] = ["ai", "sustainability", "platform"];
    return order.map((cat) => ({
      category: cat,
      features: FEATURES.filter((f) => f.category === cat),
    }));
  }, [category]);

  // Win count: features where CARLOS is true or a non-negative string
  const totalFeatures = FEATURES.length;
  const carlosWins = FEATURES.filter((f) => {
    if (typeof f.carlos === "boolean") return f.carlos;
    return !["No AI", "N/A", "Unknown", "Not published"].includes(f.carlos);
  }).length;

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
                <TableHead className="text-center bg-primary/5 border-x border-primary/20 ring-1 ring-primary/10 rounded-t-lg">
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
              {grouped.map((group) => (
                <>
                  {/* Category section header */}
                  {category === "all" && (
                    <TableRow key={`header-${group.category}`} className="bg-muted/50 hover:bg-muted/50">
                      <TableCell colSpan={4} className="py-2.5 px-4">
                        <span className="font-display font-bold text-sm text-foreground uppercase tracking-wide">
                          {CATEGORY_LABELS[group.category]}
                        </span>
                      </TableCell>
                    </TableRow>
                  )}
                  {group.features.map((feature, i) => (
                    <TableRow
                      key={feature.label}
                      className={i % 2 === 1 ? "bg-muted/30" : ""}
                    >
                      <TableCell>
                        <div>
                          <span className="font-medium text-foreground">{feature.label}</span>
                          {feature.description && (
                            <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-center bg-primary/5 border-x border-primary/20">
                        <CompareValueCell value={feature.carlos} caveat={feature.carlosCaveat} isCarlos />
                      </TableCell>
                      <TableCell className="text-center">
                        <CompareValueCell value={feature.inspectorio} caveat={feature.inspectorioCaveat} />
                      </TableCell>
                      <TableCell className="text-center">
                        <CompareValueCell value={feature.tradebeyond} caveat={feature.tradebeyondCaveat} />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow className="bg-primary/5 hover:bg-primary/5">
                <TableCell className="font-display font-bold text-foreground">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    Summary
                  </div>
                </TableCell>
                <TableCell className="text-center bg-primary/10 border-x border-primary/20 font-display font-bold text-primary">
                  Leads in {carlosWins} of {totalFeatures}
                </TableCell>
                <TableCell className="text-center text-muted-foreground text-sm">—</TableCell>
                <TableCell className="text-center text-muted-foreground text-sm">—</TableCell>
              </TableRow>
            </TableFooter>
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
              <span className="text-3xl font-display font-bold text-primary">{item.stat}</span>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ComparePage;
