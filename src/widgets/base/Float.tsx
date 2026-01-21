import { memo, useCallback, useContext } from "react";
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

function renderAddon(content?: string): React.ReactNode {
  return content ? <AddonElement content={content} /> : null;
}

export const Float = memo((props: WidgetProps) => {
  const { ooui } = props;
  const { id, decimalDigits, readOnly, required, prefix, suffix } =
    ooui as FloatOoui;
  const localized = (ooui as any).parsedWidgetProps?.localized ?? false;

  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  const isRequired = required && !readOnly;
  const Component: React.ComponentType<InputNumberProps> = isRequired
    ? RequiredFloat
    : InputNumber;

  const { formatter, parser, decimalSeparator, onFocus, onBlur } =
    useLocalizedInput({
      decimalDigits,
      localized,
    });

  const handleBlur = useCallback(() => {
    onBlur();
    elementHasLostFocus?.();
  }, [onBlur, elementHasLostFocus]);

  return (
    <Field required={isRequired} type="number" {...props}>
      <Component
        addonBefore={renderAddon(prefix)}
        addonAfter={renderAddon(suffix)}
        disabled={readOnly}
        className="w-full"
        id={id}
        precision={decimalDigits}
        formatter={formatter}
        parser={localized ? parser : undefined}
        decimalSeparator={localized ? undefined : decimalSeparator}
        onFocus={localized ? onFocus : undefined}
        onBlur={localized ? handleBlur : elementHasLostFocus}
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
