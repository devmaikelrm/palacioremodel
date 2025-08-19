import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Configuración específica para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./", // Importante para GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "docs"), // GitHub Pages busca en /docs
    emptyOutDir: true,
    assetsDir: "assets",
  },
  server: {
    fs: {
      strict: false,
    },
  },
});