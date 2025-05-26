import type { Preview } from "@storybook/react";
import "./styles.css";
import mockProvider from "../src/stories/mocks/mockProvider";

mockProvider.init();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
