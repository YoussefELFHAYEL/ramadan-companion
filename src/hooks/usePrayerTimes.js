import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

export const usePrayerTimes = (city) => {
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) {
            setPrayerTimes(null);
            return;
        }

        const fetchPrayerTimes = async () => {
            setLoading(true);
            setError(null);

            try {
                // Format date as DD-MM-YYYY
                const today = format(new Date(), 'dd-MM-yyyy');

                const response = await axios.get(
                    `https://api.aladhan.com/v1/timingsByCity/${today}`,
                    {
                        params: {
                            city: city,
                            country: '',
                            method: 3, // Muslim World League
                        },
                    }
                );

                if (response.data.code === 200) {
                    const timings = response.data.data.timings;
                    setPrayerTimes({
                        Fajr: timings.Fajr,
                        Sunrise: timings.Sunrise,
                        Dhuhr: timings.Dhuhr,
                        Asr: timings.Asr,
                        Maghrib: timings.Maghrib,
                        Isha: timings.Isha,
                        date: response.data.data.date.readable,
                        hijri: response.data.data.date.hijri,
                    });
                } else {
                    throw new Error('API returned an error');
                }
            } catch (err) {
                setError(
                    err.response?.status === 400
                        ? 'City not found. Please check the spelling and try again.'
                        : 'Failed to fetch prayer times. Please try again later.'
                );
                setPrayerTimes(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayerTimes();
    }, [city]);

    return { prayerTimes, loading, error };
};

export default usePrayerTimes;
