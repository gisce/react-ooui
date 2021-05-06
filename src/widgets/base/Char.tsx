import React from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";

export const Char = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, isPassword, required } = ooui as CharOoui;
  const requiredClass = required ? Config.requiredClass : undefined;

  return (
    <Field {...props}>
      {isPassword ? (
        <Input.Password disabled={readOnly} id={id} />
      ) : (
        <Input disabled={readOnly} id={id} className={requiredClass} />
      )}
    </Field>
  );
};
