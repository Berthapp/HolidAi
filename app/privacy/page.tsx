import type { Metadata } from "next";

const title = "Datenschutz (Privacy) · HolidAI";
const description =
  "Kurzfassung der Datenschutzhinweise gemäss Schweizer DSG für HolidAI.";

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
          Verantwortliche Stelle: Enzo Berther (HolidAI), Sonnenbergstrasse 12,
          7205 Zizers, Schweiz. Kontakt: info@holidai.ch.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          KI-Provider &amp; Datenverarbeitung
        </h2>
        <p>
          Für die Erstellung der Reisevorschläge nutzen wir je nach
          Konfiguration einen KI-Dienst (z. B. OpenAI, Anthropic oder Google).
          Deine Eingaben werden an den jeweiligen Anbieter übermittelt und
          können ausserhalb der Schweiz/EWR verarbeitet werden.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          Rechte der betroffenen Personen
        </h2>
        <p>
          Du hast das Recht auf Auskunft, Herausgabe, Berichtigung, Löschung,
          Einschränkung der Bearbeitung sowie Widerspruch. Details findest du
          in der vollständigen Datenschutzerklärung.
        </p>
      </section>
    </main>
  );
}
