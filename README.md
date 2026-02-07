# Code Brew

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-crafter--station-181717?logo=github)](https://github.com/crafter-station)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)]()

**Monthly meetups for software engineers, designers, founders, and tech professionals across Latin America and Spain.**

[Visit Website](https://codebrew.tech) • [Partnership Deck](https://codebrew.tech/deck) • [Join Community](https://crafters.chat/)

</div>

---

## 🌟 Features

- **🌍 Interactive 3D Globe** - Explore Code Brew cities with an interactive globe powered by COBE
- **📊 Live Stats** - Real-time GitHub stars and community metrics
- **🎨 Modern Design System** - Void black + signal red brutalist design language
- **📱 Fully Responsive** - Optimized for all devices from mobile to desktop
- **🎭 Partnership Deck** - Interactive slide deck with keyboard and touch navigation
- **⚡ Performance** - Built with Next.js 16 App Router for optimal speed
- **🎬 Smooth Animations** - Powered by Motion for delightful interactions
- **♿ Accessible** - Following web accessibility best practices

---

## About

Code Brew is a monthly meetup series organized by [Crafter Station](https://crafters.chat/) that brings together tech communities. From Lima to Madrid, Bogota to Buenos Aires — we're creating spaces where professionals can thrive over coffee and conversation.

### Mission

- **Connect**: Bridge the gap between tech professionals across Latin America and beyond
- **Share**: Create spaces for knowledge exchange, mentorship, and collaborative learning
- **Build**: Foster lasting relationships that turn into projects, companies, and friendships

### Stats

- **06** Events hosted
- **05** Countries and growing
- **100+** Attendees

### Active Cities

- Lima, Peru
- Bogota, Colombia
- Madrid, Spain
- São Paulo, Brazil (coming soon)
- Buenos Aires, Argentina (coming soon)

---

## Tech Stack

This website is built with modern web technologies:

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **3D Globe**: [COBE](https://github.com/shuding/cobe)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Runtime**: [Bun](https://bun.sh/) / Node.js

---

## Getting Started

### Prerequisites

- Node.js 20+ or Bun
- Package manager: npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/crafter-station/codebrew.tech.git
cd codebrew.tech

# Install dependencies
npm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

### Asset Generation

Generate brand assets (OG images, favicon):

```bash
bun scripts/generate-assets.ts
```

This creates:
- `public/og.png` (1200×630 Open Graph image)
- `public/og-twitter.png` (1200×600 Twitter card)
- `app/favicon.ico` (multi-size icon: 16, 32, 48px)

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/crafter-station/codebrew.tech)

The site automatically deploys on push to the main branch. No environment variables are required for basic deployment.

---

## Project Structure

```
codebrew.tech/
├── app/                      # Next.js app directory
│   ├── page.tsx              # Landing page with hero, stats, events
│   ├── deck/                 # Partnership deck presentation
│   │   └── page.tsx          # Interactive slide deck
│   ├── layout.tsx            # Root layout with metadata
│   ├── globals.css           # Global styles & design system
│   └── favicon.ico           # Generated favicon
├── components/               # React components
│   ├── globe.tsx             # Interactive 3D globe (COBE)
│   ├── footer.tsx            # Footer with link columns
│   ├── github-badge.tsx      # Live GitHub star counter
│   └── logos/                # SVG logo components
│       ├── crafter-station.tsx
│       └── github.tsx
├── lib/
│   └── utils.ts              # Tailwind class merge utility
├── public/                   # Static assets
│   ├── og.png                # Open Graph image
│   ├── og-twitter.png        # Twitter card image
│   └── *.svg                 # Icon assets
├── scripts/
│   └── generate-assets.ts    # Brand asset generator
├── package.json              # Dependencies & scripts
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS with Tailwind
└── eslint.config.mjs         # ESLint configuration
```

---

## Design System

Code Brew uses a custom brutalist design system with the following principles:

### Color Palette
- **Void Black** (`#0A0A0A`) - Background
- **Signal Red** (`#D42B2B`) - Primary accent
- **Void White** (`#E5E5E5`) - Foreground text
- **Muted Gray** (`#6B6B6B`) - Secondary text
- **Border** (`#2A2A2A`) - Structural elements

### Key Components
- **Grid Overlay** - Technical blueprint aesthetic
- **Corner Brackets** - Architectural framing
- **Diamond Markers** - Navigation & emphasis
- **Calibration Ticks** - Precision detail
- **Film Grain** - Analog texture
- **Ghost Text** - Large background typography

### Typography
- **Headings**: Geist Sans (system font fallback)
- **Body & UI**: Geist Mono (monospace)
- Responsive sizing with clamp()
- Uppercase tracking for labels

---

## Contributing

We welcome contributions! If you'd like to improve the Code Brew website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🤝 Join the Community

<div align="center">

| Platform | Link |
|----------|------|
| 🌐 **Website** | [codebrew.tech](https://codebrew.tech) |
| 💬 **Discord** | [crafters.chat](https://crafters.chat/) |
| 🐙 **GitHub** | [@crafter-station](https://github.com/crafter-station) |
| 📱 **WhatsApp** | [Contact us](https://wa.me/51912851377?text=Hi!%20I'm%20interested%20in%20Code%20Brew) |

</div>

---

## 🤝 Partnership

Interested in sponsoring or partnering with Code Brew? 

- 🎯 View our [partnership deck](https://codebrew.tech/deck)
- 💼 Contact us via [WhatsApp](https://wa.me/51912851377?text=Hi!%20I'm%20interested%20in%20partnering%20with%20Code%20Brew)
- 💬 Join the community at [crafters.chat](https://crafters.chat/)

### Partnership Tiers
- **Venue Partner**: Host our monthly event with guaranteed foot traffic
- **Sponsor**: Logo placement across all event materials
- **Exclusive Partner**: Co-branding and deep community integration

---

## 📄 License

This project is maintained by [Crafter Station](https://github.com/crafter-station).

---

<div align="center">

**Est. 2024** · Built with ❤️ for the tech community

[🔝 Back to top](#code-brew)

</div>
