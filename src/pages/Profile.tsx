import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Profile – Business Foundation | Gliese" description="Define company, audience, brand, competitors, integrations, metrics, and preferences." />
      <h1 className="text-3xl font-semibold">Profile</h1>

      <Tabs defaultValue="company">
        <TabsList className="mb-2 flex flex-wrap gap-2">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="audience">Target Audience</TabsTrigger>
          <TabsTrigger value="brand">Brand Guidelines</TabsTrigger>
          <TabsTrigger value="competition">Competition</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="metrics">Business Metrics</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="grid gap-4 lg:grid-cols-2">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle>Company Info</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Input placeholder="Business name" />
              <Textarea placeholder="Business description" />
              <div className="grid gap-3 sm:grid-cols-2">
                <Input placeholder="Industry" />
                <Input placeholder="Company size" />
                <Input placeholder="Location / Markets" />
                <Input placeholder="Website" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Input placeholder="Contact email" />
                <Input placeholder="Time zone" />
              </div>
            </CardContent>
          </Card>
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle>Products / Services</CardTitle></CardHeader>
            <CardContent>
              <Textarea placeholder="Key products/services" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience">
          <Card className="glass-surface rounded-2xl">
            <CardHeader><CardTitle>Target Audience</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Textarea placeholder="Primary customer demographics" />
              <Textarea placeholder="Customer personas & profiles" />
              <Textarea placeholder="Pain points & buying behavior" />
              <Textarea placeholder="Preferred channels & journey mapping" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="brand" className="grid gap-4 lg:grid-cols-2">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Brand Assets</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">
            <Input placeholder="Logo URL" />
            <Input placeholder="Color palette (hex/hsl)" />
            <Input placeholder="Typography / Fonts" />
          </CardContent></Card>
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Voice & Tone</CardTitle></CardHeader><CardContent>
            <Textarea placeholder="Brand voice, tone, messaging" />
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="competition" className="grid gap-4 lg:grid-cols-2">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Competitors</CardTitle></CardHeader><CardContent>
            <Textarea placeholder="Main competitors list" />
          </CardContent></Card>
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Positioning</CardTitle></CardHeader><CardContent>
            <Textarea placeholder="Strengths, weaknesses, differentiation, pricing" />
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Connected Platforms</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">
            <Input placeholder="Social accounts" />
            <Input placeholder="CRM / Email marketing" />
            <Input placeholder="Analytics tools" />
            <Input placeholder="E-commerce / Payments" />
            <Input placeholder="Ad accounts" />
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="metrics" className="grid gap-4 lg:grid-cols-2">
          <Card className="stat-card stat-accent-primary"><CardHeader><CardTitle>Monthly Revenue</CardTitle></CardHeader><CardContent>$ —</CardContent></Card>
          <Card className="stat-card stat-accent-secondary"><CardHeader><CardTitle>CAC</CardTitle></CardHeader><CardContent>$ —</CardContent></Card>
          <Card className="stat-card stat-accent-accent"><CardHeader><CardTitle>LTV</CardTitle></CardHeader><CardContent>$ —</CardContent></Card>
          <Card className="stat-card"><CardHeader><CardTitle>Conversion Rate</CardTitle></CardHeader><CardContent>—%</CardContent></Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Automation & Preferences</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">
            <Input placeholder="Approval settings" />
            <Input placeholder="Reporting frequency" />
            <Input placeholder="Communication channels" />
            <Input placeholder="Risk tolerance & objectives" />
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Profile;
