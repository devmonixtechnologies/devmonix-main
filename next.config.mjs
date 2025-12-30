/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['framer-motion', 'lucide-react'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '**',
            },
        ],
    },
    poweredByHeader: false,
    compress: true,
};

export default nextConfig;
