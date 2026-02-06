import { NextResponse } from "next/server";
import type { PlanRequest, TravelPlanResponse } from "../../lib/types";

const buildMockPlan = (request: PlanRequest): TravelPlanResponse => {
  const { answers } = request;
  const destination = answers.destination || "dein Ziel";
  const recommendedDuration = answers.duration || "5-7 Tage";
  const budgetLevel = answers.budget || "Medium";

  return {
    destination,
    recommendedDuration,
    rationale: `Für ${destination} ist ${recommendedDuration} ideal, um Highlights und freie Zeit zu kombinieren.`,
    budgetLevel,
    costBreakdown: [
      { label: "Transport", amount: "CHF 320" },
      { label: "Unterkunft", amount: "CHF 780" },
      { label: "Essen & Trinken", amount: "CHF 360" },
      { label: "Aktivitäten", amount: "CHF 180" },
    ],
    itinerary: [
      { day: "Tag 1", summary: "Ankommen, erster Spaziergang, Lieblingscafé." },
      { day: "Tag 2", summary: "Stadtzentrum & Must-Sees." },
      { day: "Tag 3", summary: "Natur oder Tagesausflug." },
      { day: "Tag 4", summary: "Erholung & lokale Küche." },
      { day: "Tag 5", summary: "Freier Block für Spontanes." },
    ],
    notes: [
      "Preise sind grobe Schätzwerte pro Person.",
      "Plane Puffer für Wetter oder spontane Entdeckungen ein.",
    ],
  };
};

export async function POST(request: Request) {
  const body = (await request.json()) as PlanRequest;
  const response = buildMockPlan(body);

  return NextResponse.json(response);
}
