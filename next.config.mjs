/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Enable experimental features for app router
    experimental: {
        // Optimize package imports
        optimizePackageImports: ['lucide-react', 'framer-motion'],
    },
};

export default nextConfig;
