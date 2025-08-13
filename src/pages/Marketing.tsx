import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";

const sections: Record<string, { title: string; items: string[] }> = {
  overview: {
    title: "Marketing Overview",
    items: [
      "All marketing campaigns overview",
      "Multi-channel strategy management",
      "Campaign templates",
      "Marketing calendar",
      "Cross-platform coordination",
      "Performance comparison",
      "Strategy recommendations",
    ],
  },
  "growth": {
    title: "Growth",
    items: [
      "Growth metrics tracking",
      "Scaling strategies",
      "Market expansion plans",
      "Growth experiments",
      "Performance benchmarks",
      "Growth recommendations",
      "Competitive positioning",
    ],
  },
  "lead-generation": {
    title: "Lead Generation",
    items: [
      "Lead capture forms",
      "Landing pages",
      "Lead scoring",
      "CRM integration",
      "Nurture sequences",
      "Lead magnets",
      "Conversion funnels",
      "Lead quality analysis",
    ],
  },
  "brand-awareness": {
    title: "Brand Awareness",
    items: [
      "Brand mention tracking",
      "Reach & impressions",
      "Share of voice",
      "Brand sentiment analysis",
      "PR campaign management",
      "Influencer partnerships",
      "Content distribution",
      "Brand health metrics",
    ],
  },
  "sales-traffic": {
    title: "Sales / Traffic",
    items: [
      "Sales funnels",
      "E-commerce optimization",
      "Traffic analysis",
      "Conversion optimization",
      "Revenue tracking",
      "Customer journey mapping",
      "Sales performance",
      "Traffic sources breakdown",
    ],
  },
};

const Marketing = () => {
  const [params, setParams] = useSearchParams();
  const view = (params.get("view") || "overview") as keyof typeof sections;
  const current = sections[view] ?? sections.overview;

  return (
    <main className="p-6 space-y-6">
      <SEO title={`${current.title} – Marketing | Gliese AI`} description="Plan, coordinate, and measure multi-channel marketing with clarity." />
      <h1 className="text-3xl font-semibold">{current.title}</h1>

      {/* Modern chip filter instead of page switcher */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(sections).map(([key, sec]) => (
          <button
            key={key}
            className={`chip ${view === (key as keyof typeof sections) ? "bg-accent text-foreground border-transparent" : ""}`}
            onClick={() => setParams(new URLSearchParams([["view", key]]))}
            aria-pressed={view === key}
          >
            {sec.title}
          </button>
        ))}
      </div>

      {view === "overview" && (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="stat-card"><CardHeader><CardTitle>Growth</CardTitle></CardHeader><CardContent>Scale your audience</CardContent></Card>
          <Card className="stat-card"><CardHeader><CardTitle>Lead Generation</CardTitle></CardHeader><CardContent>Capture qualified leads</CardContent></Card>
          <Card className="stat-card"><CardHeader><CardTitle>Brand Awareness</CardTitle></CardHeader><CardContent>Increase visibility</CardContent></Card>
          <Card className="stat-card"><CardHeader><CardTitle>Sales / Traffic</CardTitle></CardHeader><CardContent>Drive conversions</CardContent></Card>
        </div>
      )}

      <section className="glass-surface rounded-2xl animate-enter">
        <CardHeader>
          <CardTitle className="text-base font-medium">Key Capabilities</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 text-sm">
            {current.items.map((item) => (
              <li key={item} className="rounded-xl border p-3 bg-card">{item}</li>
            ))}
          </ul>
        </CardContent>
      </section>
    </main>
  );
};

export default Marketing;
