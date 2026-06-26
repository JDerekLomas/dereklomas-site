export interface Workshop {
  title: string;
  venue: string;
  location: string;
  cadence?: string;
  description: string;
  url?: string;
}

// "Vibe coding" workshops & AI coaching Derek has been running since 2022.
// Drawn from the recurring "AI & Cocktails" series and invited sessions.
export const workshops: Workshop[] = [
  {
    title: "AI & Cocktails",
    venue: "Embassy of the Free Mind",
    location: "Amsterdam",
    cadence: "Recurring series",
    description:
      "The flagship vibe coding series — a relaxed evening where anyone, with or without programming experience, learns to build real software with AI. Hosted at Amsterdam's historic Embassy of the Free Mind, often alongside Jasha van der Wel and Michell Zappa (Envisioning).",
    url: "https://www.embassyofthefreemind.com",
  },
  {
    title: "AI & Experience Design — Masterclass",
    venue: "TU Delft",
    location: "Delft, Netherlands",
    cadence: "University masterclass",
    description:
      "A masterclass for designers on building with AI, taught within TU Delft's Industrial Design Engineering program, plus open vibe coding sessions on campus.",
  },
  {
    title: "Vibe Coding Workshop",
    venue: "IT University of Copenhagen",
    location: "Copenhagen",
    cadence: "Invited, following an HCI talk",
    description:
      "A hands-on session for the HCI Design section: even with no coding background you can create amazing software with AI, and even seasoned developers now build with it daily.",
  },
  {
    title: "AI Coaching",
    venue: "Internet Archive",
    location: "San Francisco",
    cadence: "Invited",
    description:
      "AI and vibe coding coaching at the Internet Archive, helping non-programmers turn ideas into working tools.",
  },
  {
    title: "AI for Social Transformation Design",
    venue: "The Design Village & partner institutes",
    location: "India",
    cadence: "Invited",
    description:
      "Workshops bringing AI-assisted building to design students and practitioners, exploring how vibe coding can serve social transformation.",
  },
];
