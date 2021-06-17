import React from "react";
import { Form, Row, Col } from "antd";
import { Field as FieldOoui, Label as LabelOoui } from "ooui";
import Label from "@/widgets/base/Label";

export default function Field({
  ooui,
  children,
  layout = "horizontal",
  valuePropName,
  showLabel = false,
  alignLabel = "left",
  required = false,
  type,
  validator,
}: {
  ooui: FieldOoui;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  valuePropName?: string;
  showLabel?: boolean;
  alignLabel?: "left" | "center" | "right";
  required?: boolean;
  type?: any;
  validator?: any;
}) {
  const { id, label, tooltip } = ooui;

  const rules = required
    ? [
        {
          required: true,
          message: "Please fill this required field",
          type,
          validator,
        },
      ]
    : undefined;

  const formItem = () => (
    <Form.Item
      className="mb-0"
      name={id}
      valuePropName={valuePropName}
      rules={rules}
    >
      {children}
    </Form.Item>
  );

  if (!showLabel) {
    return formItem();
  }

  const labelWidget = (
    <Label
      ooui={
        new LabelOoui({
          name: id + "_label",
          string: label,
          help: tooltip,
          fieldForLabel: id,
        })
      }
      align={alignLabel}
    />
  );

  const horizontalMode = () => {
    return (
      <Row align="middle" className="pb-1 pt-1">
        <Col className="ml-2" flex="7rem">
          <div className="flex flex-col items-end">{labelWidget}</div>
        </Col>
        <Col flex="auto">{formItem()}</Col>
      </Row>
    );
  };

  const verticalMode = () => {
    return (
      <>
        {labelWidget}
        {formItem()}
      </>
    );
  };

  return layout === "horizontal" ? horizontalMode() : verticalMode();
}
