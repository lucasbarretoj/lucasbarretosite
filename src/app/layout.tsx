import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Lucas Barreto | Estratégia de crescimento",
    template: "%s | Lucas Barreto",
  },
  description:
    "Estratégia, mídia paga e dados para negócios que buscam crescer com previsibilidade.",
  applicationName: "Lucas Barreto",
  keywords: ["estratégia de crescimento", "mídia paga", "marketing digital", "performance", "dados"],
  authors: [{ name: "Lucas Barreto" }],
  creator: "Lucas Barreto",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Lucas Barreto | Estratégia de crescimento",
    description: "Estratégia, mídia paga e dados para negócios que buscam crescer com previsibilidade.",
    siteName: "Lucas Barreto",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Barreto | Estratégia de crescimento",
    description: "Estratégia, mídia paga e dados para negócios que buscam crescer com previsibilidade.",
  },
  robots: { index: true, follow: true },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
