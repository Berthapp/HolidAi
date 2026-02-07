"use server";

import { createRedirectUrl } from "./redirect";
import type { AffiliateContext, Partner } from "./partners";

export async function getAffiliateRedirectUrl(
  partner: Partner,
  ctx: AffiliateContext
): Promise<string> {
  return createRedirectUrl(partner, ctx);
}
