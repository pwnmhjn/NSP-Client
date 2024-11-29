import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from `.env` file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        // target: "http://localhost:8080"
        // target: "https://nsp-server.vercel.app",
        target: process.env.VITE_API_URL,
        changeOrigin: "true"
      }
    },
  },
  plugins: [react()],
});
