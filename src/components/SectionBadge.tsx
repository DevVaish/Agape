import { Plus } from "lucide-react";

interface SectionBadgeProps {
  text: string;
}

const SectionBadge = ({ text }: SectionBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background shadow-sm">
      <Plus className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-foreground">{text}</span>
    </div>
  );
};

export default SectionBadge;
