import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Startseite" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
  { href: "/copyright-2026", label: "Copyright@2026" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-6 text-sm text-slate-500 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-slate-700">HolidAI</p>
          <p className="text-xs text-slate-400">
            Smarter Urlaub planen · Schnell, klar, persönlich.
          </p>
        </div>
        <nav aria-label="Rechtliches" className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-teal-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
