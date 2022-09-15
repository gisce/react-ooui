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
    peerDepsExternal(),
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
      formats: ["es", "umd"],
      fileName: (format) => `react-ooui.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "styled-components",
        "antd",
        "@ant-design/icons",
        "@ant-design/plots",
        "@gisce/ooui",
        "@gisce/react-formiga-table",
        "@monaco-editor/react",
        "fiber-diagram",
        "file-type",
        "react-grid-layout",
        "react-hotkeys-hook",
        "react-measure",
        "@tabler/icons",
        "use-deep-compare-effect",
        "validator",
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "main.css";
          return assetInfo.name as any;
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
