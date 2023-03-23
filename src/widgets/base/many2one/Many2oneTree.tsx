import { Space } from "antd";
import React from "react";
import { Many2oneSuffix } from "./Many2oneSuffix";

export type Many2oneTreeProps = { m2oField: any };

export const Many2oneTree = (props: Many2oneTreeProps): React.ReactElement => {
  const { m2oField } = props;
  if (!m2oField) {
    return <></>;
  }
  return (
    <Space>
      <>{m2oField.value}</>
      <Many2oneSuffix id={m2oField.id} model={m2oField.model} />
    </Space>
  );
};
