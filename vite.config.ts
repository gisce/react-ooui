import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-ooui",
      formats: ["es"],
      fileName: (format) => `react-ooui.${format}.js`,
    },
    rollupOptions: {
      external: ["@ant-design/icons", "uuid", "lodash", "moment"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
