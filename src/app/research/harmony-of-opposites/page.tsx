import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Harmony of Opposites in Design and Philosophy",
  description:
    "This chapter explores the paradoxical concept of the harmony of opposites, drawing insights from classical Chinese and Greek philosophy, music theory, and contemporary design practice.",
  authors: [{ name: "James Derek Lomas" }, { name: "Haian Xue" }],
  openGraph: {
    title: "The Harmony of Opposites in Design and Philosophy",
    description:
      "Exploring how opposition and conflict can serve as generative forces for harmony in design.",
    type: "article",
    authors: ["James Derek Lomas", "Haian Xue"],
  },
};

export default function HarmonyOfOppositesPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      {/* Article header - full width centered */}
      <header className="max-w-3xl mx-auto mb-12 text-center">
        <p className="font-[family-name:var(--font-inter)] text-xs font-medium tracking-widest uppercase text-[var(--text-muted)] mb-4">
          Chapter in Book
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-[42px] md:leading-[1.15] font-medium text-[var(--text-primary)] mb-6">
          The Harmony of Opposites in Design and Philosophy
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-2">
          James Derek Lomas<sup>*</sup> &amp; Haian Xue
        </p>
        <p className="font-[family-name:var(--font-inter)] text-sm text-[var(--text-muted)] mb-6">
          <sup>*</sup>Corresponding author &middot; Human Technology Relations, TU Delft
        </p>
        <div className="inline-block bg-[var(--bg-warm)] rounded-lg px-6 py-4 text-left text-sm text-[var(--text-secondary)]">
          <p className="mb-1">
            <span className="font-medium text-[var(--text-primary)]">In:</span>{" "}
            <em>Considering, Questioning and Re-Imagining Harmony: Multicultural, Multihistorical and Multidisciplinary Reflections</em>
          </p>
          <p className="mb-1">
            <span className="font-medium text-[var(--text-primary)]">Editors:</span>{" "}
            Karyn Lai, Rick Benitez, Chen Yangli
          </p>
          <p className="mb-1">
            <span className="font-medium text-[var(--text-primary)]">Publisher:</span>{" "}
            Bloomsbury Publishing, 2025 &middot; Chapter 10, pp. 211&ndash;236
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            ISBN: 978-1-350-45321-0 (Print) &middot; 978-1-350-45322-7 (Electronic)
          </p>
        </div>
        {/* Download PDF - prominent in header */}
        <a
          href="/papers/harmony-of-opposites.pdf"
          className="btn-primary gap-2 no-underline mt-6"
          download
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2v8m0 0l-3-3m3 3l3-3M3 12h10" />
          </svg>
          Download PDF
        </a>
      </header>

      {/* Article body */}
      <article className="max-w-2xl mx-auto academic-article">
        {/* Abstract */}
        <section className="mb-10">
          <div className="border-t border-b border-[var(--border-light)] py-6">
            <h2 className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-widest uppercase text-[var(--text-muted)] mb-3">
              Abstract
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              In an era marked by increasing polarisation and conflict, the philosophical concept of harmony
              seems to offer guidance for designing a more positive future. Building upon our previous review
              (Lomas and Xue, 2022) of the role of harmony in design, this chapter explores the seemingly
              paradoxical concept of the &ldquo;harmony of opposites.&rdquo; In our investigations of the ancient idea that
              opposites can create harmony, like Yin and Yang, we hope to draw meaningful insights that
              contribute to design theory and practice in the field of Human-Centered Design. How might
              opposition in ideas serve as a generative force for design innovation?
            </p>
          </div>
        </section>

        {/* Main body */}
        <div className="text-[17px] leading-[1.8] text-[var(--text-secondary)]">
          {/* I. CONCEPTIONS OF HARMONY */}
          <SectionHeading number="I" title="Conceptions of Harmony: Pop Culture to Classical Philosophy" />

          <p>
            The concept of harmony is found in the wisdom traditions of many societies. Typically, these
            philosophical conceptions of harmony can be contrasted with a more common but naive perspective
            that treats harmony as perfect agreement. The problem with this naive perspective is that, if
            harmony requires perfect agreement, then it necessarily leads to a kind of totalizing uniformity
            (Li &amp; D&uuml;ring, 2022:3).
          </p>
          <p>
            To illustrate how common it is for harmony to be viewed as uniformity or perfection, we
            lightly note that conceptions of the nature of harmony serve as the primary narrative theme in
            several pop culture films. In <em>Myth: A Frozen Tale</em> (2019), harmony is presented as the esoteric
            underpinning of the <em>Frozen</em> universe. Then, in <em>Trolls World Tour</em> (2020), the music-loving
            protagonists reject the naive conception of harmony, saying &lsquo;A world where everyone looks the
            same and sounds the same? That&rsquo;s not harmony.&rsquo; This rejection of a naive view of
            harmony-as-sameness is not new. In fact, the philosopher Confucius addressed it as early as the
            sixth century BCE. He explains that &lsquo;[the virtuous person] harmonises but does not seek sameness,
            whereas the petty person seeks sameness but does not harmonise&rsquo; (Li, 2006:586).
          </p>
          <p>
            Many other classical philosophers in ancient China and ancient Greece also articulated the
            key role of variation, difference, opposition, and even conflict in harmony. For instance, the 6th
            century BCE Greek philosopher Heraclitus emphasised the creative or generative potential of the
            harmony of opposites. His perspective was that &lsquo;things are brought into harmony by the clash of
            opposing currents&rsquo; and that &lsquo;all things come into being by conflict of opposites, and the sum of
            things flows like a stream&rsquo; (Diogenes Laertius, 1925:414). How can a clash of opposition bring
            things into harmony? And, why might the conflict of opposites generate all things, as a flowing
            whole? An example of this can be found in the flow of a conversation: different perspectives in
            communication can generate insights neither party had initially. From this perspective, harmony is
            not a perfect state of agreement but rather a flowing process that unfolds over time, creating greater
            integration and wholeness. Indeed, the tension between different perspectives produces a flow of
            energy that can create harmony. This idea echoes similar Chinese ideas, such as in chapter 42 of the{" "}
            <em>Dao de Jing</em> where the opposites Yin and Yang flow and blend together create harmony and
            wholeness, even as the Yin and Yang remain independent. &lsquo;All Things carry Yin and hold to Yang;
            Their blended influence brings Harmony&rsquo; (Lee et al, 2009:68).
          </p>
          <p>
            To better understand the dynamics of how opposites can generate harmony, we can look to
            the Chinese philosopher Yanzi (fl. 500 BCE). He uses music as an example of harmony and
            presents a series of ten musical opposites including &lsquo;short and long, quick and slow, sad and merry&rsquo;
            etc. Yanzi then claims that each opposite complements the other; when brought together, they make
            up for their individual deficiencies. Importantly, the differences between each opposite remain, for
            the harmony in a song occurs through the very nature of their differences. In this manner, opposites
            produce harmony through complementarity. In contrast, pure agreement is undesirable. Yanzi
            argues that, if a ruler says something wrong, a good minister will point this out and complement
            the ruler&rsquo;s deficiencies. If a minister merely echoes his ruler in perfect agreement, this cannot be
            harmony, for, &lsquo;If you have musical instruments just play a single note, who would want to listen to
            it? That is how I demonstrate that it is wrong to just agree&rsquo; (Milburn, 2015:373-375).
          </p>
          <p>
            This idea of music as a model for harmony is also found in the classical Greek philosophy of
            the Pythagoreans. The fifth century BCE philosopher Philolaus reflected on the harmony of
            opposites in both the material cosmos and within music: &lsquo;music is the combination of opposites, a
            unification of many things, and the agreement of the disagreeing&rsquo; (Philolaus B 10 DK, in Huffman,
            1993:132-133). In a harmonisation process, diverse elements are integrated into a whole system that
            is somehow more beautiful, more functional or more excellent than the elements alone. For
            instance, consider a jazz ensemble: the interplay between the steady rhythm of the drums, the
            harmonic foundation of the piano, and the melodic improvisation of a saxophone can create a
            cohesive musical experience. Each instrument maintains its unique voice, yet together they create
            something more compelling than any could achieve alone.
          </p>
          <p>
            In summary, we see that classical philosophical perspectives often portray harmony as
            emerging from the interplay of differences. These classical perspectives do not present harmony as
            sameness, uniformity or perfect agreement. Instead, differences are essential for creating harmony
            and wholeness. Harmonisation requires the existence of opposing forces as a basis to harmonise.
            For if everything was the same, how could it be harmonised?
          </p>

          {/* II. MUSIC AS A MODEL */}
          <SectionHeading number="II" title="Music as a Model for Harmonization" />

          <p>
            Music has long served as a powerful model for understanding the broader concept of harmony. In
            this section, we wish to address some misconceptions about musical harmony in order to shed light
            on the role of harmony in design. One misconception is that harmony is only a static state rather
            than a dynamic process unfolding over time. This misconception can occur from the widespread use
            of the word harmony in music theory to only refer to the simultaneous sounding of notes in chords.
            However, modern theories of musical harmony specifically explain how musical harmony unfolds
            over time &ldquo;to produce a pleasing effect greater than the sum of its parts&rdquo; (Chan et al, 2019:1). This
            broader understanding of harmony in music refers to the theoretical principles explaining how
            diverse sonic elements can be pleasingly integrated into a whole or unified musical experience (e.g.,
            a song). Principles of harmony can be mathematical, psychophysical, cultural or otherwise, yet in
            every case, they explain how the parts of music effectively integrate together into whole musical
            experiences. In other words, musical harmony explains how distinct sounds become whole songs.
          </p>
          <p>
            This broader perspective on musical harmony can be especially valuable as a model for
            design because it offers examples for understanding the role of imperfections and dissonance in
            harmony. Another misconception is that dissonance is incompatible with harmony. In fact,
            dissonance often helps create greater harmonies by introducing the tensions necessary for musical
            resolution. These tensions motivate musical changes or movement within a song that lead towards
            resolution. The tension of dissonance actually serves as a foundation for harmonisation, which is
            the creation of wholeness. Nearly all melodies use dissonance to create cycles of tension and release
            to create greater musical wholeness (for discussion of this complexity and a range of other
            opposites in contemporary music theory, see Parncutt &amp; Hair, 2011:159-161).
          </p>
          <p>
            Storytelling serves as a clear example. All non-trivial stories have some kind of conflict or
            tension (Gottschall, 2012: 54). Stories are made whole because they have problems or tensions that
            motivate resolution through the completion of the story. Similarly, musical tensions and their
            resolution also creates a sort of narrative wholeness in music, as well. The harmony of a piece of
            music does not occur only in individual chords nor just in the final cadence of a song; rather,
            musical harmonisation is a process that binds together individual elements into a whole musical
            experience.
          </p>
          <p>
            Consider the example of a punk rock song that is filled with clashing dissonances and
            imperfections. These songs are clearly not &ldquo;harmonious&rdquo; as the term is commonly understood.
            Nevertheless, these songs have a clear wholeness as an experience. In fact, the characteristic
            imperfections of musical performances are often precisely what makes the songs distinct and
            memorable. These imperfections seem to play an important role in creating emotional resonance
            (Lomas et al, 2022: 10) with an audience. Imperfections give music &ldquo;soul&rdquo; (here we refer to the
            common usage of soul in the arts, not the more controversial metaphysical entity). Indeed,
            characteristic imperfections tend to be lacking in so-called soulless music (Joosten, 2023). For
            instance, corporate &ldquo;elevator music&rdquo; or certain AI-generated music may be harmonious yet lack the
            peculiarity of character necessary to create an emotionally resonant experience.
          </p>
          <p>
            Digital rhythm production provides an excellent example of the importance of imperfections
            in emotional resonance. Computer-generated drum tracks are so precise in their rhythm that they are
            perceived to lack &ldquo;groove,&rdquo; which is formally defined as the sensation of &ldquo;wanting to move&rdquo; (Davies
            et al, 2012: 1). To make music feel more soulful and resonant, producers &ldquo;humanise&rdquo; drum tracks
            using small imperfections in timing (Max Planck Institute for Dynamics and Self-Organization,
            2024). Similarly, researchers have found that a small degree of dissonance in piano chords tends to
            be preferred over exact tuning (Lahdelma and Tuomas, 2016). These examples show how
            dissonance and imperfections can actually contribute to the overall harmony and distinctive
            wholeness of a piece of music.
          </p>
          <p>
            Musical experiences can help frame the value of tension and conflict in harmonisation
            processes in other domains, from product design to the development of interpersonal relationships
            or even in the formation of individual conscious experience. In each case, harmonisation can be
            understood as the creative process of integrating diverse parts into a more functional or pleasing
            whole. From this perspective, the practice of design can be understood as harmonisation, or the
            creation of new functional <em>wholes</em>.
          </p>

          {/* III. DESIGN AS HARMONIZATION */}
          <SectionHeading number="III" title="Design as Harmonization" />

          <p>
            An excellent example of design as harmonisation is the fish-rice farming system. This system
            integrates seemingly unrelated or even opposing elements (e.g., rice plants, water, fish, and their
            waste) to create a more productive and sustainable whole. A fish-rice farming system leverages the
            differences between its components to enhance overall productivity. The fish benefit from the shade
            and water filtration provided by the rice, while the rice benefits from the fertilisation and pest
            control provided by the fish. Due to this harmonious interaction, fish-rice farms need much less
            fertiliser and pesticide to achieve the same level of productivity as a monocultural rice farm (Xie et
            al, 2011). When all components of a system are designed to harmonise together in synergy, there
            will be maximal positive effect and minimal waste, demonstrating how harmonious integration can
            significantly enhance efficiency and sustainability.
          </p>
          <p>
            Designing refers to the intentional shaping of forms to serve specific functions. This human
            activity spans from ancient tasks like making a fire to advanced activities like designing microchips.
            The outcome of designing is a design&mdash;a form with a function. The many designs in nature, of
            course, have evolved without an intentional designer. Natural designs are forms that have evolved to
            serve specific functions. For instance, the human hand: its arrangement of opposing bones and
            muscles creates a harmonious form that is functionally capable of powerful grips and delicate
            manipulations.
          </p>
          <p>
            Whether natural or intentional, all designs are defined by their functional wholeness. These
            functions result from the integration of differentiated parts. For example, a zipper&rsquo;s function results
            from the integration of two rows of interlocking teeth, a slider, a pull tab, etc. When integrated,
            these parts create a new function that none of the parts can achieve alone. This example points to
            the necessity of both differentiation and integration in creating new functional wholes: if harmony is
            wholeness, it is not achieved merely by integration but also differentiation.
          </p>
          <p>
            Functions are not possible unless the parts of a design are well-fitted together. Not all
            designs &ldquo;hold together&rdquo; mechanically, aesthetically, conceptually or otherwise. Some designs seem
            to exhibit greater harmony&mdash;and this is reflected in their function. In so far as harmony results from
            the integration of parts into a more functional whole, the overall harmony of a design results from
            both internal and external integration. That is, the quality of a design is based on the integration of
            internal parts but also upon the integration of the design into a broader functional system. For
            instance, the different parts of a bicycle must be well-integrated mechanically; yet, a bicycle can
            only effectively function when it is well-integrated into the broader transportation infrastructure of a
            city. For instance, an otherwise excellent bicycle may lack harmony in a car-focused city that is
            lacking bicycle lanes.
          </p>
          <p>
            So far we have been discussing harmony as an abstract concept in design. However, there is
            also a distinct experience of harmony as a quality; humans can qualitatively feel harmony. For
            instance, a well-designed building often creates the experience of harmony. This feeling or
            experience of harmony is essential to practical design work.
          </p>
          <p>
            Acclaimed architect Christopher Alexander describes his work directly in terms of harmony:
            &lsquo;As architects, builders, and artists, we are called upon constantly&mdash;every moment of the working
            day&mdash;to make judgments about relative harmony. We are constantly trying to make decisions about
            what is better and what is worse&rsquo; (Alexander, 2002:17). A designer&rsquo;s internal sense of harmony may
            be implicit, yet it leads to products, services, and systems that are visually pleasing, functionally
            integrated, and enriching. In this manner, a designer with a strong sense of harmony can create
            designs that also convey the experience of harmony to others.
          </p>
          <p>
            Designers often seek designs that create the feeling of harmony in interaction with the
            broader world. As observed by design anthropologist Fulton Suri, designers are often &lsquo;excited by
            the opportunity to create new objects that live in more intentional harmony with their surroundings&rsquo;
            (Fulton Suri, 2011:20). When interacting with such a design, individuals often notice a profound
            sense of &ldquo;rightness&rdquo;&mdash;an alignment that goes beyond the functionality and touches the emotional
            and spiritual dimensions of human experience. This perception may spark feelings of
            connectedness, awe, and admiration towards the creator behind the design. In this way, the
            experience of harmony can transform an ordinary encounter with an object or an environment into a
            deeply moving and inspirational journey.
          </p>
          <p>
            Synthesising these perspectives, we consider designing as a human creative effort aimed at
            harmonising the aesthetic, functional, meaningful, and emotional dimensions of our world. In their
            harmonising process, designers engage in a deliberate and thoughtful process of balancing and
            synergizing the interactions of diverse elements. In doing so, design activities become a medium
            through which we can realise our innate desire for harmony, within the system we create, with one
            another, and with the natural world. From our perspective, to design is to harmonise.
          </p>

          {/* IV. DESIGN THINKING IN OPPOSITES */}
          <SectionHeading number="IV" title="Design Thinking in Opposites" />

          <p>
            Having established the key role of harmonisation in design, now we wish to demonstrate the
            importance of opposites and opposition in design processes. Designers need to deal with opposition,
            conflict and tensions to generate desirable design outcomes (i.e., functional designs with internal
            and external harmony). Below, we share an examination of opposites in design processes and
            &ldquo;design thinking&rdquo; (Dam and Teo, 2002). This examination is based on our own personal experiences
            teaching design at the Faculty of Industrial Design Engineering at Delft University of Technology in
            The Netherlands. In our work, we often use opposites to broaden student thinking in their search for
            wholeness and harmony. These opposites are shared here as indicative of a broader set of
            &lsquo;designerly ways of knowing&rsquo; (Cross, 1982:221) that involve thinking in opposites.
          </p>
          <p>
            Opposites are pervasive in reasoning; opposites may even be &lsquo;an organizing principle in the
            human mind&rsquo; (Branchini et al, 2021:1). One role for opposition and opposites in design is the
            &ldquo;bisociation&rdquo; mechanism of creativity, which involves the combination of two divergent ideas to
            create a new concept (Koestler 1981, 2). Opposites can also be used to explore the space of possible
            variations for a particular design or the &ldquo;design space&rdquo; (Lomas et al, 2021:1). For instance, there is
            evidence that deliberately prompting people to &ldquo;think in opposites&rdquo; can help improve creative
            problem solving by helping people break out of their frames and consider alternatives (Branchini et
            al, 2023:91).
          </p>
          <p>
            Designers often deal with <em>fixation</em> (Crilly, 2015:54), a dynamic that occurs when designers
            become attached to a particular idea and struggle to consider alternatives. Many design methods are
            intended to help designers break out of fixation by providing time and space for considering diverse
            alternatives before focusing on a single outcome (van Boeijen et al, 2020:65). Thinking in opposites
            can help designers consider such alternatives. We have found that each of the following pairs of
            opposites can complement and support each other during a design process.
          </p>

          <DesignOpposite
            title="Diverging vs Converging"
            text={`One of the most popular design processes is the "double diamond" (Hehn, 2019:26), which involves a deliberate oscillation between "diverging" phases of differentiation (where new ideas are developed and expanded) and "converging" phases of integration (where focus is placed on developing a single concept). In a somewhat Darwinistic process of artificial selection in design, many ideas and possibilities are generated, yet only the most "fit" or harmonious manage to be integrated. This can be described as 'the survival of the harmonised' (Lin and Lomas, 2022:214).`}
          />

          <DesignOpposite
            title="Up the Ladder of Abstraction vs. Down the Ladder"
            text={`Thinking up the ladder of abstraction involves identifying the higher-level abstract values associated with a concrete problem or solution. In contrast, thinking down the ladder of abstraction can help designers imagine new concrete examples of abstract values (Victor, 2011). For example, when designing a new smartphone, thinking up the ladder might lead to the abstract value of "connection;" thinking down the ladder might then inspire designers to explore alternative ways of fostering this connection, such as creating shared social spaces. A ladder of abstraction is sometimes called an abstraction hierarchy (Sanders and Stappers, 2012:203).`}
          />

          <DesignOpposite
            title="Zooming In vs. Zooming Out"
            text="Zooming in refers to paying close attention to the particular qualities of an experience, e.g., of using a specific design in a specific environment. In contrast, zooming out involves considering the broader context in which the design must operate. For instance, when designing a new kitchen appliance, zooming in might involve examining the detailed user experience of operating the appliance, while zooming out could lead to considering how the appliance fits into the broader context of a user's cooking habits or their home environment."
          />

          <DesignOpposite
            title="Left Brain vs. Right Brain"
            text="In design, both &ldquo;left brain&rdquo; and &ldquo;right brain&rdquo; approaches are important to integrate (Sanders and Stappers, 2012:59). Left brain design approaches describe systematic, logical modes of rational thought while right brain approaches describe holistic modes of intuitive thought. Rather than expecting a designer to maximise both types of thought at all times, it is common to oscillate between these holistic and rational modes. For example, when designing a new website, left brain thinking might involve systematically analysing user data and creating logical information architectures. In contrast, right brain thinking might involve imaginative and intuitive leaps in visual design sparked through an exploration of examples. These differences in modes of thinking are described in dual processing theory (Evans, 2008:257)."
          />

          <DesignOpposite
            title="Social vs. Solitude"
            text="Alternating between time spent brainstorming in solitude and brainstorming in groups often produces the best outcomes (Korde and Paulus, 2017:177). For instance, when designing a new public space, individual designers might first spend time brainstorming ideas in solitude before coming together to collaboratively refine and develop the strongest concepts."
          />

          <DesignOpposite
            title="Purpose vs. Playfulness"
            text="Engaging in both goal-directed activities and fun, exploratory experiences can lead to more creative outcomes. For example, when working on a design project for a new sustainable packaging solution, designers might spend time pursuing the explicit goal of minimising environmental impact. However, they might combine this with playful experimentation with whimsical, unexpected forms. Playful exploration, even when not directly related to the project's purpose, can spark new ideas and lead to innovative solutions."
          />

          <DesignOpposite
            title="Thinking Big vs. Thinking Small"
            text={`"Thinking big" refers to ambitious and visionary thinking while "thinking small" refers to a focus on the specific details of small tasks that can incrementally move a project closer to the bigger vision. This "visionary incrementalism" aligns with classical management approaches to large-scale system change by "muddling through" (Lindblom, 1957). This involves more than breaking a problem into steps; it also provokes thought towards the creation of the smallest and most minimal version of an ambitious concept (i.e., a "minimal viable product"; Hokkanen et al, 2016).`}
          />

          <DesignOpposite
            title="Goals vs. Vision"
            text="Setting concrete, measurable goals improves design efficiency. However, too tight of a focus on metrics or key performance indicators can lead to inadvertent negative consequences. Goal-driven design can therefore be tempered with visionary design, which focuses on the more vague imaginaries of an intended future experience (Lomas et al, 2021). This balance can help designers efficiently support their desired outcomes while also supporting the harder-to-define emotional aspects of a desired experience."
          />

          <p>
            Each of these opposites can produce tension and conflict with one another. As pragmatist
            philosopher John Dewey says &lsquo;discord is the occasion that induces reflection&rsquo; (Dewey, 1934:15). By
            thinking in opposites, designers can reveal these discords or qualitative feelings of tension. Once
            revealed, these tensions can then be harmonised through innovations in design. In other words,
            thinking about one opposite and then the other can help reveal signals of conflict and misalignment.
            These dissonant signals can attract our attention to the additional work necessary to achieve
            alignment and harmony in our design outcomes. By recognizing and embracing conflict, rather than
            avoiding it, designers are positioned to create more holistic and effective design solutions.
          </p>
          <p>
            Reflecting back on our discussion of classical philosophy, the tension of opposition can
            create a flow of energy that can drive harmonisation. For instance, consider the process of
            brainstorming in a diverse team: the tension between different perspectives and ideas generates
            creative energy. An engineer&rsquo;s practical approach might clash with a designer&rsquo;s aesthetic vision,
            creating initial conflict. However, provided that the team remains in a spirit of trust, the tension of
            opposition can spark innovative solutions that neither would have conceived alone. The energy from
            their disagreement fuels exploration of new possibilities, ultimately leading to a harmonised
            solution that integrates both practical functionality and aesthetic appeal.
          </p>
          <p>
            Indeed, inner tension, cognitive dissonance and conflicts between needs is often used to
            motivate design innovation. &ldquo;Dilemma-Driven Design&rdquo; (Ozkaramanli et al, 2020:58) is a design
            method that uses personal dilemmas and conflicts as a starting point for design ideation and concept
            development. By focusing on personal and interpersonal tensions, designers can create solutions
            that address the root causes of user problems and create more meaningful experiences. When
            dealing with conflicting motivations, a designer might seek to resolve the conflict (e.g., by serving
            both concerns), moderate the conflict (e.g., by prioritising one concern over another), trigger the
            conflict (e.g., by creating awareness of the conflicting concerns), or giving space to the conflicting
            motivations (e.g., so that each can operate independently). Opposition provides an interface where
            the flow of differences can create the energy to create new experiences or innovations.
          </p>
          <p>
            Thinking with opposites supports diverse perspectives that can inform and enhance designs.
            By attending to tensions and misalignments between the opposite modes of thought, designers can
            discover better designs. By deliberately engaging with contrast and difference, designers can
            overcome fixation, explore a wider range of possibilities, and generate novel solutions. Each
            dimension of oppositeness serves as a different dimension to explore within a design space of
            possibilities. Allowing for this interplay of opposing elements can support greater harmony in
            design.
          </p>
          <p>
            Across the arts, beautiful creations often involve some form of conflict or contrast. As
            previously mentioned, a novel or film will lack narrative wholeness if there is no conflict to resolve.
            Indeed, the very purpose of a narrative arc is to address and resolve conflicts; thus, conflict becomes
            an essential contributor to the story&rsquo;s overall harmony. This concept extends beyond art and design.
            Each person is a creator and each must individually construct their own ideas and courses of action
            (Rubin, 2023). To do this, it is necessary to harmonise internal and external motivations,
            motivations which are often in conflict or tension. Life&rsquo;s basic challenge is to harmonise conflicting
            elements into coherent, meaningful activities. Indeed, challenges can enrich our lives and give it
            meaning, in the pursuit of harmony.
          </p>

          {/* V. THE UNIFIED MODEL OF AESTHETICS */}
          <SectionHeading number="V" title="The Unified Model of Aesthetics" />

          <p>
            Part of a design&rsquo;s function can be <em>aesthetic</em>, i.e., the purpose of the design is to shape our qualitative
            experience and to produce sensory pleasures. The term &ldquo;aesthetic&rdquo; originates from the Greek word
            &alpha;&#x1F30;&sigma;&theta;&eta;&sigma;&#x1FD6;&sigmaf; (aisth&#x113;sis), which refers to sensory experiences (Vichnar and Armand, 2017:1). In modern
            use, aesthetic experiences are specifically those that cause sensory pleasure or displeasure (Hekkert,
            2006:157). As harmony appears to play an important role in aesthetic pleasure, we wish to better
            understand how and why the harmony of opposites produces positive aesthetic experiences. Over
            the next few pages, we will unpack and explain the &ldquo;Unified Model of Aesthetics,&rdquo; a contemporary
            design theory, which explains aesthetic pleasure as a harmony of opposites.
          </p>
          <p>
            The Unified Model of Aesthetics was developed by a consortium of researchers, led by Dr.
            Paul Hekkert, to explain how and why people experience aesthetic pleasure&mdash;or beauty&mdash;in design
            (Berghman and Hekkert, 2017). Hekkert claims that the sensation of &lsquo;beauty arises from
            simultaneously addressing and harmonising apparent opposites&rsquo; (Hekkert, 2020). As this theoretical
            model deals with harmonising apparent opposites, by investigating this model, we seek to gain
            insights into the role of harmony in design. The model itself aims to provide a theoretical account
            for why satisfying opposing desires can maximise aesthetic pleasure. These opposites include:
          </p>

          <ul className="list-none pl-0 space-y-4 my-6">
            <li>
              <strong className="text-[var(--text-primary)]">Unity-Variety:</strong>{" "}
              People tend to value richness and variety in designs yet also value coherence
              and unity. As an example, the iPhone offers many varied features and apps, yet it also
              provides a consistent interface design language that gives all the varied features coherence.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Typicality-Novelty:</strong>{" "}
              Novelty and typicality are the basis of the so-called MAYA principle
              (&ldquo;Most Advanced Yet Acceptable&rdquo;), a design theory popularised by the mid-20th century
              designer Raymond Loewy who used the principle to explain the challenge of designing new
              products for a fickle public; people always want something new yet they want new things to
              be recognizable as a familiar type (Hekkert et al, 2003). New products that don&rsquo;t fit into our
              existing categories will fail to resonate with consumers, such as the unexpected failure of the
              Segway personal transportation device.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Connectedness-Autonomy:</strong>{" "}
              People tend to value products that enable them to express their
              autonomy or individuality, yet they also value products that signal their connection or
              belongingness to their social group (Blijlevens and Hekkert, 2019). For instance, teenagers
              might wear cut and distressed jeans in order to stand out and be different, yet they
              paradoxically do this in order to fit in socially.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Maximum Effect-Minimum Means:</strong>{" "}
              This principle suggests that we value designs that
              achieve the greatest effect with the least effort or resources (Da Silva et al, 2017). For
              instance, the Apple AirPods case is both a charging mechanism and a storage mechanism.
              This relates to the beauty of functionality. In mathematics, a simple yet powerful proof is
              elegant; any strategy that can achieve a major outcome with minimal effort (or maximum
              ease) is seen as beautiful.
            </li>
          </ul>

          <p>
            The Unified Model of Aesthetics organises each of these pairs of opposites at distinct levels of
            human existence: for instance, the opposites of unity-variety operate at the perceptual level; the
            opposites of novelty-typicality operate at a cognitive level; the opposites of
            autonomy-connectedness operate at a social level. At each of these levels, Hekkert and his
            colleagues propose that the pairs of opposites reflect a deeper and more fundamental set of
            opposites, namely Safety and Achievement, which is understood from the perspective of human
            evolution.
          </p>
          <p>
            What do aesthetics have to do with human evolution? Hekkert proposes that ancient humans
            had to balance, on a moment to moment basis, their intrinsic need for achievement with their need
            for safety. Specifically, he claims that the human aesthetic sense evolved to motivate our ancient
            ancestors to achieve (by pursuing new, varied, autonomous &amp; high impact experiences) while, at the
            same time, motivating their desire for safety (by pursuing experiences of familiarity, unity,
            connectedness and ease). Intrinsic aesthetic pleasures, shaped by our cultural experience, would
            therefore be capable of guiding humans through a dangerous and uncertain world. &lsquo;On the one
            hand, humans seek that which is safe to approach, offers security, and makes little demand on their
            limited processing capacity. On the other hand, humans are motivated to take risks, engage in
            exploratory behaviour, extend their capabilities, and promote their learning&rsquo; (Hekkert, 2014:281).
          </p>
          <p>
            If ancient humans only found familiar, stable, and safe stimuli beautiful, this would have
            inhibited growth and the potential for reproduction. Humans would never leave the cave, as it were.
            On the other hand, if ancient humans had only sought growth and achievement through an
            untempered free pursuit of novel and varied experiences, they would end up dead and unable to pass
            on our genes. In this manner, evolution is believed to have shaped the human aesthetic sense. The
            Unified Model of Aesthetics uses this evolutionary theory to account for why humans seem to share
            a natural drive to jointly satisfy our mutual needs for safety and achievement. This underlying need
            for safety and achievement therefore <em>manifests</em> at different levels of the human experience. Each
            pair of opposites in the unified model are thought to reflect this fundamental adaptive conflict of
            opposites.
          </p>
          <p>
            Another key idea is that each pair of opposites does not represent ends of a single dimension
            like hot and cold or up and down. Instead, each opposite is an independent factor that only tends to
            oppose the other. To prove that the opposites in the model were not ends of a single dimension,
            Hekkert and colleagues conducted several studies that asked hundreds of participants to rate the
            aesthetics of various product designs using the different opposites in the Unified Model of
            Aesthetics (Post et al, 2016). Their data revealed that the ratings of opposites in the products tended
            to be inversely correlated; yet, certain products could be very high in both unity and variety, for
            instance. Their work showed that products that maximise <em>both</em> unity and variety are perceived as
            more beautiful than a product with equally balanced or more average rankings.
          </p>
          <p>
            The opposites in the Unified Model of Aesthetics are not antonyms. While hot and cold
            reflect a single dimension of temperature, the opposites in the Universal Model of Aesthetics are
            distinct and, importantly, mutually virtuous. Nevertheless, each opposing virtue tends to conflict
            with the other (See Cheng, 1977:226). The implication is that it is undesirable to eliminate conflict
            by simply suppressing one opposite in favour of another other. Because the different opposites are
            mutually virtuous, maximising each opposite is more desirable than trying to find the average
            between the opposites. The harmony of opposites is not found by choosing the middle ground
            between extremes but by supporting the strength of both parts (in this case, the strength of each
            opposite) to the greatest extent possible.
          </p>

          {/* VI. ON THE NATURE OF OPPOSITES */}
          <SectionHeading number="VI" title="On the Nature of Opposites" />

          <p>
            Opposites are an intuitive concept and easily learned by children (Branchini, 2021:1)&mdash;however,
            they are surprisingly difficult to precisely define (Begley, 2022:85). What is clear, however, is that
            &ldquo;real opposites&rdquo; don&rsquo;t need to be perfect antonyms like up and down or true and false. The
            opposition of an opposite implies contrast or difference, but it does not require the perfect mirroring
            of an antonym.
          </p>
          <p>
            To make this clear, consider that a thermometer cannot simultaneously go up and down
            because hot and cold are true antonyms&mdash;they are opposite ends of a single dimension, not
            independent factors. In contrast, we&rsquo;ve discussed how novelty and typicality are independent factors
            that can both go up and down at the same time (even though they are usually moving in the opposite
            direction). Or consider pleasure and pain: these opposites tend to move in opposite directions,
            where increases in pain tend to lead to decreases in pleasure. However, psychologists have actually
            found that pleasure and pain are independent factors that can increase or decrease at the same time
            (Schimmack, 2001:81). For instance, a spicy soup can increase both pleasure and pain; on the other
            hand, eating an unexpectedly tasteless soup when very hungry can suddenly decrease both the
            hunger pains and decrease one&rsquo;s pleasure. For another example, a film might simultaneously evoke
            both pleasure and pain: the pain of a tragic moment can contribute to the overall pleasure of the
            narrative. This helps show why it is a misconception that opposites are necessarily antonyms.
          </p>

          {/* VII. SYNTHESISED TABLE OF OPPOSITES */}
          <SectionHeading number="VII" title="Synthesised Table of Opposites" />

          <p>
            Across our research, we have uncovered a wide variety of opposites. We have assembled all of these
            together into a synthesised table of opposites (Table 1), following a classical tradition (Golden,
            2015:171). We have organised the opposites as twelve different categorical levels, each representing
            a distinct domain or aspect of reality. To create these levels, we began with the levels in the Unified
            Model of Aesthetics (perceptual, cognitive, and social) and then added additional levels when
            necessary. The purpose of this table is to categorise and synthesise the opposites discussed in
            various philosophical traditions and to provide a foundation for further analysis and application in
            contemporary design theory.
          </p>

          {/* Table 1 */}
          <div className="my-8">
            <p className="font-[family-name:var(--font-inter)] text-xs font-semibold text-[var(--text-primary)] mb-3">
              Table 1: A Synthesised Table of Opposites
            </p>
            <div className="text-[13px] leading-relaxed border border-[var(--border-light)] rounded overflow-hidden">
              <TableRow
                category="Metaphysical & Mathematical"
                content={<>
                  <strong>Dao De Jing:</strong> yin-yang, oneness-twoness &middot;{" "}
                  <strong>Heraclitus:</strong> all-one, wholes-parts, change-permanence, something-nothing &middot;{" "}
                  <strong>Pythagorean:</strong> finite-infinite, one-many, odd-even, straight-curved, square-oblong, unity-diversity &middot;{" "}
                  <strong>Yanzi:</strong> harmony-sameness &middot;{" "}
                  <strong>Other:</strong> monad-dyad, being-nonbeing, one-zero
                </>}
              />
              <TableRow
                category="Physical"
                content={<>
                  <strong>Heraclitus:</strong> condensation-rarification, hot-cold, dry-wet, day-night, winter-summer &middot;{" "}
                  <strong>Aristotle on Democritus:</strong> fullness-void &middot;{" "}
                  <strong>Pythagorean:</strong> resting-moving &middot;{" "}
                  <strong>Other:</strong> cause-effect, kinetic-potential, energy-matter, wave-particle, matter-antimatter, positive charge-negative charge, action-reaction, force-extension, crests-troughs, shadow-light
                </>}
              />
              <TableRow
                category="Biological"
                content={<>
                  <strong>Pythagorean &amp; Heraclitus:</strong> male-female &middot;{" "}
                  <strong>Heraclitus:</strong> life-death, hunger-satiety, heath-disease &middot;{" "}
                  <strong>Other:</strong> organism-environment, inhalation-exhalation, anabolism-catabolism, excitation-inhibition of neurons, flexion-extension of muscles
                </>}
              />
              <TableRow
                category="Perceptual"
                content={<>
                  <strong>Heraclitus:</strong> consonance-dissonance, high-low &middot;{" "}
                  <strong>Pythagorean:</strong> left-right, light-dark, straight-curved, white-black, sweet-bitter, great-small &middot;{" "}
                  <strong>Yanzi:</strong> big-small (loud-quiet), long-short, fast-slow, pure tones-impure tones, sorrow-joy &middot;{" "}
                  <strong>UMA:</strong> unity-variety &middot;{" "}
                  <strong>Other:</strong> smooth-rough, perceptual-motor, central-peripheral vision
                </>}
              />
              <TableRow
                category="Emotional"
                content={<>
                  <strong>Pythagorean:</strong> good-bad &middot;{" "}
                  <strong>Yanzi:</strong> conflicting hearts-balanced hearts, excessive-deficient &middot;{" "}
                  <strong>UMA:</strong> immediate gratification-long term wellbeing &middot;{" "}
                  <strong>Other:</strong> tension-release, pleasure-pain, arousal-calm, approach-avoidance, attraction-aversion, like-dislike, submission-dominance, intrinsic-extrinsic motivation, control-acceptance, courage-caution
                </>}
              />
              <TableRow
                category="Cognitive"
                content={<>
                  <strong>Pythagorean:</strong> feelings-reason (pathos-logos) &middot;{" "}
                  <strong>Heraclitus:</strong> asleep-awake &middot;{" "}
                  <strong>UMA:</strong> novelty-familiarity &middot;{" "}
                  <strong>Other:</strong> intuition-logic, focus-perspective, exploration-exploitation, reductionism-holism, left brain-right brain, synthesis-analysis, conscious-unconscious, sensible-intelligible
                </>}
              />
              <TableRow
                category="Conceptual"
                content={<>
                  <strong>Heraclitus:</strong> agreement-disagreement, name-function, brought together-pulled apart &middot;{" "}
                  <strong>Other:</strong> thesis-antithesis, freedom-necessity, chance-necessity, identity-difference, form-content, subjectivity-objectivity, means-ends, subject-object, abstract-concrete, theory-practice, universal-particular, questions-answers, quantitative-qualitative
                </>}
              />
              <TableRow
                category="Social & Cultural"
                content={<>
                  <strong>Heraclitus:</strong> war-peace &middot;{" "}
                  <strong>Yanzi:</strong> ruler-minister &middot;{" "}
                  <strong>UMA:</strong> connectedness-autonomy &middot;{" "}
                  <strong>Other:</strong> individuality-association, ingroup-outgroup, tightness-looseness, diversity-inclusion, leadership-followership, popularity-authenticity, competition-collaboration, self-other, tradition-progress, teacher-learner, local-global
                </>}
              />
              <TableRow
                category="Economic"
                content={<>
                  <strong>Heraclitus:</strong> goods-gold, buying-selling &middot;{" "}
                  <strong>Other:</strong> supply-demand, imports-exports, assets-liabilities, revenue-expenditures, competition-coordination, public-private, capitalism-socialism, individuality-association, interdependence-independence
                </>}
              />
              <TableRow
                category="Designerly"
                content={<>
                  <strong>Heraclitus:</strong> convergence-divergence &middot;{" "}
                  <strong>UMA:</strong> ease-effect, intention-outcome &middot;{" "}
                  <strong>Design Thinking:</strong> converging-diverging, differentiation-integration, play-purpose, left brain-right brain, abstracting up-abstracting down, zooming in-zooming out, goals-vision, social-solitude, thinking big-thinking small &middot;{" "}
                  <strong>Other:</strong> needs-solutions, tradition-innovation, freedom-constraints, simplicity-abundance, natural-artificial, top down-bottom up, standardisation-customization, form-function, form-experience, short-term needs
                </>}
              />
              <TableRow
                category="Technological"
                content={<>
                  <strong>Other:</strong> on-off, sensors-actuators, input-output, analog-digital, centralised-decentralised, hardware-software, user-interface
                </>}
              />
              <TableRow
                category="Evolutionary & Ecological"
                content={<>
                  <strong>UMA:</strong> safety-achievement &middot;{" "}
                  <strong>Other:</strong> specialisation-generalisation, competition-mutualism, decomposers-producers, predator-prey, competition-symbiosis, growth-stability
                </>}
                isLast
              />
            </div>
          </div>

          <p>
            This table provides examples of important conceptions of opposition across diverse domains, from
            mathematics to ecosystems. As an extension of our discussion of opposites in design thinking in the
            beginning of this chapter, we anticipate that this collection and organisation of opposites has
            promise as a practical tool for helping designers to &ldquo;think in opposites.&rdquo; In this manner, we suggest
            that the table can support design thinking about harmony by considering the creative interaction of
            opposing forces.
          </p>
          <p>
            During ideation, designers might use the table of opposites to explore divergent possibilities
            across multiple dimensions. The table can also facilitate design exploration workshops or creativity
            methods like concept mapping to help designers to intentionally expand their solutions into
            oppositional spaces they may have missed. Mapping ideas onto specific opposites like immediate
            gratification versus long-term wellbeing can reveal insightful tensions to resolve.
          </p>
          <p>
            In a design process, opposites like these might be useful to support broader perspectives.
            Sometimes the differences between the opposites give rise to a new functional whole&mdash;a harmony.
            Sometimes conflicts or tensions can emerge between the opposites&mdash;and we suggest that these
            tensions will be useful to create designs with greater harmony.
          </p>
          <p>
            For example, consider the opposites of simplicity and abundance in user interface design. A
            designer might think: how might I make the most minimalist, streamlined interface possible? They
            could then think in the opposite direction: how might I make an interface that supports an
            abundance of desirable features and options? From these mind-stretching oppositions, they might
            discover valuable new ways to harmonise these values and enhance the user experience. By thinking
            in opposites, designers can gain a more nuanced understanding of how to deliberately engage with
            contrast and difference in their pursuit of harmony.
          </p>
          <p>
            For designers, these philosophical perspectives might also help shift mindsets around
            tension and polarisation. Rather than seeing oppositions as obstacles to resolve, contrasting needs
            and constraints could be embraced as fertile ground for creative synthesis. This perspective allows
            designers to appreciate conflict and challenge as opportunities for greater harmony.
          </p>

          {/* VIII. LIMITATIONS AND FUTURE RESEARCH */}
          <SectionHeading number="VIII" title="Limitations and Future Research Questions" />

          <p>
            While this chapter offers a promising foundation for leveraging opposition in design, we have not
            fully explored the potential for conflict to lead to intractable problems and poor design outcomes.
            Despite our emphasis on the importance of opposition in harmony, we want to clearly acknowledge
            that conflict and opposition are not always positive forces. Conflicts can drain energy, weaken
            capabilities, frustrate us, and harm relationships. Many conflicts might be needless, creating discord
            that disrupts positive experiences. Disharmony is not the overarching goal.
          </p>
          <p>
            Further, we wish to clarify the difference between &ldquo;binary thinking&rdquo; and thinking in
            opposites. Binary thinking or &ldquo;black and white thinking,&rdquo; is the tendency to take an extreme view of
            possibilities, rather than seeing finer grained distinctions or shades of grey. Thinking in strict
            dichotomies, where complex situations are cognitively reduced to simple binary options, is often
            associated with psychological pathologies (Bonf&aacute;&#x2011;Araujo et al, 2022:461) or &lsquo;belief traps&rsquo; (Scheffer
            et al, 2022). Binary thinking leads individuals to seeing people or ideas as wholly good or bad, or
            wholly for them or wholly against them. Simplifying complex issues into good versus bad or right
            versus wrong fails to capture the nuance of situations, especially when it comes to understanding
            concepts that are not inherently moral in nature. This lack of middle ground and nuance can lead to
            rigidity and hostility. Unlike thinking in opposites, where each side has mutual virtues, with binary
            thinking the opposites are locked in battle, with each side of the opposite antagonistically seeking to
            overcome and destroy the other. The psychologist Carl Jung noted that internal conflicts were
            sometimes resolved through a complete repression of an opposing tendency and he suggested that
            this dualistic perspective was the source of many psychological pathologies.
          </p>
          <blockquote>
            The obvious analogy, in the psychic sphere, to this problem of opposites is the dissociation
            of the personality brought about by the conflict of incompatible tendencies, resulting as a
            rule from an inharmonious disposition. The repression of one of the opposites leads only to
            a prolongation and extension of the conflict, in other words, to a neurosis. The therapist
            therefore confronts the opposites with one another and aims at uniting them permanently.
            (Jung 1963, 20)
          </blockquote>
          <p>
            In contrast to binary thinking, thinking in opposites rejects the moral lens of good versus bad and
            instead frames opposites as complementary forces that provide depth and meaning to each other.
            For instance, consider light and shadow in visual art: these are complementary forces that work
            together to create a composition. Neither is inherently superior. We don&rsquo;t appreciate the light in
            spite of the shadow; instead, we experience the shadow-light and appreciate their nuanced
            combination.
          </p>
          <p>
            This chapter raises several research questions for the future study of conflict and harmony.
            To begin, what are the factors that distinguish productive conflicts from destructive ones?
            Understanding why some conflicts lead to harmony and some to disharmony might help designers
            to more effectively leverage the creative potential of opposition. Perhaps all dissonance has the
            potential to contribute to harmony, but perhaps some conflicts are truly irreconcilable. The
            opposition in our sources are not suggestive of a battle to the death. We are not discussing the
            opposition of mutual hatred, where each opposing force seeks to destroy the other. Instead, our
            focus is on oppositions where contrast and difference can mutually support one another and lead to
            greater harmony. Yet, we don&rsquo;t wish to be naive about the potential for opposition to spiral into
            harmful extremes.
          </p>
          <p>
            Future research might explore specific strategies for managing opposition, such as giving
            space and separation to the dynamic interplay of opposites. This research could lead to new insights
            into how designers might support productive tension and resolution. This includes the provision of
            space for opposite factors (such as the oscillation between phases of convergence and divergence)
            and the creation of deliberate spaces for airing conflict. In general, does creating space for
            conflicting opinions amplify latent conflicts or does it support mutual co-existence and resolution?
          </p>
          <p>
            Opposites clearly play an important role in the human mind. The Unified Model of
            Aesthetics, for instance, clearly illustrates how the harmony of opposites underpins our aesthetic
            motivations. Perhaps novel psychological theories might be discovered that describe a broader
            motivational role for harmony (e.g., motivating the harmonisation of conflicting forces in the
            mind)?
          </p>
          <p>
            Finally, the prevalence of opposites in both human cognition and fundamental physical
            phenomena (Table 1) raises deeper questions about the nature of opposition and its role in shaping
            our understanding of the world. Are opposites an artefact of the human mind? Or are these
            oppositions a key feature of physical reality? Engaging with these questions at the intersection of
            design, philosophy, and science could open up new avenues for interdisciplinary collaboration and
            discovery.
          </p>

          {/* IX. CONCLUSION */}
          <SectionHeading number="IX" title="Conclusion" />

          <p>
            The central argument of this chapter is that opposition and conflict can (paradoxically) serve as a
            generative force for harmony in design. We have provided numerous practical examples for how
            designers can harness thinking in opposites to create greater harmony in their design. Rather than
            eliminating conflict by suppressing one or more sources of opposition, designers have the
            opportunity to use the opposition between forces as a source of energy that can support the flow of
            innovation. Indeed, conflicts and contrasts are arguably the very material that designers work to
            harmonise. High notes and low notes, shadow and light, life and death; the interactive conflict
            between opposites provides the energy and drive for harmony. Similarly, gaps in value create
            opportunities for designers to innovate. At a personal level, challenges motivate growth. Tension is
            intrinsic to the sweetness of resolution. And, imperfections can lend character and emotional
            resonance to designs.
          </p>
          <p>
            By providing a more nuanced understanding of how opposition contributes to harmony and
            the generative value of conflict, we hope to equip designers with new ways of thinking about
            harmony. We hope that our reflections can help designers better harmonise competing demands, as
            in the case of balancing user needs with business goals. By deliberately incorporating and
            appreciating the creative power of opposition, designers may be able to create more harmonious
            experiences that succeed in resonating with stakeholders. Designers seeking harmony must be able
            to navigate and integrate conflicting needs, dissenting voices, and negative emotions. Rather than
            suppressing, eliminating, or avoiding conflict, skilled designers may be able to discover tension as a
            creative energy for harmonisation and harness conflict as the motivation for new value creation.
            This does not imply that we should directly pursue conflict, but rather that we might learn to
            appreciate the &ldquo;beauty in the storm.&rdquo;
          </p>
          <p>
            This chapter aims to make several key contributions. First, we clarify the nature of
            opposition in harmony using classical philosophy and the Unified Model of Aesthetics. Second, we
            present designing itself as a harmonising activity; objectively, because designing involves the
            creation of functional wholes through the integration of diverse elements and, subjectively, because
            designing relies on a qualitative experience of harmony. Third, we examine music as a model for
            harmonisation, showing how imperfections and dissonance can contribute to richer experiences.
            Fourth, we reframe conflict and opposition as sources of creative energy in design. To support this,
            we provide practical methods for thinking in opposites and a table of opposites to promote creative
            problem-solving. Finally, we propose research questions to guide further inquiry into the harmony
            of opposites. Each of these contributions aim to support our key objective: to enhance our
            understanding of the harmony of opposites and to apply this understanding towards the design of a
            more positive future.
          </p>

          {/* BIBLIOGRAPHY */}
          <SectionHeading number="" title="Bibliography" />

          <div className="text-[13px] leading-[1.65] space-y-2">
            <BibEntry text="Alexander, Christopher (2002), The Phenomenon of Life. Book two of The Nature of Order: An Essay on the Art of Building and the Nature of the Universe. Berkeley, CA: The Center for Environmental Structure." />
            <BibEntry text="Ardley, Gavin (1967), &ldquo;The role of play in the philosophy of Plato.&rdquo; Philosophy 42, no. 161: 226-244." />
            <BibEntry text="Begley, Keith (2022), &ldquo;Knowing opposites and formalising antonymy.&rdquo; Epistemology & Philosophy of Science 59, no. 2: 85-101." />
            <BibEntry text="Berghman, Micha&euml;l, and Paul Hekkert (2017), &ldquo;Towards a unified model of aesthetic pleasure in design.&rdquo; New Ideas in Psychology 47: 136-144." />
            <BibEntry text="Blijlevens, Janneke, and Paul Hekkert (2019), &ldquo;Autonomous, yet Connected&rdquo;: An esthetic principle explaining our appreciation of product designs.&rdquo; Psychology & Marketing 36, no. 5: 530-546." />
            <BibEntry text="Bonf&aacute;-Araujo, Bruno, Atsushi Oshio, and Nelson Hauck-Filho (2022), &ldquo;Seeing Things in Black-and-White: A Scoping Review on Dichotomous Thinking Style.&rdquo; Japanese Psychological Research 64, no. 4: 461-472." />
            <BibEntry text="Branchini, Erika, Elena Capitani, Roberto Burro, Ugo Savardi, and Ivana Bianchi (2021), &ldquo;Opposites in reasoning processes: Do we use them more than we think, but less than we could?&rdquo; Frontiers in Psychology 12: 715696." />
            <BibEntry text="Branchini, Erika, Roberto Burro, and Ivana Bianchi (2023), &ldquo;Training People to Think in Opposites Facilitates the Falsification Process in Wason&rsquo;s Rule Discovery Task.&rdquo; Journal of Intelligence 11, no. 5: 91." />
            <BibEntry text="Carlin, Laurence (2000), &ldquo;On the very concept of harmony in Leibniz.&rdquo; The Review of Metaphysics: 99-125." />
            <BibEntry text="Chan, Paul Yaozhu, Minghui Dong, and Haizhou Li (2019), &ldquo;The Science of Harmony: A Psychophysical Basis for Perceptual Tensions and Resolutions in Music.&rdquo; Research: A Science Partner Journal." />
            <BibEntry text="Cheng, Chung-ying (1977), &ldquo;Toward constructing a dialectics of harmonization: Harmony and conflict in Chinese philosophy.&rdquo; Journal of Chinese Philosophy 33, no. 5: 25-59." />
            <BibEntry text="Cross, Nigel (1982), &ldquo;Designerly ways of knowing.&rdquo; Design Studies 3, no. 4: 221-227." />
            <BibEntry text="Crilly, Nathan (2015), &ldquo;Fixation and creativity in concept development: The attitudes and practices of expert designers.&rdquo; Design Studies 38: 54-91." />
            <BibEntry text="Da Silva, Odette, Nathan Crilly, and Paul Hekkert (2017), &ldquo;Beauty in efficiency: An experimental enquiry into the principle of maximum effect for minimum means.&rdquo; Empirical Studies of the Arts 35, no. 1: 93-120." />
            <BibEntry text="Dam, Rikke Friis, and Yu Siang Teo (2022), &ldquo;The History of Design Thinking.&rdquo; Interaction Design Foundation - IxDF." />
            <BibEntry text="Davies, Matthew, Guy Madison, Pedro Silva, and Fabien Gouyon (2012), &ldquo;The effect of microtiming deviations on the perception of groove in short rhythms.&rdquo; Music Perception: An Interdisciplinary Journal 30, no. 5: 497-510." />
            <BibEntry text="Dewey, John (1934), Art as Experience. New York: Minton, Balch & Company." />
            <BibEntry text="Diogenes Laertius (1925), Lives of Eminent Philosophers, Volume II: Books 6-10. Translated by R. D. Hicks. Loeb Classical Library 185. Cambridge, MA: Harvard University Press." />
            <BibEntry text="Evans, Jonathan St BT (2008), &ldquo;Dual-processing accounts of reasoning, judgment, and social cognition.&rdquo; Annu. Rev. Psychol. 59 (2008): 255-278." />
            <BibEntry text="Goldin, Owen (2015), &ldquo;The Pythagorean table of opposites, symbolic classification, and Aristotle.&rdquo; Science in Context 28, no. 2: 171-193." />
            <BibEntry text="Gottschall, Jonathan (2012), The Storytelling Animal: How Stories Make Us Human. Boston, MA: Houghton Mifflin Harcourt." />
            <BibEntry text="Hehn, Jennifer, Daniel Mendez, Falk Uebernickel, Walter Brenner, and Manfred Broy (2019), &ldquo;On integrating design thinking for human-centered requirements engineering.&rdquo; IEEE Software 37, no. 2: 25-31." />
            <BibEntry text="Hekkert, Paul (2006), &ldquo;Design aesthetics: principles of pleasure in design.&rdquo; Psychology Science 48, no. 2: 157." />
            <BibEntry text="Hekkert, Paul (2014), &ldquo;Aesthetic responses to design: A battle of impulses.&rdquo; In P. P. Tinio & J. K. Smith (Eds.), The Cambridge Handbook of the Psychology of Aesthetics and the Arts. Cambridge University Press." />
            <BibEntry text="Hekkert, Paul (2020), &ldquo;Paul Hekkert Delivers TU Delft&rsquo;s Foundation Day lecture.&rdquo; TU Delft News." />
            <BibEntry text="Hekkert, Paul, Dirk Snelders, and Piet CW Van Wieringen (2003), &ldquo;&lsquo;Most advanced, yet acceptable&rsquo;: Typicality and novelty as joint predictors of aesthetic preference in industrial design.&rdquo; British Journal of Psychology 94, no. 1: 111-124." />
            <BibEntry text="Hennig, Holger, et al. (2011), &ldquo;The Nature and Perception of Fluctuations in Human Musical Rhythms.&rdquo; PLoS ONE 6, no. 10: e26457." />
            <BibEntry text="Hokkanen, L., Kuusinen, K., & V&auml;&auml;n&auml;nen, K. (2016), &ldquo;Minimum viable user experience: A framework for supporting product design in startups.&rdquo; In Agile Processes, XP 2016, Springer." />
            <BibEntry text="Huffman, Carl (1993), Philolaus of Croton: Pythagorean and Presocratic. Cambridge University Press." />
            <BibEntry text="Joosten, Wessel (2023), &ldquo;A.I. Music and Identity Shaping: Soulless Computer Music Versus Soulful Human Music.&rdquo; Diggit Magazine." />
            <BibEntry text="Jung, Carl Gustav (1963), &ldquo;Mysterium coniunctionis: An inquiry into the separation and synthesis of psychic opposites in alchemy.&rdquo; Collected Works of Carl Jung, volume 14. Bollingen Series XX." />
            <BibEntry text="Koestler, Arthur (1981), &ldquo;The three domains of creativity.&rdquo; In The Concept of Creativity in Science and Art, pp. 1-17. Springer." />
            <BibEntry text="Korde, Runa, and Paul B. Paulus (2017), &ldquo;Alternating individual and group idea generation: Finding the elusive synergy.&rdquo; Journal of Experimental Social Psychology 70: 177-190." />
            <BibEntry text="Lahdelma, Imre, and Tuomas Eerola (2016), &ldquo;Mild dissonance preferred over consonance in single chord perception.&rdquo; i-Perception 7, no. 3." />
            <BibEntry text="Lee, Y. T., H. Yang, and M. Wang (2009), &ldquo;Daoist Harmony as a Chinese Philosophy and Psychology.&rdquo; Peace and Conflict Studies 16, no. 1: 68-78." />
            <BibEntry text="Li, Chenyang (2006), &ldquo;The Confucian Ideal of Harmony.&rdquo; Philosophy East and West 56, no. 4: 583-603." />
            <BibEntry text="Li, Chenyang, & Dascha D&uuml;ring (2022), The Virtue of Harmony. Oxford University Press." />
            <BibEntry text="Lin, Albert and J. Derek Lomas (2022), &ldquo;The Enigma of Mind: A Theory of Evolution and Conscious Experience.&rdquo; In Enigmas: Darwin College Lectures, pp. 179-228. Cambridge University Press." />
            <BibEntry text="Lindblom, Charles E (1959), &ldquo;The Science of&rdquo; Muddling Through.&rdquo; Public Administration Review 19, no. 2: 79-88." />
            <BibEntry text="Lomas, J. Derek, Mihovil Karac, and Mathieu Gielen (2021), &ldquo;Design space cards: using a card deck to navigate the design space of interactive play.&rdquo; Proceedings of the ACM on Human-Computer Interaction 5, no. CHI PLAY: 1-21." />
            <BibEntry text="Lomas, J. Derek, Nirmal Patel, and Jodi L. Forlizzi (2021), &ldquo;Designing Data-informed Intelligent Systems to Create Positive Impact.&rdquo; In Relating Systems Thinking and Design 2021 Symposium (RSD10), pp. 154-170." />
            <BibEntry text="Lomas, J. Derek, et al. (2022), &ldquo;Resonance as a design strategy for AI and social robots.&rdquo; Frontiers in Neurorobotics 16: 850489." />
            <BibEntry text="Lomas, J. Derek, and Haian Xue (2022), &ldquo;Harmony in design: A synthesis of literature from classical philosophy, the sciences, economics, and design.&rdquo; She Ji 8, no. 1: 5-64." />
            <BibEntry text="Max Planck Institute for Dynamics and Self-Organization (2024), &ldquo;Electronic Music with a Human Rhythm.&rdquo;" />
            <BibEntry text="Milburn, Olivia (2015), The Spring and Autumn Annals of Master Yan. Vol. 128. Leiden: Brill." />
            <BibEntry text="Norman, Donald (2023), Design for a Better World: Meaningful, Sustainable, Humanity Centered. Cambridge, MA: MIT Press." />
            <BibEntry text="Ozkaramanli, Deger, Pieter MA Desmet, and Elif &Ouml;zcan (2020), &ldquo;From discovery to application: What to expect when designing with dilemmas.&rdquo; Dise&ntilde;a 17: 58-83." />
            <BibEntry text="Parncutt, Richard, and Graham Hair (2011), &ldquo;Consonance and Dissonance in Music Theory and Psychology: Disentangling Dissonant Dichotomies.&rdquo; Journal of Interdisciplinary Music Studies 5, no. 2: 119-166." />
            <BibEntry text="Post, R. A. G., Janneke Blijlevens, and Paul Hekkert (2016), &ldquo;&lsquo;To preserve unity while almost allowing for chaos&rsquo;: Testing the aesthetic principle of unity-in-variety in product design.&rdquo; Acta Psychologica 163: 142-152." />
            <BibEntry text="Rubin, Rick (2023), The Creative Act: a Way of Being. Penguin." />
            <BibEntry text="Sanders, Elizabeth, and Pieter Jan Stappers (2012), Convivial Toolbox: Generative Research for the Front End of Design. Bis." />
            <BibEntry text="Scheffer, Marten, et al. (2022), &ldquo;Belief traps: Tackling the inertia of harmful beliefs.&rdquo; Proceedings of the National Academy of Sciences 119, no. 32: e2203149119." />
            <BibEntry text="Schimmack, Ulrich (2001), &ldquo;Pleasure, displeasure, and mixed feelings: Are semantic opposites mutually exclusive?&rdquo; Cognition & Emotion 15, no. 1: 81-97." />
            <BibEntry text="Suri, Jane Fulton (2011), &ldquo;Poetic observation: What designers make of what they see.&rdquo; In Design Anthropology, pp. 16-32. Springer, Vienna." />
            <BibEntry text="van Boeijen, Annemiek GC, Jaap Daalhuizen, and Jelle Zijlstra (2020), Delft Design Guide: Perspectives, Models, Approaches, Methods. Bis Publishers." />
            <BibEntry text="Vichnar, David, and Louis Armand (2017), &ldquo;Aisth&emacr;sis.&rdquo; In Oxford Research Encyclopedia of Literature." />
            <BibEntry text="Victor, Bret (2011), &ldquo;Ladder of Abstraction.&rdquo; Worrydream." />
            <BibEntry text="Xie, Jian, et al. (2011), &ldquo;Ecological mechanisms underlying the sustainability of the agricultural heritage rice-fish coculture system.&rdquo; Proceedings of the National Academy of Sciences 108, no. 50: E1381-E1387." />
          </div>
        </div>
      </article>

      {/* Back link */}
      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-[var(--border-light)]">
        <a
          href="/research"
          className="font-[family-name:var(--font-inter)] text-sm text-[var(--text-muted)] hover:text-[var(--accent-rust)] transition-colors no-underline"
        >
          &larr; Back to Research
        </a>
      </div>
    </div>
  );
}

