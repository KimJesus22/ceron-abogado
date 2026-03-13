import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (best compression), fallback to WebP, then original
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 1 year on the CDN/edge
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
