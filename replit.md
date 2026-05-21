# Palm Grove Service Villa

A warm, artsy tropical Kerala homestay website for "Palm Grove Service Villa" located in Edappally, Kochi, India.

## Run & Operate

- `pnpm --filter @workspace/palm-grove run dev` — run the website (port 22198)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion
- Fonts: Playfair Display, Cormorant Garamond, Inter (Google Fonts)
- Icons: Lucide React, React Icons
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (not yet used by the frontend)
- Build: Vite (frontend), esbuild (API)

## Where things live

- `artifacts/palm-grove/` — the Kerala homestay website
- `artifacts/palm-grove/src/components/sections/` — all page sections (Navbar, Hero, TrustBar, WelcomeSection, WhyGuestsLove, Gallery, ExploreKochi, BookYourStay, HostSection, Testimonials, ContactSection, Footer)
- `artifacts/palm-grove/src/components/ui/icons.tsx` — hand-drawn SVG illustrations (PalmTreeIcon, LeafIcon, HouseboatIcon, LotusIcon, KathakaliIcon)
- `artifacts/palm-grove/src/assets/` — generated images (hero, gallery 1-5, welcome 1-3, host, houseboat)
- `artifacts/palm-grove/src/index.css` — warm Kerala color palette + Google Fonts import
- `artifacts/api-server/` — Express API server
- `lib/api-spec/openapi.yaml` — API spec source of truth

## Architecture decisions

- Presentation-first website: no backend API calls needed; all content is static
- Color palette derived directly from Kerala earth tones (#F7F3EC cream, #5E7A4D primary green, #8B5E34 earth brown)
- Cormorant Garamond italic used for signature/handwritten-feel text
- SVG illustrations are inline components for hand-crafted artistic accents
- Framer Motion whileInView for gentle fade-in-up section animations

## Product

A single-page Kerala homestay website featuring: hero with villa photography, trust bar, welcome section, feature cards (Why Guests Love Staying Here), photo gallery, Explore Kochi nearby places, booking platform links, host profile (Francis Xavier), testimonials, contact form, and footer with Kerala house illustration.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts @import must be the very first line in index.css (before @import "tailwindcss")
- CSS custom properties use space-separated HSL values (no hsl() wrapper)
- The .font-cormorant utility class is defined in index.css for Cormorant Garamond
- @assets/ alias in vite.config.ts points to attached_assets/ at workspace root

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
