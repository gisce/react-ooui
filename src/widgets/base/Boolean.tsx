import { Checkbox as AntCheckbox, theme } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

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
    <div
      className="flex flex-row items-center pb-1 pt-1"
      style={{ position: "relative", zIndex: 1 }}
    >
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
