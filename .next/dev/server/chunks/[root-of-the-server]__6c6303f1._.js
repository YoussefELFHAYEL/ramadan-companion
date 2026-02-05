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
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/api/suggestions/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive - Akumenia/Bureau/ramlive/node_modules/@upstash/redis/nodejs.mjs [app-route] (ecmascript) <locals>");
;
// ========================================
// WARMED REDIS CLIENT
// ========================================
const redis = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive__$2d$__Akumenia$2f$Bureau$2f$ramlive$2f$node_modules$2f40$upstash$2f$redis$2f$nodejs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Redis"]({
    url: 'https://keen-weevil-41108.upstash.io',
    token: 'AaCUAAIncDIxN2I5MGVmYzcyZDg0YzEwOGM3Y2I1OWQxYjlkMzhmNnAyNDExMDg'
});
// Constants
const GEOAPIFY_KEY = '4ca724da292c40f58f458b6e72233724'; // ONLY used server-side!
const CACHE_TTL = 7776000; // 90 days in seconds
// ========================================
// HELPERS
// ========================================
// Use ONLY first 3 characters for maximum efficiency
const normalizePrefix = (q)=>q?.toLowerCase().trim().substring(0, 3) || '';
const fetchGeoapify = async (query)=>{
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&type=city&format=json&apiKey=${GEOAPIFY_KEY}`;
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    // Extract and simplify results - return more results for local filtering
    return (data.results || []).slice(0, 20).map((item)=>({
            city: item.city || item.name || '',
            country: item.country || '',
            formatted: item.formatted || `${item.city}, ${item.country}`
        })).filter((item)=>item.city);
};
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if (!q || q.length < 3) {
        return Response.json({
            results: [],
            prefix: ''
        });
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
            return Response.json({
                results: cached,
                prefix,
                source: 'cache'
            });
        }
        // ========================================
        // 2. FETCH FROM GEOAPIFY (using full query for better results)
        // ========================================
        const results = await fetchGeoapify(q);
        // ========================================
        // 3. CACHE RESULTS with 90-day TTL
        // ========================================
        if (results.length > 0) {
            redis.set(cacheKey, results, {
                ex: CACHE_TTL
            }).catch(()=>{});
        }
        return Response.json({
            results,
            prefix,
            source: 'api'
        });
    } catch (err) {
        console.error('Suggestions API error:', err);
        return Response.json({
            results: [],
            prefix
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6c6303f1._.js.map