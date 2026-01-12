import { Switch as AntdSwitch, theme } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

export const Switch = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui;

  return (
    <Field {...props} valuePropName="checked">
      <SwitchInput id={id} readOnly={readOnly} required={required} />
    </Field>
  );
};

const SwitchInput = (props: any) => {
  const { required, readOnly, ...restProps } = props;

  const CustomSwitch: any = required && !readOnly ? RequiredSwitch : AntdSwitch;

  return (
    <div className="flex flex-row">
      <CustomSwitch disabled={readOnly} {...restProps} />
    </div>
  );
};

const RequiredSwitch = styled(AntdSwitch)`
  &.ant-switch {
    background-color: ${mapToken.colorPrimaryBg};
  }

  &.ant-switch-checked {
    background-color: ${mapToken.colorPrimary};
  }
`;
