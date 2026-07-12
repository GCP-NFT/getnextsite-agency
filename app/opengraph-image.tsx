import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-dynamic";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0b1120 0%, #0f172a 50%, #1e1b4b 100%)",
          color: "white",
          padding: "72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: 999,
            background: "rgba(59, 130, 246, 0.45)",
            filter: "blur(120px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: 999,
            background: "rgba(168, 85, 247, 0.45)",
            filter: "blur(140px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 30,
              color: "white",
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            GetNextSite Agency
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: 88,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 950,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Building the Future of</span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #60a5fa 0%, #c084fc 50%, #22d3ee 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Your Business Online.
          </span>
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          {["Websites", "Mobile Apps", "AI", "Marketing"].map((t) => (
            <div
              key={t}
              style={{
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(255, 255, 255, 0.09)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
