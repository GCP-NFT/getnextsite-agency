import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-70" />
      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-display text-7xl font-bold text-gradient-brand sm:text-9xl">
            404
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            This page took a detour.
          </h1>
          <p className="mt-4 text-muted-foreground">
            The link is broken or the page has moved. Let's get you back on
            course.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <Button asChild variant="gradient" size="lg">
              <Link href="/">
                Back to home <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
