'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, MapPin, RefreshCcw, Search, Loader2 } from 'lucide-react';

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

// Default city for first-time visitors
const DEFAULT_CITY = 'Mecca';
const DEFAULT_COUNTRY = 'Saudi Arabia';

export default function Home() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isClient, setIsClient] = useState(false);
    const [hasUserChosen, setHasUserChosen] = useState(false);

    // Inline search state (for header search bar)
    const [headerQuery, setHeaderQuery] = useState('');
    const [headerSuggestions, setHeaderSuggestions] = useState([]);
    const [headerOpen, setHeaderOpen] = useState(false);
    const [headerLoading, setHeaderLoading] = useState(false);
    const [headerSelectedIndex, setHeaderSelectedIndex] = useState(-1);

    const headerInputRef = useRef(null);
    const headerDropdownRef = useRef(null);
    const headerDebounceRef = useRef(null);
    const headerAbortRef = useRef(null);
    const headerPrefixCache = useRef({});
    const headerFullResults = useRef([]);
    const headerCurrentPrefix = useRef('');

    // Load saved city from localStorage on client
    useEffect(() => {
        setIsClient(true);
        const savedCity = localStorage.getItem('ramadan-companion-city') || '';
        const savedCountry = localStorage.getItem('ramadan-companion-country') || '';

        if (savedCity) {
            setCity(savedCity);
            setCountry(savedCountry);
            setHasUserChosen(true);
        } else {
            // First visit: load default city
            setCity(DEFAULT_CITY);
            setCountry(DEFAULT_COUNTRY);
            setHasUserChosen(false);
        }
    }, []);

    const { prayerTimes, loading: prayerLoading, error: prayerError } = usePrayerTimes(city, country);
    const { name: asmaName, loading: asmaLoading, error: asmaError, refresh: refreshAsma } = useAsmaAlHusna();

    // Save city to localStorage when user explicitly chooses
    useEffect(() => {
        if (city && hasUserChosen) {
            localStorage.setItem('ramadan-companion-city', city);
            localStorage.setItem('ramadan-companion-country', country);
        }
    }, [city, country, hasUserChosen]);

    const handleCitySubmit = (selectedCity, selectedCountry = '') => {
        setCity(selectedCity);
        setCountry(selectedCountry);
        setHasUserChosen(true);
        setHeaderQuery('');
        setHeaderOpen(false);
        setHeaderSuggestions([]);
    };

    // ========================================
    // HEADER INLINE SEARCH LOGIC
    // ========================================
    const getPrefix = (q) => q?.toLowerCase().trim().substring(0, 3) || '';

    const filterLocally = (searchQuery) => {
        if (!headerFullResults.current.length) return [];
        const lowerQuery = searchQuery.toLowerCase().trim();
        return headerFullResults.current.filter(item =>
            item.city.toLowerCase().includes(lowerQuery) ||
            item.country.toLowerCase().includes(lowerQuery) ||
            item.formatted.toLowerCase().includes(lowerQuery)
        );
    };

    const fetchHeaderSuggestions = async (searchQuery) => {
        const prefix = getPrefix(searchQuery);

        if (headerPrefixCache.current[prefix]) {
            headerFullResults.current = headerPrefixCache.current[prefix];
            headerCurrentPrefix.current = prefix;
            const filtered = filterLocally(searchQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
            return;
        }

        if (headerAbortRef.current) headerAbortRef.current.abort();
        headerAbortRef.current = new AbortController();
        setHeaderLoading(true);

        try {
            const res = await fetch(`/api/suggestions?q=${encodeURIComponent(searchQuery)}`, {
                signal: headerAbortRef.current.signal,
            });
            const data = await res.json();
            const results = data.results || [];

            headerPrefixCache.current[prefix] = results;
            headerFullResults.current = results;
            headerCurrentPrefix.current = prefix;

            const filtered = filterLocally(searchQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
        } catch (err) {
            if (err.name !== 'AbortError') setHeaderSuggestions([]);
        } finally {
            setHeaderLoading(false);
        }
    };

    useEffect(() => {
        if (headerDebounceRef.current) clearTimeout(headerDebounceRef.current);

        if (headerQuery.length < 3) {
            setHeaderSuggestions([]);
            setHeaderOpen(false);
            return;
        }

        const prefix = getPrefix(headerQuery);

        if (prefix === headerCurrentPrefix.current && headerFullResults.current.length > 0) {
            const filtered = filterLocally(headerQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
            return;
        }

        if (headerPrefixCache.current[prefix]) {
            headerFullResults.current = headerPrefixCache.current[prefix];
            headerCurrentPrefix.current = prefix;
            const filtered = filterLocally(headerQuery);
            setHeaderSuggestions(filtered);
            setHeaderOpen(filtered.length > 0);
            return;
        }

        headerDebounceRef.current = setTimeout(() => {
            fetchHeaderSuggestions(headerQuery);
        }, 400);

        return () => {
            if (headerDebounceRef.current) clearTimeout(headerDebounceRef.current);
        };
    }, [headerQuery]);

    // Click outside to close header dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                headerDropdownRef.current && !headerDropdownRef.current.contains(e.target) &&
                headerInputRef.current && !headerInputRef.current.contains(e.target)
            ) {
                setHeaderOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleHeaderKeyDown = (e) => {
        if (!headerOpen || headerSuggestions.length === 0) {
            if (e.key === 'Enter' && headerQuery.trim()) {
                handleCitySubmit(headerQuery.trim(), '');
            }
            return;
        }
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setHeaderSelectedIndex(prev => prev < headerSuggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setHeaderSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (headerSelectedIndex >= 0) {
                    const s = headerSuggestions[headerSelectedIndex];
                    handleCitySubmit(s.city, s.country);
                } else if (headerQuery.trim()) {
                    handleCitySubmit(headerQuery.trim(), '');
                }
                break;
            case 'Escape':
                setHeaderOpen(false);
                setHeaderSelectedIndex(-1);
                break;
        }
    };

    // Prevent hydration mismatch
    if (!isClient) {
        return (
            <div className="bg-gradient-mesh min-h-screen flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-mesh min-h-screen">
            {/* ============================================ */}
            {/* HERO: Only shown when user hasn't chosen yet */}
            {/* ============================================ */}
            <AnimatePresence>
                {!hasUserChosen && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SmartSearch
                            onSubmit={handleCitySubmit}
                            savedCity={city}
                            hasCity={hasUserChosen}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ============================================ */}
            {/* DASHBOARD (always visible)                   */}
            {/* ============================================ */}
            <div className="app-container py-10 relative z-10">

                {/* Header with Inline Search */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        {/* Left: Branding + City */}
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

                        {/* Right: Compact Inline Search */}
                        <div className="relative w-full sm:w-auto">
                            <div
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 hover:border-emerald-500/30 transition-all duration-300"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(12px)',
                                }}
                            >
                                <Search className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <input
                                    ref={headerInputRef}
                                    type="text"
                                    value={headerQuery}
                                    onChange={(e) => {
                                        setHeaderQuery(e.target.value);
                                        setHeaderSelectedIndex(-1);
                                    }}
                                    onKeyDown={handleHeaderKeyDown}
                                    placeholder="Change city…"
                                    className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-32 sm:w-40 focus:w-48 transition-all"
                                    autoComplete="off"
                                />
                                {headerLoading && (
                                    <Loader2 className="w-4 h-4 text-emerald-400 animate-spin flex-shrink-0" />
                                )}
                            </div>

                            {/* Header Dropdown */}
                            <AnimatePresence>
                                {headerOpen && headerSuggestions.length > 0 && (
                                    <motion.div
                                        ref={headerDropdownRef}
                                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full right-0 mt-2 w-72 rounded-2xl overflow-hidden z-50 max-h-60 overflow-y-auto"
                                        style={{
                                            background: 'rgba(15, 23, 42, 0.95)',
                                            backdropFilter: 'blur(24px)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
                                        }}
                                    >
                                        {headerSuggestions.map((suggestion, index) => (
                                            <div
                                                key={`${suggestion.city}-${suggestion.country}-${index}`}
                                                onClick={() => handleCitySubmit(suggestion.city, suggestion.country)}
                                                className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-all duration-150 border-b border-white/5 last:border-b-0 ${index === headerSelectedIndex
                                                        ? 'bg-emerald-500/20 text-white'
                                                        : 'hover:bg-white/5 text-gray-300'
                                                    }`}
                                            >
                                                <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${index === headerSelectedIndex ? 'text-emerald-400' : 'text-gray-500'
                                                    }`} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">{suggestion.city}</p>
                                                    <p className="text-xs text-gray-500 truncate">{suggestion.country}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
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
