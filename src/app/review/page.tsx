"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const allPhotos = [
  // Real photos
  { id: "headshot", src: "/images/headshot.png", source: "Personal site", date: "Current" },
  { id: "squarespace", src: "/images/photos/squarespace.jpg", source: "derek-lomas.com", date: "Current" },
  { id: "ams-institute", src: "/images/photos/ams-institute.jpg", source: "AMS Institute", date: "Recent" },
  { id: "diopd", src: "/images/photos/diopd.jpg", source: "DIOPD TU Delft", date: "Recent" },
  { id: "tudelft", src: "/images/photos/tudelft.jpg", source: "TU Delft Staff", date: "Recent" },
  { id: "substack", src: "/images/photos/substack.jpg", source: "Substack", date: "Recent" },
  { id: "ade", src: "/images/photos/ade.jpg", source: "Amsterdam Dance Event", date: "Speaker" },
  { id: "neuroux", src: "/images/photos/neuroux.jpg", source: "NeuroUX", date: "CEO" },
  { id: "mit-solve", src: "/images/photos/mit-solve.jpg", source: "MIT Solve", date: "Smart Paper" },
  { id: "cmu-pier", src: "/images/photos/cmu-pier.jpg", source: "CMU PIER", date: "PhD era" },
  { id: "cmu-hcii", src: "/images/photos/cmu-hcii.jpg", source: "CMU HCII", date: "PhD era" },
  // AI portraits - Cartoon
  { id: "cartoon-1", src: "/images/ai-portraits/cartoon-1.png", source: "AI Cartoon", date: "Wan2.6" },
  { id: "cartoon-2", src: "/images/ai-portraits/cartoon-2.png", source: "AI Cartoon", date: "Wan2.6" },
  { id: "cartoon-3", src: "/images/ai-portraits/cartoon-3.png", source: "AI Cartoon", date: "Wan2.6" },
  { id: "cartoon-4", src: "/images/ai-portraits/cartoon-4.png", source: "AI Cartoon", date: "Wan2.6" },
  // AI portraits - Latent Space
  { id: "variant-1", src: "/images/ai-portraits/variant-1.png", source: "AI Latent Space", date: "Wan2.6" },
  { id: "variant-2", src: "/images/ai-portraits/variant-2.png", source: "AI Latent Space", date: "Wan2.6" },
  { id: "variant-3", src: "/images/ai-portraits/variant-3.png", source: "AI Latent Space", date: "Wan2.6" },
  { id: "variant-4", src: "/images/ai-portraits/variant-4.png", source: "AI Latent Space", date: "Wan2.6" },
  // AI portraits - Resonance
  { id: "resonance-1", src: "/images/ai-portraits/resonance-1.jpg", source: "AI Resonance", date: "Wan2.6" },
  { id: "resonance-2", src: "/images/ai-portraits/resonance-2.jpg", source: "AI Resonance", date: "Wan2.6" },
  { id: "resonance-3", src: "/images/ai-portraits/resonance-3.jpg", source: "AI Resonance", date: "Wan2.6" },
  { id: "resonance-4", src: "/images/ai-portraits/resonance-4.jpg", source: "AI Resonance", date: "Wan2.6" },
  // AI portraits - Hermetic
  { id: "hermetic-1", src: "/images/ai-portraits/hermetic-1.jpg", source: "AI Hermetic", date: "Wan2.6" },
  { id: "hermetic-2", src: "/images/ai-portraits/hermetic-2.jpg", source: "AI Hermetic", date: "Wan2.6" },
  { id: "hermetic-3", src: "/images/ai-portraits/hermetic-3.jpg", source: "AI Hermetic", date: "Wan2.6" },
  { id: "hermetic-4", src: "/images/ai-portraits/hermetic-4.jpg", source: "AI Hermetic", date: "Wan2.6" },
  // AI portraits - Renaissance
  { id: "renaissance-1", src: "/images/ai-portraits/renaissance-1.jpg", source: "AI Renaissance", date: "Wan2.6" },
  { id: "renaissance-2", src: "/images/ai-portraits/renaissance-2.jpg", source: "AI Renaissance", date: "Wan2.6" },
  { id: "renaissance-3", src: "/images/ai-portraits/renaissance-3.jpg", source: "AI Renaissance", date: "Wan2.6" },
  { id: "renaissance-4", src: "/images/ai-portraits/renaissance-4.jpg", source: "AI Renaissance", date: "Wan2.6" },
  // Creative AI portraits (from LinkedIn)
  { id: "cyberpunk-1", src: "/images/ai-portraits/creative/cyberpunk-1.jpg", source: "AI Cyberpunk", date: "Nano-Banana" },
  { id: "cyberpunk-2", src: "/images/ai-portraits/creative/cyberpunk-2.jpg", source: "AI Cyberpunk", date: "Nano-Banana" },
  { id: "cosmic-1", src: "/images/ai-portraits/creative/cosmic-1.jpg", source: "AI Cosmic", date: "Nano-Banana" },
  { id: "glitch-1", src: "/images/ai-portraits/creative/glitch-1.jpg", source: "AI Glitch", date: "Nano-Banana" },
  { id: "popart-1", src: "/images/ai-portraits/creative/popart-1.jpg", source: "AI Pop Art", date: "Nano-Banana" },
  { id: "steampunk-1", src: "/images/ai-portraits/creative/steampunk-1.jpg", source: "AI Steampunk", date: "Nano-Banana" },
  { id: "ethereal-1", src: "/images/ai-portraits/creative/ethereal-1.jpg", source: "AI Ethereal", date: "Nano-Banana" },
  { id: "impressionist-1", src: "/images/ai-portraits/creative/impressionist-1.jpg", source: "AI Impressionist", date: "Nano-Banana" },
  { id: "surreal-1", src: "/images/ai-portraits/creative/surreal-1.jpg", source: "AI Surrealist", date: "Nano-Banana" },
];

