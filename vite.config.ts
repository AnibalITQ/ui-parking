import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Parking ITQ",
        short_name: "Parking",
        description: "Gestión inteligente de estacionamientos para el ITQ",
        lang: "es-ES",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#E5700F",
        theme_color: "#E5700F",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        // Ejemplo de accesos directos
        shortcuts: [
          {
            name: "Mis QR",
            short_name: "Mis QR",
            description: "Accede rápidamente a tus códigos QR",
            url: "/home",
            icons: [
              {
                src: "/icons/favicon-16x16.png",
                sizes: "192x192",
                type: "image/png",
              },
            ],
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
