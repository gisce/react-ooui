import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Set up aliases
    (config.resolve as any).alias = {
      ...(config.resolve as any).alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    // Return the altered config
    return config;
  },
};
export default config;
