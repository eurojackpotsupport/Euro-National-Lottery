import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aqejdiooemznwqvdgtlf.supabase.co",
      },
    ],
  },
};

export default nextConfig;