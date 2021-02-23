import React from "react";

import { Button } from "..";
import { Button as ButtonOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Button",
};

export const Default = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
  });
  return <Button ooui={ooui} />;
};
