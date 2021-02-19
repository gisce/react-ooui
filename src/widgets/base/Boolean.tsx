import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import { Boolean as BooleanOoui } from "ooui";
import FormItem from "@/common/FormItem";

type Props = {
  ooui: BooleanOoui;
};

export const Boolean = (props: Props) => {
  const { ooui } = props;
  const { id, label, tooltip, nolabel } = ooui;

  return (
    <FormItem
      name={id}
      label={label}
      tooltip={tooltip}
      nolabel={nolabel}
      valuePropName="checked"
    >
      <div className="flex flex-row">
        <AntCheckbox disabled={ooui.readOnly} id={id} />
      </div>
    </FormItem>
  );
};
