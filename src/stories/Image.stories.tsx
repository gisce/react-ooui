import React from "react";

import { Image } from "..";
import { Image as ImageOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Image",
};

export const StockIcon = ({name}): React.ReactElement => {
  const ooui = new ImageOoui({
    name: name,
  });
  return <Image ooui={ooui} />;
};

StockIcon.args = {
  name: "gtk-print"
};
