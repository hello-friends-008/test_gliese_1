import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CreatorSpace = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Creator Space – Marketplace | Gliese" description="Connect creators and clients for campaigns and collaborations." />
      <h1 className="text-3xl font-semibold">Creator Space</h1>
      <Card className="glass-surface">
        <CardHeader><CardTitle>Marketplace</CardTitle></CardHeader>
        <CardContent>Discover and collaborate with creators.</CardContent>
      </Card>
    </main>
  );
};

export default CreatorSpace;
