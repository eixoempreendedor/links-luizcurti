import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

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
  description: "Seu negócio não precisa de mais esforço. Precisa de trabalho certo. Conheça a Operação 7D, o Desafio Empreendedor e o Eixo CEO.",
  openGraph: {
    title: "Luiz Curti | Links",
    description: "Consultor de Resultados Empresariais — Operação 7D, Desafio Empreendedor, Eixo CEO",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
