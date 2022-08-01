import React from "react";
import { Switch as AntdSwitch } from "antd";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const Switch = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui;

  return (
    <Field
      {...props}
      valuePropName="checked"
    >
      <SwitchInput id={id} readOnly={readOnly} required={required} />
    </Field>
  );
};

const SwitchInput = (props: any) => {
  const { required, readOnly, ...restProps } = props;


  return (
    <div className="flex flex-row">
      <AntdSwitch disabled={readOnly} {...restProps} />
    </div>
  );
};
