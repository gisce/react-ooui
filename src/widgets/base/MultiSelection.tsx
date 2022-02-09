import React from "react";
import { Select } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { Selection as SelectionOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";

const { Option } = Select;

export const MultiSelection = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} type={"any"} {...props}>
      <MultiSelectionInput {...props} />
    </Field>
  );
};

type SelectionInputProps = WidgetProps & {
  onChange?: (value: any) => void;
  value?: string[];
};

export const MultiSelectionInput = (props: SelectionInputProps) => {
  const { ooui, onChange, value } = props;
  const { selectionValues, readOnly, required } = ooui as SelectionOoui;

  const values = Array.from(selectionValues.entries());

  const options =
    values &&
    values.length &&
    values
      .filter((optionValueKeyPair) => {
        const [optionKey] = optionValueKeyPair;
        if (!value) {
          return true;
        }
        return !value.includes(optionKey);
      })
      .map((entry: string[]) => {
        const [key, value] = entry;
        return (
          <Option key={key} value={value}>
            {value}
          </Option>
        );
      });

  const CustomSelect: any = required && !readOnly ? RequiredSelect : Select;

  function handleChange(changedValues: string[]) {
    const keysForChangedValues = changedValues.map((changedValue) => {
      const entry = values.find(([key, value]) => changedValue === value);
      return entry && entry[0];
    });

    onChange?.(keysForChangedValues);
  }

  return (
    <CustomSelect
      disabled={readOnly}
      onChange={handleChange}
      value={value?.map((key) => selectionValues.get(key))}
      mode="multiple"
      showArrow={true}
    >
      {options}
    </CustomSelect>
  );
};

const RequiredSelect = styled(Select)`
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: ${Config.requiredColor};
  }
`;
