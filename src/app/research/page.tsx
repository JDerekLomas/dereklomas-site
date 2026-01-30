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
        authors: "van der Maden W, van der Burg V, Halperin BA, Jääskeläinen P, Kun P, Lomas D, et al.",
        venue: "DIS 2025",
      },
      {
        title: "When Discourse Stalls: Moving Past Semantic Stopsigns about Generative AI in Design Research",
        authors: "van der Maden W, van der Burg V, Halperin BA, Jääskeläinen P, Lindley J, Lomas D, Merritt T",
        venue: "arXiv",
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
        authors: "van der Maden W, van Beek E, Halperin BA, Jääskeläinen P, Kang E, Kun P, Lomas JD, et al.",
        venue: "DIS 2024",
      },
      {
        title: "Improved Emotional Alignment of AI and Humans: Ratings by Stable Diffusion & DALL-E",
        authors: "Lomas JD, van der Maden W, Bandyopadhyay S, Lion G, Patel N, Jain G, Litowsky Y, Xue H, Desmet P",
        venue: "arXiv",
      },
      {
        title: "Automated Surgical Step Recognition in Transurethral Bladder Tumor Resection Using AI",
        authors: "Deol ES, Tollefson MK, Antolin A, Zohar M, Bar O, Ben-Ayoun D, Mynderse LA, Lomas DJ, et al.",
        venue: "Frontiers in Artificial Intelligence",
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
        authors: "van der Maden W, van Beek E, Nicenboim I, van der Burg V, Kun P, Lomas JD, Kang E",
        venue: "DIS 2023",
      },
      {
        title: "Fourth Annual Workshop on A/B Testing and Platform-Enabled Learning Research",
        authors: "Ritter S, Heffernan NT, Williams JJ, Lomas D, et al.",
        venue: "L@S 2023",
      },
      {
        title: "Predicting Drum Beats from High-density Brain Rhythms",
        authors: "Chaudhary S, Miyapuram KP, Lomas D",
        venue: "COMAD/CODS 2023",
      },
      {
        title: "Decoding Individual and Shared Experiences of Media Perception Using CNN Architectures",
        authors: "Johri R, Pandey P, Miyapuram KP, Lomas JD",
        venue: "MIUA 2023",
      },
    ],
  },
  {
    year: 2022,
    papers: [
      {
        title: "Harmony in Design: A Synthesis from Classical Philosophy, Sciences, Economics, and Design",
        authors: "Lomas JD, Xue H",
        venue: "She Ji: The Journal of Design, Economics, and Innovation",
      },
      {
        title: "Resonance as a Design Strategy for AI and Social Robots",
        authors: "Lomas JD, Lin A, Dikker S, Forster D, Lupetti ML, Huisman G, Habekost J, et al.",
        venue: "Frontiers in Neurorobotics",
      },
      {
        title: "Initial Psychometric Properties of 7 NeuroUX Remote Ecological Momentary Cognitive Tests",
        authors: "Moore RC, Parrish EM, Van Patten R, Paolillo E, Filip TF, Bomyea J, et al.",
        venue: "JMIR",
      },
      {
        title: "Music Identification Using Brain Responses to Initial Snippets",
        authors: "Pandey P, Sharma G, Miyapuram KP, Subramanian R, Lomas D",
        venue: "ICASSP 2022",
      },
      {
        title: "Real-time Sensing and NeuroFeedback for Practicing Meditation Using EEG and Eye Tracking",
        authors: "Pandey P, Gupta P, Chaudhary S, Miyapuram KP, Lomas D",
        venue: "IEEE TENSYMP 2022",
      },
      {
        title: "EEG Spectral Correlates of Rapid and Deep Slow Breathing States",
        authors: "Patnaik S, Pandey P, Arun I, Yadav G, Miyapuram KP, Lomas D",
        venue: "IEEE TENSYMP 2022",
      },
      {
        title: "Classifying EEG Signals of Mind-Wandering Across Different Styles of Meditation",
        authors: "Chaudhary S, Pandey P, Miyapuram KP, Lomas D",
        venue: "International Conference on Brain Informatics",
      },
      {
        title: "Design for Wellbeing During Covid-19: A Cybernetic Perspective on Data Feedback Loops",
        authors: "van der Maden W, Lomas JD, Hekkert P",
        venue: "DRS 2022 Bilbao",
      },
      {
        title: "Equitable Access to Intelligent Tutoring Systems Through Paper-Digital Integration",
        authors: "Patel N, Thakkar M, Rabadiya B, Patel D, Malvi S, Sharma A, Lomas D",
        venue: "EasyChair",
      },
      {
        title: "Third Annual Workshop on A/B Testing and Platform-Enabled Learning Research",
        authors: "Ritter S, Heffernan N, Williams JJ, Lomas D, Motz B, Basu Mallick D, et al.",
        venue: "L@S 2022",
      },
    ],
  },
  {
    year: 2021,
    papers: [
      {
        title: "Design Space Cards: Using a Card Deck to Navigate the Design Space of Interactive Play",
        authors: "Lomas JD, Karac M, Gielen M",
        venue: "CHI PLAY / PACM HCI",
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
      {
        title: "GuessTheMusic: Song Identification from Electroencephalography Response",
        authors: "Sonawane D, Miyapuram KP, Rs B, Lomas DJ",
        venue: "ACM IKDD CODS and COMAD",
      },
      {
        title: "Predicting Dominant Beat Frequency from Brain Responses While Listening to Music",
        authors: "Pandey P, Ahmad N, Miyapuram KP, Lomas D",
        venue: "IEEE BIBM 2021",
      },
      {
        title: "Modeling NAEP Test-taking Behavior Using Educational Process Analysis",
        authors: "Patel N, Sharma A, Shah T, Lomas D",
        venue: "Journal of Educational Data Mining",
      },
      {
        title: "Second Workshop on Educational A/B Testing at Scale",
        authors: "Ritter S, Heffernan NT, Williams JJ, Lomas D, Bicknell K",
        venue: "L@S 2021",
      },
    ],
  },
];

