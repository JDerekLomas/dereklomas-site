import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Selected publications on AI for wellbeing, learning engineering, empirical aesthetics, and human-centered design by Derek Lomas.",
};

// Featured publications - most impactful work
const featuredPublications = [
  {
    title:
      "Is Difficulty Overrated? The Effects of Choice, Novelty and Suspense on Intrinsic Motivation in Educational Games",
    authors: "Lomas JD, Koedinger K, Patel N, Shodhan S, Poonwala N, Forlizzi J",
    venue: "CHI 2017",
    year: 2017,
    description:
      "Honorable Mention Award. Large-scale experiments (70K subjects) showing players prefer easier game versions, with choice, novelty and suspense driving motivation more than difficulty.",
    award: "Honorable Mention",
    url: "https://dl.acm.org/doi/10.1145/3025453.3025686",
  },
  {
    title:
      "Interface Design Optimization as a Multi-Armed Bandit Problem",
    authors:
      "Lomas JD, Forlizzi J, Poonwala N, Patel N, Shodhan S, Patel K, Koedinger K, Brunskill E",
    venue: "CHI 2016",
    year: 2016,
    description:
      "Demonstrating how AI-assisted experimentation using multi-armed bandits can more rapidly identify effective design conditions in educational software.",
    url: "https://dl.acm.org/doi/10.1145/2858036.2858425",
  },
  {
    title:
      "Harmony in Design: A Synthesis of Literature from Classical Philosophy, the Sciences, Economics, and Design",
    authors: "Lomas JD, Xue H",
    venue: "She Ji: The Journal of Design, Economics, and Innovation",
    year: 2022,
    description:
      "A comprehensive synthesis exploring how principles of harmony from philosophy, science, and economics can inform design practice.",
    url: "https://www.sciencedirect.com/science/article/pii/S2405872622000089",
  },
  {
    title: "Resonance as a Design Strategy for AI and Social Robots",
    authors:
      "Lomas JD, Lin A, Dikker S, Forster D, Lupetti ML, Huisman G, Habekost J, et al.",
    venue: "Frontiers in Neurorobotics",
    year: 2022,
    description:
      "Exploring how resonance—the tendency of systems to synchronize—can guide the design of AI and robotic systems that harmonize with humans.",
    url: "https://www.frontiersin.org/articles/10.3389/fnbot.2022.850489",
  },
  {
    title:
      "Optimizing Challenge in an Educational Game Using Large-Scale Design Experiments",
    authors: "Lomas D, Patel K, Forlizzi JL, Koedinger KR",
    venue: "CHI 2013",
    year: 2013,
    description:
      "Pioneering work on using large-scale A/B testing (10K subjects) to optimize educational game design based on empirical evidence.",
    url: "https://dl.acm.org/doi/10.1145/2470654.2470668",
  },
  {
    title:
      "Developing and Evaluating a Design Method for Positive Artificial Intelligence",
    authors: "van der Maden W, Lomas D, Hekkert P",
    venue: "AI EDAM",
    year: 2024,
    description:
      "A framework and method for designing AI systems that actively promote human wellbeing rather than merely avoiding harm.",
    url: "https://www.cambridge.org/core/journals/ai-edam/article/developing-and-evaluating-a-design-method-for-positive-artificial-intelligence/",
  },
];

