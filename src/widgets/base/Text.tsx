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
  const { readOnly, required, height } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field required={required} {...props}>
      <TextArea
        disabled={readOnly}
        className={requiredClass}
        style={{ height: height && height + "px", resize: "none" }}
        rows={4}
      />
    </Field>
  );
};

export default Text;
