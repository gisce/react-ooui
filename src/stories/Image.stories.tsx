import React from "react";

import { Image } from "..";
import { Image as ImageOoui } from "ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Image",
};

export const StockIcon = ({ name }): React.ReactElement => {
  const ooui = new ImageOoui({
    name: name,
  });
  return (
    <LocaleProvider lang="en_GB">
      <Image ooui={ooui} />
    </LocaleProvider>
  );
};

StockIcon.args = {
  name: "gtk-print",
};
