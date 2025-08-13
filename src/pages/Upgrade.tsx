import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/common/SEO";

const Upgrade = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Upgrade – Gliese AI Pro"
        description="Unlock automation, advanced analytics, and priority support with Gliese AI Pro."
      />
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <header className="mb-8 text-center space-y-2">
          <h1 className="text-3xl font-semibold">Upgrade to Gliese AI Pro</h1>
          <p className="text-sm text-muted-foreground">Choose a plan and proceed to a beautiful, secure checkout.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-base">Starter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">$19<span className="text-sm text-muted-foreground">/mo</span></div>
              <ul className="text-sm space-y-2">
                <li>• Basic analytics</li>
                <li>• 3 active campaigns</li>
                <li>• Email support</li>
              </ul>
              <Button className="w-full rounded-full" variant="secondary">Continue</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border ring-2 ring-primary/30">
            <CardHeader>
              <CardTitle className="text-base">Pro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">$49<span className="text-sm text-muted-foreground">/mo</span></div>
              <ul className="text-sm space-y-2">
                <li>• Automation & AI recommendations</li>
                <li>• Unlimited campaigns</li>
                <li>• Priority support</li>
              </ul>
              <Button className="w-full rounded-full">Proceed to payment</Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-base">Enterprise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-semibold">Custom</div>
              <ul className="text-sm space-y-2">
                <li>• SSO & advanced security</li>
                <li>• Dedicated success manager</li>
                <li>• Custom SLAs</li>
              </ul>
              <Button className="w-full rounded-full" variant="outline">Contact sales</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Upgrade;
