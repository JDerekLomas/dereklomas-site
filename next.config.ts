import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [{ source: "/projects/cloud-layer", destination: "/projects/earth-love", permanent: true }];
  },
};

export default nextConfig;
