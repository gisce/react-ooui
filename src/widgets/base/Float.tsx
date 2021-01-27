import React from "react";
import { InputNumber } from "antd";
import FormItem from "../../common/FormItem";

export const Float = ({
  id,
  label,
  value,
  defaultValue,
  onChange,
  onPressEnter,
  ...props
}: {
  id: string;
  label?: string;
  value?: number;
  defaultValue?: number;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onPressEnter?:
    | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
  children?: React.ReactNode;
  className: string;
}) => {
  return (
    <FormItem name={id} label={label}>
      <InputNumber
        {...props}
        id={id}
        precision={2}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9\.]+/g, "");
        }}
        decimalSeparator={"."}
        defaultValue={defaultValue}
        onPressEnter={onPressEnter}
      >
        {props.children}
      </InputNumber>
    </FormItem>
  );
};
