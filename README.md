# Uyen's portfolio — home page

React + Vite + Tailwind v4, built from Figma node 73:333.

```bash
npm install
npm run fetch-assets   # pulls the Figma images into public/assets (links expire ~Sep 22, 2026)
npm run dev
```

- `src/components/projects.js` — edit titles, descriptions, links
- `src/components/Thumbnails.jsx` — card image compositions (scale with card width)
- `src/index.css` — color + font tokens
- Breakpoints: 1 column on mobile, 2 columns from `md`, exact Figma layout from `lg` (1024px+)
