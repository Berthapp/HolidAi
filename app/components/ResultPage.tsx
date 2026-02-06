"use client";

import Link from "next/link";
import { usePlan } from "../lib/plan-store";
import { CostBreakdown } from "./CostBreakdown";
import { ItineraryList } from "./ItineraryList";
import { ResultCard } from "./ResultCard";
import { useI18n, useTranslations } from "../lib/i18n";
import { resolveDurationLabel, translateOption } from "../lib/i18n-data";

export function ResultPage() {
  const { result, answers } = usePlan();
  const { locale } = useI18n();
  const t = useTranslations();

  if (!result) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">
            {t("result.emptyTitle")}
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            {t("result.emptySubtitle")}
          </p>
          <Link
            href="/plan"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            {t("result.emptyCta")}
          </Link>
        </div>
      </main>
    );
  }

  const travelStyleLabel = answers.travelStyle
    ? translateOption(locale, "travelStyle", answers.travelStyle)
    : "";
  const travelersLabel = answers.travelers
    ? translateOption(locale, "travelers", answers.travelers)
    : "";
  const budgetLabel = answers.budget
    ? translateOption(locale, "budget", answers.budget)
    : "";
  const travelModeLabel = answers.travelMode
    ? translateOption(locale, "travelMode", answers.travelMode)
    : "";
  const basedOnSummary = [
    travelersLabel,
    travelStyleLabel,
    budgetLabel,
    travelModeLabel,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            {t("result.label")}
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            {t("result.headline", { destination: answers.destination })}
          </h1>
          <p className="text-sm text-slate-500">
            {t("result.basedOn", { summary: basedOnSummary })}
          </p>
        </header>

        <ResultCard
          title={t("result.durationTitle", {
            duration: resolveDurationLabel(locale, result.recommendedDuration),
          })}
          subtitle={result.rationale}
        >
          <p className="text-sm text-slate-600">
            {t("result.durationNote")}
          </p>
        </ResultCard>

        <ResultCard
          title={t("result.costTitle")}
          subtitle={t("result.costSubtitle", {
            budget: translateOption(locale, "budget", result.budgetLevel),
          })}
        >
          <CostBreakdown items={result.costBreakdown} />
        </ResultCard>

        <ResultCard title={t("result.itineraryTitle")}>
          <ItineraryList items={result.itinerary} />
        </ResultCard>

        <ResultCard title={t("result.notesTitle")}>
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
