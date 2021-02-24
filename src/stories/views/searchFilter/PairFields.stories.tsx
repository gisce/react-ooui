import React from "react";

import { Field as FieldOoui } from "ooui";

import { PairFields } from "../../../widgets/views/searchFilter/PairFields";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Views/SearchFilter/PairFields",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <PairFields ooui={ooui} showLabel />;
};
