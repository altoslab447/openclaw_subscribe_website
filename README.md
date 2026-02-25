# Lobster Cloud

**Enterprise AI Agent Cloud Hosting** — deploy your AI agents in 60 seconds and run them 24/7 with zero downtime.

Built by [Altos Labs](https://altoslabs.com).

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (bundler)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **shadcn/ui** component library (Radix UI primitives)
- **Motion** (Framer Motion successor) for animations
- **Lucide React** icons

## Project Structure

```
lobster-cloud/
├── index.html               # Vite entry HTML
├── vite.config.ts           # Vite + Tailwind config
├── package.json
├── postcss.config.mjs
└── src/
    ├── main.tsx             # React app entry point
    ├── app/
    │   ├── App.tsx          # Landing page component
    │   └── components/
    │       ├── figma/       # Figma-specific helpers
    │       └── ui/          # shadcn/ui components
    └── styles/
        ├── index.css        # Root stylesheet
        ├── tailwind.css     # Tailwind v4 directives
        ├── theme.css        # CSS custom properties / design tokens
        └── fonts.css        # Font declarations
```

## Getting Started

```bash
# Install dependencies
npm install   # or: pnpm install / yarn

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Pricing Plans

| Plan     | Price  | Specs             | Best For                              |
|----------|--------|-------------------|---------------------------------------|
| LITE     | $9.9/mo  | 1 vCPU / 2 GB RAM | Personal bots & everyday automation |
| PRO      | $19.9/mo | 3 vCPU / 4 GB RAM | Trading agents & multi-agent flows   |
| ULTIMATE | $39.9/mo | 4 vCPU / 8 GB RAM | Power developers & Web4 servers      |

All plans include SSL, automatic backups, DDoS protection, and a 99.9% uptime SLA.

## License

UI components from [shadcn/ui](https://ui.shadcn.com) are used under the MIT License.
See [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) for full attribution details.
