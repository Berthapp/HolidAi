"use client";

import { useI18n, useTranslations } from "../lib/i18n";
import { supportedLocales } from "../lib/i18n-data";

export function LanguageSelector() {
  const { locale, setLocale } = useI18n();
  const t = useTranslations();

  return (
    <label className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
      <span className="hidden sm:inline">{t("languageLabel")}</span>
      <div className="relative hidden sm:block">
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as typeof locale)}
          className="h-9 appearance-none rounded-full border border-slate-200 bg-white px-3 pr-9 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:text-xs"
        >
          {supportedLocales.map((option) => (
            <option key={option} value={option}>
              {t(`languages.${option}`)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.27l3.71-4.04a.75.75 0 1 1 1.1 1.02l-4.25 4.62a.75.75 0 0 1-1.1 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="relative sm:hidden">
        <select
          value={locale}
          onChange={(event) => setLocale(event.target.value as typeof locale)}
          className="h-9 appearance-none rounded-full border border-slate-200 bg-white px-3 pr-9 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm transition hover:border-slate-300 hover:shadow-md focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        >
          {supportedLocales.map((option) => (
            <option key={option} value={option}>
              {t(`languagesShort.${option}`)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="h-4 w-4"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.27l3.71-4.04a.75.75 0 1 1 1.1 1.02l-4.25 4.62a.75.75 0 0 1-1.1 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </label>
  );
}
