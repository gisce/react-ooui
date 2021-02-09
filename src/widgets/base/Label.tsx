import React from "react";
import { Typography } from "antd";

import { Label as LabelOoui } from "ooui";

type Props = {
  ooui: LabelOoui;
};

const Label = (props: Props) => {
  const { ooui } = props;

  return <p className="text-center">{ooui.label}</p>;
};

export default Label;
