import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sunrise, Sun, CloudSun, Sunset, Moon } from 'lucide-react';
import Skeleton from './Skeleton';

const PrayerTimesGrid = ({ prayerTimes, loading }) => {
    const [currentPrayerIndex, setCurrentPrayerIndex] = useState(-1);

    const prayers = useMemo(() => {
        if (!prayerTimes) return [];
        return [
            { name: 'Fajr', time: prayerTimes.Fajr, icon: Moon, color: 'text-blue-400' },
            { name: 'Sunrise', time: prayerTimes.Sunrise, icon: Sunrise, color: 'text-orange-300' },
            { name: 'Dhuhr', time: prayerTimes.Dhuhr, icon: Sun, color: 'text-yellow-400' },
            { name: 'Asr', time: prayerTimes.Asr, icon: CloudSun, color: 'text-amber-400' },
            { name: 'Maghrib', time: prayerTimes.Maghrib, icon: Sunset, color: 'text-orange-500' },
            { name: 'Isha', time: prayerTimes.Isha, icon: Moon, color: 'text-indigo-400' },
        ];
    }, [prayerTimes]);

    useEffect(() => {
        if (!prayerTimes) return;

        const updateCurrentPrayer = () => {
            const now = new Date();
            const currentTimeMinutes = now.getHours() * 60 + now.getMinutes();

            const prayerList = [
                prayerTimes.Fajr,
                prayerTimes.Sunrise,
                prayerTimes.Dhuhr,
                prayerTimes.Asr,
                prayerTimes.Maghrib,
                prayerTimes.Isha,
            ];

            for (let i = prayerList.length - 1; i >= 0; i--) {
                const [hours, minutes] = prayerList[i].split(':').map(Number);
                const prayerMinutes = hours * 60 + minutes;
                if (currentTimeMinutes >= prayerMinutes) {
                    setCurrentPrayerIndex(i === prayerList.length - 1 ? 0 : i + 1);
                    return;
                }
            }
            setCurrentPrayerIndex(0);
        };

        updateCurrentPrayer();
        const interval = setInterval(updateCurrentPrayer, 60000);
        return () => clearInterval(interval);
    }, [prayerTimes]);

    const formatTime = (time24) => {
        if (!time24) return '';
        const [hours, minutes] = time24.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const hours12 = hours % 12 || 12;
        return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
    };

    if (loading) {
        return (
            <div className="glass-card p-8">
                <Skeleton className="h-6 w-32 mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="rounded-2xl p-6">
                            <Skeleton className="h-10 w-10 mx-auto mb-4 rounded-full" />
                            <Skeleton className="h-4 w-16 mx-auto mb-2" />
                            <Skeleton className="h-6 w-20 mx-auto" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!prayerTimes) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 md:p-10"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-1">Prayer Times</h3>
                    {prayerTimes.hijri && (
                        <p className="text-sm text-emerald-400/70">
                            {prayerTimes.hijri.day} {prayerTimes.hijri.month.en} {prayerTimes.hijri.year} AH
                        </p>
                    )}
                </div>
                {prayerTimes.date && (
                    <span className="text-sm text-gray-500">{prayerTimes.date}</span>
                )}
            </div>

            {/* Spacious 3x2 Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {prayers.map((prayer, index) => {
                    const IconComponent = prayer.icon;
                    const isActive = index === currentPrayerIndex;

                    return (
                        <motion.div
                            key={prayer.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`rounded-2xl p-6 md:p-8 text-center transition-all duration-500 ${isActive ? 'prayer-active' : 'prayer-card'
                                }`}
                        >
                            <IconComponent
                                className={`w-10 h-10 mx-auto mb-4 transition-colors ${isActive ? 'text-amber-400' : prayer.color
                                    }`}
                            />
                            <p className={`font-medium text-sm mb-2 tracking-wide uppercase transition-colors ${isActive ? 'text-amber-300' : 'text-gray-500'
                                }`}>
                                {prayer.name}
                            </p>
                            <p className={`text-2xl font-light transition-colors ${isActive ? 'text-white' : 'text-gray-300'
                                }`}>
                                {formatTime(prayer.time)}
                            </p>
                            {isActive && (
                                <motion.span
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-block mt-4 text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 font-medium"
                                >
                                    Next
                                </motion.span>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default PrayerTimesGrid;
