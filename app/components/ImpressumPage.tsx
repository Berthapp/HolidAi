"use client";

import { useTranslationList, useTranslations } from "../lib/i18n";

export function ImpressumPage() {
  const t = useTranslations();
  const list = useTranslationList();

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          {t("legal.kicker")}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {t("legal.imprint.title")}
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p className="font-semibold text-slate-700">
          {t("legal.imprint.company")}
        </p>
        <p>
          {list.legal.imprint.address.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p>
          {list.legal.imprint.contact.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.imprint.responsibleTitle")}
        </h2>
        <p>{t("legal.imprint.responsibleBody")}</p>
        <p>{t("legal.imprint.responsibleNote")}</p>
      </section>
    </main>
  );
}
