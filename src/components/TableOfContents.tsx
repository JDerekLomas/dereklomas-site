"use client";

import { useState } from "react";

type Section = { id: string; title: string };

export default function TableOfContents({
  sections,
}: {
  sections: Section[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="font-sans"
      style={{
        border: "1px solid var(--border-light)",
        borderRadius: "8px",
        padding: open ? "16px 20px" : "12px 20px",
        marginBottom: "2em",
        background: "var(--bg-warm)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--text-secondary)",
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
        }}
      >
        Table of Contents
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {open && (
        <ol
          style={{
            margin: "12px 0 0",
            padding: "0 0 0 1.25em",
            listStyleType: "decimal",
            fontSize: "15px",
            lineHeight: "1.8",
          }}
        >
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