// Recent publications by year
const recentPublications = [
  {
    year: 2025,
    papers: [
      {
        title: "From Dead-ends to Dialogue: Third Workshop on Design Research & GenAI",
        authors: "van der Maden W, van der Burg V, Halperin BA, ... Lomas D, et al.",
        venue: "DIS 2025",
      },
      {
        title: "Enhancing Aesthetic Appeal of AI-Generated Product Designs through LoRA Fine-Tuning",
        authors: "Liao D, Lomas JD, Yu C",
        venue: "arXiv",
      },
    ],
  },
  {
    year: 2024,
    papers: [
      {
        title: "Developing and Evaluating a Design Method for Positive Artificial Intelligence",
        authors: "van der Maden W, Lomas D, Hekkert P",
        venue: "AI EDAM",
      },
      {
        title: "Death of the Design Researcher? Creating Knowledge Resources Using Generative AI",
        authors: "van der Maden W, ... Lomas JD, et al.",
        venue: "DIS 2024",
      },
      {
        title: "Improved Emotional Alignment of AI and Humans: Ratings of Emotions by Stable Diffusion & DALL-E",
        authors: "Lomas JD, van der Maden W, et al.",
        venue: "arXiv",
      },
    ],
  },
  {
    year: 2023,
    papers: [
      {
        title: "Improving Mathematics Assessment Readability: Do Large Language Models Help?",
        authors: "Patel N, Nagpal P, Shah T, Sharma A, Malvi S, Lomas D",
        venue: "Journal of Computer Assisted Learning",
      },
      {
        title: "Towards a Design (Research) Framework with Generative AI",
        authors: "van der Maden W, ... Lomas JD, Kang E",
        venue: "DIS 2023",
      },
      {
        title: "Fourth Annual Workshop on A/B Testing and Platform-Enabled Learning Research",
        authors: "Ritter S, Heffernan NT, Williams JJ, Lomas D, et al.",
        venue: "L@S 2023",
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title: "Harmony in Design: A Synthesis from Classical Philosophy, Sciences, Economics, and Design",
        authors: "Lomas JD, Xue H",
        venue: "She Ji",
      },
      {
        title: "Resonance as a Design Strategy for AI and Social Robots",
        authors: "Lomas JD, Lin A, Dikker S, et al.",
        venue: "Frontiers in Neurorobotics",
      },
      {
        title: "Initial Psychometric Properties of 7 NeuroUX Remote Ecological Momentary Cognitive Tests",
        authors: "Moore RC, Parrish EM, et al.",
        venue: "JMIR",
      },
    ],
  },
  {
    year: 2021,
    papers: [
      {
        title: "Design Space Cards: Using a Card Deck to Navigate the Design Space of Interactive Play",
        authors: "Lomas JD, Karac M, Gielen M",
        venue: "CHI PLAY",
      },
      {
        title: "The Resonance Pod: Applying Haptics to Promote Relaxation Through Breathing Entrainment",
        authors: "Shor D, Ruitenburg Y, Boere W, Lomas JD, Huisman G",
        venue: "IEEE World Haptics",
      },
      {
        title: "UpGrade: An Open Source Tool to Support A/B Testing in Educational Software",
        authors: "Ritter S, Murphy A, Fancsali SE, Fitkariwala V, Patel N, Lomas JD",
        venue: "L@S Workshop",
      },
    ],
  },
];

