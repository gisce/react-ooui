import React from "react";

import { Text } from "..";
import { Text as TextOoui } from "ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Text",
};

export const Default = (): React.ReactElement => {
  const ooui = new TextOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Text ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
