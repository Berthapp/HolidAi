"use client";

import { useTranslationList, useTranslations } from "../lib/i18n";

export function DatenschutzPage() {
  const t = useTranslations();
  const list = useTranslationList();
  const dataItems = (
    list as {
      legal?: { privacy?: { dataItems?: string[] } };
    }
  ).legal?.privacy?.dataItems;

  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          {t("legal.kicker")}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {t("legal.privacy.title")}
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>{t("legal.privacy.intro")}</p>
        <p>{t("legal.privacy.contact")}</p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.privacy.dataTitle")}
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          {(Array.isArray(dataItems) ? dataItems : []).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.privacy.aiTitle")}
        </h2>
        <p>{t("legal.privacy.aiBody")}</p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          {t("legal.privacy.rightsTitle")}
        </h2>
        <p>{t("legal.privacy.rightsBody")}</p>
        <p>{t("legal.privacy.rightsNote")}</p>
      </section>
    </main>
  );
}
