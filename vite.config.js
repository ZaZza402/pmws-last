import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "og-image.jpg", "favicon.svg"],
      manifest: {
        name: "Punto Migrare - Servizi di Immigrazione",
        short_name: "Punto Migrare",
        description:
          "Il tuo punto di riferimento per un nuovo inizio. Servizi di immigrazione professionali a Roma.",
        theme_color: "#2b286f",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192-transparent.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/pwa-512x512-transparent.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        categories: ["business", "legal", "immigration"],
        lang: "it-IT",
        dir: "ltr",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
  },
  base: "/",

  // Performance Optimizations
  build: {
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "framer-motion": ["framer-motion"],
          icons: ["react-icons/fa", "react-icons/md", "react-icons/vsc"],
        },
      },
    },
    // Smaller chunk size for better performance
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minification
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "framer-motion"],
  },
});
