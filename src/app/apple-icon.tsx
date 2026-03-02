import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 36,
          background: "#1a1612",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 96,
            fontWeight: 500,
            color: "#fdfcf9",
            letterSpacing: "-3px",
            marginTop: -8,
          }}
        >
          DL
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 24,
            right: 24,
            height: 8,
            borderRadius: 4,
            background: "#9e4a3a",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
