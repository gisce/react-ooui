import React, { useState } from "react";

import { FloatTimeInput } from "../widgets/base/FloatTime";
import { Float as FloatOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/FloatTime",
};

export const Default = (): React.ReactElement => {
  const ooui = new FloatOoui({
    name: "field",
    string: "Lorem ipsum",
  });

  const [value, setValue] = useState<number>(1.5);

  return (
    <LocaleProvider lang="en_US">
      <FloatTimeInput
        ooui={ooui}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
      {/* <FloatTime ooui={ooui} showLabel /> */}
    </LocaleProvider>
  );
};
