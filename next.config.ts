import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'pub-92ed77724e604fad91dde281455ebb7b.r2.dev',
      'pub-04af6d5d54d24dcfac9a8f482a98a3bc.r2.dev',
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
