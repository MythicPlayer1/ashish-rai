interface RateLimitRecord {
  count: number;
  firstRequest: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();

/**
 * In-memory sliding window rate limiter
 * Limits requests per client identifier within a specific time window.
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 4,
  windowMs: number = 10 * 60 * 1000 // 10 minutes
): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);

  // Clean old entries if memory grows
  if (rateLimitStore.size > 1000) {
    for (const [key, val] of rateLimitStore.entries()) {
      if (now - val.firstRequest > windowMs) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record) {
    rateLimitStore.set(identifier, { count: 1, firstRequest: now });
    return { allowed: true, remaining: limit - 1 };
  }

  if (now - record.firstRequest < windowMs) {
    if (record.count >= limit) {
      return { allowed: false, remaining: 0 };
    }
    record.count += 1;
    return { allowed: true, remaining: limit - record.count };
  }

  // Reset window
  rateLimitStore.set(identifier, { count: 1, firstRequest: now });
  return { allowed: true, remaining: limit - 1 };
}

/**
 * Defensive input sanitization removing dangerous script tags and brackets
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Strip raw tag brackets
    .trim()
    .slice(0, 3000); // Enforce reasonable length limits
}
