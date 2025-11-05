# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CONTRACT-IT is an AI-powered project management platform for construction and renovation. This is the main landing page built with Next.js 14, TypeScript, App Router, and TailwindCSS. The site is hosted on GitHub Pages at www.contract-it.com.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom brand colors
- **Components**: Headless UI for modals
- **Icons**: Heroicons

## Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and Tailwind directives
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main page assembling all sections
│   ├── components/
│   │   ├── Header.tsx        # Fixed header with sticky navigation
│   │   ├── Footer.tsx        # Footer with links
│   │   ├── sections/         # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── OverviewSection.tsx
│   │   │   ├── ClientsSection.tsx        # 7-step timeline
│   │   │   ├── ProfessionalsSection.tsx  # 2-tier system
│   │   │   ├── WhySection.tsx            # Problem/solution cards
│   │   │   ├── PaymentsSection.tsx
│   │   │   ├── IntelligenceSection.tsx
│   │   │   └── JoinSection.tsx
│   │   └── modals/           # Headless UI modals
│   │       ├── ProWaitlistModal.tsx
│   │       ├── ClientUpdateModal.tsx
│   │       └── ContactTeamModal.tsx
│   └── lib/
│       ├── i18n.ts           # i18n stub helper (T function)
│       └── scroll.ts         # Smooth scroll utilities
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── .github/workflows/static.yml
```

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

The dev server runs on http://localhost:3000

## Brand System

### Colors (defined in tailwind.config.ts)
- **Primary (Orange)**: #ff7a00 (hover: #e66c00)
- **Secondary (Navy)**: #1e41b0 (hover: #1a3a9e)
- **Background**: #F3F4F6 (light gray)
- **Cards**: #FFFFFF (white)
- **Borders**: #E5E7EB

### Button Classes (globals.css)
- `.btn-primary` - Orange background, white text
- `.btn-secondary` - Navy background, white text
- `.btn-outline` - White background, gray border

### Spacing
- Sections: 80-100px vertical spacing (py-20 lg:py-24)
- Cards: 8px rounded corners, soft shadow

## Key Features

### Navigation
- Fixed header with sticky quick-nav bar (src/components/Header.tsx:5)
- Active section highlighting based on scroll position
- Smooth scroll to sections using utility functions (src/lib/scroll.ts)

### Modals
All CTAs open Headless UI Dialog modals instead of inline forms:
- Professional waitlist form (ProWaitlistModal)
- Client update subscription (ClientUpdateModal)
- Contact team form (ContactTeamModal)

### Internationalization
All user-facing text is wrapped with `T()` function from `src/lib/i18n.ts` for future i18n support.

### Sections
1. **Hero** (id: hero) - Main landing with 3 CTA buttons
2. **Overview** (id: overview) - Vision statement
3. **Clients** (id: clients) - 7-step process with mini-timeline
4. **Professionals** (id: pros) - 2-tier system with connecting animation
5. **Why It Matters** (id: why) - Problem/solution cards
6. **Payments & Trust** (id: payments) - Split layout with payment flow
7. **Intelligence** (id: intelligence) - AI features list
8. **Join** (id: join) - Final CTA section

## Code Style

- All files include French comments explaining structure and purpose
- Components use TypeScript with proper typing
- Client components marked with "use client" directive
- Responsive design with mobile-first approach (Tailwind breakpoints)

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions workflow (`.github/workflows/static.yml`).

For Next.js static export, you may need to update the workflow to:
1. Run `npm install`
2. Run `npm run build`
3. Export static files from `.next` or `out` directory
