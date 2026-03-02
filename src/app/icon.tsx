import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 4,
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
            fontSize: 18,
            fontWeight: 500,
            color: "#fdfcf9",
            letterSpacing: "-0.5px",
            marginTop: -2,
          }}
        >
          DL
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 3,
            left: 4,
            right: 4,
            height: 2,
            borderRadius: 1,
            background: "#9e4a3a",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
