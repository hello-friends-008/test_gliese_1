import React from "react";
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ icon: Icon, title, description, action }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <div className="relative">
        <div className="size-28 lg:size-32 rounded-full bg-muted/60 flex items-center justify-center">
          <Icon className="size-14 lg:size-16 text-muted-foreground/70" aria-hidden="true" />
        </div>
      </div>
      <h3 className="mt-4 text-base font-medium">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground max-w-md">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};

export default EmptyState;
