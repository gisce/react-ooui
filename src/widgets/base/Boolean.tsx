import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import { Boolean as BooleanOoui } from "ooui";
import FormItem from "@/common/FormItem";

type Props = {
  ooui: BooleanOoui;
};

export const Boolean = (props: Props) => {
  const { ooui } = props;
  const { id, label } = ooui;

  return (
    <FormItem name={id} label={label} tooltip={ooui.tooltip}>
      <AntCheckbox disabled={ooui.readOnly} id={id} />
    </FormItem>
  );
};
