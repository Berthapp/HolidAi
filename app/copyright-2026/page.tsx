export default function CopyrightPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          Rechtliches
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Copyright@2026
        </h1>
      </header>

      <section className="space-y-3 text-sm text-slate-600">
        <p>
          © 2026 HolidAI. Alle Rechte vorbehalten. Inhalte, Design und
          Struktur dieser Website sind urheberrechtlich geschützt.
        </p>
        <p>
          Eine Verwendung außerhalb der gesetzlichen Schranken des
          Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.
        </p>
      </section>
    </main>
  );
}
