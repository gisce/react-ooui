import React, { useContext } from "react";

import { Integer } from "@/widgets/base/Integer";
import { Row, Space } from "antd";
import { Integer as IntegerOoui } from "ooui";

import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

export function SearchParams(): React.ReactElement {
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const limitOoui = new IntegerOoui({ name: "limit" });
  const offsetOoui = new IntegerOoui({ name: "offset" });
  return (
    <div className="pl-2 pt-2">
      <Row key={"count_params"}>{t("parameters")}</Row>
      <Space align="center">
        {t("limit") + " :"}
        <Integer ooui={limitOoui} />
        {t("first") + " :"}
        <Integer ooui={offsetOoui} />
      </Space>
    </div>
  );
}
