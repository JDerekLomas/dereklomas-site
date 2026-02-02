import type { Metadata } from "next";
import { Cormorant_Garamond, Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Derek Lomas — AI, Education & Digital Humanities",
    template: "%s | Derek Lomas",
  },
  description:
    "Tenured professor of Positive AI at TU Delft. Founder of Playpower Labs, NeuroUX, and Smart Paper. Enhancing global wellbeing through artificial intelligence and humanistic design.",
  keywords: [
    "Derek Lomas",
    "Positive AI",
    "TU Delft",
    "Human-Centered Design",
    "Educational Technology",
    "AI Wellbeing",
    "Playpower Labs",
    "Digital Humanities",
  ],
  authors: [{ name: "Derek Lomas" }],
  creator: "Derek Lomas",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://derek-lomas.com",
    siteName: "Derek Lomas",
    title: "Derek Lomas — AI, Education & Digital Humanities",
    description:
      "Tenured professor of Positive AI at TU Delft. Enhancing global wellbeing through artificial intelligence and humanistic design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derek Lomas — AI, Education & Digital Humanities",
    description:
      "Tenured professor of Positive AI at TU Delft. Enhancing global wellbeing through artificial intelligence and humanistic design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${newsreader.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
