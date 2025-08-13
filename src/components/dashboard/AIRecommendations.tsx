import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Lightbulb } from "lucide-react";

const suggestions = [
  {
    id: "1",
    title: "Reallocate 15% budget from Brand to Lead Gen",
    impact: "Projected +9% conversions this week",
  },
  {
    id: "2",
    title: "Spin up a Google Performance Max for Q3 Launch",
    impact: "Faster learning with existing creative set",
  },
  {
    id: "3",
    title: "Schedule 3 creator posts for Friday",
    impact: "Aligns with peak engagement window (5–7pm)",
  },
];

const AIRecommendations = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Sparkles className="size-4" />
          <CardTitle className="text-base font-medium">AI Recommendations</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {suggestions.map((s) => (
          <div key={s.id} className="rounded-xl border p-3 bg-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="size-4 text-primary" />
                  <p className="text-sm font-medium">{s.title}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{s.impact}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Button size="sm" variant="secondary" className="rounded-full">Apply</Button>
                <Button size="sm" variant="outline" className="rounded-full">Dismiss</Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AIRecommendations;
