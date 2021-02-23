import React from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";

export const Char = (props: WidgetProps) => {
  const { ooui, layout } = props;
  const { id, readOnly, isPassword } = ooui as CharOoui;

  return (
    <Field ooui={ooui} layout={layout}>
      {isPassword ? (
        <Input.Password disabled={readOnly} id={id} />
      ) : (
        <Input disabled={readOnly} id={id} />
      )}
    </Field>
  );
};
