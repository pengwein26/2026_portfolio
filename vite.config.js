import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Served from the apex domain https://uyentphan.com/, so assets live at the root.
  base: "/",
  plugins: [react(), tailwindcss()],
});
