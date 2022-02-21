import React from "react";

import { Field as FieldOoui } from "@gisce/ooui";
import LocaleProvider from "../../../context/LocaleContext";

import { DateRangePicker } from "../../../widgets/views/searchFilter/DateRangePicker";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Views/SearchFilter/DateRangePicker",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <DateRangePicker ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
