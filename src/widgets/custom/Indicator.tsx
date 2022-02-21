import React from "react";
import { Tooltip } from "antd";
import { Statistic } from "antd";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import {QuestionCircleOutlined} from "@ant-design/icons";

export const Indicator = (props: WidgetProps) => {
  const { ooui } = props;

  const title = (
    <>
      <span>{ooui.label} </span>
      {ooui.tooltip &&
        <Tooltip title={ooui.tooltip}>
          <QuestionCircleOutlined className="text-xs text-blue-400 pr-1"/>
        </Tooltip>
      }
    </>
  );

  return (
    <Field ooui={ooui}>
      <Statistic title={title} />
    </Field>
  );
};
