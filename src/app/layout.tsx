import type { Metadata } from "next";
import { Cormorant_Garamond, Newsreader, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import InputWidget from "@/components/InputWidget";

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
  metadataBase: new URL("https://dereklomas.me"),
  title: {
    default: "Positive AI & Digital Humanities",
    template: "%s | Derek Lomas",
  },
  description:
    "Tenured professor of Positive AI at TU Delft. Enhancing wellbeing through AI, education, and humanistic design.",
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
    url: "https://dereklomas.me",
    siteName: "Derek Lomas",
    title: "Positive AI & Digital Humanities",
    description:
      "Tenured professor of Positive AI at TU Delft. Enhancing wellbeing through AI, education, and humanistic design.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Positive AI & Digital Humanities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "8A57b-SwLbgoaVaT6LBZXXSHIIquUBbDZZYBZATU7oI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Derek Lomas — Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className={`${cormorant.variable} ${newsreader.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <InputWidget />
      </body>
    </html>
  );
}
