import type { CostBreakdownItem } from "../lib/types";

type CostBreakdownProps = {
  items: CostBreakdownItem[];
};

export function CostBreakdown({ items }: CostBreakdownProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm text-slate-600"
        >
          <span>{item.label}</span>
          <span className="font-medium text-slate-900">{item.amount}</span>
        </div>
      ))}
    </div>
  );
}
