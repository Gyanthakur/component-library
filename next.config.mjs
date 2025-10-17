/** @type {import('next').NextConfig} */
import nextI18nConfig from './next-i18next.config.js';

const nextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  i18n: nextI18nConfig.i18n,
};

export default nextConfig;