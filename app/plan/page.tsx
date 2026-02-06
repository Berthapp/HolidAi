"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryInput } from "../components/PrimaryInput";
import { OptionChips } from "../components/OptionChips";
import { StepProgress } from "../components/StepProgress";
import { useI18n, useTranslations } from "../lib/i18n";
import { usePlan } from "../lib/plan-store";
import {
  durationOptionKeys,
  translateOption,
} from "../lib/i18n-data";
import type {
  BudgetFeeling,
  PlanRequest,
  PlanningAnswers,
  TravelPlanResponse,
  TravelStyle,
  TravelersGroup,
} from "../lib/types";

const travelStyleValues: TravelStyle[] = [
  "Relax",
  "Nature",
  "City",
  "Family",
  "Couple",
  "Backpacking",
];

const budgetValues: BudgetFeeling[] = ["Low", "Medium", "Comfort"];

const travelerValues: TravelersGroup[] = ["Solo", "Couple", "Family + kids"];

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
  const { locale } = useI18n();
  const t = useTranslations();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const durationOptions = useMemo(
    () =>
      durationOptionKeys.map((key) => ({
        label: translateOption(locale, "duration", key),
        value: key,
      })),
    [locale]
  );

  const travelStyleOptions = useMemo(
    () =>
      travelStyleValues.map((value) => ({
        label: translateOption(locale, "travelStyle", value),
        value,
      })),
    [locale]
  );

  const budgetOptions = useMemo(
    () =>
      budgetValues.map((value) => ({
        label: translateOption(locale, "budget", value),
        value,
      })),
    [locale]
  );

  const travelerOptions = useMemo(
    () =>
      travelerValues.map((value) => ({
        label: translateOption(locale, "travelers", value),
        value,
      })),
    [locale]
  );

  const steps = useMemo(
    () => [
      { id: "destination", title: t("plan.steps.destination") },
      { id: "duration", title: t("plan.steps.duration") },
      { id: "style", title: t("plan.steps.style") },
      { id: "budget", title: t("plan.steps.budget") },
      { id: "travelers", title: t("plan.steps.travelers") },
      { id: "season", title: t("plan.steps.season") },
    ],
    [t]
  );

  const step = steps[currentStep];
  const canProceed = isStepValid(step.id, answers);
  const isLastStep = currentStep === steps.length - 1;

  const requestPayload: PlanRequest = useMemo(
    () => ({
      locale,
      answers,
    }),
    [answers, locale]
  );

  const handleNext = () => {
    if (!canProceed) {
      setError(t("plan.errors.selectOption"));
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
      setError(t("plan.errors.selectOptionFinish"));
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
        throw new Error(t("plan.errors.planFailed"));
      }
      const data = (await response.json()) as TravelPlanResponse;
      setResult(data);
      router.push("/result");
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : t("plan.errors.unexpected")
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
            {t("plan.stepLabel", {
              current: currentStep + 1,
              total: steps.length,
            })}
          </p>
          <h1 className="text-3xl font-semibold text-slate-900">
            {t("plan.title")}
          </h1>
          <StepProgress steps={steps} currentStep={currentStep} />
        </header>

        <section className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
          {step.id === "destination" ? (
            <div className="space-y-4">
              <PrimaryInput
                label={t("plan.destination.label")}
                placeholder={t("plan.destination.placeholder")}
                value={answers.destination}
                onChange={(event) =>
                  updateAnswer("destination", event.target.value)
                }
                hint={t("plan.destination.hint")}
              />
            </div>
          ) : null}

          {step.id === "duration" ? (
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  {t("plan.duration.choose")}
                </p>
                <OptionChips
                  options={durationOptions}
                  value={answers.duration}
                  onChange={(value) => updateAnswer("duration", value)}
                />
              </div>
              <PrimaryInput
                label={t("plan.duration.customLabel")}
                placeholder={t("plan.duration.customPlaceholder")}
                value={answers.duration}
                onChange={(event) => updateAnswer("duration", event.target.value)}
              />
            </div>
          ) : null}

          {step.id === "style" ? (
            <div className="space-y-4">
              <p className="text-sm font-medium text-slate-600">
                {t("plan.style.question")}
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
                {t("plan.budget.question")}
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
                {t("plan.travelers.question")}
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
                label={t("plan.season.label")}
                placeholder={t("plan.season.placeholder")}
                value={answers.season}
                onChange={(event) => updateAnswer("season", event.target.value)}
                hint={t("plan.season.hint")}
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
            {t("plan.buttons.back")}
          </button>
          {!isLastStep ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={!canProceed}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
            >
              {t("plan.buttons.next")}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!canProceed || isSubmitting}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300 sm:w-auto"
            >
              {isSubmitting ? t("plan.buttons.submitting") : t("plan.buttons.submit")}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
