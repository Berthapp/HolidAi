import type { ItineraryDay } from "../lib/types";

type ItineraryListProps = {
  items: ItineraryDay[];
};

export function ItineraryList({ items }: ItineraryListProps) {
  return (
    <ol className="space-y-4">
      {items.map((item) => (
        <li key={item.day} className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">{item.day}</p>
          <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
        </li>
      ))}
    </ol>
  );
}
