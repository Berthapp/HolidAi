"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryInput } from "./components/PrimaryInput";
import { defaultAnswers, usePlan } from "./lib/plan-store";

export default function Home() {
  const router = useRouter();
  const { setAnswers, setResult } = usePlan();
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!destination.trim()) {
      setError("Bitte gib ein Ziel ein.");
      return;
    }
    setError("");
    setAnswers({ ...defaultAnswers, destination: destination.trim() });
    setResult(null);
    router.push("/plan");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-teal-200/60 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute right-1/3 top-1/3 h-64 w-64 rounded-full bg-amber-200/60 blur-3xl" />
      </div>

      <div className="relative w-full max-w-4xl text-center">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center">
          <Image
            src="/logo.png"
            alt="HolidAI Logo"
            width={620}
            height={190}
            className="h-auto w-full"
            priority
          />
          <span className="mt-4 text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
            AI Vacation Planning
          </span>
        </div>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Dein smarter Urlaub in wenigen Minuten.
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Starte mit einem Ziel. Wir führen dich Schritt für Schritt zum perfekten
          Plan.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mt-12 w-full max-w-4xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600/10">
            <Image src="/logo.png" alt="" width={20} height={20} />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-slate-900">
              HolidAI Reiseassistent
            </p>
            <p className="text-xs text-slate-500">
              Plane entspannt mit einer klaren Struktur.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <PrimaryInput
            label="Wo möchtest du hin?"
            placeholder="z. B. Porto, Island, Thailand"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
          {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-teal-600"
        >
          Plan starten
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span>In Minuten startklar.</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Personalisierter Plan.</span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          <span>Transparent &amp; klar.</span>
        </div>
      </form>
    </main>
  );
}
