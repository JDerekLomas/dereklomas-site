import { ImageResponse } from "next/og";

export const alt = "Making Card Decks with AI: From Prompt to Print";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1a1612",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Accent top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "#e6a800",
          }}
        />

        {/* Card fan decoration */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 40,
          }}
        >
          {["#e6a800", "#9e4a3a", "#7c5db5", "#8b9a7d"].map((color, i) => (
            <div
              key={i}
              style={{
                width: 56,
                height: 80,
                borderRadius: 6,
                border: `2px solid ${color}`,
                background: `${color}11`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                color,
                fontFamily: "Georgia, serif",
              }}
            >
              {["I", "II", "III", "IV"][i]}
            </div>
          ))}
        </div>

        {/* Tag */}
        <div
          style={{
            display: "flex",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              background: "rgba(230, 168, 0, 0.15)",
              color: "#e6a800",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              padding: "6px 16px",
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Creative Tech
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 52,
            fontWeight: 600,
            color: "#fdfcf9",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 20,
          }}
        >
          <span>Making Card Decks with AI</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#999",
            fontFamily: "Georgia, serif",
            lineHeight: 1.4,
          }}
        >
          From prompt to print — AI artwork, web-rendered layouts, and physical production. Four decks and counting.
        </div>

        {/* Author + URL */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 80,
            right: 80,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#555",
            fontFamily: "Georgia, serif",
          }}
        >
          <span>Derek Lomas</span>
          <span>dereklomas.me</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
