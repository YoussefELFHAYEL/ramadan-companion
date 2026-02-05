'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Pause, Languages, Volume2, RotateCcw } from 'lucide-react';
import Skeleton from './Skeleton';

const DailyAyah = () => {
    const [ayah, setAyah] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showTranslation, setShowTranslation] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const audioRef = useRef(null);

    // Fetch daily ayah
    useEffect(() => {
        const fetchAyah = async () => {
            try {
                const res = await fetch('/api/daily-ayah');
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setAyah(data.ayah);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchAyah();
    }, []);

    // Audio event handlers
    useEffect(() => {
        if (!audioRef.current) return;

        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            setIsPlaying(false);
            setProgress(0);
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [ayah]);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const resetAudio = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        setProgress(0);
        setIsPlaying(false);
    };

    if (loading) {
        return (
            <div className="glass-card p-8 md:p-10">
                <div className="flex items-center gap-2 mb-8">
                    <Skeleton className="h-5 w-5 rounded" />
                    <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="h-20 w-full mb-6" />
                <Skeleton className="h-4 w-48 mx-auto" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="glass-card p-8 md:p-10 text-center">
                <BookOpen className="w-8 h-8 text-gray-500 mx-auto mb-4" />
                <p className="text-red-400">{error}</p>
            </div>
        );
    }

    if (!ayah) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 relative overflow-hidden"
        >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
            </div>

            {/* Header */}
            <div className="relative flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base font-medium text-gray-400">Verse of the Day</h3>
                </div>

                {/* Translation Toggle */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowTranslation(!showTranslation)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${showTranslation
                            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                            : 'border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                        }`}
                    style={{ backdropFilter: 'blur(8px)' }}
                >
                    <Languages className="w-4 h-4" />
                    <span className="hidden sm:inline">{showTranslation ? 'Arabic' : 'English'}</span>
                </motion.button>
            </div>

            {/* Arabic Text */}
            <motion.div
                key={showTranslation ? 'translation' : 'arabic'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative mb-8"
            >
                {showTranslation ? (
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center italic font-light">
                        "{ayah.translation}"
                    </p>
                ) : (
                    <p className="arabic-font text-3xl md:text-4xl lg:text-5xl text-center leading-loose text-white/90 arabic-golden">
                        {ayah.arabic}
                    </p>
                )}
            </motion.div>

            {/* Audio Player */}
            <div className="flex items-center justify-center gap-4 mb-8">
                <audio ref={audioRef} src={ayah.audioUrl} preload="none" />

                {/* Play/Pause Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={togglePlay}
                    className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
                    style={{
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(13, 148, 136, 0.2) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        boxShadow: isPlaying ? '0 0 30px rgba(16, 185, 129, 0.3)' : 'none',
                    }}
                >
                    {isPlaying ? (
                        <Pause className="w-6 h-6 text-emerald-400" />
                    ) : (
                        <Play className="w-6 h-6 text-emerald-400 ml-1" />
                    )}
                </motion.button>

                {/* Reset Button */}
                {progress > 0 && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetAudio}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                    >
                        <RotateCcw className="w-4 h-4 text-gray-400" />
                    </motion.button>
                )}
            </div>

            {/* Progress Bar */}
            {(isPlaying || progress > 0) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-1 bg-white/10 rounded-full overflow-hidden mb-8 max-w-md mx-auto"
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </motion.div>
            )}

            {/* Surah Reference */}
            <div className="text-center">
                <p className="text-sm text-gray-500">
                    <span className="text-emerald-400/80">{ayah.surah.englishName}</span>
                    <span className="mx-2">•</span>
                    <span>{ayah.surah.number}:{ayah.numberInSurah}</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                    {ayah.surah.englishNameTranslation}
                </p>
            </div>
        </motion.div>
    );
};

export default DailyAyah;
