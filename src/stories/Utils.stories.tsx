// @ts-ignore
import React from "react";
import { CustomTag } from "../widgets/custom/Tag";
import { colorFromString } from "../helpers/formHelper";

export default {
  title: "Components/Pure",
};

export const CustomTagWithColor = (): React.ReactElement => {
  const text = "Hacker";
  const color = colorFromString(text);
  return <CustomTag color={color}>{text}</CustomTag>;
};
