import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Sparkles, Globe } from 'lucide-react';
import cities from '../data/cities';

const SmartSearch = ({ onSubmit, savedCity }) => {
    const [query, setQuery] = useState(savedCity || '');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    // Filter cities based on query
    const filteredCities = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return cities
            .filter(city =>
                city.name.toLowerCase().includes(lowerQuery) ||
                city.country.toLowerCase().includes(lowerQuery)
            )
            .slice(0, 8); // Limit to 8 suggestions
    }, [query]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                inputRef.current &&
                !inputRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Keyboard navigation
    const handleKeyDown = (e) => {
        if (!isOpen || filteredCities.length === 0) {
            if (e.key === 'Enter' && query.trim()) {
                onSubmit(query.trim());
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev =>
                    prev < filteredCities.length - 1 ? prev + 1 : prev
                );
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
                break;
            case 'Enter':
                e.preventDefault();
                if (selectedIndex >= 0) {
                    handleSelectCity(filteredCities[selectedIndex]);
                } else if (query.trim()) {
                    onSubmit(query.trim());
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setSelectedIndex(-1);
                break;
        }
    };

    const handleSelectCity = (city) => {
        setQuery(city.name);
        setIsOpen(false);
        setSelectedIndex(-1);
        onSubmit(city.name);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        setIsOpen(true);
        setSelectedIndex(-1);
    };

    // Highlight matching text
    const highlightMatch = (text, query) => {
        if (!query.trim()) return text;
        const regex = new RegExp(`(${query.trim()})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, i) =>
            regex.test(part) ? (
                <span key={i} className="highlight">{part}</span>
            ) : (
                part
            )
        );
    };

    const popularCities = ['Mecca', 'Casablanca', 'Cairo', 'Istanbul', 'Dubai', 'London'];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-24 left-16"
            >
                <Sparkles className="w-10 h-10 text-emerald-400" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute bottom-32 right-20"
            >
                <Globe className="w-16 h-16 text-amber-400" />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-xl w-full"
            >
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mb-4"
                >
                    <span className="text-7xl">🌙</span>
                </motion.div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                    Ramadan Companion
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-12">
                    Your spiritual guide for the blessed month
                </p>

                {/* Smart Search */}
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
                            onFocus={() => query && setIsOpen(true)}
                            onKeyDown={handleKeyDown}
                            placeholder="Search for your city..."
                            className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 py-3"
                            autoComplete="off"
                        />

                        <button
                            type="button"
                            onClick={() => query.trim() && onSubmit(query.trim())}
                            className="btn-primary flex items-center gap-2 m-1 rounded-xl"
                        >
                            <Search className="w-5 h-5" />
                            <span className="hidden sm:inline">Search</span>
                        </button>
                    </motion.div>

                    {/* Dropdown */}
                    <AnimatePresence>
                        {isOpen && filteredCities.length > 0 && (
                            <motion.div
                                ref={dropdownRef}
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="search-dropdown"
                            >
                                {filteredCities.map((city, index) => (
                                    <div
                                        key={`${city.name}-${city.country}`}
                                        onClick={() => handleSelectCity(city)}
                                        className={`search-item flex items-center justify-between ${index === selectedIndex ? 'selected' : ''
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <MapPin className="w-4 h-4 text-emerald-400/60" />
                                            <div>
                                                <p className="text-white font-medium">
                                                    {highlightMatch(city.name, query)}
                                                </p>
                                                <p className="text-gray-500 text-sm">{city.country}</p>
                                            </div>
                                        </div>
                                        {index === selectedIndex && (
                                            <span className="text-xs text-gray-500">Enter ↵</span>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Helper Text */}
                <p className="text-gray-500 text-sm mt-6">
                    Start typing to see suggestions · Press Enter to search
                </p>

                {/* Popular Cities */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-10 flex flex-wrap justify-center gap-2"
                >
                    {popularCities.map((city) => (
                        <button
                            key={city}
                            onClick={() => {
                                setQuery(city);
                                onSubmit(city);
                            }}
                            className="px-4 py-2 rounded-full text-sm text-gray-400 bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 transition-all duration-300 border border-white/5 hover:border-emerald-500/30"
                        >
                            {city}
                        </button>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default SmartSearch;
