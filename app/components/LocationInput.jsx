import { useState } from 'react';
import { MapPin, Search, Sparkles } from 'lucide-react';

const LocationInput = ({ onSubmit, savedCity }) => {
    const [city, setCity] = useState(savedCity || '');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim()) {
            onSubmit(city.trim());
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 relative z-10">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 opacity-20">
                <Sparkles className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="absolute bottom-32 right-16 opacity-20">
                <Sparkles className="w-6 h-6 text-amber-400" />
            </div>

            {/* Main Content */}
            <div className="text-center max-w-lg w-full fade-in">
                {/* Logo/Title */}
                <div className="mb-2">
                    <span className="text-6xl">🌙</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent">
                    Ramadan Companion
                </h1>

                <p className="text-gray-400 text-lg mb-10">
                    Your spiritual guide for the blessed month
                </p>

                {/* Location Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${isFocused
                                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-xl'
                                : ''
                            }`} />

                        <div className="relative glass-card p-2 flex items-center gap-2">
                            <div className="pl-4">
                                <MapPin className="w-5 h-5 text-emerald-400" />
                            </div>

                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="Which city are you in?"
                                className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 py-3"
                            />

                            <button
                                type="submit"
                                className="btn-primary flex items-center gap-2 m-1 rounded-xl"
                            >
                                <Search className="w-5 h-5" />
                                <span className="hidden sm:inline">Find</span>
                            </button>
                        </div>
                    </div>
                </form>

                {/* Hint Text */}
                <p className="text-gray-500 text-sm mt-6">
                    Enter your city to get accurate prayer times and fasting hours
                </p>

                {/* Popular Cities */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {['Casablanca', 'Mecca', 'Cairo', 'Istanbul', 'Dubai'].map((popularCity) => (
                        <button
                            key={popularCity}
                            onClick={() => {
                                setCity(popularCity);
                                onSubmit(popularCity);
                            }}
                            className="px-4 py-2 rounded-full text-sm text-gray-400 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-200 border border-white/10"
                        >
                            {popularCity}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationInput;
