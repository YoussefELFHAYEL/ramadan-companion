import './globals.css';

export const metadata = {
    title: 'Ramadan Companion - Prayer Times & Fasting Countdown',
    description: 'Beautiful Ramadan companion app with prayer times, fasting countdown, Asma Al Husna, and daily Adkar.',
    keywords: ['ramadan', 'prayer times', 'fasting', 'iftar', 'suhoor', 'islam'],
    icons: {
        icon: '/icon.svg',
    },
    openGraph: {
        title: 'Ramadan Companion',
        description: 'Your beautiful companion for Ramadan - Prayer times, fasting countdown, and more.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
