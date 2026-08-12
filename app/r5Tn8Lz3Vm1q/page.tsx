import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { LanguagePage } from "@/components/sections/language-home";

export const metadata: Metadata = {
  title: "Clases Online de Vietnamita",
  description:
    "Aprendé vietnamita online con una profesora nativa, clases personalizadas y horarios flexibles.",
  keywords: [
    "clases online de vietnamita",
    "aprender vietnamita online",
    "profesora nativa de vietnamita",
  ],
  openGraph: {
    title: "Clases Online de Vietnamita",
    description:
      "Aprendé vietnamita online con una profesora nativa, clases personalizadas y horarios flexibles.",
    url: "https://modopoliglota.lazyvietnamese.com/r5Tn8Lz3Vm1q",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function VietnamesePage() {
  return (
    <SiteShell variant="vietnamese">
      <LanguagePage language="vietnamese" />
    </SiteShell>
  );
}
