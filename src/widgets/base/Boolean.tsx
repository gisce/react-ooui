import React from "react";
import { Form, Checkbox as AntCheckbox } from "antd";
import { Boolean as BooleanOoui } from "ooui";

type Props = {
  ooui: BooleanOoui;
};

export const Boolean = (props: Props) => {
  const { ooui } = props;
  const { id, label } = ooui;

  return (
    <Form.Item name={id} label={label} tooltip={ooui.tooltip}>
      <AntCheckbox disabled={ooui.readOnly} id={id} />
    </Form.Item>
  );
};
