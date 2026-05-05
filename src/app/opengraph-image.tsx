import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Positive AI & Digital Humanities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const headshotData = await readFile(
    join(process.cwd(), "public/images/headshot.png")
  );
  const headshotSrc = `data:image/png;base64,${headshotData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#1a1612",
          display: "flex",
          alignItems: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Decorative top border */}
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

        {/* Headshot */}
        <img
          src={headshotSrc}
          width={240}
          height={240}
          style={{
            borderRadius: 120,
            border: "4px solid rgba(158, 74, 58, 0.6)",
            objectFit: "cover",
          }}
        />

        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 60,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 600,
              color: "#fdfcf9",
              fontFamily: "Georgia, serif",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Derek Lomas
          </div>

          {/* Rust accent line */}
          <div
            style={{
              width: 80,
              height: 4,
              background: "#9e4a3a",
              borderRadius: 2,
              marginTop: 24,
              marginBottom: 24,
            }}
          />

          <div
            style={{
              fontSize: 30,
              color: "#c9a86c",
              fontFamily: "Georgia, serif",
              lineHeight: 1.3,
            }}
          >
            AI, Education & Digital Humanities
          </div>

          <div
            style={{
              fontSize: 22,
              color: "#999",
              fontFamily: "Georgia, serif",
              lineHeight: 1.5,
              marginTop: 16,
            }}
          >
            Tenured Assistant Professor of Positive AI at TU Delft
          </div>
        </div>

        {/* URL at bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 80,
            fontSize: 18,
            color: "#555",
            fontFamily: "Georgia, serif",
            letterSpacing: "0.5px",
          }}
        >
          dereklomas.me
        </div>
      </div>
    ),
    { ...size }
  );
}
