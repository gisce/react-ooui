import React, { useContext } from "react";
import { Layout, Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";

const { Content } = Layout;
const { Title } = Typography;

function Welcome(): React.ReactElement {
  const { t } = useLocale();

  return (
    <Content className="m-5 select-none">
      <Title level={5}>{t("welcome")}</Title>
    </Content>
  );
}

export default Welcome;
