import React from "react";

import { Checkbox } from "..";
import { Boolean as BooleanOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Boolean",
};

export const Default = (): React.ReactElement => {
  const ooui = new BooleanOoui({
    name: "checkbox_field",
    string: "Lorem ipsum",
  });
  return <Checkbox ooui={ooui} />;
};
