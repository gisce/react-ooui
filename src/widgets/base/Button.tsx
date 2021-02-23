import React from "react";
import Field from "@/common/Field";
import { Button as AntButton } from "antd";
import { WidgetProps } from "@/types";

export const Button = (props: WidgetProps) => {
  const { ooui } = props;
  const { label, activated } = ooui;

  return (
    <Field ooui={ooui}>
      <AntButton className="w-full" disabled={!activated}>
        {label}
      </AntButton>
    </Field>
  );
};
