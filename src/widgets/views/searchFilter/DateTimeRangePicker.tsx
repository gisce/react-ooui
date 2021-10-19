import { DatePicker, TimePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { Field as FieldOoui, Label as LabelOoui } from "ooui";
import { WidgetProps } from "@/types";
import Label from "@/widgets/base/Label";

import { Row, Col } from "antd";

export const DateTimeRangePicker = (props: WidgetProps) => {
  const { ooui, showLabel = false } = props;
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
      {showLabel && (
        <Label
          ooui={
            new LabelOoui({
              name: id + "_label",
              string: label,
              help: ooui.tooltip,
              fieldForLabel: id,
            })
          }
          align={"left"}
        />
      )}
      <Row align={"bottom"} className="p-0" wrap={false}>
        <Col className="mr-2">
          <Field {...props} ooui={fields[0]} showLabel={false}>
            <DatePicker.RangePicker
              className="w-60"
              format={"DD/MM/YYYY"}
            ></DatePicker.RangePicker>
          </Field>
        </Col>
        <Col>
          <Field {...props} ooui={fields[1]} showLabel={false}>
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
