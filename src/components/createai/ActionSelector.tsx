import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type ActionValue = "post" | "dm" | "schedule";

export const ACTION_OPTIONS: { label: string; value: ActionValue }[] = [
  { label: "Post on Social Media", value: "post" },
  { label: "DM / Email", value: "dm" },
  { label: "Schedule", value: "schedule" },
];

interface ActionSelectorProps {
  value: ActionValue;
  onChange: (value: ActionValue) => void;
  className?: string;
}

export const ActionSelector: React.FC<ActionSelectorProps> = ({ value, onChange, className }) => {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as ActionValue)}>
      <SelectTrigger className={cn(className || "w-56", "rounded-full")} aria-label="Choose what to do">
        <SelectValue placeholder="Choose what to do" />
      </SelectTrigger>
      <SelectContent className="z-50 bg-background text-foreground border border-input rounded-md shadow-elevated">
        {ACTION_OPTIONS.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ActionSelector;
