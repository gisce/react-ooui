import React from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const Integer = (props: WidgetProps) => {
  const { ooui, layout } = props;
  const { id, readOnly } = ooui;

  return (
    <Field ooui={ooui} layout={layout}>
      <InputNumber
        id={id}
        className="w-full"
        disabled={readOnly}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9]+/g, "");
        }}
        defaultValue={0}
      />
    </Field>
  );
};
