import React from "react";
import { WidgetProps } from "@/types";
import { Avatar as AntdAvatar, Tooltip } from "antd";
import { Avatar as AvatarOoui } from "@gisce/ooui";
import { colorFromString } from "@/helpers/formHelper";
import Field from "@/common/Field";

type AvatarProps = WidgetProps & {
  ooui: AvatarOoui;
};

type AvatarInputProps = {
  ooui: AvatarOoui;
  value?: any;
};

const AvatarInput = ({
  ooui,
  value,
}: AvatarInputProps): React.ReactElement | null => {
  if (!value) {
    return null;
  }
  let formattedValue = value;
  if (ooui.selectionValues?.size) {
    formattedValue = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    formattedValue = value[1];
  }
  const text = formattedValue
    .toString()
    .split(" ")
    .filter((word: string) => word.length > 1)
    .slice(0, 3)
    .map((word: string) => word[0].toUpperCase())
    .join("");
  const backgroundColor = colorFromString(formattedValue);
  return (
    <Tooltip title={formattedValue}>
      <AntdAvatar alt={formattedValue} style={{ backgroundColor }}>
        {text}
      </AntdAvatar>
    </Tooltip>
  );
};

const Avatar = (props: AvatarProps): React.ReactElement => {
  const { ooui } = props;
  return (
    <Field type={"string"} {...props}>
      <AvatarInput ooui={ooui} />
    </Field>
  );
};

// Export for tree view usage where value is passed directly
export { AvatarInput };
export default Avatar;
