import React, { useContext } from "react";

import { Integer } from "@/widgets/base/Integer";
import { Row, Space } from "antd";
import { Integer as IntegerOoui } from "ooui";

import { LocalesContext, LocalesContextType } from "@/context/LocalesContext";

export function SearchParams(): React.ReactElement {
  const { getString } = useContext(LocalesContext) as LocalesContextType;

  const limitOoui = new IntegerOoui({ name: "limit" });
  const offsetOoui = new IntegerOoui({ name: "offset" });
  return (
    <div className="pl-2 pt-2">
      <Row key={"count_params"}>{getString("parameters")}</Row>
      <Space align="center">
        {getString("limit") + " :"}
        <Integer ooui={limitOoui} />
        {getString("first") + " :"}
        <Integer ooui={offsetOoui} />
      </Space>
    </div>
  );
}
