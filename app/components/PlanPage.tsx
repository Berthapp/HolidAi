"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { PrimaryInput } from "./PrimaryInput";
import { OptionChips } from "./OptionChips";
import { StepProgress } from "./StepProgress";
import { useI18n, useTranslationList, useTranslations } from "../lib/i18n";
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

type RecaptchaApi = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

const travelStyleValues: TravelStyle[] = [
  "Relax",
  "Nature",
  "City",
  "Flexible",
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
      if (answers.travelers.trim().length === 0) return false;
      if (answers.travelers === "Family + kids") {
        return answers.childrenCount > 0;
      }
      return true;
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
  const translationList = useTranslationList();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  const loadingMessages = useMemo(() => {
    const messages = translationList.plan?.loading?.messages;
    return Array.isArray(messages) ? messages : [];
  }, [translationList]);

  useEffect(() => {
    if (!isSubmitting || loadingMessages.length === 0) return;
    setLoadingMessageIndex(0);
    const interval = window.setInterval(() => {
      setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, [isSubmitting, loadingMessages]);

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

  const travelersInputValue = useMemo(() => {
    if (travelerValues.includes(answers.travelers as TravelersGroup)) {
      return translateOption(locale, "travelers", answers.travelers);
    }
    return answers.travelers;
  }, [answers.travelers, locale]);

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

  const requestPayload = useMemo<Omit<PlanRequest, "recaptchaToken">>(
    () => ({
      locale,
      answers,
    }),
    [answers, locale]
  );

  const executeRecaptcha = async () => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      throw new Error(t("plan.errors.recaptchaUnavailable"));
    }
    if (!window.grecaptcha) {
      throw new Error(t("plan.errors.recaptchaUnavailable"));
    }
    return new Promise<string>((resolve, reject) => {
      window.grecaptcha?.ready(() => {
        window.grecaptcha
          ?.execute(siteKey, { action: "plan_submit" })
          .then(resolve)
          .catch(reject);
      });
    });
  };

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

  const handleStepClick = (index: number) => {
    if (index > currentStep) return;
    setError("");
    setCurrentStep(index);
  };

  const handleSubmit = async () => {
    if (!canProceed) {
      setError(t("plan.errors.selectOptionFinish"));
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha();
      const payload: PlanRequest = {
        ...requestPayload,
        recaptchaToken,
      };
      const response = await fetch("/api/plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        let errorMessage = t("plan.errors.planFailed");
        try {
          const errorBody = (await response.json()) as { error?: string };
          if (errorBody?.error?.toLowerCase().includes("recaptcha")) {
            errorMessage = t("plan.errors.recaptchaFailed");
          }
        } catch (parseError) {
          // ignore parse errors and use fallback message
        }
        throw new Error(errorMessage);
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
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      ) : null}
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
          <StepProgress
            steps={steps}
            currentStep={currentStep}
            onStepClick={handleStepClick}
          />
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
                value={answers.duration}
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
              value={answers.travelStyle}
              onChange={(value) => updateAnswer("travelStyle", value)}
            />
          ) : null}

          {step.id === "budget" ? (
            <OptionChips
              label={t("plan.budget.question")}
              options={budgetOptions}
              value={answers.budget}
              onChange={(value) => updateAnswer("budget", value)}
            />
          ) : null}

          {step.id === "travelers" ? (
            <div className="space-y-6">
              <OptionChips
                label={t("plan.travelers.question")}
                options={travelerOptions}
                value={answers.travelers}
                onChange={(value) => {
                  updateAnswer("travelers", value);
                  if (value !== "Family + kids") {
                    updateAnswer("childrenCount", 0);
                  }
                }}
              />
              <PrimaryInput
                label={t("plan.travelers.customLabel")}
                placeholder={t("plan.travelers.customPlaceholder")}
                value={travelersInputValue}
                onChange={(event) => {
                  const nextValue = event.target.value;
                  updateAnswer("travelers", nextValue);
                  if (nextValue !== "Family + kids") {
                    updateAnswer("childrenCount", 0);
                  }
                }}
              />
              {answers.travelers === "Family + kids" ? (
                <PrimaryInput
                  label={t("plan.travelers.childrenLabel")}
                  placeholder={t("plan.travelers.childrenPlaceholder")}
                  hint={t("plan.travelers.childrenHint")}
                  type="number"
                  min={0}
                  max={10}
                  value={
                    answers.childrenCount > 0
                      ? String(answers.childrenCount)
                      : ""
                  }
                  onChange={(event) => {
                    const nextValue = Number(event.target.value);
                    updateAnswer(
                      "childrenCount",
                      Number.isNaN(nextValue) ? 0 : nextValue
                    );
                  }}
                />
              ) : null}
            </div>
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
              value={answers.season}
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
            className="cursor-pointer rounded-full border-2 border-teal-200 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 transition hover:border-teal-400 hover:bg-teal-50 disabled:cursor-not-allowed disabled:border-slate-200 disabled:text-slate-400 disabled:opacity-60"
          >
            {t("plan.buttons.back")}
          </button>
          <button
            type="button"
            onClick={isLastStep ? handleSubmit : handleNext}
            disabled={!canProceed || isSubmitting}
            className="cursor-pointer rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-teal-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting
              ? t("plan.buttons.submitting")
              : isLastStep
              ? t("plan.buttons.submit")
              : t("plan.buttons.next")}
          </button>
        </div>
      </div>

      {isSubmitting ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-6 py-8 backdrop-blur-sm">
          <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl bg-white p-8 text-center shadow-xl">
            <div className="flex items-center gap-3 text-teal-600">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-4 border-teal-200 border-t-teal-600 animate-spin" />
              <div className="text-left">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {t("plan.loading.title")}
                </p>
                <p className="text-xl font-semibold text-slate-900">
                  {t("plan.loading.subtitle")}
                </p>
              </div>
            </div>
            {loadingMessages.length > 0 ? (
              <p className="text-sm text-slate-500">
                {loadingMessages[loadingMessageIndex]}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </main>
  );
}
