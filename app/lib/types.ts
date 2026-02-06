export type TravelStyle =
  | "Relax"
  | "Nature"
  | "City"
  | "Family"
  | "Couple"
  | "Backpacking";

export type BudgetFeeling = "Low" | "Medium" | "Comfort";

export type TravelersGroup = "Solo" | "Couple" | "Family + kids";

export type PlanningAnswers = {
  destination: string;
  duration: string;
  travelStyle: TravelStyle | "";
  budget: BudgetFeeling | "";
  travelers: TravelersGroup | "";
  season: string;
};

export type PlanRequest = {
  answers: PlanningAnswers;
};

export type CostBreakdownItem = {
  label: string;
  amount: string;
};

export type ItineraryDay = {
  day: string;
  summary: string;
};

export type TravelPlanResponse = {
  destination: string;
  recommendedDuration: string;
  rationale: string;
  budgetLevel: BudgetFeeling;
  costBreakdown: CostBreakdownItem[];
  itinerary: ItineraryDay[];
  notes: string[];
};

export const examplePlanRequest: PlanRequest = {
  answers: {
    destination: "Lisbon",
    duration: "5-7 Tage",
    travelStyle: "City",
    budget: "Medium",
    travelers: "Couple",
    season: "September",
  },
};

export const examplePlanResponse: TravelPlanResponse = {
  destination: "Lisbon",
  recommendedDuration: "6 Tage",
  rationale:
    "Genug Zeit für Altstadt, Küste und zwei entspannte Tage ohne Hektik.",
  budgetLevel: "Medium",
  costBreakdown: [
    { label: "Transport", amount: "CHF 320" },
    { label: "Unterkunft", amount: "CHF 780" },
    { label: "Essen & Trinken", amount: "CHF 360" },
    { label: "Aktivitäten", amount: "CHF 180" },
  ],
  itinerary: [
    { day: "Tag 1", summary: "Ankommen, Bairro Alto & Aussichtspunkte." },
    { day: "Tag 2", summary: "Altstadt, Tram 28, Food Markets." },
    { day: "Tag 3", summary: "Tagesausflug nach Sintra." },
    { day: "Tag 4", summary: "Strandtag in Cascais." },
    { day: "Tag 5", summary: "Museen, Flussufer, Sunset Spot." },
    { day: "Tag 6", summary: "Slow morning & Abreise." },
  ],
  notes: [
    "Preise variieren je nach Saison.",
    "Kurzstrecken lassen sich gut mit Metro & Uber abdecken.",
  ],
};
