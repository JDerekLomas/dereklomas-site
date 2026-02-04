"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Creative AI portrait series - generated from LinkedIn photo
const portraitSeries = [
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    description: "Neon circuits, digital rain, futuristic cityscape",
    images: [
      "/images/ai-portraits/creative/cyberpunk-1.jpg",
      "/images/ai-portraits/creative/cyberpunk-2.jpg",
    ],
  },
  {
    id: "cosmic",
    name: "Cosmic",
    description: "Galaxies, nebulae, universe reflected in eyes",
    images: ["/images/ai-portraits/creative/cosmic-1.jpg"],
  },
  {
    id: "glitch",
    name: "Glitch Art",
    description: "RGB split, databending, vaporwave aesthetic",
    images: ["/images/ai-portraits/creative/glitch-1.jpg"],
  },
  {
    id: "popart",
    name: "Pop Art",
    description: "Warhol-inspired, bold colors, screen print style",
    images: ["/images/ai-portraits/creative/popart-1.jpg"],
  },
  {
    id: "steampunk",
    name: "Steampunk",
    description: "Brass, gears, Victorian industrial fantasy",
    images: ["/images/ai-portraits/creative/steampunk-1.jpg"],
  },
  {
    id: "ethereal",
    name: "Ethereal",
    description: "Divine light, golden halos, sacred geometry",
    images: ["/images/ai-portraits/creative/ethereal-1.jpg"],
  },
  {
    id: "impressionist",
    name: "Impressionist",
    description: "Monet-style brushstrokes, dappled light",
    images: ["/images/ai-portraits/creative/impressionist-1.jpg"],
  },
  {
    id: "surreal",
    name: "Surrealist",
    description: "Dalí-inspired, dreamlike distortions, impossible geometry",
    images: ["/images/ai-portraits/creative/surreal-1.jpg"],
  },
  {
    id: "pixar",
    name: "Pixar",
    description: "3D animated character, big eyes, Disney warmth",
    images: ["/images/ai-portraits/creative/pixar-1.jpg"],
  },
  {
    id: "marble",
    name: "Classical Marble",
    description: "Ancient Greek philosopher bust, museum lighting",
    images: ["/images/ai-portraits/creative/marble-1.jpg"],
  },
  {
    id: "astronaut",
    name: "Astronaut",
    description: "1960s NASA portrait, space age optimism",
    images: ["/images/ai-portraits/creative/astronaut-1.jpg"],
  },
];

// Flatten all images for the main cycling display
const allImages = portraitSeries.flatMap((s) => s.images);

export default function CreativePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-cycle through images
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
      } else if (e.key === " ") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const currentImage = allImages[currentIndex];
  const currentSeries = portraitSeries.find((s) =>
    s.images.includes(currentImage)
  );

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-white">
      {/* Hero - Large cycling portrait */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background blur effect */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src={currentImage}
            alt=""
            fill
            className="object-cover blur-3xl scale-110"
            priority
          />
        </div>

        {/* Main portrait */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {allImages.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`AI portrait ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i < 4}
                />
              </div>
            ))}

            {/* Play/Pause indicator */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <span className="text-3xl">▶</span>
                </div>
              </div>
            )}
          </div>

          {/* Current style info */}
          <div className="mt-8 text-center">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-medium mb-2">
              {currentSeries?.name}
            </h2>
            <p className="text-gray-400">{currentSeries?.description}</p>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2 mt-6">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Keyboard hints */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-sm">
          ←→ navigate · space to pause · click portrait to toggle
        </div>
      </section>

      {/* Grid of all styles */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-medium text-center mb-4">
            Identity Through AI&apos;s Lens
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            The same face, refracted through different aesthetic dimensions.
            Each style reveals something different — the cyberpunk self, the
            cosmic self, the classical self. Which one is real? All of them.
            None of them.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {portraitSeries.map((series) => (
              <div
                key={series.id}
                className="group cursor-pointer"
                onClick={() => {
                  const idx = allImages.indexOf(series.images[0]);
                  setCurrentIndex(idx);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-gray-800 relative">
                  {/* Cycling effect within each card */}
                  {series.images.map((src, i) => (
                    <div
                      key={src}
                      className="absolute inset-0"
                      style={{
                        animation: `portrait-fade ${series.images.length * 3}s ease-in-out infinite`,
                        animationDelay: `${i * 3}s`,
                      }}
                    >
                      <Image
                        src={src}
                        alt={series.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <h3 className="mt-3 font-medium text-white group-hover:text-[var(--accent-rust)] transition-colors">
                  {series.name}
                </h3>
                <p className="text-sm text-gray-500">{series.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source note */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center text-gray-500 text-sm">
          <p>
            Generated from{" "}
            <a
              href="https://linkedin.com/in/dereklomas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white underline"
            >
              LinkedIn profile photo
            </a>{" "}
            using Wan2.6 image model via MuleRouter API.
          </p>
        </div>
      </footer>
    </div>
  );
}
