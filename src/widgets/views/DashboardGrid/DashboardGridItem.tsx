import React from "react";
import { DashboardGridItemProps } from "./DashboardGridItem.types";
import { ExpandAltOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

export const DashboardGridItem = (props: DashboardGridItemProps) => {
  const { id, title, children, action } = props;

  return (
    <div
      className={"shadow-md rounded"}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #eee",
        backgroundColor: "white",
      }}
    >
      <Row
        align="middle"
        style={{ borderBottom: "1px solid #ddd" }}
        wrap={false}
      >
        <Col
          flex="auto"
          className="draggable-head"
          style={{
            fontWeight: "bold",
            padding: "0.5rem",
            cursor: "grab",
            overflow: "hidden",
          }}
        >
          <Text ellipsis={true}>{title}</Text>
        </Col>
        <Col flex="25px" style={{ padding: "0.5rem" }}>
          <Row justify="end" align="middle">
            <ExpandAltOutlined style={{ cursor: "pointer" }} />
          </Row>
        </Col>
      </Row>
      {children}
    </div>
  );
};
