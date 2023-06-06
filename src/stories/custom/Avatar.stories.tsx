import React, {useState} from "react";

import { Avatar as AvatarOoui } from "@gisce/ooui";
import Avatar from "@/widgets/custom/Avatar";
import "antd/dist/antd.css";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Avatar",
};

export const Default = (): React.ReactElement => {
  const ooui = new AvatarOoui({
    name: "user",
    string: "Lorem ipsum",
  });
  const value = "John Wick";
  return (
    <LocaleProvider lang="en_US">
      <Avatar ooui={ooui} value={value} />
    </LocaleProvider>
  );
};




