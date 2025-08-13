import { SEO } from "@/components/common/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import PerformanceOverview from "@/components/dashboard/PerformanceOverview";
import ActiveCampaigns from "@/components/dashboard/ActiveCampaigns";
import PendingApprovals from "@/components/dashboard/PendingApprovals";
import AIRecommendations from "@/components/dashboard/AIRecommendations";
import RecentActivity from "@/components/dashboard/RecentActivity";
import GoalsProgress from "@/components/dashboard/GoalsProgress";


const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <SEO title="Gliese AI Dashboard – High-Impact Overview" description="Visual performance, active campaigns, AI actions, and alerts in one place." />

      <div>
        <section className="px-6 py-6 space-y-6 min-w-0">
        <h1 className="text-3xl font-semibold">Dashboard</h1>

        {/* KPIs */}
        <section aria-labelledby="kpi" className="grid gap-4 sm:grid-cols-3">
          <Card className="stat-card">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">ROI This Month</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">2.4x</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400">+0.3x</span>
              </div>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">Total Revenue Generated</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-semibold">₹1,28,420</span>
                <span className="text-xs text-emerald-600 dark:text-emerald-400">+12%</span>
              </div>
            </CardContent>
          </Card>
          <Link to="/analytics" aria-label="Go to Analytics from Active Campaigns">
            <Card className="stat-card hover:bg-accent/60 transition-colors cursor-pointer">
              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground">Active Campaigns</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-2xl font-semibold">8</span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">+1</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* Charts */}
        <section className="grid gap-6">
          <div>
            <PerformanceOverview />
          </div>
        </section>

        {/* Campaigns + Approvals */}
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <ActiveCampaigns />
            <AIRecommendations />
          </div>
          <div className="space-y-6">
            <PendingApprovals />
            <GoalsProgress />
          </div>
        </section>

      </section>
      </div>
    </main>
  );
};

export default Index;
