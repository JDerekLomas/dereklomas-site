import Link from "next/link";

export default function FicinoNetworkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pt-24 pb-4 max-w-6xl mx-auto w-full">
        <Link href="/lab" className="text-sm text-text-muted hover:text-rust transition-colors mb-4 inline-block">
          &larr; Back to Lab
        </Link>
        <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-medium text-text-primary mb-2">
          Ficino&apos;s Network
        </h1>
        <p className="text-text-secondary max-w-2xl">
          Interactive network visualization of Marsilio Ficino&apos;s intellectual connections and correspondences.
        </p>
      </div>
      <div className="flex-1 mx-6 mb-6 rounded-lg overflow-hidden border border-[var(--border-color)]">
        <iframe
          src="/viz/ficino_network.html"
          className="w-full h-full border-0"
          style={{ minHeight: "calc(100vh - 200px)" }}
          title="Ficino Network Visualization"
        />
      </div>
    </div>
  );
}
