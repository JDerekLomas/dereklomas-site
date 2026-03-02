import { ImageResponse } from "next/og";

export const alt = "Building a 1.67-Million-Page Digital Library with AI";
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
            background: "#9e4a3a",
          }}
        />

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginBottom: 40,
          }}
        >
          {[
            { num: "1.67M", label: "pages" },
            { num: "4,430", label: "books" },
            { num: "30", label: "languages" },
            { num: "$3,400", label: "total cost" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 36, fontWeight: 600, color: "#c9a86c", fontFamily: "Georgia, serif" }}>
                {stat.num}
              </div>
              <div style={{ fontSize: 16, color: "#666", fontFamily: "Georgia, serif", marginTop: 4 }}>
                {stat.label}
              </div>
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
              background: "rgba(158, 74, 58, 0.15)",
              color: "#9e4a3a",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              padding: "6px 16px",
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Building in Public
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
          <span>Building a 1.67-Million-Page</span>
          <span>Digital Library with AI</span>
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
          Gemini, Lambda workers, and MongoDB — OCR and translation for 4,430 books in 30 languages.
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
