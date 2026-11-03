# Ashish Rai — Portfolio & Systems Architecture

A production-grade, modern portfolio website built for **Ashish Rai**, Senior Frontend Engineer at **Tuppl** and postgraduate aspirant in **Cyber Security (DevSecOps & Secure Software Engineering)**.

## 🛠️ Architecture & Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with React 19 & App Router (Static Site Generation + Server Component Boundaries).
- **Language**: TypeScript (Strict Mode).
- **Styling**: Tailwind CSS v4 with bespoke mineral tokens (Obsidian, Titanium, Phosphor Teal) avoiding generic AI templates.
- **Animations & Micro-interactions**:
  - [Framer Motion](https://www.framer.com/motion/) for physics-based spring animations, route transitions, and staggered view reveals.
  - Interactive GPU-accelerated background particle mesh (`<BackgroundMesh />`) reacting to cursor parallax.
  - 3D perspective tilt cards (`<TiltCard />`) with dynamic specular glare.
  - Magnetic cursor tracking buttons (`<Magnetic />`).
  - [Lenis](https://github.com/darkroomengineering/lenis) smooth kinetic scroll provider.
  - Global Command Palette (`Cmd+K` / `Ctrl+K`) for instantaneous keyboard navigation.
- **Security & DevSecOps**:
  - Secure HTTP headers configured in `next.config.ts` (nosniff, X-Frame-Options: DENY, Referrer-Policy, Permissions-Policy).
  - Multi-tier contact form protection (anti-bot honeypot, form submission timing validation, IP sliding-window rate limiting, input sanitization).
  - Zero client-side credential exposure.
- **SEO & Quality**:
  - Dynamic XML sitemap (`/sitemap.xml`) and crawler directives (`/robots.txt`).
  - Strict respect for `prefers-reduced-motion` across all animations.
  - WCAG 2.2 AA accessibility with keyboard navigability and visible focus rings.

## 📁 Project Structure

```
ashish-rai/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with Geist typography & global providers
│   │   ├── page.tsx                # Hero, Live Terminal widget, Flagship case studies, Pillars
│   │   ├── projects/
│   │   │   ├── page.tsx            # Filterable & searchable project index
│   │   │   └── [slug]/page.tsx     # 9-point in-depth architectural case studies
│   │   ├── experience/page.tsx     # Career timeline: Tuppl & Aarawan Tech progression
│   │   ├── about/page.tsx          # Engineering narrative & Cyber Security academic direction
│   │   ├── resume/page.tsx         # Interactive and printable in-browser resume
│   │   ├── contact/page.tsx        # Secure Server Action contact form & verified socials
│   │   ├── sitemap.ts              # Dynamic sitemap generator
│   │   └── robots.ts               # Web crawler directives
│   ├── components/
│   │   ├── animations/             # SmoothScroll, PageTransition, BackgroundMesh, TiltCard, Magnetic
│   │   ├── layout/                 # Navbar, Footer
│   │   └── navigation/             # CommandMenu (Cmd+K)
│   ├── data/
│   │   ├── projects.ts             # Strongly typed project datasets
│   │   ├── experience.ts           # Career progression milestones
│   │   └── skills.ts               # Categorized competencies matrix
│   └── lib/
│       ├── actions/contact.ts      # Next.js Server Action
│       ├── security.ts             # Rate limiter, honeypot & sanitizer
│       └── utils.ts                # Class merging utility
├── next.config.ts                  # Secure headers & Turbopack config
└── package.json
```

## 🚀 Development & Production

```bash
# Start local development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
