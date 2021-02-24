import React from "react";

import { Float } from "..";
import { Float as FloatOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Float",
};

export const Default = (): React.ReactElement => {
  const ooui = new FloatOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <Float ooui={ooui} showLabel />;
};
