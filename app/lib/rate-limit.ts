type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  key: string;
  windowMs: number;
  max: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  limit: number;
  retryAfterMs: number;
};

const getStore = () => {
  if (!globalThis.__rateLimitStore) {
    globalThis.__rateLimitStore = new Map<string, RateLimitEntry>();
  }
  return globalThis.__rateLimitStore;
};

export const rateLimit = ({ key, windowMs, max }: RateLimitOptions): RateLimitResult => {
  const store = getStore();
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return {
      allowed: true,
      remaining: Math.max(max - 1, 0),
      limit: max,
      retryAfterMs: windowMs,
    };
  }

  if (entry.count >= max) {
    return {
      allowed: false,
      remaining: 0,
      limit: max,
      retryAfterMs: entry.resetAt - now,
    };
  }

  entry.count += 1;
  store.set(key, entry);

  return {
    allowed: true,
    remaining: Math.max(max - entry.count, 0),
    limit: max,
    retryAfterMs: entry.resetAt - now,
  };
};

declare global {
  // eslint-disable-next-line no-var
  var __rateLimitStore: Map<string, RateLimitEntry> | undefined;
}

