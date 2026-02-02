import { useMemo } from 'react';
import { motion } from 'framer-motion';

const FastingProgressBar = ({ prayerTimes }) => {
    const progressData = useMemo(() => {
        if (!prayerTimes) return null;

        const now = new Date();

        // Parse times
        const [fajrH, fajrM] = prayerTimes.Fajr.split(':').map(Number);
        const [maghribH, maghribM] = prayerTimes.Maghrib.split(':').map(Number);

        const fajr = new Date();
        fajr.setHours(fajrH, fajrM, 0, 0);

        const maghrib = new Date();
        maghrib.setHours(maghribH, maghribM, 0, 0);

        // Check if currently fasting
        const isFasting = now >= fajr && now < maghrib;

        if (!isFasting) {
            return { progress: 0, isFasting: false };
        }

        // Calculate progress
        const totalFastMs = maghrib - fajr;
        const elapsedMs = now - fajr;
        const progress = Math.min(100, Math.max(0, (elapsedMs / totalFastMs) * 100));

        return { progress, isFasting: true };
    }, [prayerTimes]);

    if (!progressData || !progressData.isFasting) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Fasting Progress</span>
                <span className="text-xs text-emerald-400 font-medium">
                    {Math.round(progressData.progress)}%
                </span>
            </div>
            <div className="progress-bar-track h-1">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressData.progress}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    className="progress-bar-fill h-full"
                />
            </div>
        </motion.div>
    );
};

export default FastingProgressBar;
