import React from "react";

import { Integer } from "..";
import { Integer as IntegerOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Integer",
};

export const Default = (): React.ReactElement => {
  const ooui = new IntegerOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <Integer ooui={ooui} />;
};
