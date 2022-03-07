import React from "react";
import { DashboardGridItemProps } from "./DashboardGridItem.types";
import { ExportOutlined } from "@ant-design/icons";
import { Card } from "antd";
import styled from "styled-components";

const GrabCard = styled(Card)`
  .ant-card-head {
    cursor: grab;
  }
`;

export const DashboardGridItem = (props: DashboardGridItemProps) => {
  const { id, title, children } = props;

  return (
    <GrabCard
      title={title}
      extra={<ExportOutlined style={{ cursor: "pointer" }} />}
      style={{ backgroundColor: "#efefef", height: "100%" }}
    >
      <div style={{ padding: "2em" }}>{children}</div>
    </GrabCard>
  );
};
