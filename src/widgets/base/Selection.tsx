import React from "react";
import { Select } from "antd";
import FormItem from "../../common/FormItem";

type OptionValue = {
  id: string;
  name: string;
};

export const Selection = ({
  id,
  label,
  defaultValue,
  values,
  placeholder,
  onChange,
  layout = "horizontal",
  ...props
}: {
  id: string;
  label?: string;
  defaultValue?: string;
  values?: OptionValue[];
  placeholder?: string;
  layout?: "horizontal" | "vertical";
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => {
  const { Option } = Select;

  const options =
    values &&
    values.length &&
    values.map((v) => {
      return (
        <Option key={v.id} value={v.id}>
          {v.name}
        </Option>
      );
    });

  return (
    <FormItem name={id} label={label} layout={layout}>
      <Select {...props}>{options}</Select>
    </FormItem>
  );
};
