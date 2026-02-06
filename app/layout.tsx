import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PlanProvider } from "./lib/plan-store";
import { Footer } from "./components/Footer";
import { I18nProvider } from "./lib/i18n";
import { LanguageSelector } from "./components/LanguageSelector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HolidAI · Smarter Urlaub planen",
  description:
    "Minimaler AI-Reiseplaner: Hol dir in Minuten deinen strukturierten Urlaubsvorschlag.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#128986",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <I18nProvider>
          <PlanProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b border-slate-100 bg-white/80 px-6 py-4 text-slate-500 backdrop-blur">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-end">
                  <LanguageSelector />
                </div>
              </header>
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </PlanProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
