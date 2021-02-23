import React from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "ooui";
import { WidgetProps } from "@/types";

export const Float = (props: WidgetProps) => {
  const { ooui, layout } = props;
  const { id, decimalDigits, readOnly } = ooui as FloatOoui;

  return (
    <Field ooui={ooui} layout={layout}>
      <InputNumber
        disabled={readOnly}
        className="w-full"
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
