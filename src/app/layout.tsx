import type { Metadata } from "next";
import { Bebas_Neue, Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import JsonLd from "@/components/JsonLd";

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
    // Bajo 60 chars para que Google/Bing no lo trunquen en SERPs.
    // Tagline canónica del site mantiene la identidad de marca; la promesa
    // de "comunidad más grande de Latinoamérica" vive en la description.
    default: "Dribble Bros. — Más que baloncesto. Cultura.",
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
  alternates: {
    canonical: "https://dribblebros.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_PR",
    url: "https://dribblebros.com",
    siteName: "Dribble Bros.",
    title: "Dribble Bros. — Baloncesto. Cultura. Impacto.",
    description:
      "La comunidad de baloncesto hispana más grande de Latinoamérica. 900M+ views all time.",
    // OG image default para todo el site. Sub-pages pueden override con
    // su propio openGraph.images. db-face es la imagen más reconocible
    // de la marca; no es 1200x630 ideal pero es un PNG cuadrado de alta
    // resolución que Facebook/Twitter/LinkedIn croppean razonable.
    images: [
      {
        url: "/logos/db-face.png",
        width: 1218,
        height: 1249,
        alt: "Dribble Bros. — Tío Danny + Bryan Nelson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dribble Bros.",
    description: "900M+ views all time. La voz del baloncesto hispano.",
    images: ["/logos/db-face.png"],
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
        <JsonLd />
        <LenisProvider>{children}</LenisProvider>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","wfabi5po1a");`}
        </Script>
      </body>
    </html>
  );
}
