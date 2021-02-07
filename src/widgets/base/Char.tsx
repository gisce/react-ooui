import React from "react";
import { Input } from "antd";
import FormItem from "../../common/FormItem";
import { Char as CharOoui } from "ooui";

type Props = {
  id: string;
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  onPressEnter?:
    | ((event: React.KeyboardEvent<HTMLInputElement>) => void)
    | undefined;
  children?: React.ReactNode;
  layout?: "horizontal" | "vertical";
  ooui?: CharOoui;
};

export const Char = (props: Props) => {
  const { ooui } = props;
  let _props: Props;
  if (ooui) {
    const { id, label, placeholder } = ooui;
    _props = { ...props, id, label, placeholder };
  } else {
    _props = { ...props };
  }
  const {
    id,
    label,
    layout,
    value,
    placeholder,
    onChange,
    onPressEnter,
  } = _props;

  return (
    <FormItem name={id} label={label} layout={layout}>
      <Input
        {...props}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      >
        {props.children}
      </Input>
    </FormItem>
  );
};
