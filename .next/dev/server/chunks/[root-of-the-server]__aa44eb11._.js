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
"[project]/OneDrive - Akumenia/Bureau/ramlive/app/api/daily-ayah/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
const TOTAL_AYAHS = 6236;
const CACHE_TTL = 86400; // 24 hours
// ========================================
// HELPERS
// ========================================
const getTodayKey = ()=>{
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};
// Deterministic "random" based on date - same verse all day for everyone
const getAyahIdForDate = (dateStr)=>{
    let hash = 0;
    for(let i = 0; i < dateStr.length; i++){
        hash = (hash << 5) - hash + dateStr.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash) % TOTAL_AYAHS + 1;
};
const fetchAyah = async (ayahId)=>{
    const url = `https://api.alquran.cloud/v1/ayah/${ayahId}/editions/quran-uthmani,en.asad,ar.alafasy`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`AlQuran API: ${res.status}`);
    const json = await res.json();
    if (json.code !== 200 || !json.data) throw new Error('Invalid response');
    const [arabic, english, audio] = json.data;
    return {
        number: ayahId,
        arabic: arabic.text,
        translation: english.text,
        audioUrl: audio.audio,
        surah: {
            number: arabic.surah.number,
            name: arabic.surah.name,
            englishName: arabic.surah.englishName,
            englishNameTranslation: arabic.surah.englishNameTranslation
        },
        numberInSurah: arabic.numberInSurah,
        juz: arabic.juz
    };
};
async function GET() {
    const today = getTodayKey();
    const cacheKey = `ayah:daily:${today}`;
    try {
        // ========================================
        // 1. INSTANT REDIS CHECK
        // ========================================
        const cached = await redis.get(cacheKey);
        if (cached) {
            return Response.json({
                ayah: cached,
                source: 'cache',
                date: today
            });
        }
        // ========================================
        // 2. FETCH FROM AL QURAN CLOUD
        // ========================================
        const ayahId = getAyahIdForDate(today);
        const ayah = await fetchAyah(ayahId);
        // ========================================
        // 3. CACHE FOR 24 HOURS
        // ========================================
        redis.set(cacheKey, ayah, {
            ex: CACHE_TTL
        }).catch(()=>{});
        return Response.json({
            ayah,
            source: 'api',
            date: today
        });
    } catch (err) {
        console.error('Daily Ayah error:', err);
        return Response.json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aa44eb11._.js.map