import "server-only";

import {
  buildAffiliateUrl,
  buildDestinationSummary,
  type AffiliateContext,
  type Partner,
} from "./partners";

const getRequiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable ${name}. ` +
        "Set it in .env.local to enable affiliate links."
    );
  }
  return value;
};

export const createRedirectUrl = (
  partner: Partner,
  ctx: AffiliateContext
): string => {
  const baseUrl = getRequiredEnv("AFF_BASE_URL").replace(/\/$/, "");
  const partnerUrl = buildAffiliateUrl(partner, ctx);
  const destinationSummary = buildDestinationSummary(ctx.destination);
  const redirectUrl = new URL(`${baseUrl}/r/${partner}`);
  redirectUrl.searchParams.set("u", partnerUrl);
  redirectUrl.searchParams.set("d", destinationSummary);
  return redirectUrl.toString();
};
