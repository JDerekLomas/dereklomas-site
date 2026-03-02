import { ImageResponse } from "next/og";

export const alt = "I Replicated 6 Quantum Computing Papers on 3 Platforms";
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
            background: "#7b7bff",
          }}
        />

        {/* Circuit-like decoration */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 40,
            fontFamily: "monospace",
            fontSize: 20,
            color: "#7b7bff",
            opacity: 0.6,
          }}
        >
          <span>|0⟩ ─── H ─── CNOT ─── M</span>
          <span style={{ marginLeft: 40, color: "#4ade80" }}>→ 93% replicated</span>
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
              background: "rgba(123, 123, 255, 0.15)",
              color: "#7b7bff",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              padding: "6px 16px",
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Research
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 48,
            fontWeight: 600,
            color: "#fdfcf9",
            fontFamily: "Georgia, serif",
            lineHeight: 1.15,
            letterSpacing: "-1px",
            marginBottom: 20,
          }}
        >
          <span>I Replicated 6 Quantum Computing</span>
          <span>Papers on 3 Platforms</span>
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
          105+ experiments across IBM, Quantum Inspire, and IQM hardware. The failures were more interesting than the successes.
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
