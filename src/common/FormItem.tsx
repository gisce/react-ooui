import React from "react";
import { Form, Row, Col, Space } from "antd";

export default function FormItem({
  name,
  label,
  children,
  layout = "horizontal",
}: {
  name: string;
  label?: string;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
}) {
  const horizontalMode = (labelText: string) => {
    return (
      <Form.Item label={labelText} className="mb-0 pr-5" name={name}>
        {children}
      </Form.Item>
    );
  };

  const verticalMode = () => {
    return (
      <>
        <span>{labelText}</span>
        <Form.Item className="mb-0" name={name}>
          {children}
        </Form.Item>
      </>
    );
  };

  const labelText = label && label.length > 1 ? label + " :" : " ";

  return layout === "horizontal" ? horizontalMode(labelText) : verticalMode();
}
