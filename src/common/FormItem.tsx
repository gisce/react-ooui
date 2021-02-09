import React from "react";
import { Form, Tooltip } from "antd";
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
  const horizontalMode = (labelText: string) => {
    return (
      <div className="flex flex-row items-center">
        <div className="w-32 pl-2">
          <div className="flex flex-col items-end">
            <div className="flex flex-row items-center pb-1">
              {tooltip && (
                <Tooltip title={tooltip}>
                  <QuestionCircleOutlined className="text-xs text-blue-400 pr-1" />
                </Tooltip>
              )}
              <span className="text-right pr-2">{labelText}</span>
            </div>
          </div>
        </div>
        <div className="flex-grow items-center">
          <Form.Item className="mb-0" name={name}>
            {children}
          </Form.Item>
        </div>
      </div>
    );
  };

  const verticalMode = () => {
    return (
      <>
        {tooltip && <QuestionCircleOutlined />}
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
