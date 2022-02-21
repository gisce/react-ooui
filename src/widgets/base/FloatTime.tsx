import React, { useEffect, useRef, useState } from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Float as FloatOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { parseFloatToString, parseStringToFloat } from "@/helpers/timeHelper";

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
  props: FloatTimeInputProps
) => {
  const { ooui, value, onChange } = props;
  const { id, readOnly, required } = ooui as FloatOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const inputTextRef = useRef<string>();
  const [inputText, setInputText] = useState<string>();

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

  function onElementLostFocus() {
    triggerChange(parseStringToFloat(inputText));
  }

  return (
    <Input
      value={inputText}
      disabled={readOnly}
      className={"w-full " + requiredClass}
      id={id}
      placeholder={"00:00"}
      onChange={onValueStringChange}
      onBlur={onElementLostFocus}
    />
  );
};
