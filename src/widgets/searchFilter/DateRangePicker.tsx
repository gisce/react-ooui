import { DatePicker } from "antd";

import React from "react";
import FormItem from "../../common/FormItem";

export const DateRangePicker = ({
  id,
  label,
  layout = "horizontal",
}: {
  id: string;
  label?: string;
  layout?: "horizontal" | "vertical";
}) => {
  return (
    <FormItem name={id} label={label} layout={layout}>
      <DatePicker.RangePicker format={"DD/MM/YYYY"}></DatePicker.RangePicker>
    </FormItem>
  );
};
