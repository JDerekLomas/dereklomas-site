"use client";

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const platforms = [
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Hacker News",
      href: `https://news.ycombinator.com/submitlink?u=${encoded}&t=${encodedTitle}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 0v24h24V0H0zm12.8 14.3v5.4h-1.7v-5.4L7 4.3h1.9l3 6.3 3-6.3H17l-4.2 10z" />
        </svg>
      ),
    },
    {
      name: "Reddit",
      href: `https://reddit.com/submit?url=${encoded}&title=${encodedTitle}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.344 6.314 3.516 8.484A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.108 13.622c.034.244.052.492.052.744 0 3.8-4.424 6.884-9.88 6.884S-1.6 18.166-1.6 14.366c0-.252.018-.5.052-.744a1.794 1.794 0 01-.728-1.436c0-.994.806-1.8 1.8-1.8.486 0 .926.194 1.248.508 1.232-.888 2.93-1.46 4.83-1.53l.822-3.878a.36.36 0 01.432-.27l2.74.582a1.26 1.26 0 012.368.594 1.26 1.26 0 01-2.52 0l-2.46-.524-.736 3.47c1.872.086 3.542.66 4.76 1.542.322-.312.762-.504 1.246-.504.994 0 1.8.806 1.8 1.8 0 .578-.274 1.092-.7 1.422zM8.4 13.2a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm7.2 0a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm-6.834 3.834a.36.36 0 01.508-.508c.794.794 2.082 1.18 3.726 1.18s2.932-.386 3.726-1.18a.36.36 0 11.508.508c-.938.938-2.382 1.392-4.234 1.392s-3.296-.454-4.234-1.392z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {platforms.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Share on ${p.name}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            border: "1px solid var(--border-light)",
            borderRadius: "100px",
            color: "var(--text-muted)",
            fontSize: "13px",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
        >
          {p.icon}
          {p.name}
        </a>
      ))}
    </div>
  );
}
