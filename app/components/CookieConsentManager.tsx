"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type ConsentStatus = "unknown" | "granted" | "denied";

const CONSENT_COOKIE = "holidai_cookie_consent";
const CONSENT_MAX_AGE_DAYS = 180;

const readConsentCookie = (): ConsentStatus => {
  if (typeof document === "undefined") {
    return "unknown";
  }
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${CONSENT_COOKIE}=`));

  if (!match) {
    return "unknown";
  }
  const value = match.split("=")[1];
  if (value === "granted" || value === "denied") {
    return value;
  }
  return "unknown";
};

const writeConsentCookie = (value: Exclude<ConsentStatus, "unknown">) => {
  const maxAge = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60;
  const secure = typeof window !== "undefined" && window.location.protocol === "https:";
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${maxAge}; SameSite=Lax${
    secure ? "; Secure" : ""
  }`;
};

type CookieConsentManagerProps = {
  analyticsId?: string;
};

export function CookieConsentManager({ analyticsId }: CookieConsentManagerProps) {
  const [consent, setConsent] = useState<ConsentStatus>("unknown");

  useEffect(() => {
    setConsent(readConsentCookie());
  }, []);

  const analyticsEnabled = useMemo(
    () => Boolean(analyticsId && consent === "granted"),
    [analyticsId, consent],
  );

  const handleAcceptAll = () => {
    writeConsentCookie("granted");
    setConsent("granted");
  };

  const handleAcceptNecessary = () => {
    writeConsentCookie("denied");
    setConsent("denied");
  };

  return (
    <>
      {analyticsEnabled ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsId}', { anonymize_ip: true });
              `,
            }}
          />
        </>
      ) : null}

      {consent === "unknown" ? (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-base font-semibold text-slate-900">
                Wir verwenden Cookies
              </p>
              <p>
                Wir nutzen technisch notwendige Cookies und – nur mit deiner
                Zustimmung – Analyse-Cookies, um unser Angebot zu verbessern.
              </p>
              <Link href="/datenschutz" className="font-medium text-teal-700 hover:text-teal-800">
                Mehr erfahren
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:text-slate-900"
              >
                Nur notwendig
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