// Earlier publications (2020 and before)
const earlierPublications = [
  {
    year: 2020,
    papers: [
      {
        title: "How Might Data-Informed Design Help Reduce the Poverty Achievement Gap?",
        authors: "Lomas JD",
        venue: "Neuroscientific Perspectives on Poverty",
      },
      {
        title: "Designing Smart Systems: Reframing AI for Human-Centered Designers",
        authors: "Beardow C, van der Maden W, Lomas J",
        venue: "TMCE 2020",
      },
      {
        title: "Workshop Proposal: Educational A/B Testing at Scale",
        authors: "Ritter S, Heffernan N, Williams JJ, Settles B, Grimaldi P, Lomas D",
        venue: "L@S 2020",
      },
    ],
  },
  {
    year: 2019,
    papers: [
      {
        title: "Designing an Escape Room in the City for Public Engagement with AI-Enhanced Surveillance",
        authors: "Kihara T, Bendor R, Lomas D",
        venue: "CHI Extended Abstracts",
      },
      {
        title: "Monster Mischief: A Game-Based Assessment of Selective Sustained Attention in Young Children",
        authors: "Godwin KE, Lomas D, Koedinger KR, Fisher AV",
        venue: "International Journal of Gaming",
      },
      {
        title: "Gamified Mobile Cognitive Tests: Preliminary Feasibility in Persons with Bipolar Disorder",
        authors: "Filip T, Kamarsu S, Lomas D, Eyler L, Depp C, Moore R",
        venue: "Archives of Clinical Neuropsychology",
      },
    ],
  },
  {
    year: 2018,
    papers: [
      {
        title: "Using Mobile Health Gamification to Facilitate CBT Skills Practice in Child Anxiety Treatment",
        authors: "Pramana G, Parmanto B, Lomas J, Lindhiem O, Kendall PC, Silk J",
        venue: "JMIR Serious Games",
      },
      {
        title: "Curriculum Pacing: A New Approach to Discover Instructional Practices in Classrooms",
        authors: "Patel N, Sharma A, Sellman C, Lomas D",
        venue: "International Conference on Intelligent Tutoring Systems",
      },
      {
        title: "Towards a Domain-Specific Design Platform for Wheelchair User Well-being",
        authors: "Bourgeois J, Liu S, Kortuem G, Lomas D",
        venue: "ACM International Joint Conference",
      },
      {
        title: "CHI 2018 Workshop: Data-Driven Educational Game Design",
        authors: "McLaren BM, Asbell-Clarke J, Hammer J",
        venue: "CHI Extended Abstracts",
      },
    ],
  },
  {
    year: 2017,
    papers: [
      {
        title: "Is Difficulty Overrated? Effects of Choice, Novelty and Suspense on Intrinsic Motivation",
        authors: "Lomas JD, Koedinger K, Patel N, Shodhan S, Poonwala N, Forlizzi JL",
        venue: "CHI 2017 (Honorable Mention)",
      },
      {
        title: "Mining Frequent Learning Pathways from a Large Educational Dataset",
        authors: "Patel N, Sellman C, Lomas D",
        venue: "arXiv",
      },
    ],
  },
  {
    year: 2016,
    papers: [
      {
        title: "Interface Design Optimization as a Multi-Armed Bandit Problem",
        authors: "Lomas JD, Forlizzi J, Poonwala N, Patel N, Shodhan S, Patel K, Koedinger K, Brunskill E",
        venue: "CHI 2016",
      },
    ],
  },
  {
    year: 2015,
    papers: [
      {
        title: "Monster Mischief: Designing a Video Game to Assess Selective Sustained Attention",
        authors: "Godwin KE, Lomas D, Koedinger KR, Fisher AV",
        venue: "International Journal of Gaming and Computer-Mediated Simulations",
      },
      {
        title: "India's Design Guru: MP Ranjan",
        authors: "Lomas D",
        venue: "She Ji",
      },
    ],
  },
  {
    year: 2013,
    papers: [
      {
        title: "Optimizing Challenge in an Educational Game Using Large-Scale Design Experiments",
        authors: "Lomas D, Patel K, Forlizzi JL, Koedinger KR",
        venue: "CHI 2013",
      },
      {
        title: "The Power of Play: Design Lessons for Increasing the Lifespan of Outdated Computers",
        authors: "Lomas D, Kumar A, Patel K, Ching D, Lakshmanan M, Kam M, Forlizzi JL",
        venue: "CHI 2013",
      },
      {
        title: "Supporting Social-Emotional Development in Collaborative Inquiry Games for K-3 Science",
        authors: "Aleven V, Dow S, Christel M, Stevens S, Rosé C, Koedinger K, Myers B, et al.",
        venue: "Games+Learning+Society",
      },
    ],
  },
  {
    year: 2012,
    papers: [
      {
        title: "RumbleBlocks: Teaching Science Concepts to Young Children Through a Unity Game",
        authors: "Christel MG, Stevens SM, Maher BS, Brice S, Champer M, Jayapalan L, et al.",
        venue: "International Conference on Computer Games",
      },
      {
        title: "The Rise of the Super Experiment",
        authors: "Stamper JC, Lomas D, Ching D, Ritter S, Koedinger KR, Steinhart J",
        venue: "International Educational Data Mining Society",
      },
      {
        title: "Effects of Adaptive Sequencing Algorithms on Player Engagement Within an Online Game",
        authors: "Lomas D, Stamper J, Muller R, Patel K, Koedinger KR",
        venue: "International Conference on Intelligent Tutoring Systems",
      },
      {
        title: "Internet Scale Experimental Design and Deployment for Educational Games Using BrainPOP",
        authors: "Stamper J, Lomas D, Ching D, Linch K, Ritter S",
        venue: "Games+Learning+Society",
      },
    ],
  },
  {
    year: 2011,
    papers: [
      {
        title: "Battleship Numberline: A Digital Game for Improving Estimation Accuracy on Fraction Number Lines",
        authors: "Lomas D, Ching D, Stampfer E, Sandoval M, Koedinger K",
        venue: "Society for Research on Educational Effectiveness",
      },
      {
        title: "When a Console Game Becomes CSCL: Play, Participatory Learning and 8-bit Home Computing in India",
        authors: "Lomas D, Ching D, Hoadley C, Patel K, Kam M",
        venue: "International Society of the Learning Sciences",
      },
    ],
  },
  {
    year: 2010,
    papers: [
      {
        title: "Some Consideration on the (In)Effectiveness of Residential Energy Feedback Systems",
        authors: "Pierce J, Fan C, Lomas D, Marcu G, Paulos E",
        venue: "ACM Conference on Designing Interactive Systems",
      },
    ],
  },
  {
    year: 2008,
    papers: [
      {
        title: "Playpower: Radically Affordable Computer-Aided Learning with $12 TV-Computers",
        authors: "Lomas D, Douglass J, Rehn D",
        venue: "Meaningful Play Conference",
      },
    ],
  },
  {
    year: 2007,
    papers: [
      {
        title: "Cognitive Artifacts: An Art-Science Engagement",
        authors: "Lomas D",
        venue: "ACM SIGCHI Conference on Creativity & Cognition",
      },
    ],
  },
];

