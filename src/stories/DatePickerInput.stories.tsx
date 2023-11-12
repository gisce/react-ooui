import React from "react";
import LocaleProvider from "../context/LocaleContext";
import { Field as FieldOoui } from "@gisce/ooui";
import { DatePickerInput } from "../common/DatePicker";

export default {
  title: "Components/Widgets/Base/DatePickerInput",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <DatePickerInput ooui={ooui} value={"2023-03-26 02:00:00"} showTime />
    </LocaleProvider>
  );
};
