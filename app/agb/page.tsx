export default function AgbPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Rechtliches
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>
          Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der HolidAI
          Plattform. Mit der Nutzung unserer Services erklärst du dich mit den
          folgenden Bedingungen einverstanden.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">Leistungen</h2>
        <p>
          HolidAI stellt KI-gestützte Reisevorschläge bereit. Die bereitgestellten
          Informationen dienen der Orientierung und ersetzen keine verbindliche
          Buchungs- oder Rechtsberatung.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          Haftung &amp; Gewährleistung
        </h2>
        <p>
          Wir haften nur für Schäden, die auf vorsätzlicher oder grob fahrlässiger
          Pflichtverletzung beruhen. Für die Aktualität der Inhalte übernehmen wir
          keine Gewähr.
        </p>
        <p>
          Hinweis: Bitte ergänze deine spezifischen Bedingungen, Preise und
          Leistungsbeschreibungen.
        </p>
      </section>
    </main>
  );
}
