import React from "react";

import { Text } from "..";
import { Text as TextOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Text",
};

export const Default = (): React.ReactElement => {
  const ooui = new TextOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <Text ooui={ooui} showLabel />;
};
