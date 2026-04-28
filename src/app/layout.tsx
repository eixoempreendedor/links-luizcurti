import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { GTMHead, GTMBody } from "@/components/GTM";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luiz Curti | Consultor de Resultados Empresariais",
  description:
    "Construindo o sistema operacional do empresário brasileiro. Sem palestra. Lado a lado. Comece pelo Mapa Eixo Lite (5 min, gratuito).",
  openGraph: {
    title: "Luiz Curti | Links",
    description:
      "Construindo o sistema operacional do empresário brasileiro — Desafio Empreendedor (turmas), Mapa Eixo Lite, Carta do Eixo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body><GTMHead /><GTMBody />{children}</body>
    </html>
  );
}
