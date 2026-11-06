import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/projects/cloud-layer", destination: "/projects/earth-love", permanent: true },
      // Cell Atlas is a static Vite build in public/cells (from github.com/JDerekLomas/blendercell)
      { source: "/cells", destination: "/cells/cells.html", permanent: false },
    ];
  },
};

export default nextConfig;
