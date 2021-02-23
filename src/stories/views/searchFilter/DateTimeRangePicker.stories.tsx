import React from "react";

import { Field as FieldOoui } from "ooui";

import { DateTimeRangePicker } from "../../../widgets/views/searchFilter/DateTimeRangePicker";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Views/SearchFilter/DateTimeRangePicker",
};

export const Default = (): React.ReactElement => {
  const ooui = new FieldOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return <DateTimeRangePicker ooui={ooui} />;
};
