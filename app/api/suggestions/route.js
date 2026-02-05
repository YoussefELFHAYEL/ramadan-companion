import { Redis } from '@upstash/redis';

// ========================================
// WARMED REDIS CLIENT
// ========================================
const redis = new Redis({
    url: 'https://keen-weevil-41108.upstash.io',
    token: 'AaCUAAIncDIxN2I5MGVmYzcyZDg0YzEwOGM3Y2I1OWQxYjlkMzhmNnAyNDExMDg',
});

// Constants
const GEOAPIFY_KEY = '4ca724da292c40f58f458b6e72233724'; // ONLY used server-side!
const CACHE_TTL = 7776000; // 90 days in seconds

// ========================================
// HELPERS
// ========================================
// Use ONLY first 3 characters for maximum efficiency
const normalizePrefix = (q) => q?.toLowerCase().trim().substring(0, 3) || '';

const fetchGeoapify = async (query) => {
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&type=city&format=json&apiKey=${GEOAPIFY_KEY}`;

    const res = await fetch(url);
    if (!res.ok) return [];

    const data = await res.json();

    // Extract and simplify results - return more results for local filtering
    return (data.results || []).slice(0, 20).map(item => ({
        city: item.city || item.name || '',
        country: item.country || '',
        formatted: item.formatted || `${item.city}, ${item.country}`,
    })).filter(item => item.city);
};

// ========================================
// API HANDLER
// ========================================
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');

    if (!q || q.length < 3) {
        return Response.json({ results: [], prefix: '' });
    }

    // Only use first 3 characters for cache key
    const prefix = normalizePrefix(q);
    const cacheKey = `suggestions:${prefix}`;

    try {
        // ========================================
        // 1. INSTANT REDIS CHECK
        // ========================================
        const cached = await redis.get(cacheKey);
        if (cached) {
            return Response.json({ results: cached, prefix, source: 'cache' });
        }

        // ========================================
        // 2. FETCH FROM GEOAPIFY (using full query for better results)
        // ========================================
        const results = await fetchGeoapify(q);

        // ========================================
        // 3. CACHE RESULTS with 90-day TTL
        // ========================================
        if (results.length > 0) {
            redis.set(cacheKey, results, { ex: CACHE_TTL }).catch(() => { });
        }

        return Response.json({ results, prefix, source: 'api' });

    } catch (err) {
        console.error('Suggestions API error:', err);
        return Response.json({ results: [], prefix });
    }
}
