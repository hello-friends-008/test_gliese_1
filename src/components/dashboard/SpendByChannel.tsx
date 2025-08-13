import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartTooltip } from "@/components/ui/chart";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const data = [
  { channel: "Google", value: 44, fill: "var(--color-google)" },
  { channel: "LinkedIn", value: 16, fill: "var(--color-linkedin)" },
  { channel: "Instagram", value: 22, fill: "var(--color-instagram)" },
  { channel: "Facebook", value: 18, fill: "var(--color-facebook)" },
];

const config = {
  google: { label: "Google", color: "hsl(var(--chart-1))" },
  linkedin: { label: "LinkedIn", color: "hsl(var(--chart-2))" },
  instagram: { label: "Instagram", color: "hsl(var(--chart-3))" },
  facebook: { label: "Facebook", color: "hsl(var(--chart-4))" },
} as const;

const SpendByChannel = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Spend by Channel</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <ChartTooltip cursor={false} />
              <ChartLegend />
              <Pie data={data} dataKey="value" nameKey="channel" innerRadius={60} outerRadius={90} paddingAngle={4}>
                {data.map((entry, index) => (
                  <Cell key={`slice-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SpendByChannel;
