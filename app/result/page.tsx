"use client";

import Link from "next/link";
import { usePlan } from "../lib/plan-store";
import { CostBreakdown } from "../components/CostBreakdown";
import { ItineraryList } from "../components/ItineraryList";
import { ResultCard } from "../components/ResultCard";

export default function ResultPage() {
  const { result, answers } = usePlan();

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">
            Noch kein Plan vorhanden.
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Starte den Wizard, um deinen Reiseplan zu erhalten.
          </p>
          <Link
            href="/plan"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Zum Planer
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Ergebnis
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Dein {answers.destination} Plan ist bereit.
          </h1>
          <p className="text-sm text-slate-500">
            Basierend auf {answers.travelers} · {answers.travelStyle} ·
            {" "}
            {answers.budget}
          </p>
        </header>

        <ResultCard
          title={`Empfohlene Dauer: ${result.recommendedDuration}`}
          subtitle={result.rationale}
        >
          <p className="text-sm text-slate-600">
            Wir haben eine ausgewogene Mischung aus Highlights und Erholung
            eingeplant.
          </p>
        </ResultCard>

        <ResultCard
          title="Kostenschätzung"
          subtitle={`Budget-Level: ${result.budgetLevel}`}
        >
          <CostBreakdown items={result.costBreakdown} />
        </ResultCard>

        <ResultCard title="Itinerary-Outline">
          <ItineraryList items={result.itinerary} />
        </ResultCard>

        <ResultCard title="Hinweise">
          <ul className="space-y-2 text-sm text-slate-600">
            {result.notes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </ResultCard>
      </div>
    </main>
  );
}
