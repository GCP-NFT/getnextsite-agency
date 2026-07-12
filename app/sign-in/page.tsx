import type { Metadata } from "next";
import Link from "next/link";
import { AuthShell } from "@/components/auth/auth-shell";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your GetNextSite Agency client portal.",
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <AuthShell>
      <h1 className="font-display text-3xl font-bold tracking-tight">
        Welcome back
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Sign in to your GetNextSite client portal to manage your projects, invoices
        and support tickets.
      </p>
      <div className="mt-8">
        <AuthForm mode="sign-in" />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/sign-up" className="font-semibold text-primary hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
