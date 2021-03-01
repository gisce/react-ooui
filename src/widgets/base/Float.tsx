import React from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";

export const Float = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, decimalDigits, readOnly, required} = ooui as FloatOoui;
  const requiredClass = required ? Config.requiredClass : undefined;

  return (
    <Field {...props}>
      <InputNumber
        disabled={readOnly}
        className={"w-full " + requiredClass}
        id={id}
        precision={decimalDigits}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9\.\-]+/g, "");
        }}
        defaultValue={0}
        decimalSeparator={"."}
      />
    </Field>
  );
};
