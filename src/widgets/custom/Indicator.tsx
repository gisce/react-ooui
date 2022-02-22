import React from "react";
import { Tooltip } from "antd";
import { Statistic, Card } from "antd";
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import {QuestionCircleOutlined} from "@ant-design/icons";

type IndicatorProps = WidgetProps & {
  ooui: IndicatorOoui
};

export const Indicator = (props: IndicatorProps) => {
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

  const field = (
    <Field ooui={ooui}>
      <Statistic title={title} />
    </Field>
  );

  if (ooui.card) {
    return (
      <Card>
        {field}
      </Card>
    );
  } else {
    return field;
  }


};
