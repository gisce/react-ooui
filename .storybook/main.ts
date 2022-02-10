const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };
    config.module.rules.push({
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      enforce: "pre",
      use: ["source-map-loader"],
    });

    return config;
  },
};
