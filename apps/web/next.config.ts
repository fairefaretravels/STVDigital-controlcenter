import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    cacheComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
