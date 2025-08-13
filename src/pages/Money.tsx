import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Money = () => {
  return (
    <main className="p-6 space-y-6">
      <SEO title="Payments – Overview, Transactions & Fees | Gliese" description="Track balances, earnings/spend, transactions, fees, and payout/billing settings." />
      <h1 className="text-3xl font-semibold">Payments</h1>

      {/* 1) Overview */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Card className="stat-card"><CardHeader><CardTitle>Current Balance</CardTitle></CardHeader><CardContent>$12,450</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>This Month</CardTitle></CardHeader><CardContent>Earnings $8,120</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>Pending</CardTitle></CardHeader><CardContent>2 payouts</CardContent></Card>
        <Card className="stat-card"><CardHeader><CardTitle>Last Payment</CardTitle></CardHeader><CardContent>Jul 28 • $2,400</CardContent></Card>
      </section>

      {/* 2) Transaction History */}
      <section className="glass-surface rounded-2xl">
        <div className="flex flex-wrap items-center gap-3 p-4 border-b">
          <Select defaultValue="this-month">
            <SelectTrigger className="w-40"><SelectValue placeholder="Month" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-40"><SelectValue placeholder="Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="earning">Earning</SelectItem>
              <SelectItem value="spend">Ad Spend</SelectItem>
              <SelectItem value="fee">Fee</SelectItem>
              <SelectItem value="withdrawal">Withdrawal</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="any">
            <SelectTrigger className="w-40"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <div className="ml-auto text-xs text-muted-foreground">Export: CSV · PDF</div>
        </div>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[{d:"Aug 05",t:"Earning",desc:"UGC Project – Summer",amt:"+$1,200",s:"Completed"},{d:"Aug 03",t:"Ad Spend",desc:"Google Ads – Lead Gen",amt:"-$420",s:"Completed"},{d:"Aug 02",t:"Fee",desc:"Platform Fee 10%",amt:"-$120",s:"Completed"},{d:"Aug 01",t:"Withdrawal",desc:"Bank Transfer",amt:"-$2,000",s:"Pending"}].map((r,i)=> (
                <TableRow key={i}>
                  <TableCell>{r.d}</TableCell>
                  <TableCell>{r.t}</TableCell>
                  <TableCell>{r.desc}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.amt}</TableCell>
                  <TableCell>{r.s}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* 3) Earnings (Creators) & 4) Spending (Clients) */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card className="glass-surface rounded-2xl">
          <CardHeader><CardTitle>Earnings (Creators)</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border p-3 bg-card">Breakdown by Source • Projects • Marketplace • Events</div>
            <div className="rounded-xl border p-3 bg-card">Commission & Fees • Platform fee shown separately</div>
            <div className="rounded-xl border p-3 bg-card">Payout Methods • Bank • PayPal • UPI</div>
          </CardContent>
        </Card>
        <Card className="glass-surface rounded-2xl">
          <CardHeader><CardTitle>Spending (Clients)</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="rounded-xl border p-3 bg-card">Campaign Spend Summary • by campaign/channel/date</div>
            <div className="rounded-xl border p-3 bg-card">Budget Tracking • Remaining vs Allocated</div>
            <div className="rounded-xl border p-3 bg-card">Ad Platform Spend Sync • Meta/Google</div>
          </CardContent>
        </Card>
      </section>

      {/* 5) Fees & Charges, 6) Payout & Billing Settings (summaries) */}
      <section className="grid gap-4 md:grid-cols-2">
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Fees & Charges</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Transparent log of platform fees and adjustments.</CardContent></Card>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Payout & Billing</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Manage payment methods, withdrawals, and invoices.</CardContent></Card>
      </section>

      {/* Billing, Methods, Plans, Usage, Budget, Alerts, Refunds */}
      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Billing & Invoices</CardTitle></CardHeader><CardContent className="text-sm">Download invoices for tax compliance.
        </CardContent></Card>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Payment Methods</CardTitle></CardHeader><CardContent className="text-sm">Credit/Debit, UPI, PayPal • Default method</CardContent></Card>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Subscription Plans</CardTitle></CardHeader><CardContent className="text-sm">Plan, usage limits, upgrade options</CardContent></Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Usage Tracking</CardTitle></CardHeader><CardContent className="text-sm">API calls, credits, monthly usage</CardContent></Card>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Budget Management</CardTitle></CardHeader><CardContent className="text-sm">Set budgets, alerts, thresholds</CardContent></Card>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Payment Alerts</CardTitle></CardHeader><CardContent className="text-sm">Overdue notices, low balance, anomalies</CardContent></Card>
      </section>

      <section>
        <Card className="glass-surface rounded-2xl"><CardHeader><CardTitle>Refunds & Disputes</CardTitle></CardHeader><CardContent className="text-sm">Track requests, statuses, and resolutions</CardContent></Card>
      </section>
    </main>
  );
};

export default Money;
