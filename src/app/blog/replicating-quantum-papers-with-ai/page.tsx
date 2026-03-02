import type { Metadata } from "next";
import Link from "next/link";
import LikeButton from "@/components/LikeButton";
import CusdisComments from "@/components/CusdisComments";

export const metadata: Metadata = {
  title: "I Replicated 6 Quantum Computing Papers on 3 Platforms. Here's What Broke.",
  description:
    "An AI agent autonomously ran 105+ experiments across IBM, Quantum Inspire, and IQM hardware. 93% of published claims held up. The failures were more interesting than the successes.",
  openGraph: {
    title: "I Replicated 6 Quantum Computing Papers on 3 Platforms",
    description:
      "105+ experiments, 3 hardware backends, 27 claims tested. 93% replicated successfully.",
    type: "article",
    authors: ["Derek Lomas"],
  },
};

export default function QuantumPost() {
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
          <p className="label mb-4">Research</p>
          <h1 className="font-display text-3xl md:text-[42px] md:leading-[1.15] font-medium text-primary mb-6">
            I Replicated 6 Quantum Computing Papers on 3 Platforms. Here&rsquo;s What Broke.
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-4">
            An AI agent autonomously ran 105+ experiments across IBM, Quantum Inspire, and IQM hardware. The failures were more interesting than the successes.
          </p>
          <p className="font-sans text-sm text-muted">
            24 February 2026 &middot; 14 min read
          </p>
        </header>

        {/* Body */}
        <div className="prose">
          <p>
            The question was simple: <em>how might AI accelerate quantum computing research?</em>
          </p>

          <p>
            Not AI for quantum algorithms or quantum for AI. The more practical question: could an AI
            agent &mdash; specifically Claude Code with access to quantum hardware via MCP tooling &mdash;
            autonomously replicate published experiments, benchmark hardware, and generate insights a human
            researcher would find useful?
          </p>

          <p>
            Over the past two weeks, working at TU Delft with{" "}
            <a href="https://www.quantum-inspire.com/" target="_blank" rel="noopener noreferrer">Quantum Inspire</a>,
            I ran this experiment. Starting February 9th, the agent replicated six papers spanning 2014&ndash;2023, tested 27 quantitative
            claims across four hardware backends, and ran 105+ individual experiments. The results are live at{" "}
            <a href="https://quantuminspire.vercel.app" target="_blank" rel="noopener noreferrer">quantuminspire.vercel.app</a>.
          </p>

          <p>
            The headline: <strong>93% of published claims replicated successfully.</strong> But the two failures, and
            the mistakes the agent made along the way, taught me more than the successes.
          </p>

          <h2>The Protocol</h2>

          <p>
            For each paper, the agent followed the same steps:
          </p>

          <ol style={{ textIndent: 0, textAlign: "left", paddingLeft: "1.25em", lineHeight: "1.8" }}>
            <li>Extract testable quantitative claims from the paper</li>
            <li>Implement circuits from the paper&rsquo;s description (not from source code)</li>
            <li>Verify on an emulator (establish physics baseline)</li>
            <li>Run on all available hardware backends</li>
            <li>Apply error mitigation techniques</li>
            <li>Compare measured vs. published results</li>
            <li>Classify as pass or fail, with failure mode analysis</li>
          </ol>

          <p>
            The six papers: Peruzzo et al. 2014 (VQE on HeH+), Kandala et al. 2017 (hardware-efficient VQE),
            Cross et al. 2019 (quantum volume), Sagastizabal et al. 2019 (VQE with error mitigation),
            Harrigan et al. 2021 (QAOA MaxCut), and Kim et al. 2023 (utility-scale circuits).
          </p>

          <p>
            Hardware: IBM Torino (133 qubits), Quantum Inspire&rsquo;s Tuna-9 (9 qubits), and IQM Garnet
            (20 qubits). Plus a noiseless emulator as ground truth.
          </p>

          <h2>The Flagship Result: Chemical Accuracy on Real Hardware</h2>

          <p>
            The most exciting result came from VQE (Variational Quantum Eigensolver) calculations on the
            hydrogen molecule. VQE uses a quantum computer to find the ground-state energy of a
            molecule &mdash; the quantum chemistry &ldquo;hello world.&rdquo;
          </p>

          <p>
            The benchmark for success is <strong>chemical accuracy</strong>: getting within 1.6 milliHartree
            (about 1 kcal/mol) of the exact answer. Below this threshold, the quantum result is useful
            for actual chemistry.
          </p>

          <p>
            On IBM Torino with TREX (Twirled Readout Error Extinction) mitigation:{" "}
            <strong>0.22 kcal/mol</strong>. That&rsquo;s a 119x improvement over the raw hardware error of
            26.2 kcal/mol, and it clears the chemical accuracy threshold by a wide margin.
          </p>

          <p>
            On Quantum Inspire&rsquo;s Tuna-9 with a hybrid post-selection + readout error mitigation
            strategy: <strong>0.92 kcal/mol</strong>. Also chemical accuracy, on a 9-qubit academic platform.
          </p>

          <h2>Why HeH+ Fails but H2 Succeeds</h2>

          <p>
            Here&rsquo;s where it gets interesting. HeH+ (helium hydride) uses the exact same circuit
            structure as H2. Same number of qubits, same gates, same hardware. But the best result on
            HeH+ was 4.31 kcal/mol &mdash; not even close to chemical accuracy.
          </p>

          <p>
            The agent eventually identified why: <strong>coefficient amplification</strong>. In the
            Hamiltonian decomposition, each molecule has coefficients that weight different measurement
            bases. For H2, the ratio of the Z-basis coefficient to the X/Y-basis coefficient is 4.4.
            For HeH+, it&rsquo;s 23.6 &mdash; 5.4x larger.
          </p>

          <p>
            This matters because hardware readout errors are concentrated in the Z-basis. A molecule
            with a large Z-coefficient amplifies those errors. The relationship is superlinear:
            a 1.8x increase in the coefficient ratio produces a 20x increase in energy error.
            Approximately ratio to the fifth power.
          </p>

          <p>
            The practical threshold for chemical accuracy: a coefficient ratio below about 5. Above that,
            you need progressively more expensive mitigation techniques. This gives experimentalists a way
            to <em>predict</em> whether a VQE calculation will succeed on a given hardware platform before
            running it &mdash; saving expensive QPU time.
          </p>

          <h2>More Mitigation Is Not Better</h2>

          <p>
            One of the most counterintuitive findings: stacking error mitigation techniques often makes
            results <em>worse</em>. The agent systematically tested 8 mitigation configurations on H2:
          </p>

          <ul>
            <li><strong>TREX alone: 0.22 kcal/mol</strong> (best)</li>
            <li>TREX + dynamical decoupling: 1.33 kcal/mol</li>
            <li>Post-selection (free, offline): 1.66 kcal/mol</li>
            <li>TREX + dynamical decoupling + twirling: 10.0 kcal/mol (44x worse than TREX alone)</li>
            <li>ZNE (zero-noise extrapolation), linear: 12.84 kcal/mol</li>
            <li>Raw, no mitigation: 26.2 kcal/mol</li>
            <li>ZNE, exponential: NaN (complete failure)</li>
          </ul>

          <p>
            Adding twirling to TREX made things 44x worse. ZNE was counterproductive. More shots
            didn&rsquo;t help (16K shots with TREX: 3.77 kcal/mol vs. 4K shots: 0.22 kcal/mol).
          </p>

          <p>
            The explanation is circuit depth. For a shallow circuit (H2 VQE has just one CZ gate after
            transpilation), readout error dominates &mdash; over 80% of the total error budget. TREX
            targets readout error specifically. ZNE amplifies <em>gate noise</em>, which isn&rsquo;t the
            bottleneck. Twirling randomizes the correlations that TREX exploits.
          </p>

          <p>
            The rule of thumb the agent derived: <strong>readout mitigation for shallow circuits,
            gate-noise mitigation for deep circuits.</strong> The Kim et al. 2023 replication confirmed
            this &mdash; for kicked Ising circuits with 100 CZ gates, ZNE provided a 2.3x improvement
            while TREX was marginal (1.3x).
          </p>

          <h2>What the Agent Got Wrong</h2>

          <p>
            The agent made real mistakes, and because the full transcript was logged, every error is
            traceable. The most instructive:
          </p>

          <p>
            <strong>Coefficient conventions.</strong> The agent initially used Bravyi-Kitaev tapered
            coefficients instead of sector-projected ones. This produced wrong energies for weeks.
            The agent eventually self-corrected by computing reference values from scratch with PySCF &mdash;
            but weeks of results had to be reanalyzed.
          </p>

          <p>
            <strong>Incomplete analysis.</strong> The agent reported the H2 IBM error as 9.2 kcal/mol for
            weeks. The stored analysis was incomplete &mdash; it had missed post-selection. Offline reanalysis
            of the same raw data revealed the true error was 1.66 kcal/mol. The data was much better
            than reported. The stored analysis, not the measured data, was the error.
          </p>

          <p>
            <strong>Bitstring ordering.</strong> IBM uses MSB-first; Tuna-9 uses LSB-first. The agent&rsquo;s
            initial Tuna-9 results were nonsensical until canonical bitstring ordering was established.
          </p>

          <p>
            These are the same mistakes human researchers make. The difference: every step is logged,
            so catching and correcting them is much faster.
          </p>

          <h2>Can LLMs Write Quantum Code?</h2>

          <p>
            As a side investigation, the agent benchmarked LLM quantum code generation against
            Qiskit HumanEval &mdash; 151 quantum programming tasks at three difficulty levels.
          </p>

          <p>
            Claude Opus and Gemini 3 Flash both scored about 63% zero-shot. With dynamic per-task RAG
            (retrieving relevant Qiskit documentation for each specific problem), both improved to about
            71%. A three-run ensemble (majority vote) reached 71.5%, and a union strategy
            (any run passes) hit 79.5%.
          </p>

          <p>
            The ceiling is real: 31 tasks (20.5%) remained unsolved across all strategies. Of the failures,
            41% were logic errors &mdash; reasoning mistakes, not documentation gaps. RAG helps with API
            staleness but can&rsquo;t fix bad reasoning.
          </p>

          <h2>What This Cost</h2>

          <p>
            The total compute cost for the entire project: about <strong>$15</strong>. All quantum hardware
            access was free tier (IBM: 10 min/month, IQM: 30 credits/month, Tuna-9: unlimited academic
            access). The cost was almost entirely AI API calls.
          </p>

          <p>
            The agent ran 105+ experiments across four backends, submitted 250,000+ measurement shots,
            and operated autonomously for 4&ndash;6 hour stretches &mdash; submitting jobs, waiting for results,
            analyzing, and queuing next experiments.
          </p>

          <p>
            Total QPU time consumed: less than 10 minutes.
          </p>

          <h2>What I Actually Learned</h2>

          <p>
            The agent did competent lab work, not novel research. It started from zero quantum
            knowledge and, through systematic experimentation, discovered the full topology of a
            previously undocumented 9-qubit processor in 33 jobs. It found the coefficient amplification
            framework. It produced a comprehensive error mitigation ranking that would save any
            experimentalist days of trial and error.
          </p>

          <p>
            But it didn&rsquo;t have physical intuition. It couldn&rsquo;t predict that calibration drift
            would invalidate pre-computed VQE parameters within hours. It couldn&rsquo;t tell you
            <em>why</em> TREX works better than ZNE for shallow circuits without being prompted to analyze
            the error budget. It was a tireless, precise lab technician, not a physicist.
          </p>

          <p>
            For quantum computing in 2026, that&rsquo;s actually exactly what&rsquo;s needed. The
            bottleneck isn&rsquo;t theoretical insight &mdash; it&rsquo;s systematic characterization,
            cross-platform comparison, and honest failure analysis. An agent that can run 100 experiments
            overnight and produce a structured report by morning is genuinely useful.
          </p>

          <h2>How It Was Built</h2>

          <p>
            The entire project was built through Claude Code sessions, with the agent doing the
            quantum computing while I steered. The prompts tell the story:
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
            <span style={{ color: "#78716c" }}># February 9 — starting from zero</span><br />
            &gt; Can you use a quantum computer to do basic operations like addition?<br />
            <br />
            <span style={{ color: "#78716c" }}># February 12 — scaling up</span><br />
            &gt; apply the error mitigation across all 7 bond distances<br />
            &gt; do all of them<br />
            <br />
            <span style={{ color: "#78716c" }}># February 20 — reality check</span><br />
            &gt; Any of this publishable?
          </div>

          <p>
            That &ldquo;do all of them&rdquo; prompt is representative of the workflow. I&rsquo;d
            identify an experiment category, the agent would run one instance, and I&rsquo;d tell it
            to sweep the full parameter space. Most of the 105 experiments were launched this way
            &mdash; one prompt generating a dozen hardware jobs.
          </p>

          <p>
            The full results, including interactive experiment dashboards, are at{" "}
            <a href="https://quantuminspire.vercel.app" target="_blank" rel="noopener noreferrer">
              quantuminspire.vercel.app
            </a>
            . The replication reports, raw data, and agent transcripts are on{" "}
            <a href="https://github.com/JDerekLomas/quantuminspire" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>

        {/* Engagement */}
        <div style={{ marginTop: "3em", display: "flex", flexDirection: "column", alignItems: "center", gap: "1em" }}>
          <LikeButton slug="replicating-quantum-papers-with-ai" />
        </div>

        <CusdisComments
          pageId="replicating-quantum-papers-with-ai"
          pageUrl="https://derek-lomas.com/blog/replicating-quantum-papers-with-ai"
          pageTitle="I Replicated 6 Quantum Computing Papers on 3 Platforms"
        />
      </article>
    </div>
  );
}
