import type { Metadata } from "next";
import { AgbPage } from "../components/AgbPage";

const title = "AGB · HolidAI";
const description =
  "Allgemeine Geschäftsbedingungen für die Nutzung von HolidAI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/agb",
  },
  openGraph: {
    title,
    description,
    url: "/agb",
    type: "article",
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
  return <AgbPage />;
}
