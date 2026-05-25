import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Architectures — UCSD MFA, 2006–2007",
  description:
    "Visual documentation from the Social Architectures workspace at UC San Diego — installations, public-seating experiments, garden projects, and site-specific interventions.",
};

type Item = { src: string; caption?: string };
type Group = { title: string; description?: string; items: Item[] };

const groups: Group[] = [
  {
    title: "The Bus Stop Living Room",
    description:
      "A bus stop reconfigured as a domestic living room — couches, side tables, a working lamp — testing how people behave when public seating is treated like private furniture.",
    items: [
      { src: "/images/social-architectures/busstop1.jpg" },
      { src: "/images/social-architectures/busstop2.jpg" },
      { src: "/images/social-architectures/livingroom3.jpg" },
      { src: "/images/social-architectures/theoutdoorlivingroom.jpg" },
    ],
  },
  {
    title: "The Invisible Shape of University Past",
    description:
      "A site-specific memorial project marking the location where UCSD student George Winne Jr. self-immolated in May 1970 as a protest against the Vietnam War.",
    items: [
      { src: "/images/social-architectures/memorial.jpg" },
      { src: "/images/social-architectures/med_02_invisibleshape.jpg" },
      { src: "/images/social-architectures/med_03_invisibleshape.jpg" },
      { src: "/images/social-architectures/med_06_invisibleshape.jpg" },
      { src: "/images/social-architectures/med_11_invisibleshape.jpg" },
    ],
  },
  {
    title: "The Labyrinth",
    items: [
      { src: "/images/social-architectures/labyrinth-at-night_web.jpg" },
      { src: "/images/social-architectures/maze_shoot_sm.jpg" },
    ],
  },
  {
    title: "Mobile Garden & Outdoor Installations",
    items: [
      { src: "/images/social-architectures/mobilegarden1.jpg" },
      { src: "/images/social-architectures/gazebo2.jpg" },
      { src: "/images/social-architectures/treeswingcat124.jpg" },
      { src: "/images/social-architectures/bench_pic.gif" },
    ],
  },
  {
    title: "Site Documentation — UCSD Campus",
    description:
      "Context shots: Revelle College, Library Walk, Price Center, Sun God Lawn, ERC Green.",
    items: [
      { src: "/images/social-architectures/ucsd-041.jpg" },
      { src: "/images/social-architectures/ucsd-librarywalk.jpg" },
      { src: "/images/social-architectures/ucsd-price-center-ueberblick_big.jpg" },
      { src: "/images/social-architectures/revelle1.jpg" },
      { src: "/images/social-architectures/revelle_fountain.jpg" },
      { src: "/images/social-architectures/sungod_lawn.jpg" },
      { src: "/images/social-architectures/ercgreen.jpg" },
    ],
  },
  {
    title: "Bulletin Boards & Public Communication",
    items: [
      { src: "/images/social-architectures/warren-bulletin.jpg" },
      { src: "/images/social-architectures/je-bulletin.jpg" },
      { src: "/images/social-architectures/campaign-button-cookie.jpg" },
      { src: "/images/social-architectures/peoplejustin.gif" },
    ],
  },
  {
    title: "Projections, Drawings & Studio Work",
    items: [
      { src: "/images/social-architectures/projection1.jpg" },
      { src: "/images/social-architectures/projection2.jpg" },
      { src: "/images/social-architectures/soc-arch-line-drawings.jpg" },
      { src: "/images/social-architectures/soc-arch-line-pc.jpg" },
      { src: "/images/social-architectures/borderwalk.png" },
    ],
  },
  {
    title: "Field Documentation",
    description:
      "Site visits, project iterations, and miscellaneous documentation that doesn't fit a single grouping.",
    items: [
      { src: "/images/social-architectures/wik1.jpg" },
      { src: "/images/social-architectures/wik2.jpg" },
      { src: "/images/social-architectures/wik3.jpg" },
      { src: "/images/social-architectures/wik4.jpg" },
      { src: "/images/social-architectures/wik5.jpg" },
      { src: "/images/social-architectures/wik6.jpg" },
      { src: "/images/social-architectures/wik7.jpg" },
      { src: "/images/social-architectures/dsc01860.jpg" },
      { src: "/images/social-architectures/dsc01868.jpg" },
      { src: "/images/social-architectures/dsc01966.jpg" },
      { src: "/images/social-architectures/dsc02084-1.jpg" },
      { src: "/images/social-architectures/dsc02085-1.jpg" },
      { src: "/images/social-architectures/dsc02086-1.jpg" },
      { src: "/images/social-architectures/dsc03660.jpg" },
      { src: "/images/social-architectures/dsc03670.jpg" },
      { src: "/images/social-architectures/dsc03672.jpg" },
      { src: "/images/social-architectures/dsc03674.jpg" },
      { src: "/images/social-architectures/img_1803.jpg" },
      { src: "/images/social-architectures/img_1964.jpg" },
      { src: "/images/social-architectures/img_1968.jpg" },
      { src: "/images/social-architectures/img_1973.jpg" },
      { src: "/images/social-architectures/img_2942.jpg" },
      { src: "/images/social-architectures/img_4636.jpg" },
      { src: "/images/social-architectures/img_4690.jpg" },
      { src: "/images/social-architectures/img_4692.jpg" },
      { src: "/images/social-architectures/img_4694.jpg" },
      { src: "/images/social-architectures/img_7447.jpg" },
      { src: "/images/social-architectures/img_7451.jpg" },
      { src: "/images/social-architectures/photo-11.jpg" },
      { src: "/images/social-architectures/picture-9.png" },
      { src: "/images/social-architectures/thesetup.jpg" },
      { src: "/images/social-architectures/hippy.jpg" },
      { src: "/images/social-architectures/jerry-lee.jpg" },
      { src: "/images/social-architectures/lisa-hn.jpg" },
      { src: "/images/social-architectures/money-talks-ii.jpg" },
      { src: "/images/social-architectures/life-style-for-rearview-003.jpg" },
      { src: "/images/social-architectures/los_angeles_skyline_in_winter.jpg" },
      { src: "/images/social-architectures/image002.jpg" },
      { src: "/images/social-architectures/image005.gif" },
      { src: "/images/social-architectures/114054.gif" },
    ],
  },
];

