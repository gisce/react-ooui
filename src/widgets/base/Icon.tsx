import React from "react";
import Field from "@/common/Field";
import { Icon as IconOoui } from "@gisce/ooui";
import { iconMapper } from "@gisce/react-formiga-components";

type IconProps = {
  ooui: IconOoui;
};

type IconRenderProps = {
  name: string;
  size?: number;
  color?: string;
};

export const IconRender = (props: IconRenderProps) => {
  const { name, size, color } = props;

  const iconStyle: any = {};
  if (size) {
    iconStyle.fontSize = size;
  }
  if (color) {
    iconStyle.color = color;
  }

  const MappedIcon = iconMapper(
    name,
    Object.keys(iconStyle).length > 0 ? { style: iconStyle } : undefined,
  );

  if (MappedIcon) {
    return <MappedIcon />;
  }

  return null;
};

export const Icon = (props: IconProps) => {
  const { ooui } = props;
  const { required, name, size, color } = ooui as any;

  // If name is directly an icon (static usage like <icon name="home" />)
  if (iconMapper(name)) {
    return <IconRender name={name} size={size} color={color} />;
  }

  // Otherwise, it's a field and needs to receive value from Field component
  return (
    <Field required={required} {...props}>
      <IconInput ooui={ooui} />
    </Field>
  );
};

interface IconInputProps {
  ooui: IconOoui;
  value?: string;
}

export const IconInput = (props: IconInputProps) => {
  const { ooui, value } = props;
  const { size, color } = ooui as any;

  if (value && iconMapper(value)) {
    return <IconRender name={value} size={size} color={color} />;
  }

  // If no icon is found, log to console but don't render anything
  if (value) {
    console.warn(`Icon not found: ${value}`);
  }

  return null;
};
