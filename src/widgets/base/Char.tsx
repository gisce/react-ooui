import React from "react";
import { Input } from "antd";
import FormItem from "../../common/FormItem";
import { Char as CharOoui } from "ooui";

type Props = {
  layout?: "horizontal" | "vertical";
  ooui: CharOoui;
};

export const Char = (props: Props) => {
  const { ooui, layout } = props;
  const { id, label } = ooui;

  return (
    <FormItem name={id} label={label} layout={layout}>
      <Input id={id} />
    </FormItem>
  );
};
