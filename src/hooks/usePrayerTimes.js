import { useState, useEffect, useRef, useCallback } from 'react';

// Debounce helper
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

// Get today's date string in DD-MM-YYYY format (AlAdhan format)
function getTodayKey() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}

// Filter monthly data to get today's timings
function filterTodayTimings(monthData) {
    if (!Array.isArray(monthData)) return null;

    const todayKey = getTodayKey();
    const today = new Date();
    const dayOfMonth = today.getDate();

    // Try to find by array index (day - 1)
    const byIndex = monthData[dayOfMonth - 1];
    if (byIndex) {
        return {
            ...byIndex.timings,
            date: byIndex.date?.readable || todayKey,
            hijri: byIndex.date?.hijri,
        };
    }

    // Fallback: search by date
    for (const day of monthData) {
        if (day.date?.gregorian?.date === todayKey) {
            return {
                ...day.timings,
                date: day.date?.readable || todayKey,
                hijri: day.date?.hijri,
            };
        }
    }

    return null;
}

// Clean time string (remove timezone info like "(CET)")
function cleanTimings(timings) {
    if (!timings) return null;

    const cleaned = {};
    for (const [key, value] of Object.entries(timings)) {
        if (typeof value === 'string') {
            // Remove timezone info like " (CET)" or " (CEST)"
            cleaned[key] = value.replace(/\s*\([^)]*\)\s*$/, '');
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
}

export default function usePrayerTimes(city, country = '') {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [monthlyData, setMonthlyData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortControllerRef = useRef(null);

    // Debounce city/country changes (400ms)
    const debouncedCity = useDebounce(city, 400);
    const debouncedCountry = useDebounce(country, 400);

    const fetchPrayerTimes = useCallback(async () => {
        if (!debouncedCity) {
            setPrayerTimes(null);
            setMonthlyData(null);
            setError(null);
            return;
        }

        // Cancel previous request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        abortControllerRef.current = new AbortController();

        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({
                city: debouncedCity,
                ...(debouncedCountry && { country: debouncedCountry }),
                method: '2', // Islamic Society of North America
            });

            const response = await fetch(`/api/prayer-times?${params}`, {
                signal: abortControllerRef.current.signal,
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP ${response.status}`);
            }

            const result = await response.json();

            if (!result.data) {
                throw new Error('No prayer data received');
            }

            // Store full monthly data
            setMonthlyData(result.data);

            // Filter to get today's timings
            const todayTimings = filterTodayTimings(result.data);

            if (!todayTimings) {
                throw new Error('Could not find prayer times for today');
            }

            // Clean timezone info from times
            const cleanedTimings = cleanTimings(todayTimings);
            setPrayerTimes(cleanedTimings);

        } catch (err) {
            if (err.name === 'AbortError') {
                return; // Ignore abort errors
            }
            console.error('Prayer times fetch error:', err);
            setError(err.message || 'Failed to fetch prayer times');
            setPrayerTimes(null);
        } finally {
            setLoading(false);
        }
    }, [debouncedCity, debouncedCountry]);

    // Fetch on city/country change
    useEffect(() => {
        fetchPrayerTimes();

        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [fetchPrayerTimes]);

    // Update today's timings at midnight
    useEffect(() => {
        if (!monthlyData) return;

        const updateAtMidnight = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 5, 0); // 12:00:05 AM

            const msUntilMidnight = tomorrow - now;

            return setTimeout(() => {
                const todayTimings = filterTodayTimings(monthlyData);
                if (todayTimings) {
                    setPrayerTimes(cleanTimings(todayTimings));
                }
                // Schedule next update
                updateAtMidnight();
            }, msUntilMidnight);
        };

        const timeout = updateAtMidnight();
        return () => clearTimeout(timeout);
    }, [monthlyData]);

    return { prayerTimes, monthlyData, loading, error, refetch: fetchPrayerTimes };
}
