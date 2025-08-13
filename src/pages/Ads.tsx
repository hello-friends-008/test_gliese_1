import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Ads = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Ads – Meta & Google | Gliese" description="Run and manage paid advertising campaigns across Meta and Google." />
      <h1 className="text-3xl font-semibold">Ads</h1>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="glass-surface"><CardHeader><CardTitle>Meta</CardTitle></CardHeader><CardContent>Facebook & Instagram Ads</CardContent></Card>
        <Card className="glass-surface"><CardHeader><CardTitle>Google</CardTitle></CardHeader><CardContent>Search & Performance Max</CardContent></Card>
        <Card className="glass-surface"><CardHeader><CardTitle>Budgets</CardTitle></CardHeader><CardContent>Cross-channel allocation</CardContent></Card>
      </div>
    </main>
  );
};

export default Ads;
