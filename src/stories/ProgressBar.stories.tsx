import React from "react";

import { ProgressBarInput } from "../widgets/base/ProgressBar";
import { Float as FloatOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/ProgressBar",
};

export const Default = (): React.ReactElement => {
  const ooui = new FloatOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <ProgressBarInput value={50} />
    </LocaleProvider>
  );
};
