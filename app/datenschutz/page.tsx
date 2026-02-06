import type { Metadata } from "next";
import { DatenschutzPage } from "../components/DatenschutzPage";

const title = "Datenschutz · HolidAI";
const description =
  "Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten bei HolidAI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title,
    description,
    url: "/datenschutz",
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
  return <DatenschutzPage />;
}
