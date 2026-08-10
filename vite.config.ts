import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      // Puppeteer downloads Chrome (~430 MB) into .cache/ (see .puppeteerrc.cjs).
      // Watching it kills the dev server with EBUSY the moment Chrome runs and
      // locks its DLLs. .gitignore keeps it out of commits but not out of the watcher.
      ignored: ["**/.cache/**"],
    },
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
