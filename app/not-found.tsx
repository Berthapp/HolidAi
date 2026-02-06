import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
        404
      </p>
      <h1 className="text-3xl font-semibold text-slate-900">
        Seite nicht gefunden
      </h1>
      <p className="text-sm text-slate-600">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
