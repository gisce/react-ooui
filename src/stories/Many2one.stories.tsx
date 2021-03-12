import React from "react";

import { Many2one } from "..";
import { Many2one as Many2oneOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/ManyToOne",
};

export const Default = (): React.ReactElement => {
  const ooui = new Many2oneOoui({
    name: "field",
    string: "Lorem ipsum",
    relation: "res.partners",
  });
  return <Many2one ooui={ooui} showLabel />;
};
