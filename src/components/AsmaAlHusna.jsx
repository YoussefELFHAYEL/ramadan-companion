import { motion } from 'framer-motion';
import { RefreshCw, Star, Sparkles } from 'lucide-react';
import Skeleton from './Skeleton';

const AsmaAlHusna = ({ name, loading, error, onRefresh }) => {
    if (loading) {
        return (
            <div className="glass-card p-10 text-center h-full flex flex-col justify-center">
                <Skeleton className="h-6 w-36 mx-auto mb-8" />
                <Skeleton className="h-24 w-64 mx-auto mb-6" />
                <Skeleton className="h-5 w-44 mx-auto mb-3" />
                <Skeleton className="h-4 w-52 mx-auto" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-card p-10 text-center h-full flex flex-col items-center justify-center">
                <p className="text-red-400 mb-6">{error}</p>
                <button onClick={onRefresh} className="btn-primary text-sm px-6 py-3">
                    Try Again
                </button>
            </div>
        );
    }

    if (!name) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-8 md:p-10 text-center h-full relative overflow-hidden flex flex-col justify-center"
        >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative flex items-center justify-between mb-10">
                <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400/50" />
                    <h3 className="text-base font-medium text-gray-400">Name of the Day</h3>
                </div>
                <motion.button
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                    onClick={onRefresh}
                    className="p-3 rounded-full bg-white/3 hover:bg-emerald-500/10 transition-colors group border border-white/5"
                    title="Learn another name"
                >
                    <RefreshCw className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                </motion.button>
            </div>

            {/* Arabic Name - Massive & Golden */}
            <motion.div
                key={name.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8"
            >
                <p className="arabic-font arabic-golden text-7xl md:text-8xl font-bold leading-relaxed">
                    {name.name}
                </p>
                <Sparkles className="absolute -top-3 -right-1 w-5 h-5 text-amber-400/30" />
            </motion.div>

            {/* Number Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-amber-500/5 border border-amber-500/10 text-amber-400/80 text-sm mb-6 mx-auto">
                <span className="font-medium">#{name.number}</span>
                <span className="text-amber-400/40">of 99</span>
            </div>

            {/* Transliteration */}
            <p className="text-xl md:text-2xl text-emerald-400/90 font-medium mb-4">
                {name.transliteration}
            </p>

            {/* Meaning */}
            <p className="text-gray-400 text-lg font-light italic">
                "{name.meaning}"
            </p>
        </motion.div>
    );
};

export default AsmaAlHusna;
