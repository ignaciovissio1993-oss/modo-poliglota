import type { Metadata } from "next";
import { ReactNode } from "react";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Clases Online de Vietnamita e Inglés | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "clases online de vietnamita",
    "clases online de inglés conversacional",
    "aprender vietnamita online",
    "aprender inglés conversacional online",
    "profesor de vietnamita",
    "profesor de inglés conversacional",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
