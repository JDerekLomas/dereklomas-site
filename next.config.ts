import type { NextConfig } from "next";

// The retired Squarespace site. Its traffic lands here so old links keep working.
const OLD_SITE = [{ type: "host" as const, value: "(www\\.)?derek-lomas\\.com" }];
const NEW_SITE = "https://dereklomas.me";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      // Old paths with no same-named page here. These must stay above the catch-all.
      { source: "/home", has: OLD_SITE, destination: `${NEW_SITE}/`, permanent: true },
      { source: "/publications", has: OLD_SITE, destination: `${NEW_SITE}/research`, permanent: true },
      { source: "/projects/neuro-ux", has: OLD_SITE, destination: `${NEW_SITE}/projects/neuroux`, permanent: true },
      { source: "/projects/playpower", has: OLD_SITE, destination: `${NEW_SITE}/projects/playpower-labs`, permanent: true },
      // Every other old URL keeps its path on the new domain.
      { source: "/:path*", has: OLD_SITE, destination: `${NEW_SITE}/:path*`, permanent: true },
      { source: "/projects/cloud-layer", destination: "/projects/earth-love", permanent: true },
      // Cell Atlas is a static Vite build in public/cells (from github.com/JDerekLomas/blendercell)
      { source: "/cells", destination: "/cells/cells.html", permanent: false },
    ];
  },
};

export default nextConfig;
