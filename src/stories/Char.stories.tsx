import React from "react";

import { Char } from "@/index";
import { Char as CharOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Char",
};

export const Default = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <Char ooui={ooui} />;
};
