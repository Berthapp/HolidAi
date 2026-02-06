import type { Metadata } from "next";
import { ImpressumPage } from "../components/ImpressumPage";

const title = "Impressum · HolidAI";
const description =
  "Kontakt- und Anbieterinformationen für HolidAI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title,
    description,
    url: "/impressum",
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
  return <ImpressumPage />;
}
