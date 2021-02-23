import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const Boolean = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly } = ooui;

  return (
    <Field ooui={ooui} valuePropName="checked">
      <div className="flex flex-row">
        <AntCheckbox disabled={readOnly} id={id} />
      </div>
    </Field>
  );
};
