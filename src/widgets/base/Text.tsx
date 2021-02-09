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

  return (
    <FormItem name={ooui.id} label={ooui.label}>
      <TextArea rows={4} />
    </FormItem>
  );
};

export default Text;
