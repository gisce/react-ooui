import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { theme } from "antd";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

export const Boolean = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui;

  return (
    <Field {...props} valuePropName="checked">
      <BooleanInput id={id} readOnly={readOnly} required={required} />
    </Field>
  );
};

const BooleanInput = (props: any) => {
  const { required, readOnly, ...restProps } = props;

  const CustomCheckbox: any =
    required && !readOnly ? RequiredCheckbox : AntCheckbox;

  return (
    <div className="flex flex-row">
      <CustomCheckbox disabled={readOnly} {...restProps} />
    </div>
  );
};

const RequiredCheckbox = styled(AntCheckbox)`
  .ant-checkbox-inner {
    background-color: ${mapToken.colorPrimaryBg};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${mapToken.colorPrimary};
  }
`;
