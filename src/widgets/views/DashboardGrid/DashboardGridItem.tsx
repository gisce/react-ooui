import React from "react";
import { DashboardGridItemProps } from "./DashboardGridItem.types";
import { ExpandAltOutlined } from "@ant-design/icons";
import { Card } from "antd";
import styled from "styled-components";

const GrabCard = styled(Card)`
  .ant-card-head {
    cursor: grab;
  }
  .ant-card-body {
    height: 80%;
    padding: 0;
  }
`;

export const DashboardGridItem = (props: DashboardGridItemProps) => {
  const { id, title, children } = props;

  return (
    <GrabCard
      title={title}
      extra={<ExpandAltOutlined style={{ cursor: "pointer" }} />}
      className={"shadow-md rounded"}
      style={{ height: "100%", overflow: "hidden" }}
    >
      <div style={{ height: "100%", display: "flex" }}>{children}</div>
    </GrabCard>
  );
};
