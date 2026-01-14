import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = `${site.name} - ${site.headline}`;
export const size = { width: 1200, height: 630 };

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b0f14 0%, #122233 100%)",
          color: "#e2e8f0",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Arial"
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 28, marginTop: 12, color: "#94a3b8" }}>
          {site.headline}
        </div>
        <div style={{ fontSize: 22, marginTop: 24, maxWidth: 720 }}>
          {site.heroTagline}
        </div>
      </div>
    ),
    size
  );
}
