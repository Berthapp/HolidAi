"use client";

type Option = {
  label: string;
  value: string;
  description?: string;
};

type OptionChipsProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export function OptionChips({ options, value, onChange }: OptionChipsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-200 ${
              isActive
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
            }`}
          >
            <span>{option.label}</span>
            {option.description ? (
              <span className="ml-2 text-xs text-slate-400">
                {option.description}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
