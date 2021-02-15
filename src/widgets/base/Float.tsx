import React from "react";
import { InputNumber } from "antd";
import FormItem from "@/common/FormItem";
import { Float as FloatOoui } from "ooui";

type Props = {
  layout?: "horizontal" | "vertical";
  ooui: FloatOoui;
  id?: string;
};

export const Float = (props: Props) => {
  const { ooui, layout } = props;
  const { label } = ooui;
  const id = props.id ? props.id : ooui.id;

  return (
    <FormItem name={id} label={label} layout={layout} tooltip={ooui.tooltip}>
      <InputNumber
        disabled={ooui.readOnly}
        className="w-full"
        id={id}
        precision={ooui.decimalDigits}
        formatter={(value) => {
          return `${value}`.replace(/[^0-9\.\-]+/g, "");
        }}
        defaultValue={0}
        decimalSeparator={"."}
      />
    </FormItem>
  );
};
