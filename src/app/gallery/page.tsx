import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photos of Derek Lomas from around the web, plus AI-generated portraits.",
};

const realPhotos = [
  { src: "/images/headshot.png", label: "Site headshot", source: "Personal" },
  { src: "/images/photos/squarespace.jpg", label: "Bio portrait", source: "derek-lomas.com" },
  { src: "/images/photos/ams-institute.jpg", label: "AMS Institute", source: "Elisabeth Lanz" },
  { src: "/images/photos/diopd.jpg", label: "DIOPD Faculty", source: "TU Delft" },
  { src: "/images/photos/tudelft.jpg", label: "TU Delft Staff", source: "TU Delft" },
  { src: "/images/photos/substack.jpg", label: "Substack", source: "AI & Experience Design" },
  { src: "/images/photos/ade.jpg", label: "ADE Speaker", source: "Amsterdam Dance Event" },
];

const aiPortraits = {
  cartoon: [
    { src: "/images/ai-portraits/cartoon-1.png", label: "Cartoon #1" },
    { src: "/images/ai-portraits/cartoon-2.png", label: "Cartoon #2" },
    { src: "/images/ai-portraits/cartoon-3.png", label: "Cartoon #3" },
    { src: "/images/ai-portraits/cartoon-4.png", label: "Cartoon #4" },
  ],
  latentSpace: [
    { src: "/images/ai-portraits/variant-1.png", label: "Latent Space #1" },
    { src: "/images/ai-portraits/variant-2.png", label: "Latent Space #2" },
    { src: "/images/ai-portraits/variant-3.png", label: "Latent Space #3" },
    { src: "/images/ai-portraits/variant-4.png", label: "Latent Space #4" },
  ],
  resonance: [
    { src: "/images/ai-portraits/resonance-1.jpg", label: "Resonance #1" },
    { src: "/images/ai-portraits/resonance-2.jpg", label: "Resonance #2" },
    { src: "/images/ai-portraits/resonance-3.jpg", label: "Resonance #3" },
    { src: "/images/ai-portraits/resonance-4.jpg", label: "Resonance #4" },
  ],
  hermetic: [
    { src: "/images/ai-portraits/hermetic-1.jpg", label: "Hermetic #1" },
    { src: "/images/ai-portraits/hermetic-2.jpg", label: "Hermetic #2" },
    { src: "/images/ai-portraits/hermetic-3.jpg", label: "Hermetic #3" },
    { src: "/images/ai-portraits/hermetic-4.jpg", label: "Hermetic #4" },
  ],
  renaissance: [
    { src: "/images/ai-portraits/renaissance-1.jpg", label: "Renaissance #1" },
    { src: "/images/ai-portraits/renaissance-2.jpg", label: "Renaissance #2" },
    { src: "/images/ai-portraits/renaissance-3.jpg", label: "Renaissance #3" },
    { src: "/images/ai-portraits/renaissance-4.jpg", label: "Renaissance #4" },
  ],
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
            Photos from around the web, plus AI-generated portraits.
          </p>
        </header>

        {/* Real Photos */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realPhotos.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
                <p className="text-xs text-text-faint text-center">{p.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Portraits - Cartoon */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            AI Illustrated
          </h2>
          <p className="text-text-secondary mb-6">
            Vector-style cartoon portraits generated with Wan2.6.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPortraits.cartoon.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Portraits - Latent Space */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            AI Latent Space
          </h2>
          <p className="text-text-secondary mb-6">
            Abstract explorations — multiple versions dissolving into data patterns.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPortraits.latentSpace.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Portraits - Resonance */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            AI Resonance
          </h2>
          <p className="text-text-secondary mb-6">
            Cymatics and wave patterns — multiple selves at different frequencies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPortraits.resonance.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Portraits - Hermetic */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            AI Hermetic
          </h2>
          <p className="text-text-secondary mb-6">
            Sacred geometry and alchemical symbols — gold and celestial blue.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPortraits.hermetic.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Portraits - Renaissance */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            AI Renaissance
          </h2>
          <p className="text-text-secondary mb-6">
            Oil painting style — Rembrandt-inspired scholar with ghostly afterimages.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aiPortraits.renaissance.map((p) => (
              <div key={p.src} className="group">
                <div className="aspect-square rounded-lg overflow-hidden bg-warm border border-[var(--border-color)] transition-transform group-hover:scale-[1.02]">
                  <Image
                    src={p.src}
                    alt={p.label}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm text-text-muted text-center">{p.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--border-color)] pt-8">
          <p className="text-sm text-text-muted">
            AI portraits generated with Claude Code + MuleRouter API.
          </p>
        </footer>
      </div>
    </div>
  );
}
