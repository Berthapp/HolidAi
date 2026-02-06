export default function ImpressumPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Rechtliches
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Impressum</h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p className="font-semibold text-slate-700">HolidAI</p>
        <p>
          Musterstraße 1
          <br />
          12345 Musterstadt
          <br />
          Deutschland
        </p>
        <p>
          Vertreten durch: Max Mustermann
          <br />
          E-Mail: hallo@holidai.de
          <br />
          Telefon: +49 123 456 789
        </p>
      </section>

      <section className="space-y-3 text-sm text-slate-600">
        <h2 className="text-base font-semibold text-slate-800">
          Verantwortlich für den Inhalt
        </h2>
        <p>
          Verantwortlich nach § 55 Abs. 2 RStV: Max Mustermann, Musterstraße 1,
          12345 Musterstadt.
        </p>
        <p>
          Hinweis: Bitte ersetze die Platzhalter durch die korrekten Angaben
          deines Unternehmens.
        </p>
      </section>
    </main>
  );
}
