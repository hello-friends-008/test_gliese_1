import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./layout/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Money from "./pages/Money";
import Analytics from "./pages/Analytics";
import Marketing from "./pages/Marketing";
import CreateAI from "./pages/CreateAI";
import Ads from "./pages/Ads";
import Profile from "./pages/Profile";
import CreatorSpace from "./pages/CreatorSpace";
import Settings from "./pages/Settings";
import Events from "./pages/Events";
import Notifications from "./pages/Notifications";
import Upgrade from "./pages/Upgrade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Index />} />
              <Route path="money" element={<Money />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="marketing" element={<Marketing />} />
              <Route path="create" element={<CreateAI />} />
              <Route path="ads" element={<Ads />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile" element={<Profile />} />
              <Route path="creator-space" element={<CreatorSpace />} />
              <Route path="settings" element={<Settings />} />
              <Route path="events" element={<Events />} />
              <Route path="upgrade" element={<Upgrade />} />
              {/* Catch-all within layout */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
