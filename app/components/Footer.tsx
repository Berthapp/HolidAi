"use client";

import Link from "next/link";
import { useTranslations } from "../lib/i18n";

export function Footer() {
  const t = useTranslations();
  const footerLinks = [
    { href: "/impressum", label: t("footer.links.impressum") },
    { href: "/datenschutz", label: t("footer.links.datenschutz") },
    { href: "/agb", label: t("footer.links.agb") },
    { href: "/copyright-2026", label: t("footer.links.copyright") },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-6 text-sm text-slate-500 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="text-left">
          <Link href="/" className="font-semibold text-slate-700">
            HolidAI
          </Link>
          <p className="text-xs text-slate-400">{t("footer.tagline")}</p>
        </div>
        <nav
          aria-label={t("footer.legalLabel")}
          className="flex flex-wrap gap-4"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
