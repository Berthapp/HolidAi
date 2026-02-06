"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryInput } from "./PrimaryInput";
import { OptionChips } from "./OptionChips";
import { StepProgress } from "./StepProgress";
import { useI18n, useTranslations } from "../lib/i18n";
import { usePlan } from "../lib/plan-store";
import {
  durationOptionKeys,
  resolveDurationLabel,
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

export function PlanPage() {
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
              <OptionChips
                label={t("plan.duration.choose")}
                options={durationOptions}
                selected={answers.duration}
                onChange={(value) => updateAnswer("duration", value)}
              />
              <PrimaryInput
                label={t("plan.duration.customLabel")}
                placeholder={t("plan.duration.customPlaceholder")}
                value={resolveDurationLabel(locale, answers.duration)}
                onChange={(event) =>
                  updateAnswer("duration", event.target.value)
                }
              />
            </div>
          ) : null}

          {step.id === "style" ? (
            <OptionChips
              label={t("plan.style.question")}
              options={travelStyleOptions}
              selected={answers.travelStyle}
              onChange={(value) => updateAnswer("travelStyle", value)}
            />
          ) : null}

          {step.id === "budget" ? (
            <OptionChips
              label={t("plan.budget.question")}
              options={budgetOptions}
              selected={answers.budget}
              onChange={(value) => updateAnswer("budget", value)}
            />
          ) : null}

          {step.id === "travelers" ? (
            <OptionChips
              label={t("plan.travelers.question")}
              options={travelerOptions}
              selected={answers.travelers}
              onChange={(value) => updateAnswer("travelers", value)}
            />
          ) : null}

          {step.id === "season" ? (
            <OptionChips
              label={t("plan.season.question")}
              options={[
                { label: t("plan.season.summer"), value: "summer" },
                { label: t("plan.season.winter"), value: "winter" },
                { label: t("plan.season.spring"), value: "spring" },
                { label: t("plan.season.autumn"), value: "autumn" },
              ]}
              selected={answers.season}
              onChange={(value) => updateAnswer("season", value)}
            />
          ) : null}
        </section>

        {error ? <p className="text-sm text-red-500">{error}</p> : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("plan.buttons.back")}
          </button>
          <button
            type="button"
            onClick={isLastStep ? handleSubmit : handleNext}
            disabled={!canProceed || isSubmitting}
            className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLastStep ? t("plan.buttons.submit") : t("plan.buttons.next")}
          </button>
        </div>
      </div>
    </main>
  );
}
