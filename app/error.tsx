"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-xl rounded-2xl border border-destructive/20 bg-destructive/5 p-8 text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-destructive/15 text-destructive">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-semibold">
            Something went wrong
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            We logged the issue. Try refreshing — if it keeps happening, let us
            know.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <Button onClick={() => reset()} variant="gradient">
              <RotateCcw className="h-4 w-4" /> Try again
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="h-4 w-4" /> Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
