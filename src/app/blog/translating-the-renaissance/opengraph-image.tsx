import { ImageResponse } from "next/og";

export const alt = "To Create a Second Renaissance, Translate the First";
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
            background: "#c9a86c",
          }}
        />

        {/* Latin fragment */}
        <div
          style={{
            display: "flex",
            marginBottom: 40,
            fontFamily: "Georgia, serif",
            fontSize: 22,
            color: "#c9a86c",
            fontStyle: "italic",
            opacity: 0.7,
          }}
        >
          533,000 editions printed. Fewer than 3% translated.
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
              background: "rgba(201, 168, 108, 0.15)",
              color: "#c9a86c",
              fontSize: 16,
              fontFamily: "Georgia, serif",
              padding: "6px 16px",
              borderRadius: 100,
              fontWeight: 500,
            }}
          >
            Essay
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
          <span>To Create a Second Renaissance,</span>
          <span>Translate the First</span>
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
          The first comprehensive census of untranslated Latin editions from 1450 to 1700.
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
