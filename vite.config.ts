import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/typescript-study/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
