import { ColorPicker as AntdColorPicker } from "antd";
import { ColorPicker as ColorPickerOoui } from "@gisce/ooui";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

type ColorPickerProps = Omit<WidgetProps, "ooui"> & {
  ooui: ColorPickerOoui;
  onChange?: (value: string) => void;
};

export const ColorPicker = (props: ColorPickerProps) => {
  return (
    <Field {...props}>
      <ColorPickerInput {...props} />
    </Field>
  );
};

export const ColorPickerInput = (
  props: ColorPickerProps & { value?: any; onChange?: (value: any) => void },
) => {
  const { ooui, value, onChange } = props;

  return (
    <AntdColorPicker
      showText={ooui.showText}
      disabled={ooui.readOnly}
      onChange={(value) => {
        if (onChange) {
          onChange(value.toHex());
        }
      }}
      format="hex"
      value={value}
    />
  );
};
