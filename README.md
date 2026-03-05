# Oliver Switzer Personal Website

This is a React + TypeScript + TailwindCSS site (Vite) for personal branding as a freelance AI automations engineer.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Update website content

Edit `/src/content/siteContent.ts`:

- `brand`: hero text, name, email, location
- `offers`: service cards
- `tabs`: background timeline content grouped by tabs
- `skills`: skill cards
- `cta`: final offer and contact links

## Design and behavior files

- App layout + section rendering: `/src/App.tsx`
- Tailwind/global styles: `/src/index.css`
- Tailwind theme: `/tailwind.config.ts`
