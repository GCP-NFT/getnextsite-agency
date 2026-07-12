import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Create your account",
  description:
    "Create your GetNextSite Agency client portal account and start building today.",
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return (
    <AuthShell>
      <h1 className="font-display text-3xl font-bold tracking-tight">
        Create your account
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        No credit card required. Start with a free consultation and configure
        your plan on the fly.
      </p>
      <div className="mt-8">
        <AuthForm mode="sign-up" />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already a client?{" "}
          <Link href="/sign-in" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
        <p className="mt-3 text-center text-[11px] text-muted-foreground">
          By creating an account you agree to our{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </AuthShell>
  );
}
