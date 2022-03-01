import React from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";

type IntegerProps = WidgetProps & {
  onChange?: (newValue: number) => void;
};

export const Integer = (props: IntegerProps) => {
  const { ooui, onChange } = props;
  const { id, readOnly, required } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field required={required} type={"number"} {...props}>
      <InputNumber
        id={id}
        className={"w-full " + requiredClass}
        disabled={readOnly}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9]+/g, "");
        }}
        onChange={(newValue: any) => {
          const newNumber = newValue as number;
          onChange?.(newNumber);
        }}
        defaultValue={0}
      />
    </Field>
  );
};
