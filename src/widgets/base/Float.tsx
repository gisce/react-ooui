import React, { useContext } from "react";
import { InputNumber } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { FormContext, FormContextType } from "@/context/FormContext";

export const Float = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, decimalDigits, readOnly, required } = ooui as FloatOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  return (
    <Field required={required} type={"number"} {...props}>
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
        onBlur={elementHasLostFocus}
      />
    </Field>
  );
};
