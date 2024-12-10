import { memo, useCallback, useContext, useMemo } from "react";
import { InputNumber, InputNumberProps, theme } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";

import { FormContext, FormContextType } from "@/context/FormContext";
import styled from "styled-components";
const { useToken } = theme;

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

const AddonElement = memo(({ content }: { content: string }) => {
  const { token } = useToken();
  return <div style={{ color: token.colorTextDisabled }}>{content}</div>;
});
AddonElement.displayName = "AddonElement";

export const Float = memo((props: WidgetProps) => {
  const { ooui } = props;
  const { id, decimalDigits, readOnly, required } = ooui as FloatOoui;

  const { elementHasLostFocus } = useContext(FormContext) as FormContextType;

  const isRequired = useMemo(() => required && !readOnly, [required, readOnly]);

  const Component: React.ComponentType<InputNumberProps> = useMemo(
    () => (isRequired ? RequiredFloat : InputNumber),
    [isRequired],
  );

  const renderAddonElement = useCallback((content?: string) => {
    return content ? <AddonElement content={content} /> : null;
  }, []);

  const formatter = useCallback((value: any) => {
    return `${value}`.replace(/[^0-9.-]+/g, "");
  }, []);

  return (
    <Field required={isRequired} type="number" {...props}>
      <Component
        addonBefore={renderAddonElement(ooui.prefix)}
        addonAfter={renderAddonElement(ooui.suffix)}
        disabled={readOnly}
        className="w-full"
        id={id}
        precision={decimalDigits}
        formatter={formatter}
        decimalSeparator="."
        onBlur={elementHasLostFocus}
        wheel={false}
      />
    </Field>
  );
});
Float.displayName = "Float";

const RequiredFloat = styled(InputNumber)`
  &.ant-input-number {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;
