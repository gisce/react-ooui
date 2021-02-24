import React from "react";

import { Separator } from "..";
import { Separator as SeparatorOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Separator",
};

export const Default = (): React.ReactElement => {
  const ooui = new SeparatorOoui({
    string: "Lorem ipsum",
  });
  return <Separator ooui={ooui} showLabel />;
};
