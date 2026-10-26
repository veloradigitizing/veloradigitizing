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
  // Cap-logo catalog entries whose image files never existed (replaced by
  // entries that map 1:1 to real files in public/images/cap-logo).
  "3d-puff-cap-logo-embroidery-digitizing-pes",
  "baseball-cap-logo-embroidery-digitizing-dst",
  "classic-cap-logo-digitizing-services",
  "corporate-cap-logo-embroidery-digitizing",
  "custom-business-cap-logo-digitizing-dst",
  "custom-cap-logo-embroidery-digitizing",
  "custom-dad-hat-logo-digitizing-pes",
  "detailed-cap-logo-embroidery-digitizing",
  "fitted-cap-logo-embroidery-digitizing",
  "flat-brim-cap-logo-digitizing-dst",
  "front-panel-cap-logo-embroidery-digitizing",
  "high-quality-cap-logo-digitizing-services",
  "intricate-cap-logo-embroidery-digitizing",
  "premium-cap-logo-embroidery-digitizing",
  "small-text-cap-logo-digitizing-pes",
  "snapback-cap-logo-embroidery-digitizing",
  "sports-team-cap-logo-digitizing-dst",
  "trucker-cap-logo-embroidery-digitizing",
  "vector-to-cap-logo-embroidery-digitizing",
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
      // Merged into the custom patch types guide (same topic, was competing
      // for the same "pvc vs embroidered patches" queries).
      {
        source: "/blog/pvc-patches-vs-embroidered-patches",
        destination: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
        permanent: true,
      },
      {
        source: "/blog/pvc-patches-vs-embroidered-patches/",
        destination: "/blog/custom-patch-types-embroidered-woven-pvc-leather-chenille",
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

