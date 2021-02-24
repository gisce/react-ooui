import React from "react";

import { Char } from "..";
import { Char as CharOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Char",
};

export const Default = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum"
  });
  return <Char ooui={ooui} showLabel />;
};

export const Password = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Password",
    nolabel: false
  });
  ooui.isPassword = true;
  return <Char ooui={ooui} showLabel />;
};
