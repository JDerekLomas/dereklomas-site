import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";
import ShareButtons from "@/components/ShareButtons";

export const metadata: Metadata = {
  title: "Teaching Biology in 3D: Building Interactive Cell Viewers with Three.js",
  description:
    "I'm building an atlas of interactive 3D cell models — 9 cells so far — where students can rotate, zoom, and click on organelles to learn how they work. The rod photoreceptor even fires photons.",
  openGraph: {
    title: "Teaching Biology in 3D: Interactive Cell Viewers",
    description:
      "9 interactive 3D cell models with clickable organelles and simulated signaling cascades.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function BlenderCellPost() {
  return (
    <div className="min-h-screen py-16 px-6">
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
            Teaching Biology in 3D: Building Interactive Cell Viewers with Three.js
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            An atlas of interactive 3D cell models where students rotate, zoom, and click on organelles to learn how they work. The rod photoreceptor even fires photons.
          </p>
          <p className="font-sans text-sm text-muted">
            2 March 2026 &middot; 8 min read
          </p>
          <div className="mt-8 rounded-lg overflow-hidden">
            <Image src="/images/blog/blendercell.png" alt="CellAtlas interactive 3D cell viewer showing a plasma cell" width={800} height={400} className="w-full" />
          </div>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            Biology textbooks show cells as flat diagrams with labeled arrows. The mitochondria is an
            oblong blob. The endoplasmic reticulum is a stack of wavy lines. The cell membrane is a
            circle. These diagrams are useful abstractions, but they teach students to think of cells as
            two-dimensional &mdash; and cells are not two-dimensional.
          </p>

          <p>
            <a href="https://github.com/JDerekLomas/blendercell" target="_blank" rel="noopener noreferrer">
              CellAtlas
            </a>{" "}
            is an attempt to fix this. I started building it in early December 2025, and three months later
            it&rsquo;s a growing atlas of interactive 3D cell models, viewable
            in any web browser, where students can rotate the cell, zoom into organelles, click on
            structures to learn what they do, and watch biological processes animate in real time. Nine
            cells so far, each built procedurally in Three.js.
          </p>

          <h2>The Cells</h2>

          <p>
            The atlas currently includes: a plasma cell (the antibody factory), a red blood cell, a
            macrophage, a muscle fiber, a neuron, a kinesin motor protein walking along microtubules,
            a keratinocyte (skin cell), a plasmodium (slime mold with procedural growth), and &mdash;
            the newest and most complex &mdash; a rod photoreceptor.
          </p>

          <p>
            Each cell is chosen to teach something different about cellular biology. The plasma cell
            shows how the entire cell reorganizes around a single mission (producing antibodies) &mdash;
            its cytoplasm is dominated by massive rough endoplasmic reticulum. The red blood cell shows
            radical specialization: it ejects its nucleus and organelles to become a pure hemoglobin
            delivery vehicle. The kinesin shows molecular-scale mechanics: a two-legged protein
            literally walking along a microtubule highway, carrying cargo.
          </p>

          <h2>The Pipeline: Procedural Geometry</h2>

          <p>
            Every cell is built procedurally in Three.js &mdash; no imported 3D models. Each organelle is
            constructed from geometric primitives: SphereGeometry for nuclei and vesicles, TorusGeometry
            for the ER, LatheGeometry for membrane-bound structures, InstancedMesh for ribosomes. The
            dimensions are scaled from real electron microscopy data: a nucleus is 5&ndash;10 micrometers
            (radius 2&ndash;4 in the model), mitochondria are 0.5&ndash;1 micrometer, and ribosomes are
            wildly enlarged &mdash; about 100x their real size &mdash; for visibility.
          </p>

          <p>
            The advantage of procedural geometry over imported models is control. Every parameter is
            tunable in code: the number of ER folds, the density of ribosomes on the rough ER, the
            thickness of the nuclear envelope. The plasma cell has real-time sliders for ER folding
            parameters so you can see how the structure changes. You can&rsquo;t do that with a static
            mesh.
          </p>

          <p>
            Everything is translucent by design, so students can see through the cell membrane to the
            organelles inside, and through the mitochondrial outer membrane to the cristae within.
            Interaction comes from Three.js Raycaster for click detection, info panels for each
            structure, and procedural animations for biological processes.
          </p>

          <h2>The Transparency Hierarchy</h2>

          <p>
            Getting transparency right in WebGL is surprisingly hard, and getting it right
            <em>educationally</em> is harder. The system uses a strict opacity hierarchy:
          </p>

          <ul>
            <li>Cell membrane: 10% opacity (barely visible, establishes boundary)</li>
            <li>Nuclear envelope: 50% opacity (see the chromatin inside)</li>
            <li>Organelle membranes: 40&ndash;70% opacity (see internal structure)</li>
            <li>Internal details (cristae, cisternae): 60&ndash;80% opacity (visible through outer membranes)</li>
          </ul>

          <p>
            Every material uses <code>MeshPhysicalMaterial</code> with <code>depthWrite: false</code>{" "}
            and <code>side: DoubleSide</code>. Without <code>depthWrite: false</code>, transparent
            objects occlude each other incorrectly &mdash; you get black patches where two transparent
            surfaces overlap. It&rsquo;s a detail that took hours to get right and is invisible when
            it&rsquo;s working.
          </p>

          <p>
            The color palette is consistent across all cells: membrane in light blue (#a2c2e8), nucleus
            in deep purple (#2E1A47), rough ER in turquoise (#40E0D0), Golgi in gold (#FFD700),
            mitochondria in tomato red (#FF6347). Students who learn the plasma cell immediately
            recognize organelles when they open the macrophage.
          </p>

          <h2>The Rod Photoreceptor: Simulating Vision</h2>

          <p>
            The rod photoreceptor is the most complex viewer and the one I&rsquo;m proudest of. Rods
            are the cells that detect light in your retina &mdash; each one contains about 800 stacked
            membranous discs loaded with rhodopsin, the light-sensitive protein. When a single photon
            hits a rhodopsin molecule, it triggers a biochemical cascade that ultimately changes the
            cell&rsquo;s electrical signal.
          </p>

          <p>
            The viewer simulates the full phototransduction cascade with a three-state state machine:
          </p>

          <p>
            <strong>Dark state:</strong> Ion channels are open. A constant stream of glutamate particles
            (30 instanced amber spheres) falls from the synapse toward the bipolar cell below. This is the
            &ldquo;dark current&rdquo; &mdash; counterintuitively, the rod&rsquo;s default state is
            <em>on</em>, continuously releasing neurotransmitter.
          </p>

          <p>
            <strong>Photon absorption:</strong> Click &ldquo;Fire Photon&rdquo; and a photon mesh descends
            through the outer segment. When it hits a target disc, a visual cascade spreads outward at
            80 discs per second &mdash; disc colors shift from purple to grey as ion channels close. The
            glutamate stream decelerates and fades. The bipolar cell flashes briefly with an emissive
            response. Status indicator switches from amber (&ldquo;Channels open&rdquo;) to blue
            (&ldquo;Channels closing &mdash; Signal reduced&rdquo;).
          </p>

          <p>
            <strong>Recovery:</strong> After two seconds, the dark current gradually resumes. Disc colors
            interpolate back to normal. Glutamate particles reappear and accelerate. The cell resets.
          </p>

          <p>
            The neighboring cells are visible too: the retinal pigment epithelium above (a brown slab
            with melanin granules that recycles the spent rhodopsin), ghost outlines of adjacent rods at
            10% opacity, and the bipolar cell below with its dendrite reaching into the synaptic
            invagination.
          </p>

          <h2>Making the Invisible Clickable</h2>

          <p>
            Most organelles are too small to click on at a realistic scale. Ribosomes are 25 nanometers
            across. Even enlarged 100x, they&rsquo;re tiny targets. The solution: invisible hitbox spheres,
            larger than the visible structure, positioned at the same coordinates. The raycaster detects
            clicks on the hitbox; the info panel references the organelle.
          </p>

          <p>
            Each clickable structure has an educational content entry with a title and a 100&ndash;250 word
            description that explains both structure and function. The plasma cell&rsquo;s rough ER
            entry explains that it &ldquo;dominates the cytoplasm&rdquo; because the cell has repurposed
            itself as an antibody production line. The rod&rsquo;s connecting cilium entry notes the
            &ldquo;9+0 microtubule arrangement&rdquo; and that it&rsquo;s the <em>only</em> connection
            between the inner and outer segments &mdash; a structural bottleneck that shapes the
            cell&rsquo;s entire physiology.
          </p>

          <p>
            A dynamic scale bar at the bottom updates on zoom, showing actual micrometer scale. Students
            can see that the nucleus is 5 micrometers across while a mitochondrion is 0.5 &mdash; the
            spatial relationships that textbook diagrams flatten away.
          </p>

          <h2>Procedural Animations</h2>

          <p>
            Static 3D models are better than flat diagrams, but animated models are better still. The
            atlas uses several procedural animation systems:
          </p>

          <ul>
            <li><strong>Vesicle transport</strong> &mdash; Cargo follows CatmullRomCurve3 paths along microtubule highways (visible in the plasma cell&rsquo;s secretory pathway)</li>
            <li><strong>ER membrane dynamics</strong> &mdash; Layered sine waves create organic folding motion</li>
            <li><strong>Ribosome translation</strong> &mdash; A walking motion with protein chain growth at the exit tunnel</li>
            <li><strong>Glutamate particle system</strong> &mdash; 30 instanced spheres with physics-based falling, state-driven visibility</li>
            <li><strong>Phototransduction cascade</strong> &mdash; Color wave propagation through the disc stack at controlled speed</li>
          </ul>

          <p>
            These aren&rsquo;t just decorative. The vesicle transport animation teaches the secretory
            pathway: protein made in the ER, packaged in the Golgi, transported to the membrane. The
            animation makes the pathway visible as a spatial journey through the cell, not an abstract
            flowchart.
          </p>

          <h2>What I&rsquo;ve Learned</h2>

          <p>
            Building nine cells has taught me that the hard part isn&rsquo;t the geometry or the
            rendering. The hard part is deciding what to show and what to hide. A biologically accurate
            cell model would be an incomprehensible tangle of molecules. An educational model needs
            to show just enough to build the right mental model &mdash; and hide everything else.
          </p>

          <p>
            The transparency hierarchy is the key pedagogical decision. Making the cell membrane nearly
            invisible says: &ldquo;the boundary matters, but look <em>inside</em>.&rdquo; Making
            mitochondrial cristae 80% opaque inside a 40% opaque outer membrane says: &ldquo;there&rsquo;s
            structure within structure.&rdquo; Every opacity value is a teaching choice.
          </p>

          <p>
            The rod photoreceptor taught me something else: students remember processes, not parts. The
            static version of the rod &mdash; here are the discs, here is the synapse &mdash; is
            informative. The animated version &mdash; fire a photon and watch the cascade close ion
            channels and stop glutamate release &mdash; is <em>memorable</em>. The disc stack isn&rsquo;t
            just a structure anymore; it&rsquo;s a machine that does something you can watch.
          </p>

          <p>
            Next cells on the list: a hepatocyte (the liver&rsquo;s chemical factory), a pancreatic beta
            cell (insulin secretion), and an osteoclast (bone resorption). Each one teaches a different
            lesson about how cells specialize.
          </p>

          <h2>How It Was Built</h2>

          <p>
            The project started in December 2025 with a single prompt. Nine sessions and 184 prompts
            later, the atlas has nine cells. Each one was built through Claude Code &mdash; the
            procedural geometry, materials, animations, and interaction design all happen in
            conversation. Here&rsquo;s how it actually went:
          </p>

          <div
            style={{
              background: "var(--bg-dark)",
              color: "#4ade80",
              fontFamily: "var(--font-inter), monospace",
              padding: "1.5em",
              borderRadius: "8px",
              fontSize: "13px",
              lineHeight: "2",
              margin: "2em 0",
            }}
          >
            <span style={{ color: "#78716c" }}># Dec 4, 2025 — the first cell</span><br />
            &gt; can you make a new github repo for plasmacell?<br />
            <br />
            <span style={{ color: "#78716c" }}># Dec 5 — fighting the ER</span><br />
            &gt; the ER shapes need lots of folds and convolutions, you know?<br />
            &gt; now add internal structure to mitochondria and nucleus and<br />
            &gt; make their membrane 50% opaque. default cell membrane opacity<br />
            &gt; 10% and ER 20%<br />
            <br />
            <span style={{ color: "#78716c" }}># Dec 7 — six cells in a weekend</span><br />
            &gt; red blood cell<br />
            &gt; macrophage<br />
            &gt; make the neuron<br />
            &gt; ok, then make a skin cell?<br />
            <br />
            <span style={{ color: "#78716c" }}># Dec 8 — refactoring for reuse</span><br />
            &gt; make a common set of organelles that can be used across cells,<br />
            &gt; with the plasma cell as base. like refactor everything<br />
            <br />
            <span style={{ color: "#78716c" }}># Jan 1, 2026 — the slime mold</span><br />
            &gt; make it branch-like and pulsing like cytoplasmic streaming<br />
            &gt; ditch the green outer shell, make the whole thing more like a<br />
            &gt; tree branching, L-systems styled structure in yellow on black<br />
            <br />
            <span style={{ color: "#78716c" }}># Feb 28 — the rod cell</span><br />
            &gt; let&rsquo;s do the rod cell<br />
            &gt; it is very dark. I don&rsquo;t see membrane or context.<br />
            &gt; nothing happens when I click fire photon<br />
            <br />
            <span style={{ color: "#78716c" }}># Mar 2 — getting the biology right</span><br />
            &gt; I feel like it should be clear that it maximally fires in the<br />
            &gt; dark (right?) and that light inhibits firing<br />
            &gt; the firephoton button and auto firing doesn&rsquo;t work for me<br />
            &gt; still not giving me the contrast I need... looks so dark
          </div>

          <p>
            The pattern is the same across all nine cells: describe what you want, deploy, look at
            it, say what&rsquo;s wrong, iterate. The persistent complaints are always about visibility
            (&ldquo;it is very dark&rdquo;), biological accuracy (&ldquo;are the sizes proportional to
            real sizes?&rdquo;), and interactivity (&ldquo;nothing happens when I click&rdquo;). The
            &ldquo;maximally fires in the dark&rdquo; prompt is where the rod cell&rsquo;s three-state
            state machine originated &mdash; getting the counterintuitive biology right required going
            back and forth between the code and the neuroscience until the simulation matched reality.
          </p>

          <p>
            The atlas is live and open source at{" "}
            <a href="https://github.com/JDerekLomas/blendercell" target="_blank" rel="noopener noreferrer">
              github.com/JDerekLomas/blendercell
            </a>
            .
          </p>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5em" }}>
          <LikeButton slug="teaching-biology-in-3d" />
          <ShareButtons
            url="https://dereklomas.me/blog/teaching-biology-in-3d"
            title="Teaching Biology in 3D: Building Interactive Cell Viewers with Three.js"
          />
        </div>

        <CusdisComments
          pageId="teaching-biology-in-3d"
          pageUrl="https://dereklomas.me/blog/teaching-biology-in-3d"
          pageTitle="Teaching Biology in 3D: Interactive Cell Viewers"
        />
      </article>
    </div>
  );
}
