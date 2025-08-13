import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Settings | Gliese" description="Configure account, integrations, automation, and security." />
      <h1 className="text-3xl font-semibold">Settings</h1>
      <Tabs defaultValue="account">
        <TabsList className="mb-2 flex flex-wrap gap-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="business">Business Profile</TabsTrigger>
          <TabsTrigger value="billing">Payments & Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notification Preferences</TabsTrigger>
          <TabsTrigger value="automation">AI & Automation</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="grid gap-4 lg:grid-cols-2">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Profile Details</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Name, email, business</CardContent></Card>
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Login & Security</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Password, 2FA, devices</CardContent></Card>
          <Card className="glass-surface rounded-2xl lg:col-span-2"><CardHeader><CardTitle>Connected Accounts</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Google Ads, Meta, Email, Analytics</CardContent></Card>
        </TabsContent>

        <TabsContent value="business"><Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Business Profile</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Company info, logo, brand colors</CardContent></Card></TabsContent>

        <TabsContent value="billing" className="grid gap-4 lg:grid-cols-2">
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Payment Methods</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Cards, UPI, PayPal</CardContent></Card>
          <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Payout Method</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Bank / PayPal / Stripe</CardContent></Card>
          <Card className="glass-surface rounded-2xl lg:col-span-2"><CardHeader><CardTitle>Invoices & Billing</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">History & tax info</CardContent></Card>
        </TabsContent>

        <TabsContent value="notifications"><Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Notification Preferences</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Channels and frequency</CardContent></Card></TabsContent>

        <TabsContent value="automation"><Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Automation Rules</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Autonomy level, budget limits</CardContent></Card></TabsContent>

        <TabsContent value="privacy"><Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Privacy & Security</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Data permissions, exports</CardContent></Card></TabsContent>
      </Tabs>
    </main>
  );
};

export default Settings;
