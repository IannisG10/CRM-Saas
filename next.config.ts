import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // Server Actions sont activées par défaut dans Next 16
    typedRoutes: true,
  },
};

export default nextConfig;
