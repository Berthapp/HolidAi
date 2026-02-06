"use client";

import { useTranslations } from "../lib/i18n";

export default function AgbPage() {
  const t = useTranslations();

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          {t("legal.kicker")}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {t("legal.agb.title")}
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>{t("legal.agb.intro")}</p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.agb.servicesTitle")}
        </h2>
        <p>{t("legal.agb.servicesBody")}</p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.agb.liabilityTitle")}
        </h2>
        <p>{t("legal.agb.liabilityBody")}</p>
        <p>{t("legal.agb.liabilityNote")}</p>
      </section>
    </main>
  );
}
