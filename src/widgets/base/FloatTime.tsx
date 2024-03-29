import React, { useContext, useEffect, useRef, useState } from "react";
import { Input, theme } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import { parseFloatToString, parseStringToFloat } from "@/helpers/timeHelper";
import { FormContext, FormContextType } from "@/context/FormContext";
const { useToken } = theme;

export const FloatTime = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui as FloatOoui;

  return (
    <Field required={required} type={"number"} {...props}>
      <FloatTimeInput ooui={ooui as FloatOoui} />
    </Field>
  );
};

interface FloatTimeInputProps {
  ooui: FloatOoui;
  value?: number;
  onChange?: (value?: number) => void;
}

export const FloatTimeInput: React.FC<FloatTimeInputProps> = (
  props: FloatTimeInputProps,
) => {
  const { ooui, value, onChange } = props;
  const { id, readOnly, required } = ooui as FloatOoui;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;
  const inputTextRef = useRef<string>();
  const [inputText, setInputText] = useState<string>();
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  useEffect(() => {
    setInputText(parseFloatToString(value!));
  }, [value]);

  const triggerChange = (changedValue?: number) => {
    onChange?.(changedValue);
  };

  function onValueStringChange(e: React.ChangeEvent<HTMLInputElement>) {
    inputTextRef.current = e.target.value;
    setInputText(e.target.value);
  }

  async function onElementLostFocus() {
    triggerChange(parseStringToFloat(inputText));
    await new Promise((resolve) => setTimeout(resolve, 300));
    elementHasLostFocus?.();
  }

  return (
    <Input
      value={inputText}
      disabled={readOnly}
      className={"w-full"}
      style={requiredStyle}
      id={id}
      placeholder={"00:00"}
      onChange={onValueStringChange}
      onBlur={onElementLostFocus}
    />
  );
};
