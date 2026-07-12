import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 font-display font-bold tracking-tight",
        className,
      )}
      aria-label="GetNextSite Agency — Home"
    >
      <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
        <span className="absolute inset-0 bg-gradient-to-br from-brand-500 via-purple-500 to-brand-400" />
        <span className="absolute inset-[1px] rounded-[7px] bg-background/90" />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="relative h-4 w-4"
          aria-hidden
        >
          <path
            d="M4 20V4l16 16V4"
            stroke="url(#logoG)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="logoG" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="hsl(221, 83%, 53%)" />
              <stop offset="0.5" stopColor="hsl(262, 83%, 58%)" />
              <stop offset="1" stopColor="hsl(195, 83%, 55%)" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      {showText && (
        <span className="text-lg leading-none">
          Get<span className="text-gradient-brand">NextSite</span>
        </span>
      )}
    </Link>
  );
}
