import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, PenSquare } from "lucide-react";

export type Platform = "LinkedIn" | "Instagram" | "X";

export interface DraftData {
  platform: Platform;
  title: string;
  content: string;
  hashtags: string[];
}

interface DraftCanvasProps {
  open: boolean;
  draft: DraftData | null;
  onClose: () => void;
  onApprove: () => void;
}

export const DraftCanvas: React.FC<DraftCanvasProps> = ({ open, draft, onClose, onApprove }) => {
  if (!open || !draft) return null;

  return (
    <section aria-label="Draft review" className="space-y-4">
      <Card className="border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <PenSquare className="size-5" aria-hidden="true" /> Draft for {draft.platform}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Simulated tool execution breadcrumbs */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-md border bg-muted/40 p-3 text-sm">
              <div className="mb-1 text-muted-foreground">Used</div>
              <div className="flex items-center gap-2"><Badge variant="outline">{draft.platform}</Badge> Get My Info</div>
            </div>
            <div className="rounded-md border bg-muted/40 p-3 text-sm">
              <div className="mb-1 text-muted-foreground">Tool executed</div>
              <div className="flex items-center gap-2"><Badge variant="outline">{draft.platform}</Badge> Create Post</div>
            </div>
            <div className="rounded-md border bg-muted/40 p-3 text-sm">
              <div className="mb-1 text-muted-foreground">Assist is working</div>
              <div className="flex items-center gap-2"><Badge variant="outline">{draft.platform}</Badge> Preparing draft…</div>
            </div>
          </div>

          <Separator />

          <article>
            <h3 className="text-base font-semibold mb-2">{draft.title}</h3>
            <p className="whitespace-pre-wrap text-sm leading-6 text-muted-foreground">{draft.content}</p>
            {draft.hashtags?.length ? (
              <p className="mt-3 text-sm">{draft.hashtags.map((h) => `#${h}`).join(" ")}</p>
            ) : null}
          </article>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end">
            <Button variant="secondary" onClick={onClose}>Edit</Button>
            <Button onClick={onApprove} className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4" /> Approve & Publish
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default DraftCanvas;
