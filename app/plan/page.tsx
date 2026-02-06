"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryInput } from "../components/PrimaryInput";
import { OptionChips } from "../components/OptionChips";
import { StepProgress } from "../components/StepProgress";
import { usePlan } from "../lib/plan-store";
import type {
  BudgetFeeling,
  PlanRequest,
  PlanningAnswers,
  TravelPlanResponse,
  TravelStyle,
  TravelersGroup,
} from "../lib/types";

const durationOptions = [
  { label: "3-5 Tage", value: "3-5 Tage" },
  { label: "1 Woche", value: "1 Woche" },
  { label: "2 Wochen", value: "2 Wochen" },
  { label: "3+ Wochen", value: "3+ Wochen" },
];

const travelStyleOptions: { label: string; value: TravelStyle }[] = [
  { label: "Relax", value: "Relax" },
  { label: "Natur", value: "Nature" },
  { label: "City", value: "City" },
  { label: "Family", value: "Family" },
  { label: "Couple", value: "Couple" },
  { label: "Backpacking", value: "Backpacking" },
];

const budgetOptions: { label: string; value: BudgetFeeling }[] = [
  { label: "Low", value: "Low" },
  { label: "Medium", value: "Medium" },
  { label: "Comfort", value: "Comfort" },
];

const travelerOptions: { label: string; value: TravelersGroup }[] = [
  { label: "Solo", value: "Solo" },
  { label: "Couple", value: "Couple" },
  { label: "Family + kids", value: "Family + kids" },
];

const steps = [
  { id: "destination", title: "Ziel" },
  { id: "duration", title: "Dauer" },
  { id: "style", title: "Stil" },
  { id: "budget", title: "Budget" },
  { id: "travelers", title: "Reisende" },
  { id: "season", title: "Saison" },
];

const isStepValid = (stepId: string, answers: PlanningAnswers) => {
  switch (stepId) {
    case "destination":
      return answers.destination.trim().length > 0;
    case "duration":
      return answers.duration.trim().length > 0;
    case "style":
      return answers.travelStyle.trim().length > 0;
    case "budget":
      return answers.budget.trim().length > 0;
    case "travelers":
      return answers.travelers.trim().length > 0;
    case "season":
      return true;
    default:
      return false;
  }
};

export default function PlanPage() {
  const router = useRouter();
  const { answers, updateAnswer, setResult } = usePlan();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const step = steps[currentStep];
  const canProceed = isStepValid(step.id, answers);
  const isLastStep = currentStep === steps.length - 1;

  const requestPayload: PlanRequest = useMemo(
    () => ({
      answers,
    }),
    [answers]
  );

  const handleNext = () => {
    if (!canProceed) {
      setError("Bitte wähle eine Option, bevor du weitergehst.");
      return;
    }
    setError("");
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setError("");
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async () => {
    if (!canProceed) {
      setError("Bitte wähle eine Option, bevor du abschließt.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      });
      if (!response.ok) {
        throw new Error("Plan konnte nicht erstellt werden.");
      }
      const data = (await response.json()) as TravelPlanResponse;
      setResult(data);
      router.push("/result");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unerwarteter Fehler."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Schritt {currentStep + 1} von {steps.length}
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            Lass uns deinen Urlaub planen.
          </h1>
          <StepProgress steps={steps} currentStep={currentStep} />
        </header>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          {step.id === "destination" ? (
            <div className="space-y-4">
              <PrimaryInput
                label="Destination"
                placeholder="z. B. Marrakesch"
                value={answers.destination}
                onChange={(event) =>
                  updateAnswer("destination", event.target.value)
                }
                hint="Du kannst das Ziel später anpassen."
              />
            </div>
          ) : null}

          {step.id === "duration" ? (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Wähle eine Dauer
                </p>
                <OptionChips
                  options={durationOptions}
                  value={answers.duration}
                  onChange={(value) => updateAnswer("duration", value)}
                />
              </div>
              <PrimaryInput
                label="Oder eigene Dauer"
                placeholder="z. B. 10 Tage"
                value={answers.duration}
                onChange={(event) => updateAnswer("duration", event.target.value)}
              />
            </div>
          ) : null}

          {step.id === "style" ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-600">
                Welcher Reisestil passt zu dir?
              </p>
              <OptionChips
                options={travelStyleOptions}
                value={answers.travelStyle}
                onChange={(value) =>
                  updateAnswer("travelStyle", value as TravelStyle)
                }
              />
            </div>
          ) : null}

          {step.id === "budget" ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-600">
                Wie fühlt sich dein Budget an?
              </p>
              <OptionChips
                options={budgetOptions}
                value={answers.budget}
                onChange={(value) => updateAnswer("budget", value as BudgetFeeling)}
              />
            </div>
          ) : null}

          {step.id === "travelers" ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-600">
                Wer reist mit?
              </p>
              <OptionChips
                options={travelerOptions}
                value={answers.travelers}
                onChange={(value) =>
                  updateAnswer("travelers", value as TravelersGroup)
                }
              />
            </div>
          ) : null}

          {step.id === "season" ? (
            <div className="space-y-4">
              <PrimaryInput
                label="Monat / Saison (optional)"
                placeholder="z. B. Mai oder Herbst"
                value={answers.season}
                onChange={(event) => updateAnswer("season", event.target.value)}
                hint="Hilft uns bei Preisen & Wetter."
              />
            </div>
          ) : null}

          {error ? <p className="mt-4 text-sm text-red-500">{error}</p> : null}
        </section>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="w-full rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:border-slate-400 hover:text-slate-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Zurück
          </button>
          {!isLastStep ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
            >
              Weiter
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed || isSubmitting}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
            >
              {isSubmitting ? "Plane..." : "Plan erstellen"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
