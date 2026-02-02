import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Sunset } from 'lucide-react';
import Skeleton from './Skeleton';

const CountdownTimer = ({ prayerTimes, loading }) => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const parseTime = (timeStr, addDays = 0) => {
        if (!timeStr) return null;
        const [hours, minutes] = timeStr.split(':').map(Number);
        const date = new Date();
        date.setDate(date.getDate() + addDays);
        date.setHours(hours, minutes, 0, 0);
        return date;
    };

    const countdownData = useMemo(() => {
        if (!prayerTimes) return null;

        const fajrToday = parseTime(prayerTimes.Fajr);
        const maghribToday = parseTime(prayerTimes.Maghrib);
        const fajrTomorrow = parseTime(prayerTimes.Fajr, 1);

        let mode, target, label, icon;

        if (now >= fajrToday && now < maghribToday) {
            mode = 'iftar';
            target = maghribToday;
            label = 'until Iftar';
            icon = 'sun';
        } else if (now >= maghribToday) {
            mode = 'suhoor';
            target = fajrTomorrow;
            label = 'until Suhoor';
            icon = 'moon';
        } else {
            mode = 'suhoor';
            target = fajrToday;
            label = 'until Suhoor';
            icon = 'moon';
        }

        const diff = target - now;
        const hours = Math.max(0, Math.floor(diff / (1000 * 60 * 60)));
        const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

        const fastingDuration = (maghribToday - fajrToday) / (1000 * 60 * 60);
        const fastingHours = Math.floor(fastingDuration);
        const fastingMinutes = Math.round((fastingDuration - fastingHours) * 60);

        return { mode, label, icon, hours, minutes, seconds, fastingHours, fastingMinutes };
    }, [now, prayerTimes]);

    if (loading) {
        return (
            <div className="text-center py-16">
                <Skeleton className="h-32 w-96 mx-auto mb-4" />
                <Skeleton className="h-6 w-48 mx-auto" />
            </div>
        );
    }

    if (!countdownData) return null;

    const IconComponent = countdownData.icon === 'sun' ? Sun : Moon;
    const iconColor = countdownData.icon === 'sun' ? 'text-amber-400' : 'text-blue-300';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-8 md:py-12"
        >
            {/* Mode Icon */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-6"
            >
                <IconComponent className={`w-6 h-6 ${iconColor}`} />
                {countdownData.icon === 'sun' && (
                    <Sunset className="w-5 h-5 text-orange-400/70" />
                )}
            </motion.div>

            {/* Massive Clean Countdown */}
            <div className="flex justify-center items-baseline gap-1 md:gap-2 mb-4">
                {/* Hours */}
                <motion.span
                    key={`h-${countdownData.hours}`}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="countdown-number text-8xl md:text-[10rem] lg:text-[12rem]"
                >
                    {String(countdownData.hours).padStart(2, '0')}
                </motion.span>

                <span className="text-5xl md:text-7xl text-white/20 font-thin">:</span>

                {/* Minutes */}
                <motion.span
                    key={`m-${countdownData.minutes}`}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    className="countdown-number text-8xl md:text-[10rem] lg:text-[12rem]"
                >
                    {String(countdownData.minutes).padStart(2, '0')}
                </motion.span>

                <span className="text-5xl md:text-7xl text-white/20 font-thin">:</span>

                {/* Seconds */}
                <motion.span
                    key={`s-${countdownData.seconds}`}
                    initial={{ opacity: 0.7, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.15 }}
                    className="countdown-number text-8xl md:text-[10rem] lg:text-[12rem]"
                >
                    {String(countdownData.seconds).padStart(2, '0')}
                </motion.span>
            </div>

            {/* Label */}
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-8">
                {countdownData.label}
            </p>

            {/* Fasting Duration Badge */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/5"
            >
                <span className="text-sm text-gray-500">Today's fast</span>
                <span className="text-sm text-emerald-400 font-medium">
                    {countdownData.fastingHours}h {countdownData.fastingMinutes}m
                </span>
            </motion.div>
        </motion.div>
    );
};

export default CountdownTimer;
