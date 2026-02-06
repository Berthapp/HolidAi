"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  formatMessage,
  getTranslations,
  supportedLocales,
  translations,
  type Locale,
} from "./i18n-data";

type TranslationValues = Record<string, string | number>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const STORAGE_KEY = "holidai-locale";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getNestedValue = (obj: Record<string, unknown>, path: string) => {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && supportedLocales.includes(stored)) {
      setLocale(stored);
      return;
    }
    const navigatorLanguage = window.navigator.language.toLowerCase();
    const browserLocale: Locale = navigatorLanguage.startsWith("fr")
      ? "fr"
      : navigatorLanguage.startsWith("it")
      ? "it"
      : navigatorLanguage.startsWith("rm")
      ? "rm"
      : navigatorLanguage.startsWith("en")
      ? "en"
      : "de";
    setLocale(browserLocale);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}

export function useTranslations() {
  const { locale } = useI18n();
  return useMemo(() => {
    return (key: string, values?: TranslationValues) => {
      const message = getNestedValue(translations[locale], key);
      if (typeof message === "string") {
        return formatMessage(message, values);
      }
      const fallbackMessage = getNestedValue(translations.de, key);
      if (typeof fallbackMessage === "string") {
        return formatMessage(fallbackMessage, values);
      }
      return key;
    };
  }, [locale]);
}

export function useTranslationList() {
  const { locale } = useI18n();
  return useMemo(() => getTranslations(locale), [locale]);
}
