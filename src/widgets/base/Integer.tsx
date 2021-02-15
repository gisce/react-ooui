import React from "react";
import { InputNumber } from "antd";
import FormItem from "@/common/FormItem";
import { Integer as IntegerOoui } from "ooui";

type Props = {
  layout?: "horizontal" | "vertical";
  ooui: IntegerOoui;
  id?: string;
};

export const Integer = (props: Props) => {
  const { ooui, layout } = props;
  const { label } = ooui;
  const id = props.id ? props.id : ooui.id;

  return (
    <FormItem name={id} label={label} layout={layout}>
      <InputNumber
        id={id}
        className="w-full"
        disabled={ooui.readOnly}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9]+/g, "");
        }}
        defaultValue={0}
      />
    </FormItem>
  );
};
