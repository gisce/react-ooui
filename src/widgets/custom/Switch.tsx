import { Switch as AntdSwitch, theme } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

const { useToken } = theme;

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
  const { token } = useToken();

  if (required && !readOnly) {
    return (
      <RequiredSwitch
        disabled={readOnly}
        $requiredColor={token.colorPrimaryBg}
        {...restProps}
      />
    );
  }

  return <AntdSwitch disabled={readOnly} {...restProps} />;
};

const RequiredSwitch = styled(AntdSwitch)<{ $requiredColor: string }>`
  .ant-switch-handle::before {
    background-color: ${(props) => props.$requiredColor};
  }
`;
