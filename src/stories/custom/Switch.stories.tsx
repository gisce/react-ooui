import React from "react";

import { Switch } from "../../widgets/custom/Switch";
import { Switch as SwitchOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Switch",
};

export const Default = (): React.ReactElement => {
  const ooui = new SwitchOoui({
    name: "enabled",
    string: "Lorem ipsum",
  });

  return (
    <LocaleProvider lang="en_US">
      <Switch ooui={ooui} value={true} />
    </LocaleProvider>
  );
};
