import type { ReactNode } from "react";

type ResultCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function ResultCard({ title, subtitle, children }: ResultCardProps) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
