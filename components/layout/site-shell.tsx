import { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

type SiteShellVariant = "default" | "english" | "vietnamese";

export function SiteShell({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: SiteShellVariant;
}) {
  const isPrivateLanguagePage = variant !== "default";

  return (
    <>
      <Header disableHomeLink={isPrivateLanguagePage} />
      <main>{children}</main>
      <Footer variant={variant} />
      <FloatingWhatsApp />
    </>
  );
}
