import React from "react";

import { One2many } from "..";
import { One2many as One2manyOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/One2many",
};

export const Default = (): React.ReactElement => {
  const ooui = new One2manyOoui({
    name: "field",
    string: "Lorem ipsum",
    relation: "res.partners",
  });
  return <One2many ooui={ooui} />;
};
