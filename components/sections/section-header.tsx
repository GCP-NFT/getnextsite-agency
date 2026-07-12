import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <FadeIn>
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            {eyebrow}
          </Badge>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.1}>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
