/**
 * Schema.org JSON-LD structured data components.
 * Renders <script type="application/ld+json"> for rich search results.
 */

const BASE_URL = "https://dereklomas.me";

/** Site-wide Person + WebSite schema — render once in root layout */
export function SiteSchema() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/#person`,
    name: "Derek Lomas",
    url: BASE_URL,
    jobTitle: "Tenured Assistant Professor of Positive AI",
    worksFor: {
      "@type": "Organization",
      name: "TU Delft",
      url: "https://www.tudelft.nl",
    },
    sameAs: [
      "https://github.com/JDerekLomas",
      "https://scholar.google.com/citations?user=6lQ7gMkAAAAJ",
      "https://x.com/dereklomas",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Human-Centered Design",
      "Educational Technology",
      "Digital Humanities",
      "Positive Computing",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Derek Lomas",
    description:
      "Tenured assistant professor of Positive AI at TU Delft. Enhancing wellbeing through AI, education, and humanistic design.",
    author: { "@id": `${BASE_URL}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

/** Blog post schema — render in each blog post page */
export function BlogPostSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  const url = `${BASE_URL}/blog/${slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image: `${url}/opengraph-image`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: { "@id": `${BASE_URL}/#person` },
    publisher: { "@id": `${BASE_URL}/#person` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
