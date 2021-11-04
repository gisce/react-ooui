import React from "react";
import { Progress } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import styled from "styled-components";

export const ProgressBar = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <ProgressBarInput />
    </Field>
  );
};

export const ProgressBarInput = ({ value }: { value?: number }) => {
  const textValue = `${(value || 0).toLocaleString("en-US", {
    minimumIntegerDigits: 1,
    maximumFractionDigits: 4,
    useGrouping: false,
  })}%`;

  return (
    <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
      <StyledProgress percent={value} />
      <div style={{ flexGrow: 1, paddingLeft: 10 }}>{textValue}</div>
    </div>
  );
};

const StyledProgress = styled(Progress)`
  .ant-progress-outer {
    margin-right: 0px;
    padding-right: 0px;
  }
  .ant-progress-text {
    display: none;
  }
`;
