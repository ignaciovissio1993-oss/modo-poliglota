import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { LanguagePage } from "@/components/sections/language-home";

export const metadata: Metadata = {
  title: "Clases Online de Inglés Conversacional",
  description:
    "Aprendé inglés conversacional online con clases personalizadas, conversaciones reales y horarios flexibles.",
  keywords: [
    "clases online de inglés conversacional",
    "aprender inglés conversacional online",
    "profesor de inglés conversacional",
  ],
  openGraph: {
    title: "Clases Online de Inglés Conversacional",
    description:
      "Aprendé inglés conversacional online con clases personalizadas, conversaciones reales y horarios flexibles.",
    url: "https://modopoliglota.lazyvietnamese.com/m9Qv4Kp7sN2a",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnglishPage() {
  return (
    <SiteShell variant="english">
      <LanguagePage language="english" />
    </SiteShell>
  );
}
