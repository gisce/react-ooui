import React from "react";
import { Tooltip } from "antd";
import { WidgetProps } from "@/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Label as LabelOoui } from "ooui";

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
  const { label, tooltip, fieldForLabel } = ooui as LabelOoui;
  const addColon = fieldForLabel !== null ? true : false;
  const labelText = addColon && label.length > 1 ? label + " :" : label;
  const responsiveAlign = responsiveBehaviour ? "left" : "right";
  const labelAlgin = align ? align : fieldForLabel ? responsiveAlign : "left";

  return (
    <div className={`flex flex-row items-center pb-1 pt-1 ${alignClass[labelAlgin]}`}>
      {tooltip && (
        <Tooltip title={tooltip}>
          <QuestionCircleOutlined className="text-xs text-blue-400 pr-1" />
        </Tooltip>
      )}
      <span className="pr-2">{labelText}</span>
    </div>
  );
};

export default Label;
