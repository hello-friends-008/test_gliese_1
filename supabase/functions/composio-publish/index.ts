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
    const { platform, title, content, hashtags, authConfigId, target, connectionAccountId, triggerSlug, composioProjectId } = await req.json();

    if (!COMPOSIO_API_KEY) {
      return new Response(JSON.stringify({ ok: false, message: "Missing COMPOSIO_API_KEY in Supabase secrets" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const text = [
      title?.toString().trim(),
      content?.toString().trim(),
      Array.isArray(hashtags) && hashtags.length ? hashtags.map((h: string) => (h.startsWith('#') ? h : `#${h}`)).join(' ') : ''
    ]
      .filter(Boolean)
      .join("\n\n");

    // New: Use Composio Trigger Instances handle endpoint with fallbacks
    const headers = {
      "X-API-Key": COMPOSIO_API_KEY,
      "Content-Type": "application/json",
    } as const;

    const history: any[] = [];

    // Derive defaults but allow override from request
    const slugFromPlatform = (typeof (platform as string) === 'string' && platform.toLowerCase() === 'linkedin')
      ? 'linkedin_create_text_post'
      : 'generic_post';
    const finalSlug = triggerSlug || slugFromPlatform;

    const envProjectId = Deno.env.get('COMPOSIO_PROJECT_ID');
    const finalProjectId = composioProjectId || envProjectId || 'default';

    const baseUrls = [
      'https://api.composio.dev',
      'https://backend.composio.dev',
      'https://api.composio.ai',
    ] as const;

    // Build a generous payload so most trigger configs can map from it
    const payload: Record<string, any> = {
      input: {
        text,
        platform,
        title,
        content,
        hashtags,
        target,
      },
      auth: authConfigId ? { auth_config_id: authConfigId, account_id: connectionAccountId } : undefined,
      connection: connectionAccountId ? { app: (platform || 'linkedin')?.toString().toLowerCase(), account_id: connectionAccountId } : undefined,
      connection_id: connectionAccountId || undefined,
    };

    for (const baseUrl of baseUrls) {
      const url = `${baseUrl}/trigger-instances/${encodeURIComponent(finalSlug)}/${encodeURIComponent(finalProjectId)}/handle`;
      try {
        const resp = await fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        });
        const txt = await resp.text();
        let json: any = null;
        try { json = JSON.parse(txt); } catch (_) {}
        const entry = { url, status: resp.status, ok: resp.ok, preview: json || txt?.slice?.(0, 800), slug: finalSlug, projectId: finalProjectId };
        history.push(entry);
        console.log('Composio trigger handle attempt', entry);
        if (resp.ok) {
          return new Response(JSON.stringify({ ok: true, provider: (platform || 'unknown')?.toString().toLowerCase(), result: json || txt }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }
      } catch (err: any) {
        const entry = { url, networkError: err?.message };
        history.push(entry);
        console.error('Composio trigger DNS/Network error', entry);
      }
    }

    return new Response(
      JSON.stringify({ ok: false, message: 'Composio trigger handle failed', details: 'All baseUrls returned non-2xx or network error', attempts: history, tried: { baseUrls, slug: finalSlug, projectId: finalProjectId } }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error("composio-publish error", error);
    return new Response(JSON.stringify({ ok: false, error: error?.message || "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
