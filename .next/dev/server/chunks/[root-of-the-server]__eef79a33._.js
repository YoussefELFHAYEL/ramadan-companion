module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/api/prayer-times/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
// ========================================
// WARMED REDIS CLIENT - Outside handler
// ========================================
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: 'https://keen-weevil-41108.upstash.io',
    token: 'AaCUAAIncDIxN2I5MGVmYzcyZDg0YzEwOGM3Y2I1OWQxYjlkMzhmNnAyNDExMDg'
});
// Constants
const CACHE_TTL = 3024000; // 35 days
const LOCK_TTL = 10;
const RETRY_ATTEMPTS = 5;
const RETRY_DELAY = 200;
// ========================================
// HELPERS - Pure functions for speed
// ========================================
const normalize = (str)=>str?.trim().toLowerCase().replace(/\s+/g, '-') || '';
const getCurrentMonth = ()=>{
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};
const sleep = (ms)=>new Promise((r)=>setTimeout(r, ms));
const fetchAlAdhan = async (city, country, method, month, year)=>{
    const url = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
    const res = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'RamadanCompanion/1.0'
        }
    });
    if (!res.ok) throw new Error(`AlAdhan: ${res.status}`);
    const json = await res.json();
    if (json.code !== 200 || !json.data) throw new Error(json.status || 'City not found');
    return json.data;
};
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const country = searchParams.get('country') || '';
    const method = searchParams.get('method') || '2';
    // Validate
    if (!city) {
        return Response.json({
            error: 'Missing: city'
        }, {
            status: 400
        });
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
            return Response.json({
                data: cached,
                source: 'cache',
                month
            });
        }
        // ========================================
        // 2. LAZY LOCK - Only on cache miss
        // ========================================
        const lockKey = `lock:${cacheKey}`;
        const lockAcquired = await redis.set(lockKey, '1', {
            nx: true,
            ex: LOCK_TTL
        });
        if (!lockAcquired) {
            // Another request is fetching, wait for cache
            for(let i = 0; i < RETRY_ATTEMPTS; i++){
                await sleep(RETRY_DELAY);
                const retryData = await redis.get(cacheKey);
                if (retryData) {
                    return Response.json({
                        data: retryData,
                        source: 'cache',
                        month
                    });
                }
            }
            return Response.json({
                error: 'Service busy, please retry'
            }, {
                status: 503
            });
        }
        // ========================================
        // 3. FETCH & CACHE - Raw JSON, no processing
        // ========================================
        const data = await fetchAlAdhan(city, country, method, mon, year);
        // Fire-and-forget cache set (don't await)
        redis.set(cacheKey, data, {
            ex: CACHE_TTL
        }).catch(()=>{});
        return Response.json({
            data,
            source: 'api',
            month
        });
    } catch (err) {
        // ========================================
        // FAIL OPEN - Direct fetch if Redis down
        // ========================================
        if (err.message?.includes('Redis') || err.message?.includes('ECONN')) {
            try {
                const data = await fetchAlAdhan(city, country, method, mon, year);
                return Response.json({
                    data,
                    source: 'direct',
                    month
                });
            } catch (e) {
                return Response.json({
                    error: e.message
                }, {
                    status: 502
                });
            }
        }
        return Response.json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eef79a33._.js.map