import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: true
  },
  build: {
    cssMinify: true,
    minify: "esbuild"
  }
});
