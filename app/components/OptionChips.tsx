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
            className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-teal-200 ${
              isActive
                ? "border-teal-700 bg-teal-700 text-white hover:bg-teal-600"
                : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700"
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
