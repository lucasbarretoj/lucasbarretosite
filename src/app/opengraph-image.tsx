import { ImageResponse } from "next/og";

export const alt = "Lucas Barreto, estratégia de crescimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#080a09", color: "#f4f7f5", fontFamily: "sans-serif" }}>
      <div style={{ color: "#38d9a9", fontSize: 24, letterSpacing: 6, textTransform: "uppercase" }}>Estratégia · Mídia · Dados</div>
      <div style={{ marginTop: 32, maxWidth: 900, fontSize: 78, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Crescimento previsível, sem achismo.</div>
      <div style={{ marginTop: 48, fontSize: 30 }}>Lucas Barreto.</div>
    </div>,
    size,
  );
}
