import type { Metadata } from "next";
import AlignedTranscript from "@/components/AlignedTranscript";

export const metadata: Metadata = {
  title: "The Source Library: Beta Launch",
  description:
    "Audio-aligned transcript of Derek Lomas's Source Library beta launch talk at the Embassy of the Free Mind, Amsterdam — AI translation of the Renaissance, Ficino, Pico, and 15,000 books in 55 languages.",
  openGraph: {
    title: "The Source Library: Beta Launch — Embassy of the Free Mind",
    description:
      "Listen along with a word-aligned transcript: translating the Renaissance with AI, from Ficino's statue to 7 billion words in 55 languages.",
  },
};

const AUDIO_URL = "https://sourcelib-launch-talk.vercel.app/lecture.mp3";

export default function SourceLibraryLaunchPage() {
  return (
    <div className="min-h-screen pb-24 px-6">
      <header className="max-w-2xl mx-auto pt-16 pb-8 text-center">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-3">
          The Source Library: Beta Launch
        </h1>
        <p className="font-[family-name:var(--font-inter)] text-sm text-text-muted tracking-wide">
          Derek Lomas &amp; Cory Andrews · Embassy of the Free Mind, Amsterdam
          · June 2026
        </p>
        <p className="mt-4 text-text-secondary leading-relaxed">
          The launch of{" "}
          <a
            href="https://sourcelibrary.org"
            className="text-rust hover:underline"
          >
            sourcelibrary.org
          </a>{" "}
          — 15,000 historical books in 55 languages, with AI translations
          presented beside the original page scans. The transcript below is
          aligned to the recording: click any word, timestamp, or margin note
          to jump the audio there.
        </p>
        <div className="w-16 h-0.5 bg-[var(--accent-gold)] mx-auto mt-8" />
      </header>
      <AlignedTranscript
        transcriptUrl="/data/source-library-launch-transcript.json"
        audioUrl={AUDIO_URL}
      />
    </div>
  );
}
