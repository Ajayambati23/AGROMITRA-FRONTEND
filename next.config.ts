import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only bundle the icons/components you import
  optimizePackageImports: [
    "lucide-react",
    "date-fns",
    "@headlessui/react",
  ],

  // ✅ Ignore ESLint errors during Vercel build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