// Research areas
const researchAreas = [
  {
    title: "Positive AI / AI for Wellbeing",
    description:
      "Designing AI systems that actively promote human flourishing in education and healthcare, not just avoiding harm but maximizing positive outcomes.",
    badge: "badge-violet",
  },
  {
    title: "Learning Engineering",
    description:
      "Using large-scale experiments and data-driven methods to optimize educational content, with work reaching millions of students globally.",
    badge: "badge-sage",
  },
  {
    title: "Resonance in Interaction Design",
    description:
      "Exploring how principles of resonance and synchronization from physics and neuroscience can guide human-AI system design.",
    badge: "badge-rust",
  },
  {
    title: "Empirical Aesthetics",
    description:
      "Investigating how aesthetic experience influences interaction, engagement, and wellbeing through large-scale experiments.",
    badge: "badge-gold",
  },
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Research
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed mb-6">
            70+ publications on AI for wellbeing, learning engineering, and
            human-centered design. 1,400+ citations.
          </p>
          <a
            href="https://scholar.google.com/citations?user=hbPBXXoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-rust font-[family-name:var(--font-inter)] text-sm font-medium hover:gap-3 transition-all"
          >
            View full publication list on Google Scholar
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
            </svg>
          </a>
        </header>

        {/* Research areas */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Research Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="p-6 bg-white rounded-lg border border-[var(--border-color)]"
              >
                <span className={`badge ${area.badge} mb-3`}>Research</span>
                <h3 className="font-medium text-text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-text-secondary text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured publications */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Featured Publications
          </h2>
          <div className="space-y-6">
            {featuredPublications.map((pub) => (
              <a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] hover:shadow-sm transition-all group no-underline"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge badge-slate text-xs">
                        {pub.venue}
                      </span>
                      {pub.award && (
                        <span className="badge badge-rust text-xs">
                          {pub.award}
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium text-text-primary group-hover:text-rust transition-colors leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-text-muted text-sm mt-1">{pub.authors}</p>
                    <p className="text-text-secondary text-sm mt-3">
                      {pub.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-text-faint font-[family-name:var(--font-inter)] text-sm">
                    {pub.year}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Recent publications by year */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Recent Publications
          </h2>
          <div className="space-y-8">
            {recentPublications.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h3 className="font-[family-name:var(--font-inter)] text-sm font-medium text-text-muted mb-4 sticky top-20 bg-[var(--bg-cream)] py-2">
                  {yearGroup.year}
                </h3>
                <div className="space-y-3 pl-4 border-l-2 border-[var(--border-color)]">
                  {yearGroup.papers.map((paper) => (
                    <div key={paper.title} className="pb-3">
                      <p className="text-text-primary text-sm font-medium leading-snug">
                        {paper.title}
                      </p>
                      <p className="text-text-muted text-xs mt-1">
                        {paper.authors}
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        {paper.venue}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PhD Thesis */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Dissertation
          </h2>
          <div className="p-6 bg-warm rounded-lg border border-[var(--border-color)]">
            <h3 className="font-medium text-text-primary">
              Optimizing Motivation and Learning with Large-Scale Game Design
              Experiments
            </h3>
            <p className="text-text-muted text-sm mt-1">
              PhD Dissertation, Human-Computer Interaction Institute, Carnegie
              Mellon University, 2014
            </p>
            <p className="text-text-secondary text-sm mt-3">
              Advised by Ken Koedinger and Jodi Forlizzi. Developed methods for
              using large-scale online experiments to optimize educational game
              design, demonstrating how empirical approaches can inform
              interaction design theory.
            </p>
          </div>
        </section>

        {/* Affiliations */}
        <section>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Academic Affiliations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-[var(--border-color)] hover:border-rust/30 transition-colors no-underline group"
            >
              <p className="font-medium text-text-primary group-hover:text-rust transition-colors">
                TU Delft
              </p>
              <p className="text-text-secondary text-sm">
                Human-Centered Design Department
              </p>
            </a>
            <a
              href="https://diopd.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-[var(--border-color)] hover:border-rust/30 transition-colors no-underline group"
            >
              <p className="font-medium text-text-primary group-hover:text-rust transition-colors">
                Delft Institute of Positive Design
              </p>
              <p className="text-text-secondary text-sm">Research Member</p>
            </a>
            <a
              href="https://www.researchgate.net/profile/Derek-Lomas-3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-[var(--border-color)] hover:border-rust/30 transition-colors no-underline group"
            >
              <p className="font-medium text-text-primary group-hover:text-rust transition-colors">
                ResearchGate
              </p>
              <p className="text-text-secondary text-sm">Full publication archive</p>
            </a>
            <a
              href="https://dblp.org/pid/63/840.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-lg border border-[var(--border-color)] hover:border-rust/30 transition-colors no-underline group"
            >
              <p className="font-medium text-text-primary group-hover:text-rust transition-colors">
                DBLP
              </p>
              <p className="text-text-secondary text-sm">Computer science bibliography</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
