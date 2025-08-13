import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Megaphone, Play, Pause, Rocket } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  objective: string;
  platforms: ("Meta" | "Google" | "Email")[];
  status: "Active" | "Paused";
  spend: string;
  roi: string;
  progress: number;
}

const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Q3 Product Launch",
    objective: "Sales / Traffic",
    platforms: ["Meta", "Google"],
    status: "Active",
    spend: "₹12,840",
    roi: "214%",
    progress: 72,
  },
  {
    id: "2",
    name: "Always-On Lead Gen",
    objective: "Lead Generation",
    platforms: ["Meta", "Email"],
    status: "Active",
    spend: "₹8,210",
    roi: "178%",
    progress: 54,
  },
  {
    id: "3",
    name: "Brand Awareness Blitz",
    objective: "Brand Awareness",
    platforms: ["Meta"],
    status: "Paused",
    spend: "₹3,420",
    roi: "—",
    progress: 31,
  },
];

const platformBadge = (p: Campaign["platforms"][number]) => (
  <Badge key={p} variant="secondary" className="rounded-full">
    {p}
  </Badge>
);

const ActiveCampaigns = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Megaphone className="size-4" />
          <CardTitle className="text-base font-medium">Active Campaigns</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border p-4 hover-scale transition-shadow hover:shadow-elevated bg-card"
          >
            <div className="flex flex-wrap items-center gap-3 justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Rocket className="size-4 text-primary" />
                  <h3 className="font-medium truncate max-w-[220px] sm:max-w-[320px]">{c.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{c.objective}</p>
                <div className="mt-2 flex flex-wrap gap-2">{c.platforms.map(platformBadge)}</div>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Spend</p>
                  <p className="font-semibold">{c.spend}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ROI</p>
                  <p className="font-semibold">{c.roi}</p>
                </div>
                <div className="hidden sm:flex gap-2">
                  {c.status === "Active" ? (
                    <Badge variant="default" className="rounded-full">Active</Badge>
                  ) : (
                    <Badge variant="outline" className="rounded-full">Paused</Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="secondary" className="rounded-full">View</Button>
                  <Button size="icon" variant="outline" className="rounded-full" aria-label={c.status === "Active" ? "Pause" : "Resume"}>
                    {c.status === "Active" ? <Pause className="size-4" /> : <Play className="size-4" />}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Progress value={c.progress} />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{c.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActiveCampaigns;
