"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryInput } from "./PrimaryInput";
import { useTranslations } from "../lib/i18n";
import { defaultAnswers, usePlan } from "../lib/plan-store";

export function HomePage() {
  const router = useRouter();
  const { setAnswers, setResult } = usePlan();
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const t = useTranslations();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!destination.trim()) {
      setError(t("home.errorDestination"));
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
            {t("home.badge")}
          </span>
        </div>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t("home.title")}
        </h1>
        <p className="mt-4 text-base text-slate-600">
          {t("home.subtitle")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative mt-12 w-full max-w-4xl"
      >
        <div className="mt-6">
          <PrimaryInput
            label={t("home.destinationLabel")}
            placeholder={t("home.destinationPlaceholder")}
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
          {error ? <p className="mt-3 text-sm text-red-500">{error}</p> : null}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-teal-600"
        >
          {t("home.startPlan")}
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span>{t("home.highlights.ready")}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>{t("home.highlights.personalized")}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
          <span>{t("home.highlights.transparent")}</span>
        </div>
      </form>
    </main>
  );
}
