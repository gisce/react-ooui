import React from "react";
import { Typography } from "antd";

import { Label as LabelOoui } from "ooui";
const { Text } = Typography;

type Props = {
  ooui: LabelOoui;
};

const Label = (props: Props) => {
  const { ooui } = props;

  return <Text>{ooui.label}</Text>;
};

export default Label;
