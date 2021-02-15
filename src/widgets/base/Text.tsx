import React from "react";
import { Input } from "antd";
import FormItem from "@/common/FormItem";
import { Text as TextOoui } from "ooui";
const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { id, label, tooltip, nolabel, readOnly } = ooui;
  return (
    <FormItem name={id} label={label} tooltip={tooltip} nolabel={nolabel}>
      <TextArea disabled={readOnly} rows={4} />
    </FormItem>
  );
};

export default Text;
