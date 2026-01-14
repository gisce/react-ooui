import { memo, useCallback, useContext, useMemo } from "react";
import { InputNumber, InputNumberProps, theme } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";

import { FormContext, FormContextType } from "@/context/FormContext";
import styled from "styled-components";
import { AddonElement } from "@/common/AddonElement";
import { useLocalizedInput } from "@/hooks/useLocalizedInput";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

export const Float = memo((props: WidgetProps) => {
  const { ooui } = props;
  const { id, decimalDigits, readOnly, required } = ooui as FloatOoui;
  const localized = (ooui as any).parsedWidgetProps?.localized ?? false;

  const formContext = useContext(FormContext) as FormContextType;

  const { elementHasLostFocus } = formContext || {};
  const isRequired = useMemo(() => required && !readOnly, [required, readOnly]);

  const Component: React.ComponentType<InputNumberProps> = useMemo(
    () => (isRequired ? RequiredFloat : InputNumber),
    [isRequired],
  );

  const renderAddonElement = useCallback((content?: string) => {
    return content ? <AddonElement content={content} /> : null;
  }, []);

  const { formatter, parser, decimalSeparator } = useLocalizedInput({
    decimalDigits,
    localized,
  });

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
        parser={localized ? parser : undefined}
        decimalSeparator={decimalSeparator}
        onBlur={elementHasLostFocus}
        changeOnWheel={false}
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
