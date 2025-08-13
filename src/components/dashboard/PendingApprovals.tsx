import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface ApprovalItem {
  id: string;
  title: string;
  type: string;
  platform: string;
}

const approvals: ApprovalItem[] = [
  { id: "1", title: "Instagram Carousel – Q3 Launch", type: "Creative", platform: "Meta" },
  { id: "2", title: "Google Ads – Brand Keywords", type: "Ad Group", platform: "Google" },
  { id: "3", title: "Newsletter – August Highlights", type: "Email", platform: "Email" },
];

const PendingApprovals = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CheckCircle2 className="size-4" />
          <CardTitle className="text-base font-medium">Pending Approvals</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {approvals.map((a) => (
          <div key={a.id} className="rounded-xl border p-3 flex items-center justify-between bg-card">
            <div>
              <p className="text-sm font-medium">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.type} • {a.platform}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="secondary" className="rounded-full">Approve</Button>
              <Button size="icon" variant="outline" className="rounded-full" aria-label="Request changes">
                <XCircle className="size-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PendingApprovals;
