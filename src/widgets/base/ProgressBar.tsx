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
    <StyledProgressContainer>
      <StyledProgress percent={value} />
      <StyledText>{textValue}</StyledText>
    </StyledProgressContainer>
  );
};

const StyledProgressContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 0;
`;

const StyledProgress = styled(Progress)`
  flex: 1;
  min-width: 0;
  .ant-progress-outer {
    margin-right: 0px;
    padding-right: 0px;
  }
  .ant-progress-text {
    display: none;
  }
`;

const StyledText = styled.div`
  padding-left: 10px;
  white-space: nowrap;
`;
