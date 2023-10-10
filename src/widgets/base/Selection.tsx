import React from "react";
import { Select, theme } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { Selection as SelectionOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

const { Option } = Select;

export const Selection = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} type={"any"} {...props}>
      <SelectionInput {...props} />
    </Field>
  );
};

type SelectionInputProps = WidgetProps & {
  onChange?: (value: any) => void;
  value?: string;
};

export const SelectionInput = (props: SelectionInputProps) => {
  const { ooui, onChange, value } = props;
  const { selectionValues, readOnly, required } = ooui as SelectionOoui;

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

  const CustomSelect: any = required && !readOnly ? RequiredSelect : Select;

  return (
    <CustomSelect
      disabled={readOnly}
      onChange={onChange}
      value={value}
      optionFilterProp="children"
      filterOption={(input: string, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      showSearch
    >
      {options}
    </CustomSelect>
  );
};

const RequiredSelect = styled(Select)`
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;
