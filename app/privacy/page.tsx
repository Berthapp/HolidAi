import type { Metadata } from "next";

const title = "Datenschutz (Privacy) · HolidAI";
const description =
  "Kurzfassung zum Datenschutz mit Platzhaltern für AI-Provider und Datenverarbeitung.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title,
    description,
    url: "/privacy",
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
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Datenschutz
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Datenschutzhinweise (Kurzfassung)
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>
          Diese Seite dient als kompakte Zusammenfassung der wichtigsten
          Datenschutzpunkte. Die vollständige Datenschutzerklärung findest du
          auf der Seite &quot;Datenschutz&quot;.
        </p>
        <p>
          Verantwortliche Stelle: HolidAI, Schweiz. Kontakt:
          info@holidai.ch.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          KI-Provider &amp; Datenverarbeitung (Platzhalter)
        </h2>
        <p>
          Für die Erstellung der Reisevorschläge kann ein externer KI-Provider
          eingesetzt werden. Bitte ergänze hier den konkreten Anbieter, den
          Zweck der Verarbeitung und die Rechtsgrundlage. Beispiel: &quot;Wir
          nutzen [AI-Provider] zur Generierung von Reisevorschlägen. Dabei
          werden Eingaben anonymisiert verarbeitet.&quot;
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          Rechte der betroffenen Personen
        </h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung sowie Datenübertragbarkeit und
          Widerspruch.
        </p>
      </section>
    </main>
  );
}
