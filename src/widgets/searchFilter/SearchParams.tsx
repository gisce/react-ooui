import React, { useContext } from "react";

import { Integer } from "../base/Integer";
import { Row, Space } from "antd";

import {
  LocalesContext,
  LocalesContextType,
} from "../../context/LocalesContext";

export function SearchParams(): React.ReactElement {
  const { getString } = useContext(LocalesContext) as LocalesContextType;

  return (
    <div className="pl-2 pt-2">
      <Row key={"count_params"}>{getString("parameters")}</Row>
      <Space align="center">
        {getString("limit") + " :"}
        <Integer id={"limit"} />
        {getString("first") + " :"}
        <Integer id={"offset"} />
      </Space>
    </div>
  );
}
