import React from "react";
import { Divider } from "antd";
import { Separator as SeparatorOoui } from "ooui";

type Props = {
  ooui: SeparatorOoui;
};

export const Separator = (props: Props) => {
  const { ooui } = props;
  const { label } = ooui;

  return <Divider orientation="left" className=" text-sm">{label}</Divider>;
};
