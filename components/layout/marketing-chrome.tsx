"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { ExitIntent } from "@/components/layout/exit-intent";

const chromelessRoutes = ["/dashboard", "/sign-in", "/sign-up"];

function isChromeless(pathname: string) {
  return chromelessRoutes.some((r) => pathname.startsWith(r));
}

export function MarketingNavbar() {
  const pathname = usePathname();
  if (isChromeless(pathname)) return null;
  return <Navbar />;
}

export function MarketingFooter() {
  const pathname = usePathname();
  if (isChromeless(pathname)) return null;
  return <Footer />;
}

export function MarketingWidgets() {
  const pathname = usePathname();
  if (isChromeless(pathname)) return null;
  return (
    <>
      <WhatsAppButton />
      <StickyMobileCTA />
      <ExitIntent />
    </>
  );
}
