import { NextResponse } from "next/server";
import { z } from "zod";
import type { Locale } from "../../lib/i18n-data";
import type { PlanRequest, TravelPlanResponse } from "../../lib/types";
import { rateLimit } from "../../lib/rate-limit";


const requestSchema = z.object({
  locale: z.enum(["de", "en", "fr", "it", "rm"]).optional().default("de"),
  recaptchaToken: z.string().trim().min(1),
  answers: z
    .object({
      destination: z.string().trim().min(1).max(120),
      duration: z.string().trim().max(40).optional().default(""),
      travelMode: z.string().trim().max(40).optional().default(""),
      travelStyle: z
        .array(z.string().trim().max(40))
        .max(3)
        .optional()
        .default([]),
      budget: z.string().trim().max(40).optional().default(""),
      budgetAmount: z.number().min(0).max(100000).optional().default(0),
      travelers: z.string().trim().max(40).optional().default(""),
      childrenCount: z.number().int().min(0).max(10).optional().default(0),
      friendsCount: z.number().int().min(0).max(20).optional().default(0),
      season: z.string().trim().max(40).optional().default(""),
    })
    .strict(),
});

const responseSchema = z.object({
  destination: z.string().min(1),
  recommendedDuration: z.string().min(1),
  rationale: z.string().min(1),
  budgetLevel: z.enum(["Low", "Medium", "Comfort"]),
  costBreakdown: z
    .array(
      z.object({
        label: z.string().min(1),
        amount: z.string().min(1),
      })
    )
    .min(1),
  itinerary: z
    .array(
      z.object({
        day: z.string().min(1),
        summary: z.string().min(1),
      })
    )
    .min(1),
  notes: z.array(z.string().min(1)).min(1),
});

const serializeAnswers = (answers: PlanRequest["answers"]) => {
  const lines = [
    `Destination: ${answers.destination}`,
    answers.duration
      ? `Duration: ${answers.duration}`
      : "Duration: (not specified)",
    answers.travelMode
      ? `Travel mode: ${answers.travelMode}`
      : "Travel mode: (not specified)",
    answers.travelStyle.length > 0
      ? `Travel style: ${answers.travelStyle.join(", ")}`
      : "Travel style: (not specified)",
    answers.budget
      ? `Budget: ${answers.budget}${
          answers.budget === "Custom" && answers.budgetAmount > 0
            ? ` (amount: ${answers.budgetAmount})`
            : ""
        }`
      : "Budget: (not specified)",
    answers.travelers
      ? `Travelers: ${answers.travelers}`
      : "Travelers: (not specified)",
  ];

  if (answers.travelers === "Family + kids") {
    lines.push(`Children count: ${answers.childrenCount ?? 0}`);
  }
  if (answers.travelers === "Friends") {
    lines.push(`Friends count: ${answers.friendsCount ?? 0}`);
  }

  lines.push(
    answers.season ? `Season: ${answers.season}` : "Season: (not specified)"
  );

  return lines.join("\n");
};

const verifyRecaptcha = async (token: string, remoteIp: string | null) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    throw new Error("Missing RECAPTCHA_SECRET_KEY environment variable.");
  }
  const params = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to verify reCAPTCHA.");
  }

  const data = (await response.json()) as {
    success?: boolean;
    score?: number;
    action?: string;
  };

  const rawMinScore = Number(process.env.RECAPTCHA_MIN_SCORE ?? "0.5");
  const minScore = Number.isNaN(rawMinScore) ? 0.5 : rawMinScore;
  if (
    !data.success ||
    (typeof data.score === "number" && data.score < minScore) ||
    (data.action && data.action !== "plan_submit")
  ) {
    throw new Error("reCAPTCHA verification failed.");
  }
};

