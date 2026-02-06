"use client";

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
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          HolidAI · AI Vacation Planning
        </p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Dein smarter Urlaub in wenigen Minuten.
        </h1>
        <p className="mt-4 text-base text-slate-500">
          Starte mit einem Ziel. Wir führen dich Schritt für Schritt zum perfekten
          Plan.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-2xl rounded-3xl border border-slate-100 bg-white p-8 shadow-sm"
      >
        <PrimaryInput
          label="Wo möchtest du hin?"
          placeholder="z. B. Porto, Island, Thailand"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
        {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700"
        >
          Plan starten
        </button>
      </form>
    </main>
  );
}