// Supervised students at TU Delft
const supervisedStudents = [
  {
    name: "Willem van der Maden",
    degree: "PhD",
    year: 2024,
    title: "Designing Positive AI: How optimizing for contextual wellbeing inspired a design method for artificial intelligence that promotes human flourishing",
    description: "Developed methods for designing AI systems centered on human flourishing, including the 'My Wellness Check' longitudinal study with 20,000+ participants during COVID-19.",
    url: "https://repository.tudelft.nl/record/uuid:7a341d93-3a51-4df2-9d0a-fcade9008e63",
  },
  {
    name: "Dinuo Liao",
    degree: "MSc",
    year: 2023,
    distinction: "Cum Laude (9.5/10)",
    title: "Generative AI & Tangible Products: Human-AI Synergy in 3D-printed Lamp Design",
    description: "Explored LoRA fine-tuning with human aesthetic feedback to enhance AI-generated product designs, with methods for converting designs into 3D-printable objects.",
  },
  {
    name: "Tamay Oudhof",
    degree: "MSc",
    year: 2023,
    distinction: "Cum Laude",
    title: "Future Framing Method: Utilizing the power of co-creation and AI when envisioning the future",
    description: "Developed a toolkit combining futuring methods, creativity, and AI (ChatGPT + MidJourney) to help teams envision desirable futures collaboratively.",
    url: "https://repository.tudelft.nl/islandora/object/uuid:a147269d-c437-4695-be71-a8dc31085aaa",
  },
  {
    name: "Xin Wen",
    degree: "MSc",
    year: 2024,
    title: "Can AI Deepen Our Connection to Human Values?",
    description: "Designed a game using ChatGPT and the Sciffle Box to help players explore and discuss corporate values aligned with personal human values.",
  },
  {
    name: "Shuyue Jin",
    degree: "MSc",
    year: 2024,
    title: "How Might Human Experience Inform AI Systems?",
    description: "Investigated how aesthetic beauty and embodied human experience can inform the design of AI systems, addressing limitations in current AI capabilities.",
  },
  {
    name: "Caiseal Beardow",
    degree: "MSc",
    year: 2021,
    title: "NeuroAesthetic Resonance: A cybernetic system optimizing audiovisual experience through EEG feedback",
    description: "Built an art-science installation using EEG brain activity to create a feedback loop that enhances neural and aesthetic resonance in real-time.",
    url: "http://resolver.tudelft.nl/uuid:d57d831a-0c34-4822-9005-63fee99ff2c4",
  },
  {
    name: "H. Monteiro Rego Meyrelles",
    degree: "MSc",
    year: 2021,
    title: "Atrium: Facilitating Social Interactions for Sustained Wellbeing in a Digital Campus Life",
    description: "Designed a wellbeing-informed digital platform to lower friction in initiating social interactions between university peers during COVID-19 remote learning.",
    url: "https://repository.tudelft.nl/record/uuid:4dc97c47-0d89-4356-927a-2e811a2b0ca9",
  },
  {
    name: "Frederik Ueberschär",
    degree: "MSc",
    year: 2021,
    title: "AI for Experience: Designing with Generative Adversarial Networks to evoke climate fascination",
    description: "Created LANDSHAPES, an interactive museum installation using GANs to generate aerial landscapes that evoke climate engagement through beauty and fascination.",
    url: "https://repository.tudelft.nl/record/uuid:731b92cc-ec9e-4543-a608-c0edbdb14aaf",
  },
  {
    name: "Ferkan Metin",
    degree: "MSc",
    year: 2020,
    title: "Envision Glasses: AI-powered smartglasses for the visually impaired",
    description: "Designed AI smartglasses with camera, speaker, text/face recognition, and remote sighted-person assist. Launched with preorders on graduation day.",
    url: "https://www.letsenvision.com/glasses",
  },
  {
    name: "Bryan Zaaijer",
    degree: "MSc",
    year: 2020,
    title: "Haptic Vision: Developing a vision for the SenseGlove VR glove",
    description: "Designed hand tracking, force feedback, and tactile feedback for VR haptic gloves. Joined SenseGlove after graduating.",
    url: "https://repository.tudelft.nl/islandora/object/uuid:f7c60e77-6c3a-4d33-8192-12ceeff43c48",
  },
  {
    name: "Tomo Kihara",
    degree: "MSc",
    year: 2018,
    title: "Escape the Smart City: A critical pervasive game about AI-enhanced surveillance",
    description: "Created a city-scale escape room raising awareness about AI surveillance in smart cities. Published at CHI 2019 Extended Abstracts.",
    url: "https://www.tomokihara.com/en/escape-the-smart-city.html",
  },
  {
    name: "Mihovil Karac",
    degree: "MSc",
    year: 2018,
    title: "Design Space Cards: A card deck for navigating the design space of interactive play",
    description: "Developed a physical card deck tool for generating game design concepts. Published in CHI PLAY / PACM HCI.",
    url: "https://repository.tudelft.nl/islandora/object/uuid:7076c234-0119-4fe2-8a83-bf10286efc1b",
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
            75+ publications spanning AI for wellbeing, learning engineering,
            educational games, and human-centered design. 1,500+ citations.
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
            Recent Publications (2021-2025)
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

        {/* Earlier publications */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Earlier Publications (2007-2020)
          </h2>
          <div className="space-y-8">
            {earlierPublications.map((yearGroup) => (
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

        {/* Supervised Students */}
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-6">
            Supervised Students (TU Delft)
          </h2>
          <div className="space-y-4">
            {supervisedStudents.map((student) => (
              <div
                key={student.name}
                className="p-5 bg-white rounded-lg border border-[var(--border-color)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="badge badge-violet text-xs">
                        {student.degree}
                      </span>
                      {student.distinction && (
                        <span className="badge badge-rust text-xs">
                          {student.distinction}
                        </span>
                      )}
                      <span className="text-xs text-text-muted">
                        {student.year}
                      </span>
                    </div>
                    <p className="font-medium text-text-primary">
                      {student.name}
                    </p>
                    {student.url ? (
                      <a
                        href={student.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary mt-1 block hover:text-rust transition-colors"
                      >
                        {student.title}
                      </a>
                    ) : (
                      <p className="text-sm text-text-secondary mt-1">
                        {student.title}
                      </p>
                    )}
                    <p className="text-xs text-text-muted mt-2">
                      {student.description}
                    </p>
                  </div>
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
