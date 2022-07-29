import React from "react";
import { Radio as RadioAnt, Space } from "antd";

import Field from "@/common/Field";
import { Radio as RadioOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";

export const Radio = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} type={"any"} {...props}>
      <SelectionInput {...props} />
    </Field>
  );
};

type RadioInputProps = WidgetProps & {
  onChange?: (value: any) => void;
  value?: string;
};

export const SelectionInput = (props: RadioInputProps) => {
  const { ooui, onChange, value } = props;
  const { selectionValues, readOnly, direction } = ooui as RadioOoui;

  const values = Array.from(selectionValues.entries());

  const options =
    values &&
    values.length &&
    values.map((entry: string[]) => {
      const [key, value] = entry;
      return (
        <RadioAnt key={key} value={key}>
          {value}
        </RadioAnt>
      );
    });

  return (
    <RadioAnt.Group disabled={readOnly} onChange={onChange} value={value}>
      <Space direction={direction}>
        {options}
      </Space>
    </RadioAnt.Group>
  );
};