import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TextoVibe — Le CRM qui transforme vos contacts en ventes par SMS",
  description:
    "Importez vos fichiers de contacts, lancez vos campagnes SMS et automatisez vos relances. TextoVibe, le CRM qui transforme vos contacts en ventes par SMS.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${ibmPlexMono.variable} ${sourceSerif.variable}`}
    >
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
