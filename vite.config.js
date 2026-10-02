import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from https://pengwein26.github.io/2026_portfolio/, not a domain root.
  base: "/2026_portfolio/",
  plugins: [react(), tailwindcss()],
});
