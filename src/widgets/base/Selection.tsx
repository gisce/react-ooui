import React from "react";
import { Select } from "antd";
import Field from "@/common/Field";
import { Selection as SelectionOoui } from "ooui";
const { Option } = Select;

type Props = {
  layout?: "horizontal" | "vertical";
  ooui: SelectionOoui;
};

export const Selection = (props: Props) => {
  const { ooui, layout } = props;
  const { selectionValues, readOnly } = ooui;
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
    <Field ooui={ooui} layout={layout}>
      <Select disabled={readOnly}>{options}</Select>
    </Field>
  );
};
