import { resolve } from "path";
import { defineConfig } from "vitest/config";
import svgrPlugin from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
import basicSsl from "@vitejs/plugin-basic-ssl";
import istanbul from "vite-plugin-istanbul";
import tsconfigPaths from "vite-tsconfig-paths";
import macrosPlugin from "vite-plugin-babel-macros";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: "happy-dom",
    coverage: {
      provider: "istanbul",
    },
    dir: "./src",
    include: ["**/*.test.{ts,tsx}"],
    globals: true,
  },
  define: {
    "process.env.VITE_VERSION": `"${process.env.npm_package_version}"`,
  },
  server: {
    strictPort: true,
    https: true,
    host: "localhost.voyc.ai",
    port: 3000,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  resolve: {
    alias: {
      lodash: "lodash-es",
      react: resolve(__dirname, "node_modules", "react"),
      "react-dom": resolve(__dirname, "node_modules", "react-dom"),
    },
  },
  plugins: [
    basicSsl(),
    react(),
    macrosPlugin(),
    tsconfigPaths(),
    svgrPlugin(),
    istanbul({
      include: "src/*",
      exclude: ["node_modules"],
      cypress: true,
      requireEnv: true,
    }),
    VitePWA({
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      registerType: "autoUpdate",
      manifest: {
        name: "Online Coding Bootcamps | Learn to Code | HyperionDev",
        short_name: "HyperionDev",
        description: "",
        theme_color: "#43297a",
        background_color: "#3475A6",
        display: "standalone",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css}"],
      },
    }),
  ],
});
