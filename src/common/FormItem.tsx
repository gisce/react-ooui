import React from "react";
import { Form, Tooltip, Row, Col } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

export default function FormItem({
  name,
  label,
  children,
  layout = "horizontal",
  tooltip,
}: {
  name: string;
  label?: string;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  tooltip?: string;
}) {
  const labelText = label && label.length > 1 ? label + " :" : " ";

  const horizontalMode = () => {
    return (
      <Row align="middle">
        <Col className="ml-2" flex="7rem">
          <div className="flex flex-col items-end">
            {labelWithTooltip(labelText, tooltip)}
          </div>
        </Col>
        <Col flex="auto">
          <Form.Item className="mb-0" name={name}>
            {children}
          </Form.Item>
        </Col>
      </Row>
    );
  };

  const verticalMode = () => {
    return (
      <>
        {labelWithTooltip(labelText, tooltip)}
        <Form.Item className="mb-0" name={name}>
          {children}
        </Form.Item>
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
