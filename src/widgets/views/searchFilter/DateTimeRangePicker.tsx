import { DatePicker, TimePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { Field as FieldOoui } from "ooui";
import { WidgetProps } from "@/types";

import { Row, Col } from "antd";

export const DateTimeRangePicker = (props: WidgetProps) => {
  const { ooui, layout } = props;
  const { label, id } = ooui;

  const fields = [
    new FieldOoui({
      name: id + "#date",
      label: "",
    }),
    new FieldOoui({
      name: id + "#time",
      label: "",
    }),
  ];

  return (
    <>
      {label + " :"}
      <Row align={"bottom"} className="mt-1">
        <Col className="mr-2">
          <Field ooui={fields[0]} layout={layout}>
            <DatePicker.RangePicker
              className="w-60"
              format={"DD/MM/YYYY"}
            ></DatePicker.RangePicker>
          </Field>
        </Col>
        <Col>
          {" "}
          <Field ooui={fields[1]} layout={layout}>
            <TimePicker.RangePicker
              className="w-60"
              format={"HH:mm"}
            ></TimePicker.RangePicker>
          </Field>
        </Col>
      </Row>
    </>
  );
};
