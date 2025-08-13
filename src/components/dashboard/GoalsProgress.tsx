import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const goals = [
  { id: "1", label: "Monthly Revenue $60k", value: 68 },
  { id: "2", label: "Leads 1,500", value: 80 },
  { id: "3", label: "CAC <$12", value: 45 },
  { id: "4", label: "Email list +2,000", value: 52 },
];

const GoalsProgress = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Goals Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((g) => (
          <div key={g.id}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{g.label}</span>
              <span className="font-medium">{g.value}%</span>
            </div>
            <Progress value={g.value} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GoalsProgress;
