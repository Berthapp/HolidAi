import { NextResponse } from "next/server";
import { z } from "zod";
import { resolveDurationLabel } from "../../lib/i18n-data";
import type { Locale } from "../../lib/i18n-data";
import type { PlanRequest, TravelPlanResponse } from "../../lib/types";
import { rateLimit } from "../../lib/rate-limit";

const requestSchema = z.object({
  locale: z.enum(["de", "en", "fr", "it", "rm"]).optional().default("de"),
  answers: z
    .object({
      destination: z.string().trim().min(1).max(120),
      duration: z.string().trim().max(40).optional().default(""),
      travelStyle: z.string().trim().max(40).optional().default(""),
      budget: z.string().trim().max(40).optional().default(""),
      travelers: z.string().trim().max(40).optional().default(""),
      season: z.string().trim().max(40).optional().default(""),
    })
    .strict(),
});

const buildMockPlan = (
  request: PlanRequest,
  locale: Locale
): TravelPlanResponse => {
  const { answers } = request;
  const destination =
    answers.destination || (locale === "de" ? "dein Ziel" : "your destination");
  const recommendedDurationValue =
    answers.duration || (locale === "de" ? "5-7 Tage" : "5-7 days");
  const recommendedDuration = resolveDurationLabel(
    locale,
    recommendedDurationValue
  );
  const budgetLevel = answers.budget || "Medium";

  return {
    destination,
    recommendedDuration,
    rationale:
      locale === "de"
        ? `Für ${destination} ist ${recommendedDuration} ideal, um Highlights und freie Zeit zu kombinieren.`
        : `${recommendedDuration} is ideal for ${destination} to balance highlights with downtime.`,
    budgetLevel,
    costBreakdown: [
      {
        label: locale === "de" ? "Transport" : "Transportation",
        amount: "CHF 320",
      },
      {
        label: locale === "de" ? "Unterkunft" : "Accommodation",
        amount: "CHF 780",
      },
      {
        label: locale === "de" ? "Essen & Trinken" : "Food & drinks",
        amount: "CHF 360",
      },
      {
        label: locale === "de" ? "Aktivitäten" : "Activities",
        amount: "CHF 180",
      },
    ],
    itinerary: [
      {
        day: locale === "de" ? "Tag 1" : "Day 1",
        summary:
          locale === "de"
            ? "Ankommen, erster Spaziergang, Lieblingscafé."
            : "Arrival, first stroll, favorite cafe.",
      },
      {
        day: locale === "de" ? "Tag 2" : "Day 2",
        summary: locale === "de" ? "Stadtzentrum & Must-Sees." : "City center & must-sees.",
      },
      {
        day: locale === "de" ? "Tag 3" : "Day 3",
        summary: locale === "de" ? "Natur oder Tagesausflug." : "Nature or day trip.",
      },
      {
        day: locale === "de" ? "Tag 4" : "Day 4",
        summary: locale === "de" ? "Erholung & lokale Küche." : "Relaxation & local cuisine.",
      },
      {
        day: locale === "de" ? "Tag 5" : "Day 5",
        summary: locale === "de" ? "Freier Block für Spontanes." : "Open slot for spontaneity.",
      },
    ],
    notes: [
      locale === "de"
        ? "Preise sind grobe Schätzwerte pro Person."
        : "Prices are rough estimates per person.",
      locale === "de"
        ? "Plane Puffer für Wetter oder spontane Entdeckungen ein."
        : "Plan a buffer for weather or spontaneous discoveries.",
    ],
  };
};

export async function POST(request: Request) {
  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const rateLimitResult = rateLimit({
    key: `plan:${clientIp}`,
    windowMs: 60_000,
    max: 20,
  });

  if (!rateLimitResult.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(rateLimitResult.retryAfterMs / 1000).toString(),
          "X-RateLimit-Limit": rateLimitResult.limit.toString(),
          "X-RateLimit-Remaining": "0",
        },
      }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 }
    );
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request data.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const body = parsed.data as PlanRequest;
  const locale = body.locale === "en" ? "en" : "de";
  const response = buildMockPlan(body, locale);

  return NextResponse.json(response, {
    headers: {
      "X-RateLimit-Limit": rateLimitResult.limit.toString(),
      "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
    },
  });
}
