'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, MapPin, RefreshCcw } from 'lucide-react';

// Components
import SmartSearch from './components/SmartSearch';
import FastingProgressBar from './components/FastingProgressBar';
import CountdownTimer from './components/CountdownTimer';
import AsmaAlHusna from './components/AsmaAlHusna';
import PrayerTimesGrid from './components/PrayerTimesGrid';
import AdkarSection from './components/AdkarSection';
import DailyAyah from './components/DailyAyah';

// Hooks
import usePrayerTimes from './hooks/usePrayerTimes';
import useAsmaAlHusna from './hooks/useAsmaAlHusna';

export default function Home() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isClient, setIsClient] = useState(false);

    // Load saved city from localStorage on client
    useEffect(() => {
        setIsClient(true);
        const savedCity = localStorage.getItem('ramadan-companion-city') || '';
        const savedCountry = localStorage.getItem('ramadan-companion-country') || '';
        setCity(savedCity);
        setCountry(savedCountry);
    }, []);

    const { prayerTimes, loading: prayerLoading, error: prayerError } = usePrayerTimes(city, country);
    const { name: asmaName, loading: asmaLoading, error: asmaError, refresh: refreshAsma } = useAsmaAlHusna();

    useEffect(() => {
        if (city) {
            localStorage.setItem('ramadan-companion-city', city);
            localStorage.setItem('ramadan-companion-country', country);
        }
    }, [city, country]);

    const handleCitySubmit = (selectedCity, selectedCountry = '') => {
        setCity(selectedCity);
        setCountry(selectedCountry);
    };

    const handleChangeCity = () => {
        setCity('');
        setCountry('');
        localStorage.removeItem('ramadan-companion-city');
        localStorage.removeItem('ramadan-companion-country');
    };

    // Prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="bg-gradient-mesh min-h-screen flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    // Show SmartSearch if no city selected
    if (!city) {
        return (
            <div className="bg-gradient-mesh min-h-screen">
                <SmartSearch onSubmit={handleCitySubmit} savedCity={city} />
            </div>
        );
    }

    return (
        <div className="bg-gradient-mesh min-h-screen">
            {/* Centered App Container */}
            <div className="app-container py-10 relative z-10">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="text-4xl">🌙</span>
                            <div>
                                <h1 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                    Ramadan Companion
                                </h1>
                                <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-0.5">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{city}{country ? `, ${country}` : ''}</span>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleChangeCity}
                            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 border border-emerald-500/30 hover:border-emerald-400/60"
                            style={{
                                background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(13, 148, 136, 0.15) 100%)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 24px rgba(16, 185, 129, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            <RefreshCcw className="w-4 h-4 text-emerald-400" />
                            <span className="hidden sm:inline">Change City</span>
                        </motion.button>
                    </div>
                </motion.header>

                {/* Main Content */}
                <main>
                    {/* Error Alert */}
                    {prayerError && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-5 flex items-center gap-4 border-red-500/15 bg-red-500/5 mb-8"
                        >
                            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                            <p className="text-red-300 font-light">{prayerError}</p>
                            <button
                                onClick={handleChangeCity}
                                className="ml-auto px-5 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/15 text-red-300 text-sm transition-colors border border-red-500/15"
                            >
                                Try Another City
                            </button>
                        </motion.div>
                    )}

                    {/* Fasting Progress Bar */}
                    <div className="mb-6">
                        <FastingProgressBar prayerTimes={prayerTimes} />
                    </div>

                    {/* Hero: Countdown Timer */}
                    <div className="text-center relative z-10">
                        <CountdownTimer prayerTimes={prayerTimes} loading={prayerLoading} />
                    </div>

                    {/* Prayer Times */}
                    <div className="mt-8 mb-12 relative z-10">
                        <PrayerTimesGrid prayerTimes={prayerTimes} loading={prayerLoading} />
                    </div>

                    {/* Bottom Row: Asma & Adkar */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                        <AsmaAlHusna
                            name={asmaName}
                            loading={asmaLoading}
                            error={asmaError}
                            onRefresh={refreshAsma}
                        />
                        <AdkarSection />
                    </div>

                    {/* Daily Ayah - Full Width */}
                    <div className="mt-12 relative z-10">
                        <DailyAyah />
                    </div>
                </main>

                {/* Footer */}
                <footer className="mt-20 text-center">
                    <p className="text-gray-500 font-light">May Allah accept your fasting and prayers 🤲</p>
                    <p className="mt-2 text-gray-600/60 text-sm">
                        Ramadan Companion • Made with ❤️ for the Ummah
                    </p>
                </footer>
            </div>
        </div>
    );
}
