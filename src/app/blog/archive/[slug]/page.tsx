import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getArchiveIndex, getArchivePost } from "@/lib/archive";

export function generateStaticParams() {
  return getArchiveIndex().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getArchivePost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `Archived essay, originally published on ${
      post.platform === "medium" ? "Medium" : "Substack"
    } in ${post.date.slice(0, 4)}.`,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArchivePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getArchivePost(slug);
  if (!post) notFound();

  const html = await marked.parse(post.markdown);
  const platformName = post.platform === "medium" ? "Medium" : "Substack";

  return (
    <div className="min-h-screen py-16 px-6">
      <article className="max-w-2xl mx-auto">
        <header className="mb-10">
          <Link
            href="/writing#archive"
            className="text-sm text-text-muted hover:text-rust transition-colors no-underline font-[family-name:var(--font-inter)]"
          >
            &larr; Writing archive
          </Link>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mt-6 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-sm text-text-muted">
            {formatDate(post.date)} &middot; originally published on{" "}
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rust hover:underline"
            >
              {platformName}
            </a>
          </p>
        </header>

        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}
