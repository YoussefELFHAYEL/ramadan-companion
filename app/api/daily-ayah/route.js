import { Redis } from '@upstash/redis';

// ========================================
// WARMED REDIS CLIENT
// ========================================
const redis = new Redis({
    url: 'https://keen-weevil-41108.upstash.io',
    token: 'AaCUAAIncDIxN2I5MGVmYzcyZDg0YzEwOGM3Y2I1OWQxYjlkMzhmNnAyNDExMDg',
});

// Constants
const TOTAL_AYAHS = 6236;
const CACHE_TTL = 86400; // 24 hours

// ========================================
// HELPERS
// ========================================
const getTodayKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// Deterministic "random" based on date - same verse all day for everyone
const getAyahIdForDate = (dateStr) => {
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = ((hash << 5) - hash) + dateStr.charCodeAt(i);
        hash = hash & hash;
    }
    return (Math.abs(hash) % TOTAL_AYAHS) + 1;
};

const fetchAyah = async (ayahId) => {
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
            englishNameTranslation: arabic.surah.englishNameTranslation,
        },
        numberInSurah: arabic.numberInSurah,
        juz: arabic.juz,
    };
};

// ========================================
// API HANDLER
// ========================================
export async function GET() {
    const today = getTodayKey();
    const cacheKey = `ayah:daily:${today}`;

    try {
        // ========================================
        // 1. INSTANT REDIS CHECK
        // ========================================
        const cached = await redis.get(cacheKey);
        if (cached) {
            return Response.json({ ayah: cached, source: 'cache', date: today });
        }

        // ========================================
        // 2. FETCH FROM AL QURAN CLOUD
        // ========================================
        const ayahId = getAyahIdForDate(today);
        const ayah = await fetchAyah(ayahId);

        // ========================================
        // 3. CACHE FOR 24 HOURS
        // ========================================
        redis.set(cacheKey, ayah, { ex: CACHE_TTL }).catch(() => { });

        return Response.json({ ayah, source: 'api', date: today });

    } catch (err) {
        console.error('Daily Ayah error:', err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}
