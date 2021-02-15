import React from "react";
import { Select } from "antd";
import FormItem from "@/common/FormItem";
import { Selection as SelectionOoui } from "ooui";
const { Option } = Select;

type Props = {
  layout?: "horizontal" | "vertical";
  ooui: SelectionOoui;
};

export const Selection = (props: Props) => {
  const { ooui, layout } = props;
  const { id, label, selectionValues, tooltip, nolabel } = ooui;
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
    <FormItem
      name={id}
      label={label}
      layout={layout}
      tooltip={tooltip}
      nolabel={nolabel}
    >
      <Select disabled={ooui.readOnly}>{options}</Select>
    </FormItem>
  );
};
