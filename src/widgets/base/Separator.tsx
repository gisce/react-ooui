import React from "react";
import { Divider, Space } from "antd";
import { Separator as SeparatorOoui } from "@gisce/ooui";
import iconMapper from "@/helpers/iconMapper";

type Props = {
  ooui: SeparatorOoui;
};

export const Separator = (props: Props) => {
  const { ooui } = props;
  const { label, icon } = ooui;
  const Icon: React.ElementType | undefined = iconMapper(icon || "");

  return (
    <Divider orientation="left" className="text-sm">
      {(Icon || label) && (
        <Space>
          {Icon ? <Icon /> : null}
          {label}
        </Space>
      )}
    </Divider>
  );
};
