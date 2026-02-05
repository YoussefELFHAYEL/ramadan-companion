'use client';

import { useState, useEffect, useCallback } from 'react';

// Cache for session - instant on refresh button
let cachedNames = null;

export const useAsmaAlHusna = () => {
    const [name, setName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchName = useCallback(async (forceNew = false) => {
        // Use cached if available and not forcing new
        if (!forceNew && cachedNames) {
            const randomIndex = Math.floor(Math.random() * cachedNames.length);
            const nameData = cachedNames[randomIndex];
            setName({
                number: nameData.number,
                name: nameData.name,
                transliteration: nameData.transliteration,
                meaning: nameData.en.meaning,
            });
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Fetch ALL names once (faster than individual requests)
            const res = await fetch('https://api.aladhan.com/v1/asmaAlHusna');
            if (!res.ok) throw new Error('Failed to fetch');

            const data = await res.json();
            if (data.code === 200 && data.data?.length > 0) {
                cachedNames = data.data;
                const randomIndex = Math.floor(Math.random() * cachedNames.length);
                const nameData = cachedNames[randomIndex];
                setName({
                    number: nameData.number,
                    name: nameData.name,
                    transliteration: nameData.transliteration,
                    meaning: nameData.en.meaning,
                });
            } else {
                throw new Error('Invalid response');
            }
        } catch (err) {
            setError('Failed to load Name of Allah');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchName();
    }, [fetchName]);

    const refresh = () => {
        // Just pick new random from cache (instant!)
        if (cachedNames) {
            const randomIndex = Math.floor(Math.random() * cachedNames.length);
            const nameData = cachedNames[randomIndex];
            setName({
                number: nameData.number,
                name: nameData.name,
                transliteration: nameData.transliteration,
                meaning: nameData.en.meaning,
            });
        } else {
            fetchName(true);
        }
    };

    return { name, loading, error, refresh };
};

export default useAsmaAlHusna;
