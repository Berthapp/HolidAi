import type { Metadata } from "next";
import { PlanPage } from "../components/PlanPage";

const title = "Reiseplan erstellen · HolidAI";
const description =
  "Beantworte ein paar Fragen und erhalte deinen personalisierten Reiseplan in Minuten.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/plan",
  },
  openGraph: {
    title,
    description,
    url: "/plan",
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
  return <PlanPage />;
}
