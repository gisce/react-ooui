import React from "react";
import { Form } from "antd";

export default function FormItem({
  name,
  label,
  children,
}: {
  name: string;
  label?: string;
  children?: React.ReactNode;
}) {
  const labelText = label && label.length > 1 ? label + " :" : " ";
  return (
    <Form.Item className="mb-0" name={name} label={labelText}>
      {children}
    </Form.Item>
  );
}
