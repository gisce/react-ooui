import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";

type Props = {
  children: React.ReactNode[];
};

function Group(props: Props): React.ReactElement {
  const { children } = props;

  return (
    <Row>
      {children!.map((item: any) => {
        return <Col>{item}</Col>;
      })}
    </Row>
  );
}

export default Group;
