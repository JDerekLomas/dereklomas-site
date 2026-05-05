export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  tags: string[];
  image?: string;
  gallery?: string[];
  video?: string; // YouTube video ID
  url?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  // Personal projects
  {
    slug: "prompt-archaeology",
    title: "Prompt Archaeology",
    description:
      "What does a body of work look like when building with AI daily? An analysis of 10,497 prompts across 68 days and 53 projects.",
    fullDescription:
      "Prompt Archaeology is a data visualization project analyzing two months of Claude Code conversation history. It reveals patterns in how work emerges when building with AI: the three-act arc from experimentation to commercialization, the multiplexed attention of switching between projects every 36 seconds on average, and the rhythm of 793 prompts on the busiest day. Not for optimization—for archaeology.",
    category: "AI",
    tags: ["D3.js", "Data Visualization", "Claude Code", "Personal Analytics"],
    image: "/images/projects/prompt-archaeology.png",
    url: "/projects/promptarchaeology/",
    featured: true,
  },
  {
    slug: "source-library",
    title: "Source Library",
    description:
      "12,347 rare historical texts from the 15th–18th centuries, 11,218 translated into English across 152 languages — the largest open archive of Hermetic, alchemical, and pre-modern scientific writing.",
    fullDescription:
      "Source Library is a digital humanities project dedicated to digitizing and translating rare historical texts. The live collection now spans 12,347 books by 5,095+ authors in 152 languages — including 11,218 fresh AI-assisted English translations, 94,811 illustrations, and 14,249 artworks. The corpus emphasizes Hermetic, alchemical, kabbalistic, neoplatonic, and natural-magic traditions alongside early scientific thought, with a Gemini-based OCR + translation pipeline that has processed roughly 1.67 million pages for around $3,400 total.",
    category: "Esoteric",
    tags: ["Next.js", "MongoDB", "Gemini OCR", "Digital Humanities"],
    image: "/images/projects/source-library.jpg",
    url: "https://sourcelibrary.org",
    featured: true,
  },
  {
    slug: "playpower-games",
    title: "Playpower Games",
    description:
      "Free K–8 math games aligned to Common Core and TEKS. Teachers assign in 30 seconds, host live quizzes Kahoot-style, and track student progress in real time.",
    fullDescription:
      "Playpower Games is a free platform of K–8 math games aligned to Common Core and TEKS standards. Teachers can assign games to a class in 30 seconds, run live multiplayer quizzes (Kahoot-style), and watch student progress update in real time. It integrates directly with Google Classroom, Clever, and ClassLink, and is the current consumer-facing successor to two decades of Playpower educational-game research.",
    category: "Education",
    tags: ["Math", "K-8", "Common Core", "Live Quizzes"],
    image: "/images/projects/playpowerlearn.png",
    url: "https://playpowergames.com",
    featured: true,
  },
  {
    slug: "smart-paper",
    title: "Smart Paper",
    description:
      "AI for paper assessments by EdOptimize. Computer vision turns hand-completed worksheets into instant feedback — reaching 5+ million students across India.",
    fullDescription:
      "Smart Paper bridges the gap between paper-based and digital learning using computer vision. Teachers distribute printed worksheets; students complete them by hand; a smartphone camera captures and scores the work instantly. Now operated by EdOptimize, Smart Paper has reached over 5 million students across India and run 6 longitudinal assessments, proving that AI-powered education doesn't require every student to have a device.",
    category: "AI",
    tags: ["Computer Vision", "Education", "Scale"],
    image: "/images/projects/smart-paper.jpg",
    url: "https://smartpaperapp.com",
    featured: true,
    gallery: [
      "/images/projects/gallery/smart-paper/01.jpg",
      "/images/projects/gallery/smart-paper/02.png",
    ],
  },
  {
    slug: "steamquest",
    title: "STEAMQuest",
    description:
      "Educational 3D games with professional voice acting. Gamified learning through Three.js visualizations and immersive problem-solving.",
    category: "Education",
    tags: ["Three.js", "ElevenLabs", "Interactive"],
    image: "/images/projects/steamquest.png",
  },
  {
    slug: "babysees",
    title: "BabySees & FunBookies",
    description:
      "Visual vocabulary books for toddlers featuring complex imagery: fractals, honeycombs, nebulae, microscopic structures. Plus decodable readers for early literacy.",
    category: "Books",
    tags: ["AI Art", "Early Learning", "Science of Reading"],
    image: "/images/projects/babysees.jpg",
  },
  {
    slug: "neuroux",
    title: "NeuroUX",
    description:
      "HIPAA/GDPR-compliant cognitive assessment and Ecological Momentary Assessment (EMA) platform. Validated tests for executive function, memory, attention; passive sensing and wearable integrations (Fitbit, Garmin, Apple Watch, ActiGraph).",
    fullDescription:
      "NeuroUX is a research platform for collecting cognitive and behavioral data in the wild. Its library includes validated mobile cognitive tests for executive function, memory, psychomotor speed, attention, and social cognition, plus configurable Ecological Momentary Assessment (EMA) surveys. The platform passively collects GPS, ambient noise, accelerometer, weather, and air-quality data, and integrates with Fitbit, Garmin, Apple Watch, and ActiGraph through a unified wearables dashboard. NeuroUX is HIPAA- and GDPR-compliant and is used by leading institutions worldwide; the team is presenting at ACNP, INS, and ISCTM in 2026.",
    category: "Research",
    tags: ["Cognitive Science", "EMA", "Wearables", "HIPAA"],
    image: "/images/projects/neuroux.jpg",
    video: "TJUbzc2SddI",
    url: "https://getneuroux.com",
    featured: true,
    gallery: [
      "/images/projects/gallery/neuroux/01.gif",
      "/images/projects/gallery/neuroux/02.png",
    ],
  },
  {
    slug: "vibe-research-lab",
    title: "VIBE Research Lab",
    description:
      "TU Delft research lab combining science, design, and AI to explore positive human experiences through vibration, resonance, and sensory interaction.",
    fullDescription:
      "The VIBE Research Lab at TU Delft explores how vibration, harmony, and resonance can enhance human wellbeing. Projects include AI-powered vibrating blankets for sleep, vibroacoustic sound healing installations (exhibited at Dutch Design Week 2019), and EEG-based studies of aesthetic experience. The lab applies classical theories of harmony to modern interaction design, using AI to personalize sensory experiences.",
    category: "Research",
    tags: ["Wellbeing", "Haptics", "AI", "TU Delft"],
    image: "/images/projects/feel-the-vibe.png",
  },
  {
    slug: "xwhysi",
    title: "XWHYSI",
    description:
      "Milo Lomas music portfolio with 30 AI-generated psychedelic video backgrounds. Electronic music meets generative art.",
    fullDescription:
      "XWHYSI is the music portfolio of Milo Lomas, featuring electronic music paired with 30 AI-generated psychedelic video backgrounds. Each track is accompanied by a unique visual created using generative AI tools, blending electronic sound design with surreal, evolving imagery.",
    category: "Music",
    tags: ["SoundCloud", "Video Generation", "Creative"],
    image: "/images/projects/xwhysi.png",
    url: "https://xwhysi.com",
  },
  // TU Delft projects
  {
    slug: "my-wellness-check",
    title: "My Wellness Check",
    description:
      "System for measuring and improving community wellbeing. Deployed assessments across all 30,000 students and staff at TU Delft over two years during COVID-19.",
    fullDescription:
      "My Wellness Check is a comprehensive wellbeing measurement and improvement system developed at TU Delft. During the COVID-19 pandemic, it was deployed across the entire university community of 30,000 students and staff over two years. The system combines validated psychological assessments with personalized wellbeing recommendations, providing both individual feedback and aggregate data for institutional decision-making.",
    category: "Research",
    tags: ["Wellbeing", "COVID-19", "TU Delft"],
    image: "/images/projects/my-wellness-check.png",
    url: "https://mywellnesscheck.org",
    gallery: [
      "/images/projects/gallery/my-wellness-check/01.png",
      "/images/projects/gallery/my-wellness-check/02.png",
      "/images/projects/gallery/my-wellness-check/03.png",
    ],
  },
  {
    slug: "resonance-pod",
    title: "Resonance Pod",
    description:
      "Enclosed environment using warm pulsing lights, soft vibrations, and music to reset breathing rhythms. Exhibited at Dutch Design Week 2020.",
    fullDescription:
      "The Resonance Pod is an enclosed environment designed to reset breathing rhythms through multi-sensory stimulation. Using warm pulsing lights synchronized with soft vibrations and ambient music, the pod guides occupants into a state of calm resonance. The project explores how physical environments can be designed to promote physiological and psychological wellbeing. Exhibited at Dutch Design Week 2020.",
    category: "Design",
    tags: ["Haptics", "Wellbeing", "Installation"],
    image: "/images/projects/resonance-pod.png",
    gallery: [
      "/images/projects/gallery/resonance-pod/01.png",
      "/images/projects/gallery/resonance-pod/02.jpg",
      "/images/projects/gallery/resonance-pod/03.jpg",
    ],
  },
  {
    slug: "feel-the-vibe",
    title: "Feel the Vibe",
    description:
      "Interactive installation exploring vibro-tactile and acoustic stimuli as aesthetic drivers. Published at EuroHaptics 2020.",
    fullDescription:
      "Feel the Vibe is an interactive installation that investigates vibro-tactile and acoustic stimuli as drivers of aesthetic experience. Visitors interact with various haptic interfaces to explore how touch and sound combine to create feelings of beauty, pleasure, and wonder. The research was published at EuroHaptics 2020, contributing to the emerging field of haptic aesthetics.",
    category: "Design",
    tags: ["Haptics", "Aesthetics", "Installation"],
    image: "/images/projects/feel-the-vibe.png",
    gallery: [
      "/images/projects/gallery/feel-the-vibe/01.png",
      "/images/projects/gallery/feel-the-vibe/02.jpeg",
      "/images/projects/gallery/feel-the-vibe/03.jpeg",
    ],
  },
  {
    slug: "escape-the-smart-city",
    title: "Escape the Smart City",
    description:
      "Critical pervasive game raising awareness about AI-surveillance in smart cities. Players experience how AI perceives the world. Published at CHI 2019.",
    fullDescription:
      "Escape the Smart City is a critical pervasive game that raises awareness about AI surveillance in smart cities. Players navigate a real urban environment while experiencing how AI systems perceive, track, and categorize citizens. The game was designed to provoke reflection on the ethical implications of ubiquitous sensing and automated decision-making in public spaces. Published at CHI 2019.",
    category: "Design",
    tags: ["AI Ethics", "Games", "Critical Design"],
    image: "/images/projects/escape-smart-city.jpeg",
    gallery: [
      "/images/projects/gallery/escape-the-smart-city/01.jpg",
      "/images/projects/gallery/escape-the-smart-city/02.gif",
      "/images/projects/gallery/escape-the-smart-city/03.jpeg",
    ],
  },
  {
    slug: "envision-glasses",
    title: "Envision Glasses",
    description:
      "AI-powered smartglasses for the visually impaired with text recognition, face recognition, and remote sighted-person assist. Student: Ferkan Metin.",
    fullDescription:
      "Envision Glasses are AI-powered smartglasses designed for visually impaired users. Built on Google Glass Enterprise Edition 2, they feature instant text recognition, scene description, face recognition, and a remote sighted-person video assist feature. Originally a graduation project by Ferkan Metin under Derek's supervision at TU Delft, Envision has grown into a successful company serving thousands of blind and low-vision users worldwide.",
    category: "Design",
    tags: ["Accessibility", "AI", "Product Design"],
    image: "/images/projects/envision-glasses.png",
    url: "https://www.letsenvision.com/glasses",
    gallery: [
      "/images/projects/gallery/envision-glasses/01.jpg",
      "/images/projects/gallery/envision-glasses/02.jpeg",
      "/images/projects/gallery/envision-glasses/03.png",
    ],
  },
  {
    slug: "landshapes",
    title: "LANDSHAPES",
    description:
      "AI-generated landscape art installation for climate exhibitions. Morphing photorealistic landscapes that never existed, sparking wonder about climate change.",
    fullDescription:
      "LANDSHAPES is an AI art installation that generates morphing photorealistic landscapes that never existed. Created in collaboration with Google AI, the project uses generative adversarial networks (GANs) to produce an endless stream of imaginary terrains—mountains melting into oceans, forests dissolving into deserts. Exhibited at climate-focused events, the work sparks wonder and reflection about the fragility and beauty of our changing planet.",
    category: "Design",
    tags: ["GANs", "Climate", "Google AI"],
    image: "/images/projects/landshapes.jpg",
    gallery: [
      "/images/projects/gallery/landshapes/01.png",
      "/images/projects/gallery/landshapes/02.jpg",
      "/images/projects/gallery/landshapes/03.jpg",
    ],
  },
  {
    slug: "upgrade",
    title: "UpGrade",
    description:
      "Open source A/B testing platform for education software, supported by the Bill & Melinda Gates Foundation and Schmidt Futures.",
    fullDescription:
      "UpGrade is an open source A/B testing platform purpose-built for education software. Supported by the Bill & Melinda Gates Foundation and Schmidt Futures, it enables educators and researchers to run rigorous experiments within learning platforms. UpGrade handles the unique challenges of educational experimentation: nested student-teacher-school hierarchies, ethical considerations, and integration with diverse learning management systems.",
    category: "Education",
    tags: ["A/B Testing", "Open Source", "EdTech"],
    image: "/images/projects/upgrade.png",
    url: "https://www.upgradeplatform.org",
    gallery: [
      "/images/projects/gallery/upgrade/01.jpeg",
      "/images/projects/gallery/upgrade/02.png",
    ],
  },
  {
    slug: "design-space-cards",
    title: "Design Space Cards",
    description:
      "Physical card deck for generating game design concepts by sampling a design space. Published in CHI PLAY / PACM HCI.",
    fullDescription:
      "Design Space Cards are a physical card deck that helps designers generate game design concepts by systematically sampling a design space. Each card represents a design dimension (e.g., feedback type, challenge structure, social mechanics), and drawing random combinations sparks novel game ideas. The tool and its evaluation were published in CHI PLAY / PACM HCI.",
    category: "Design",
    tags: ["Game Design", "Research", "Tools"],
    image: "/images/projects/design-space-cards.png",
  },
  {
    slug: "playpower-labs",
    title: "Playpower Labs",
    description:
      "EdTech company providing data science and software development for digital education. Products include Math Planet (1M+ downloads) and Numbaland.",
    fullDescription:
      "Playpower Labs is an EdTech company providing data science and software development for digital education. Its flagship products include Math Planet (over 1 million downloads), Numbaland, and other educational games that make learning mathematics engaging and effective. The company combines rigorous learning science with game design to create products that measurably improve student outcomes.",
    category: "Education",
    tags: ["EdTech", "Data Science", "Games"],
    image: "/images/projects/playpower-labs.png",
    url: "https://www.playpowerlabs.com",
    featured: true,
    gallery: [
      "/images/projects/gallery/playpower-labs/01.png",
      "/images/projects/gallery/playpower-labs/02.jpg",
      "/images/projects/gallery/playpower-labs/03.jpg",
      "/images/projects/gallery/playpower-labs/04.jpg",
      "/images/projects/gallery/playpower-labs/05.jpg",
    ],
  },
  {
    slug: "playpower-8bit",
    title: "PlayPower",
    description:
      "Educational initiative leveraging $12 8-bit TV-computers for game-based learning. Won 2009 MacArthur Foundation Digital Media and Learning Grant.",
    fullDescription:
      "PlayPower was a pioneering educational initiative that leveraged $12 8-bit TV-computers—already present in millions of homes across the developing world—for game-based learning. By creating educational games for these ultra-low-cost devices, PlayPower made digital learning accessible to communities that couldn't afford modern computers. The project won the 2009 MacArthur Foundation Digital Media and Learning Grant.",
    category: "Education",
    tags: ["8-bit", "MacArthur", "India"],
    image: "/images/projects/playpower-8bit.png",
    gallery: [
      "/images/projects/gallery/playpower-8bit/01.png",
      "/images/projects/gallery/playpower-8bit/02.jpeg",
      "/images/projects/gallery/playpower-8bit/03.jpg",
      "/images/projects/gallery/playpower-8bit/04.jpg",
      "/images/projects/gallery/playpower-8bit/05.jpg",
      "/images/projects/gallery/playpower-8bit/06.jpg",
    ],
  },
  // New projects
  {
    slug: "neuroaesthetic-resonance",
    title: "NeuroAesthetic Resonance",
    description:
      "EEG-based cybernetic aesthetic experience exploring neural correlates of beauty and resonance through real-time brainwave feedback.",
    fullDescription:
      "NeuroAesthetic Resonance is an EEG-based cybernetic aesthetic experience that explores the neural correlates of beauty and resonance. Participants wear EEG headsets while interacting with visual and auditory stimuli; their brainwave patterns are analyzed in real-time to create a feedback loop between neural activity and aesthetic experience. The project investigates whether we can design experiences that reliably induce states of aesthetic resonance, and what these states look like in the brain.",
    category: "Research",
    tags: ["EEG", "Neuroaesthetics", "Cybernetics", "Wellbeing"],
    image: "/images/projects/neuroaesthetic-resonance.jpg",
    gallery: [
      "/images/projects/gallery/neuroaesthetic-resonance/01.png",
      "/images/projects/gallery/neuroaesthetic-resonance/02.png",
      "/images/projects/gallery/neuroaesthetic-resonance/03.jpeg",
    ],
  },
  {
    slug: "entrepreneurial-thinking",
    title: "Entrepreneurial Thinking",
    description:
      "AMS Institute master's course teaching entrepreneurship through design thinking, lean methodology, and real-world startup challenges.",
    fullDescription:
      "Entrepreneurial Thinking is a master's course at the AMS Institute (Amsterdam Institute for Advanced Metropolitan Solutions) that teaches entrepreneurship through design thinking, lean methodology, and real-world startup challenges. Students work in interdisciplinary teams to identify urban problems, develop solution concepts, validate assumptions with real users, and pitch viable business models. The course bridges academic research and entrepreneurial practice.",
    category: "Education",
    tags: ["AMS Institute", "Entrepreneurship", "Design Thinking"],
    image: "/images/projects/entrepreneurial-thinking.jpg",
    gallery: [
      "/images/projects/gallery/entrepreneurial-thinking/01.png",
      "/images/projects/gallery/entrepreneurial-thinking/02.jpg",
    ],
  },
  {
    slug: "haptic-vision",
    title: "Haptic Vision",
    description:
      "VR haptic glove prototype for SenseGlove exploring how touch feedback enhances immersion and spatial understanding in virtual environments.",
    fullDescription:
      "Haptic Vision is a VR haptic glove prototype developed in collaboration with SenseGlove. The project explores how touch feedback enhances immersion and spatial understanding in virtual environments. By combining force feedback, vibrotactile stimulation, and thermal cues, the glove allows users to feel virtual objects with unprecedented realism. Research findings contribute to the design of next-generation haptic interfaces for VR training, rehabilitation, and entertainment.",
    category: "Design",
    tags: ["VR", "Haptics", "SenseGlove", "Prototype"],
    image: "/images/projects/haptic-vision.png",
    gallery: [
      "/images/projects/gallery/haptic-vision/01.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}