const buildPrompt = (request: PlanRequest) => {
  return [
    "You are a travel planner. Create a concise travel plan in the requested locale.",
    "Very important: Return only valid JSON that matches this schema:",
    JSON.stringify({
      destination: "string",
      recommendedDuration: "string",
      rationale: "string",
      budgetLevel: "Low | Medium | Comfort",
      costBreakdown: [{ label: "string", amount: "string" }],
      itinerary: [{ day: "string", summary: "string" }],
      notes: ["string"],
    }),
    `Locale: ${request.locale}`,
    "Use CHF for cost breakdown amounts. Keep amounts realistic and concise.",
    "As an additional costBreakdown, calculate the total cost.",
    "Use the locale language in all labels, rationale, itinerary, and notes.",
    "If a duration is provided, base the itinerary length and cost breakdown on that duration.",
    "If you recommend a different duration, keep it in recommendedDuration but do not change the itinerary length.",
    "Answer data:",
    serializeAnswers(request.answers),
  ].join("\n");
};

const generatePlan = async (
  request: PlanRequest
): Promise<TravelPlanResponse> => {
  const prompt = buildPrompt(request);
  const systemPrompt =
    "You respond with JSON only. Do not include markdown or code fences.";
  const temperature = 1;

  let content: string | undefined;

  switch (process.env.USED_LLM_PROVIDER) {
    case "openai": {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error("Missing OPENAI_API_KEY environment variable.");
      }
      const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature,
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          response_format: { type: "json_object" },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `LLM request failed (${response.status}): ${errorText || response.statusText}`
        );
      }

      const data = (await response.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      content = data.choices?.[0]?.message?.content;
      break;
    }
    case "anthropic": {
      const apiKey = process.env.ANTHROPIC_API_KEY;
      if (!apiKey) {
        throw new Error("Missing ANTHROPIC_API_KEY environment variable.");
      }
      const model = process.env.ANTHROPIC_MODEL ?? "claude-3-5-sonnet-20240620";
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature,
          system: systemPrompt,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `LLM request failed (${response.status}): ${errorText || response.statusText}`
        );
      }

      const data = (await response.json()) as {
        content?: Array<{ type?: string; text?: string }>;
      };
      content = data.content?.find((item) => item.type === "text")?.text;
      break;
    }
    case "google": {
      const apiKey = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error(
          "Missing GOOGLE_API_KEY (or GEMINI_API_KEY) environment variable."
        );
      }
      const model = process.env.GOOGLE_MODEL ?? "gemini-1.5-flash";
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: `${systemPrompt}\n${prompt}` }],
              },
            ],
            generationConfig: {
              temperature,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `LLM request failed (${response.status}): ${errorText || response.statusText}`
        );
      }

      const data = (await response.json()) as {
        candidates?: Array<{
          content?: { parts?: Array<{ text?: string }> };
        }>;
      };
      content = data.candidates?.[0]?.content?.parts?.[0]?.text;
      break;
    }
    default:
      throw new Error(`Unsupported LLM provider: ${process.env.USED_LLM_PROVIDER}`);
  }

  if (!content) {
    throw new Error("LLM response was empty.");
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(content);
  } catch (error) {
    throw new Error("LLM returned invalid JSON.");
  }

  const parsed = responseSchema.safeParse(parsedJson);
  if (!parsed.success) {
    throw new Error("LLM response did not match the expected schema.");
  }

  return parsed.data;
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
  const locale: Locale = body.locale ?? "de";

  try {
    await verifyRecaptcha(
      body.recaptchaToken,
      clientIp === "unknown" ? null : clientIp
    );
    const response = await generatePlan({ ...body, locale });
    return NextResponse.json(response, {
      headers: {
        "X-RateLimit-Limit": rateLimitResult.limit.toString(),
        "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Plan generation failed.";
    const loweredMessage = message.toLowerCase();
    const statusCode =
      loweredMessage.includes("recaptcha verification failed") ||
      loweredMessage.includes("failed to verify recaptcha")
        ? 400
        : 500;
    return NextResponse.json(
      { error: message },
      {
        status: statusCode,
        headers: {
          "X-RateLimit-Limit": rateLimitResult.limit.toString(),
          "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
        },
      }
    );
  }
}
