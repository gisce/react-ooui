import React from "react";
import { Form, Tooltip, Row, Col } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function FormItem({
  name,
  label,
  children,
  layout = "horizontal",
  tooltip,
  nolabel = false,
  valuePropName,
}: {
  name: string;
  label?: string;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  tooltip?: string;
  nolabel?: boolean;
  valuePropName?: string;
}) {
  const labelText = label && label.length > 1 ? label + " :" : " ";

  const formItem = () => (
    <Form.Item className="mb-0" name={name} valuePropName={valuePropName}>
      {children}
    </Form.Item>
  );

  const horizontalMode = () => {
    return (
      <Row align="middle">
        {!nolabel ? (
          <Col className="ml-2" flex="7rem">
            <div className="flex flex-col items-end">
              {labelWithTooltip(nolabel ? "" : labelText, tooltip)}
            </div>
          </Col>
        ) : null}
        <Col flex="auto">{formItem()}</Col>
      </Row>
    );
  };

  const verticalMode = () => {
    return (
      <>
        {labelWithTooltip(nolabel ? "" : labelText, tooltip)}
        {formItem()}
      </>
    );
  };

  return layout === "horizontal" ? horizontalMode() : verticalMode();
}

const labelWithTooltip = (label: string, tooltip?: string) => {
  return (
    <div className="flex flex-row items-center pb-1">
      {tooltip && (
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined className="text-xs text-blue-400 pr-1" />
        </Tooltip>
      )}
      <span className="text-right pr-2">{label}</span>
    </div>
  );
};

export { labelWithTooltip };
