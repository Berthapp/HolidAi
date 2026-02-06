"use client";

import { useI18n, useTranslations } from "../lib/i18n";
import { supportedLocales } from "../lib/i18n-data";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const t = useTranslations();

  return (
    <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
      {t("languageLabel")}
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-sm"
      >
        {supportedLocales.map((option) => (
          <option key={option} value={option}>
            {t(`languages.${option}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
