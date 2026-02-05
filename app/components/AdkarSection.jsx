'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const adkarList = [
    {
        arabic: 'اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
        transliteration: 'Allahumma inni laka sumtu, wa bika aamantu, wa ala rizqika aftartu',
        translation: 'O Allah, I fasted for You, believed in You, and I break my fast with Your provision.',
        context: 'Dua for Breaking Fast',
    },
    {
        arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
        transliteration: "Dhahaba al-zama' wa abtallatil-'urooq wa thabata al-ajru in sha Allah",
        translation: 'The thirst is gone, the veins are moistened and the reward is established, if Allah wills.',
        context: 'After Breaking Fast',
    },
    {
        arabic: 'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ',
        transliteration: "Rabbana taqabbal minna innaka anta as-Sami'ul 'Aleem",
        translation: 'Our Lord, accept from us. Indeed, You are the All-Hearing, the All-Knowing.',
        context: 'Dua for Acceptance',
    },
    {
        arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
        transliteration: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni",
        translation: 'O Allah, You are Forgiving and love forgiveness, so forgive me.',
        context: 'Laylatul Qadr Dua',
    },
    {
        arabic: 'اللَّهُمَّ بَارِكْ لَنَا فِي رَجَبٍ وَشَعْبَانَ وَبَلِّغْنَا رَمَضَانَ',
        transliteration: "Allahumma barik lana fi Rajab wa Sha'ban, wa ballighna Ramadan",
        translation: 'O Allah, bless us in Rajab and Sha\'ban, and let us reach Ramadan.',
        context: 'Welcoming Ramadan',
    },
];

const AdkarSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % adkarList.length);
        }, 15000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % adkarList.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + adkarList.length) % adkarList.length);
    };

    const currentDhikr = adkarList[currentIndex];

    const variants = {
        enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({ x: direction < 0 ? 60 : -60, opacity: 0 }),
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 h-full flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-emerald-400" />
                    <h3 className="text-base font-medium text-gray-400">Ramadan Adkar</h3>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrev}
                        className="p-2.5 rounded-full bg-white/3 hover:bg-white/8 transition-colors border border-white/5"
                    >
                        <ChevronLeft className="w-4 h-4 text-gray-500" />
                    </button>
                    <span className="text-sm text-gray-500 w-10 text-center">
                        {currentIndex + 1}/{adkarList.length}
                    </span>
                    <button
                        onClick={handleNext}
                        className="p-2.5 rounded-full bg-white/3 hover:bg-white/8 transition-colors border border-white/5"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </div>

            {/* Content - Centered & Artistic */}
            <div className="flex-1 flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="text-center"
                    >
                        {/* Context Badge */}
                        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400/80 text-sm mb-8">
                            {currentDhikr.context}
                        </span>

                        {/* Arabic - Large & Centered */}
                        <p
                            className="arabic-font adkar-arabic text-gray-100/90 mb-6 leading-loose"
                            dir="rtl"
                        >
                            {currentDhikr.arabic}
                        </p>

                        {/* Transliteration */}
                        <p className="text-amber-400/70 text-center text-sm md:text-base mb-4 font-medium tracking-wide">
                            {currentDhikr.transliteration}
                        </p>

                        {/* Translation - Subtle Italic */}
                        <p className="adkar-translation text-base font-light max-w-md mx-auto">
                            "{currentDhikr.translation}"
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {adkarList.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className={`h-1 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-emerald-400/80 w-6'
                            : 'bg-white/10 w-1.5 hover:bg-white/20'
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default AdkarSection;
