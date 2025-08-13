import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ActionSelector, ActionValue } from "./ActionSelector";
import { ArrowUp, Loader2 } from "lucide-react";
import type { DraftData, Platform } from "./DraftCanvas";
import { supabase } from "@/integrations/supabase/client";
interface AIChatBoxProps {
  action: ActionValue;
  onActionChange: (v: ActionValue) => void;
  onDraftGenerated: (draft: DraftData) => void;
  connections: { linkedin: boolean; instagram: boolean; x: boolean };
}

export const AIChatBox: React.FC<AIChatBoxProps> = ({ action, onActionChange, onDraftGenerated, connections }) => {
  const [value, setValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const detectPlatform = (text: string): Platform => {
    const t = text.toLowerCase();
    if (t.includes("linkedin")) return "LinkedIn";
    if (t.includes("instagram")) return "Instagram";
    if (t.includes("twitter") || t.includes(" x ") || t.endsWith(" x") || t.includes(" on x")) return "X";
    // fallback: first connected
    if (connections.linkedin) return "LinkedIn";
    if (connections.instagram) return "Instagram";
    if (connections.x) return "X";
    return "LinkedIn";
  };

  const generateHashtags = (text: string): string[] => {
    const tags: string[] = [];
    const t = text.toLowerCase();
    if (t.includes("india") && (t.includes("independence") || t.includes("15 august"))) {
      tags.push("IndependenceDay", "India", "History", "Proud", "Bharat");
    }
    if (action === "post") tags.push("SocialMedia", "GlieseAI");
    if (action === "dm") tags.push("Outreach");
    if (action === "schedule") tags.push("Scheduler");
    return Array.from(new Set(tags)).slice(0, 8);
  };

  const createDraftFromPrompt = (prompt: string): DraftData => {
    const platform = detectPlatform(prompt);
    const hashtags = generateHashtags(prompt);

    let title = "AI-generated draft";
    let content = prompt.trim();

    if (prompt.toLowerCase().includes("independence")) {
      title = "India's Independence Day — lesser-known facts";
      content = `On August 15, 1947, India awakened to freedom. Here are some lesser-known facts from the early years:\n\n• The national flag was adopted months earlier on July 22, 1947.\n• The first Republic Day parade at Rajpath was held in 1955.\n• India's economy saw its first Five-Year Plan in 1951 focusing on agriculture.\n• The Constituent Assembly met 11 sessions over ~3 years to draft the Constitution.\n\nWhat does independence mean to you today?`;
    } else {
      content = `Here's a first draft based on your prompt:\n\n${prompt}\n\nWould you like me to refine tone, add a hook, or include a CTA?`;
    }

    return { platform, title, content, hashtags };
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-content", {
        body: { prompt: value, action },
      });

      if (error) throw error as any;

      const draft: DraftData = data as any;
      // Ensure platform typing
      const platform = (draft.platform as Platform) || detectPlatform(value);
      onDraftGenerated({ ...draft, platform });
    } catch (err) {
      console.error("AI generation failed, using fallback", err);
      const draft = createDraftFromPrompt(value);
      onDraftGenerated(draft);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="relative">
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Create an automation or ask me to write a post…"
        className="min-h-[160px] rounded-2xl pr-14 text-base"
        aria-label="Create with AI"
      />

      {/* Action selector bottom-left */}
      <div className="absolute left-3 bottom-3">
        <ActionSelector value={action} onChange={onActionChange} />
      </div>

      <Button
        type="submit"
        size="icon"
        className="absolute bottom-3 right-3 rounded-full"
        aria-label="Send"
        disabled={loading}
      >
        {loading ? <Loader2 className="size-4 animate-spin" /> : <ArrowUp className="size-4" />}
      </Button>
    </form>
  );
};

export default AIChatBox;
