import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, MapPin, RefreshCw } from 'lucide-react';

// Components
import SmartSearch from './components/SmartSearch';
import FastingProgressBar from './components/FastingProgressBar';
import CountdownTimer from './components/CountdownTimer';
import AsmaAlHusna from './components/AsmaAlHusna';
import PrayerTimesGrid from './components/PrayerTimesGrid';
import AdkarSection from './components/AdkarSection';

// Hooks
import usePrayerTimes from './hooks/usePrayerTimes';
import useAsmaAlHusna from './hooks/useAsmaAlHusna';

import './index.css';

function App() {
  const [city, setCity] = useState(() => {
    return localStorage.getItem('ramadan-companion-city') || '';
  });

  const { prayerTimes, loading: prayerLoading, error: prayerError } = usePrayerTimes(city);
  const { name: asmaName, loading: asmaLoading, error: asmaError, refresh: refreshAsma } = useAsmaAlHusna();

  useEffect(() => {
    if (city) {
      localStorage.setItem('ramadan-companion-city', city);
    }
  }, [city]);

  const handleCitySubmit = (newCity) => {
    setCity(newCity);
  };

  const handleChangeCity = () => {
    setCity('');
    localStorage.removeItem('ramadan-companion-city');
  };

  // Show SmartSearch if no city selected
  if (!city) {
    return (
      <div className="bg-gradient-mesh min-h-screen">
        <SmartSearch onSubmit={handleCitySubmit} savedCity={city} />
      </div>
    );
  }

  return (
    <div className="bg-gradient-mesh min-h-screen">
      {/* Centered App Container */}
      <div className="app-container py-10 relative z-10">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🌙</span>
              <div>
                <h1 className="text-2xl font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Ramadan Companion
                </h1>
                <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{city}</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleChangeCity}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all text-sm border border-white/5"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Change City</span>
            </motion.button>
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
              <button
                onClick={handleChangeCity}
                className="ml-auto px-5 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/15 text-red-300 text-sm transition-colors border border-red-500/15"
              >
                Try Another City
              </button>
            </motion.div>
          )}

          {/* Fasting Progress Bar */}
          <div className="mb-6">
            <FastingProgressBar prayerTimes={prayerTimes} />
          </div>

          {/* Hero: Countdown Timer */}
          <div className="text-center">
            <CountdownTimer prayerTimes={prayerTimes} loading={prayerLoading} />
          </div>

          {/* Prayer Times */}
          <div className="mt-8">
            <PrayerTimesGrid prayerTimes={prayerTimes} loading={prayerLoading} />
          </div>

          {/* Bottom Row: Asma & Adkar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <AsmaAlHusna
              name={asmaName}
              loading={asmaLoading}
              error={asmaError}
              onRefresh={refreshAsma}
            />
            <AdkarSection />
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

export default App;
