import React, { useContext } from "react";
import { Row, Col, Divider, Typography } from "antd";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

const { Title } = Typography;

type Props = {
  children: any;
};

function TitleHeader(props: Props) {
  const { children } = props;
  const { title } = useContext(ActionViewContext) as ActionViewContextType;

  return (
    <>
      <Row
        className="bg-blueGray-100 shadow-md rounded"
        style={{ padding: "2em" }}
        align="middle"
      >
        <Col flex={2}>
          <Title level={3} style={{ marginBottom: 0 }}>
            {title}
          </Title>
        </Col>
        <Col flex={3}>
          <Row justify="end">{children}</Row>
        </Col>
      </Row>
      <div className="pb-5" />
    </>
  );
}

export default TitleHeader;
