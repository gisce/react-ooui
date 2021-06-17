import React from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";

export const Integer = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field required={required} type={"integer"} {...props}>
      <InputNumber
        id={id}
        className={"w-full " + requiredClass}
        disabled={readOnly}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9]+/g, "");
        }}
        defaultValue={0}
      />
    </Field>
  );
};
