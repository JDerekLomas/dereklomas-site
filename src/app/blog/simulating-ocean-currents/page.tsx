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
        datePublished="2026-04-24"
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
            24 April 2026 &middot; 8 min read
          </p>
          <figure className="mt-8">
            <a href="https://amoc-pi.vercel.app/simamoc/" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden">
              <Image src="/images/blog/amoc-simulator.png" alt="Ocean Circulation Simulator running in the browser" width={800} height={400} className="w-full hover:opacity-90 transition-opacity" />
            </a>
            <figcaption className="text-center text-sm text-muted mt-3 font-sans">
              The simulator running a global ocean circulation with temperature overlay.{" "}
              <a href="https://amoc-pi.vercel.app/simamoc/" target="_blank" rel="noopener noreferrer" className="text-rust hover:underline">
                Try it live &rarr;
              </a>
            </figcaption>
          </figure>
        </header>

        {/* Body */}
        <div className="prose">
          <h2>What is the AMOC?</h2>

          <p>
            The Atlantic Meridional Overturning Circulation — the AMOC — is one of the most important
            systems on Earth that most people have never heard of. It&rsquo;s a vast conveyor belt of
            ocean currents that carries warm water from the tropics northward through the Atlantic.
            When that water reaches the North Atlantic, it cools, becomes denser, sinks to the deep
            ocean, and flows back south. This circulation is what gives Western Europe its mild climate —
            London sits at the same latitude as Calgary, but rarely sees -30&deg;C winters.
          </p>

          <p>
            The AMOC is weakening. As Greenland&rsquo;s ice sheet melts, freshwater floods the North
            Atlantic and dilutes the salty water that needs to sink. A{" "}
            <a href="https://www.nature.com/articles/s41467-023-39810-w" target="_blank" rel="noopener noreferrer">
              2023 study in <em>Nature Communications</em>
            </a>{" "}
            by Peter and Susanne Ditlevsen estimates the AMOC will collapse around 2057, with 95%
            confidence the tipping point falls between 2025 and 2095. A more recent{" "}
            <a href="https://www.science.org/doi/10.1126/sciadv.adk1189" target="_blank" rel="noopener noreferrer">
              paper in <em>Science Advances</em>
            </a>{" "}
            found physics-based early warning signals confirming the system is on a tipping course.
            If it collapses, Europe gets dramatically colder, sea levels rise along the Atlantic coast,
            monsoon patterns shift, and agriculture across the Northern Hemisphere is disrupted.
          </p>

          <p>
            I live in the Netherlands. This isn&rsquo;t a distant abstraction for me — it&rsquo;s the
            most important climate risk to the place I call home.
          </p>

          <h2>Climate simulations you can&rsquo;t see</h2>

          <p>
            The problem with most climate science is that the simulations are invisible. Researchers
            run massive numerical models on supercomputers, producing terabytes of data that get
            distilled into charts and papers. The underlying physics is beautiful — the interplay of
            wind, rotation, and friction that produces every major ocean current — but you&rsquo;d never
            know it from looking at a time series plot.
          </p>

          <p>
            Reading that the Gulf Stream carries 30 sverdrups of warm water northward is abstract.
            Watching it form from nothing — watching the beta effect pull the flow to the western
            boundary, watching the boundary current intensify as you increase wind stress — makes the
            physics intuitive in a way that equations on a page never can.
          </p>

          <h2>Building it with Claude Code</h2>

          <p>
            In conversation with my friend{" "}
            <a href="https://www.linkedin.com/in/lukebarrington/" target="_blank" rel="noopener noreferrer">
              Luke Barrington
            </a>, director of{" "}
            <a href="https://research.google/blog/google-earth-ai-unlocking-geospatial-insights-with-foundation-models-and-cross-modal-reasoning/" target="_blank" rel="noopener noreferrer">
              Google Earth AI
            </a>, we wanted to see what was possible in a short time with{" "}
            <a href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
              Claude Code
            </a>.
            Could we take the barotropic vorticity equation — the single equation that governs
            large-scale ocean circulation — and make it run interactively in a browser?
          </p>

          <p>
            <a href="https://amoc-pi.vercel.app/simamoc/" target="_blank" rel="noopener noreferrer">
              The result
            </a>{" "}
            is a real-time simulator on a 720&times;320 global grid (0.5&deg; resolution), using WebGPU
            compute shaders for GPU acceleration. It uses real NCEP wind stress data, NOAA observed
            sea surface temperatures, WOA23 salinity, ETOPO1 bathymetry, and MODIS cloud fraction — all
            running on the GPU with cos(latitude) metric corrections for proper spherical geometry.
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
            <a href="https://amoc-pi.vercel.app/simamoc/equation.html" target="_blank" rel="noopener noreferrer">
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
            disrupt the overturning circulation.
          </p>

          <p>
            These aren&rsquo;t canned animations. The physics solver recalculates everything from
            scratch based on the new geometry. You&rsquo;re running actual paleoclimate experiments —
            the same scenarios oceanographers study, just compressed from geological timescales into
            seconds.
          </p>

          <p>
            Preset scenarios recreate key moments in Earth&rsquo;s climate history:
          </p>

          <ul>
            <li><strong>Open Drake Passage</strong> — the event ~34 million years ago that isolated Antarctica and triggered its glaciation</li>
            <li><strong>Close Panama Seaway</strong> — the formation of the Isthmus of Panama ~3 million years ago that strengthened the Gulf Stream</li>
            <li><strong>Melt Greenland</strong> — what happens when freshwater floods the North Atlantic</li>
            <li><strong>Ice Age</strong> — expanded polar ice sheets and their effect on circulation</li>
          </ul>

          <h2>More than one layer</h2>

          <p>
            The barotropic vorticity equation gets you the currents, but the real climate story is
            about heat. After the first version was running, we kept pushing: a two-layer ocean with
            separate surface and deep water, spatially varying bathymetry, land-ocean heat exchange
            at coastlines, latitude-dependent seasonal insolation, outgoing longwave radiation, and
            ice-albedo feedback. The simulator now tracks how ice sheets reflect sunlight, how deep
            water stores and releases heat on longer timescales, and how the radiative balance shifts
            with the seasons.
          </p>

          <p>
            A live radiative balance chart shows the energy budget by latitude — incoming solar versus
            outgoing thermal radiation — so you can see exactly where the planet is gaining or losing
            heat. It&rsquo;s the kind of diagnostic that climate modelers stare at, now running
            interactively in a browser tab.
          </p>

          <h2>WebGPU makes it possible</h2>

          <p>
            All of this physics requires solving a Poisson equation at every timestep — a large linear
            system across 230,400 grid cells — plus temperature advection, salinity transport, Ekman
            wind-driven heat transport, radiative transfer, cloud parameterization, and ice dynamics.
            On CPU, this is barely interactive. WebGPU compute shaders make it smooth, running five
            GPU compute shaders per timestep with Red-Black SOR for the Poisson solve.
          </p>

          <p>
            For browsers without WebGPU support, the simulator falls back to a CPU implementation. It&rsquo;s
            slower but still functional. A badge in the corner tells you which backend you&rsquo;re using.
          </p>

          <h2>Simulating the collapse</h2>

          <p>
            A freshwater forcing slider lets you simulate what happens when ice sheets melt
            and dilute the salty water that drives the AMOC. Push it far enough and the overturning
            collapses. The warm water that normally flows north from the tropics weakens, and the
            North Atlantic cools. With the two-layer ocean and ice-albedo feedback, you can watch
            the cascading effects — surface cooling triggers ice growth, which reflects more sunlight,
            which cools things further.
          </p>

          <p>
            You can watch it happen in real time — the same process that scientists warn could reshape
            the climate of the Northern Hemisphere within our lifetimes.
          </p>

          <h2>AI-driven physics discovery</h2>

          <p>
            The next phase is using AI agents to <em>improve</em> the model&rsquo;s physics. The
            simulator has a programmatic API (<code>lab.diagnostics()</code>, <code>lab.setParams()</code>)
            that lets autonomous agents propose parameter changes, run simulations, and measure
            RMSE against observed satellite data. The best configurations get submitted to a{" "}
            <a href="https://amoc-pi.vercel.app/leaderboard/" target="_blank" rel="noopener noreferrer">
              leaderboard
            </a>{" "}
            where AI and human submissions compete.
          </p>

          <p>
            So far, this approach has driven the temperature RMSE from 4.7&deg;C down to 3.3&deg;C.
            The model now uses variable mixed layer depth (deep in the Southern Ocean, shallow in
            the tropics), observed NCEP wind stress curl with Ekman heat transport, and regime-based
            cloud parameterization — each improvement discovered through automated parameter sweeps
            validated against NOAA and WOA23 observations. An AMOC strength panel compares the
            simulated overturning circulation against the RAPID array at 26.5&deg;N.
          </p>

          <p>
            The code is all client-side — no server, no API calls. Just HTML, JavaScript, and WGSL
            shaders. You can{" "}
            <a href="https://amoc-pi.vercel.app/simamoc/" target="_blank" rel="noopener noreferrer">
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
