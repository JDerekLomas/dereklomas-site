import type { Metadata } from "next";

// Derek's working to-do list, refreshed by Claude Code sessions. Unlinked; keep it out of search.
export const metadata: Metadata = {
  title: "To do",
  description: "Working list.",
  robots: { index: false, follow: false, nocache: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
