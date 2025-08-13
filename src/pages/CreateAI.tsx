import React from "react";
import { SEO } from "@/components/common/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { AIChatBox } from "@/components/createai/AIChatBox";
import { ActionValue } from "@/components/createai/ActionSelector";
import { DraftCanvas, DraftData } from "@/components/createai/DraftCanvas";
import { IntegrationCard } from "@/components/createai/IntegrationCard";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const CreateAI: React.FC = () => {
  // Persist connection state locally for now (real OAuth will use Supabase Edge Functions)
  const [connections, setConnections] = React.useState({ linkedin: false, instagram: false, x: false });
  const [action, setAction] = React.useState<ActionValue>("post");
  const [draft, setDraft] = React.useState<DraftData | null>(null);
  const [openCanvas, setOpenCanvas] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("gliese:createai:connections");
    if (saved) setConnections(JSON.parse(saved));
  }, []);

  const updateConnections = (next: Partial<typeof connections>) => {
    setConnections((prev) => {
      const merged = { ...prev, ...next };
      localStorage.setItem("gliese:createai:connections", JSON.stringify(merged));
      return merged;
    });
  };

  const handleDraftGenerated = (d: DraftData) => {
    setDraft(d);
    setOpenCanvas(true);
  };

  const handleApprove = async () => {
    setOpenCanvas(false);
    if (!draft) return;
    try {
      const { data, error } = await supabase.functions.invoke("composio-publish", { body: { ...draft, authConfigId: "ac_WKTKKPxQU_Di", connectionAccountId: "ca_beBLx5Tk9sYu", target: "profile" } });
      if (error) throw error as any;
      if (data?.ok) {
        toast({ title: `Published to ${draft.platform}`, description: "Successfully posted via Composio." });
      } else {
        // Log full payload for debugging
        console.error("Composio publish debug", data);
        const last = data?.attempts?.slice?.(-1)?.[0];
        const url = last?.url || "";
        const status = last?.status ?? "ERR";
        const msg = (last?.preview?.message || last?.networkError || (typeof last?.preview === "string" ? last.preview : JSON.stringify(last?.preview || data?.error || data?.details || data))).toString().slice(0, 180);
        const summary = `${status} ${url.replace?.(/^https?:\/\//, "")} - ${msg}`;
        toast({ title: `Publish status: ${data?.status || "failed"}`, description: summary });
      }
    } catch (e: any) {
      toast({ title: "Publish failed", description: e?.message || "Please try again." });
    } finally {
      setDraft(null);
    }
  };

  return (
    <main className="p-6 space-y-6">
      <SEO title="Create with AI | Gliese AI" description="Compose, schedule, and send posts, DMs, and emails via AI. Connect LinkedIn, Instagram, and X to publish from one place." />
      <h1 className="text-3xl font-semibold">Create with AI</h1>

      {/* Composer */}
      <Card className="glass-surface rounded-2xl">
        <CardHeader>
          <CardTitle>What do you want to create?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AIChatBox
            action={action}
            onActionChange={setAction}
            onDraftGenerated={handleDraftGenerated}
            connections={connections}
          />
          <p className="text-xs text-muted-foreground">Tip: Try “Write about India’s Independence Day and unknown facts from early years of independence and post on LinkedIn”.</p>
        </CardContent>
      </Card>

      {/* Integrations */}
      <section aria-labelledby="integrations-title" className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 id="integrations-title" className="text-lg font-medium">Connect your apps</h2>
          <Button variant="secondary" onClick={() => toast({ title: "More integrations coming soon" })}>View all integrations</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <IntegrationCard
            name="LinkedIn"
            icon={Linkedin}
            connected={connections.linkedin}
            onToggle={async () => {
              try {
                if (!connections.linkedin) {
                  const { data } = await supabase.functions.invoke("composio-initiate-connect", { body: { provider: "linkedin" } });
                  if (data?.url) window.open(data.url, "_blank", "noopener,noreferrer");
                }
              } catch (e) {
                console.error(e);
              } finally {
                updateConnections({ linkedin: !connections.linkedin });
              }
            }}
          />
          <IntegrationCard
            name="Instagram"
            icon={Instagram}
            connected={connections.instagram}
            onToggle={async () => {
              try {
                if (!connections.instagram) {
                  const { data } = await supabase.functions.invoke("composio-initiate-connect", { body: { provider: "instagram" } });
                  if (data?.url) window.open(data.url, "_blank", "noopener,noreferrer");
                }
              } catch (e) {
                console.error(e);
              } finally {
                updateConnections({ instagram: !connections.instagram });
              }
            }}
          />
          <IntegrationCard
            name="X (Twitter)"
            icon={Twitter}
            connected={connections.x}
            onToggle={async () => {
              try {
                if (!connections.x) {
                  const { data } = await supabase.functions.invoke("composio-initiate-connect", { body: { provider: "twitter" } });
                  if (data?.url) window.open(data.url, "_blank", "noopener,noreferrer");
                }
              } catch (e) {
                console.error(e);
              } finally {
                updateConnections({ x: !connections.x });
              }
            }}
          />
        </div>
      </section>

      <Separator />

      {/* Draft Canvas */}
      <DraftCanvas open={openCanvas} draft={draft} onClose={() => setOpenCanvas(false)} onApprove={handleApprove} />

      {/* Note for backend enablement */}
      <p className="text-xs text-muted-foreground">To enable real authentication and posting, connect Supabase and we’ll wire OAuth + secure actions to publish directly to your channels.</p>
    </main>
  );
};

export default CreateAI;
