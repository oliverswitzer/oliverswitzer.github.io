import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["https://olivers-macbook-pro.tail60e2f.ts.net"]
  }
});
