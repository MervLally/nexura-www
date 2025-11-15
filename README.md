# Nexura Insurance

**The World's First Fully Autonomous, Agentic Insurance Agency**

This repository contains the brand showcase website for Nexura Insurance, featuring comprehensive market research, logo concepts, and strategic brand positioning.

## Features

- **Interactive Logo Gallery**: 9 professional logo concepts across 3 brand options
- **Market Research Dashboard**: Interactive charts and data visualizations
- **Brand Positioning Analysis**: Comprehensive competitive analysis
- **Strategic Recommendations**: Data-driven brand selection rationale
- **Responsive Design**: Optimized for all devices

## Tech Stack

- **React 19** - Modern UI framework
- **Tailwind CSS 4** - Utility-first styling
- **Recharts** - Interactive data visualizations
- **Wouter** - Lightweight routing
- **Vite** - Fast build tooling

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
client/
  src/
    pages/          # Page components
      Home.tsx      # Landing page
      Logos.tsx     # Logo comparison
      Research.tsx  # Market research
      Recommendation.tsx  # Brand recommendation
    components/     # Reusable components
      Navigation.tsx
      ui/           # shadcn/ui components
    contexts/       # React contexts
    hooks/          # Custom hooks
    lib/            # Utilities
  public/
    logos/          # Logo image assets
```

## Deployment

This site can be deployed to any static hosting service:

### Netlify
```bash
# Build command
pnpm build

# Publish directory
dist
```

### Vercel
```bash
# Framework preset: Vite
# Build command: pnpm build
# Output directory: dist
```

### Cloudflare Pages
```bash
# Build command: pnpm build
# Build output directory: dist
```

## Custom Domain

To connect nexurainsurance.com:

1. Configure DNS in your domain registrar (Cloudflare)
2. Add CNAME or A records as required by your hosting provider
3. Enable HTTPS/SSL certificate

## Brand Assets

All logo concepts and brand materials are located in `client/public/logos/`:

- **Nexura Insurance**: 3 logo variations
- **SoCal Cover**: 3 logo variations  
- **Axiom Assurance**: 3 logo variations

## License

Proprietary - All Rights Reserved

## Contact

For questions about Nexura Insurance, please visit the website or contact the development team.
