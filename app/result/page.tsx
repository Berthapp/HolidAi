import type { Metadata } from "next";
import { ResultPage } from "../components/ResultPage";

const title = "Dein Reiseplan · HolidAI";
const description =
  "Erhalte deinen strukturierten Urlaubsplan inklusive Dauer, Kosten und Tagesprogramm.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/result",
  },
  openGraph: {
    title,
    description,
    url: "/result",
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
  return <ResultPage />;
}
