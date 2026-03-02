import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Assistant — Fundraising & Operations",
  description:
    "Part-time EA role in Amsterdam supporting the Ancient Wisdom Trust and PlayPower Labs. Fundraising, grant writing, AI tools, and cultural preservation.",
};

export default function EAJobPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <p className="font-sans text-sm uppercase tracking-widest text-[var(--text-muted)] mb-4">
            Open Position
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4">
            Executive Assistant
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Fundraising & Operations
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-medium)] text-[var(--text-muted)]">
              Part-Time · 3 Days/Week
            </span>
            <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-medium)] text-[var(--text-muted)]">
              Amsterdam, In-Person
            </span>
            <span className="font-sans text-xs uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--border-medium)] text-[var(--text-muted)]">
              €2,500/month
            </span>
          </div>
        </header>

        {/* Content */}
        <div className="space-y-10 text-[var(--text-secondary)] leading-relaxed">
          {/* Overview */}
          <section>
            <p className="text-lg">
              I&rsquo;m looking for a sharp, organized, and trustworthy person
              to work directly with me as my executive assistant. You&rsquo;d
              support my work across two organizations:{" "}
              <strong className="text-[var(--text-primary)]">
                the Ancient Wisdom Trust
              </strong>{" "}
              (a nonprofit preserving and translating rare Renaissance texts) and{" "}
              <strong className="text-[var(--text-primary)]">
                PlayPower Labs
              </strong>{" "}
              (an educational technology company).
            </p>
            <p className="mt-4">
              You&rsquo;d report directly to me and work from the Embassy of
              the Free Mind, collaborating closely with the Embassy team on
              shared projects.
            </p>
            <p className="mt-4">
              The immediate focus is a fundraising campaign for AWT &mdash;
              coordinating donor outreach, writing grant applications, and
              keeping a growing network of supporters organized. You&rsquo;ll use
              AI tools (Claude Code) to work at a pace that would normally
              require a larger team. If you&rsquo;re curious about how AI can
              amplify thoughtful, human-centered work, this is a great place to
              find out.
            </p>
            <p className="mt-4">
              This is an{" "}
              <strong className="text-[var(--text-primary)]">
                in-person role based in Amsterdam
              </strong>{" "}
              (3 days/week on-site, with some flexibility for remote work).
              In-person presence matters for donor meetings at the Embassy of the
              Free Mind, coordination with Embassy staff, and the kind of working
              relationship that&rsquo;s hard to build over Zoom.
            </p>
          </section>

          <hr className="border-[var(--border-light)]" />

          {/* Organizations */}
          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] mb-6">
              About the Work
            </h2>

            <div className="p-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-warm)] mb-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--text-primary)] mb-2">
                Ancient Wisdom Trust
              </h3>
              <p className="text-sm">
                A nonprofit digitizing and translating rare texts from the{" "}
                <em>Bibliotheca Philosophica Hermetica</em> at the{" "}
                <a
                  href="https://embassyofthefreemind.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)] underline"
                >
                  Embassy of the Free Mind
                </a>{" "}
                in Amsterdam &mdash; a UNESCO-recognized collection of Hermetic,
                alchemical, and Neoplatonic works. We&rsquo;ve built the{" "}
                <a
                  href="https://www.sourcelibrary.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)] underline"
                >
                  Source Library
                </a>
                : 2,517 texts catalogued, 225 translated, all open-access.
                Patrick Collison (co-founder of Stripe) is a founding patron.
                We&rsquo;re raising funds to scan and translate 5,000 more
                books.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-[var(--border-light)] bg-[var(--bg-warm)]">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--text-primary)] mb-2">
                PlayPower Labs
              </h3>
              <p className="text-sm">
                An educational technology company developing innovative learning
                software. Requires support for sales outreach, marketing
                coordination, and operations.
              </p>
            </div>
          </section>

          <hr className="border-[var(--border-light)]" />

          {/* Responsibilities */}
          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] mb-6">
              What You&rsquo;ll Do
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-[var(--accent-rust)] mb-3">
                  Fundraising & Development
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Manage our donor database &mdash; track relationships,
                    conversations, and follow-ups
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Research potential funders: foundations, individuals, and
                    institutional partners
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Draft personalized outreach and follow-up communications
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Prepare briefing materials before donor meetings; coordinate
                    scheduling
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-[var(--accent-rust)] mb-3">
                  Grant Writing
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Identify foundation funding opportunities aligned with
                    AWT&rsquo;s mission
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Draft grant applications and proposals using AI tools +
                    organizational materials
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Manage grant calendar: deadlines, reporting, follow-ups
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-[var(--accent-rust)] mb-3">
                  AI-Assisted Workflows
                </h3>
                <p className="text-sm mb-3">
                  A distinctive part of this role: you&rsquo;ll use Claude Code
                  as a working tool across all your responsibilities. No
                  programming required &mdash; think of it as a very capable
                  research and writing assistant that you direct.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Research a potential donor and produce a summary in minutes
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Draft personalized outreach from templates + prospect
                    profiles
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Generate first drafts of grant applications from program
                    requirements
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-[var(--accent-rust)] mb-3">
                  Communications & Events
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Help produce newsletter and social media content
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Coordinate events at the Embassy of the Free Mind
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Maintain donor stewardship: thank-you messages, updates
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider text-[var(--accent-rust)] mb-3">
                  PlayPower Labs & Executive Support
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Support sales outreach and marketing coordination
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Manage calendar across multiple stakeholder groups
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[var(--accent-rust)] mt-1 shrink-0">
                      &bull;
                    </span>
                    Handle Amsterdam-based logistics and coordination
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-[var(--border-light)]" />

          {/* Who You Are */}
          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] mb-6">
              Who You Are
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                <strong className="text-[var(--text-primary)]">
                  Based in Amsterdam
                </strong>{" "}
                and available 3 days/week in person.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  An excellent writer in English
                </strong>{" "}
                &mdash; you&rsquo;ll draft emails to foundation directors and
                tech executives.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Experienced with grant writing, fundraising, or nonprofit
                  operations
                </strong>{" "}
                &mdash; or with the transferable skills to learn quickly.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Organized and proactive
                </strong>{" "}
                &mdash; you manage many relationships and deadlines
                simultaneously.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Trustworthy and discreet
                </strong>{" "}
                &mdash; this role involves access to donor relationships,
                financial details, email accounts, and other sensitive
                information across both organizations. Confidentiality is
                non-negotiable.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Curious about AI tools
                </strong>{" "}
                &mdash; enthusiasm to learn matters more than prior experience.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">
                  Genuinely interested
                </strong>{" "}
                in cultural preservation, intellectual history, or the
                intersection of technology and the humanities.
              </p>
            </div>

            <div className="mt-6 p-5 rounded-lg border border-[var(--border-light)] bg-[var(--bg-warm)]">
              <p className="font-sans text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                A plus
              </p>
              <p className="text-sm">
                Connected to the Embassy of the Free Mind or Amsterdam&rsquo;s
                cultural/academic community. Dutch language skills. Experience in
                museums, academic institutions, or cultural organizations.
              </p>
            </div>
          </section>

          <hr className="border-[var(--border-light)]" />

          {/* Compensation */}
          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] mb-6">
              Compensation & Practicalities
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
                <span className="font-sans font-medium text-[var(--text-primary)]">
                  Pay
                </span>
                <span>€2,500/month for 3 days/week (~24 hours)</span>

                <span className="font-sans font-medium text-[var(--text-primary)]">
                  AI Benefit
                </span>
                <span>
                  €100/month Claude Code subscription included. This isn&rsquo;t
                  just a work tool &mdash; fluency in AI-augmented work is one
                  of the most transferable skills you can build right now.
                </span>

                <span className="font-sans font-medium text-[var(--text-primary)]">
                  Schedule
                </span>
                <span>
                  Flexible &mdash; you choose which 3 days to be on-site.
                </span>

                <span className="font-sans font-medium text-[var(--text-primary)]">
                  Location
                </span>
                <span>
                  Embassy of the Free Mind, Keizersgracht 123, Amsterdam
                </span>

                <span className="font-sans font-medium text-[var(--text-primary)]">
                  Reports to
                </span>
                <span>
                  Derek Lomas
                </span>

                <span className="font-sans font-medium text-[var(--text-primary)]">
                  Growth
                </span>
                <span>
                  If fundraising succeeds, AWT scales and so does this role.
                </span>
              </div>
            </div>
          </section>

          <hr className="border-[var(--border-light)]" />

          {/* Apply */}
          <section>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl text-[var(--text-primary)] mb-4">
              Interested?
            </h2>
            <p className="mb-6 text-sm">
              This position is filled through referrals from our network. If
              you&rsquo;ve been referred &mdash; or if this resonates and you
              think you&rsquo;d be a good fit &mdash; send the following to{" "}
              <a
                href="mailto:derek@ancientwisdomtrust.org?subject=Executive%20Assistant%20Role"
                className="text-[var(--accent-rust)] hover:text-[var(--accent-rust-hover)] underline"
              >
                derek@ancientwisdomtrust.org
              </a>
              :
            </p>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>Your CV</li>
              <li>
                A short note about why this role interests you
              </li>
              <li>Who referred you (if applicable)</li>
              <li>
                A writing sample &mdash; grant excerpt, professional email, or
                similar
              </li>
            </ol>
          </section>

          {/* Footer context */}
          <div className="mt-12 pt-8 border-t border-[var(--border-light)]">
            <p className="text-xs text-[var(--text-muted)]">
              The Ancient Wisdom Trust is an initiative of{" "}
              <a
                href="https://embassyofthefreemind.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--text-secondary)]"
              >
                the Embassy of the Free Mind
              </a>{" "}
              in Amsterdam. Learn more at{" "}
              <a
                href="https://www.ancientwisdomtrust.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--text-secondary)]"
              >
                ancientwisdomtrust.org
              </a>{" "}
              and{" "}
              <a
                href="https://www.sourcelibrary.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--text-secondary)]"
              >
                sourcelibrary.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
