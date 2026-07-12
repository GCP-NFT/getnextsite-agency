# GetNextSite Agency — Website

A production-ready, enterprise-grade Next.js 15 marketing & sales site for GetNextSite Agency.

## Stack

- **Next.js 15** (App Router, Server Components, Server Actions)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS** + custom design system tokens
- **shadcn/ui**-style primitives (Radix + `class-variance-authority`)
- **Framer Motion** for animation
- **React Hook Form** + **Zod** for forms & validation
- **Embla Carousel** for testimonials
- **React CountUp** + **Intersection Observer** for stats
- **next-themes** for dark/light
- SEO: dynamic Metadata API, Open Graph, Twitter, JSON-LD (Organization, WebSite, Service, FAQ, Breadcrumb), sitemap, robots

## Getting started

```bash
# install
npm install          # or pnpm install / yarn

# dev
npm run dev          # http://localhost:3000

# production build
npm run build && npm start

# typecheck / lint
npm run typecheck
npm run lint
```

> The project targets `pnpm`. If pnpm is unavailable, `npm` works out of the box.
> Enable pnpm with `corepack enable && corepack prepare pnpm@latest --activate` (may require admin on Windows).

## Environment

Copy `.env.example` → `.env.local` and adjust:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Structure

```
app/                # App Router — routes, layout, sitemap, robots
components/
  layout/           # navbar, footer, mobile-nav, whatsapp, scroll-progress
  ui/               # button, card, dialog, tabs, accordion, input, ...
  sections/         # hero, services, pricing preview, testimonials, ...
  forms/            # contact, invoice-request-dialog, booking, newsletter
  pricing/          # interactive pricing calculator
  portfolio/        # animated filter grid
  animations/       # fade-in, counter
  providers/        # theme provider
data/               # mock content (services, industries, portfolio, faq, ...)
schemas/            # zod schemas
actions/            # server actions
config/             # site config (nav, contact, social, footer)
lib/                # utils, seo helpers
```

## Backend integration (future)

Server Actions in `actions/` are wired to zod schemas and simulate a network call — plug in Resend, Supabase, Prisma, Clerk, Stripe, or Payload CMS behind them.

## Deployment

Zero-config on **Vercel**. Push to a repo, import, done.

## Design

- 8-point spacing scale
- Consistent radius (`--radius: 0.75rem`)
- Aurora gradients, glassmorphism, animated grid backgrounds
- Fully WCAG-AA compliant (skip link, focus states, reduced-motion, semantic HTML)
- Dark mode is the default; system-aware via `next-themes`
