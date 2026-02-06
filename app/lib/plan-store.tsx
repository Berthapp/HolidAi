"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { PlanningAnswers, TravelPlanResponse } from "./types";

const STORAGE_KEY = "holidai-plan";

export const defaultAnswers: PlanningAnswers = {
  destination: "",
  duration: "",
  travelMode: "",
  travelStyle: "",
  budget: "",
  travelers: "",
  childrenCount: 0,
  season: "",
};

type PlanContextValue = {
  answers: PlanningAnswers;
  result: TravelPlanResponse | null;
  isHydrated: boolean;
  setAnswers: (answers: PlanningAnswers) => void;
  updateAnswer: <K extends keyof PlanningAnswers>(
    key: K,
    value: PlanningAnswers[K]
  ) => void;
  setResult: (result: TravelPlanResponse | null) => void;
  reset: () => void;
};

const PlanContext = createContext<PlanContextValue | undefined>(undefined);

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [answers, setAnswersState] = useState<PlanningAnswers>(defaultAnswers);
  const [result, setResultState] = useState<TravelPlanResponse | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as {
          answers?: PlanningAnswers;
          result?: TravelPlanResponse | null;
        };
        if (parsed.answers) {
          setAnswersState({ ...defaultAnswers, ...parsed.answers });
        }
        if (parsed.result) {
          setResultState(parsed.result);
        }
      } catch {
        setAnswersState(defaultAnswers);
        setResultState(null);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ answers, result })
    );
  }, [answers, result, isHydrated]);

  const setAnswers = useCallback((nextAnswers: PlanningAnswers) => {
    setAnswersState(nextAnswers);
  }, []);

  const updateAnswer = useCallback(
    <K extends keyof PlanningAnswers>(key: K, value: PlanningAnswers[K]) => {
      setAnswersState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const setResult = useCallback((nextResult: TravelPlanResponse | null) => {
    setResultState(nextResult);
  }, []);

  const reset = useCallback(() => {
    setAnswersState(defaultAnswers);
    setResultState(null);
  }, []);

  const value = useMemo(
    () => ({
      answers,
      result,
      isHydrated,
      setAnswers,
      updateAnswer,
      setResult,
      reset,
    }),
    [answers, result, isHydrated, setAnswers, updateAnswer, setResult, reset]
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within PlanProvider");
  }
  return context;
}
