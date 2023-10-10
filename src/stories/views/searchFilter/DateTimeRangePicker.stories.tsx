import React from "react";

import { Field as FieldOoui } from "@gisce/ooui";

import { DateTimeRangePicker } from "../../../widgets/views/searchFilter/DateTimeRangePicker";

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
