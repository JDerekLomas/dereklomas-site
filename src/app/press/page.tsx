import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Media coverage, talks, and features about Derek Lomas's work in AI, education, and human-centered design.",
};

const pressItems = [
  {
    title: "$12 Computer for the Developing World",
    outlet: "NPR",
    date: "2010",
    url: "https://www.npr.org/sections/alltechconsidered/2010/03/12_computer_for_the_developing.html",
    type: "Feature" as const,
  },
  {
    title: "Can a $12 Computer Change the World?",
    outlet: "CNN",
    date: "2010",
    url: "https://www.cnn.com/2010/TECH/03/22/playpower.computers/",
    type: "Feature" as const,
  },
  {
    title: "Playpower: Learning on an 8-bit Budget",
    outlet: "Wired",
    date: "2009",
    url: "https://www.wired.com/2009/09/playpower/",
    type: "Feature" as const,
  },
  {
    title: "PopTech Social Innovation Fellow",
    outlet: "PopTech",
    date: "2009",
    url: "https://poptech.org/",
    type: "Award" as const,
  },
  {
    title: "Ashoka Changemakers Innovation Award",
    outlet: "Ashoka",
    date: "2010",
    url: "https://www.ashoka.org/",
    type: "Award" as const,
  },
  {
    title: "Smart Paper: AI for Paper-Based Learning",
    outlet: "EdSurge",
    date: "2023",
    type: "Feature" as const,
  },
  {
    title: "Positive AI: Designing for Human Wellbeing",
    outlet: "TU Delft Stories",
    date: "2022",
    url: "https://www.tudelft.nl/en/ide/about-ide/people/lomas-j-d",
    type: "Profile" as const,
  },
];

const talks = [
  {
    title: "Designing AI for Wellbeing",
    venue: "UNESCO",
    date: "2025",
    description: "Invited talk on AI and wellbeing in education",
  },
  {
    title: "AI & Experience Design Conference",
    venue: "TU Delft",
    date: "2024",
    description: "Keynote on frontiers of generative AI for meaningful experiences",
  },
  {
    title: "The $12 Computer",
    venue: "PopTech",
    date: "2009",
    description: "How 8-bit gaming platforms can deliver education to the developing world",
    url: "https://poptech.org/",
  },
  {
    title: "Playpower: Education on a $12 Computer",
    venue: "TEDxCMU",
    date: "2010",
    description: "Open-source educational games for the world's cheapest computers",
  },
];

const TYPE_STYLES = {
  Feature: "bg-violet/10 text-violet",
  Award: "bg-amber-100 text-amber-700",
  Profile: "bg-teal-100 text-teal-700",
};

export default function PressPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Press & Talks
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Media coverage, features, and speaking engagements.
          </p>
        </header>

        {/* Press */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Press & Media
          </h2>
          <div className="space-y-4">
            {pressItems.map((item) => {
              const Tag = item.url ? "a" : "div";
              const linkProps = item.url
                ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Tag
                  key={item.title}
                  {...linkProps}
                  className="flex items-start justify-between gap-4 p-5 bg-card rounded-lg border border-[var(--border-color)] hover:border-[var(--border-medium)] transition-colors no-underline group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 text-xs font-[family-name:var(--font-inter)] font-medium rounded ${TYPE_STYLES[item.type]}`}>
                        {item.type}
                      </span>
                      <span className="text-sm font-medium text-rust">{item.outlet}</span>
                    </div>
                    <h3 className="text-lg font-medium text-text-primary group-hover:text-rust transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap font-[family-name:var(--font-inter)]">
                    {item.date}
                  </span>
                </Tag>
              );
            })}
          </div>
        </section>

        {/* Talks */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Selected Talks
          </h2>
          <div className="space-y-4">
            {talks.map((talk) => (
              <div
                key={talk.title + talk.date}
                className="p-5 bg-card rounded-lg border border-[var(--border-color)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-rust mt-0.5">{talk.venue}</p>
                    <p className="text-sm text-text-secondary mt-2">
                      {talk.description}
                    </p>
                  </div>
                  <span className="text-sm text-text-muted whitespace-nowrap font-[family-name:var(--font-inter)]">
                    {talk.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <div className="p-8 bg-warm rounded-lg border border-[var(--border-color)] text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-text-primary mb-2">
            Media Inquiries
          </p>
          <p className="text-text-secondary text-sm mb-4">
            For interviews, speaking engagements, or press inquiries, please get
            in touch.
          </p>
          <a
            href="mailto:dereklomas@gmail.com"
            className="inline-block px-6 py-2.5 bg-rust text-white rounded-md text-sm font-medium hover:opacity-90 transition-opacity no-underline"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
