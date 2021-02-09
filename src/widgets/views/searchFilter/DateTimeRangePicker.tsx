import { DatePicker, TimePicker } from "antd";

import React from "react";
import FormItem from "../../../common/FormItem";
import { Row } from "antd";

export const DateTimeRangePicker = ({
  id,
  label,
  layout = "horizontal",
}: {
  id: string;
  label?: string;
  layout?: "horizontal" | "vertical";
}) => {
  return (
    <>
      {label + " :"}
      <Row align={"bottom"} className="mt-0">
        <FormItem name={id + "#date"} label={""} layout={layout}>
          <DatePicker.RangePicker
            className="w-60"
            format={"DD/MM/YYYY"}
          ></DatePicker.RangePicker>
        </FormItem>
      </Row>
      <Row align={"bottom"} className="mt-2">
        <FormItem name={id + "#time"} label={""} layout={layout}>
          <TimePicker.RangePicker
            className="w-60"
            format={"HH:mm"}
          ></TimePicker.RangePicker>
        </FormItem>
      </Row>
    </>
  );
};
