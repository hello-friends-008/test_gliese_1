import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const COMPOSIO_API_KEY = Deno.env.get("COMPOSIO_API_KEY");

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { provider } = await req.json();
    if (!COMPOSIO_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing COMPOSIO_API_KEY", url: "https://app.composio.dev/" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const providerSlug = (provider || "").toString().toLowerCase();
    // Without Composio connect API details, send user to dashboard to complete OAuth
    const url = `https://app.composio.dev/?connect=${encodeURIComponent(providerSlug || "social")}`;

    return new Response(JSON.stringify({ url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("composio-initiate-connect error", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
