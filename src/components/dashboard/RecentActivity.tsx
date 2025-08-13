import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity as ActivityIcon, Check, Clock, Wallet } from "lucide-react";

const items = [
  { id: "1", text: "New campaign suggestion ready for review", time: "2h ago", icon: <ActivityIcon className="size-4" /> },
  { id: "2", text: "Budget reallocated: +$500 to Lead Gen", time: "6h ago", icon: <Wallet className="size-4" /> },
  { id: "3", text: "Ad set CTR improved by 12% this week", time: "Yesterday", icon: <Check className="size-4" /> },
  { id: "4", text: "Queued email newsletter for Friday", time: "2d ago", icon: <Clock className="size-4" /> },
];

const RecentActivity = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <ActivityIcon className="size-4" />
          <CardTitle className="text-base font-medium">Recent Activity</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((i) => (
            <li key={i.id} className="flex items-start gap-3 rounded-xl border p-3 bg-card">
              <div className="text-primary mt-0.5">{i.icon}</div>
              <div className="flex-1">
                <p className="text-sm">{i.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{i.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
