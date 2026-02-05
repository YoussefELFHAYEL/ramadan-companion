'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// ========================================
// CONSTANTS
// ========================================
const DEBOUNCE_MS = 300;
const SKELETON_DELAY_MS = 150;
const CACHE_KEY_PREFIX = 'rc-prayer-';

// ========================================
// HELPERS
// ========================================
const getTodayIndex = () => new Date().getDate() - 1;

const filterTodayTimings = (monthData) => {
    if (!Array.isArray(monthData) || !monthData.length) return null;
    const dayData = monthData[getTodayIndex()];
    if (!dayData?.timings) return null;
    return {
        ...cleanTimings(dayData.timings),
        date: dayData.date?.readable,
        hijri: dayData.date?.hijri,
    };
};

const cleanTimings = (timings) => {
    const cleaned = {};
    for (const key in timings) {
        cleaned[key] = typeof timings[key] === 'string'
            ? timings[key].replace(/\s*\([^)]*\)$/, '')
            : timings[key];
    }
    return cleaned;
};

const getCacheKey = (city, country) =>
    `${CACHE_KEY_PREFIX}${city.toLowerCase()}-${(country || '').toLowerCase()}-${new Date().getMonth() + 1}`;

// ========================================
// LOCAL STORAGE CACHE
// ========================================
const getLocalCache = (city, country) => {
    if (typeof window === 'undefined') return null;
    try {
        const cached = localStorage.getItem(getCacheKey(city, country));
        if (cached) {
            const { data, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < 30 * 60 * 1000) return data;
        }
    } catch { }
    return null;
};

const setLocalCache = (city, country, data) => {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(getCacheKey(city, country), JSON.stringify({
            data, timestamp: Date.now(),
        }));
    } catch { }
};

// ========================================
// MAIN HOOK
// ========================================
export default function usePrayerTimes(city, country = '') {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [monthlyData, setMonthlyData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSkeleton, setShowSkeleton] = useState(false);
    const [error, setError] = useState(null);

    const abortRef = useRef(null);
    const debounceRef = useRef(null);
    const skeletonTimerRef = useRef(null);
    const isInitialMount = useRef(true);
    const hasCachedData = useRef(false);

    // Check for cached data on mount
    useEffect(() => {
        if (city) {
            const cached = getLocalCache(city, country);
            if (cached) {
                const todayTimings = filterTodayTimings(cached);
                if (todayTimings) {
                    setMonthlyData(cached);
                    setPrayerTimes(todayTimings);
                    hasCachedData.current = true;
                }
            }
        }
    }, []); // Only on mount

    const fetchPrayerTimes = useCallback(async (cityName, countryName) => {
        if (!cityName) {
            setPrayerTimes(null);
            setMonthlyData(null);
            setError(null);
            setLoading(false);
            setShowSkeleton(false);
            return;
        }

        // Check localStorage cache first
        const localData = getLocalCache(cityName, countryName);
        if (localData) {
            const todayTimings = filterTodayTimings(localData);
            if (todayTimings) {
                setMonthlyData(localData);
                setPrayerTimes(todayTimings);
                setError(null);
                hasCachedData.current = true;
            }
        }

        if (abortRef.current) abortRef.current.abort();
        abortRef.current = new AbortController();

        setLoading(true);
        setError(null);

        // Skeleton delay - only show if we don't have cached data
        if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);
        if (!hasCachedData.current) {
            skeletonTimerRef.current = setTimeout(() => setShowSkeleton(true), SKELETON_DELAY_MS);
        }

        try {
            const params = new URLSearchParams({
                city: cityName,
                ...(countryName && { country: countryName }),
                method: '2',
            });

            const res = await fetch(`/api/prayer-times?${params}`, {
                signal: abortRef.current.signal,
            });

            if (skeletonTimerRef.current) {
                clearTimeout(skeletonTimerRef.current);
                skeletonTimerRef.current = null;
            }

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || `HTTP ${res.status}`);
            }

            const result = await res.json();
            if (!result.data) throw new Error('No data received');

            const todayTimings = filterTodayTimings(result.data);
            if (!todayTimings) throw new Error('No prayer times for today');

            setMonthlyData(result.data);
            setPrayerTimes(todayTimings);
            setLocalCache(cityName, countryName, result.data);
            hasCachedData.current = true;

        } catch (err) {
            if (err.name === 'AbortError') return;
            setError(err.message);
        } finally {
            setLoading(false);
            setShowSkeleton(false);
            if (skeletonTimerRef.current) {
                clearTimeout(skeletonTimerRef.current);
                skeletonTimerRef.current = null;
            }
        }
    }, []); // No dependencies - stable function

    // Fetch on city/country change
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        // No debounce on initial mount
        if (isInitialMount.current) {
            isInitialMount.current = false;
            if (city) fetchPrayerTimes(city, country);
            return;
        }

        // Debounce subsequent changes
        if (city) {
            debounceRef.current = setTimeout(() => {
                fetchPrayerTimes(city, country);
            }, DEBOUNCE_MS);
        } else {
            fetchPrayerTimes('', '');
        }

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
            if (abortRef.current) abortRef.current.abort();
            if (skeletonTimerRef.current) clearTimeout(skeletonTimerRef.current);
        };
    }, [city, country, fetchPrayerTimes]);

    // Midnight update
    useEffect(() => {
        if (!monthlyData) return;
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 5, 0);
        const timeout = setTimeout(() => {
            const todayTimings = filterTodayTimings(monthlyData);
            if (todayTimings) setPrayerTimes(todayTimings);
        }, tomorrow - now);
        return () => clearTimeout(timeout);
    }, [monthlyData]);

    return {
        prayerTimes,
        monthlyData,
        loading: showSkeleton,
        error,
        refetch: () => fetchPrayerTimes(city, country)
    };
}
