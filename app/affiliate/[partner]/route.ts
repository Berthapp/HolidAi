import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Partner } from "@/app/lib/affiliate/partners";

const partnerHosts: Record<Partner, string[]> = {
  [Partner.Booking]: ["booking.com"],
  [Partner.GetYourGuide]: ["getyourguide.com"],
  [Partner.DiscoverCars]: ["discovercars.com"],
};

const isAllowedHost = (hostname: string, allowedHosts: string[]) =>
  allowedHosts.some(
    (host) => hostname === host || hostname.endsWith(`.${host}`)
  );

const shouldLogClicks = () =>
  process.env.AFF_ENABLE_CLICK_LOGGING === "true";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ partner: string }> }
) {
  const { partner: partnerParam } = await params;
  const partner = partnerParam as Partner;

  if (!Object.values(Partner).includes(partner)) {
    return NextResponse.json({ error: "Unknown partner" }, { status: 400 });
  }

  const { searchParams } = new URL(request.url);
  const encodedUrl = searchParams.get("u");
  const destinationSummary = searchParams.get("d") ?? "";

  if (!encodedUrl) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(encodedUrl);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (targetUrl.protocol !== "https:") {
    return NextResponse.json({ error: "Invalid protocol" }, { status: 400 });
  }

  if (!isAllowedHost(targetUrl.hostname, partnerHosts[partner])) {
    return NextResponse.json({ error: "Invalid host" }, { status: 400 });
  }

  if (shouldLogClicks()) {
    const referer = request.headers.get("referer") ?? "";
    const userAgent = request.headers.get("user-agent") ?? "";
    const ip = request.headers.get("x-forwarded-for") ?? "";

    console.log(
      JSON.stringify({
        ts: new Date().toISOString(),
        partner,
        url: targetUrl.toString(),
        referer,
        userAgent,
        ip,
        destination: destinationSummary,
      })
    );
  }

  return NextResponse.redirect(targetUrl.toString(), { status: 302 });
}
