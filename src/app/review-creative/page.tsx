"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const creativePhotos = [
  { id: "cyberpunk-1", src: "/images/ai-portraits/creative/cyberpunk-1.jpg", source: "Cyberpunk", date: "Neon circuits" },
  { id: "cyberpunk-2", src: "/images/ai-portraits/creative/cyberpunk-2.jpg", source: "Cyberpunk", date: "Matrix hacker" },
  { id: "cosmic-1", src: "/images/ai-portraits/creative/cosmic-1.jpg", source: "Cosmic", date: "Galaxies & nebulae" },
  { id: "glitch-1", src: "/images/ai-portraits/creative/glitch-1.jpg", source: "Glitch Art", date: "RGB split" },
  { id: "popart-1", src: "/images/ai-portraits/creative/popart-1.jpg", source: "Pop Art", date: "Warhol style" },
  { id: "steampunk-1", src: "/images/ai-portraits/creative/steampunk-1.jpg", source: "Steampunk", date: "Brass & gears" },
  { id: "ethereal-1", src: "/images/ai-portraits/creative/ethereal-1.jpg", source: "Ethereal", date: "Divine light" },
  { id: "impressionist-1", src: "/images/ai-portraits/creative/impressionist-1.jpg", source: "Impressionist", date: "Monet style" },
  { id: "surreal-1", src: "/images/ai-portraits/creative/surreal-1.jpg", source: "Surrealist", date: "Dalí style" },
  { id: "pixar-1", src: "/images/ai-portraits/creative/pixar-1.jpg", source: "Pixar", date: "3D animated" },
  { id: "marble-1", src: "/images/ai-portraits/creative/marble-1.jpg", source: "Classical Marble", date: "Greek bust" },
  { id: "astronaut-1", src: "/images/ai-portraits/creative/astronaut-1.jpg", source: "Astronaut", date: "1960s NASA" },
];

export default function ReviewCreativePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [keepers, setKeepers] = useState<Set<string>>(new Set());
  const [rejected, setRejected] = useState<Set<string>>(new Set());

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("creative-keepers");
    const savedRejected = localStorage.getItem("creative-rejected");
    if (saved) setKeepers(new Set(JSON.parse(saved)));
    if (savedRejected) setRejected(new Set(JSON.parse(savedRejected)));
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("creative-keepers", JSON.stringify([...keepers]));
    localStorage.setItem("creative-rejected", JSON.stringify([...rejected]));
  }, [keepers, rejected]);

  const currentPhoto = creativePhotos[currentIndex];
  const isKept = keepers.has(currentPhoto.id);
  const isRejected = rejected.has(currentPhoto.id);

  const handleKeep = () => {
    setKeepers((prev) => {
      if (prev.has(currentPhoto.id)) {
        const next = new Set(prev);
        next.delete(currentPhoto.id);
        return next;
      }
      return new Set([...prev, currentPhoto.id]);
    });
    setRejected((prev) => {
      const next = new Set(prev);
      next.delete(currentPhoto.id);
      return next;
    });
  };

  const handleReject = () => {
    setRejected((prev) => {
      if (prev.has(currentPhoto.id)) {
        const next = new Set(prev);
        next.delete(currentPhoto.id);
        return next;
      }
      return new Set([...prev, currentPhoto.id]);
    });
    setKeepers((prev) => {
      const next = new Set(prev);
      next.delete(currentPhoto.id);
      return next;
    });
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % creativePhotos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + creativePhotos.length) % creativePhotos.length);
  };

  const resetAll = () => {
    setKeepers(new Set());
    setRejected(new Set());
    setCurrentIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp" || e.key === "k") {
        e.preventDefault();
        handleKeep();
      } else if (e.key === "ArrowDown" || e.key === "j" || e.key === "x") {
        e.preventDefault();
        handleReject();
      } else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const keeperPhotos = creativePhotos.filter((p) => keepers.has(p.id));

  return (
    <div className="min-h-screen py-8 px-6 bg-[var(--bg-dark)]">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium text-white mb-2">
            Creative AI Portraits
          </h1>
          <p className="text-gray-400 text-sm">
            {currentIndex + 1} of {creativePhotos.length} ·{" "}
            <span className="text-green-400">{keepers.size} kept</span> ·{" "}
            <span className="text-red-400">{rejected.size} rejected</span>
          </p>
        </header>

        {/* Current Photo */}
        <div className="relative mb-6">
          <div
            className={`aspect-square bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center transition-all ${
              isKept ? "ring-4 ring-green-500" : isRejected ? "ring-4 ring-red-500 opacity-50" : ""
            }`}
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
          {isRejected && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              ✗ Rejected
            </div>
          )}
        </div>

        {/* Photo info */}
        <div className="text-center mb-6">
          <p className="text-white font-medium text-xl">{currentPhoto.source}</p>
          <p className="text-gray-400 text-sm">{currentPhoto.date}</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={goPrev}
            className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-xl flex items-center justify-center transition-colors"
            title="Previous (←)"
          >
            ←
          </button>
          <button
            onClick={handleReject}
            className={`w-16 h-16 rounded-full text-3xl flex items-center justify-center transition-colors ${
              isRejected
                ? "bg-red-500 text-white"
                : "bg-red-500/20 hover:bg-red-500/40 text-red-400"
            }`}
            title="Reject (↓ or x)"
          >
            ✗
          </button>
          <button
            onClick={handleKeep}
            className={`w-16 h-16 rounded-full text-3xl flex items-center justify-center transition-colors ${
              isKept
                ? "bg-green-500 text-white"
                : "bg-green-500/20 hover:bg-green-500/40 text-green-400"
            }`}
            title="Keep (↑ or k)"
          >
            ✓
          </button>
          <button
            onClick={goNext}
            className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white text-xl flex items-center justify-center transition-colors"
            title="Next (→)"
          >
            →
          </button>
        </div>

        {/* Keyboard hints */}
        <p className="text-center text-gray-500 text-xs mb-8">
          ↑/k keep · ↓/x reject · ←→ navigate · space next
        </p>

        {/* Keepers gallery */}
        {keeperPhotos.length > 0 && (
          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-white font-medium mb-4">
              Keepers ({keeperPhotos.length})
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {keeperPhotos.map((p) => (
                <div
                  key={p.id}
                  className="aspect-square rounded overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-400"
                  onClick={() => setCurrentIndex(creativePhotos.findIndex((x) => x.id === p.id))}
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
        <div className="border-t border-gray-700 pt-8 mt-8">
          <h2 className="text-white font-medium mb-4">Your Selections</h2>
          <textarea
            readOnly
            value={`CREATIVE AI KEEPERS:\n${keeperPhotos.length > 0 ? keeperPhotos.map((p) => `- ${p.id} (${p.source})`).join("\n") : "(none yet)"}`}
            className="w-full h-32 bg-gray-900 text-gray-300 text-sm font-mono p-4 rounded-lg border border-gray-700"
          />
          <button
            onClick={() => {
              const text = `CREATIVE AI KEEPERS:\n${keeperPhotos.map((p) => `- ${p.id} (${p.source})`).join("\n")}`;
              navigator.clipboard.writeText(text);
              alert("Copied to clipboard!");
            }}
            className="mt-3 px-4 py-2 bg-[var(--accent-rust)] text-white rounded-lg text-sm font-medium hover:bg-[var(--accent-rust-hover)] transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>

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
