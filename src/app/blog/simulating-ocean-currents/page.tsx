import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";
import ShareButtons from "@/components/ShareButtons";
import { BlogPostSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Simulating Ocean Currents from One Equation",
  description:
    "A browser-based ocean circulation simulator that produces the Gulf Stream, Kuroshio Current, and Antarctic Circumpolar Current from a single equation — running on the GPU via WebGPU compute shaders.",
  openGraph: {
    title: "Simulating Ocean Currents from One Equation",
    description:
      "A GPU-accelerated ocean simulator that produces all major currents from the barotropic vorticity equation.",
    type: "article",
    authors: ["Derek Lomas"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function OceanCurrentsPost() {
  return (
    <div className="min-h-screen py-16 px-6">
      <BlogPostSchema
        title="Simulating Ocean Currents from One Equation"
        description="A browser-based ocean circulation simulator that produces the Gulf Stream, Kuroshio Current, and Antarctic Circumpolar Current from a single equation."
        slug="simulating-ocean-currents"
        datePublished="2026-04-09"
      />
      <article className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-rust transition-colors text-sm font-sans no-underline mb-10 block"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All posts
        </Link>

        {/* Header */}
        <header className="mb-12">
          <p className="label mb-4">Education</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            Simulating Ocean Currents from One Equation
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            The Gulf Stream, Kuroshio Current, and Antarctic Circumpolar Current all emerge from a single equation. I built a GPU-accelerated simulator that lets you watch it happen in real time — and reshape the continents while it runs.
          </p>
          <p className="font-sans text-sm text-muted">
            9 April 2026 &middot; 7 min read
          </p>
          <figure className="mt-8">
            <a href="https://amoc-sim.vercel.app/v4-physics/" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden">
              <Image src="/images/blog/amoc-simulator.png" alt="Ocean Circulation Simulator running in the browser" width={800} height={400} className="w-full hover:opacity-90 transition-opacity" />
            </a>
            <figcaption className="text-center text-sm text-muted mt-3 font-sans">
              The simulator running a global ocean circulation with temperature overlay.{" "}
              <a href="https://amoc-sim.vercel.app/v4-physics/" target="_blank" rel="noopener noreferrer" className="text-rust hover:underline">
                Try it live &rarr;
              </a>
            </figcaption>
          </figure>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            Physical oceanography has a remarkable property: one equation explains almost all large-scale
            ocean circulation. The barotropic vorticity equation describes how wind stress, the
            Earth&rsquo;s rotation, and friction interact to produce the gyres and boundary currents we
            see on every ocean map. I wanted to see if I could make that equation come alive in a browser.
          </p>

          <p>
            <a href="https://amoc-sim.vercel.app/v4-physics/" target="_blank" rel="noopener noreferrer">
              The result is a real-time simulator
            </a>{" "}
            that runs the full barotropic vorticity equation on a 360&times;180 global grid, using WebGPU
            compute shaders for GPU acceleration. You can watch currents form from nothing, paint new
            continents, and trigger paleoclimate scenarios — all at interactive frame rates.
          </p>

          <h2>One equation to rule them all</h2>

          <p>
            The governing equation looks intimidating at first:
          </p>

          <pre><code>d&zeta;/dt + J(&psi;,&zeta;) + &beta;v = curl(&tau;)/&rho;H - r&zeta; + A&nabla;&sup4;&psi;</code></pre>

          <p>
            But each term has a clear physical meaning. Wind stress curl (<em>curl(&tau;)/&rho;H</em>)
            drives the circulation. The beta effect (<em>&beta;v</em>) — the variation of the Coriolis
            parameter with latitude — explains why western boundary currents like the Gulf Stream are
            intense and narrow while eastern return flows are broad and gentle. Bottom friction (<em>r&zeta;</em>)
            provides dissipation, and lateral viscosity (<em>A&nabla;&sup4;&psi;</em>) sets the boundary
            layer width.
          </p>

          <p>
            Henry Stommel worked this out in 1948 with a paper that&rsquo;s barely four pages long. Walter
            Munk refined the viscous formulation in 1950. Between them, they explained why every ocean
            basin on Earth has the same asymmetric pattern: a fast, narrow western boundary current and a
            slow, broad return flow.
          </p>

          <p>
            I built an{" "}
            <a href="https://amoc-sim.vercel.app/v4-physics/equation.html" target="_blank" rel="noopener noreferrer">
              interactive equation explainer
            </a>{" "}
            that breaks down each term with animations and physical intuition, so you don&rsquo;t need a
            fluid dynamics background to understand what&rsquo;s happening.
          </p>

          <h2>SimEarth for the ocean</h2>

          <p>
            The most fun feature is the paint palette. You can draw land or ocean directly on the map
            and watch the circulation reorganize in real time. Paint a land bridge across the Drake
            Passage and the Antarctic Circumpolar Current collapses. Open a seaway through Panama and
            water flows between the Atlantic and Pacific. Melt Greenland and watch the freshwater
            disrupt the Atlantic overturning circulation.
          </p>

          <p>
            These aren&rsquo;t canned animations. The physics solver recalculates everything from
            scratch based on the new geometry. You&rsquo;re running actual paleoclimate experiments —
            the same scenarios oceanographers study, just compressed from geological timescales into
            seconds.
          </p>

          <p>
            There are preset scenarios that recreate key moments in Earth&rsquo;s climate history:
          </p>

          <ul>
            <li><strong>Open Drake Passage</strong> — the event ~34 million years ago that isolated Antarctica and triggered its glaciation</li>
            <li><strong>Close Panama Seaway</strong> — the formation of the Isthmus of Panama ~3 million years ago that strengthened the Gulf Stream</li>
            <li><strong>Melt Greenland</strong> — what happens when freshwater floods the North Atlantic (a scenario we may be heading toward)</li>
            <li><strong>Ice Age</strong> — expanded polar ice sheets and their effect on circulation</li>
          </ul>

          <h2>WebGPU makes it possible</h2>

          <p>
            The physics requires solving a Poisson equation at every timestep — a large linear system
            across 64,800 grid cells. On CPU, this is barely interactive. WebGPU compute shaders make
            it smooth. The entire pipeline — timestep integration, Jacobi iteration for the Poisson
            solver, temperature advection, boundary enforcement — runs on the GPU in parallel.
          </p>

          <p>
            For browsers without WebGPU support, the simulator falls back to a CPU implementation. It&rsquo;s
            slower but still functional. A badge in the corner tells you which backend you&rsquo;re using.
          </p>

          <h2>Temperature and the AMOC</h2>

          <p>
            Beyond the vorticity-driven currents, the simulator includes a temperature field with
            seasonal solar heating and buoyancy coupling. A slider lets you add freshwater forcing to
            the North Atlantic — simulating what happens when ice sheets melt and dilute the salty
            water that normally sinks to drive the Atlantic Meridional Overturning Circulation (AMOC).
          </p>

          <p>
            Push the slider far enough and the AMOC collapses. The warm water that normally flows north
            from the tropics weakens, and the North Atlantic cools. This isn&rsquo;t hypothetical — a{" "}
            <a href="https://www.nature.com/articles/s41467-023-39810-w" target="_blank" rel="noopener noreferrer">
              2023 study in <em>Nature Communications</em>
            </a>{" "}
            by Peter and Susanne Ditlevsen estimates the AMOC will collapse around 2057, with 95%
            confidence the tipping point falls between 2025 and 2095. A more recent{" "}
            <a href="https://www.science.org/doi/10.1126/sciadv.adk1189" target="_blank" rel="noopener noreferrer">
              paper in <em>Science Advances</em>
            </a>{" "}
            found physics-based early warning signals confirming the AMOC is on a tipping course.
          </p>

          <h2>Why build this</h2>

          <p>
            I live in the Netherlands. If the AMOC collapses, the country I live in gets
            colder, stormier, and loses the mild climate that makes it habitable for 17 million people.
            The North Sea rises. Agriculture across Western Europe fails. This isn&rsquo;t a
            distant abstraction for me — it&rsquo;s the most important climate risk to the place I call home.
          </p>

          <p>
            I wanted to understand the physics, not just read about it. Reading that the
            Gulf Stream carries 30 sverdrups of warm water northward is abstract. Watching it form from
            nothing — watching the beta effect pull the flow to the western boundary, watching the
            boundary current intensify as you increase wind stress — makes the physics intuitive in a
            way that equations on a page never can.
          </p>

          <p>
            The simulator started as a collaboration with{" "}
            <a href="https://www.linkedin.com/in/lukebarrington/" target="_blank" rel="noopener noreferrer">
              Luke Barrington
            </a>, director of{" "}
            <a href="https://research.google/blog/google-earth-ai-unlocking-geospatial-insights-with-foundation-models-and-cross-modal-reasoning/" target="_blank" rel="noopener noreferrer">
              Google Earth AI
            </a>, who wanted a tool for
            explaining ocean dynamics to non-specialists. It evolved through four versions — from a
            flat map with a simple two-box model, to a Three.js globe, to real satellite data overlays,
            and finally to the full physics simulation running on WebGPU.
          </p>

          <p>
            The code is all client-side — no server, no API calls. Just HTML, JavaScript, and WGSL
            shaders. You can{" "}
            <a href="https://amoc-sim.vercel.app/v4-physics/" target="_blank" rel="noopener noreferrer">
              try it now
            </a>{" "}
            in any modern browser.
          </p>
        </div>

        {/* Engagement */}
        <footer className="mt-16 border-t border-[var(--border-light)] pt-10 space-y-10">
          <LikeButton slug="simulating-ocean-currents" />
          <ShareButtons
            url="https://dereklomas.me/blog/simulating-ocean-currents"
            title="Simulating Ocean Currents from One Equation"
          />
          <CusdisComments
            pageId="simulating-ocean-currents"
            pageUrl="https://dereklomas.me/blog/simulating-ocean-currents"
            pageTitle="Simulating Ocean Currents from One Equation"
          />
        </footer>
      </article>
    </div>
  );
}
