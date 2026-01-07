import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import sourcemaps from "rollup-plugin-sourcemaps";

export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "build"), // Specify output path
    assetsDir: "static", // A static resource output path relative to outDir
    cssCodeSplit: true, // Is the output css split
    sourcemap: true,
    emptyOutDir: true, // Empty target folder on build
    chunkSizeWarningLimit: 500, // If the generated chunk is greater than this value, a warning will be displayed on the console
    rollupOptions: {
      plugins: [sourcemaps() as any],
    },
  },
  server: {
    port: 6006,
    host: true,
    strictPort: true,
  },
  optimizeDeps: {
    // Exclude the local linked package from Vite's dependency pre-bundling
    // This prevents "Failed to resolve entry for package" errors in CI
    exclude: ["@gisce/react-ooui"],
  },
});
