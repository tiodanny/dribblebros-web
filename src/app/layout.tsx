import type { Metadata } from "next";
import { Bebas_Neue, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dribblebros.com"),
  title: {
    default: "Dribble Bros. — La comunidad de baloncesto hispana más grande de Latinoamérica",
    template: "%s · Dribble Bros.",
  },
  description:
    "900M+ views all time. 1M+ seguidores. Cero pauta. Desde Puerto Rico para toda Latinoamérica. Fundada por Tío Danny y Bryan Nelson en 2021.",
  keywords: [
    "Dribble Bros.",
    "baloncesto hispano",
    "basketball Puerto Rico",
    "contenido deportivo",
    "creador latino",
    "Tío Danny",
    "Bryan Nelson",
  ],
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com",
    siteName: "Dribble Bros.",
    title: "Dribble Bros. — Baloncesto. Cultura. Impacto.",
    description:
      "La comunidad de baloncesto hispana más grande de Latinoamérica. 900M+ views all time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dribble Bros.",
    description: "900M+ views all time. La voz del baloncesto hispano.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebas.variable} ${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-white grain">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
