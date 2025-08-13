import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Events – Create & Host with AI | Gliese" description="1‑click create & host events powered by AI; connect clients and creators." />
      <h1 className="text-3xl font-semibold">Events</h1>
      <Card className="glass-surface">
        <CardHeader><CardTitle>Host an Event</CardTitle></CardHeader>
        <CardContent>Start from your business profile and we’ll guide you end‑to‑end.</CardContent>
      </Card>
    </main>
  );
};

export default Events;