/* Helper components */

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <h2 className="font-[family-name:var(--font-cormorant)] text-[20px] font-semibold text-[var(--text-primary)] mt-8 mb-3 break-after-avoid">
      {number && <span className="font-[family-name:var(--font-inter)] text-[13px] tracking-wider mr-2">{number}.</span>}
      {title}
    </h2>
  );
}

function DesignOpposite({ title, text }: { title: string; text: string }) {
  return (
    <p>
      <strong className="text-[var(--text-primary)]">{title}:</strong>{" "}
      {text}
    </p>
  );
}

function TableRow({ category, content, isLast = false }: { category: string; content: React.ReactNode; isLast?: boolean }) {
  return (
    <div className={`flex ${!isLast ? "border-b border-[var(--border-light)]" : ""}`}>
      <div className="w-[120px] shrink-0 p-2 bg-[var(--bg-warm)] font-[family-name:var(--font-inter)] font-medium text-[var(--text-primary)] text-[11px] border-r border-[var(--border-light)]">
        {category}
      </div>
      <div className="flex-1 p-2 text-[var(--text-secondary)]">
        {content}
      </div>
    </div>
  );
}

function BibEntry({ text }: { text: string }) {
  return (
    <p className="pl-4 -indent-4" dangerouslySetInnerHTML={{ __html: text }} />
  );
}
