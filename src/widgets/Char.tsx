import React from "react";
import { Form, Input } from "antd";

export const Char = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onPressEnter,
  ...props
}: {
  id: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onPressEnter?:
    | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <Form.Item label={label}>
      <Input
        {...props}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      >
        {props.children}
      </Input>
    </Form.Item>
  );
};