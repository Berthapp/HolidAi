This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## HolidAI MVP structure

```
app/
  api/plan/route.ts        # Mocked plan endpoint
  components/              # UI building blocks (inputs, cards, lists)
  lib/
    plan-store.tsx         # Client-side state + localStorage persistence
    types.ts               # Flow + API types and examples
  plan/page.tsx            # Wizard flow
  result/page.tsx          # Final result
  page.tsx                 # Landing page
```

## Affiliate setup

Copy `.env.local.example` to `.env.local` and fill in the affiliate IDs:

```
AFF_BOOKING_AID=""
AFF_GYG_PARTNER_ID=""
AFF_DISCOVERCARS_AID=""
AFF_BASE_URL="https://holidai.ch"
AFF_ENABLE_CLICK_LOGGING="false"
```

Affiliate links are built server-side and routed through `/affiliate/[partner]` so clicks can be logged before redirecting to the partner URL.

### Adding a new partner later

1. Add a new entry to `Partner` and `buildAffiliateUrl` in `app/lib/affiliate/partners.ts`.
2. Allowlist the partner hostname in `app/affiliate/[partner]/route.ts`.
3. Add a CTA in the UI using `AffiliateButton` and update disclosures if needed.

## Extending the plan API with a real LLM later

1. Replace `buildMockPlan` in `app/api/plan/route.ts` with an OpenAI/LLM call.
2. Use `PlanRequest` as the input contract and ensure the model output is shaped
   into `TravelPlanResponse` before returning.
3. Keep the response structure stable so the `/result` UI does not change.
4. Add streaming later by returning a `ReadableStream` from the same route if
   you want progressive UI updates.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
