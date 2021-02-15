import React from "react";
import { Form, Button as AntButton } from "antd";
import { Button as ButtonOoui } from "ooui";
import FormItem from "@/common/FormItem";

type Props = {
  ooui: ButtonOoui;
};

export const Button = (props: Props) => {
  const { ooui } = props;
  const { id, label, activated } = ooui;

  return (
    <FormItem name={id} label={""} nolabel={true}>
      <AntButton className="w-full" disabled={!activated}>
        {label}
      </AntButton>
    </FormItem>
  );
};
