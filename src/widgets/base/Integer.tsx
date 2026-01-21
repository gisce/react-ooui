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
  onChange?: (newValue: number | bigint) => void;
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
    (value: number | string | null) => {
      if (value === null || value === "") return;

      // stringMode returns strings - convert appropriately
      if (typeof value === "string") {
        const numValue = Number(value);
        // Check if it's a safe integer (no precision loss)
        if (Number.isSafeInteger(numValue)) {
          onChange?.(numValue);
        } else {
          // For values beyond safe integer range, use BigInt
          onChange?.(BigInt(value));
        }
        return;
      }

      onChange?.(value);
    },
    [onChange],
  );

  const handleBlur = useCallback(() => {
    onBlur();
    elementHasLostFocus?.();
  }, [onBlur, elementHasLostFocus]);

  return (
    <Field required={isRequired} type="number" {...props}>
      <Component
        stringMode
        addonBefore={renderAddon(prefix)}
        addonAfter={renderAddon(suffix)}
        id={id}
        className="w-full"
        disabled={readOnly}
        formatter={formatter}
        parser={parser}
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
