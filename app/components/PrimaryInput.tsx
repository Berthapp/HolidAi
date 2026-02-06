"use client";

import type { InputHTMLAttributes } from "react";

type PrimaryInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
};

export function PrimaryInput({ label, hint, ...props }: PrimaryInputProps) {
  return (
    <label className="flex w-full flex-col gap-3 text-sm font-medium text-slate-700">
      <span className="text-sm uppercase tracking-[0.18em] text-slate-400">
        {label}
      </span>
      <input
        {...props}
        className="w-full rounded-3xl border border-slate-200 bg-white px-6 py-4 text-lg text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
      />
      {hint ? <span className="text-xs text-slate-400">{hint}</span> : null}
    </label>
  );
}
