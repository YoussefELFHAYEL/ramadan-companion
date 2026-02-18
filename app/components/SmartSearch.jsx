'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, Globe, Loader2 } from 'lucide-react';

// ========================================
// COMPACT HERO SEARCH (Collapsible)
// ========================================
const SmartSearch = ({ onSubmit, savedCity, hasCity }) => {
    const [query, setQuery] = useState(savedCity || '');
    const [suggestions, setSuggestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [isLoading, setIsLoading] = useState(false);

    // Cache: { prefix: [results] } - stores full list for each 3-char prefix
    const prefixCache = useRef({});
    const currentPrefix = useRef('');
    const fullResults = useRef([]);

    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const abortRef = useRef(null);
    const debounceRef = useRef(null);

    const getPrefix = (q) => q?.toLowerCase().trim().substring(0, 3) || '';

    // ========================================
    // LOCAL FILTERING
    // ========================================
    const filterLocally = useCallback((searchQuery) => {
        if (!fullResults.current.length) return [];
        const lowerQuery = searchQuery.toLowerCase().trim();
        return fullResults.current.filter(item =>
            item.city.toLowerCase().includes(lowerQuery) ||
            item.country.toLowerCase().includes(lowerQuery) ||
            item.formatted.toLowerCase().includes(lowerQuery)
        );
    }, []);

    // ========================================
    // FETCH FROM BACKEND (only for new prefix)
    // ========================================
    const fetchSuggestions = useCallback(async (searchQuery) => {
        const prefix = getPrefix(searchQuery);

        if (prefixCache.current[prefix]) {
            fullResults.current = prefixCache.current[prefix];
            currentPrefix.current = prefix;
            const filtered = filterLocally(searchQuery);
            setSuggestions(filtered);
            setIsOpen(filtered.length > 0);
            return;
        }

        if (abortRef.current) abortRef.current.abort();
        abortRef.current = new AbortController();
        setIsLoading(true);

        try {
            const res = await fetch(`/api/suggestions?q=${encodeURIComponent(searchQuery)}`, {
                signal: abortRef.current.signal,
            });
            const data = await res.json();
            const results = data.results || [];

            prefixCache.current[prefix] = results;
            fullResults.current = results;
            currentPrefix.current = prefix;

            const filtered = filterLocally(searchQuery);
            setSuggestions(filtered);
            setIsOpen(filtered.length > 0);
        } catch (err) {
            if (err.name !== 'AbortError') {
                setSuggestions([]);
            }
        } finally {
            setIsLoading(false);
        }
    }, [filterLocally]);

    // ========================================
    // SMART INPUT HANDLER
    // ========================================
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);

        if (query.length < 3) {
            setSuggestions([]);
            setIsOpen(false);
            return;
        }

        const prefix = getPrefix(query);

        if (prefix === currentPrefix.current && fullResults.current.length > 0) {
            const filtered = filterLocally(query);
            setSuggestions(filtered);
            setIsOpen(filtered.length > 0);
            return;
        }

        if (prefixCache.current[prefix]) {
            fullResults.current = prefixCache.current[prefix];
            currentPrefix.current = prefix;
            const filtered = filterLocally(query);
            setSuggestions(filtered);
            setIsOpen(filtered.length > 0);
            return;
        }

        debounceRef.current = setTimeout(() => {
            fetchSuggestions(query);
        }, 400);

        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [query, fetchSuggestions, filterLocally]);

    // ========================================
    // CLICK OUTSIDE TO CLOSE
    // ========================================
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(e.target) &&
                inputRef.current && !inputRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // ========================================
    // KEYBOARD NAVIGATION
    // ========================================
    const handleKeyDown = (e) => {
        if (!isOpen || suggestions.length === 0) {
            if (e.key === 'Enter' && query.trim()) handleManualSubmit();
            return;
        }
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => prev < suggestions.length - 1 ? prev + 1 : prev);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) handleSelectCity(suggestions[selectedIndex]);
                else if (query.trim()) handleManualSubmit();
                break;
            case 'Escape':
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    const handleSelectCity = (suggestion) => {
        setQuery(suggestion.city);
        setIsOpen(false);
        setSelectedIndex(-1);
        setSuggestions([]);
        onSubmit(suggestion.city, suggestion.country);
    };

    const handleManualSubmit = () => {
        if (query.trim()) {
            setIsOpen(false);
            onSubmit(query.trim(), '');
        }
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setSelectedIndex(-1);
    };

    const highlightMatch = (text, searchQuery) => {
        if (!searchQuery.trim() || !text) return text;
        const escaped = searchQuery.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part) ? (
                <span key={i} className="text-emerald-400 font-semibold">{part}</span>
            ) : part
        );
    };

    const popularCities = [
        { city: 'Mecca', country: 'Saudi Arabia' },
        { city: 'Casablanca', country: 'Morocco' },
        { city: 'Cairo', country: 'Egypt' },
        { city: 'Istanbul', country: 'Turkey' },
        { city: 'Dubai', country: 'United Arab Emirates' },
        { city: 'London', country: 'United Kingdom' },
    ];

    // ========================================
    // COLLAPSED VIEW (city already selected)
    // ========================================
    if (hasCity) {
        return null; // Header handles display when city is selected
    }

    // ========================================
    // EXPANDED HERO (no city yet / first visit)
    // ========================================
    return (
        <div className="pt-16 pb-10 px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl mx-auto"
            >
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="mb-4"
                >
                    <span className="text-7xl">🌙</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                    Ramadan Companion
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-10">
                    Your spiritual guide for the blessed month
                </p>

                {/* Search Bar */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="glass-card-elevated p-2 flex items-center gap-2"
                    >
                        <div className="pl-4">
                            <MapPin className="w-5 h-5 text-emerald-400" />
                        </div>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInputChange}
                            onFocus={() => suggestions.length > 0 && setIsOpen(true)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search for your city..."
                            className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 py-3"
                            autoComplete="off"
                        />
                        {isLoading && <Loader2 className="w-5 h-5 text-emerald-400 animate-spin" />}
                        <button
                            type="button"
                            onClick={handleManualSubmit}
                            className="btn-primary flex items-center gap-2 m-1 rounded-xl"
                        >
                            <Search className="w-5 h-5" />
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </motion.div>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {isOpen && suggestions.length > 0 && (
                            <motion.div
                                ref={dropdownRef}
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden z-50 max-h-80 overflow-y-auto"
                                style={{
                                    background: 'rgba(15, 23, 42, 0.95)',
                                    backdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    boxShadow: '0 24px 48px rgba(0, 0, 0, 0.4)',
                                }}
                            >
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={`${suggestion.city}-${suggestion.country}-${index}`}
                                        onClick={() => handleSelectCity(suggestion)}
                                        className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer transition-all duration-150 border-b border-white/5 last:border-b-0 ${index === selectedIndex
                                                ? 'bg-emerald-500/20 text-white'
                                                : 'hover:bg-white/5 text-gray-300'
                                            }`}
                                    >
                                        <MapPin className={`w-4 h-4 flex-shrink-0 ${index === selectedIndex ? 'text-emerald-400' : 'text-gray-500'
                                            }`} />
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium truncate">
                                                {highlightMatch(suggestion.city, query)}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate">
                                                {suggestion.country}
                                            </p>
                                        </div>
                                        {index === selectedIndex && (
                                            <span className="text-xs text-gray-500 flex-shrink-0">Enter ↵</span>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <p className="text-gray-500 text-sm mt-6">
                    Type at least 3 characters · Use ↑↓ to navigate · Enter to select
                </p>

                {/* Popular Cities - Premium Chips */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-10"
                >
                    <p className="text-gray-500 text-sm mb-4">Popular cities</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {popularCities.map((cityData, index) => (
                            <motion.button
                                key={cityData.city}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.05 }}
                                whileHover={{ y: -3, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    setQuery(cityData.city);
                                    onSubmit(cityData.city, cityData.country);
                                }}
                                className="group relative px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 transition-all duration-300 border border-white/10 hover:border-emerald-500/50 hover:text-white"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(13, 148, 136, 0.1) 100%)',
                                    }}
                                />
                                <span className="relative z-10 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                                    {cityData.city}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="mt-10"
                >
                    <p className="text-gray-600 text-xs">↓ Scroll down for prayer times ↓</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SmartSearch;
