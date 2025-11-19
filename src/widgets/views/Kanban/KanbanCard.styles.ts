import { Card as AntCard } from "antd";
import styled from "styled-components";

export const StyledCard = styled(AntCard)<{
  $bgColor: string;
  $borderColor: string;
  $primaryColor: string;
  $color?: string;
}>`
  position: relative;
  background-color: ${(props) => props.$bgColor};
  border: 1px solid ${(props) => props.$borderColor};
  outline: none;
  outline-offset: -1px;
  overflow: visible;

  .ant-card-body {
    overflow: visible;
  }

  &:hover {
    outline: 3px solid ${(props) => props.$color || props.$primaryColor};
  }
`;

export const ColorBar = styled.div<{ $color: string }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: ${(props) => props.$color};
  border-radius: 7px 0 0 7px;
`;

export const StatusDot = styled.div<{ $color: string }>`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

export const DropIndicator = styled.div<{ $color: string }>`
  height: 3px;
  background-color: ${(props) => props.$color};
  border-radius: 2px;
  margin-bottom: 8px;
  transition: opacity 0.15s ease;
`;
