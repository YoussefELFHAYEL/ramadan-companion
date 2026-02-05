import { Redis } from '@upstash/redis';

// ========================================
// WARMED REDIS CLIENT - Outside handler
// ========================================
const redis = new Redis({
    url: 'https://keen-weevil-41108.upstash.io',
    token: 'AaCUAAIncDIxN2I5MGVmYzcyZDg0YzEwOGM3Y2I1OWQxYjlkMzhmNnAyNDExMDg',
});

// Constants
const CACHE_TTL = 3024000; // 35 days
const LOCK_TTL = 10;
const RETRY_ATTEMPTS = 5;
const RETRY_DELAY = 200;

// ========================================
// HELPERS - Pure functions for speed
// ========================================
const normalize = (str) => str?.trim().toLowerCase().replace(/\s+/g, '-') || '';

const getCurrentMonth = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const fetchAlAdhan = async (city, country, method, month, year) => {
    const url = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
    const res = await fetch(url, {
        headers: { 'Accept': 'application/json', 'User-Agent': 'RamadanCompanion/1.0' },
    });
    if (!res.ok) throw new Error(`AlAdhan: ${res.status}`);
    const json = await res.json();
    if (json.code !== 200 || !json.data) throw new Error(json.status || 'City not found');
    return json.data;
};

// ========================================
// MAIN HANDLER - Data First Logic
// ========================================
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const country = searchParams.get('country') || '';
    const method = searchParams.get('method') || '2';

    // Validate
    if (!city) {
        return Response.json({ error: 'Missing: city' }, { status: 400 });
    }

    // Build cache key
    const month = getCurrentMonth();
    const [year, mon] = month.split('-');
    const cacheKey = `prayer:v1:${normalize(country)}:${normalize(city)}:${month}:${method}`;

    try {
        // ========================================
        // 1. IMMEDIATE GET - Data First!
        // ========================================
        const cached = await redis.get(cacheKey);
        if (cached) {
            // INSTANT RETURN - No other logic
            return Response.json({ data: cached, source: 'cache', month });
        }

        // ========================================
        // 2. LAZY LOCK - Only on cache miss
        // ========================================
        const lockKey = `lock:${cacheKey}`;
        const lockAcquired = await redis.set(lockKey, '1', { nx: true, ex: LOCK_TTL });

        if (!lockAcquired) {
            // Another request is fetching, wait for cache
            for (let i = 0; i < RETRY_ATTEMPTS; i++) {
                await sleep(RETRY_DELAY);
                const retryData = await redis.get(cacheKey);
                if (retryData) {
                    return Response.json({ data: retryData, source: 'cache', month });
                }
            }
            return Response.json({ error: 'Service busy, please retry' }, { status: 503 });
        }

        // ========================================
        // 3. FETCH & CACHE - Raw JSON, no processing
        // ========================================
        const data = await fetchAlAdhan(city, country, method, mon, year);

        // Fire-and-forget cache set (don't await)
        redis.set(cacheKey, data, { ex: CACHE_TTL }).catch(() => { });

        return Response.json({ data, source: 'api', month });

    } catch (err) {
        // ========================================
        // FAIL OPEN - Direct fetch if Redis down
        // ========================================
        if (err.message?.includes('Redis') || err.message?.includes('ECONN')) {
            try {
                const data = await fetchAlAdhan(city, country, method, mon, year);
                return Response.json({ data, source: 'direct', month });
            } catch (e) {
                return Response.json({ error: e.message }, { status: 502 });
            }
        }
        return Response.json({ error: err.message }, { status: 500 });
    }
}
