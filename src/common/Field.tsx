import React, { useEffect, useState } from "react";
import { Form, Row, Col } from "antd";
import { Field as FieldOoui, Label as LabelOoui } from "@gisce/ooui";
import Label from "@/widgets/base/Label";
import { useLocale } from "@gisce/react-formiga-components";
import { useFormContext } from "@/context/FormContext";

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
  const { t } = useLocale();
  const form = Form.useFormInstance();

  const rules = required
    ? [
        {
          required: true,
          message: t("fillRequiredField"),
          type,
          validator,
        },
      ]
    : undefined;

  const { getFieldMessage, getFieldMessageType } = useFormContext();
  const customFieldMessage = getFieldMessage(id);
  const customFieldMessageType = getFieldMessageType(id);

  const fieldValue = form.getFieldValue(id);

  // Check for validation errors whenever the field value changes
  useEffect(() => {
    const checkFieldError = async () => {
      try {
        await form.validateFields([id]);
        setHasValidationError(false);
      } catch (errorInfo: any) {
        const errorFields = errorInfo.errorFields || [];
        setHasValidationError(
          errorFields.some((field: any) => field.name[0] === id),
        );
      }
    };
    checkFieldError();
  }, [form, id, fieldValue]);

  const helpMessage =
    customFieldMessage || (ooui.tooltipInline ? ooui.tooltip : null);
  const hasError =
    form.getFieldError(id)?.length > 0 ||
    (!!customFieldMessage && customFieldMessageType === "error");
  const hasWarning =
    !!customFieldMessage && customFieldMessageType === "warning";

  const formItem = () => (
    <Form.Item
      className="mb-0"
      name={id}
      valuePropName={valuePropName}
      rules={rules}
      validateStatus={hasError ? "error" : hasWarning ? "warning" : undefined}
      help={helpMessage}
      hasFeedback={hasError || hasWarning}
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
          help: ooui.tooltipInline ? false : tooltip,
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
