/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig({
  ...viteConfig,
  test: {
    globals: true,
    environment: "node",
    exclude: [
      ...configDefaults.exclude,
      "dist/**",
      "e2e/**", // Exclude Playwright tests
      "playwright-report/**",
      "test-results/**",
    ],
  },
});
