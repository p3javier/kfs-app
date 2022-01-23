import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
//import reactSvgPlugin from "vite-plugin-react-svg";
import react from "@vitejs/plugin-react";
import svgr from "@honkhonk/vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

/**
 * resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 */
