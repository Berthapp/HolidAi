"use client";

type Option<T extends string> = {
  label: string;
  value: T;
  description?: string;
};

type OptionChipsProps<T extends string> = {
  label?: string;
  options: ReadonlyArray<Option<T>>;
  value: T | "";
  onChange: (value: T) => void;
};

export function OptionChips<T extends string>({
  label,
  options,
  value,
  onChange,
}: OptionChipsProps<T>) {
  return (
    <div className="space-y-3">
      {label ? (
        <p className="text-sm font-semibold text-slate-700">{label}</p>
      ) : null}
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
    </div>
  );
}

type MultiOptionChipsProps<T extends string> = {
  label?: string;
  options: ReadonlyArray<Option<T>>;
  values: ReadonlyArray<T>;
  onToggle: (value: T) => void;
};

export function MultiOptionChips<T extends string>({
  label,
  options,
  values,
  onToggle,
}: MultiOptionChipsProps<T>) {
  return (
    <div className="space-y-3">
      {label ? (
        <p className="text-sm font-semibold text-slate-700">{label}</p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        {options.map((option) => {
          const isActive = values.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onToggle(option.value)}
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
    </div>
  );
}
