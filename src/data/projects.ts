export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  tags: string[];
  image?: string;
  url?: string;
  featured?: boolean;
}

export const allProjects: Project[] = [
  // Personal projects
  {
    slug: "source-library",
    title: "Source Library",
    description:
      "Digitizing and translating rare Hermetic, alchemical, and mystical texts. 100+ books from the pre-1650 era, including works on kabbalah, neoplatonism, and natural magic.",
    fullDescription:
      "Source Library is a digital humanities project dedicated to digitizing and translating rare Hermetic, alchemical, and mystical texts from the pre-1650 era. The collection includes over 100 books spanning kabbalah, neoplatonism, natural magic, and early scientific thought. Using Gemini OCR and modern AI translation tools, these texts are being made accessible to researchers and enthusiasts for the first time in centuries.",
    category: "Esoteric",
    tags: ["Next.js", "MongoDB", "Gemini OCR", "Digital Humanities"],
    image: "/images/projects/source-library.jpg",
    featured: true,
  },
  {
    slug: "playpowerlearn",
    title: "PlayPowerLearn",
    description:
      "AI-powered learning management system where AI generates standards-aligned content and humans curate. Inverting the traditional LMS paradigm.",
    fullDescription:
      "PlayPowerLearn is a next-generation learning management system that inverts the traditional content creation paradigm. Instead of humans writing all content and AI assisting, PlayPowerLearn uses AI to generate standards-aligned educational content while humans curate, refine, and approve. This approach dramatically accelerates course creation while maintaining pedagogical quality.",
    category: "Education",
    tags: ["Next.js", "PostgreSQL", "Prisma", "AI"],
    image: "/images/projects/playpowerlearn.png",
  },
  {
    slug: "smart-paper",
    title: "Smart Paper",
    description:
      "Computer vision tool integrating paper-based and digital learning. Reached 5 million students with 6 longitudinal assessments across India.",
    fullDescription:
      "Smart Paper bridges the gap between paper-based and digital learning using computer vision. Teachers distribute printed worksheets; students complete them by hand; a smartphone camera captures and scores the work instantly. Deployed across India, Smart Paper has reached over 5 million students and conducted 6 longitudinal assessments, proving that AI-powered education doesn't require every student to have a device.",
    category: "AI",
    tags: ["Computer Vision", "Education", "Scale"],
    image: "/images/projects/smart-paper.jpg",
    featured: true,
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
      "Platform enabling researchers to collect large-scale cognitive and psychological performance data via mobile technologies. Over 15 published studies.",
    fullDescription:
      "NeuroUX is a research platform that enables scientists to collect large-scale cognitive and psychological performance data using mobile technologies. By gamifying traditional cognitive assessments, NeuroUX achieves higher participant engagement and larger sample sizes than conventional lab-based methods. The platform has supported over 15 published studies in cognitive science, psychology, and mental health research.",
    category: "Research",
    tags: ["Cognitive Science", "Games", "Assessment"],
    image: "/images/projects/neuroux-phone.png",
    featured: true,
  },
  {
    slug: "soma",
    title: "Soma",
    description:
      "Multi-provider AI assistant platform. Create customizable personal AI assistants with Claude, ChatGPT, Gemini, and more.",
    category: "AI",
    tags: ["React 19", "Supabase", "Multi-model"],
  },
  {
    slug: "xwhysi",
    title: "XWHYSI",
    description:
      "Milo Lomas music portfolio with 30 AI-generated psychedelic video backgrounds. Electronic music meets generative art.",
    category: "Music",
    tags: ["SoundCloud", "Video Generation", "Creative"],
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
    image: "/images/projects/playpower-labs.jpg",
    url: "https://www.playpowerlabs.com",
    featured: true,
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
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}
