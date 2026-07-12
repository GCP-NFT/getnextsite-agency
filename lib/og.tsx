import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function renderOG({
  eyebrow,
  title,
  accent,
  tag,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  tag?: string;
}) {
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
          padding: 72,
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
            background: accent ?? "rgba(59, 130, 246, 0.45)",
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
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>
            GetNextSite Agency
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 22,
            textTransform: "uppercase",
            letterSpacing: 4,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.6,
            maxWidth: 1000,
            display: "flex",
          }}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #c4b5fd 60%, #67e8f9 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {title}
          </span>
        </div>

        {tag && (
          <div
            style={{
              marginTop: 28,
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 22px",
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.09)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              fontSize: 22,
              fontWeight: 500,
              width: "fit-content",
            }}
          >
            {tag}
          </div>
        )}
      </div>
    ),
    ogSize,
  );
}
