import React from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import Config from "@/Config";
import { Text as TextOoui } from "ooui";
const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { readOnly, required } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field {...props}>
      <TextArea disabled={readOnly} className={requiredClass} rows={4} />
    </Field>
  );
};

export default Text;
