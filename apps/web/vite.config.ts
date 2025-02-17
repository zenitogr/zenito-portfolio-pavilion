import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  server: {
    host: "localhost",
    port: 8080,
    force: true,
  },
  plugins: [
    react(),
  ],
}));
