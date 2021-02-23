import React from "react";

import { Field as FieldOoui } from "ooui";

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
  return <DateRangePicker ooui={ooui} />;
};
