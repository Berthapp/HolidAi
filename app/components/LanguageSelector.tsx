"use client";

import { useEffect, useRef, useState } from "react";

import { useI18n, useTranslations } from "../lib/i18n";
import { supportedLocales } from "../lib/i18n-data";

type LanguageMenuProps = {
  labelForLocale: (locale: (typeof supportedLocales)[number]) => string;
  className?: string;
};

function LanguageMenu({ labelForLocale, className }: LanguageMenuProps) {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const currentLabel = labelForLocale(locale);

  return (
    <div
      ref={menuRef}
      className={`relative z-50 ${className ?? ""}`.trim()}
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="inline-flex h-9 min-w-[9rem] items-center justify-between gap-2 rounded-full border border-slate-200 bg-white/90 px-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-md focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 sm:text-xs"
      >
        <span>{currentLabel}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className={`h-4 w-4 text-slate-400 transition ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.27l3.71-4.04a.75.75 0 1 1 1.1 1.02l-4.25 4.62a.75.75 0 0 1-1.1 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen ? (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-slate-200 bg-white/95 p-1 shadow-lg backdrop-blur"
        >
          {supportedLocales.map((option) => {
            const isActive = option === locale;
            return (
              <button
                type="button"
                role="option"
                aria-selected={isActive}
                key={option}
                onClick={() => {
                  setLocale(option);
                  setIsOpen(false);
                }}
                className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2 text-left text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition sm:text-xs ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{labelForLocale(option)}</span>
                {isActive ? (
                  <span className="text-[0.6rem] tracking-[0.3em] text-emerald-500">
                    ✓
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export function LanguageSelector() {
  const t = useTranslations();

  return (
    <div
      aria-label={t("languageLabel")}
      className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs"
    >
      <span className="hidden sm:inline">{t("languageLabel")}</span>
      <LanguageMenu
        className="hidden sm:block"
        labelForLocale={(locale) => t(`languages.${locale}`)}
      />
      <LanguageMenu
        className="sm:hidden"
        labelForLocale={(locale) => t(`languagesShort.${locale}`)}
      />
    </div>
  );
}