export default function ReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keepers, setKeepers] = useState<Set<string>>(new Set());
  const [rejected, setRejected] = useState<Set<string>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("photo-keepers");
    const savedRejected = localStorage.getItem("photo-rejected");
    if (saved) setKeepers(new Set(JSON.parse(saved)));
    if (savedRejected) setRejected(new Set(JSON.parse(savedRejected)));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("photo-keepers", JSON.stringify([...keepers]));
    localStorage.setItem("photo-rejected", JSON.stringify([...rejected]));
  }, [keepers, rejected]);

  const currentPhoto = allPhotos[currentIndex];
  const isKept = keepers.has(currentPhoto.id);
  const isRejected = rejected.has(currentPhoto.id);

  const handleKeep = () => {
    setKeepers((prev) => new Set([...prev, currentPhoto.id]));
    setRejected((prev) => {
      const next = new Set(prev);
      next.delete(currentPhoto.id);
      return next;
    });
    goNext();
  };

  const handleReject = () => {
    setRejected((prev) => new Set([...prev, currentPhoto.id]));
    setKeepers((prev) => {
      const next = new Set(prev);
      next.delete(currentPhoto.id);
      return next;
    });
    goNext();
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allPhotos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allPhotos.length) % allPhotos.length);
  };

  const resetAll = () => {
    setKeepers(new Set());
    setRejected(new Set());
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "k" || e.key === " ") {
        e.preventDefault();
        handleKeep();
      }
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowDown") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const keeperPhotos = allPhotos.filter((p) => keepers.has(p.id));

  return (
    <div className="min-h-screen py-8 px-6 bg-[var(--bg-dark)]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white mb-2">
            Photo Review
          </h1>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {allPhotos.length} ·{" "}
            <span className="text-green-400">{keepers.size} kept</span> ·{" "}
            <span className="text-red-400">{rejected.size} rejected</span>
          </p>
        </header>

        {/* Current Photo - tap to keep */}
        <div className="relative mb-6">
          <div
            onClick={handleKeep}
            className="aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center cursor-pointer hover:ring-4 hover:ring-green-500/50 transition-all"
            title="Tap to keep this photo"
          >
            <Image
              src={currentPhoto.src}
              alt={currentPhoto.source}
              width={600}
              height={600}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>

          {/* Status badge */}
          {isKept && (
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              ✓ Keeping
            </div>
          )}
          {!isKept && (
            <div className="absolute top-4 right-4 bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
              Tap to keep
            </div>
          )}
        </div>

        {/* Photo info */}
        <div className="text-center mb-6">
          <p className="text-white font-medium">{currentPhoto.source}</p>
          <p className="text-gray-400 text-sm">{currentPhoto.date}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={goPrev}
            className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-xl flex items-center justify-center transition-colors"
            title="Previous (←)"
          >
            ←
          </button>
          <button
            onClick={handleKeep}
            className={`w-16 h-16 rounded-full text-3xl flex items-center justify-center transition-colors ${
              isKept
                ? "bg-green-500 text-white"
                : "bg-green-500/20 hover:bg-green-500/40 text-green-400"
            }`}
            title="Keep (↑ or tap photo)"
          >
            ✓
          </button>
          <button
            onClick={goNext}
            className="w-14 h-14 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-xl flex items-center justify-center transition-colors"
            title="Next (→)"
          >
            →
          </button>
        </div>

        {/* Keyboard hints */}
        <p className="text-center text-gray-500 text-xs mb-8">
          Tap photo or ↑ to keep · ←→ to navigate
        </p>

        {/* Keepers gallery */}
        {keeperPhotos.length > 0 && (
          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-white font-medium mb-4">
              Keepers ({keeperPhotos.length})
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {keeperPhotos.map((p) => (
                <div
                  key={p.id}
                  className="aspect-square rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-400"
                  onClick={() => setCurrentIndex(allPhotos.findIndex((x) => x.id === p.id))}
                >
                  <Image
                    src={p.src}
                    alt={p.source}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export results */}
        {keepers.size > 0 && (
          <div className="border-t border-gray-700 pt-8 mt-8">
            <h2 className="text-white font-medium mb-4">Your Keepers ({keepers.size})</h2>
            <textarea
              readOnly
              value={`KEEPERS:\n${keeperPhotos.map((p) => `- ${p.id}`).join("\n")}`}
              className="w-full h-32 bg-gray-900 text-gray-300 text-sm font-mono p-4 rounded-lg border border-gray-700"
            />
            <button
              onClick={() => {
                const text = `KEEPERS:\n${keeperPhotos.map((p) => `- ${p.id}`).join("\n")}`;
                navigator.clipboard.writeText(text);
                alert("Copied to clipboard!");
              }}
              className="mt-3 px-4 py-2 bg-rust text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-rust-hover)] transition-colors"
            >
              Copy to Clipboard
            </button>
          </div>
        )}

        {/* Reset button */}
        <div className="mt-8 text-center">
          <button
            onClick={resetAll}
            className="text-gray-500 hover:text-gray-300 text-sm underline"
          >
            Reset all choices
          </button>
        </div>
      </div>
    </div>
  );
}
