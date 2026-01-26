import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, wellbeing, design, education, and the intersection of technology and human flourishing.",
};

// Substack articles
const substackArticles = [
  {
    title: "Wellbeing, what else?",
    description: "Prioritizing human flourishing in AI alignment",
    date: "2024-03-07",
    url: "https://aixd.substack.com/p/wellbeing-what-else",
  },
  {
    title: "Can AI deepen our connection to human values?",
    description: "Xin Wen - Project Series #5",
    date: "2024-03-01",
    url: "https://aixd.substack.com/p/can-ai-deepen-our-connection-to-human",
  },
  {
    title: "How Might Human Experience Inform AI Systems?",
    description: "Shuyue Jin - Project Series #4",
    date: "2024-02-23",
    url: "https://aixd.substack.com/p/how-might-human-experience-inform",
  },
  {
    title: "AI & Experience Design Conference",
    description:
      "How Can We Step onto the Frontiers of Generative AI to Design Meaningful Experiences?",
    date: "2024-02-02",
    url: "https://aixd.substack.com/p/ai-and-experience-design-conference",
  },
  {
    title: "The Future Framing Method",
    description: "Creating Future Visions with AI and Co-Creation",
    date: "2023-12-09",
    url: "https://aixd.substack.com/p/the-future-framing-method-creating",
  },
  {
    title: "AI, Entrepreneurship & Social Impact",
    description:
      "How might entrepreneurs use AI to change the world for the better?",
    date: "2023-12-01",
    url: "https://aixd.substack.com/p/ai-entrepreneurship-and-social-impact",
    featured: true,
  },
  {
    title: "AI as a Co-Designer",
    description: "Reinventing the design process with AI collaboration",
    date: "2023-11-27",
    url: "https://aixd.substack.com/p/ai-as-a-co-designer-reinventing-the",
  },
  {
    title: "Academic Writing with AI",
    description: "Using AI tools for academic research and writing",
    date: "2023-11-10",
    url: "https://aixd.substack.com/p/academic-writing-with-ai",
  },
  {
    title: "The Future of Education",
    description: "How AI will transform learning",
    date: "2023-11-03",
    url: "https://aixd.substack.com/p/the-future-of-education",
  },
  {
    title: "How Might We Envision the Future with AI?",
    description: "Using AI for futures thinking and speculation",
    date: "2023-05-31",
    url: "https://aixd.substack.com/p/how-might-we-envision-the-future",
  },
  {
    title: 'Prompt Engineering? Try "Prompt Vibing"',
    description: "A more intuitive approach to working with AI",
    date: "2023-05-24",
    url: "https://aixd.substack.com/p/prompt-engineering-try-prompt-vibing",
    featured: true,
  },
  {
    title: 'AI Might Not Need Experience to "Understand"',
    description: "Philosophical exploration of AI understanding",
    date: "2023-05-23",
    url: "https://aixd.substack.com/p/ai-might-not-need-experience-to-understand",
  },
];

// Medium articles
const mediumArticles = [
  {
    title: "Can Intelligence Be Built?",
    description:
      "What is intelligence — and can we design systems to nurture it?",
    date: "2015-07-31",
    url: "https://medium.com/@dereklomas/can-intelligence-be-built-f8bcd068236f",
    featured: true,
  },
  {
    title: "Design Thinking in India: Remembering MP Ranjan",
    description:
      "A tribute to the father of Design Thinking in India, faculty at NID for 45 years",
    date: "2015-08-09",
    url: "https://medium.com/ux-for-india/design-thinking-in-india-remembering-mp-ranjan-9a0348f251ad",
    publication: "UX in India",
  },
  {
    title: "How to Design Systems to Nurture a Child's Intelligence",
    description:
      "Creating adaptive digital learning systems that balance child interests with parent goals",
    date: "2015-07-31",
    url: "https://medium.com/@dereklomas/designing-systems-to-nurture-a-child-s-intelligence-985eaea69294",
  },
  {
    title: "Norman Doors",
    description:
      "On Don Norman's critique of door design and what it teaches us about UX",
    date: "2015-06-08",
    url: "https://medium.com/@dereklomas/norman-doors-1b2fade3fe4f",
  },
  {
    title: "What is Success, Really?",
    description:
      "Success means living a happy, meaningful life — what psychologists call 'well-being'",
    date: "2015-07-31",
    url: "https://medium.com/@dereklomas/what-is-success-really-26b7c5918aad",
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function ArticleCard({
  article,
  showBadge,
}: {
  article: {
    title: string;
    description: string;
    date: string;
    url: string;
    featured?: boolean;
    publication?: string;
  };
  showBadge?: string;
}) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            {showBadge && (
              <span className="badge badge-violet text-xs">{showBadge}</span>
            )}
            {article.featured && (
              <span className="badge badge-rust text-xs">Featured</span>
            )}
            {article.publication && (
              <span className="text-xs text-text-muted">
                in {article.publication}
              </span>
            )}
          </div>
          <h3 className="text-lg font-medium text-text-primary group-hover:text-rust transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {article.description}
          </p>
        </div>
        <span className="text-xs text-text-muted whitespace-nowrap font-[family-name:var(--font-inter)]">
          {formatDate(article.date)}
        </span>
      </div>
    </a>
  );
}

export default function WritingPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Writing
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Essays on AI, wellbeing, design, and the pursuit of human
            flourishing through technology.
          </p>
        </header>

        {/* Substack Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                AI and Experience Design
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Substack newsletter exploring AI and human-centered design
              </p>
            </div>
            <a
              href="https://aixd.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
            >
              Subscribe
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            {substackArticles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </section>

        {/* Medium Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary">
                Medium
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Earlier essays on intelligence, design thinking, and wellbeing
              </p>
            </div>
            <a
              href="https://medium.com/@dereklomas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rust font-[family-name:var(--font-inter)] font-medium hover:underline flex items-center gap-1"
            >
              View profile
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            {mediumArticles.map((article) => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </section>

        {/* Topics */}
        <section className="p-8 bg-warm rounded-lg border border-[var(--border-color)]">
          <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-text-primary mb-4">
            Topics I Write About
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "AI and Experience Design",
              "Positive AI",
              "AI for Wellbeing",
              "Education and Learning",
              "Design Thinking",
              "Human-Centered Design",
              "Intelligence",
              "Cognitive Science",
            ].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 bg-white rounded-full text-sm text-text-secondary border border-[var(--border-color)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
