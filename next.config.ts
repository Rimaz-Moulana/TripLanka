import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  turbopack: {},
};

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(nextConfig);


