import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const data = [
  { day: "Mon", spend: 1200, revenue: 2280, conversions: 24, roi: 1.9 },
  { day: "Tue", spend: 1350, revenue: 2835, conversions: 28, roi: 2.1 },
  { day: "Wed", spend: 980, revenue: 1666, conversions: 19, roi: 1.7 },
  { day: "Thu", spend: 1600, revenue: 3680, conversions: 34, roi: 2.3 },
  { day: "Fri", spend: 1450, revenue: 2900, conversions: 31, roi: 2.0 },
  { day: "Sat", spend: 900, revenue: 1350, conversions: 15, roi: 1.5 },
  { day: "Sun", spend: 1100, revenue: 1980, conversions: 21, roi: 1.8 },
];

const config = {
  spend: {
    label: "Spend",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
};

const PerformanceOverview = () => {
  return (
    <Card className="glass-surface rounded-2xl animate-fade-in">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="min-h-[300px] w-full" config={config}>
          <BarChart data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} strokeOpacity={0.2} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="spend" fill="hsl(var(--chart-1))" radius={[6,6,0,0]} />
            <Bar dataKey="revenue" fill="hsl(var(--chart-2))" radius={[6,6,0,0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceOverview;
