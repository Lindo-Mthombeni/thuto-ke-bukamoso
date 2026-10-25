import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages serves this repo from /thuto-ke-bukamoso, but the dev
  // server runs at the root, so only apply the base path to builds.
  basePath: isProduction ? "/thuto-ke-bukamoso" : "",
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
