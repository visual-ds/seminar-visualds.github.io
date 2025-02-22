import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/seminar-visualds.github.io',
  trailingSlash: true,
};

export default nextConfig;
