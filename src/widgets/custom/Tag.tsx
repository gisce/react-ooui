import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Tag as AntdTag, TagProps } from "antd";
import { isPresetStatusColor, isPresetColor } from "antd/lib/_util/colors";
import {
  colorFromString,
  colorFromBoolean,
  getTextAndBackgroundColors,
} from "@/helpers/formHelper";
import { useLocale } from "@gisce/react-formiga-components";

function capitalizeFirstLetter(text: string): string {
  if (text.length === 0) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const Tag = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <TagInput {...props} />
    </Field>
  );
};

export const TagInput = (props: any) => {
  const { t } = useLocale();
  const { ooui, value } = props;
  let formattedValue = value;
  let colorMethod: any = colorFromString;
  let colorValue = value;
  if (ooui.selectionValues.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    colorValue = value[0];
    formattedValue = value[1];
  } else if (ooui.fieldType === "boolean") {
    formattedValue = value
      ? capitalizeFirstLetter(ooui.label)
      : `${t("not")} ${ooui.label.toLowerCase()}`;
    colorMethod = colorFromBoolean;
  }

  if (!formattedValue) {
    return null;
  }
  const color =
    ooui.colors === "auto"
      ? colorMethod(colorValue)
      : ooui.colors[colorValue] || colorMethod(colorValue);
  return <CustomTag color={color}>{formattedValue}</CustomTag>;
};

export const CustomTag = (props: TagProps) => {
  let { color } = props;
  let style = {};
  if (!isPresetStatusColor(props.color) && !isPresetColor(props.color)) {
    const colors = getTextAndBackgroundColors(color as string);
    style = {
      color: colors.text,
      borderColor: colors.text,
      borderStyle: "solid",
      borderWidth: "1px",
    };
    color = colors.background;
  }
  return (
    <AntdTag {...props} style={style} color={color}>
      {props.children}
    </AntdTag>
  );
};
