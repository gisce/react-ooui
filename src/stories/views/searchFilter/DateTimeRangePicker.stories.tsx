import React from "react";

import { Field as FieldOoui } from "ooui";

import { DateTimeRangePicker } from "../../../widgets/views/searchFilter/DateTimeRangePicker";
import "antd/dist/antd.css";
import LocaleProvider from "../../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/SearchFilter/DateTimeRangePicker",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <DateTimeRangePicker ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
