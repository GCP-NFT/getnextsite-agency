"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Loader2, Mail, Lock, Github, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export function AuthForm({ mode }: { mode: "sign-in" | "sign-up" }) {
  const router = useRouter();
  const { push } = useToast();
  const [pending, setPending] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 700));
    setPending(false);
    push({
      title: mode === "sign-in" ? "Welcome back" : "Account created",
      description: "Redirecting to your portal…",
      variant: "success",
    });
    router.push("/dashboard");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-2">
        <Button
          type="button"
          variant="outline"
          className="w-full rounded-full"
        >
          <Github className="h-4 w-4" /> GitHub
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-full rounded-full"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.19 3.32v2.76h3.55c2.08-1.92 3.28-4.74 3.28-8.09Zm-10.56 10.75c2.97 0 5.46-.98 7.28-2.66l-3.55-2.76c-.99.66-2.25 1.06-3.73 1.06-2.87 0-5.31-1.94-6.18-4.55H2.15v2.86A11 11 0 0 0 12 23Zm-6.18-6.91a6.6 6.6 0 0 1 0-4.18V8.05H2.15a11 11 0 0 0 0 9.9l3.67-2.86Zm12.18-6.35c1.62 0 3.07.56 4.22 1.66l3.15-3.15A11 11 0 0 0 12 1a11 11 0 0 0-9.85 6.05l3.67 2.86C6.69 7.29 9.13 5.35 12 5.35c1.68 0 3.19.58 4.38 1.53Z"
            />
          </svg>
          Google
        </Button>
      </div>

      <div className="relative py-2 text-center text-xs text-muted-foreground">
        <span className="relative z-10 bg-background px-3">or continue with email</span>
        <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border/70" />
      </div>

      {mode === "sign-up" && (
        <div>
          <Label htmlFor="name">Full name</Label>
          <div className="relative mt-1.5">
            <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              placeholder="Jane Doe"
              required
              className="pl-9"
            />
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="email">Email</Label>
        <div className="relative mt-1.5">
          <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@company.com"
            required
            className="pl-9"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          {mode === "sign-in" && (
            <button
              type="button"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </button>
          )}
        </div>
        <div className="relative mt-1.5">
          <Lock className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            minLength={8}
            className="pl-9"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={pending}
      >
        {pending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : mode === "sign-in" ? (
          "Sign in"
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  );
}
