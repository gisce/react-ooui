import React, { useState } from "react";

import { BinaryInput } from "../widgets/base/Binary";
import { Binary as BinaryOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Binary",
};

export const Default = (): React.ReactElement => {
  const ooui = new BinaryOoui({
    name: "field",
    string: "Lorem ipsum",
  });

  return (
    <LocaleProvider lang="en_US">
      <BinaryInput ooui={ooui} />
    </LocaleProvider>
  );
};
