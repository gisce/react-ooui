import React from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Text as TextOoui } from "ooui";
const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { readOnly } = ooui;
  return (
    <Field ooui={ooui}>
      <TextArea disabled={readOnly} rows={4} />
    </Field>
  );
};

export default Text;
