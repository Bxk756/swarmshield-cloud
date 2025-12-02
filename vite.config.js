import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: false
  },
  build: {
    cssMinify: true,
    minify: "esbuild",
    outDir: "dist",
    emptyOutDir: true
  }
});

