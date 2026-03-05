# Web Designer Portfolio Landing Page — Complete Documentation

**Version:** 1.0.0  
**Design:** Dark Premium Agency  
**Framework:** React 19 + TypeScript + Tailwind CSS 4 + Vite  
**Status:** Production-Ready

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Design Philosophy](#design-philosophy)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Setup & Installation](#setup--installation)
6. [Configuration Files](#configuration-files)
7. [Component Documentation](#component-documentation)
8. [Styling System](#styling-system)
9. [Asset URLs](#asset-urls)
10. [Deployment](#deployment)
11. [Customization Guide](#customization-guide)

---

## Project Overview

A high-converting portfolio landing page for a freelance web designer specializing in niche business websites. The site showcases work across five industries (Church, Law Firm, Accounting, Roofing, Home Services) and is designed to convert business owners into leads through strategic positioning, social proof, and clear calls-to-action.

**Key Features:**
- Dark premium aesthetic with emerald green accents
- Frosted glass navigation and portfolio cards
- Scroll-triggered fade-up animations
- 5 AI-generated niche website mockups
- Responsive grid layout (mobile-first)
- Optimized for conversion with dual CTAs
- Plus Jakarta Sans + Space Grotesk typography

---

## Design Philosophy

### Design Movement
**Dark Premium Agency** — High-end digital agency aesthetic inspired by Awwwards-winning studios.

### Core Principles
1. **Dark Canvas** — Near-black background (#0D0D0D) signals premium quality
2. **Emerald Accents** — Green CTAs (#10B981) represent growth and ROI
3. **Gradient Mesh** — Subtle depth effects without clutter
4. **Typography Hierarchy** — Plus Jakarta Sans for warmth and modernity

### Color Palette
| Color | Value | Usage |
|-------|-------|-------|
| Background | `oklch(0.09 0.005 260)` | Main canvas |
| Foreground | `oklch(0.94 0.005 80)` | Text (warm white) |
| Primary (Emerald) | `oklch(0.70 0.17 162)` | CTAs, accents, highlights |
| Card Surface | `oklch(0.12 0.006 260)` | Frosted glass cards |
| Border | `oklch(1 0 0 / 10%)` | Subtle dividers |

### Typography
- **Display Font:** Plus Jakarta Sans (300–800 weights)
- **Body Font:** Plus Jakarta Sans (400–600 weights)
- **Labels/Metadata:** Space Grotesk (400–600 weights)

### Signature Elements
- Frosted glass cards with border glow on hover
- Gradient mesh blobs in hero and CTA sections
- Pill-shaped trust badges
- Scroll-triggered fade-up animations
- Magnetic hover effects on buttons

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend Framework** | React 19.2.1 |
| **Language** | TypeScript 5.6.3 |
| **Styling** | Tailwind CSS 4.1.14 |
| **Build Tool** | Vite 7.1.7 |
| **Router** | Wouter 3.3.5 |
| **UI Components** | shadcn/ui (Radix UI) |
| **Icons** | Lucide React 0.453.0 |
| **Animations** | Framer Motion 12.23.22 |
| **Server (Production)** | Express 4.21.2 |
| **Package Manager** | pnpm 10.4.1 |

---

## Project Structure

```
designfolio/
├── client/
│   ├── index.html                 # Entry HTML
│   ├── src/
│   │   ├── main.tsx              # React entry point
│   │   ├── App.tsx               # Root component with routing
│   │   ├── index.css             # Global styles + design tokens
│   │   ├── pages/
│   │   │   ├── Home.tsx          # Main landing page
│   │   │   └── NotFound.tsx      # 404 page
│   │   ├── components/
│   │   │   ├── Navbar.tsx        # Sticky frosted glass navbar
│   │   │   ├── HeroSection.tsx   # Hero with gradient mesh
│   │   │   ├── PortfolioSection.tsx # 5 niche mockups
│   │   │   ├── AboutSection.tsx  # Positioning + pillars
│   │   │   ├── WhySection.tsx    # 6 differentiators
│   │   │   ├── TestimonialsSection.tsx # Client quotes
│   │   │   ├── CTASection.tsx    # Closing CTA
│   │   │   ├── Footer.tsx        # Footer with links
│   │   │   ├── ErrorBoundary.tsx # Error handling
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # Theme management
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts # Scroll animations
│   │   └── lib/
│   │       └── utils.ts          # Utility functions
│   └── public/                    # Static assets (favicon, robots.txt)
├── server/
│   └── index.ts                  # Express server (production)
├── shared/
│   └── const.ts                  # Shared constants
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript config
├── components.json              # shadcn/ui config
└── ideas.md                     # Design brainstorm

```

---

## Setup & Installation

### Prerequisites
- Node.js 18+ (recommended 22.13.0)
- pnpm 10.4.1+ (or npm/yarn)

### Step 1: Clone/Create Project

```bash
# If starting fresh:
mkdir designfolio
cd designfolio

# Or clone existing repo:
git clone <repo-url>
cd designfolio
```

### Step 2: Install Dependencies

```bash
pnpm install
# or: npm install / yarn install
```

### Step 3: Start Development Server

```bash
pnpm dev
# Server runs on http://localhost:3000
```

### Step 4: Build for Production

```bash
pnpm build
# Outputs to dist/public (static) + dist/index.js (server)
```

### Step 5: Run Production Build

```bash
pnpm start
# Starts Express server on port 3000 (or $PORT env var)
```

---

## Configuration Files

### package.json

```json
{
  "name": "designfolio",
  "version": "1.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "preview": "vite preview --host",
    "check": "tsc --noEmit",
    "format": "prettier --write ."
  },
  "dependencies": {
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "typescript": "5.6.3",
    "tailwindcss": "^4.1.14",
    "wouter": "^3.3.5",
    "framer-motion": "^12.23.22",
    "lucide-react": "^0.453.0",
    "express": "^4.21.2"
  }
}
```

### vite.config.ts

```typescript
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
```

### tsconfig.json

```json
{
  "include": ["client/src/**/*", "shared/**/*", "server/**/*"],
  "exclude": ["node_modules", "build", "dist"],
  "compilerOptions": {
    "incremental": true,
    "noEmit": true,
    "module": "ESNext",
    "strict": true,
    "lib": ["esnext", "dom", "dom.iterable"],
    "jsx": "preserve",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./client/src/*"],
      "@shared/*": ["./shared/*"]
    }
  }
}
```

### components.json (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "client/src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

---

## Component Documentation

### 1. Navbar.tsx

**Purpose:** Sticky frosted glass navigation with logo, nav links, and CTA button.

**Features:**
- Sticky positioning with scroll-triggered frosted glass effect
- Mobile hamburger menu
- Logo with emerald badge
- Responsive nav links
- Primary CTA button

**Key Props:** None (self-contained)

**Styling:** Frosted glass background, emerald accents, smooth transitions

---

### 2. HeroSection.tsx

**Purpose:** Full-width hero with gradient mesh background, headline, dual CTAs, and trust stats.

**Features:**
- Gradient mesh blob background (CDN image)
- Animated headline with emerald accent
- Dual CTAs: "View My Work" + "Request a Free Consultation"
- 4 trust stats with staggered animations
- Scroll indicator

**Key Props:** None (self-contained)

**Styling:** Dark background, emerald accents, fade-up animations

**Image URL:** `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/hero-bg-4EbkCpe3EtXsBG3KnXyDxj.webp`

---

### 3. PortfolioSection.tsx

**Purpose:** Grid showcase of 5 niche website mockups with strategy descriptions.

**Features:**
- 3-column responsive grid (mobile: 1 col, tablet: 2 cols, desktop: 3 cols)
- Frosted glass cards with hover effects
- Niche tags (Church, Law Firm, Accounting, Roofing, Home Services)
- Color palette dots per project
- Design strategy + conversion goal per card

**Key Props:** None (self-contained)

**Mockup URLs:**
- Church: `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-church-H8ZxS9FYDXDkY3bm4BCEfE.webp`
- Law Firm: `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-lawfirm-9oMbkJ5SJ2AtFASCPkkPef.webp`
- Accounting: `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-accounting-V5SnqHxDoseDBycvheze9b.webp`
- Roofing: `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-roofing-TRrHFRQkT3yFCxzwnZQEb2.webp`
- Home Services: `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-homeservices-PXFxNXddj8KdhsKrriDSfk.webp`

---

### 4. AboutSection.tsx

**Purpose:** Positioning statement + 4 conversion pillars.

**Features:**
- Left column: Positioning copy + niche tags
- Right column: 4 pillar cards (Industry Research, Conversion-First, Mobile, Speed)
- Light background for visual rhythm contrast
- Hover effects on pillar cards

**Key Props:** None (self-contained)

---

### 5. WhySection.tsx

**Purpose:** 6 differentiators explaining why to work with the designer.

**Features:**
- 3-column grid (responsive)
- Icon + title + description per card
- Hover shadow effects
- Staggered fade-up animations

**Key Props:** None (self-contained)

---

### 6. TestimonialsSection.tsx

**Purpose:** 3 client testimonials with ratings and company info.

**Features:**
- Frosted glass cards
- 5-star ratings
- Client name, role, company, niche tag
- Gradient mesh background blobs

**Key Props:** None (self-contained)

---

### 7. CTASection.tsx

**Purpose:** Closing call-to-action with gradient mesh and dual buttons.

**Features:**
- Bold headline: "Your Next Client Is One Great Website Away"
- Dual CTAs: "Start Your Project" + "Book a Free Consultation"
- Trust line with checkmarks
- Gradient mesh background

**Key Props:** None (self-contained)

---

### 8. Footer.tsx

**Purpose:** Minimal footer with logo, nav links, and contact.

**Features:**
- Logo + branding
- Nav links (Work, About, Why Me, Testimonials, Contact)
- Email contact
- Copyright notice

**Key Props:** None (self-contained)

---

### 9. Home.tsx

**Purpose:** Main landing page assembling all sections.

**Features:**
- Scroll animation observer (IntersectionObserver)
- Section order: Navbar → Hero → Portfolio → About → Why → Testimonials → CTA → Footer
- Fade-up animations on scroll

**Key Props:** None (self-contained)

---

## Styling System

### Global CSS (index.css)

```css
/* Design Philosophy: Dark Premium Agency */

:root {
  --radius: 0.75rem;
  --background: oklch(0.09 0.005 260);
  --foreground: oklch(0.94 0.005 80);
  --primary: oklch(0.70 0.17 162);  /* Emerald */
  --border: oklch(1 0 0 / 10%);
  /* ... more tokens */
}

/* Frosted glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Emerald glow button */
.btn-emerald {
  background: oklch(0.70 0.17 162);
  color: oklch(0.09 0.005 260);
  font-weight: 700;
  box-shadow: 0 0 0 0 oklch(0.70 0.17 162 / 0.4);
  transition: all 0.2s ease;
}

.btn-emerald:hover {
  background: oklch(0.75 0.18 162);
  box-shadow: 0 8px 30px oklch(0.70 0.17 162 / 0.35);
  transform: translateY(-1px);
}

/* Scroll fade-up animation */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Tailwind Utilities

The site uses Tailwind CSS 4 with custom OKLCH color tokens. Key utilities:

- `bg-background` / `text-foreground` — Dark canvas + warm text
- `glass-card` — Frosted glass effect
- `btn-emerald` / `btn-ghost-white` — Button styles
- `fade-up` — Scroll animation trigger
- `section-label` — Uppercase label styling
- `container` — Auto-centered content with responsive padding

---

## Asset URLs

All images are hosted on CDN and tied to the website lifecycle:

| Asset | URL |
|-------|-----|
| Hero Background | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/hero-bg-4EbkCpe3EtXsBG3KnXyDxj.webp` |
| Church Mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-church-H8ZxS9FYDXDkY3bm4BCEfE.webp` |
| Law Firm Mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-lawfirm-9oMbkJ5SJ2AtFASCPkkPef.webp` |
| Accounting Mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-accounting-V5SnqHxDoseDBycvheze9b.webp` |
| Roofing Mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-roofing-TRrHFRQkT3yFCxzwnZQEb2.webp` |
| Home Services Mockup | `https://d2xsxph8kpxj0f.cloudfront.net/310519663404495687/PRrKDUxQVLQGRaNXG8kGuM/mockup-homeservices-PXFxNXddj8KdhsKrriDSfk.webp` |

**Note:** These URLs are specific to the Manus platform. When replicating elsewhere, replace with your own CDN URLs or local asset paths.

---

## Deployment

### Manus Platform (Recommended)

The project is built and deployed via Manus. No additional setup required.

### Self-Hosted (Docker / VPS)

```bash
# 1. Build the project
pnpm build

# 2. Set environment variables
export NODE_ENV=production
export PORT=3000

# 3. Start the server
pnpm start
```

### Vercel / Netlify

For static deployment (remove Express server):

```bash
# 1. Build static output only
vite build

# 2. Deploy dist/public to Vercel/Netlify
```

### Docker

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["pnpm", "start"]
```

---

## Customization Guide

### 1. Update Branding

**File:** `client/src/components/Navbar.tsx` (line ~20)

```typescript
// Change from:
<span className="font-bold text-lg text-white tracking-tight">JD Studio</span>

// To:
<span className="font-bold text-lg text-white tracking-tight">Your Company Name</span>
```

**File:** `client/src/components/Footer.tsx` (line ~15)

```typescript
// Update logo text and copyright
```

### 2. Update Contact Email

**Files to update:**
- `client/src/components/CTASection.tsx` (line ~27, ~32)
- `client/src/components/Footer.tsx` (line ~27)

```typescript
// Change from:
href="mailto:hello@jdstudio.com"

// To:
href="mailto:your-email@example.com"
```

### 3. Update Hero Stats

**File:** `client/src/components/HeroSection.tsx` (line ~10)

```typescript
const stats = [
  { value: "50+", label: "Websites Delivered" },
  { value: "12", label: "Industries Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3×", label: "Avg. Lead Increase" },
];

// Update with your actual numbers
```

### 4. Update Portfolio Projects

**File:** `client/src/components/PortfolioSection.tsx` (line ~10)

```typescript
const projects = [
  {
    image: "YOUR_IMAGE_URL",
    niche: "Your Niche",
    title: "Project Name",
    palette: ["#color1", "#color2", "#color3"],
    strategy: "Your strategy description...",
    goal: "Your conversion goal...",
    tag: "Category",
  },
  // Add more projects
];
```

### 5. Update Testimonials

**File:** `client/src/components/TestimonialsSection.tsx` (line ~10)

```typescript
const testimonials = [
  {
    quote: "Your testimonial text...",
    name: "Client Name",
    role: "Title",
    company: "Company Name",
    niche: "Industry",
    rating: 5,
  },
  // Add more testimonials
];
```

### 6. Update Colors

**File:** `client/src/index.css` (line ~60)

```css
:root {
  --primary: oklch(0.70 0.17 162);  /* Change emerald to your color */
  --background: oklch(0.09 0.005 260);  /* Change background */
  /* ... update other colors */
}
```

### 7. Replace Images

Replace CDN URLs in components with your own:

```typescript
// Before:
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/...";

// After:
const HERO_BG = "https://your-cdn.com/hero-bg.webp";
```

### 8. Add New Sections

Create a new component in `client/src/components/`:

```typescript
export default function NewSection() {
  return (
    <section id="new-section" className="py-24 bg-[oklch(0.09_0.005_260)]">
      <div className="container">
        {/* Your content */}
      </div>
    </section>
  );
}
```

Then import and add to `client/src/pages/Home.tsx`:

```typescript
import NewSection from "@/components/NewSection";

// In Home component:
<NewSection />
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=https://your-analytics.com
VITE_ANALYTICS_WEBSITE_ID=your-site-id

# Server
PORT=3000
NODE_ENV=development
```

---

## Performance Optimization

### Image Optimization

All images are served as WebP (compressed) from CDN:
- Hero background: 1536×1024px, ~150KB
- Mockups: 1024×1536px, ~200KB each

### Code Splitting

Vite automatically code-splits:
- Components are lazy-loaded on route changes
- CSS is scoped and tree-shaken

### Lighthouse Scores

Target metrics:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Port Already in Use

```bash
# Use a different port
PORT=3001 pnpm dev
```

### Images Not Loading

- Verify CDN URLs are correct
- Check CORS headers on CDN
- Use browser DevTools Network tab to debug

### Styles Not Applied

- Clear browser cache (Cmd+Shift+R)
- Verify Tailwind CSS is imported in `index.css`
- Check for CSS specificity conflicts

---

## License

MIT License — Free to use and modify.

---

## Support & Questions

For issues or questions:
1. Check the troubleshooting section above
2. Review component documentation
3. Inspect browser console for errors
4. Check network tab for failed asset loads

---

**Last Updated:** March 5, 2026  
**Checkpoint Version:** cf8b63a5
