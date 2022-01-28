import React from "react";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { GridUi } from "fiber-diagram";

export const FiberGrid = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui as CharOoui;
  // const requiredClass =
  //   required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field required={required} {...props}>
      <FiberGridInput />
    </Field>
  );
};

interface FiberGridInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const FiberGridInput = (props: FiberGridInputProps) => {
  const { value, onChange } = props;

  if (!value) {
    return null;
  }

  // Validate string json
  try {
    JSON.parse(value);
  } catch (e) {
    console.log(e);
    return null;
  }

  return (
    <GridUi
      inputJson={value}
      onChange={(newValue) => {
        if (onChange) {
          onChange(newValue);
        }
      }}
    />
  );
};
