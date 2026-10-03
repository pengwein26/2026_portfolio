import { copyFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from the apex domain https://uyentphan.com/, so assets live at the root.
  base: "/",
  plugins: [
    react(),
    tailwindcss(),
    // GitHub Pages has no SPA fallback; 404.html is served for /about and reloads the app.
    {
      name: "copy-404",
      closeBundle() {
        copyFileSync("dist/index.html", "dist/404.html");
      },
    },
  ],
});
