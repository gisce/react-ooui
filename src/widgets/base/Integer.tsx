import { memo, useCallback, useContext, useMemo } from "react";
import { InputNumber, InputNumberProps, theme } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { FormContext, FormContextType } from "@/context/FormContext";
import styled from "styled-components";
import { AddonElement } from "@/common/AddonElement";
import { useLocalizedInput } from "@/hooks/useLocalizedInput";
const { useToken } = theme;

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

type IntegerProps = WidgetProps & {
  onChange?: (newValue: number) => void;
};

export const Integer = memo((props: IntegerProps) => {
  const { ooui, onChange } = props;
  const { id, readOnly, required } = ooui;
  const localized = (ooui as any).parsedWidgetProps?.localized ?? false;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;
  const formContext = useContext(FormContext) as FormContextType;

  const { elementHasLostFocus } = formContext || {};
  const isRequired = useMemo(() => required && !readOnly, [required, readOnly]);

  const Component: React.ComponentType<InputNumberProps> = useMemo(
    () => (isRequired ? RequiredInteger : InputNumber),
    [isRequired],
  );

  const renderAddonElement = useCallback((content?: string) => {
    return content ? <AddonElement content={content} /> : null;
  }, []);

  const { formatter, parser } = useLocalizedInput({
    isInteger: true,
    localized,
  });

  const handleChange = useCallback(
    (newValue: any) => {
      const newNumber = newValue as number;
      onChange?.(newNumber);
    },
    [onChange],
  );

  return (
    <Field required={isRequired} type={"number"} {...props}>
      <Component
        addonBefore={renderAddonElement(ooui.prefix)}
        addonAfter={renderAddonElement(ooui.suffix)}
        id={id}
        className={"w-full "}
        disabled={readOnly}
        formatter={formatter}
        parser={localized ? parser : undefined}
        onChange={handleChange}
        onBlur={elementHasLostFocus}
        precision={0}
        style={requiredStyle}
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
