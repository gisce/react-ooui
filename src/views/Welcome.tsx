import React, { useContext } from "react";
import { Layout, Typography } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const { Content } = Layout;
const { Title } = Typography;

function Welcome(): React.ReactElement {
  const { t } = useContext(LocaleContext) as LocaleContextType;

  return (
    <Content className="m-5 select-none">
      <Title level={5}>{t("welcome")}</Title>
    </Content>
  );
}

export default Welcome;
