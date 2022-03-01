import React from "react";
import { Tooltip } from "antd";
import { Statistic, Card } from "antd";
import { Indicator as IndicatorOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Field from "@/common/Field";
import {QuestionCircleOutlined} from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";

type IndicatorProps = WidgetProps & {
  ooui: IndicatorOoui
};

export const Indicator = (props: IndicatorProps) => {
  const { ooui } = props;

  return (
    <Field ooui={ooui}>
      <IndicatorInput ooui={ooui} />
    </Field>
  );
};

type IndicatorInputProps = {
  ooui: IndicatorOoui;
  value?: any;
}

const IndicatorInput = (props: IndicatorInputProps) => {
  const { ooui, value } = props;
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

  const Icon: React.ElementType = iconMapper(ooui.icon);
  const field = (
    <Statistic
      title={title}
      prefix={Icon && <Icon/>}
      suffix={ooui.suffix}
      value={Array.isArray(value) ? value[1] : value}
    />
  )
  if (ooui.card) {
    return (
      <Card>
        {field}
      </Card>
    );
  } else {
    return field;
  }
}
