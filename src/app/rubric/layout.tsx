import type { Metadata } from "next";

// Open letter to the IDE Boards about the September 2026 MSc graduation
// rubric. Shared by link among TU Delft colleagues; signatories are staff,
// so keep the page (and their names) out of search results.
export const metadata: Metadata = {
  title: "Open letter on the new IDE MSc graduation rubric",
  description:
    "IDE graduation supervisors ask the Board of Education and the Board of Examiners to reconsider the timing and substance of the new MSc graduation rubric.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
