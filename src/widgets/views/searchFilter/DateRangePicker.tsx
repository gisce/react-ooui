import { DatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const DateRangePicker = (props: WidgetProps) => {
  return (
    <Field {...props} layout={"vertical"}>
      <DatePicker.RangePicker
        allowEmpty={[true, true]}
        format={"DD/MM/YYYY"}
      ></DatePicker.RangePicker>
    </Field>
  );
};
