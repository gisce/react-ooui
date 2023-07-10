import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Tag as AntdTag } from 'antd';
import { isPresetStatusColor } from 'antd/lib/_util/colors'
import { colorFromString, colorTextFromBackground } from "@/helpers/formHelper";

export const Tag = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <TagInput {...props}/>
    </Field>
  );
};

export const TagInput = (props: any) => {
  const {ooui, value} = props;
  let formattedValue = value;
  let colorValue = value;
  if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    colorValue = value[0];
    formattedValue = value[1];
  }
  if (!value) {
    return null
  }
  const color = ooui.colors === "auto" ? colorFromString(colorValue) : ooui.colors[colorValue] || colorFromString(colorValue);
  return (
    <AntdTag color={color} style={isPresetStatusColor(color) ? {} : {color: colorTextFromBackground(color)}}>{formattedValue}</AntdTag>
  );
}