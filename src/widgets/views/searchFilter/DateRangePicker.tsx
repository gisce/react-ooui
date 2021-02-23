import { DatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const DateRangePicker = (props: WidgetProps) => {
  const { ooui, layout } = props;

  return (
    <Field ooui={ooui} layout={layout}>
      <DatePicker.RangePicker format={"DD/MM/YYYY"}></DatePicker.RangePicker>
    </Field>
  );
};
