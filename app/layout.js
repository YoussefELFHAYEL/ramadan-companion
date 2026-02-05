import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    // Basic SEO
    title: 'Ramadan.live - Prayer Times, Fasting Countdown & Daily Ayah',
    description: 'Your beautiful companion for Ramadan 2024. Get accurate prayer times, Iftar & Suhoor countdown, daily Quran verses, Asma Al Husna, and Ramadan Adkar - all in one place.',
    keywords: [
        'ramadan', 'ramadan 2024', 'prayer times', 'salah times', 'fasting',
        'iftar', 'suhoor', 'sehri', 'islam', 'muslim', 'quran', 'ayah',
        'asma al husna', 'names of allah', 'adkar', 'dua', 'islamic app',
        'ramadan countdown', 'fasting timer', 'maghrib time', 'fajr time'
    ],

    // Favicon
    icons: {
        icon: '/icon.svg',
        apple: '/icon.svg',
    },

    // Open Graph (Facebook, LinkedIn, etc.)
    openGraph: {
        title: 'Ramadan.live - Your Ramadan Companion',
        description: 'Get accurate prayer times, Iftar countdown, daily Quran verses, and spiritual inspiration for the blessed month of Ramadan.',
        url: 'https://ramadan.live',
        siteName: 'Ramadan.live',
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Ramadan.live - Prayer Times & Fasting Countdown',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Ramadan.live - Your Ramadan Companion',
        description: 'Prayer times, Iftar countdown, daily Quran verses, and spiritual inspiration for Ramadan.',
        images: ['/og-image.png'],
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Canonical URL
    alternates: {
        canonical: 'https://ramadan.live',
    },

    // App metadata
    applicationName: 'Ramadan.live',
    authors: [{ name: 'Ramadan.live Team' }],
    creator: 'Ramadan.live',
    publisher: 'Ramadan.live',

    // Verification (add your own IDs when you have them)
    // verification: {
    //     google: 'your-google-verification-code',
    // },
};

// JSON-LD structured data for rich results
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Ramadan.live',
    description: 'Beautiful Ramadan companion app with prayer times, fasting countdown, Quran verses, and spiritual inspiration.',
    url: 'https://ramadan.live',
    applicationCategory: 'ReligiousApplication',
    operatingSystem: 'Web Browser',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
