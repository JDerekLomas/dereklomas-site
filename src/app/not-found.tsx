import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-6xl font-[family-name:var(--font-cormorant)] font-medium text-text-muted mb-4">
          404
        </p>
        <h1 className="text-2xl font-[family-name:var(--font-cormorant)] font-medium text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 bg-rust text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity no-underline"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
