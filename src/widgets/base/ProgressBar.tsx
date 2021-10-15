import React from "react";
import { Progress } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export const ProgressBar = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <ProgressBarInput />
    </Field>
  );
};

export const ProgressBarInput = ({ value }: { value?: number }) => {
  return <Progress percent={value} className={"pr-1"} />;
};
