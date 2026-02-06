import type { Metadata } from "next";
import { CopyrightPage } from "../components/CopyrightPage";

const title = "Copyright · HolidAI";
const description = "Urheberrechtliche Hinweise zu HolidAI.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/copyright-2026",
  },
  openGraph: {
    title,
    description,
    url: "/copyright-2026",
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
  return <CopyrightPage />;
}
