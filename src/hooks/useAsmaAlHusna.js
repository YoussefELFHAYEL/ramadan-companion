import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export const useAsmaAlHusna = () => {
    const [name, setName] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchName = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            // Generate random number between 1 and 99
            const randomNum = Math.floor(Math.random() * 99) + 1;

            const response = await axios.get(
                `https://api.aladhan.com/v1/asmaAlHusna/${randomNum}`
            );

            if (response.data.code === 200 && response.data.data.length > 0) {
                const nameData = response.data.data[0];
                setName({
                    number: nameData.number,
                    name: nameData.name,
                    transliteration: nameData.transliteration,
                    meaning: nameData.en.meaning,
                });
            } else {
                throw new Error('Failed to fetch name');
            }
        } catch (err) {
            setError('Failed to load Name of Allah. Please try again.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchName();
    }, [fetchName]);

    const refresh = () => {
        fetchName();
    };

    return { name, loading, error, refresh };
};

export default useAsmaAlHusna;
