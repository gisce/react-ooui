import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Tag as AntdTag, TagProps } from "antd";
import { isPresetStatusColor, isPresetColor } from "antd/lib/_util/colors";
import { colorFromString } from "@/helpers/formHelper";

export const Tag = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <TagInput {...props} />
    </Field>
  );
};

export const TagInput = (props: any) => {
  const { ooui, value } = props;
  let formattedValue = value;
  let colorValue = value;
  if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    colorValue = value[0];
    formattedValue = value[1];
  }
  if (!value) {
    return null;
  }
  const color =
    ooui.colors === "auto"
      ? colorFromString(colorValue)
      : ooui.colors[colorValue] || colorFromString(colorValue);
  return <CustomTag color={color}>{formattedValue}</CustomTag>;
};

export const CustomTag = (props: TagProps) => {
  let { color } = props;
  let style = {};
  if (!isPresetStatusColor(props.color) && !isPresetColor(props.color)) {
    style = {
      color,
      borderColor: color,
      borderStyle: "solid",
      borderWidth: "1px",
    };
    color = `${color}20`;
  }
  return (
    <AntdTag {...props} style={style} color={color}>
      {props.children}
    </AntdTag>
  );
};
