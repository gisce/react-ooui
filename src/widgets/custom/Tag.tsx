import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Tag as AntdTag } from 'antd';
import { colorFromString } from "@/helpers/formHelper";

export const Tag = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <TagInput {...props}/>
    </Field>
  );
};

export const TagInput = (props: any) => {
  const {ooui, value} = props;
  if (!value) {
    return null
  }
  const color = ooui.colors === "auto" ? colorFromString(value) : ooui.colors[value]
  return (
    <AntdTag color={color}>{ooui.selectionValues.get(value)}</AntdTag>
  );
}