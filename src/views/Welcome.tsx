import React from "react";
import { Layout, Typography } from "antd";
const { Content } = Layout;
const { Title } = Typography;

function Welcome(): React.ReactElement {
  return (
    <Content className="m-5 select-none">
      <Title level={5}>Welcome</Title>
    </Content>
  );
}

export default Welcome;
