import "antd/dist/antd.css";
import "@/tailwind.generated.css";
import "@gisce/react-formiga-components/build/index.css";
import mockProvider from "../src/stories/mocks/mockProvider";

mockProvider.init();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
