import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { PlanProvider } from "./lib/plan-store";
import { Footer } from "./components/Footer";
import { I18nProvider } from "./lib/i18n";
import { LanguageSelector } from "./components/LanguageSelector";
import { ServiceWorkerRegistrar } from "./components/ServiceWorkerRegistrar";
import { CookieConsentManager } from "./components/CookieConsentManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL("https://holidai.ch");
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "HolidAI · Smarter Urlaub planen",
    template: "%s · HolidAI",
  },
  description:
    "Minimaler AI-Reiseplaner: Hol dir in Minuten deinen strukturierten Urlaubsvorschlag.",
  applicationName: "HolidAI",
  generator: "Next.js",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "HolidAI · Smarter Urlaub planen",
    description:
      "Minimaler AI-Reiseplaner: Hol dir in Minuten deinen strukturierten Urlaubsvorschlag.",
    url: "/",
    siteName: "HolidAI",
    locale: "de_CH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HolidAI · Smarter Urlaub planen",
    description:
      "Minimaler AI-Reiseplaner: Hol dir in Minuten deinen strukturierten Urlaubsvorschlag.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#128986",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HolidAI",
      url: metadataBase.toString(),
      logo: `${metadataBase.toString()}logo.png`,
      founder: {
        "@type": "Person",
        name: "Enzo Berther",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "HolidAI",
      url: metadataBase.toString(),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "HolidAI",
      url: metadataBase.toString(),
      applicationCategory: "TravelApplication",
      operatingSystem: "All",
    },
  ];

  return (
    <html lang="de-CH">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CookieConsentManager analyticsId={process.env.NEXT_PUBLIC_GA_ID} />
        <I18nProvider>
          <PlanProvider>
            <div className="flex min-h-screen flex-col">
              <header className="border-b border-slate-100 bg-white/80 px-6 py-4 text-slate-500 backdrop-blur z-50">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
                  <Link href="/" className="flex items-center gap-2 text-slate-900">
                    <Image
                      src="/logo.png"
                      alt="HolidAI"
                      width={56}
                      height={32}
                      className="h-8 w-14"
                    />
                  </Link>
                  <LanguageSelector />
                </div>
              </header>
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </PlanProvider>
        </I18nProvider>
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
