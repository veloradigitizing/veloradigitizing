import type { NextConfig } from "next";

const LEGACY_STORE_SLUGS = [
  "tiger-head-embroidery-digitizing-file",
  "la-cap-logo-embroidery-digitizing-file",
  "skull-patch-embroidery-digitizing-file",
  "nike-logo-embroidery-digitizing-file",
  "bear-embroidery-digitizing-file",
  "3d-puff-embroidery-digitizing-file",
  "applique-letter-embroidery-digitizing-file",
  "ny-logo-embroidery-digitizing-file",
  "bull-head-embroidery-digitizing-file",
  "college-logo-embroidery-digitizing-file",
];

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80],
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
      // Legacy digitizing-file product URLs that Google indexed before those
      // products were hidden from the catalog (see SHOW_DIGITIZING_FILE_PRODUCTS
      // in app/store/catalog.ts). Send them to the store instead of 404ing.
      ...LEGACY_STORE_SLUGS.flatMap((slug) => [
        { source: `/store/${slug}`, destination: "/store", permanent: true },
        { source: `/store/${slug}/`, destination: "/store", permanent: true },
      ]),
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

