import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blog/cheap-3d-puff-embroidery-digitizing-for-caps",
        destination: "/blog/3d-puff-embroidery-digitizing-guide",
        permanent: true,
      },
      {
        source: "/blog/cheap-3d-puff-embroidery-digitizing-for-caps/",
        destination: "/blog/3d-puff-embroidery-digitizing-guide",
        permanent: true,
      },
      {
        source: "/blog/embroidered-vs-woven-vs-pvc-patches",
        destination: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
        permanent: true,
      },
      {
        source: "/blog/embroidered-vs-woven-vs-pvc-patches/",
        destination: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

