import React from "react";
import type { Preview } from "@storybook/react-vite";
import type { Decorator } from "@storybook/react-vite";
import { ThemeWrapper } from "./ThemeWrapper";
import "./styles.css";
import "./tree-storybook-fixes.css";

const withTheme: Decorator = (Story) => (
  <ThemeWrapper>
    <Story />
  </ThemeWrapper>
);

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "responsive",
    },
  },
  decorators: [withTheme],
};

export default preview;
