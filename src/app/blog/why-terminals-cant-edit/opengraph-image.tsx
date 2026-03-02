import { ImageResponse } from "next/og";

export const alt =
  "Why You Can't Click to Place Your Cursor in a Terminal";
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
        {/* Rust accent top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "#9e4a3a",
          }}
        />

        {/* Terminal mockup */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#0d0b09",
            borderRadius: 12,
            padding: "24px 32px",
            marginBottom: 40,
            border: "1px solid #333",
          }}
        >
          {/* Window dots */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#ff5f57",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#febc2e",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#28c840",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 24,
              lineHeight: 1.5,
              display: "flex",
            }}
          >
            <span style={{ color: "#60a5fa" }}>derek@mac</span>
            <span style={{ color: "#888", margin: "0 6px" }}>:</span>
            <span style={{ color: "#c9a86c" }}>~</span>
            <span style={{ color: "#888", margin: "0 8px" }}>$</span>
            <span style={{ color: "#4ade80" }}>git commit -m &quot;fix the</span>
            <span
              style={{
                color: "#4ade80",
                borderLeft: "2px solid #4ade80",
                marginLeft: 1,
                animation: "blink 1s infinite",
              }}
            />
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
          <span>Why You Can&apos;t Click to Place</span>
          <span>Your Cursor in a Terminal</span>
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
          The 1978 architecture decision that still shapes how 50M developers
          work.
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
