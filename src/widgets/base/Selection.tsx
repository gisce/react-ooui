import React from "react";
import { Select } from "antd";
import Field from "@/common/Field";
import { Selection as SelectionOoui } from "ooui";
import { WidgetProps } from "@/types";

const { Option } = Select;

export const Selection = (props: WidgetProps) => {
  const { ooui } = props;
  const { selectionValues, readOnly } = ooui as SelectionOoui;
  const values = Array.from(selectionValues.entries());

  const options =
    values &&
    values.length &&
    values.map((entry: string[]) => {
      const [key, value] = entry;
      return (
        <Option key={key} value={key}>
          {value}
        </Option>
      );
    });

  return (
    <Field {...props}>
      <Select disabled={readOnly}>{options}</Select>
    </Field>
  );
};
