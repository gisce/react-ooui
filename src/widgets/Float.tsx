import React from "react";
import { InputNumber } from "antd";
import FormItem from "../common/FormItem";

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
}) => {
  return (
    <FormItem name={id} label={label}>
      <InputNumber
        {...props}
        className="w-36"
        id={id}
        formatter={(value) => {
          let number;
          if (!value) {
            number = defaultValue!;
          } else if (typeof number === "string") {
            number = parseInt(value.toString());
            if (number === NaN) {
              number = 0.00;
            }
          } else {
            number = Number(value);
          }
          return number.toFixed(2).toString();
        }}
        decimalSeparator={"."}
        // formatter={(formatterValue) =>
        //   `${formatterValue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        // }
        value={value}
        defaultValue={defaultValue}
        // onChange={onChange}
        onPressEnter={onPressEnter}
      >
        {props.children}
      </InputNumber>
    </FormItem>
  );
};
