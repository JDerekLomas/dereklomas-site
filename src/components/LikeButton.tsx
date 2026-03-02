"use client";

import { useState, useEffect } from "react";

export default function LikeButton({ slug }: { slug: string }) {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(`like:${slug}`) === "1");
  }, [slug]);

  function toggle() {
    const next = !liked;
    setLiked(next);
    setAnimate(true);
    if (next) {
      localStorage.setItem(`like:${slug}`, "1");
    } else {
      localStorage.removeItem(`like:${slug}`);
    }
    setTimeout(() => setAnimate(false), 400);
  }

  return (
    <button
      onClick={toggle}
      aria-label={liked ? "Unlike this post" : "Like this post"}
      className="like-button"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        border: "1px solid var(--border-light)",
        borderRadius: "100px",
        background: liked ? "rgba(158, 74, 58, 0.08)" : "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        color: liked ? "var(--accent-rust)" : "var(--text-muted)",
        transition: "all 0.2s",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={liked ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        style={{
          transform: animate ? "scale(1.3)" : "scale(1)",
          transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>
      {liked ? "Liked" : "Like this post"}
    </button>
  );
}
