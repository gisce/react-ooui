import { DatePicker, TimePicker } from "antd";

import React from "react";
import FormItem from "@/common/FormItem";
import { Row, Col } from "antd";

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
      <Row align={"bottom"} className="mt-1">
        <Col className="mr-2">
          <FormItem name={id + "#date"} label={""} layout={layout}>
            <DatePicker.RangePicker
              className="w-60"
              format={"DD/MM/YYYY"}
            ></DatePicker.RangePicker>
          </FormItem>
        </Col>
        <Col>
          {" "}
          <FormItem name={id + "#time"} label={""} layout={layout}>
            <TimePicker.RangePicker
              className="w-60"
              format={"HH:mm"}
            ></TimePicker.RangePicker>
          </FormItem>
        </Col>
      </Row>
    </>
  );
};
