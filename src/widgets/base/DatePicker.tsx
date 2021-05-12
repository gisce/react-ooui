import { DatePicker as AntDatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

const DatePicker = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <AntDatePicker format={"DD/MM/YYYY"}></AntDatePicker>
    </Field>
  );
};

export default DatePicker;