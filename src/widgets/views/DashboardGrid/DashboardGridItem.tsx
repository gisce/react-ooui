import React from "react";
import { DashboardGridItemProps } from "./DashboardGridItem.types";
import { ExpandAltOutlined } from "@ant-design/icons";
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
      extra={<ExpandAltOutlined style={{ cursor: "pointer" }} />}
      className={"shadow-md rounded"}
      style={{ height: "100%", overflow: "hidden" }}
    >
      <div style={{ padding: "2em" }}>{children}</div>
    </GrabCard>
  );
};
