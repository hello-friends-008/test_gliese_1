import React from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface IntegrationCardProps {
  name: string;
  icon: LucideIcon;
  connected?: boolean;
  onToggle: () => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({ name, icon: Icon, connected, onToggle }) => {
  return (
    <Card className="glass-surface">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="flex items-center gap-2 text-base font-medium">
          <Icon className="size-5" aria-hidden="true" />
          {name}
        </CardTitle>
        {connected ? (
          <Badge variant="secondary">Connected</Badge>
        ) : (
          <Badge variant="outline">Not connected</Badge>
        )}
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {connected ? "You're ready to publish" : "Connect to enable publishing"}
        </p>
        <Button variant={connected ? "secondary" : "default"} onClick={onToggle} size="sm" className="rounded-full px-5 text-center">
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;
