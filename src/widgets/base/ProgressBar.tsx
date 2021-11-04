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
  return (
    <StyledProgress
      percent={value}
      format={(percent: number | undefined) => {
        return `${(percent || 0).toLocaleString("en-US", {
          minimumIntegerDigits: 1,
          maximumFractionDigits: 4,
          useGrouping: false,
        })}%`;
      }}
    />
  );
};

const StyledProgress = styled(Progress)`
  .ant-progress-outer {
    margin-right: -72px;
    padding-right: 72px;
  }
`;
