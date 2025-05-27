import { Space } from "antd";
import React from "react";
import { Many2one as Many2oneOoui } from "@gisce/ooui";
import { Many2oneSuffix } from "./Many2oneSuffix";

export type Many2oneTreeProps = { m2oField: any; ooui: Many2oneOoui };

export const Many2oneTree = (props: Many2oneTreeProps): React.ReactElement => {
  const { m2oField, ooui } = props;
  if (!m2oField) {
    return <></>;
  }
  return (
    <Space>
      <>{m2oField.value}</>
      {ooui.showMenu && (
        <Many2oneSuffix id={m2oField.id} model={m2oField.model} />
      )}
    </Space>
  );
};
