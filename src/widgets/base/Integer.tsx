import { memo, useCallback, useContext } from "react";
import { InputNumber, InputNumberProps, theme } from "antd";
import Field from "@/common/Field";
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

type IntegerProps = WidgetProps & {
  onChange?: (newValue: number) => void;
};

export const Integer = memo((props: IntegerProps) => {
  const { ooui, onChange } = props;
  const { id, readOnly, required, prefix, suffix } = ooui;
  const localized = (ooui as any).parsedWidgetProps?.localized ?? false;

  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  const isRequired = required && !readOnly;
  const Component: React.ComponentType<InputNumberProps> = isRequired
    ? RequiredInteger
    : InputNumber;

  const { formatter, parser, onFocus, onBlur } = useLocalizedInput({
    isInteger: true,
    localized,
  });

  const handleChange = useCallback(
    (value: number | string | null) => onChange?.(value as number),
    [onChange],
  );

  const handleBlur = useCallback(() => {
    onBlur();
    elementHasLostFocus?.();
  }, [onBlur, elementHasLostFocus]);

  return (
    <Field required={isRequired} type="number" {...props}>
      <Component
        addonBefore={renderAddon(prefix)}
        addonAfter={renderAddon(suffix)}
        id={id}
        className="w-full"
        disabled={readOnly}
        formatter={formatter}
        parser={localized ? parser : undefined}
        onChange={handleChange}
        onFocus={localized ? onFocus : undefined}
        onBlur={localized ? handleBlur : elementHasLostFocus}
        precision={0}
        changeOnWheel={false}
      />
    </Field>
  );
});
Integer.displayName = "Integer";

const RequiredInteger = styled(InputNumber)`
  &.ant-input-number {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;
