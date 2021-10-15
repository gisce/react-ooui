import React from "react";

import { Separator } from "..";
import { Separator as SeparatorOoui } from "ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Separator",
};

export const Default = (): React.ReactElement => {
  const ooui = new SeparatorOoui({
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Separator ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
