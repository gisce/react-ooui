import React from "react";

import { Label } from "..";
import { Label as LabelOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Label",
};

export const Default = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <Label ooui={ooui} />;
};
