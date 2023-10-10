import react from "@vitejs/plugin-react-swc";
import path from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
    viteTsconfigPaths(),
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
