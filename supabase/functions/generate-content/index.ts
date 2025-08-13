import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");

function buildPrompt(prompt: string, action: string) {
  const instruction = `You are Gliese AI. Generate a social content draft as strict JSON. 
Fields: platform (LinkedIn|Instagram|X), title, content, hashtags (array of strings, max 8). 
Choose platform from the user prompt or default to LinkedIn. Keep content concise and ready to post.
ACTION=${action}. Output ONLY JSON.`;
  return `${instruction}\n\nUSER PROMPT:\n${prompt}`;
}

function tryExtractJson(text: string): any | null {
  try {
    return JSON.parse(text);
  } catch (_) {
    // Try extract first JSON block
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); } catch (_) { return null; }
    }
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  if (!GEMINI_API_KEY) {
    return new Response(JSON.stringify({ error: "Missing GEMINI_API_KEY" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const { prompt, action } = await req.json();
    if (!prompt) {
      return new Response(JSON.stringify({ error: "Missing prompt" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: buildPrompt(prompt, action || "post") }],
        },
      ],
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await resp.json();
    const textOut = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const parsed = tryExtractJson(textOut);

    if (!parsed) {
      // Fallback minimal structure
      const fallback = {
        platform: "LinkedIn",
        title: "AI-generated draft",
        content: prompt,
        hashtags: ["GlieseAI"],
      };
      return new Response(JSON.stringify(fallback), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Ensure shape
    const normalized = {
      platform: parsed.platform || "LinkedIn",
      title: parsed.title || "AI-generated draft",
      content: parsed.content || prompt,
      hashtags: Array.isArray(parsed.hashtags) ? parsed.hashtags.slice(0, 8) : ["GlieseAI"],
    };

    return new Response(JSON.stringify(normalized), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("generate-content error", error);
    return new Response(JSON.stringify({ error: error?.message || "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
