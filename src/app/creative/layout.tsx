import type { Metadata } from "next";

// Personal portrait gallery, not linked from the site.
// Unlinked is not the same as private: robots.txt allows the whole site, so
// anything reachable can be crawled if the URL is ever shared. Keep it out
// of search results explicitly.
export const metadata: Metadata = {
  title: "Portraits",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
