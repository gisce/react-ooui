import React from "react";
import { Form, Button as AntButton } from "antd";

export const Button = ({
  type,
  activated,
  onClick,
  label,
  ...props
}: {
  type?:
    | "text"
    | "link"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  activated?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  label?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Form.Item label={label}>
      <AntButton {...props} type={type} disabled={!activated} onClick={onClick}>
        {props.children}
      </AntButton>
    </Form.Item>
  );
};
