import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/common/SEO";
import EmptyState from "@/components/common/EmptyState";
import { useMemo, useState } from "react";
import { BellRing } from "lucide-react";

const items = [
  { id: 1, title: "Budget nearing limit on Lead Gen", time: "2m ago", type: "Campaign", priority: "Critical" },
  { id: 2, title: "Payment received: $1,200", time: "1h ago", type: "Finance", priority: "Important" },
  { id: 3, title: "Ad account reconnected – Google Ads", time: "Today", type: "System", priority: "Info" },
  { id: 4, title: "2 approvals pending", time: "Today", type: "Campaign", priority: "Important" },
];

const filters = ["All", "Campaign", "Finance", "System"] as const;
type Filter = typeof filters[number];

const Notifications = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const list = useMemo(() => (filter === "All" ? items : items.filter((i) => i.type === filter)), [filter]);

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Notifications – Gliese" description="Smart, prioritized alerts and updates." />
      <section className="px-6 py-6 space-y-6">
        <h1 className="text-3xl font-semibold">Notifications</h1>
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle className="text-base font-medium">Center</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-3 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`chip ${filter === f ? "bg-accent text-foreground border-transparent" : ""}`}
                  aria-pressed={filter === f}
                >
                  {f}
                </button>
              ))}
            </div>

            {list.length ? (
              <ul className="space-y-3 animate-fade-in">
                {list.map((n) => (
                  <li
                    key={n.id}
                    className="flex items-start justify-between rounded-xl border p-3 transition-colors hover:bg-muted/50"
                  >
                    <div className="space-y-1">
                      <span className="text-sm font-medium">{n.title}</span>
                      <div className="text-xs text-muted-foreground">
                        {n.type} • {n.priority}
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{n.time}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState icon={BellRing} title="No notifications" description="You're all caught up." />
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Notifications;
