import React, { useContext } from "react";
import { InputNumber, theme } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { FormContext, FormContextType } from "@/context/FormContext";
const { useToken } = theme;

type IntegerProps = WidgetProps & {
  onChange?: (newValue: number) => void;
};

export const Integer = (props: IntegerProps) => {
  const { ooui, onChange } = props;
  const { id, readOnly, required } = ooui;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  return (
    <Field required={required} type={"number"} {...props}>
      <InputNumber
        id={id}
        className={"w-full "}
        disabled={readOnly}
        formatter={(value) => {
          // Check if value is not undefined and is a valid number
          if (
            value === undefined ||
            typeof value !== "number" ||
            isNaN(value)
          ) {
            return "";
          }

          // Truncate the value to remove decimals
          let truncatedValue = Math.trunc(value);

          // Replace non-numeric and non-hyphen characters
          return `${truncatedValue}`.replace(/[^0-9\-]+/g, "");
        }}
        onChange={(newValue: any) => {
          const newNumber = newValue as number;
          onChange?.(newNumber);
        }}
        defaultValue={0}
        onBlur={elementHasLostFocus}
        precision={0}
        style={requiredStyle}
      />
    </Field>
  );
};
