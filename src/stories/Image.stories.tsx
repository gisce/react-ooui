import React from "react";

import { Image } from "..";
import { Image as ImageOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Image",
};

export const Default = (): React.ReactElement => {
  const ooui = new ImageOoui({
    name: "gtk-print",
  });
  return <Image ooui={ooui} />;
};
