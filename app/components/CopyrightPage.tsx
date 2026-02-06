"use client";

import { useTranslations } from "../lib/i18n";

export function CopyrightPage() {
  const t = useTranslations();

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          {t("legal.kicker")}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {t("legal.copyright.title")}
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>{t("legal.copyright.body")}</p>
        <p>{t("legal.copyright.note")}</p>
      </section>
    </main>
  );
}
