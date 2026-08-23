import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Guia de Viagem",
        short_name: "Guia de Viagem",
        description: "Meu guia de viagem de Campo Grande para Goiânia",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",

        icons: [
          {
            src: "/iconcar.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/iconcar.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
