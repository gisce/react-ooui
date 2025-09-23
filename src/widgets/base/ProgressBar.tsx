import { Progress } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import styled from "styled-components";
import { useRef } from "react";

export const ProgressBar = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <ProgressBarInput />
    </Field>
  );
};

export const ProgressBarInput = ({ value }: { value?: number }) => {
  const lastValidValueRef = useRef<number>(0);

  if (value !== undefined) {
    lastValidValueRef.current = value;
  }

  const displayValue = value !== undefined ? value : lastValidValueRef.current;

  const textValue = `${displayValue.toLocaleString("en-US", {
    minimumIntegerDigits: 1,
    maximumFractionDigits: 4,
    useGrouping: false,
  })}%`;

  return (
    <StyledProgressContainer>
      <StyledProgress percent={displayValue} />
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