function ImageTile({ item }: { item: Item }) {
  return (
    <div className="relative aspect-square bg-[var(--bg-cream)] rounded overflow-hidden border border-[var(--border-color)] hover:border-rust/40 transition-colors">
      <Image
        src={item.src}
        alt={item.caption || "Social Architectures documentation"}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        className="object-cover hover:scale-[1.03] transition-transform duration-500"
      />
    </div>
  );
}

export default function SocialArchitecturesPage() {
  const totalImages = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <Link
            href="/gallery"
            className="text-sm text-rust hover:underline no-underline mb-4 inline-block"
          >
            ← Back to Gallery
          </Link>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-medium text-text-primary mb-4">
            Social Architectures
          </h1>
          <p className="text-sm text-text-muted font-[family-name:var(--font-inter)] mb-6">
            UC San Diego MFA · 2006–2007 · {totalImages} images
          </p>
          <div className="prose max-w-2xl text-text-secondary text-base leading-relaxed space-y-4">
            <p>
              Visual documentation from a project workspace at UC San Diego
              exploring how the physical environment shapes public behavior —
              public-seating experiments, site-specific memorials, garden
              installations, and bulletin-board interventions on campus.
            </p>
            <p>
              The wiki where this work originally lived (
              <a
                href="http://socialarchitectures.pbworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rust hover:underline"
              >
                socialarchitectures.pbworks.com
              </a>
              ) is a shared workspace with classmates from the MFA program;
              not every image below is exclusively my own work. Surfacing this
              here as personal archival, in case the wiki goes offline.
            </p>
          </div>
        </header>

        {groups.map((g) => (
          <section key={g.title} className="mb-16">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-medium text-text-primary mb-2">
              {g.title}
            </h2>
            {g.description && (
              <p className="text-sm text-text-secondary mb-6 max-w-2xl leading-relaxed">
                {g.description}
              </p>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {g.items.map((item) => (
                <ImageTile key={item.src} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
