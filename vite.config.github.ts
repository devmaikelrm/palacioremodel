import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// Configuración específica para GitHub Pages
export default defineConfig({
  plugins: [
    react(),
    // Plugin personalizado para usar App-github.tsx
    {
      name: 'use-github-app',
      buildStart() {
        const appPath = path.resolve(__dirname, 'client', 'src', 'App.tsx');
        const githubAppPath = path.resolve(__dirname, 'client', 'src', 'App-github.tsx');
        
        if (fs.existsSync(githubAppPath)) {
          const githubAppContent = fs.readFileSync(githubAppPath, 'utf8');
          fs.writeFileSync(appPath, githubAppContent);
        }
      }
    }
  ],
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
    rollupOptions: {
      output: {
        manualChunks: undefined,
      }
    }
  },
  server: {
    fs: {
      strict: false,
    },
  },
});