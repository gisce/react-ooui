import React from "react";
import { Label as LabelOoui } from "ooui";

type Props = {
  ooui: LabelOoui;
};

const Label = (props: Props) => {
  const { ooui } = props;
  const style = { textAlign: ooui.align };
  return <p style={style as any}>{ooui.label}</p>;
};

export default Label;
