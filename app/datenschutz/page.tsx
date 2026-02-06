export default function DatenschutzPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Rechtliches
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Datenschutzerklärung
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>
          Wir nehmen den Schutz deiner persönlichen Daten sehr ernst. Diese
          Erklärung informiert dich darüber, welche Daten beim Besuch von
          HolidAI verarbeitet werden und zu welchem Zweck.
        </p>
        <p>
          Verantwortliche Stelle: HolidAI, Musterstraße 1, 12345 Musterstadt,
          Deutschland. Kontakt: hallo@holidai.de.
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          Verarbeitete Daten
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Kontakt- und Inhaltsdaten, die du aktiv eingibst.</li>
          <li>Nutzungsdaten zur Sicherstellung der Website-Funktion.</li>
          <li>Server-Logfiles zur technischen Analyse und Sicherheit.</li>
        </ul>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">Deine Rechte</h2>
        <p>
          Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Außerdem
          kannst du der Verarbeitung widersprechen.
        </p>
        <p>
          Hinweis: Ergänze hier deine tatsächlichen Prozesse (z. B. Hosting,
          Tracking, Newsletter) und die dazugehörigen Informationen.
        </p>
      </section>
    </main>
  );
}
