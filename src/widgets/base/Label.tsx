import React from "react";
import { Tooltip, Typography, theme } from "antd";
import { WidgetProps } from "@/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Label as LabelOoui } from "@gisce/ooui";
import { Interweave } from "interweave";
const { Text, Title } = Typography;
const { useToken } = theme;

type Props = WidgetProps & {
  align?: "left" | "center" | "right";
  responsiveBehaviour?: boolean;
};

const alignClass = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

const Label = (props: Props) => {
  const { ooui, align, responsiveBehaviour } = props;
  const { label, tooltip, fieldForLabel, labelSize, labelType } =
    ooui as LabelOoui;
  const addColon = fieldForLabel !== null ? true : false;
  const labelText = addColon && label.length > 1 ? label + " :" : label;
  const responsiveAlign = responsiveBehaviour ? "left" : "right";
  const labelAlgin = align ? align : fieldForLabel ? responsiveAlign : "left";
  const { token } = useToken();

  const TextType = labelSize === undefined ? Text : Title;

  return (
    <div
      className={`flex flex-row items-center pb-1 pt-1 ${alignClass[labelAlgin]}`}
    >
      {tooltip && (
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined className="pr-1 text-xs" style={{
            color: token.colorPrimary
          }} />
        </Tooltip>
      )}
      <span className="pr-2">
        <TextType
          level={labelSize}
          type={labelType as any}
        >
          <Interweave content={labelText} />
        </TextType>
      </span>
    </div>
  );
};

export default Label;
