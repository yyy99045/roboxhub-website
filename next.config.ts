import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Disable server JS bundles — static export only
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
