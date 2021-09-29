import React from "react";

import { Field as FieldOoui } from "ooui";

import { PairFields } from "../../../widgets/views/searchFilter/PairFields";
import "antd/dist/antd.css";
import LocaleProvider from "../../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/SearchFilter/PairFields",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_GB">
      <PairFields ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
