import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmptyState } from "@/components/common/EmptyState";
import { BarChart3 as ChartIcon } from "lucide-react";
const rows = [
  { name: "Q3 Lead Gen", type: "Leads", status: "Running", roi: "2.4x", spend: "₹12,400", revenue: "₹29,900", ctr: "3.2%", conv: "4.8%", updated: "2h ago" },
  { name: "Awareness – Video", type: "Awareness", status: "Paused", roi: "0.9x", spend: "₹4,100", revenue: "₹3,650", ctr: "0.9%", conv: "1.1%", updated: "1d ago" },
  { name: "PMax – Fall Launch", type: "Sales", status: "Running", roi: "1.8x", spend: "₹8,900", revenue: "₹16,200", ctr: "2.2%", conv: "3.0%", updated: "Today" },
];

const Analytics = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Analytics – Campaign Performance | Gliese" description="High-level metrics with deep dives: traffic, conversions, audience, competitors, and tests." />
      <h1 className="text-3xl font-semibold">Analytics</h1>

      {/* KPI Summary */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="stat-card"><CardHeader><CardTitle>ROI (This Month)</CardTitle></CardHeader><CardContent>2.3x</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>Total Spend</CardTitle></CardHeader><CardContent>₹25,640</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>Revenue</CardTitle></CardHeader><CardContent>₹58,210</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>Active Campaigns</CardTitle></CardHeader><CardContent>9</CardContent></Card>
      </section>

      {/* Tabs for layered analytics */}
      <Tabs defaultValue="performance">
        <TabsList className="mb-2">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="traffic">Traffic</TabsTrigger>
          <TabsTrigger value="conversions">Conversions</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="competitors">Competitors</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="abtests">A/B Tests</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card className="glass-surface rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base font-medium">Campaigns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <div className="w-full sm:w-64"><Input placeholder="Search campaigns" /></div>
                <Select defaultValue="any">
                  <SelectTrigger className="w-40"><SelectValue placeholder="Type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Type</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="leads">Leads</SelectItem>
                    <SelectItem value="awareness">Awareness</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="any">
                  <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Status</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Campaign</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>ROI</TableHead>
                      <TableHead>Spend</TableHead>
                      <TableHead>Revenue</TableHead>
                      <TableHead>CTR</TableHead>
                      <TableHead>Conv. Rate</TableHead>
                      <TableHead>Last Update</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {rows.map((r) => (
                      <TableRow key={r.name} className="cursor-pointer hover:bg-muted/50">
                        <TableCell className="font-medium">{r.name}</TableCell>
                        <TableCell>{r.type}</TableCell>
                        <TableCell>{r.status}</TableCell>
                        <TableCell>{r.roi}</TableCell>
                        <TableCell>{r.spend}</TableCell>
                        <TableCell>{r.revenue}</TableCell>
                        <TableCell>{r.ctr}</TableCell>
                        <TableCell>{r.conv}</TableCell>
                        <TableCell>{r.updated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">Traffic Sources</CardTitle></CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {['Search','Social','Email','Referral'].map((s) => (
                <div key={s} className="rounded-xl border p-4 bg-card">
                  <p className="text-xs text-muted-foreground">{s}</p>
                  <p className="mt-1 text-2xl font-semibold">—</p>
                  <p className="text-xs text-muted-foreground">Sessions • CTR • Conv.</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversions">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">Conversion Rates</CardTitle></CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {['Landing → Lead','Lead → MQL','MQL → SQL','SQL → Sale'].map((f) => (
                <div key={f} className="rounded-xl border p-4 bg-card">
                  <p className="text-xs text-muted-foreground">{f}</p>
                  <p className="mt-1 text-2xl font-semibold">—</p>
                  <p className="text-xs text-muted-foreground">Trend vs last period</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">Audience Insights</CardTitle></CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {['Demographics','Geo','Device'].map((f) => (
                <div key={f} className="rounded-xl border p-4 bg-card">
                  <p className="text-xs text-muted-foreground">{f}</p>
                  <p className="mt-1 text-sm">Charts and splits</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">Competitor Analysis</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Benchmarks vs industry</li>
                <li>• Share of voice</li>
                <li>• Ad copy trends</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">Custom Reports</CardTitle></CardHeader>
            <CardContent>
              <EmptyState icon={ChartIcon} title="No saved reports" description="Create and save a custom report to see it here." />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abtests">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle className="text-base font-medium">A/B Test Results</CardTitle></CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border p-4 bg-card"><p className="text-xs text-muted-foreground">Variation A</p><p className="mt-1 text-2xl font-semibold">—</p></div>
                <div className="rounded-xl border p-4 bg-card"><p className="text-xs text-muted-foreground">Variation B</p><p className="mt-1 text-2xl font-semibold">—</p></div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Analytics;
