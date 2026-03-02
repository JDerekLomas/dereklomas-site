import { ImageResponse } from "next/og";

export const alt = "Teaching Biology in 3D: Building Interactive Cell Viewers with Three.js";
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
            background: "#e66cc0",
          }}
        />

        {/* Cell illustration */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {["#e66cc0", "#8b9a7d", "#7c5db5", "#c9a86c", "#60a5fa"].map((color, i) => (
            <div
              key={i}
              style={{
                width: 60 + i * 8,
                height: 60 + i * 8,
                borderRadius: "50%",
                border: `3px solid ${color}`,
                opacity: 0.7 + i * 0.06,
                display: "flex",
              }}
            />
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
              background: "rgba(230, 108, 192, 0.15)",
              color: "#e66cc0",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              padding: "6px 16px",
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Education
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
          Teaching Biology in 3D
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
          Interactive cell viewers where students rotate, zoom, and click on organelles to learn how they work.
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
