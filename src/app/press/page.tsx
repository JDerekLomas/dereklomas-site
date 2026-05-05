import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Media coverage, talks, and features about Derek Lomas's work in AI, education, and human-centered design.",
};

const pressItems = [
  {
    title: "Positive Artificial Intelligence vibes",
    outlet: "TU Delft Delft Design Stories",
    date: "2023",
    url: "https://www.tudelft.nl/en/ide/delft-design-stories/positive-artificial-intelligence-vibes",
    type: "Profile" as const,
  },
  {
    title:
      "Smart Paper Recognized by UNESCO for Pioneering AI in Learning Assessment",
    outlet: "ThePrint / ANI",
    date: "2024",
    url: "https://theprint.in/ani-press-releases/smart-paper-recognized-by-unesco-for-pioneering-ai-in-learning-assessment/1936733/",
    type: "Venture" as const,
    note: "Smart Paper / Playpower Labs, India",
  },
  {
    title: "Rajasthan Ke Shiksha Mein Badhate Kadam (RKSMBK)",
    outlet: "World Bank AI Repository",
    date: "2024",
    url: "https://airepository.worldbank.org/use-case/rajasthan-ke-shiksha-mein-badhate-kadam-rksmbk",
    type: "Venture" as const,
    note: "Case study of Playpower Labs / Smart Paper deployment in 65,000 Rajasthan schools",
  },
  {
    title: "How Smart Paper Is Transforming Handwritten Assessments at Scale",
    outlet: "Tools Competition",
    date: "2024",
    url: "https://tools-competition.org/smart-paper-ai-handwritten-assessments-scale-india/",
    type: "Venture" as const,
    note: "Smart Paper / Playpower Labs, India",
  },
  {
    title: "In Rajasthan Schools, AI Is Teacher And Examiner",
    outlet: "BoomLive",
    date: "2023",
    url: "https://www.boomlive.in/decode/in-rajasthan-schools-artificial-intelligence-is-teacher-and-examiner-21761",
    type: "Venture" as const,
    note: "Smart Paper / Playpower Labs, India",
  },
  {
    title: "AI can tell what song you are listening to from your brainwaves",
    outlet: "New Scientist",
    date: "2021",
    url: "https://www.newscientist.com/article/2265811-ai-can-tell-what-song-you-are-listening-to-from-your-brainwaves/",
    type: "Feature" as const,
  },
  {
    title:
      "New A.I. can identify the song you're listening to by reading your brain waves",
    outlet: "Digital Trends",
    date: "2021",
    url: "https://www.digitaltrends.com/music/ai-identifies-songs-by-reading-brain-waves/",
    type: "Feature" as const,
  },
  {
    title:
      "How are You Doing? Researchers Hope to Measure Well-Being at Global Scale",
    outlet: "UC San Diego Health",
    date: "2020",
    url: "https://health.ucsd.edu/news/releases/Pages/2020-05-05-researchers-hope-to-measure-well-being-at-global-scale.aspx",
    type: "Feature" as const,
  },
  {
    title:
      "New mobile platform can address another serious complication of COVID-19",
    outlet: "News-Medical",
    date: "2020",
    url: "https://www.news-medical.net/news/20200506/New-mobile-platform-can-address-another-serious-complication-of-COVID-19.aspx",
    type: "Feature" as const,
  },
  {
    title: "How jargon is killing innovation",
    outlet: "San Diego Union-Tribune",
    date: "2014",
    url: "https://www.sandiegouniontribune.com/business/technology/sdut-innovation-clear-pitch-2014nov04-story.html",
    type: "Feature" as const,
  },
  {
    title:
      "Kaplan and Techstars Announce the 2014 Kaplan EdTech Accelerator Class",
    outlet: "Tech.co",
    date: "2014",
    url: "https://tech.co/news/12-startups-selected-for-kaplan-edtec-accelerator-2014-07",
    type: "Feature" as const,
  },
  {
    title: "New Approaches to Teaching Fractions",
    outlet: "Wall Street Journal",
    date: "2013",
    url: "https://www.wsj.com/articles/SB10001424052702303759604579093231122420774",
    type: "Feature" as const,
  },
  {
    title: 'Preventing the "Summer Slide" in Math Skills',
    outlet: "KQED MindShift",
    date: "2011",
    url: "https://www.kqed.org/mindshift/11896/preventing-the-summer-slide-in-math-skills",
    type: "Feature" as const,
  },
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
    title: "Ashoka Changemakers Innovation Award",
    outlet: "Ashoka",
    date: "2010",
    url: "https://www.ashoka.org/",
    type: "Award" as const,
  },
  {
    title: "PlayPower: 1980s computing for the 21st century",
    outlet: "The Guardian",
    date: "2009",
    url: "https://www.theguardian.com/technology/2009/nov/04/playpower-80s-computing-21st-century",
    type: "Feature" as const,
  },
  {
    title:
      "UC San Diego Students Seek to Improve Education with $12 Computers",
    outlet: "Calit2",
    date: "2009",
    url: "http://www.calit2.net/newsroom/release.php?id=1472",
    type: "Feature" as const,
  },
  {
    title: "$12 Computer: Playpower Wants to Save the World 8 Bits at a Time",
    outlet: "Wired",
    date: "2009",
    url: "https://www.wired.com/2009/03/12-computers-ba/",
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
    title: "Researchers Propose $12 Computer for Developing Countries",
    outlet: "ABC News",
    date: "2008",
    url: "https://abcnews.go.com/Technology/AheadoftheCurve/story?id=5529989&page=1",
    type: "Feature" as const,
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
  Venture: "bg-rust/10 text-rust",
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
                    {"note" in item && item.note && (
                      <p className="text-xs text-text-muted mt-1 font-[family-name:var(--font-inter)]">
                        {item.note}
                      </p>
                    )}
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
