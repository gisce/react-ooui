import { DatePicker } from "antd";

import React from "react";
import FormItem from "../common/FormItem";

export const RangePicker = ({ id, label }: { id: string; label?: string }) => {
  return (
    <FormItem name={id} label={label}>
      <DatePicker.RangePicker format={"DD/MM/YYYY"}></DatePicker.RangePicker>
    </FormItem>
  );
};
