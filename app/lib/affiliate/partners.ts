export enum Partner {
  Booking = "booking",
  GetYourGuide = "getyourguide",
  DiscoverCars = "discovercars",
}

export type Destination = {
  city?: string;
  region?: string;
  country?: string;
  placeId?: string;
  lat?: number;
  lng?: number;
};

export type TravelDates = {
  checkIn?: string;
  checkOut?: string;
};

export type Travelers = {
  adults?: number;
  children?: number;
};

export type AffiliateContext = {
  destination: Destination;
  dates?: TravelDates;
  travelers?: Travelers;
  currency?: string;
  language?: string;
};

const DEFAULT_DESTINATION = "Switzerland";

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

const buildDestinationString = (destination: Destination): string => {
  const city = destination.city?.trim();
  const region = destination.region?.trim();
  const country = destination.country?.trim();
  const placeId = destination.placeId?.trim();

  if (city && country) return `${city}, ${country}`;
  if (city) return city;
  if (region && country) return `${region}, ${country}`;
  if (region) return region;
  if (country) return country;
  if (placeId) return placeId;
  return DEFAULT_DESTINATION;
};

export const buildDestinationSummary = (destination: Destination): string => {
  return buildDestinationString(destination);
};

export const buildAffiliateUrl = (
  partner: Partner,
  ctx: AffiliateContext
): string => {
  const destination = buildDestinationString(ctx.destination);

  switch (partner) {
    case Partner.Booking: {
      const aid = getRequiredEnv("AFF_BOOKING_AID");
      const url = new URL("https://www.booking.com/index.html");
      url.searchParams.set("aid", aid);
      url.searchParams.set("ss", destination);
      if (ctx.dates?.checkIn) {
        url.searchParams.set("checkin", ctx.dates.checkIn);
      }
      if (ctx.dates?.checkOut) {
        url.searchParams.set("checkout", ctx.dates.checkOut);
      }
      const adults = ctx.travelers?.adults ?? 2;
      const children = ctx.travelers?.children ?? 0;
      url.searchParams.set("group_adults", String(adults));
      url.searchParams.set("group_children", String(children));
      url.searchParams.set("no_rooms", "1");
      if (ctx.currency) {
        url.searchParams.set("selected_currency", ctx.currency);
      }
      if (ctx.language) {
        url.searchParams.set("lang", ctx.language);
      }
      return url.toString();
    }
    case Partner.GetYourGuide: {
      const partnerId = getRequiredEnv("AFF_GYG_PARTNER_ID");
      const url = new URL("https://www.getyourguide.com/s/");
      url.searchParams.set("q", destination);
      url.searchParams.set("partner_id", partnerId);
      if (ctx.dates?.checkIn) {
        url.searchParams.set("date_from", ctx.dates.checkIn);
      }
      if (ctx.currency) {
        url.searchParams.set("currency", ctx.currency);
      }
      if (ctx.language) {
        url.searchParams.set("lang", ctx.language);
      }
      return url.toString();
    }
    case Partner.DiscoverCars: {
      const aid = getRequiredEnv("AFF_DISCOVERCARS_AID");
      const url = new URL("https://www.discovercars.com/");
      url.searchParams.set("a_aid", aid);
      url.searchParams.set("location", destination);
      if (ctx.dates?.checkIn) {
        url.searchParams.set("date1", ctx.dates.checkIn);
      }
      if (ctx.dates?.checkOut) {
        url.searchParams.set("date2", ctx.dates.checkOut);
      }
      return url.toString();
    }
    default:
      throw new Error(`Unsupported partner: ${partner}`);
  }
};
