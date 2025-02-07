import React, { useContext, useState, useEffect, useCallback } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Tag as AntdTag, TagProps } from "antd";
import { isPresetStatusColor, isPresetColor } from "antd/lib/_util/colors";
import {
  colorFromString,
  colorFromBoolean,
  getTextAndBackgroundColors,
} from "@/helpers/formHelper";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import ConnectionProvider from "@/ConnectionProvider";
import { FormContext, FormContextType } from "@/context/FormContext";
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
  const [readObjects, cancelReadObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );
  const { getFieldValue } = (useContext(FormContext) as FormContextType) || {};
  const { ooui, value } = props;
  const [color, setColor] = useState<string>("default");

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

  const updateColor = useCallback(async () => {
    if (ooui.colorField) {
      if (ooui.fieldType === "many2one" && ooui.raw_props?.relation) {
        const response = await readObjects({
          model: ooui.raw_props.relation,
          ids: [value[0]],
          fieldsToRetrieve: [ooui.colorField],
        });
        const retrievedColor = response[0]?.[ooui.colorField];

        if (retrievedColor) {
          const sanitizedColor = retrievedColor.includes("#")
            ? retrievedColor
            : `#${retrievedColor}`;
          setColor(sanitizedColor);
        }
      } else {
        setColor(getFieldValue(ooui.colorField));
      }
    } else {
      setColor(
        ooui.colors === "auto"
          ? colorMethod(colorValue)
          : ooui.colors[colorValue] || colorMethod(colorValue),
      );
    }
  }, [ooui?.colorField]);

  useEffect(() => {
    updateColor().catch((err) => console.error(err));
  }, [ooui?.colorField]);

  if (!formattedValue) {
    return null;
  }

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
