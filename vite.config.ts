import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so assets resolve on GitHub Pages project URLs
// (user.github.io/repo/) and on a custom domain at the site root.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
