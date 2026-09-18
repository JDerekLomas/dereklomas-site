import type { Metadata } from "next";

// Field guide to the September 2026 MSc graduation rubric. Shared by link among TU Delft colleagues; signatories are staff,
// so keep the page (and their names) out of search results.
export const metadata: Metadata = {
  title: "The new graduation rubric, explained",
  description:
    "A field guide for IDE supervisors to the MSc graduation rubric in force from 23 September 2026: what changes, why, what the research says, and a grade machine.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
