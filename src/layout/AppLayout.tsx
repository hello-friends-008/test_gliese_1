import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarMenuSub,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Home,
  Wallet,
  BarChart3,
  Rocket,
  Wand2,
  Megaphone,
  UserCircle2,
  Users,
  Settings as SettingsIcon,
  CalendarClock,
  Sparkles,
  Bell,
  ChevronDown,
} from "lucide-react";
import mammothLogo from "@/assets/mammoth-logo.png";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/money", label: "Payments", icon: Wallet },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/marketing", label: "Marketing", icon: Rocket },
  { to: "/create", label: "Create (AI)", icon: Wand2 },
  { to: "/ads", label: "Ads", icon: Megaphone },
  { to: "/events", label: "Events", icon: CalendarClock },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/profile", label: "Profile", icon: UserCircle2 },
  { to: "/creator-space", label: "Creator Space", icon: Users },
  { to: "/settings", label: "Settings", icon: SettingsIcon },
];

const AppLayout = () => {
  const location = useLocation();
  const isActive = (to: string) =>
    location.pathname === to || (to !== "/" && location.pathname.startsWith(to));
  const [marketingOpen, setMarketingOpen] = useState(false);
  const marketingActive = isActive("/marketing");
  const marketingMenuOpen = marketingActive || marketingOpen;
  
  return (
    <SidebarProvider>
      <Sidebar variant="inset" collapsible="offcanvas">
        <SidebarHeader>
          <Link to="/" className="flex items-center gap-2 px-2 py-1.5">
            <img src={mammothLogo} alt="Gliese AI mammoth logo" className="h-7 w-7 rounded-md" loading="lazy" />
            <span className="text-lg font-semibold">Gliese AI</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="overflow-y-auto no-scrollbar">
          <SidebarGroup>
            <SidebarGroupLabel className="text-sm">Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map(({ to, label, icon: Icon }) => {
                  if (to === "/marketing") {
                    return (
                      <SidebarMenuItem key={to}>
                        <SidebarMenuButton
                          asChild
                          isActive={marketingActive}
                          size="lg"
                          className="rounded-full text-base [&>svg]:size-5"
                          onClick={(e) => {
                            e.preventDefault();
                            setMarketingOpen((o) => !o);
                          }}
                        >
                          <NavLink to={to} className="flex items-center gap-2">
                            <Icon className="shrink-0 size-5" />
                            <span>Marketing</span>
                            <ChevronDown className={cn("ml-auto size-4 transition-transform", marketingMenuOpen && "rotate-180")} />
                          </NavLink>
                        </SidebarMenuButton>
                        {marketingMenuOpen && (
                          <SidebarMenuSub>
                            {[
                              { label: "Growth", key: "growth" },
                              { label: "Lead Generation", key: "lead-generation" },
                              { label: "Brand Awareness", key: "brand-awareness" },
                              { label: "Sales / Traffic", key: "sales-traffic" },
                            ].map((s) => (
                              <SidebarMenuSubButton asChild key={s.key} isActive={location.search.includes(s.key)}>
                                <NavLink to={`/marketing?view=${s.key}`}>
                                  <span>{s.label}</span>
                                </NavLink>
                              </SidebarMenuSubButton>
                            ))}
                          </SidebarMenuSub>
                        )}
                      </SidebarMenuItem>
                    );
                  }
                  return (
                    <SidebarMenuItem key={to}>
                      <SidebarMenuButton asChild isActive={isActive(to)} size="lg" className="rounded-full text-base [&>svg]:size-5">
                        <NavLink to={to} className="flex items-center gap-2">
                          <Icon className="shrink-0 size-5" />
                          <span>{label}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="mx-2 my-3 rounded-2xl border p-4 bg-card">
              <div className="flex items-start gap-3">
                <Sparkles className="size-5 text-primary" />
                <div className="flex-1">
                  <div className="text-sm font-semibold">Upgrade to Gliese AI Pro</div>
                  <p className="text-xs text-muted-foreground mt-1">Automation, cross-channel optimization, and priority support.</p>
                  <Button asChild variant="default" size="sm" className="mt-3 w-full rounded-full">
                    <Link to="/upgrade">Upgrade</Link>
                  </Button>
                </div>
              </div>
          </div>

        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex min-h-screen flex-col overflow-x-hidden">
        <header className="sticky top-0 z-10 border-b bg-background/60 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="flex-1 max-w-none">
              <SidebarInput placeholder="Search campaigns, creators, or insights… ⌘K" className="rounded-full h-11 text-base px-5" />
            </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="AI actions">
                  <Link to="/create">
                    <Wand2 className="size-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="Announcements">
                  <Link to="/events">
                    <Megaphone className="size-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="Notifications">
                  <Link to="/notifications">
                    <Bell className="size-5" />
                  </Link>
                </Button>
                <Link to="/profile" className="ml-1">
                  <div className="relative p-0.5 rounded-full ring-2 ring-primary/40">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/images/avatar-02.jpg" alt="Your profile" />
                      <AvatarFallback>YO</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0.5 right-0.5 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-background" />
                  </div>
                </Link>
              </div>
          </div>
        </header>
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <Outlet />
          </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AppLayout;
