import type { Metadata } from "next";
import { HomePage } from "./components/HomePage";

const title = "HolidAI · Smarter Urlaub planen";
const description =
  "Minimaler AI-Reiseplaner aus der Schweiz: Hol dir in Minuten deinen strukturierten Urlaubsvorschlag.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    type: "website",
    siteName: "HolidAI",
    locale: "de_CH",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function Page() {
  return <HomePage />;
}
